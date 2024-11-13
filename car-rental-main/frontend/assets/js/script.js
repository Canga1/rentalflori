
'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const carInput = document.getElementById('input-1'); // Car, model, or brand input
    const priceInput = document.getElementById('input-2'); // Max. monthly payment input
    const featuredCarList = document.querySelectorAll('.featured-car-card');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        const searchQuery = carInput.value.toLowerCase().trim();
        const priceValue = priceInput.value.trim();
        const maxPrice = priceValue ? parseFloat(priceValue) : Infinity; // Use Infinity if no price is entered

        let foundCar = false; // Flag to check if a car model is found
        let foundPrice = false; // Flag to check if a car matches the price condition

        featuredCarList.forEach(carCard => {
            const carTitle = carCard.querySelector('.card-title a').textContent.toLowerCase();
            const priceText = carCard.querySelector('.card-price strong').textContent;
            const price = parseFloat(priceText.replace(/[\$,]/g, '')); // Remove $ and commas from price and convert to number

            // Check if car model is found
            if (carTitle.includes(searchQuery)) {
                foundCar = true;
                
                // Check if found car also fits the price requirement
                if (!priceValue || price <= maxPrice) {
                    foundPrice = true;
                    carCard.style.display = 'block';
                    carCard.scrollIntoView({ behavior: 'smooth' });
                } else {
                    carCard.style.display = 'none';
                }
            } else {
                carCard.style.display = 'none';
            }
        });

        // Alerts based on flags
        if (!foundCar) {
            alert('There is no car available with this name.');
        } else if (!foundPrice && foundCar) {
            alert('No car available within the specified price range.');
        }
    });

    // Additional code for navbar, header, booking forms, and other functionalities omitted for brevity
});



    // Additional code for navbar, header, and booking forms omitted for brevity
document.addEventListener('DOMContentLoaded', function() {
    // Elements selection
    const overlay = document.querySelector("[data-overlay]");
    const navbar = document.querySelector("[data-navbar]");
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const searchForm = document.getElementById('searchForm');
    const bookingForms = document.querySelectorAll('.booking-form form');

    // Navbar toggle functionality
    const navToggleFunc = function() {
        navToggleBtn.classList.toggle("active");
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    };

    navToggleBtn.addEventListener("click", navToggleFunc);
    overlay.addEventListener("click", navToggleFunc);
    navbarLinks.forEach(link => link.addEventListener("click", navToggleFunc));

    // Header active on scroll
    const header = document.querySelector("[data-header]");
    window.addEventListener("scroll", function() {
        header.classList.toggle("active", window.scrollY >= 10);
    });

    // Handling rent now button clicks
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();  // Prevent event bubbling up to the body
            var form = this.nextElementSibling;
            form.style.display = form.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Close booking forms when clicking outside
    document.body.addEventListener('click', () => {
        document.querySelectorAll('.booking-form').forEach(form => {
            form.style.display = 'none';
        });
    });

    // Stop propagation inside booking forms to prevent them from closing
    document.querySelectorAll('.booking-form').forEach(form => {
        form.addEventListener('click', event => {
            event.stopPropagation();
        });
    });

    // Prevent form submission from refreshing the page and handle booking confirmation
    bookingForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent the form from submitting normally
            var formData = new FormData(this);
            console.log("Booking form data:", Array.from(formData.entries()));  // Log form data for debugging
            alert("Booking confirmed! We will get back to you shortly.");
            this.parentElement.style.display = 'none';  // Hide the form after submission
        });
    });

    // Search form submission handling
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent the form from submitting normally
            window.location.hash = '#featured-car';  // Redirect user to the cars section
            console.log("Search initiated, redirecting to #featured-car.");
        });
    } else {
        console.error('Search form not found. Please check the ID and ensure it is correct.');
    }
});
document.querySelectorAll('.booking-form form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent normal form submission

        const formData = {
            start_date: this.elements['startDate'].value,
            end_date: this.elements['endDate'].value,
            pick_up_time: this.elements['time'].value
        };

        console.log("Final data being sent:", formData);

        fetch('http://127.0.0.1:5000/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) throw new Error('Failed to fetch, status: ' + response.status);
            return response.json();
        })
        .then(data => {
            console.log("Response from server:", data);
            alert(data.message || data.error);
        })
        .catch(error => {
            console.error('Booking error:', error);
            alert('Failed to book. Please try again.');
        });
    });
});