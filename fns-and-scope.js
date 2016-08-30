//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
  if(name === 'Tyler') {
    return true;
  }
  return false;
}

//G: Perfecto.

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName() {
    return prompt('What is your name?');
  }
//G: Perfecto.

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome() {
    var name = getName();
    alert('Welcome, ' + name);
  }
//G: Perfecto.

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  Parameters are the words in the () before a function opens its curly brackets. They are part of the methods signature. Arguments are the data that are called to replace the parameter when a method is called.
  //G: AHHHHH WHERES THE ANSWER?!?!?!?!?!??!?!?!??!?!?!??!?!?!??!?!?!?!?!??!?!?!?!??????
  //G: :)

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
 /*
 0 , Null , undefined , NaN , false , ""
 */

//G: Awww yiiisssss.

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
    return 'Talon';
  }
//G: Best name in class award 2016.

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;
//Now alert the result of invoking newMyName
  alert(newMyName());

//G: Nailed it.

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn() {
  return function() {
    return 'Talon';
  }
}
//G: Perfecto.

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();
//Now invoke innerFn.
  innerFn();

//G: Crushed it man. You DID miss a question though. FIX IT NAO!
