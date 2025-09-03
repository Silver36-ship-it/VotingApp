var prompt = require('prompt-sync')();
votersNames = []
votersAge = []
voterState = []
let candidatesVotes = {
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0
				};



function displayCanditates(){
	display = 
		`	'''''''''''''''''''''''''''''
			  1. Peter Obi (LP Party)
			  2. Silver (PDP Party)
			  3. Fashola (ADC Party)
			  4. Mike Tyson (APC Party)
			  5. Adamu (NPP Party)
			'''''''''''''''''''''''''''''
			 `
	return display	}		
		
function displayMenu(){
	display =
			`======================================
			  WELCOME TO THE VOTING SYSTEM APP!!!
			''''''''''''''''''''''''''''''''''''''''
			  1. Candidates availabe to vote for
			  2. Voter Registration
			  3. Election result
			  4. Exit
			 ======================================
			  `
	return display}
		
function displayVotesPage(){
	display =
			`===================================
				**WELCOME TO VOTERS PAGE**
				     Click any number
				to Commence registration
			====================================
		`
		return display}
		
function votersReg(){
	console.log(displayVotesPage())
		let displayInput = parseInt(prompt("Enter any number:"))
		if(typeof(displayInput) !== Number){
		console.log("Invalid")} 
	while(true){
	var userInput = prompt("Enter your fullname:")
	let age = parseInt(prompt("Enter your Age:"))
	if(age < 18){
		console.log("Invalid age")
		continue;}	
	
	votersAge.push(age)
	votersNames.push(userInput)
	
	var userInput2 = prompt('Enter your state of origin:')
		voterState.push(userInput2)
	var userInput3 = prompt('Got any other candidate to register?(yes/no)')
		if(userInput3.toLowerCase() === 'yes'){
			continue;}
		else if(userInput3.toLowerCase() === 'no'){ 
			break;}
		else{
			console.log("Please enter yes or no!")
			continue;}
		}
		console.log("Successfully completed registration!")
	}
	
function voteProcess(){
	console.log(displayCanditates())
	var inputOption1 = prompt('Are you eligible to vote?(yes/no)')
		if(inputOption1.toLowerCase() !== 'yes'){
			console.log("Please go back to the voters page and register");
			return;}
	var inputOption2 = prompt('Enter your name:')
		if(!votersNames.includes(inputOption2)){
			console.log("Name not found in our database");
			return;}
	console.log("You are eligible to vote!")
	console.log(displayCanditates())
	var inputOption3 = parseInt(prompt('Press any of the options to vote for your candidate:'))			
	if(inputOption3 !== null){
		candidatesVotes[inputOption3] += 1;
		console.log("Voted successfully")}
	else{
		console.log("Invalid candidate input");}
		}
		
function electionResult(){
	console.log(`1. Peter Obi(LP Party): ${candidatesVotes[1]} votes`);
	console.log(`2. Silver(PDP Party): ${candidatesVotes[2]} votes`);
	console.log(`3. Fashola(ADC Party): ${candidatesVotes[3]} votes`);
	console.log(`4. Mike Tyson(APC Party): ${candidatesVotes[4]} votes`);
	console.log(`5. Adamu(NPP Party): ${candidatesVotes[5]} votes`);
	
	let largest = candidatesVotes[1]

	for(index in candidatesVotes){
	if(largest < candidatesVotes[index]){
		largest = candidatesVotes[index]
		}
		}
	console.log("The highest is " + largest + " votes")
	}

let userInput;
while(userInput != 4){
	console.log(displayMenu())
		userInput = parseInt(prompt('Enter an Option:'))	
	switch(userInput){
		case 1: 
			voteProcess()
			break;
		case 2:
			votersReg()
			break;
		case 3:
			electionResult()
			break;
		case 4:
			console.log("Alright Bye!")
			break;
		default:	
			console.log("Invalid input")
			}
			}
			