voters_names = []
voters_age = []
voter_state = []
candidates_votes = {
			1: 0,
			2: 0,
			3: 0,
			4: 0,
			5: 0
				}


def display_canditates():
	display = """
			'''''''''''''''''''''''''''''
			  1. Peter Obi (LP Party)
			  2. Silver (PDP Party)
			  3. Fashola (ADC Party)
			  4. Mike Tyson (APC Party)
			  5. Adamu (NPP Party)
			'''''''''''''''''''''''''''''
			 """
	return display		
		
def display_menu():
	display = """
		      ======================================
			  WELCOME TO THE VOTING SYSTEM APP!!!
			''''''''''''''''''''''''''''''''''''''''
			  1. Candidates availabe to vote for
			  2. Voter Registration
			  3. Election result
			  4. Exit
			 ======================================
			  """
	return display
		
def display_votes_page():
	display = """
			========================================
				**WELCOME TO VOTERS PAGE**
			''''''''''''''''''''''''''''''''''''''''	
				   Lets start your voting
					registration
			========================================
		"""
	return display
		
def voters_reg():
	print(display_votes_page())
		#if(typeof(displayInput) === str){
		#console.log("Invalid") 
	while True:
		user_input = input("Enter your fullname:")
		age = int(input("Enter your Age:"))
		if age < 18:
			print("Invalid age")
			continue
		voters_age.append(age)
		voters_names.append(user_input)
	
		user_input2 = input('Enter your state of origin:')
		voter_state.append(user_input2)
		user_input3 = input('Got any other candidate to register?(yes/no)')
		if user_input3.upper() == 'YES':
			continue
		elif user_input3.upper() == 'NO':
			break
		else:
			print("Please enter yes or no!")
			continue
	print("Successfully completed registration!")

	
def vote_process():
	print(display_canditates())
	input_option1 = input('Are you eligible to vote?(yes/no)')
	if input_option1.upper() != 'YES':
		print("Please go back to the voters page and register")
	input_option2 = input('Enter your name:')
	if input_option2 not in voters_names:
		print("Name not found in our database")
		return
	print("You are eligible to vote!")
	print(display_canditates())
	input_option3 = int(input('Press any of the options to vote for your candidate:'))			
	if type(input_option3) == int:
		candidates_votes[input_option3] += 1
		print("Voted successfully")
	else:
		print("Invalid candidate input")
		
def election_result():
	print(f"1. Peter Obi(LP Party): {candidates_votes[1]} votes");
	print(f"2. Silver(PDP Party): {candidates_votes[2]} votes");
	print(f"3. Fashola(ADC Party): {candidates_votes[3]} votes");
	print(f"4. Mike Tyson(APC Party): {candidates_votes[4]} votes");
	print(f"5. Adamu(NPP Party): {candidates_votes[5]} votes");
	
	largest = candidates_votes[1]

	for index in candidates_votes:
		if largest < candidates_votes[index]:
			largest = candidates_votes[index]
	print("The highest is ", largest, " votes")
