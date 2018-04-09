const { scrollY } = window;
const { offsetTop: app } = document.getElementById("componentApp");
const { offsetTop: doing } = document.getElementById("componentDoing");
const { offsetTop: video } = document.getElementById("componentVideo");
const { offsetTop: author } = document.getElementById("componentAuthor");
const { offsetTop: footer } = document.getElementById("componentFooter");
// window.addEventListener('scroll', () => {
  // const { offsetHeight } = this.navMenu;
// });


const scrollToPoint = (event) => {
  event.preventDefault();
  clearInterval(this.state.intervalScroll);
  const {pathname, hostname, hash} = event.target;
  const {pathname: windowPathname, hostname: windowHostname} = window.location;
  if (windowPathname.replace(/^\//, '') === pathname.replace(/^\//, '') && windowHostname === hostname) {
    const element = document.querySelector('[id=' + hash.slice(1) + ']');
    if (!!element) {
      const interval = setInterval(this.scrollStep, scrollSpeed);
      this.setState({
        pointerScroll: element.offsetTop,
        intervalScroll: interval,
      });
      return false;
    }
  }
};

