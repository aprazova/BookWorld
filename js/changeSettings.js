function changeSettings() {
    console.log("Debug!");
    document.getElementById('errorMsg').innerHTML = '';

    let username = document.getElementById('name').value;

    let userLocation = document.getElementById("location").value;
    let hobby = document.getElementById("hobby").value;
    let age = document.getElementById("age").value;
    let favourite_genre = document.getElementById("favourite-genre").value;
    let favourite_book = document.getElementById("favourite-book").value;

    if (isSet(username) && !validateLetters(username)) {
        console.log(username);
        document.getElementById('errorMsg').innerHTML = '<em style="color: red"> Name can contain only letters.</em>';
        window.stop();
        return;
    }
    if (isSet(age) && !validateDigits(age)) {
        document.getElementById('errorMsg').innerHTML = '<em style="color: red"> Age can contain only digits.</em>';
        window.stop();
        return;
    }

    if (isSet(hobby) && !validateLetters(hobby)) {
        document.getElementById('errorMsg').innerHTML = '<em style="color: red"> Hobby can contain only letters.</em>';
        window.stop();
        return;
    }

    sessionStorage.setItem("username", username);
    sessionStorage.setItem("userLocation", userLocation)
    sessionStorage.setItem("hobby", hobby)
    sessionStorage.setItem("age", age)
    sessionStorage.setItem("favourite_genre", favourite_genre)
    sessionStorage.setItem("favourite_book", favourite_book)
    window.location = "./profileSettings.html";
}

function isSet(input) {

    if (typeof input === 'undefined' || input === null || input === '') {
        return false;
    } else {
        return true;
    }
}

function validateDigits(input) {
    return input.match(/^\d+$/);
}


function validateLetters(input) {
    return input.match(/^[A-Za-z\s]+$/);
}