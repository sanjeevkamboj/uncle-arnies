// script for banner slider

// JavaScript for Slider
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let slideNames = document.getElementsByClassName("slide-name");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slideNames[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    slideNames[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("dots" + slideIndex);
}


// script for review slider
$('.review_slide').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$(".review_slide .owl-prev").html('<img src="images/left_icon.svg">');
$(".review_slide .owl-next").html('<img src="images/right_icon.svg">');


// product slider

$('.product_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
      
    }
})


// stories
$('.stories').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$(".stories .owl-prev").html('<img src="images/left_icon.svg">');
$(".stories .owl-next").html('<img src="images/right_icon.svg">');


