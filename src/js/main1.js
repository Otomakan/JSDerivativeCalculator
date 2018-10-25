

//We are exeecptionaly making derivationMethods  and rulesUsed  global variables because we are accessing it in math.js
let derivationMethod = [];
let rulesUsed = [];
let vala = '1';
let valb = '2'
// global.mathsteps = require('mathsteps')
// let steps = mathsteps.simplifyExpression('2x + 2x + x + x');

// steps.forEach(step => {
//   console.log("before change: " + step.oldNode.toString());   // before change: 2 x + 2 x + x + x
//   console.log("change: " + step.changeType);                  // change: ADD_POLYNOMIAL_TERMS
//   console.log("after change: " + step.newNode.toString());    // after change: 6 x
//   console.log("# of substeps: " + step.substeps.length);      // # of substeps: 3
// });
ready(function(){

  var resultFunction = "";
  var originalFunction = "";
  // Variables
  var goButton = document.getElementById("go-button");

  var exampleList =["0.7x", "-1/3x", "x + 1", "x - 1", "-x", "x^2", "x / (x^2 + 1)", "a * (x^2 + b)", "x ^ (-1/3)", "e ^ (1 - x)", "sqrt(x)", "root(7, x + 1)", "ln(x)", "log(x, 8)", "abs(x)", "sin(x)", "cos(x)", "tan(x)", "arcsin(x)", "arccos(x)", "arctan(x)", "sec(x)", "sinh(x)", "arsinh(x)", "erf(x)", "beta(x, y)","e"];
  var errors=[];

  var operators = document.getElementById('operators').querySelectorAll('div');
  var examplesDiv = document.getElementById('examples');

  // Prepopulate the calculator
  try{
      var inputEl = document.getElementById("main-input");// Equal button
      var originalFunction = inputEl.value;
      originalFunction = inputFirstParser(originalFunction);
      //Calculate the derivative
      var resultFunction = getDerivative(originalFunction,resultFunction);
      //Reset the errors
      document.getElementById('derivative-calculator-errors').innerHTML= '';
      //Write the results in the HTML
      setResultHTML(originalFunction, resultFunction);
      fireMathJax();
      document.getElementById('derivative-calculator-errors').innerHTML= '';
      generateGraph(originalFunction,resultFunction);
    }
    //Catching potential errors and parsing some of them with Regex in order to have some nice rendering
    catch(err){
        let errMessage = parseErrorType(err.toString());
        if(errMessage.match(/MathJax is not defined/))
          console.log('if MathJax error it\'s ok')
        else
         throw err;
    } 
  //We use this function in order to put the sign in the input when clicked
  for(var i=0;i<operators.length-1;i++){
    operators[i].onclick = function(e){
      if(this.innerHTML=="Del"){
        document.getElementById('main-input').value = '';
      }
      else{
        document.getElementById('main-input').value += this.innerHTML;
      }
    }
  }
  //Put the examples from the example list into the input field
  for (var i =0; i<exampleList.length-1;i++){
    var onClickString = "document.getElementById('main-input').value='"+exampleList[i].replace(/\s/g, "")+"';"+"document.getElementById('original-function').innerHTML=laTeXed('"+exampleList[i].replace(/ /g,'')+"');"+"MathJax.Hub.Queue(['Typeset',MathJax.Hub,document.getElementById('original-function')]);";
    examplesDiv.innerHTML += "<div id='ex"+i+"' onclick="+onClickString+" class='example'>"+exampleList[i]+"</div>";
    //Adds the example in the result section
    document.getElementById('ex'+i).onclick=function(){
    document.getElementById('main-input').value+=this.innerHTML.replace(/\s/g, "");
    document.getElementById('original-function').innerHTML= laTeXed(this.innerHTML.replace(/ /g,''));
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById('original-function')]);
    }
  }

  document.getElementById('show-examples-button').onclick = function(){
    if(examplesDiv.classList[0]=='show'){
      examplesDiv.classList.remove("show");
      this.innerHTML = "Show Examples";
    }
    else{
      examplesDiv.classList.add("show");
      this.innerHTML = "Hide Examples";
    }
  }
  //End 'show-examples-button').onclick

  //Listen to Changes to the input
  var mainInput =  document.getElementById('main-input');
  mainInput.addEventListener('input', function(e){
    mainInput.value = this.value.toLowerCase();
    var helper = document.getElementById('input-first-helper');
    try{
      helper.innerHTML = "";
     document.getElementById('original-function').innerHTML= laTeXed(this.value.replace(/ /g,'')); 
     mainInput.classList.remove('not-ready');
    }
    catch(err){
      mainInput.classList.add('not-ready');
      var coordinates = mainInput.getBoundingClientRect();
      
      helper.style.cssText = "top:"+(coordinates.y-20)+"px;left:"+coordinates.x+"px;";
      helper.innerHTML= parseErrorType(err.toString());
    }

      MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById('original-function')]);
  })

  //Calculate the derivative after the Calculate Button is clicked
  goButton.onclick = function(){
    derivationMethod = [];
    resultFunction="";
    rulesUsed=[];
    //Deleting traces of results
    
    let nextButton = document.getElementById('next-derivative')
    if(nextButton){
      nextButton.remove()
      
      document.getElementById('secondary-results').innerHTML=""
      
    }

    // results.childNodes.forEach((node)=> {node.childNodes.forEach((bbnode)=>{if(bbnode.tagName=="DIV"){bbnode.innerHTML=""}})})
    try{
      var inputEl = document.getElementById("main-input");// Equal button
      var originalFunction = inputEl.value;

      originalFunction = inputFirstParser(originalFunction);
      //Calculate the derivative
      var resultFunction = getDerivative(originalFunction,resultFunction);

      //Reset the errors
      document.getElementById('derivative-calculator-errors').innerHTML= '';
      //Write the results in the HTML
      setResultHTML(originalFunction, resultFunction);
      
      document.getElementById('derivative-calculator-errors').innerHTML= '';
      fireMathJax();
      generateGraph(originalFunction,resultFunction);
    }
    //Catching potential errors and parsing some of them with Regex in order to have some nice rendering
    catch(err){
        console.log('hmmm there was an error with your input')
        let errMessage = parseErrorType(err.toString());
         document.getElementById('derivative-calculator-errors').innerHTML= errMessage;
        throw err;
    } 
  }
  //End goButton.onclick
  document.getElementById('clear-all-button').onclick=()=>{
    document.getElementById('main-input').value = '';
  }
  //End clear-all-button

    //VISUAL COMPONENTS
  //Handling events due to scrolling
    window.onscroll = function (e) {  
    // called when the window is scrolled. 
      // console.log(e)
    document.getElementById('calculator').style.top = ((window.pageYOffset || window.scrollTop)/16) - (window.clientTop || 0)+ 5 +'em'
     document.getElementById('calculator').style.position = 'relative'
      
    } 
})


