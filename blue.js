document.addEventListener("DOMContentLoaded", function() {

    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach(function(paragraph) {
        
        paragraph.addEventListener('mouseover', function() {
            paragraph.classList.add('blue');
        });
        paragraph.addEventListener('mouseout', function() {
            paragraph.classList.remove('blue');
        });

        paragraph.addEventListener('click', function() {
            paragraph.classList.toggle('highlighted');
        });
    });
});
