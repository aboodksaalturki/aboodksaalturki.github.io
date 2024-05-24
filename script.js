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
    var answer = document.getElementById(answerId);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var products = {
        '1': {
            name: "Classic Black Suit",
            description: "This classic black suit is perfect for formal events and business meetings.",
            price: "500 SAR",
            image: "images/suit1.jpg",
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

    function showProductDetails(productId) {
        var product = products[productId];

        // Create a new product detail section
        var productDetailSection = document.createElement('div');
        productDetailSection.className = 'product-detail';

        var productName = document.createElement('h2');
        productName.textContent = product.name;

        var productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.style.width = '100%';
        productImage.style.maxWidth = '300px';
        productImage.style.height = 'auto';

        var productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        var productPrice = document.createElement('p');
        productPrice.textContent = 'Price: ' + product.price;

        var productVideo = document.createElement('video');
        productVideo.controls = true;
        productVideo.style.width = '100%';
        productVideo.style.maxWidth = '480px';
        
        var videoSource = document.createElement('source');
        videoSource.src = product.video;
        videoSource.type = 'video/mp4';
        productVideo.appendChild(videoSource);

        // Append the elements to the product detail section
        productDetailSection.appendChild(productName);
        productDetailSection.appendChild(productImage);
        productDetailSection.appendChild(productDescription);
        productDetailSection.appendChild(productPrice);
        productDetailSection.appendChild(productVideo);

        // Append the new product detail section to the container
        document.getElementById('product-details').appendChild(productDetailSection);
    }

    document.querySelectorAll('.product').forEach(function(element) {
        element.addEventListener('click', function() {
            var productId = this.getAttribute('data-id');
            showProductDetails(productId);
        });
    });
});
