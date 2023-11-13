function setupEventListeners() {
    // Event Delegation for Dropdowns
    document.addEventListener('click', (event) => {
        // Check if the clicked element is an h3 within a skill-category
        if (event.target.matches('.skill-category h3') || event.target.closest('.skill-category h3')) {
            const skillCategory = event.target.closest('.skill-category');
            if (skillCategory) {
                const content = skillCategory.querySelector('.skill-content');
                if (content) {
                    content.classList.toggle('hidden');
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
}

// Immediate invocation
setupEventListeners();
