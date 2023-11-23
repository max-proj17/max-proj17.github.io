function setupEventListeners() {
    // Event Delegation for Dropdowns
    document.addEventListener('click', (event) => {
        if (event.target.matches('.skill-category h3') || event.target.closest('.skill-category h3')) {
            const skillCategory = event.target.closest('.skill-category');
            if (skillCategory) {
                // Toggle only the .skill-content within the same .skill-category
                const content = skillCategory.querySelector('.skill-content');
                if (content) {
                    content.classList.toggle('show');
                }
            }
        }
    });

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

let slideIndex = 1;
function setupSlideshow() {
    showSlides(slideIndex);

    // Add click event listeners to the slideshow images
    const slides = document.querySelectorAll(".mySlides");
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            currentSlide(index + 1);
        });
    });
}

function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".mySlides");
    const textContents = document.querySelectorAll(".text-content");

    // Check if the slides or textContents are not found
    if (!slides.length || !textContents.length) {
        console.error("Slides or text contents not found.");
        return; // Exit the function if no slides or text contents
    }

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides and text contents
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        textContents[i].style.display = "none";
    }

    // Display the current slide and its corresponding text content
    slides[slideIndex - 1].style.display = "block";
    textContents[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function toggleProjectDetails(event, detailsId) {
    // Prevent the event from affecting parent elements
    event.stopPropagation();

    // Select the details container using the passed ID
    var details = document.getElementById(detailsId);
    // Toggle the 'hidden' class to show/hide the details
    details.classList.toggle('hidden');
}


// // Wait for the DOM to load before setting up event listeners
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("DOM fully loaded and parsed");
//     setupEventListeners();
//     setupSlideshow(); // Add this line to initialize the slideshow
// });