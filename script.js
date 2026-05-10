// MENU PAGE FEATURE
function showDishes() {
    let number = document.getElementById("dishNumber").value;

    let dishes = [
        "Jollof Rice",
        "Suya",
        "Fufu & Soup",
        "Egusi Soup",
        "Pounded Yam"
    ];

    let output = "";

    for (let i = 0; i < number; i++) {
        output += dishes[i] + "<br>";
    }

    document.getElementById("output").innerHTML = output;
}

// CONTACT PAGE FEATURE
function showMessage() {
    alert("Thank you for contacting Bently’s African Restaurant!");
}

// ABOUT PAGE FEATURE
function changeText() {
    document.getElementById("aboutText").innerHTML =
        "We proudly serve authentic African meals made with love and tradition.";
}

function welcomeMessage() {
    document.getElementById("welcome").innerHTML =
        "What would you like to eat today?";
}