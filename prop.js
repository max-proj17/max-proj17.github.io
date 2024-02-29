function setupEventListeners() {


    // Smooth Scrolling for anchor tags
    document.addEventListener('click', (event) => {
        const anchor = event.target.closest('a[href^="#"]');
        if (anchor) {
            const href = anchor.getAttribute('href');
            // Check if the href is not just "#"
            if (href !== "#") {
                event.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
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
    if (!slides.length) return;

    if (n > slides.length) { slideIndex[slideshowId] = 1; }
    if (n < 1) { slideIndex[slideshowId] = slides.length; }

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Show the current slide
    slides[slideIndex[slideshowId] - 1].style.display = "block";

    // If the current slideshow is 'experienceSlideshow', then handle the text content
    if (slideshowId === 'experienceSlideshow') {
        let textContents = document.querySelectorAll('.text-box .text-content');
        textContents.forEach(content => content.style.display = "none");
        if (textContents[slideIndex[slideshowId] - 1]) {
            textContents[slideIndex[slideshowId] - 1].style.display = "block";
        }
    }
}

function toggleProjectDetails(event, detailsId) {
    event.stopPropagation();
    const details = document.getElementById(detailsId);
    details.classList.toggle('hidden');
}

// Dropdown interaction
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent navigating to "#"
        var dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('show');
    });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// // Wait for the DOM to load before setting up event listeners
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("DOM fully loaded and parsed");
//     setupEventListeners();
//     setupSlideshow(); // Add this line to initialize the slideshow
// });