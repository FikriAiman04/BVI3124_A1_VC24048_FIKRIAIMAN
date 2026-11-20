// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {

            formMessage.style.color = "red";
            formMessage.textContent = "Please fill in all fields.";

        } else if (message.length < 10) {

            formMessage.style.color = "red";
            formMessage.textContent = "Your message must contain at least 10 characters.";

        } else {

            formMessage.style.color = "green";
            formMessage.textContent = "Form validated successfully! No message has been sent.";

            contactForm.reset();

        }

    });

}
// Dark Mode Toggle

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            themeToggle.textContent = "🌙 Dark Mode";
        }

    });
}// Project Filtering

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.getAttribute("data-filter");

        // Update active button
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Filter project cards
        projectCards.forEach(function(card) {

            const projectCategory = card.getAttribute("data-category");

            if (selectedCategory === "all" ||
                selectedCategory === projectCategory) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});// Back-to-Top Button

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}