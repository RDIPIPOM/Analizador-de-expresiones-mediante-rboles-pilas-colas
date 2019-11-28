import ExpressionResolver from "./ExpressionResolver.js";

var expressionResolver = new ExpressionResolver();

document.querySelector('#btnOK').addEventListener('click', () => {
    let divResult = document.querySelector('#resultado');
    let operationString = document.querySelector('#operationString').value;
    //Put result in HTML
    divResult.innerHTML = 'El resultado es: ' + expressionResolver.resolve(operationString);
});