

ready(function(){
	document.getElementById('derivative-calculator-wrapper').innerHTML = "  <link rel='stylesheet' href='http://jmisteli.com/derivativescalculator/main1.css'>  <script src='http://jmisteli.com/derivativescalculator/main1.js'></script> <link href='https://fonts.googleapis.com/css?family=K2D|Raleway' rel='stylesheet'> <!-- Math.js -->  <script src='http://jmisteli.com/derivativescalculator/math.js'></script>    <!-- D3 and Function Plot -->       <script src='https://unpkg.com/d3@3/d3.min.js'></script>    <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/function-plot/1.18.1/function-plot.js'></script><link rel='icon' href='https://www.google.co.jp/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwi1pPm1rO7dAhUBWLwKHXNFCHIQjRx6BAgBEAU&url=http%3A%2F%2Fwww.my-free-mobile-images.com%2Fimages%2F&psig=AOvVaw06jWKdhchN_szCa1RQYzvt&ust=1538796121037879'><!-- XCalc --><script type='text/javascript' src='http://jmisteli.com/derivativescalculator/XCalc.js'></script><!-- MathJax --><script type='text/javascript' async  src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script><div id='derivative-calculator-wrapper'>  <h1>JavaScript Calculator</h1>  <h1>Test MathJX</h1>  <h2></h2>  <div class='calculator'>    <div class='input-wrapper'>      <div id='input-first-helper'></div>      <input id='main-input' class='math-input' type='text' placeholder='Enter equation here' />       <div id='operators'>            <div>Del</div>          <div>+</div>        <div>-</div>        <div>×</div>        <div>÷</div>        <div>√</div>        <div>^</div>        <div>(</div>        <div>)</div>      </div>      <button id='go-button' class='btn btn-dark'> Calculate</button>    </div>  </div>  <button id='show-examples-button' class='btn btn-dark'> Show Examples</button>  <div id='examples'></div>      <div id='results'>        <div id='derivative-calculator-errors'>        </div>       <div id='text-functions'>          <h4>Original Function</h4>          <div id='original-function'></div>          <h5>Simplified</h5>          <div id='original-function-simplified'></div>          <h4>Differential Rules Used </h4>          <div id='steps-function'></div>          <h4>Chaining Rules Used</h4>          <div id='rules-used'></div>          <h4>Result Function</h4>          <div id='result-function'></div>          <h5>Simplified</h5>          <div id='result-function-simplified'></div>        </div>        <div id='quadratic'></div>      </div>    </div>    </div>"
})
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