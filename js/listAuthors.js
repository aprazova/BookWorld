$(document).ready(function() {
    $('img.photos').click(function() {
        window.location.href = window.location.hostname + window.location.href + "/../authors/" + this.id + '.html';
    });
});