document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taskForm');
    const itemList = document.getElementById('itemList');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const textInput = document.getElementById('textInput').value;
        const classSelect = document.getElementById('classSelect').value;

        const newItem = document.createElement('li');
        newItem.textContent = textInput;

        newItem.classList.add(classSelect);
        itemList.appendChild(newItem);

        form.reset();
    });
});
