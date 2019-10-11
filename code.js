var config = {
    apiKey: "AIzaSyDsaS-jR8Cuk9k9M2jBlNce7hFUEBloJgs",
    authDomain: "quizly-7883f.firebaseapp.com",
    databaseURL: "https://quizly-7883f.firebaseio.com",
    projectId: "quizly-7883f",
    storageBucket: "",
    messagingSenderId: "237234232839"
  };
  firebase.initializeApp(config);

var myStorage = window.localStorage;
var answerChecked = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var currectAns = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var currect = 0;
var wrong = 0;
var blank = 0;
var score = 0;
var name;

var dataIndex = -1;

function loadQuestion(){
	var q = data[dataIndex];
	document.getElementById('question').innerHTML = 'Q.' + (dataIndex + 1) + ')  ' + q.question;
	document.getElementById('opt1').innerHTML = ' '+q.a;
	document.getElementById('opt2').innerHTML = ' '+q.b;
	document.getElementById('opt3').innerHTML = ' '+q.c;
	document.getElementById('opt4').innerHTML = ' '+q.d;
	document.getElementById('center').innerHTML = (dataIndex+1)+'/'+data.length;
}
function findAnswer(){

	if(document.getElementById('op1').checked == true)
	{
		answerChecked[dataIndex]="a";
	}
	else if(document.getElementById('op2').checked == true)
	{
		answerChecked[dataIndex]="b";
	}
	else if(document.getElementById('op3').checked == true)
	{
		answerChecked[dataIndex]="c";
	}
	else if(document.getElementById('op4').checked == true)
	{
		answerChecked[dataIndex]="d";
	}
}
function checkAnswer(){
	var x = data[dataIndex];
	if(answerChecked[dataIndex] == x.ans){
		currectAns[dataIndex] = "1";
	}
	if (answerChecked[dataIndex] != x.ans) {
		currectAns[dataIndex] = "-1";
	}
	if (answerChecked[dataIndex] == "0") {
		currectAns[dataIndex] = "0";
	}
}
function checkLast(){
	if (answerChecked[dataIndex] != "0") {
		if (answerChecked[dataIndex] == "a") {
			document.getElementById('op1').checked = true;
		}
		if (answerChecked[dataIndex] == "b") {
			document.getElementById('op2').checked = true;
		}
		if (answerChecked[dataIndex] == "c") {
			document.getElementById('op3').checked = true;
		}
		if (answerChecked[dataIndex] == "d") {
			document.getElementById('op4').checked = true;
		}
	}
}
function uncheck(){
		document.getElementById('op1').checked = false;
		document.getElementById('op2').checked = false;
		document.getElementById('op3').checked = false;
		document.getElementById('op4').checked = false;
}
function result(){
	findAnswer();
	checkAnswer();
	document.getElementById('main').style.visibility = "hidden";
	document.getElementById('left').style.visibility = "hidden";
	document.getElementById('result').style.visibility = "visible";
	document.getElementById('right').style.visibility = "hidden";
	for (var i = 0 ; i < data.length ; i++) {
		if (currectAns[i] == "1") {
			currect++;
			score += 10;
		}
		if (currectAns[i] == "-1") {
			wrong++;
			score -= 2;
		}
		if (currectAns[i] == "0") {
			blank++;
		}
	}
	document.getElementById('name').innerHTML = localStorage.getItem('name');
	document.getElementById('currect').innerHTML = currect;
	document.getElementById('wrong').innerHTML = wrong;
	document.getElementById('blank').innerHTML = blank;
	document.getElementById('point').innerHTML = "Score : " + score;

	var messagesRef = firebase.database().ref(localStorage.getItem('subject'));
	var newMessageRef = messagesRef.push();
  		newMessageRef.set({
    name: localStorage.getItem('name'),
    score: score
 	});
}
function loadNextQuestion()
{
	if(dataIndex != -1){
		findAnswer();
		checkAnswer();
	}
	dataIndex++;
	if(dataIndex != 0){
		document.getElementById('left').style.visibility = "visible";
	}
	
	if(dataIndex == data.length -1) {
		document.getElementById('right').style.visibility = "hidden";
	}
	if(dataIndex == data.length) {
		result();
	}
	loadQuestion();
	uncheck();
	checkLast();
}
function loadPreviousQuestion()
{
	findAnswer();
	checkAnswer();
	dataIndex--;
	if (dataIndex == 0) {
		document.getElementById('left').style.visibility = "hidden";
	}
	if (dataIndex != data.length -1) {
		document.getElementById('right').style.visibility = "visible";
		document.getElementById('next').innerHTML = "Next";
	}
	loadQuestion();
	uncheck();
	checkLast();
}
function loadSubject(){
	if (document.getElementById('name').value == ''){
		alert("Enter Name");
	}
	else{
		name = document.getElementById('name').value;
		localStorage.setItem('name', name);
		window.open("subject.html");
	}
	
}
function mathsub(){
	localStorage.setItem('subject', "maths");
}
function astrosub(){
	localStorage.setItem('subject', "astronomy");
}
function physub(){
	localStorage.setItem('subject', "physics");
}
function chesub(){
	localStorage.setItem('subject', "chemistry");
}
function loadQuestiony(){
	var q = data[dataIndex];
	document.getElementById('question').innerHTML = 'Q.' + (dataIndex + 1) + ')  ' + q.question;
	document.getElementById('opt1').innerHTML = ' '+q.a;
	document.getElementById('opt2').innerHTML = ' '+q.b;
	document.getElementById('opt3').innerHTML = ' '+q.c;
	document.getElementById('opt4').innerHTML = ' '+q.d;
	document.getElementById('center').innerHTML = (dataIndex+1)+'/'+data.length;
}
function findAnswery(){

	if(document.getElementById('op1').checked == true)
	{
		answerChecked[dataIndex]="a";
	}
	else if(document.getElementById('op2').checked == true)
	{
		answerChecked[dataIndex]="b";
	}
	else if(document.getElementById('op3').checked == true)
	{
		answerChecked[dataIndex]="c";
	}
	else if(document.getElementById('op4').checked == true)
	{
		answerChecked[dataIndex]="d";
	}
}
function checkAnswery(){
	var x = data[dataIndex];
	if(answerChecked[dataIndex] == x.ans){
		currectAns[dataIndex] = "1";
	}
	if (answerChecked[dataIndex] != x.ans) {
		currectAns[dataIndex] = "-1";
	}
	if (answerChecked[dataIndex] == "0") {
		currectAns[dataIndex] = "0";
	}
}