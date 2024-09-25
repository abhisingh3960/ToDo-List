let inputField = document.getElementById('inputValue');
let addItemButton = document.getElementById('add-item');
let todoList = document.querySelector('.todo-list-item');

addItemButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputField.value  === ''){
        alert("Add item first")
    }else{
        addTodoItem();
    }
    
});

function addTodoItem() {
    // Create a new list item
    let listItem = document.createElement('li');
    let delButton = document.createElement('button');
    
    // Add classes
    listItem.classList.add('todo-list-item');
    delButton.classList.add('btn-del');
    
    // Set the text of the list item and delete button
    listItem.textContent = inputField.value;
    delButton.textContent = 'Delete'; // Change this to the text you want on the button
    
    // Append the delete button inside the list item
    listItem.appendChild(delButton);
    
    // Append the list item to the todoList
    todoList.appendChild(listItem);

    // Add event listener to delete the list item when the button is clicked
    delButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    // Clear the input field after adding the item
    inputField.value = '';
  
}
