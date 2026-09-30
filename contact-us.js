function sendEmail(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };

    const scriptURL = "https://script.google.com/macros/s/AKfycbwaLWbGHJ-24nSzmNK8aM3OzxUV_IqGQRkFHZaqBmIMF2RTQEYl9476pVKDRZULaPh6fg/exec";

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(res => {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    })
    .catch(err => {
        alert("Something went wrong!");
        console.error(err);
    });

    return false;
}
