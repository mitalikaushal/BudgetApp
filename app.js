// BUDGET CONTROLLER
var budgetController = (function() {
	// Function constructor
	var Expence = function(id, decription, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};
	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp:[],
			inc:[]
		},
		totals: {
			exp:0,
			inc:0
		}
	};

	return {
		addItem: function(type, des, val){
			var newItem, ID;

			//Create new ID
			if(data.allItems[type].length > 0){
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;	
			}
			else {
				ID = 0;
			}

			// Create new item based on 'inc' or 'exp'
			if(type === 'exp') {
				newItem = new Expence(ID, des, val);
			}
			else if(type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			//pushing the result in allItems object's specific Array
			data.allItems[type].push(newItem);

			// Returning the new element
			return newItem;
		}
	}


	
})();



// UI CONTROLLER
var UIController = (function(){

	var DOMStrings = {
		inputType: '.add__type',
		descriptionType: '.add__description',
		valueType: '.add__value',
		btnType: '.add__btn',
		incomeContainer: 'income__list',
		expenseContainer: 'expenses__list'

	}
	return {
		getInput: function() {
			return {
			 	type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
			 	description: document.querySelector(DOMStrings.descriptionTye).value,
			 	value: document.querySelector(DOMStrings.valueType).value
			 };
		},

		 addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        }, 

        clearFields: function(){
        	var fields, fieldsArr ;
        	fields = document.querySelectorAll(DOMStrings.descriptionType + ',' + DOMStrings.valueType);

        	fieldsArr = Array.prototype.slice.call(fields);

        	fieldsArr.forEach(function(current, index, array) {
        		current.value = "";
        	})
        	fieldsArr[0].focus();
        }

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
		var input, newItem;
		// 1. Get the field input data.
		input = UICtrl.getInput();
		
		// 2. Add the item to the budget controller.
		newItem = budgetCtrl.addItem(input.type, input.description, input.value);

		// 3. Add the input to the UI.
		UICtrl.addListItem(newItem, input.type);

		// 4. Clear the fields.
		UICtrl.clearFields();
		// 5. Calculate the budget.

		// 6. Display the budget on the UI.

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