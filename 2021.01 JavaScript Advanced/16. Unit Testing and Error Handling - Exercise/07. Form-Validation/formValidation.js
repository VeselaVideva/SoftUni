function validate() {
    const validUsernameRegex = /^[A-Za-z\d]{3,20}$/
    const validEmailRegex = /^.*@.*\..*$/
    const validPasswordRegex = /^\w{5,15}$/
    const validCompanyNumberRegex = /^\d{4}$/

    let validUsername = false;
    let validEmail = false;
    let validPassword = false;
    let validConfirmPassword = false;
    let validCompanyNumber = false; // number between 1000 and 9999

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const valid = document.getElementById('valid');

    document.getElementById("company").addEventListener('click', (e) => {
        e.target.setAttribute('checked', true);
        if (e.target.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            e.target.setAttribute('checked', false);
            document.getElementById('companyInfo').style.display = 'none';
        }
    })

    document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();

        if (!username.value.match(validUsernameRegex)) {
            username.style.borderColor = "red";
        } else {
            username.style.border = 'none';
            validUsername = true;
        }

        if (!(email.value).toLowerCase().match(validEmailRegex)) {
            email.style.borderColor = "red";
        } else {
            email.style.border = 'none';
            validEmail = true;
        }

        if (!password.value.match(validPasswordRegex)) {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
        } else {
            password.style.border = 'none';
            validPassword = true;

            if (confirmPassword.value === password.value) {
                confirmPassword.style.border = 'none';
                validConfirmPassword = true;
            } else {
                confirmPassword.style.borderColor = "red";
            }
        }

        if (companyInfo.style.display === 'block') {
            if (companyNumber.value.match(validCompanyNumberRegex) && companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.border = 'none';
                validCompanyNumber = true;
            } else {
                companyNumber.style.borderColor = "red";
            }
        }

        if (validUsername && validEmail && validPassword && validConfirmPassword && companyInfo.style.display === 'none') {
            valid.style.display = 'block';
        } else if (validUsername && validEmail && validPassword && validConfirmPassword && companyInfo.style.display === 'block' && validCompanyNumber) {
            valid.style.display = 'block';
        }
    });
}
