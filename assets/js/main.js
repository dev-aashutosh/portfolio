// document.onreadystatechange = function () {
//     if (document.readyState === "complete") {
//         // Hide the loader when the page is fully loaded
//         document.querySelector('.pre-loader').style.display = 'none';
//     }
// };
$(document).ready(function () {
    // Hide the loader when the page is fully loaded
    // $('.pre-loader').fadeOut(3000);
    // If you want to show the loader for a specific duration (e.g., 2 seconds), use the delay method
    $('.pre-loader').delay(3000).fadeOut(100);
});