import BinarySearchTree from './BinarySearchTree.js';
import Node from "./Node.js";

export default class ExpressionResolver {
    constructor() {
        this._root = null;
        this._allNodes = "";
    }

    resolve(string) {
        let characters = new Array();
        for (let i = 0; i < string.length; i++) {
            characters.push(new Node(string.charAt(i)));
        }

        for (let i = 0; i < characters.length; i++) {
            if (characters[i] === '*' || characters[i] === '/') {
                characters[i].left = characters[i - 1];
                characters[i].right = characters[i + 1];
                characters.splice(i - 1, 1);
                characters.splice(i + 1, 1);
            }
        }

        for (let i = 0; i < characters.length; i++) {
            if (characters[i] === '+' || characters[i] === '-') {
                characters[i].left = characters[i - 1];
                characters[i].right = characters[i + 1];
                characters.splice(i - 1, 1);
                characters.splice(i + 1, 1);
                console.log('entré');
            }
        }

        console.log(characters);
    }

    inOrder() {
        this._allNodes = '';

        if (this._root != null) {
            this._inOrderRecursive(this._root);
        }

        return this._allNodes;
    }

    _inOrderRecursive(root) {
        if (root != null) {
            this._inOrderRecursive(root.left);
            this._allNodes += root.toString() + '<br>';
            this._inOrderRecursive(root.right);
        }
    }

    preOrder() {
        this._allNodes = '';

        if (this._root != null)
            this._preOrderRecursive(this._root);

        return this._allNodes;
    }

    _preOrderRecursive(root) {
        if (root != null) {
            this._allNodes += root.toString() + '<br>';
            this._preOrderRecursive(root.left);
            this._preOrderRecursive(root.right);
        }
    }

    postOrder() {
        this._allNodes = '';

        if (this._root != null)
            this._postOrderRecursive(this._root);

        return this._allNodes;
    }

    _postOrderRecursive(root) {
        if (root != null) {
            this._postOrderRecursive(root.left);
            this._postOrderRecursive(root.right);
            this._allNodes += root.toString() + '<br>';
        }
    }
}