// }
  //Parser Convert to human language
  function laTeXed(expression){
 
    expression =   math.parse(expression);
    var final =  '$$'+expression.toTex({parenthesis: 'keep'}) + '$$';
    return final;
  }
  function LaTexDeriv(expression){
    // var base = math.parse(expression.func)
    let {derivative,func,xvalue}=expression
    derivative = math.parse(expression.derivative).toTex({parenthesis: 'keep'})
    func = math.parse(func).toTex({parenthesis: 'keep'})
    xvalue = xvalue.toTex({parenthesis:'keep'})
    // derivative = derivative.replace(/x/g,xvalue)
    return '$$\\frac{dn}{du}'+func+'(x)='+derivative + '$$';
  }

  function laTexChainRule(expressions){
    console.log(expressions)
    let {orig,derivRule, rest}=expressions
    return '$$\\frac{dn}{du}'+orig.toTex()+"="+derivRule.toTex()+" . \\frac{dn}{du}"+rest.toTex()+'$$'
  }
function toHuman(value){
  return math.format(value,14);
}


function getDerivative(originalFunction){
  // console.log(math.parse(originalFunction));
  return toHuman(math.derivative((math.parse(originalFunction)), 'x'));
}
  //Fire MathJax
  var fireMathJax=function(){
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML";
  document.getElementsByTagName("head")[0].appendChild(script);
   MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById('results')]);
  }

//Thanks to http://youmightnotneedjquery.com/#ready
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

