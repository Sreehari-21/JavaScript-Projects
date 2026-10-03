let display = document.getElementById("display");

let appendToDisplay = (value) => {
    display.value += value;
};

let clearDisplay = () => {
    display.value = "";
};

let calculate = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
};