$(document).ready(function() {

    // Global Variables
    
      var firstNum = $("#first-number");
      var secondNum = $("#second-number");
      var operator = $("#operator");
      var total = $("#result");
    
    //Number buttons -----------------------------------------------------------------------------------
      var numOneArr = [];
      var numTwoArr = [];
      var operatorArr = [];
    
     function isEmpty( el ){
          return !$.trim(el.html())
      }
    
      
    
    $("#button-1").on("click", function(){
      var one = 1;
      
    
     if(isEmpty(operator)){
       numOneArr.push(one)
      firstNum.append(one);
    
      console.log(numOneArr);
     } else {
       numTwoArr.push(one);
       secondNum.append(one);
    
       console.log(numTwoArr);
     }
     
      
    })
    
    $("#button-2").on("click", function(){
      var two = 2;
    
       if(isEmpty(operator)){
         numOneArr.push(two);
      firstNum.append(two);
      console.log(numOneArr);
     } else {
      numTwoArr.push(two);
       secondNum.append(two);
    
       console.log(numTwoArr);
     }
    
      
    })
    
    $("#button-3").on("click", function(){
      var three = 3;
      
      if(isEmpty(operator)){
        numOneArr.push(three);
      firstNum.append(three);
      console.log(numOneArr);
     } else {
      numTwoArr.push(three);
       secondNum.append(three);
    
       console.log(numTwoArr);
     }
    
    })
    
    $("#button-4").on("click", function(){
      var four = 4;
    
       if(isEmpty(operator)){
        numOneArr.push(four);
      firstNum.append(four);
      console.log(numOneArr);
     } else {
      numTwoArr.push(four);
       secondNum.append(four);
    
       console.log(numTwoArr);
     }
    
      
    })
    
    $("#button-5").on("click", function(){
      var five = 5;
    
       if(isEmpty(operator)){
        numOneArr.push(five)
      firstNum.append(five);
      console.log(numOneArr);
     } else {
       numTwoArr.push(five);
       secondNum.append(five);
    
       console.log(numTwoArr);
     }
    
      
    })
    
    $("#button-6").on("click", function(){
      var six = 6;
    
       if(isEmpty(operator)){
        numOneArr.push(six);
      firstNum.append(six);
      console.log(numOneArr);
     } else {
      numTwoArr.push(six);
       secondNum.append(six);
    
       console.log(numTwoArr);
     }
      
    })
    
    $("#button-7").on("click", function(){
      var seven = 7;
    
       if(isEmpty(operator)){
        numOneArr.push(seven);
      firstNum.append(seven);
      console.log(numOneArr);
     } else {
      numTwoArr.push(seven);
       secondNum.append(seven);
    
       console.log(numTwoArr);
     }
      
    })
    
    $("#button-8").on("click", function(){
      var eight = 8;
    
       if(isEmpty(operator)){
        numOneArr.push(eight);
      firstNum.append(eight);
      console.log(numOneArr);
     } else {
      numTwoArr.push(eight);
       secondNum.append(eight);
    
       console.log(numTwoArr);
     }
    
      
    })
    
    $("#button-9").on("click", function(){
      var nine = 9;
    
       if(isEmpty(operator)){
        numOneArr.push(nine);
      firstNum.append(nine);
      console.log(numOneArr);
     } else {
      numTwoArr.push(nine);
       secondNum.append(nine);
    
       console.log(numTwoArr);
     }
    
      
    })
    
    $("#button-0").on("click", function(){
      var zero = 0;
    
      if(isEmpty(operator)){
        numOneArr.push(zero);
      firstNum.append(zero);
      console.log(numOneArr);
     } else {
      numTwoArr.push(zero);
       secondNum.append(zero);
    
       console.log(numTwoArr);
     }
    
      
    })

});