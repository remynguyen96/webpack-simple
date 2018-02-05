import '../css/app.scss';
const formBox = document.querySelector('.box');
const inputBox = document.getElementById('box-number');
const numberBox = document.querySelector('.box-value');
const addBox = document.querySelector('.add-box');
let totalClick = 0;

inputBox.addEventListener('input', function (e) {
    const {value} = e.target;
    const numberVal = value === '' ? 0 : parseFloat(value);
    (numberVal < 0 || numberVal > 128) ? messageErr('Number is not valid') : numberBox.innerText = numberVal;
});
formBox.addEventListener('submit', function (e) {
    e.preventDefault();
    addBox.innerHTML = '';
    totalClick = 0;
    const numberRender = inputBox.value;
    for (let i = 1; i <= numberRender; i++) {
        addBox.appendChild(boxTemplate(i));
    }

});
const boxTemplate = (key) => {
    let clickBox = 0;
    const elDiv = createElement('div', 'part', `part-${key}`);
    const elSpan = createElement('span', 'part-value');
    elDiv.innerHTML = `<span class="part-number">Box #${key}</span>`;
    elDiv.addEventListener('click', function () {
        clickBox++;
        totalClick++;
        elSpan.innerText = `(${clickBox} clicks)`;
        handleBg(clickBox, elDiv);
        elDiv.appendChild(elSpan);
    });
    return elDiv;
};

const handleBg = (valClick, element) => {
    const numberClick = valClick >> 0;
    const part = document.querySelectorAll('.part');
    part.forEach((item, key) => {
        if (element === item) {
            const calculator = parseInt(((numberClick / totalClick) * 100).toFixed(0));
            percentColor(item, calculator);
        }
    });
};

const createElement = (el = 'div', nameClass = '', id = '') => {
    const element = document.createElement(el);
    element.classList.add(nameClass);
    element.id = id;
    return element;
};
const messageErr = (err) => {
    if (err) {
        alert(err);
        throw new Error(err);
    }
};
const percentColor = (part, value) => {
    if (value < 25 && value >= 1) {
        part.style.background = 'green';
    } else if (value < 50 && value >= 25) {
        part.style.background = 'blue'
    } else if (value < 75 && value >= 50) {
        part.style.background = 'orange';
    } else if (value <= 100 && value >= 75) {
        part.style.background = 'red';
    }
};
