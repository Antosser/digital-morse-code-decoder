"use strict";

var ref = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};
(() => {
    let text = "";
    let currentLetter = "";
    let mouseDownAt = new Date();
    let debounce = new Date();
    let letterHandeled = true;

    render();

    document.getElementById("click").addEventListener("mousedown", mouseDown);
    document.getElementById("click").addEventListener("mouseup", mouseUp);

    setInterval(() => {
        let timeSeconds = Math.abs((new Date().getTime() - debounce.getTime()) / 1000);

        if (timeSeconds > document.getElementById("lettel-interval").value && letterHandeled == false) {
            text += ref[currentLetter];
            letterHandeled = true;
            currentLetter = "";
            render();
        }
    }, 100);

    function mouseDown() {
        letterHandeled = true;
        console.log("mouse down");
        mouseDownAt = new Date();
        debounce = new Date();
    }

    function mouseUp() {
        console.log("mouse up");
        debounce = new Date();
        var timeSeconds = Math.abs((new Date().getTime() - mouseDownAt.getTime()) / 1000);
        console.log({ timeSeconds });

        if (timeSeconds < document.getElementById("dash-length").value) {
            currentLetter += ".";
            render();
        } else {
            currentLetter += "-";
            render();
        }

        letterHandeled = false;
    }

    function render() {
        document.getElementById("click").innerHTML = `${text}<br />${currentLetter}`;
    }
})();
