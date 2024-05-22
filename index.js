document.addEventListener('DOMContentLoaded', (event) => {
    const enterButton = document.getElementById('enter');
    const userInput = document.getElementById('userI/P');
    const ul = document.querySelector('ul');

    // Function to create a new list item
    function createListItem() {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput.value));
        
        const deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('delete'));
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', deleteListItem);
        
        li.appendChild(deleteButton);
        li.addEventListener('click', markComplete);
        
        ul.appendChild(li);
        userInput.value = '';
    }

    // Function to add a new item when the button is clicked
    enterButton.addEventListener('click', () => {
        if (userInput.value.trim() !== '') {
            createListItem();
        }
    });

    // Function to add a new item when Enter key is pressed
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && userInput.value.trim() !== '') {
            createListItem();
        }
    });

    // Function to mark an item as complete
    function markComplete(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('done');
        }
    }

    // Function to delete an item
    function deleteListItem(event) {
        event.stopPropagation();
        const li = event.target.parentElement;
        li.remove();
    }
});
