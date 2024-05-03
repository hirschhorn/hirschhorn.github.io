document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('img').addEventListener('mouseover', function() {
        this.src = "media/rick.gif"
    });

    document.querySelector('img').addEventListener('mouseout', function() {
        this.src = "media/cs50_cat.jpeg"
    });
});
