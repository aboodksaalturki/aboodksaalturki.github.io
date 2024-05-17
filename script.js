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
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: '1',
            name: 'بدلة سوداء كلاسيكية',
            description: 'تعتبر البدلة السوداء الكلاسيكية خيارًا مثاليًا للرجال الذين يبحثون عن أناقة تقليدية وفخامة...',
            image: 'images/suit1.jpg',
            video: 'videos/suit1.mp4'
        },
        {
            id: '2',
            name: 'بدلة زرقاء عصرية',
            description: 'استمتع بالمزيج الفريد من الأناقة والعصرية مع بدلة زرقاء عصرية...',
            image: 'images/suit2.jpg',
            video: 'videos/suit2.mp4'
        },
        {
            id: '3',
            name: 'بدلة رمادية فاخرة',
            description: 'تعكس بدلة رمادية فاخرة الجمال والفخامة في التصميم...',
            image: 'images/suit3.jpg',
            video: 'videos/suit3.mp4'
        }
    ];

    // Get product ID from URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || '1';  // Default to first product if no ID is provided

    // Find product by ID
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('pageTitle').textContent = `متجر البدلات | ${product.name}`;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productImage').alt = `صورة ${product.name}`;
        document.querySelector('#productVideo source').src = product.video;
        document.getElementById('productVideo').load();
    }
});
