import ExpressionResolver from "./ExpressionResolver.js";

var expressionResolver = new ExpressionResolver();

document.querySelector('#btnOK').addEventListener('click', () => {
    let operationString = document.querySelector('#operationString').value;
    expressionResolver.resolve(operationString);
});