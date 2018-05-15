# My questions

## Yani/Shruthi loop

### HTML structure / CSS (10min): http://jsfiddle.net/gamell/6xqDj/4/

- Why the "Quisque" is pink and not red? Can you fix it so it is red color and epxlain the process? (did he/she use !important?)

- Do you see anything wrong with the HTMl semantics? You can use HTML5 elements if you know about them

	- H1/H2 instead of <p>
	- <strong> / <b> instead of <spans>
	- <footer> - Will it work in IE8 and older browsers? - What is the advantage of using footer / header (semantic elements) over simple div elements?

- What is the difference between the &copy; and the copyright sign? Do you know about UTF-8?
- Do you have any experience with a CSS pre-compiler?


### Alerts / js execution thread (10mins):  http://jsfiddle.net/gamell/Z5wGY/3/

- Can you tell me why the alerts are displayed in the order they are?

- Do you know what is the document ready event? is it standard?

- Can you change the code so the alert 1 is displayed before alert 3?

- Do you know how many threads are used to run javascript in the browser?

- What would you say is jQuery's main purpose?


### Bug bash (15-25 mins):  http://jsfiddle.net/gamell/82EyZ/4/

- Can you make the alert show only once on click?

- Do you see anything else wrong with the webpage?

	- Duplicate IDs
	- Global var - what if other scripts are included in the same page?
	- "===" / "==" (typeOf, !== null, etc)
	- Missing semicolons
	- we can pass window as parameter to help with the minification
	- return false to cut the click execution (#)

- Why do you think is good to wrap our javascript code in a self-executing function? (Module pattern, emulate OOL, closures, isolation, global vars leak)

- Why the shown location doesn't match with the page address?

- Do you know what is the same-domain policy? Can you explain?


### Compare two pages with Chrome devtools (rest of the time)

http://danlec.com/st4k

vs

http://jsfiddle.net/


- What differences do you see in the loading of the resources? Which is better?

- Do you know about js/css minification and concatenation? What advantages does it bring?

- (Show the sprite of gamell.io) This is an image sprite, do you know what is it? What advantages does it have over using individual images?

Expected:

	- TCP protocol starts slow (14Kb most important)
	- Roundtrips
	- Cache doesn't apply to the first load
	- No feedback to the user something is loading
	- Selective lazy loading

http://gamell.io


- Do you know the difference between rasterized images (jpg) and scalable vector graphics (.ai, .svg)? Can we use the latter in webpages? How? (js canvas, svg in modern browsers, iconic fonts, etc) [show font as hint]

- Can you tell me if the assets of the page is gzipped?

- Do you know what a CDN is? What is the advantage?

- Cookie headers?

## Pratik loop

- What is some of the problems with js scoping? how can we fix it?
- How many threads are there in the browser?
- how can we deal with doing "several things at the same time" (i.e. animating and ajax) in js?
- What is the difference between http and https?
- How would you include a .js in an https page?
- == vs === in js

## Linkedin questions

### General

- What are js events? What is event bubbling?
- What is the problem with event bubbling and how can we fix it (best practice) ? (I didnt know this one)
- What are CSS preprocessors?
- Talk about the different HTTP methods and what they are for.
- What is the rationale to use POST method?
- What downside does passing info on the URL through GET compared to POST. Why?
- What are callbacks?
- What are promises?
- What were the problems with callbacks?

### Prototypes

```
js

function Foo(a){
  function bar() {
    return a;
  };
  this.baz = function(){
    a
  };
}

Foo.prototype = {
  constructor: Foo,
  bax = function(){
    return a;
  }
}

// What will this output?

```

### Object and array modification

```
js

// turn this...

var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];


// into:

[
  {skill: 'css', user: ['Bill', ...], count: 4},
  {skill: 'javascript', user: [...], count: 5}
  ...
]

// SOLUTION

var skills = {};

for(var i = 0; i<endorsements.length; i++) {
   let def = {
       skill: endorsements[i].skill,
       user: [],
       count: 0
   };
   skills[endorsements[i].skill] = skills[endorsements[i].skill] || def;
   var skill = skills[endorsements[i].skill];
   skill.user.push(endorsements[i].user);
   skill.count++;
}

  /*****

  {
      javascript: {
          skill: 'javascript',
          user: [...],
          count: 0
      }
  }

  *******/

  var res = [];

  for(var key in skills){
      if(skills.hasOwnProperty(key)){
          res.push(skills[key]);
      }
  }

console.log(res);

```
