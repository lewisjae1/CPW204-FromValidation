window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");
    CheckValidDate();
}
function CheckValidDate() {
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidDate(dob)) {
        var errSpan = document.getElementById("dobSpan");
        errSpan.innerHTML = "Format should be mm/dd/yyyy";
    }
}
function isValidDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g;
    return pattern.test(input);
}
function resetErrMessages() {
    var allSpans = document.querySelectorAll("form>span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isTextPresent(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
