var user_input = prompt("enter a number");

multiply_by_three(user_input);









function multiply_by_three(thing_to_multiply) {
	var final_result = thing_to_multiply + 3;

	var output = "i got: " + thing_to_multiply + "and the result is ";

	var something_new = final_result + 4000 / 3 + 10;

	var answer_paragraph = document.querySelector(".answer");
    var jackie = document.querySelector(".jack");
    var dogs = document.querySelector(".number_of_dogs");

	answer_paragraph.textContent = final_result;
	//jackie.textContent = "hello";
	dogs.textContent = user_input;

	console.log(output + final_result);

	// console.log(thing_to_multiply);
}
