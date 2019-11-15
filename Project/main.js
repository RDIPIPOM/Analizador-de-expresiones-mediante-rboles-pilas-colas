import BinarySearchTree from "./BinarySearchTree.js";
import Product from "./Product.js";

var inventory = new BinarySearchTree();
var tagArticle = document.querySelector('#articleReport');

//Button Add
document.querySelector('#btnAdd').addEventListener('click', () => {
    //Get information
    let code = Number(document.querySelector('#code').value);
    let name = document.querySelector('#name').value;
    let cost = Number(document.querySelector('#cost').value);
    let stock = Number(document.querySelector('#stock').value);
    let description = document.querySelector('#description').value;

    //Add product
    inventory.add(new Product(code, name, cost, stock, description));
});
//Button query
document.querySelector('#btnQuery').addEventListener('click', () => {

});

//////////////////
//Buttons report//
//////////////////

//In Order
document.querySelector('#btnReportInOrder').addEventListener('click', () => {
    tagArticle.innerHTML = '';
    tagArticle.innerHTML = inventory.inOrder();
});
//Pre Order
document.querySelector('#btnReportPreOrder').addEventListener('click', () => {
    tagArticle.innerHTML = '';
    tagArticle.innerHTML = inventory.preOrder();
});
//Post Order
document.querySelector('#btnReportPostOrder').addEventListener('click', () => {
    tagArticle.innerHTML = '';
    tagArticle.innerHTML = inventory.postOrder();
});