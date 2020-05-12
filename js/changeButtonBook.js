document.getElementById("add-wl").addEventListener(
    "click",
    function(event) {
        if (event.target.value === "Add to Wish List") {
            event.target.value = "Remove from Wish List";
        } else {
            event.target.value = "Add to Wish List";
        }
    },
    false
);