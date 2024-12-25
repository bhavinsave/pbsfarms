// Contact Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting
    alert('Thank you for your message! We will get back to you soon.');
});

    let testimonialIndex = 0;
    let galleryIndex = 0;

function nextTestimonial() {
    const carouselContent = document.querySelector('.carousel-content');
    const totalCards = document.querySelectorAll('.testimonial-card').length;
    testimonialIndex = (testimonialIndex + 1) % totalCards;
    carouselContent.style.transform = `translateX(-${testimonialIndex * 320}px)`; /* 320px is card width + margin */
}

function prevTestimonial() {
    const carouselContent = document.querySelector('.carousel-content');
    const totalCards = document.querySelectorAll('.testimonial-card').length;
    testimonialIndex = (testimonialIndex - 1 + totalCards) % totalCards;
    carouselContent.style.transform = `translateX(-${testimonialIndex * 320}px)`; /* 320px is card width + margin */
}


function nextGallery() {
    const carouselContent = document.querySelector('.carousel-content');
    const totalItems = document.querySelectorAll('.gallery-item').length;
    galleryIndex = (galleryIndex + 1) % totalItems;
    carouselContent.style.transform = `translateX(-${galleryIndex * 320}px)`; /* 320px is item width + margin */
}

function prevGallery() {
    const carouselContent = document.querySelector('.carousel-content');
    const totalItems = document.querySelectorAll('.gallery-item').length;
    galleryIndex = (galleryIndex - 1 + totalItems) % totalItems;
    carouselContent.style.transform = `translateX(-${galleryIndex * 320}px)`; /* 320px is item width + margin */
}