import throttle from 'lodash.throttle';

const key = "feedback-form-state";

const form = document.querySelector("form");

form.addEventListener("input", throttle(onInputData, 500));
form.addEventListener("submit", onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(key)) || {};
const { email, message } = form.elements;
resetForm();

function onInputData(event) {
    dataForm = { email: email.value, message: message.value };
    localStorage.setItem(key, JSON.stringify(dataForm));
}

function resetForm() {
    if (dataForm) {
        email.value = dataForm.email || "";
        message.value = dataForm.message || "";
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log({email: email.value, message: message.value})

    localStorage.removeItem(key);
    event.currentTarget.reset();
    dataForm = {};
}

/*
Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.*/