$(document).ready(function() {
    $('img.photos').click(function() {
        window.location.href = window.location.hostname + window.location.href + '/../books/' + this.id + '.html';
    });
});
