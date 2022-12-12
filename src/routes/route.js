const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');





/*---------------------------------- Problem - 1 --------------------------------*/

// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing



router.get('/sol1', function(req, res){

    let arr= [1,2,3,4,6,7,8,9]
    let n = arr.length - 1
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    
    let missingNo = arr[n] * ((arr[n]+1)/2) - sum  // n(n+1/2)
     
    console.log(missingNo)

    res.send(`missing number is : ${missingNo}`)
})
 







/*---------------------------- Problem -2------------------------------------*/
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing

router.get('/sol2', function(req, res){

    let arr= [ 33,34,35,37,38,39,40]
    let n = arr.length + 1
    let sum = 0
     for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    
    let first = arr[0]
    let last = arr[arr.length -1]   
    
    
    let consecative = n * (first + last)/2 
    let missingNo = consecative - sum

    res.send(`missing number is : ${missingNo}`)
})




module.exports = router;