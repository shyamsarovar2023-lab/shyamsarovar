const products = {

    orlo: [

        {
            name: "Sputnik Up-Downlighter",

            price: "₹1,850.00",

            images: [

                "https://www.orloindia.com/images/photos/1/Sputnik.jpg",

                "https://www.orloindia.com/images/product/product_107/202.webp",

                "https://www.orloindia.com/images/product/product_107/203.webp",
                "https://www.orloindia.com/images/product/product_107/204.webp",

            ],

            description:
            "The Orlo Sputnik Up-Downlighter is a modern, wall-mounted, energy-efficient LED light fixture designed for both indoor and outdoor residential or commercial applications."
        },




        {
            name: "Astro Gate",

            price: "₹1,600.00",

            images: [

                "https://www.orloindia.com/images/photos/1/ASTRO%20GT.jpg",

                "https://www.orloindia.com/images/product/product_109/114.webp",

                "https://www.orloindia.com/images/product/product_109/115.webp",
                "https://www.orloindia.com/images/product/product_109/116.webp",

            ],

            description:
            "The Astro Gate (OP-425) by ORLO is a specialized IP65-rated, 230x180mm outdoor LED pillar or gate light. It is designed with a durable aluminium and polycarbonate body"
        }

    ],






    samsung: [

        {
            name: "Samsung Galaxy S24 Ultra",

            price: "₹1,29,999",

            images: [

                "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",

                "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1200&auto=format&fit=crop",

                "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop"

            ],

            description:
            "Samsung flagship smartphone with AI camera and premium display."
        },




        {
            name: "Samsung Smart TV",

            price: "₹89,999",

            images: [

                "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",

                "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1200&auto=format&fit=crop",

                "https://images.unsplash.com/photo-1571415060716-baff5f717c37?q=80&w=1200&auto=format&fit=crop"

            ],

            description:
            "Ultra HD Samsung television with immersive entertainment."
        }

    ]

};








/* URL PARAMETERS */

const params =
new URLSearchParams(window.location.search);

const brand =
params.get("brand");

const productName =
params.get("product");








/* FIND PRODUCT */

const selectedProduct =
products[brand].find(product =>

    product.name === productName

);








/* PRODUCT DETAILS */

document.getElementById("productName")
.innerText =
selectedProduct.name;



document.getElementById("productPrice")
.innerText =
selectedProduct.price;



document.getElementById("productDescription")
.innerText =
selectedProduct.description;








/* IMAGE SLIDER */

const productImage =
document.getElementById("productImage");

let currentImage = 0;



productImage.src =
selectedProduct.images[currentImage];



function nextImage(){

    currentImage++;

    if(currentImage >= selectedProduct.images.length){

        currentImage = 0;
    }

    productImage.src =
    selectedProduct.images[currentImage];

}



function prevImage(){

    currentImage--;

    if(currentImage < 0){

        currentImage =
        selectedProduct.images.length - 1;
    }

    productImage.src =
    selectedProduct.images[currentImage];

}








/* RELATED PRODUCTS */

const relatedProducts =
document.querySelector(".related-products");



products[brand].forEach(product => {

    if(product.name !== productName){

        relatedProducts.innerHTML += `

        <a href="product-details.html?brand=${brand}&product=${encodeURIComponent(product.name)}" class="related-link">

            <div class="related-card">

                <img src="${product.images[0]}">

                <h2>${product.name}</h2>

                <p>${product.price}</p>

            </div>

        </a>

        `;

    }

});