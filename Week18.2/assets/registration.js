let errors = [];

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    };
}

function checkAll() {


    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    };


    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;

    if (emailField.value.match(mailFormat)) {
        console.log('УРА, мыло!');
    } else {
        errors.push("Ваш E-mail введен неверно!");
    };

    let passwordFormat = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
    if (password.value.match(passwordFormat)) {
        console.log('УРА пароль!');
    } else {
        errors.push("Ваш Пароль введен неверно!");
    };

    let telFormat = /(?:\+|\d)[\d\-\(\) ]{9,}\d/g;
    if (telField.value.match(telFormat)) {
        console.log('УРА телефон!');
    } else {
        errors.push("Ваш Пароль введен неверно!");
    };



    console.log(errors.length);

    if (errors.length === 0) {
        console.log('УРА, БЛЯ!');
    } else {
        document.getElementById('errorsInfo').innerHTML = errors.join('<br/>');
        return errors = [];
    };

}