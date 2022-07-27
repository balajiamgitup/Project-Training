//var menu=require("./menuData.ja");
//Binary search based on user input 
var prompt=require("prompt-sync")();
//Employe data 
var emp=[
    {100:"balaji",
     "Age":22,
    "Salary":20000},
    {
    101:"dinga",
    "Age":25,
    "Salary":50000
    },{
        "102":"dingi",
        "Age":23,
        "Salary":25000
    },
    {
        "103":"bhuvan",
        "Age":29,
        "Salary":60000
    },{
        '104':"Rangi",
        "Age":22,
        "Salary":2000
    },{
        "105":"Ranga",
        "Age":25,
        "Salary":40000
    }]
    //Binary search function()
const binary=(val,arr)=>{
    let low=0;
    let up=arr.length-1;
    var i=0;
    while(low<=up){
        i++;
     var middle=low+Math.floor((up-low)/2);
    //var x=100
   // console.log(val+"  "+arr[middle])
      arr.forEach(element => {
          if(val==element.id)
          {
           if(val===element.id){
            return arr[middle];
        }
       if(val<element.id){
            up = middle-1;
        }else{
            low=middle+1;
        };}
 //console.log(i)
    });
    }

    return -1;
}
//Array to store employee id
var  arr=[100,101,102,103,104,105];
//console.log(emp[4][104]);
//Taking employee id to search perticular employee
  var q=prompt("Enter the employee ID : ");
  var x=binary(parseInt(q),emp);
  console.log(x)
// var s=100;
// //printing selected employee details 
// for(var i=0;i<emp.length;i++){
//     s+=i;
//       if(s===x){
//         console.log(emp[i]);     
//       }
//       s-=i;
//      }
 

