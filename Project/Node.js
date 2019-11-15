export default class Node{
    constructor(value){
        this._value = value;
        this._left = null;
        this._right = null;
    }

    get value(){
        return this._value;
    }

    get left(){
        return this._left;
    }

    get right(){
        return this._right;
    }

    set value(value){
        this._value = value;
    }

    set left(left){
        this._left = left;
    }

    set right(right){
        this._right = right;
    }
}