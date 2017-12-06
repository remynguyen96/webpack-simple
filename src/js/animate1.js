const element = document.querySelector('h4');
const animate = element.animate({
    opacity: [.5 , 1],
    transform: ['translateX(-30px)', 'translateX(30px)']
}, {
    direction: 'alternate',
    duration: 1000,
    iterations: 4
})