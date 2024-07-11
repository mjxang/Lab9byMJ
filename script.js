// script.js

$(document).ready(function() {
    // Filter images based on category
    $('.filters button').click(function() {
        // Get the filter value from the clicked button
        let filter = $(this).attr('data-filter');
        // Show all images if the filter is 'all'
        if (filter === 'all') {
            $('.gallery .image').fadeIn();
        } else {
            // Hide or show images based on their category
            $('.gallery .image').each(function() {
                if (!$(this).hasClass(filter)) {
                    $(this).fadeOut();
                } else {
                    $(this).fadeIn();
                }
            });
        }
    });

    // Lightbox functionality
    $('.gallery .image img').click(function() {
        // Get the source of the clicked image
        let src = $(this).attr('src');
        // Set the source of the lightbox image to the clicked image
        $('#lightbox-img').attr('src', src);
        // Show the lightbox
        $('#lightbox').fadeIn();
    });

    // Close the lightbox when the close button is clicked
    $('.close').click(function() {
        $('#lightbox').fadeOut();
    });
});
