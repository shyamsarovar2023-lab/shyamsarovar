/* =========================
FILE 3 : script.js
========================= */

console.log("SHYAM SAROVAR Loaded Successfully");


/* SMALL BUTTON CLICK EFFECT */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {

            button.style.transform = "";

        }, 150);

    });

});

const reviewsContainer =
document.querySelector(".reviews-container");






/* LOAD SAVED REVIEWS */

window.onload = () => {

    const savedReviews =
    JSON.parse(localStorage.getItem("reviews")) || [];



    savedReviews.forEach(review => {

        showReview(review.name, review.text);

    });

};






/* ADD REVIEW */

function addReview(){

    const username =
    document.getElementById("username").value;

    const reviewText =
    document.getElementById("reviewText").value;





    if(username === "" || reviewText === ""){

        alert("Please fill all fields");

        return;
    }






    showReview(username, reviewText);






    const savedReviews =
    JSON.parse(localStorage.getItem("reviews")) || [];



    savedReviews.push({

        name: username,

        text: reviewText

    });




    localStorage.setItem(
        "reviews",
        JSON.stringify(savedReviews)
    );






    document.getElementById("username").value = "";

    document.getElementById("reviewText").value = "";

}






/* DISPLAY REVIEW */

function showReview(name, text){

    reviewsContainer.innerHTML += `

        <div class="review-card">

            <h2>${name}</h2>

            <p>${text}</p>

        </div>

    `;

}