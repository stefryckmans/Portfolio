document.addEventListener('DOMContentLoaded', () => {
    // Select the h2 inside .Main-Screen and .ActualAboutMe_Item
    const xLetter = document.querySelector('.X');
    const container = document.querySelector('.container');

    // Check if elements exist

        // Add hover listeners to the h2 element
    xLetter.addEventListener('mouseover', () => {
            container.style.scale = '1.0';
            container.style.opacity = '1';
            container.style.transition = 'scale 1s ease-out, opacity 2.5s ease-out';

        });

    xLetter.addEventListener('mouseout', () => {
            container.style.scale = '0';
            container.style.opacity = '0';
        });
});