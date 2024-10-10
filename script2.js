document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const itemList = document.getElementById("itemList");
    const resetButton = document.getElementById("resetButton");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        searchItems();
    });

    resetButton.addEventListener("click", function() {
        resetSearch();
    });

    function searchItems() {
        const searchText = document.getElementById("searchText").value.toLowerCase();
        const selectedType = document.getElementById("typeSelect").value;
        
        const items = itemList.getElementsByTagName("li");
    
        Array.from(items).forEach(item => {
            const itemText = item.textContent.toLowerCase();
            const itemType = item.className; 

            const matchesSearch = searchText ? itemText.includes(searchText) : true;
            const matchesType = selectedType ? itemType === selectedType : true;

            if (matchesSearch && matchesType) {
                item.style.display = "list-item";
            } else {
                item.style.display = "none";
            }
        });
    }

    function resetSearch() {
        document.getElementById("searchText").value = '';
        document.getElementById("typeSelect").value = '';
        Array.from(itemList.getElementsByTagName("li")).forEach(item => {
            item.style.display = "list-item"; 
        });
    }
});
