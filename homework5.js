/**1. Given an array. Write a recursive function that removes the first
element and returns the given array. (without using
arr.unshift(),assign second element to first, third element to second...) */

function removeFirstElement(arr) {
    let newArr = [];
    if (arr.length === 0) {
      return [];
    }else{
      for(let i = 0; i < arr.length-1; i++){
        if(arr[i+1]!== 'undefined'){
          removeFirstElement(newArr.push(arr[i+1]))
        } 
      }
    }
    return newArr
  }



  /**2. Given an array of nested arrays. Write a recursive function that
flattens it. (Hint create function that concats arrays). */

function concatArray(arr) {
    if (arr.length === 0) {
      return [];
    }
    return [].concat(
      Array.isArray(arr[0]) ? concatArray(arr[0]) : arr[0],
      concatArray(arr.slice(1))
    );
  }
  
  let arr = [14,[1,[[[3,[]]]],1],0];
  
  let flattenedArr = concatArray(arr);
  console.log(flattenedArr); 



  /**3. Given a number. Write a function that calculates its sum of the digits
and if that sum has more than 1 digit find the sum of digits of that number.
Repeat that process if needed and return the result. */

function sumDigits(num) {
    if (num < 10) {
      return num;
    }
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sumDigits(sum);
  }
  
  let sum = sumDigits(9999999998899);
  console.log(sum)


/**Given the list of the following readers:
[
{ book: 'Catcher in the Rye', readStatus: true, percent: 40},
{ book: 'Animal Farm', readStatus: true, percent: 20},
{ book: 'Solaris', readStatus: false, percent: 90 },
{ book: 'The Fall', readStatus: true, percent: 50 },
{ book: 'White Nights', readStatus: false, percent: 60 } ,
{ book: 'After Dark', readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which
readStatus is true and add ‘%’ char in the end for percent value. */


let sortedArr = arr
  .filter(book => book.readStatus === true)
  .sort((a,b) => a.percent - b.percent)
  .map(el => ({
    book: el.book,
    readStatus: el.readStatus,
    percent: `${el.percent} %`
  }))