document.getElementById("add-fa").addEventListener(
    "click",
    function(event) {
        if (event.target.value === "Add to Favourite Authors") {
            event.target.value = "Remove from Favourite Authors";
        } else {
            event.target.value = "Add to Favourite Authors";
        }
    },
    false
);