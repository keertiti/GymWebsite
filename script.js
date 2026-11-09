
// Business phone number
const phoneNumber = "916284607185";

// Call functionality
function callBusiness() {
    window.location.href = `tel:+${phoneNumber}`;
}

// WhatsApp functionality
function whatsappBusiness() {
    const message = "Hello Iron Nation! I want to know more about gym membership.";

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}

// Connect buttons
document.getElementById("callButton").href =
    `tel:+${phoneNumber}`;

document.getElementById("whatsappButton").onclick = function(event) {
    event.preventDefault();
    whatsappBusiness();
};

document.getElementById("heroWhatsapp").onclick = function(event) {
    event.preventDefault();
    whatsappBusiness();
};

// Mobile menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// Dynamic year
document.getElementById("year").textContent =
    new Date().getFullYear();

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get customer details
    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const membership = document.getElementById("membership").value;

    const message = document.getElementById("message").value.trim();

    // Gym WhatsApp number
    const gymNumber = "916284607185";

    // Create WhatsApp message
    const whatsappMessage = `
Hello Iron Nation!

I want to enquire about gym membership.

Name: ${name}
Phone: ${phone}
Membership: ${membership}
Fitness Goals / Message: ${message}

Please contact me regarding membership.
    `;

    // Open WhatsApp
    const whatsappURL =
        `https://wa.me/${gymNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});
