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
    var answer = document.getElementById(answerId);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    
    // Fetch product data from a JSON file or server
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);
            if (product) {
                document.title = متجر البدلات | ${product.name};
                document.getElementById('productName').textContent = product.name;
                document.getElementById('productDescription').textContent = product.description;
                document.getElementById('productImage').src = product.image;
                document.querySelector('video source').src = product.video;
                document.querySelector('video').load();
            }
        })
        .catch(error => console.log('Error loading the product data:', error));
});
