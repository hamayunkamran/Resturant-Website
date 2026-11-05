alert("Welcome to M & H Food");

function showMessage() {
    let name = document.getElementById("customerName").value;

    if (name === "") {
        alert("Please enter your name!");
    } else {
        alert("Hello " + name + "! Thank you for choosing M and H Food!");
    }
}
