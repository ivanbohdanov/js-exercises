# JavaScript exercises for newbies 

...

### Table of contents

1. [Javascript Basics](#javascript-basics)
    + [Convert temperatures](#convert-temperatures)
    + [Days left to next New Year](#days-left-to-next-new-year)
    + [Find Saturdays](#find-saturdays)
2. [Functions](#functions)
    + [Polymorphic function](#polymorphic-function)
3. [DOM](#dom)
    + [Create table](#create-table)

---

### Javascript Basics

### Convert temperatures

Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

Converting formula:

![alt text](http://www.w3resource.com/w3r_images/javascript-centigrade-to-fahrenheit-exercise-11.png 'Converting formula')

```javascript
function convertCToF() {
  // code ...
}

convertCToF(56) // 122 F
```


### Days left to next New Year

Write a JavaScript program that returne calculated number of days left to next New Year.

```javascript
function calculateDaysToNY() {
  // code ...
}

calculateDaysToNY() // 201
```


### Find Saturdays

Write a JavaScript program to find which 1st January is being a Saturday between a and b years


```javascript
function calculateSaturdays(a, b) {
  // code ...
}

calculateSaturdays(2001, 2020)
```

---

### Functions

### Polymorphic function

Write a JavaScript program that reciev date in several variants in returns value in ``` yyyy-mm-dd``` format

Available arguments: 

+ ```1496851371222 // number```
+ ```'12 January 2017' // string```
+ ```['12 January 2017']// array```
+ ```new Date() // Date object```


```javascript
function reformatDate(date) {
  // code ...
}

reformatDate(1496851371222) // 2017-06-07
```

---

### DOM

### Create Table

Write function that create table with two arguments: amount of columns and rows. Fill out this table with text of the row and column number. Whether any amount of rows and columns, header row should always exist.

```javascript
function createTable(rows, columns) {
  //code ...
}

createTable(3,3)
```
| column 1 | column 2 | column 3 |
|:---:|:---:|:---:|
| 1.1 | 1.2 | 1.3 |
| 2.1 | 2.2 | 2.3 |
| 3.1 | 3.2 | 3.3 |

helpful links:
+ [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
+ [parent.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
+ [document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

