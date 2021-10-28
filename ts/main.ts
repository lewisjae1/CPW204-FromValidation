
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

/**
 * returns true if the textbox with the given id
 * has some text inside it
 * @param id The id of the <input type="text">to validate
 * @param errMsg The message to display in the sibling span of
 * the textbox
 */
function main():void{
    resetErrMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");

    // Validate Date
    CheckValidDate();
}

function CheckValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if (!isValidDate(dob)) {
        //let errspan = dobBox.nextElementSibling;
        //errspan.innerHTML = "Format should be mm/dd/yyyy";
        let errSpan = document.getElementById("dobSpan");
        errSpan.innerHTML = "Format should be mm/dd/yyyy";

    }
}

function isValidDate(input:string):boolean{
    // mm/dd/yyyy
    // \d{1,2}\/\d{1,2}\/\d{4}
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    return pattern.test(input);
}

/**
 * Resets all the spans back to the default text
 */
function resetErrMessages():void{
    let allSpans = document.querySelectorAll("form>span");
    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];
        
        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }
        else{
            currSpan.innerText = "";
        }
    }
}

function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = 
        <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = 
            <HTMLSpanElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
