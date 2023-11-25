function setupEventListeners() {


    // Smooth Scrolling for anchor tags
    document.addEventListener('click', (event) => {
        const anchor = event.target.closest('a[href^="#"]');
        if (anchor) {
            event.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    window.addEventListener('scroll', function() {
        var offset = window.pageYOffset;
        document.body.style.backgroundPositionY = offset * 0.7 + "px"; // The multiplier can be adjusted for speed
    });
    

}

// Dynamic initialization of slideIndex based on the number of slideshow containers
let slideIndex = {};
document.querySelectorAll('.slideshow-container').forEach((container, index) => {
    let id = container.id;
    if (!id) {
        id = `slideshow${index + 1}`;
        container.id = id;
    }
    slideIndex[id] = 1;
    showSlides(1, id); // Initialize the slideshow for this container
});


function setupSlideshow(slideshowId) {
    showSlides(slideIndex[slideshowId], slideshowId);
}

function plusSlides(n, slideshowId) {
    showSlides(slideIndex[slideshowId] += n, slideshowId);
}

function currentSlide(n, slideshowId) {
    showSlides(n, slideshowId);
}

function showSlides(n, slideshowId) {
    let slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
    let textContents = document.querySelectorAll('.text-box .text-content');
    if (!slides.length || !textContents.length) return;

    if (n > slides.length) { slideIndex[slideshowId] = 1; }
    if (n < 1) { slideIndex[slideshowId] = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        textContents[i].style.display = "none"; // Hide all text contents
    }
    slides[slideIndex[slideshowId] - 1].style.display = "block";
    textContents[slideIndex[slideshowId] - 1].style.display = "block"; // Display the corresponding text content
}

function toggleProjectDetails(event, detailsId) {
    event.stopPropagation();
    const details = document.getElementById(detailsId);
    details.classList.toggle('hidden');
}


// // Wait for the DOM to load before setting up event listeners
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("DOM fully loaded and parsed");
//     setupEventListeners();
//     setupSlideshow(); // Add this line to initialize the slideshow
// });