
//input and output <textarea> are created in HTML index file and selected in p5js by id with # notation
// page element colors are set in the style.css file
// I take input text and convert it to an array using p5 splitTokens()
// each word of that list is then converted to an array and its elements shuffled
// the results are returned and concatenated to a string of results
// https://bost.ocks.org/mike/shuffle/ Fisher–Yates Shuffle.  is the shuffle I am using
// when I did this in python. I just used python's random.shuffle function for lists


var usrinput;
var output;
var scramButton;

function setup() {
  noCanvas();
  usrinput = select('#input');
  output = select('#output'); //references  the html index file created paragragh <p id = "output"></p>
  scramButton = select('#doit');
  //usrinput.changed(newText); // event listener
  usrinput.input(newType);
  scramButton.mouseClicked(newText);
}

function newText() {
  //console.log(usrinput.value());
  let scramtext =""
  let wordList = splitTokens(usrinput.value(),' \n;.,"');
  console.log(wordList);
  for (let i = 0;i<wordList.length;i++){ 
   
  if (wordList[i].length > 1) { // checks to see if the word has at least two chars
    let scramWord = scram(wordList[i]);
    //output.html(scramWord); // channges the typing output to scram word
    scramtext += scramWord;
    scramtext +="\n"
  } else { // else just prints it   
     scramtext += wordList[i];
     scramtext +="\n"
   //output.html(wordList[i]); //   
  }


}
  output.html(scramtext);
}

function newType() {
  //console.log(usrinput.value());
  output.html(usrinput.value()); // refrences paragrag



}



function scram(word) {
  let aryString = word.split("");
  //console.log(aryString);
  let scramArry = shuffle2(aryString);
  let newWord = scramArry.join("");
  if (newWord == word) { // make shure the scramble and input are not the same
    // console.log("the same", word, newWord);
    newWord = scram(word);

  }
  return newWord

}



function shuffle2(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
