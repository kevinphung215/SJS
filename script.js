
// this is for moving banner
const buttons = document.querySelectorAll('[data-carouselBtn]')

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselBtn === "next" ? 1 : -1
        const slides = button
        .closest('[data-carousel]')
        .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if(newIndex < 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
    })
})

// this is for hamburger
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('#navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// this is for www.formspree.io for form email
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)


// for FAQ section 
// select all documents that has (name of class/id) for each of them if there is multiple. 
document.querySelectorAll('.faqBtn').forEach(button => {
    //button add event for click and then run this function 
    button.addEventListener('click', () => {
        // this will add this class if there isnt one. or remove the class if there is one. 
        button.classList.toggle('faqBtn--active');
    })
})

// this is to change the arrow icons when clicked
let btn = document.querySelectorAll(".faqBtn");
let icon = btn.querySelectorAll(".fa-arrow-turn-down");

btn.onclick = function() {
    if (icon.classList.contains("fa-arrow-turn-down")){
        icon.classList.replace("fa-arrow-turn-down", "fa-arrow-turn-up");
    } else {
        icon.classList.replace("fa-arrow-turn-up", "fa-arrow-turn-down");
    }
}