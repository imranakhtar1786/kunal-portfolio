(function(){
    emailjs.init("6-RcVPzpVjQSILwsO");
})();

document.querySelector("form")
.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_vadnwek",
        "template-fotae2n",
        this
    ).then(function() {
        alert("Message sent successfully✅");
    },function(error) {
        alert("Error ❌" + error.text);
    });
});