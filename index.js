var csv = require('csv');
var fs = require('fs');
var handlebars = require('handlebars');

var template = handlebars.compile("{{studentName}},\n\n" +
  "{{note}}\n\n" +
  "### Current Learning Metrics\n\n" +
  "{{#each metrics as |metric|}}" +
  "* {{metric.key}} - {{metric.value}}\n" +
  "{{/each}}" +
  "### Homework Progress\n\n" +
  "{{#each assignments as |assignment|}}" +
  "* {{assignment.key}} - {{assignment.value}}\n" +
  "{{/each}}" +
  "### Attendance\n\n" +
  "{{#each attendance as |day|}}" +
  "* {{day.key}} - {{day.value}}\n" +
  "{{/each}}");


var parser = csv.parse(function(err, data){
  var objs = data.reduce(function(prev, curr, index) {
    if (index === 0) {
      prev.legend = curr;
    } else {
      prev.students.push(curr);
    }

    return prev
  }, {students: []});

  var keys = objs.legend.reduce(function(prev, curr, index) {
    var peices = curr.split(':');
    var key = peices[0];
    var val = peices[1];

    prev.push({key: key, value: val});
    return prev;
  }, []);

  var studentData = objs.students.map(function(student) {
    return student.reduce(function(prev, curr, index) {
      var info = keys[index];

      if (Array.isArray(prev[info.key])) {
        prev[info.key].push({
          key: info.value,
          value: curr
        });
      } else {
        prev[info.key] = curr;
      }

      return prev;
    }, {attendance: [], assignments: [], metrics: []});
  });

  console.log(studentData[0]);

  studentData.forEach(function(student) {
    var filename = __dirname + '/' + student.studentName + '.md';

    var email = template(student);

    fs.writeFileSync(filename, email);
  });
});

fs.createReadStream(__dirname + '/' + process.argv[2]).pipe(parser);
