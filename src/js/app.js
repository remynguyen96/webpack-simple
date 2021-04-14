// import '../css/app.scss';
import '../css/app.scss';

const formBox = document.querySelector('.box');
const inputBox = document.getElementById('box-number');
const numberBox = document.querySelector('.box-value');
const addBox = document.querySelector('.add-box');
let totalClick = 0;

inputBox.addEventListener('input', function (e) {
  const { value } = e.target;
  const numberVal = value === '' ? 0 : parseFloat(value);

  numberVal < 0 || numberVal > 128 ? messageErr('Number is not valid') : (numberBox.innerText = numberVal);
});

formBox.addEventListener('submit', function (e) {
  const numberRender = inputBox.value;

  e.preventDefault();
  addBox.innerHTML = '';
  totalClick = 0;

  for (let i = 1; i <= numberRender; i++) {
    addBox.appendChild(boxTemplate(i));
  }
});
const boxTemplate = (key) => {
  const elDiv = createElement('div', 'part', `part-${key}`);
  const elSpan = createElement('span', 'part-value');
  let clickBox = 0;

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

  part.forEach((boxItem) => {
    if (element === boxItem) {
      const calculator = parseInt(((numberClick / totalClick) * 100).toFixed(0));

      boxItem.style.fontWeight = 600;
      percentColor(boxItem, calculator);
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
    console.error(err);
    throw new Error(err);
  }
};

const percentColor = (part, value) => {
  switch (true) {
    case value < 3 && value >= 1:
      part.style.backgroundColor = '#1abc9c';
      break;
    case value < 5 && value >= 3:
      part.style.backgroundColor = '#e74c3c';
      break;
    case value < 8 && value >= 5:
      part.style.backgroundColor = '#3498db';
      break;
    case value < 13 && value >= 8:
      part.style.backgroundColor = '#e67e22';
      break;
    default:
      part.style.backgroundColor = '#f1c40f';
      break;
  }
};