function inputFirstParser(expression, targets){
  // targets [0] is the thing we watn to change, and target [1]is what we want to change it to
  var targets = [
    [/arccos/g,'acos'],[/arcsin/g,'asin'],[/arctan/g,'atan']
  ];
   var result=expression;
  for(var i=0;i<targets.length;i++){
      var match;
      //We detect the matches and for each appearance we splice with our special splice function,
       // cut by the length of the found and replace with target[1]
      while (match= targets[i][0].exec(result)){
        // if(match.index==0){
          result = result.splice(match.index,match[0].length,targets[i][1]);

    }
    }
     return result
}
//
function checkReplaceConstants(expression, target,replacement){
  // The regs is an array of two array first one with the regex the second with the replace value bit (very) dirty at the moment probably create a function to generate the regex next
   var regs=[
    [/([@\s#\$%\^\&\+\=\*\(\)\^\/\-](a)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|(^(a)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|([@\s#\$%\^\&\+\=\*\(\)\^\/\-](a)$)/g,
    vala],
    [/([@\s#\$%\^\&\+\=\*\(\)\^\/\-](b)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|(^(b)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|([@\s#\$%\^\&\+\=\*\(\)\^\/\-](b)$)/g,
    valb],
   ];
    var result = expression.replace(/\s/g, "");

    var match, indexes= [];
    for(var i=0;i<regs.length;i++){
      if(result.match(regs[i][0])==null){
        continue;
      }
      while (match= regs[i][0].exec(result)){
        if(match.index==0){
          result = result.splice(match.index,1,regs[i][1]);
        }
        else if(match.index==result.length+1){
          result = result.splice(match.index,1,regs[i][1]);
        }
        else{
        result = result.splice(match.index+1,1,regs[i][1]);
        }
    }
    }
    //Can potentially be used but wonky now
    // if(replacement&&target){
    //   var reg = ('('+target+')');
    //   var match, indexes= [];
    //   for(var i=0;i<regs.length;i++){
    //     while (match= regs[i][0].exec(result)){
    //       result = result.splice(match.index,1,replacement)
    //     }
    //     console.log(result)
    //   }
    // }
    return result;
}

function lnParser(expression){
  var result = expression;
  var checkln = new RegExp('ln','g');
  // var checkGama = new RegExp('gamma','g');

  var match, indexes= [];
  while (match= checkln.exec(result)){
    indexes.push(match.index)
    if(indexes.length>1){
      if(indexes[indexes.length-1]<= indexes[indexes.length-2]){
        break;
      }
    }
    // The +3 takes into consideration ln length
    var matchingPar =findMatchParenthesisPos(result, match.index+2);
    if(matchingPar==-1){
      result = result.splice(matchingPar,1,',e)')
      throw new Error('There is not matchingPar');
    }

    result = result.splice(match.index,2,'log');
      
      console.log(result);
    }
  // result = checkReplaceConstants(result)
  return result;
}
function findMatchParenthesisPos(expression,start){
  var open = /\(/;
  var match,indexes=[];
  var openBr = 0;
  var pos = start;
  for(var i=pos; i<expression.length;i++){
    if(expression[i]=='('){
      openBr+=1;
    }
    if(expression[i]==')'){
      openBr-=1;
    }
    if(openBr==0){
      return i;
    }
  }
  return -1;
};
// Graph function
// Graph Plotting Section
  var generateGraph = function(originalFunction,resultFunction){
    //Detect if there is a a or b constant and if so replace it with val a or valb in order to plot

    var resultGraphF=checkReplaceConstants(resultFunction);
    var originalGraphF = checkReplaceConstants(originalFunction);
   
    // resultGraphF=checkReplaceConstants(resultGraphF)
    // originalGraphF = checkReplaceConstants(originalGraphF)
   resultGraphF=lnParser(resultGraphF);
    originalGraphF = lnParser(originalGraphF);
   
   // The plotting tool is a bid dumb so we have to do some transformations sometimes
    var forbidReg = new RegExp("ln","g");
   if(originalGraphF.match(forbidReg)){
      originalGraphF = XCalc.createExpression(originalGraphF).formula()
    }
    console.log(resultGraphF);
    console.log(originalGraphF);
      functionPlot({
      target: '#quadratic',
      data: [
      {
          fn: resultGraphF,
          graphType: 'polyline',
          color:'red',
          range:[-10,10],
          nSamples: 1000
          },
          {
          fn: originalGraphF,
          graphType: 'polyline',
          color:'black',
          updateOnMouseMove:true
          }
        
      ],
      });
  };

var setResultHTML = function(originalFunction, resultFunction){

  var originalSimplified = math.format(math.simplify(originalFunction));
  //reset the innerHTML
  document.getElementById('result-function').innerHTML ='';
  document.getElementById('original-function').innerHTML='';
  document.getElementById('steps-function').innerHTML='';
  document.getElementById('rules-used').innerHTML='';

  //Display Original Function in Latex Form

  document.getElementById('original-function').innerHTML=laTeXed(originalSimplified);
  
  //Display result Function in Latex Form
  var resultSimplified = math.format(math.simplify(resultFunction));
  document.getElementById('result-function').innerHTML = laTeXed(resultFunction.replace(/ /g,''));
  document.getElementById('result-function-simplified').innerHTML = laTeXed(resultSimplified);
  

  for(let x=0;x<derivationMethod.length;x++){
    document.getElementById('steps-function').innerHTML += LaTexDeriv(derivationMethod[x]);
  }
  if(rulesUsed.length==0){
     document.getElementById('rules-used').innerHTML = "No chaining rule used!";
  }
  for(let x=rulesUsed.length-1;x>=0;x--){
    document.getElementById('rules-used').innerHTML += 'By applying the chain rule,'+ laTexChainRule(rulesUsed[x])+'<br/>';
  }
  // fireMathJax()
  var nextFunctionBtn = document.createElement("BUTTON");
  nextFunctionBtn.setAttribute('id','next-derivative');
  nextFunctionBtn.classList.add('btn');
  nextFunctionBtn.classList.add('btn-dark');
  nextFunctionBtn.innerHTML="Next derivative";
  nextFunctionBtn.onclick = function(){
    try{
      //Calculate the derivative
      var newResultFunction = getDerivative(resultFunction);
      //Reset the errors
      document.getElementById('derivative-calculator-errors').innerHTML= '';
      //Write the results in the HTML
      appendResultHTML(resultFunction, newResultFunction,2);
      fireMathJax();
      generateGraph(resultFunction,newResultFunction);
    }
    //Catching potential errors and parsing some of them with Regex in order to have some nice rendering
    catch(err){
        console.log('hmmm there was an error with your input')
        let errMessage = parseErrorType(err.toString());
         document.getElementById('derivative-calculator-errors').innerHTML= errMessage;
        throw err;
    } 
  }
  document.getElementById('results').appendChild(nextFunctionBtn);
}

var appendResultHTML = function(originalFunction, resultFunction, iteration){
  var newResult = document.createElement("div");
  var newResultTitle = document.createElement("h5")
  switch(iteration){
    case 2:
      newResultTitle.innerHTML = "2nd derivative"
      break;
    case 3:
      newResultTitle.innerHTML = "3rd derivative"
      break;
    default:
      newResultTitle.innerHTML = iteration + 'th derivative'
  }

  newResult.setAttribute('id','derivative-result-'+iteration);
  newResultTitle.classList.add('secondary-derivative-result-title');
  newResult.classList.add('secondary-derivative-result');

  newResult.classList.add('mathjax-container');
  newResult.innerHTML = laTeXed(resultFunction.replace(/ /g,''))
  // nextFunctionBtn.setAttribute('id','next-derivative');
  document.getElementById('secondary-results').appendChild(newResultTitle)
  document.getElementById('secondary-results').appendChild(newResult)
  // console.log("originalFunction is " + originalFunction);
  // console.log("result function is " + resultFunction);
  // Check how many derivative ups we calculated if iteration is < 5 then we allow for the calculation of a new derivative.
    if(iteration<5){
      document.getElementById('next-derivative').onclick = function(){
      try{
        //Calculate the derivative
        var newResultFunction = getDerivative(resultFunction);
        //Reset the errors
        document.getElementById('derivative-calculator-errors').innerHTML= '';
        //Write the results in the HTML 
          appendResultHTML(resultFunction, newResultFunction, iteration+1);
         fireMathJax();
         generateGraph(originalFunction,resultFunction);
        
      }
      catch(err){
        console.log("There was an error calculating the next derivative");
      }
    }
  }
  else{
        //Display a "no more" message
        let noMore = document.createElement('h5')
        noMore.innerHTML="We can't calculate more than 5 derivatives up"
        //We replace the net derivative button with a message saying we reached the limit
        document.getElementById('results').removeChild(document.getElementById('next-derivative'))
       document.getElementById('results').appendChild(noMore)
      
  }
}

var parseErrorType = function(str){
        if(str.match(/SyntaxError: Parenthesis/g)){
         return "It seems like there is a missing Parenthesis in your function.";
        }
        if(str.match(/SyntaxError: Unexpected end of expression/g)){
          return "It seems like your function ends up abruptly.";
        }
        if(str.match(/TypeError: Too few arguments in function/g)){
          //Detects the name of the empty function
          var pbErr= str.match(/function+\s[a-z][a-z][a-z]/)[0].slice(9, str.length-1);
          return "It seems like the "+ pbErr +" function is empty.";
        }
        else{
          return str;
        }
}
//SPECIAL STRING SPLICER
// Takes in 3 arguments, 
//{expression}the expression you are trying to check
//{regEx} the value you are trying to find
//{replacement} the value you want to replace the found regEx by
// function regexCheckerReplacer(expression, regEx, replacement){
//   var result = expression
//    var match, indexes= [];
//    while (match= regEx.exec(expression)){
//       result = result.splice(match.index,5,replacement)
//       var matchingPar =findMatchParenthesisPos(result, match.index)
//       result = result.splice(matchingPar,1,',e)')
//     }
//     return result
// }

// cusotm Replace function from https://stackoverflow.com/questions/9932957/how-can-i-remove-a-character-from-a-string-using-javascript and https://stackoverflow.com/questions/4313841/javascript-how-can-i-insert-a-string-at-a-specific-index
if (!String.prototype.splice) {
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
}


    