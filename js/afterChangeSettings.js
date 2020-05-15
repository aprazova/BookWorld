if (isSet(sessionStorage.getItem("username"))) {
    console.log("NOW");
    document.getElementById('name').innerText = sessionStorage.getItem("username");
}

if (isSet(sessionStorage.getItem("userLocation"))) {
    console.log("HERE");
    document.getElementById('location').innerText = "Location: " + sessionStorage.getItem("userLocation");
}

if (isSet(sessionStorage.getItem("age"))) {
    document.getElementById('age').innerText = "Age: " + sessionStorage.getItem("age");;
}

if (isSet(sessionStorage.getItem("hobby"))) {
    document.getElementById('hobby').innerText = "Hobby: " + sessionStorage.getItem("hobby");
}

if (isSet(sessionStorage.getItem("favourite_genre"))) {
    document.getElementById('favourite-genre').innerText = "Favourite genre: " + sessionStorage.getItem("favourite_genre");
}

if (isSet(sessionStorage.getItem("favourite_book"))) {
    document.getElementById('favourite-book').innerText = "Favourite book: " + sessionStorage.getItem("favourite_book");
}