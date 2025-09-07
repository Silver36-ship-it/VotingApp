var prompt = require('prompt-sync')();

all_books = {
		1 : "available",
		2 : "available",
		3 : "available",
		4 : "available",
		5 : "available"
		}

			
function display_books(){
		console.log("LIST OF BOOKS IN OUR LIBRARY")
		console.log(`1. How to be a millionaire in two days: ${all_books[1]}`)
		console.log(`2. Obi goes to school: ${all_books[2]}`)
		console.log(`3. Positive mindset: ${all_books[3]}`)
		console.log(`4. Software engineering lifestyle: ${all_books[4]}`)
		console.log(`5. Learn coding in 1 week: ${all_books[4]}`)
		console.log("6. Go back to menu")
		}
		
function borrow_book(){
	console.log(display_books())
	let borrowInput;
	while(borrowInput != 6){
	borrowInput = parseInt(prompt("Enter any number:"))
	switch(parseInt(borrowInput)){
		case 1: if(all_books[borrowInput] === "available"){
				all_books[borrowInput] = "borrowed";
			console.log(` You have borrowed the book in number ${borrowInput}\n`);}
				else{
				console.log(`Book in number ${borrowInput} is already borrowed`);}
				break; 
		case 2: if(all_books[borrowInput] === "available"){
				all_books[borrowInput] = "borrowed";
			console.log(` You have borrowed the book in number ${borrowInput}\n`);}
				else{
				console.log(`Book in number ${borrowInput} is already borrowed`);}
				break;
		case 3: if(all_books[borrowInput] === "available"){
				all_books[borrowInput] = "borrowed";
			console.log(` You have borrowed the book in number ${borrowInput}\n`);}
				else{
				console.log(`Book in number ${borrowInput} is already borrowed`);}
				break;
		case 4: if(all_books[borrowInput] === "available"){
				all_books[borrowInput] = "borrowed";
			console.log(` You have borrowed the book in number ${borrowInput}\n`);}
				else{
				console.log(`Book in number ${borrowInput} is already borrowed`);}
				break;
		case 5: if(all_books[borrowInput] === "available"){
				all_books[borrowInput] = "borrowed";
			console.log(` You have borrowed the book in number ${borrowInput}\n`);}
				else{
				console.log(`Book in number ${borrowInput} is already borrowed.\n`);}
				break;
		case 6: console.log(display_menu())
				break;
		default: console.log("Invalid book selection")}
		}
		}
		
function return_book(){
	console.log(display_books())
	let returnInput;
	while(returnInput != 6){
	returnInput = parseInt(prompt("Enter any number:"))
	switch(parseInt(returnInput)){
		case 1: if(all_books[returnInput] === "borrowed"){
				all_books[returnInput] = "available";
			console.log(` You have returned the book in number ${returnInput}\n`);}
				else{
				console.log(`Book in number ${returnInput} is already returned.\n`);}
				break;	
		case 2: if(all_books[returnInput] === "borrowed"){
				all_books[returnInput] = "available";
			console.log(` You have returned the book in number ${returnInput}\n`);}
				else{
				console.log(`Book in number ${returnInput} is already returned.\n`);}
				break;
		case 3: if(all_books[returnInput] === "borrowed"){
				all_books[returnInput] = "available";
			console.log(` You have returned the book in number ${returnInput}\n`);}
				else{
				console.log(`Book in number ${returnInput} is already returned.\n`);}
				break;
		case 4: if(all_books[returnInput] === "borrowed"){
				all_books[returnInput] = "available";
			console.log(` You have returned the book in number ${returnInput}\n`);}
				else{
				console.log(`Book in number ${returnInput} is already returned.\n`);}
				break;
		case 5: if(all_books[returnInput] === "borrowed"){
				all_books[returnInput] = "available";
			console.log(` You have returned the book in number ${returnInput}\n`);}
				else{
				console.log(`Book in number ${returnInput} is already returned.\n`);}
				break;
		case 6: console.log(display_menu())
				break;
		default: console.log("Inavlid book selection")}
		}
		}

function display_menu(){
	return `
		WELCOME TO THE MENU PAGE!!!
			1. View all books
			2. Borrow a book
			3. Return a book
			4. Exit
			`
			}

let menuInput;
	console.log(display_menu())
	while(menuInput != 4){
	menuInput = parseInt(prompt("Select any option:"))
	switch(parseInt(menuInput)){
		case 1: 
			display_books()
			let books_input;
			while(books_input != 6){
			books_input = parseInt(prompt("Press 6 to go back to main menu:"))
				console.log("Sorry, you cant do anything here. Just Press 6 to go back!")
			}
			console.log(display_menu())
			break;
		case 2:
			borrow_book()
			break;
		case 3:
			return_book()
			break;
		case 4:
			console.log("Alright bye!")
			break;
		default: console.log("Invalid input")
		}
		}
			