// Display user information on the Display Page
const nameInfo = document.getElementById("nameInfo");
const emailInfo = document.getElementById("emailInfo");
const mobileInfo = document.getElementById("mobileInfo");
const descriptionInfo = document.getElementById("descriptionInfo");

// Get URL parameters using a library like URLSearchParams
const urlParams = new URLSearchParams(window.location.search);

// Access user information from URL parameters and display it
const name = urlParams.get("name");
const email = urlParams.get("email");
const mobile = urlParams.get("mobile");
const description = urlParams.get("description");

// Display user information with labels and proper formatting
nameInfo.textContent = `الاسم: ${name}`;
emailInfo.textContent = `الايميل: ${email}`;
mobileInfo.textContent = `رقم الهاتف: ${mobile}`;
descriptionInfo.textContent = `الوصف: ${description}`;

// Function to toggle the display of answers in FAQ
function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}



