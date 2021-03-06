function TodoService() {
	// A local copy of your todos
	var baseUrl = 'https://inspire-server.herokuapp.com/api/todos/IANBRADLEY'
	var id = 0
	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function getTodos(draw) {
		$.get(baseUrl)
			.then(function (res) {
				todos = res
				draw(todos)
				 // <-- WHY IS THIS IMPORTANT????
			})
			.fail(logError)
	}

	this.addTodo = function addTodo(todo, getTodos) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
			.then(getTodos) // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(YOURTODOVARIABLEHERE)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	this.removeTodo = function removeTodo(index, getTodos) {
		$.ajax({
			url: baseUrl + '/' + index,
			method: 'DELETE'
		})
			.then(getTodos)
			.fail(logError)		
	}
}
