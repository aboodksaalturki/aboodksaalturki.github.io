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
    document.addEventListener("DOMContentLoaded", function() {
    var products = {
        '1': {
            name: "Classic Black Suit",
            description: "This classic black suit is perfect for formal events and business meetings.",
            price: "500 SAR",
            image: "images/suit1.jpg" alt="Classic Black Suit",
            video: "media/suit1.mp4"
        },
        '2': {
            name: "Modern Blue Suit",
            description: "A modern touch to a traditional suit, ideal for weddings and parties.",
            price: "650 SAR",
            image: "images/suit2.jpg",
            video: "media/suit2.mp4"
        },
        '3': {
            name: "Luxury Grey Suit",
            description: "Luxury grey suit that combines elegance and comfort for upscale occasions.",
            price: "800 SAR",
            image: "images/suit3.jpg",
            video: "media/suit3.mp4"
        }
    };

    var query = new URLSearchParams(window.location.search);
    var productId = query.get('id') || '1';  // Default to product 1 if no ID is specified
    var product = products[productId];

    document.getElementById('productName').textContent = product.name;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name;
    document.getElementById('productVideo').children[0].src = product.video; // Assuming there's a single <source> inside <video>
});

}
