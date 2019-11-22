import BinarySearchTree from './BinarySearchTree.js';
import Node from "./Node.js";

export default class ExpressionResolver {
    constructor() {
        this._root = null;
        this._allNodes = null;
    }

    resolve(string) {
        let characters = new Array();

        //Fill array with all characters
        for (let i = 0; i < string.length; i++) {
            characters.push(new Node(string.charAt(i)));
        }
        //Make the tree
        for (let i = 1; i < characters.length - 1; i++) {
            if (characters[i].value === '*' || characters[i].value === '/') {
                characters[i].left = characters[i - 1];
                characters[i].right = characters[i + 1];
                characters.splice(i - 1, 1);
                characters.splice(i, 1);
                i--;
            }
        }

        for (let i = 1; i < characters.length - 1; i++) {
            if (characters[i].value === '+' || characters[i].value === '-') {
                characters[i].left = characters[i - 1];
                characters[i].right = characters[i + 1];
                characters.splice(i - 1, 1);
                characters.splice(i, 1);
                i--;
            }
        }

        this._stack = new Array();
        this._preOrderRecursive(characters[0]);
        console.log(this._stack);
    }

    _preOrderRecursive(root) {
        if (root != null) {
            this._stack.push(root.value);
            this._preOrderRecursive(root.left);
            this._preOrderRecursive(root.right);
        }
    }
}