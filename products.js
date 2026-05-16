const products = {

    orlo: [

        {
            name: "Sputnik Up-Downlighter",

            price: "₹1,850.00",

            image:
            "https://www.orloindia.com/images/photos/1/Sputnik.jpg",

            description:
            "SKU: 8992795 ;Category: Sputnik"
        },

        {
            name: "Astro Gate",

            price: "₹1,600.00",

            image:
            "https://www.orloindia.com/images/photos/1/ASTRO%20GT.jpg",

            description:
            "SKU: 85378718"
        }

    ],




    samsung: [

        {
            name: "Samsung Galaxy S24 Ultra",

            price: "₹1,29,999",

            image:
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1200&auto=format&fit=crop",

            description:
            "Samsung flagship smartphone with AI camera."
        },

        {
            name: "Samsung Smart TV",

            price: "₹89,999",

            image:
            "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",

            description:
            "Ultra HD Samsung television."
        }

    ]

};






const params =
new URLSearchParams(window.location.search);

const brand =
params.get("brand");






document.getElementById("brandTitle")
.innerText =
brand.toUpperCase() + " PRODUCTS";






const productsSection =
document.querySelector(".products-section");






function displayProducts(productArray){

    productsSection.innerHTML = "";



    productArray.forEach(product => {

        productsSection.innerHTML += `

        <a href="product-details.html?brand=${brand}&product=${encodeURIComponent(product.name)}" class="product-link">

            <div class="product-card">

                <img src="${product.image}">

                <h2>${product.name}</h2>

                <p class="price">
                    ${product.price}
                </p>

                <p class="description">
                    ${product.description}
                </p>

            </div>

        </a>

        `;

    });

}






displayProducts(products[brand]);






const productSearch =
document.getElementById("productSearch");



productSearch.addEventListener("keyup", () => {

    const value =
    productSearch.value.toLowerCase();




    const filteredProducts =
    products[brand].filter(product =>

        product.name
        .toLowerCase()
        .includes(value)

    );




    displayProducts(filteredProducts);

});