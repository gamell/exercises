'use strict';

function Node(data){
  this.data = data;
  this.left = null;
  this.right = null;

  this.insert = function(value){
    if(value <= this.data){
      if(!this.left){
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else { // > data
      if(!this.right) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  this.contains = function(value){
    if(value === this.data){
      return true;
    } else if(value < data){
      return !this.left ? false : this.left.contains(value);
    } else { // right tree
      return !this.right ? false : this.right.contains(value);
    }
  }

  this.print = function(){
    if(Boolean(this.left)){
      this.left.print();
    }
    console.log(this.data);
    if(Boolean(this.right)){
      this.right.print();
    }
  }

  this.treePrint = function(){
    console.log(this.data);
    console.log('/    \\');
    if(Boolean(this.left)){
      console.log('LEFT');
      this.left.treePrint();
    }
    if(Boolean(this.right)){
      console.log('RIGHT');
      this.right.treePrint();
    }
  }

  return this;

}

// we create the tree;

const tree = new Node(10);
tree.insert(5);
tree.insert(3);
tree.insert(1);
tree.insert(12);
tree.insert(29);

tree.treePrint();
