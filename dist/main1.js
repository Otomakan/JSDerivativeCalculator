"use strict";var derivationMethod=[],rulesUsed=[],vala="1",valb="2";function laTeXed(e){return"$$"+(e=math.parse(e)).toTex({parenthesis:"keep"})+"$$"}function LaTexDeriv(e){var t=math.parse(e.derivative);return"$$\\frac{dn}{du}"+e.func+"(x)="+t.toTex({parenthesis:"keep"})+"$$"}function toHuman(e){return math.format(e,14)}function getDerivative(e){return console.log(math.parse(e)),toHuman(math.derivative(math.parse(e),"x"))}ready(function(){for(var e=document.getElementById("go-button"),t=["0.7x","-1/3x","x + 1","x - 1","-x","x^2","x / (x^2 + 1)","a * (x^2 + b)","x ^ (-1/3)","e ^ (1 - x)","sqrt(x)","root(7, x + 1)","ln(x)","log(x, 8)","abs(x)","sin(x)","cos(x)","tan(x)","arcsin(x)","arccos(x)","arctan(x)","sec(x)","sinh(x)","arsinh(x)","erf(x)","beta(x, y)","e"],n=document.getElementById("operators").querySelectorAll("div"),r=document.getElementById("examples"),a=0;a<n.length-1;a++)n[a].onclick=function(e){"Del"==this.innerHTML?document.getElementById("main-input").value="":document.getElementById("main-input").value+=this.innerHTML};for(a=0;a<t.length-1;a++){var i="document.getElementById('main-input').value='"+t[a].replace(/\s/g,"")+"';document.getElementById('original-function').innerHTML=laTeXed('"+t[a].replace(/ /g,"")+"');MathJax.Hub.Queue(['Typeset',MathJax.Hub,document.getElementById('original-function')]);";r.innerHTML+="<div id='ex"+a+"' onclick="+i+" class='example'>"+t[a]+"</div>",document.getElementById("ex"+a).onclick=function(){document.getElementById("main-input").value+=this.innerHTML.replace(/\s/g,""),document.getElementById("original-function").innerHTML=laTeXed(this.innerHTML.replace(/ /g,"")),MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById("original-function")])}}document.getElementById("show-examples-button").onclick=function(){"show"==r.classList[0]?(r.classList.remove("show"),this.innerHTML="Show Examples"):(r.classList.add("show"),this.innerHTML="Hide Examples")};var o=document.getElementById("main-input");o.addEventListener("input",function(e){o.value=this.value.toLowerCase();var t=document.getElementById("input-first-helper");try{t.innerHTML="",document.getElementById("original-function").innerHTML=laTeXed(this.value.replace(/ /g,"")),o.classList.remove("not-ready")}catch(e){o.classList.add("not-ready");var n=o.getBoundingClientRect();t.style.cssText="top:"+(n.y-20)+"px;left:"+n.x+"px;",t.innerHTML=parseErrorType(e.toString())}MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById("original-function")])}),e.onclick=function(){derivationMethod=[],t="",rulesUsed=[];try{var e=document.getElementById("main-input").value,t=getDerivative(e=inputFirstParser(e),t);document.getElementById("derivative-calculator-errors").innerHTML="",setResultHTML(e,t),fireMathJax(),generateGraph(e,t)}catch(e){throw console.log("hmmm there was an error with your input"),errMessage=parseErrorType(e.toString()),document.getElementById("derivative-calculator-errors").innerHTML=errMessage,e}}});var fireMathJax=function(){var e=document.createElement("script");e.type="text/javascript",e.src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML",document.getElementsByTagName("head")[0].appendChild(e),MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById("results")])};function ready(e){"loading"!=document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&e()})}function inputFirstParser(e,t){t=[[/arccos/g,"acos"],[/arcsin/g,"asin"],[/arctan/g,"atan"]];for(var n=e,r=0;r<t.length;r++)for(var a;a=t[r][0].exec(n);)n=n.splice(a.index,a[0].length,t[r][1]);return n}function checkReplaceConstants(e,t,n){for(var r,a=[[/([@\s#\$%\^\&\+\=\*\(\)\^\/\-](a)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|(^(a)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|([@\s#\$%\^\&\+\=\*\(\)\^\/\-](a)$)/g,vala],[/([@\s#\$%\^\&\+\=\*\(\)\^\/\-](b)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|(^(b)[@\s#\$%\^\&\+\=\*\(\)\^\/\-])|([@\s#\$%\^\&\+\=\*\(\)\^\/\-](b)$)/g,valb]],i=e.replace(/\s/g,""),o=0;o<a.length;o++)if(null!=i.match(a[o][0]))for(;r=a[o][0].exec(i);)i=0==r.index?i.splice(r.index,1,a[o][1]):r.index==i.length+1?i.splice(r.index,1,a[o][1]):i.splice(r.index+1,1,a[o][1]);return i}function lnParser(e){for(var t,n=e,r=new RegExp("ln","g"),a=[];(t=r.exec(n))&&(a.push(t.index),!(1<a.length&&a[a.length-1]<=a[a.length-2]));){var i=findMatchParenthesisPos(n,t.index+2);if(-1==i)throw n=n.splice(i,1,",e)"),new Error("There is not matchingPar");n=n.splice(t.index,2,"log"),console.log(n)}return n}function findMatchParenthesisPos(e,t){for(var n=0,r=t;r<e.length;r++)if("("==e[r]&&(n+=1),")"==e[r]&&(n-=1),0==n)return r;return-1}var generateGraph=function(e,t){var n=checkReplaceConstants(t),r=checkReplaceConstants(e);n=lnParser(n),r=lnParser(r);var a=new RegExp("ln","g");r.match(a)&&(r=XCalc.createExpression(r).formula()),console.log(n),console.log(r),functionPlot({target:"#quadratic",data:[{fn:n,graphType:"polyline",color:"red",range:[-10,10],nSamples:1e3},{fn:r,graphType:"polyline",color:"black",updateOnMouseMove:!0}]})},setResultHTML=function(e,t){var n=math.format(math.simplify(e));document.getElementById("result-function").innerHTML="",document.getElementById("original-function").innerHTML="",document.getElementById("steps-function").innerHTML="",document.getElementById("rules-used").innerHTML="",document.getElementById("original-function").innerHTML=laTeXed(e.replace(/ /g,"")),document.getElementById("original-function-simplified").innerHTML=laTeXed(n);var r=math.format(math.simplify(t));document.getElementById("result-function").innerHTML=laTeXed(t.replace(/ /g,"")),document.getElementById("result-function-simplified").innerHTML=laTeXed(r);for(var a=0;a<derivationMethod.length;a++)document.getElementById("steps-function").innerHTML+=LaTexDeriv(derivationMethod[a]);0==rulesUsed.length&&(document.getElementById("rules-used").innerHTML="No chaining rule used!");for(var i=0;i<rulesUsed.length;i++)document.getElementById("rules-used").innerHTML+=rulesUsed[i]+"\n";var o=document.createElement("BUTTON");o.setAttribute("id","next-derivative"),o.classList.add("btn"),o.classList.add("btn-dark"),o.innerHTML="Next derivative",o.onclick=function(){try{var e=getDerivative(t);document.getElementById("derivative-calculator-errors").innerHTML="",appendResultHTML(t,e,2),fireMathJax(),generateGraph(t,e)}catch(e){throw console.log("hmmm there was an error with your input"),errMessage=parseErrorType(e.toString()),document.getElementById("derivative-calculator-errors").innerHTML=errMessage,e}},document.getElementById("results").appendChild(o)},appendResultHTML=function t(n,r,a){var i=document.createElement("div"),e=document.createElement("h5");e.innerHTML=a+"th derivative",i.setAttribute("id","derivative-result-"+a),i.innerHTML=laTeXed(r.replace(/ /g,"")),document.getElementById("results").insertBefore(e,document.getElementById("next-derivative")),document.getElementById("results").insertBefore(i,document.getElementById("next-derivative")),console.log("originalFunction is "+n),console.log("result function is "+r),document.getElementById("next-derivative").onclick=function(){try{var e=getDerivative(r);document.getElementById("derivative-calculator-errors").innerHTML="",t(r,e,a+1),fireMathJax(),generateGraph(n,r)}catch(e){console.log("There was an error calculating the next derivative")}document.getElementById("results").insertBefore(i,document.getElementById("next-derivative"))}},parseErrorType=function(e){return e.match(/SyntaxError: Parenthesis/g)?"It seems like there is a missing Parenthesis in your function.":e.match(/SyntaxError: Unexpected end of expression/g)?"It seems like your function ends up abruptly.":e.match(/TypeError: Too few arguments in function/g)?"It seems like the "+e.match(/function+\s[a-z][a-z][a-z]/)[0].slice(9,e.length-1)+" function is empty.":e};String.prototype.splice||(String.prototype.splice=function(e,t,n){return this.slice(0,e)+n+this.slice(e+Math.abs(t))});