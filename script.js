
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    const serviceBtn = document.querySelector('.service-btn');
    const complaintForm = document.getElementById('complaintForm');

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Pieslēgšanās funkcija būs pieejama drīzumā!');
    });

    serviceBtn.addEventListener('click', function() {
        window.location.href = 'complaint.html';
    });

    if (complaintForm) {
        complaintForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Jūsu sūdzība tika iesniegta');
            window.location.href = 'index.html';
        });
    }
});
