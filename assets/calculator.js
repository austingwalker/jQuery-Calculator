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
      var resultsArr = [];
    
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

    //Operators --------------------------------------------------------------

$("#button-plus").on("click", function(){
    var plus = "+";
  
    
  if(operatorArr.length >= 1){
    return;
  }
   if(isEmpty(firstNum)){
    return;
   } else {
     operatorArr.push(plus);
     operator.append(plus);
   }
  
    
  })
  
  $("#button-minus").on("click", function(){
    var minus = "-";
  
    if(operatorArr.length >= 1){
    return;
  }
  
    if(isEmpty(firstNum)){
    return;
   } else {
    operatorArr.push(minus);
     operator.append(minus);
   }
  
    
  })
  
  $("#button-multiply").on("click", function(){
    var multiply = "x";
  
    if(operatorArr.length >= 1){
    return;
  }
  
    if(isEmpty(firstNum)){
    return;
   } else {
    operatorArr.push(multiply);
     operator.append(multiply);
   }
  
    
  })
  
  $("#button-divide").on("click", function(){
    var divide = "%";
  
    if(operatorArr.length >= 1){
    return;
  }
  
  if(isEmpty(firstNum)){
    return;
   } else {
    operatorArr.push(divide);
     operator.append(divide);
   }
  
    
  })
  
  $("#button-power").on("click", function(){
    var power = "^";
  
    if(operatorArr.length >= 1){
    return;
  }
  
   if(isEmpty(firstNum)){
    return;
   } else {
    operatorArr.push(power);
     operator.append(power);
   }
  
    
  })
  
  $("#button-equal").on("click", function(){
    var result = 0;
  
    
     var sum1 = numOneArr.join('');
     var sum2 = numTwoArr.join('');
  
     var numSum1 = parseInt(sum1);
     var numSum2 = parseInt(sum2);
  
  
  
  console.log("-------------------");
  
  console.log(operatorArr);
  
  console.log("--------------------");
  
  // Results for addition ---------------------------------------------
  if(resultsArr.length >= 1){
    return;
  }
  if (operatorArr[0] === "+"){
    resultsArr.push(result);
    result = numSum1+numSum2;
  
  
    total.append("= " + result);
  
    
  
  // Results for subtraction --------------------------------------------- 
  }
  
  else if (operatorArr[0] === "-"){
    resultsArr.push(result);
    result = numSum1-numSum2;
  
  
    total.append("= " + result);
  
    
  }
  
  // Results for multiplication  ---------------------------------------------
  
  else if (operatorArr[0] === "x"){
    resultsArr.push(result);
    result = numSum1*numSum2;
  
  
    total.append("= " + result);
  
    
  }
  
  // Results for division ---------------------------------------------
  
  else if (operatorArr[0] === "%"){
    resultsArr.push(result);
    result = numSum1/numSum2;
  
  
    total.append("= " + result);
  
    
  }
  
  // Results for power ---------------------------------------------
  
  else if (operatorArr[0] === "^"){
    resultsArr.push(result);
    result = numSum1**numSum2;
  
  
    total.append("= " + result);
  
    
  }
    
  
    console.log(sum1);
    console.log(sum2);
    console.log(result);
  
  
  
    
  })
  
  
  $("#button-clear").on("click", function(){
    
  // Empty div's -------------------------------------------
    firstNum.empty();
    operator.empty();
    secondNum.empty();
    total.empty();
  // Empty array's -------------------------------------
    numOneArr = [];
    numTwoArr = [];
    operatorArr = [];
    resultsArr = [];
  
    
  })

});