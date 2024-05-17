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

// Function to get product information and update the product page
function displayProductInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    // Sample product data
    const products = {
        1: {
            name: "بدلة سوداء كلاسيكية",
            description: "بدلة سوداء كلاسيكية مثالية لجميع المناسبات الرسمية.",
            image: "images/suit1.jpg",
            video: "videos/suit1.mp4"
        },
        2: {
            name: "بدلة زرقاء عصرية",
            description: "بدلة زرقاء عصرية تجمع بين الأناقة والحداثة.",
            image: "images/suit2.jpg",
            video: "videos/suit2.mp4"
        },
        3: {
            name: "بدلة رمادية فاخرة",
            description: "بدلة رمادية فاخرة مصممة بأحدث صيحات الموضة.",
            image: "images/suit3.jpg",
            video: "videos/suit3.mp4"
        }
    };

    const product = products[productId];
    if (product) {
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productVideo').src = product.video;
    } else {
        document.getElementById('productTitle').textContent = "المنتج غير موجود";
        document.getElementById('productName').textContent = "المنتج غير موجود";
        document.getElementById('productDescription').textContent = "عذرًا، المنتج الذي تبحث عنه غير موجود.";
        document.getElementById('productImage').src = "images/default-product.jpg";
        document.getElementById('productVideo').style.display = 'none';
    }
}

// Call the function to display product information when the page loads
window.onload = displayProductInfo;
