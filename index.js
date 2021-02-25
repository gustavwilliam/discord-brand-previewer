var loadFile = function (event) {
    var outputs = document.getElementsByClassName("output");

    for (let output of outputs) {
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src)  // Free memory
        }
    }
};