// Example of smooth scrolling for navigation links
$(document).ready(function(){
    $("a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page
    alert('Thank you for your message! I will get back to you shortly.');
    // Here you can add code to handle form submission (e.g., send data to a server)
});
$(document).ready(function () {
    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 600);
    });

    // Highlight active navigation link
    const currentLocation = window.location.pathname;
    $('nav ul li a').each(function () {
        if ($(this).attr('href') === currentLocation) {
            $(this).addClass('active');
        }
    });
});
