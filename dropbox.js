/*
Write a function called getByClassname(element, name) that given a DOM element and a CSS classname returns a list of itself and all descendant DOM elements that have that css class.

So that, given:

<div id="root" class="a">
    <div class="b">
        <div class="a">
             <div class="d"></div>
        </div>
        <div class="c">
            <div class="a">
                 <div class="d"></div>
            </div>
        </div>
    </div>
</div>

var element = document.getElementById("root");
getByClassname(element, "a") returns [<div id="root" class="a">...</div>, <div class="a">...</a>, <div class="a">...</a>]
*/

// Div is a simplified DOM div node.
// attributes: object with a single key "class".
// children: optional list of Div node children.
function Div(attributes, children) {
  this.className = attributes["class"];
  this.children = children || [];
  this.parentNode = null;
  for (var child in children) {
    children[child].parentNode = this;
  }
}
Div.prototype.inspect = function() {
  return '<div class="' + this.className + '">' + (this.children ? '...' : '') + '</div>';
}

// Returns a new Div.
function div(attributes, children) {
  return new Div(attributes, children);
}

var element = (
  div({class: "a"}, [
    div({class: "b"}, [
      div({class: "a"}, [
        div({class: "d"})
      ]),
      div({class: "c"}, [
        div({class: "a"}, [
          div({class: "d"})
        ])
      ])
    ])
  ])
);



function getByClassname(elem, name){
  // get children from elem
  var children = elem.children;
  var res = [];
  // add itself if class matches
  if(elem.className.toLowerCase().indexOf(name.toLowerCase()) > -1) {
    res.push(elem);
  }
  // iterate through children and filter by classname
  for(var i = 0; i<children.length; i++){
    res = res.concat(getByClassname(children[i], name));
  }
  return res;
}

console.log(getByClassname(element, "a").length);

/*
Write a function called getByClassnameHierarchy(element, names) that given a DOM element and string of >-separated class names (e.g., "a > b > c") denoting parent-child relationships returns a list of all descendants that satisfy being the last child in the given selector.

So that given:

<div id="root" class="a">
    <div class="b">
        <div class="a">
             <div class="d"></div>
        </div>
        <div class="c">
            <div class="a">
                 <div class="d"></div>
            </div>
        </div>
    </div>
</div>

var element = document.getElementById("root");
getByClassnameHierarchy(element, "a > d") returns [<div class="d">...</div>, <div class="d">...</div>]
*/

// function getFirstElemOfHierarchy(elem, name){

//   if(elem.className.toLowerCase().indexOf(name) > -1){
//     return [elem];
//   }
//   var children = elem.children;
//   for(var i=0; i<children.length; i++){
//     getFirstElemOfHierarchy(children[i], name);
//   }
// }

function getByClassnameHierarchyArr(elem, names, idx){
  if(elem.className.toLowerCase().indexOf(names[idx].toLowerCase()) > -1){
    console.log('idx: '+idx+' name.length: '+names.length)
    if(idx === names.length-1) {
      return [elem];
    }
    else {
      var children = elem.children;
      var res = [];
      for(var i = 0; i<children.length; i++){
        console.log('recursion');
        res = res.concat(getByClassnameHierarchyArr(children[i], names, idx+1));
      }
      return res;
    }
  }
  return [];
}

function getByClassnameHierarchy(elem, names){
  var namesArr = names.split(' > ');
  var firstName = namesArr[0];
  var subSet = getByClassname(elem, firstName);
  var res = [];
  for(var i=0; i<subSet.length; i++){
    res = res.concat(getByClassnameHierarchyArr(elem, namesArr, 0));
  }
  return res;
}

console.log(getByClassnameHierarchy(element, "a > d"));
