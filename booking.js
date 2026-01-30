document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const vehicle = document.getElementById("vehicle").value;

    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit mobile number");
        return;
    }

    alert(
        "✅ Booking Successful!\n\n" +
        "Name: " + name + "\n" +
        "Vehicle: " + vehicle + "\n\n" +
        "Renvox team will contact you soon 🚗"
    );
});
