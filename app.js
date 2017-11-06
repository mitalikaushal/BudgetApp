// BUDGET CONTROLLER
var budgetController = (function() {
	// some code
	
})();



// UI CONTROLLER
var UIController = (function(){

	var DOMStrings = {
		inputType: '.add__type',
		descriptionTye: '.add__description',
		valueType: '.add__value',
		btnType: '.add__btn'

	}
	return {
		getInput: function() {
			 return {
			 	type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
			 	description: document.querySelector(DOMStrings.descriptionTye).value,
			 	value: document.querySelector(DOMStrings.valueType).value
			 };
		},
		getDOMStrings: function() {
		 	return DOMStrings;
		 }
	};
})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl , UICtrl){

	var DOM = UICtrl.getDOMStrings();

	var ctrlAddItem = function() {

		// 1. Get the field input data.
		var input = UICtrl.getInput();
		console.log(input);

		// 2. Add the item to the budget controller.

		// 3. Add the input to the UI.

		// 4. Calculate the budget.

		// 5. Display the budget on the UI.

	}
	
	document.querySelector(DOM.btnType).addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress' , function(event) {
 		
 		if(event.keyCode === 13 || event.which === 13) {
 			 
 			 ctrlAddItem();
 		}

	})
	
})(budgetController , UIController);