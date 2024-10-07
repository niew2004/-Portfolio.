window.onload = function() {
    document.getElementById("top").innerText = "Welcome to the Forum";
}
let Count = 0;
function postFunction() {
    const message = document.getElementById("message").value;
    Count++;

    if (Count === 1) {
        document.getElementById("topic").innerText = message;
    } else if (Count === 2) {
        document.getElementById("reply1").innerText = message;
    } else if (Count === 3) {
        document.getElementById("reply2").innerText = message;
    }
    document.getElementById("message").value = "";
}
function clearFunction() {
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText = "";
    document.getElementById("reply2").innerText = "";
    Count = 0;
    document.getElementById("message").value = "";
}