document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taskForm');
    const itemList = document.getElementById('itemList');
    const searchForm = document.getElementById('searchForm');
    const searchSelect = document.getElementById('searchSelect');
    const searchButton = document.getElementById('searchButton');
    const resetButton = document.getElementById('resetButton');
    
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

    searchButton.addEventListener('click', function() {
        const selectedType = searchSelect.value;

        const items = itemList.getElementsByTagName('li');
        for (let item of items) {
            if (selectedType === 'all') {
                item.style.display = '';  
            } else if (item.classList.contains(selectedType)) {
                item.style.display = '';  
            } else {
                item.style.display = 'none';  
            }
        }
    });

    
    resetButton.addEventListener('click', function() {
        searchSelect.value = 'all';  
        const items = itemList.getElementsByTagName('li');
        for (let item of items) {
            item.style.display = ''; 
        }
    });
});
