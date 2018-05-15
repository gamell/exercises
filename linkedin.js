
var endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// problem: code a function that transforms the endorsements into this form:

/*****

{
    javascript: {
        skill: 'javascript',
        user: [...],
        count: 0
    }
}

*******/

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

  var res = [];

  for(var key in skills){
      if(skills.hasOwnProperty(key)){
          res.push(skills[key]);
      }
  }

console.log(res);
