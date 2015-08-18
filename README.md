# Progress Reporter

This is a heavily fragile progress report generator for my Front End Engineering class at The Iron Yard.


## How it Works

This heavily uses `map` and `reduce` functions to format data from a CSV (passed in to the node command).
This outputs files for every student in your csv file

## Formatting the CSV File

This command heavily relies on you formatting your header row in your CSV.
For this you should precede each header field with one of a few keys:

* `studentName:` - Tells which column is used for listing the student name. This is used to name the final markdown file for this student
* `metrics:` - This is column for a learning metrics to be rated and shown as a list
* `assignments:` - This is a column for a graded assignment. You will have multiple of these columns to be shown as a list.
* `attendance:` - This is a column for attendance records. You will have multiple of these columns to be shown as a list.
* `note:` - This column is used to add personal notes to each email

## LICENSE - MIT

The MIT License (MIT)

Copyright (c) 2015 Ryan Tablada

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
