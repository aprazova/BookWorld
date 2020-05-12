$(document).ready(function() {
    $('img.photos').click(function() {
        window.location.href = this.id + '.html';
    });
});