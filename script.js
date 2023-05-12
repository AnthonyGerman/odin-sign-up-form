const button = document.querySelector('#button');
const form = document.querySelector('form');
button.addEventListener('click', () => {
    if (form.elements["password"].value == form.elements["confirm-password"].value) {
        form.submit();
    }
    else {
        alert("passwords don't match");
    }
});