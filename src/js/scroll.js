const app = document.getElementById("componentApp");
const doing = document.getElementById("componentDoing");
const video = document.getElementById("componentVideo");
const author = document.getElementById("componentAuthor");
const footer = document.getElementById("componentFooter");
const scrollStepIn = 40;
const scrollSpeed = 15;
let intervalPointScroll;
let pointerScroll;

const scrollStep = () => {
  let pointStop = 0;
  const { scrollY, scroll } = window;
  if (scrollY > pointerScroll) {
    pointStop = scrollY - scrollStepIn;
    if (pointStop <= pointerScroll) {
      clearInterval(intervalPointScroll);
    }
    scroll(0, pointStop);
  } else {
    pointStop = scrollY + scrollStepIn;
    if (pointStop >= pointerScroll) {
      clearInterval(intervalPointScroll);
    }
    scroll(0, pointStop);
  }
};

const scrollToPoint = (event) => {
  event.preventDefault();
  clearInterval(intervalPointScroll);
  const {pathname, hostname, hash} = event.target;
  const {pathname: windowPathname, hostname: windowHostname} = window.location;
  if (windowPathname.replace(/^\//, '') === pathname.replace(/^\//, '') && windowHostname === hostname) {
    const element = document.querySelector('[id=' + hash.slice(1) + ']');
    if (!!element) {
      pointerScroll = element.offsetTop;
      intervalPointScroll = setInterval(scrollStep, scrollSpeed);
      return false;
    }
  }
};

const itemNav = document.querySelectorAll('.header-menu-items');
const navLink = document.querySelectorAll('.header-menu-item');
navLink.forEach((link) => {
  link.addEventListener('click', scrollToPoint);
});

const activeItem = (item) => {
  itemNav.forEach((nav) => {
    nav.classList.remove('active');
  });
  item.classList.add('active');
};

const menuPage = document.querySelector(".header-nav");
const funcScrollPage = () => {
  const { scrollY } = window;
  if ((scrollY - 10) > menuPage.offsetHeight) {
    menuPage.classList.add('nav-scroll');
  } else {
    menuPage.classList.remove('nav-scroll');
  }
  switch (true) {
    case (0 <= scrollY && scrollY <= app.offsetTop) || (app.offsetTop <= scrollY && scrollY <= doing.offsetTop) :
      return activeItem(itemNav[0]);
    case doing.offsetTop <= scrollY && scrollY <= video.offsetTop :
      return activeItem(itemNav[1]);
    case  video.offsetTop <= scrollY && scrollY <= author.offsetTop:
      return activeItem(itemNav[2]);
    case  author.offsetTop <= scrollY && scrollY <= footer.offsetTop:
      return activeItem(itemNav[3]);
    case  footer.offsetTop <= scrollY:
      return activeItem(itemNav[4]);
    default:
      return activeItem(itemNav[0]);
  }
};
window.addEventListener('load', funcScrollPage);
window.addEventListener('scroll', funcScrollPage);
