
var vala = '1';
var valb = '2';
var rulesUsed = [];
var unsupportedPlotDerivatives=[
'ln', 'arccos', 'sec']
// (function() {
  //Parser Convert to human language
  function laTeXed(expression){
 
    expression =   math.parse(expression)
    return '$$'+expression.toTex({parenthesis: 'keep'}) + '$$'
  }
function toHuman(value){
  return math.format(value,14)
}


function getDerivative(originalFunction){
     // var tanReg = new RegExp('tan|gamma', 'g');
     // var lnReg = new RegExp('ln|acos', 'g');
     var result=[]
      result.push(toHuman(math.derivative((math.parse(originalFunction)), 'x')))

  return result
}
  //Fire MathJax
  var fireMathJax=function(){
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML";
  document.getElementsByTagName("head")[0].appendChild(script);
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById('original-function')]);

  MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById('result-function')]);
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById('result-function-simplified')]);
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById('original-function-simplified')]);
 
 
  }
  // "use strict";
ready(function(){
// Shortcut to get elements
  var el = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };
  // Variables

  var inputEl = el("#main-input");// Equal button
  var goButton = el("#go-button");
  var resultFunction = "";
  var originalFunction = ""
  var getInput = function() {
      originalFunction = inputEl.value
      // Look for constants lie a or b because they break Xcal

      var originalSimplified = math.format(math.simplify(originalFunction))
      resultFunction = getDerivative(originalFunction);
      document.getElementById('original-function').innerHTML= laTeXed(originalFunction.replace(/ /g,''))
      document.getElementById('original-function-simplified').innerHTML= laTeXed(originalSimplified)
      
      for(var x=0;x<resultFunction.length;x++){

      var resultSimplified = math.format(math.simplify(resultFunction[x]))
        document.getElementById('result-function').innerHTML += laTeXed(resultFunction[x].replace(/ /g,''))
        document.getElementById('result-function-simplified').innerHTML += laTeXed(resultSimplified)

      }
    fireMathJax();
    console.log(rulesUsed)
    generateGraph();
  }
  
  goButton.onclick = function(){
    getInput()
  }



// Graph function
// Graph Plotting Section
  var generateGraph = function(){
    //Detect if there is a a or b constant and if so replace it with val a or valb in order to plot

    var resultGraphF=checkReplaceConstants(resultFunction[0])
    var originalGraphF = checkReplaceConstants(originalFunction)
   
    // resultGraphF=checkReplaceConstants(resultGraphF)
    // originalGraphF = checkReplaceConstants(originalGraphF)
   resultGraphF=lnParser(resultGraphF)
    originalGraphF = lnParser(originalGraphF)
   
   // The plotting tool is a bid dumb so we have to do some transformations sometimes
    var forbidReg = new RegExp("ln","g");
   if(originalGraphF.match(forbidReg)){
    console.log('found')
      originalGraphF = XCalc.createExpression(originalGraphF).formula()
    }
    console.log(resultGraphF)
    console.log(originalGraphF)
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
      })
  }


})
  
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

//
function checkReplaceConstants(expression, target,replacement){
  // The regs is an array of two array first one with the regex the second with the replace value bit (very) dirty at the moment probably create a function to generate the regex next
   var regs=[
    [/([@\s#\$%\^\&\+\=\*\(\)\^\/\-](a)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|(^(a)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|([@\s#\$%\^\&\+\=\*\(\)\^\/\-](a)$)/g,
    vala],
    [/([@\s#\$%\^\&\+\=\*\(\)\^\/\-](b)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|(^(b)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|([@\s#\$%\^\&\+\=\*\(\)\^\/\-](b)$)/g,
    valb],
   ]
    var result = expression.replace(/\s/g, "");

    var match, indexes= [];
    for(var i=0;i<regs.length;i++){
      if(result.match(regs[i][0])==null){
        continue
      }
      while (match= regs[i][0].exec(result)){
        if(match.index==0){
          result = result.splice(match.index,1,regs[i][1])
        }
        else if(match.index==result.length+1){
          result = result.splice(match.index,1,regs[i][1])
        }
        else{
        result = result.splice(match.index+1,1,regs[i][1])
        }
        console.log(result)
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
    return result
}

function lnParser(expression){
  var result = expression
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
    console.log('match that index is '+ match.index)
    // The +3 takes into consideration ln length
    var matchingPar =findMatchParenthesisPos(result, match.index+2)
    console.log(matchingPar)
    if(matchingPar==-1){
      result = result.splice(matchingPar,1,',e)')
      throw new Error('There is not matchingPar')
    }

    result = result.splice(match.index,2,'log')
      
      console.log(result)
    }
  // result = checkReplaceConstants(result)
  return result
}
function findMatchParenthesisPos(expression,start){
  var open = /\(/;
  var match,indexes=[];
  var openBr = 0;
  var pos = start;
  for(var i=pos; i<expression.length;i++){
    if(expression[i]=='('){
      openBr+=1
    }
    if(expression[i]==')'){
      openBr-=1
    }
    if(openBr==0){
      return i
    }
  }
  return -1
}

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


    