function sendEmail(){
    Email.send({
        Host:"smtp.mailtrap.io",
        Username: "ebfef68d104d7a",
        Password: "53c3150da5aee4",
        Port: 2525,
        To : 'fkluckykhan1@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Contact Us Query By Custumer",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Email: " + document.getElementById("phone").value
        + "<br> Email: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent succesfully")
    );
}