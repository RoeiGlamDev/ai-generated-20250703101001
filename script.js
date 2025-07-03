// Get the todo input and list elements
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-items');

// Initialize an empty array to store the todo items
let todoItems = [];

// Function to add a new todo item
function addTodoItem(item) {
  // Create a new todo item object
  const todoItem = {
    text: item,
    completed: false
  };

  // Add the todo item to the array
  todoItems.push(todoItem);

  // Render the todo item list
  renderTodoItems();
}

// Function to render the todo item list
function renderTodoItems() {
  // Clear the todo list element
  todoList.innerHTML = '';

  // Loop through the todo items array and render each item
  todoItems.forEach((todoItem, index) => {
    const todoItemElement = document.createElement('li');
    todoItemElement.classList.add('todo-item');
    todoItemElement.innerHTML = `
      <span>${todoItem.text}</span>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;

    // Add an event listener to the delete button
    todoItemElement.querySelector('.delete-btn').addEventListener('click', () => {
      // Remove the todo item from the array
      todoItems.splice(index, 1);

      // Render the todo item list
      renderTodoItems();
    });

    // Add an event listener to the todo item element
    todoItemElement.addEventListener('click', () => {
      // Toggle the completed state of the todo item
      todoItem.completed = !todoItem.completed;

      // Render the todo item list
      renderTodoItems();
    });

    // Add the todo item element to the todo list
    todoList.appendChild(todoItemElement);

    // Add the fade-in animation to the todo item element
    todoItemElement.classList.add('fade-in');
  });
}

// Add an event listener to the todo input element
todoInput.addEventListener('keypress', (e) => {
  // Check if the Enter key was pressed
  if (e.key === 'Enter') {
    // Get the todo item text from the input element
    const todoItemText = todoInput.value.trim();

    // Check if the todo item text is not empty
    if (todoItemText) {
      // Add the todo item to the array
      addTodoItem(todoItemText);

      // Clear the input element
      todoInput.value = '';
    }
  }
});