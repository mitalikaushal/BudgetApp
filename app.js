// BUDGET CONTROLLER
var budgetController = (function() {
	// Function constructor
	var Expence = function(id, decription, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};
	var Income = function(id, decription, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp:[],
			inc:[]
		}
		totals: {
			exp:0,
			inc:0
		}
	}
	
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

	var setUpEventListeners = function() {
		var DOM = UICtrl.getDOMStrings();
		document.querySelector(DOM.btnType).addEventListener('click', ctrlAddItem);
		document.addEventListener('keypress' , function(event) {

			if(event.keyCode === 13 || event.which === 13) 
			{
				ctrlAddItem();
			}

		});
	};
	var ctrlAddItem = function() {

		// 1. Get the field input data.
		var input = UICtrl.getInput();
		

		// 2. Add the item to the budget controller.

		// 3. Add the input to the UI.

		// 4. Calculate the budget.

		// 5. Display the budget on the UI.

	};

	return {
		init: function() {
			console.log('Application has started!');
			setUpEventListeners();
		}
	}
})(budgetController , UIController);

//calling init- without this code nothing will work - this will work as soon as m application starts
controller.init();