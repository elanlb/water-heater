function getStatus () {
    function listener () {
        console.log(this.responseText);
        var responseCharacter = this.responseText.charAt(0);
        if (responseCharacter == "0") {
            document.getElementById("status").textContent = "OFF";
            document.getElementById("activate").disabled = false;
            document.getElementById("deactivate").disabled = true;
        }
        else if (responseCharacter == "1") {
            document.getElementById("status").textContent = "ON";
            document.getElementById("activate").disabled = true;
            document.getElementById("deactivate").disabled = false;
        }
        else {
            document.getElementById("status").textContent = "ERROR";
        }
    }
    
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", listener);
    xhr.open("GET", "/cgi-bin/status.sh");
    xhr.send();
}

function activate () {
    if (!this.disabled) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/cgi-bin/activate.sh");
        xhr.send();
        getStatus();
    }
}

function deactivate () {
    if (!this.disabled) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/cgi-bin/deactivate.sh");
        xhr.send();
        getStatus();
    }
}

window.onload = function () {
    getStatus();
    document.getElementById("activate").onclick = activate;
    document.getElementById("deactivate").onclick = deactivate;
};
