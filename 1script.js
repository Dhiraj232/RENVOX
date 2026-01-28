// Renvox JavaScript File

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Book Ride Button Click
    const bookBtn = document.querySelector(".hero button");
    if (bookBtn) {
        bookBtn.addEventListener("click", function () {
            alert("🚗 Renvox Booking Coming Soon!");
        });
    }

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Dynamic Footer Year
    const footer = document.querySelector("footer p");
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `© ${year} <span>Renvox</span>. All Rights Reserved.`;
    }

    // Simple Console Message (for developers)
    console.log("Renvox Website Loaded Successfully 🚀");
});
