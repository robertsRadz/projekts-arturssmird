
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    const serviceBtn = document.querySelector('.service-btn');

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Pieslēgšanās funkcija būs pieejama drīzumā!');
    });

    serviceBtn.addEventListener('click', function() {
        window.location.href = 'complaint.html';
    });
});
