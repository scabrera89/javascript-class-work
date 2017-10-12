//alert("hello world")

var myAdjectives = ["big", "small", "great", "ugly", "intelligent", "curious", "crazy", "smelly", "awesome", "normal"];
var myNouns = ["driver", "aunt", "neighbor", "dog", "mother", "son", "boss", "great-grandad", "nephew", "teacher"];
var myVerb = ["drove", "jumped", "flew", "walked over", "ran over", "pushed", "threw away", "fired", "sent"];
var myPersonalNoun = ["computer", "car", "home", "brain", "mental health", "pencil", "notebook", "cousin", "kids", "keys"];
var myPlace = ["my home", "my bed", "my doctor office", "my school", "car dealer", "theater", "garage"];

var elements = [myAdjectives, myNouns, myVerb, myPersonalNoun, myPlace];
var selectors = ["adjective", "noun", "verb", "personalNoun", "place"];


function clickFunction(){
    for(var i = 0; i < elements.length; i++){
        wordSelectorFromArray(elements[i], selectors[i]);
    }

// wordSelectorFromArray(myAdjectives, "adjective");
// wordSelectorFromArray(myNouns, "noun");
// wordSelectorFromArray(myPersonalNoun, "personalNoun");
// wordSelectorFromArray(myVerb, "verb");
// wordSelectorFromArray(myPlace, "place");

}


function wordSelectorFromArray(theArray, theId){
    
var firstLength = theArray.length-1;
var myRandomNumber = Math.random()*firstLength;
var myRandomNumber = Math.floor(myRandomNumber);

document.getElementById(theId).innerHTML = theArray[myRandomNumber];

}









// var document.getElementById("adjective").innerHTML = [myRandomNumber];



