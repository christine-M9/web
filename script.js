document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    alert('Thank you, ' + name + '! Your message has been received.');
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});

document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('subscribeEmail').value;
    alert('Thank you for subscribing! You will receive our latest updates at ' + email + '.');
    document.getElementById('subscribeEmail').value = '';
});

