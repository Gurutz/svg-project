//CIRCLE BOX
anime({
  //CSS selector
  targets: '#tunnel circle',
  //we scale it up by 20% 
  scale: 1.2,
  //loops over and over
  loop: true,
  //from begining to end
  direction: 'alternate',
  duration: 250,
  easing: 'easeInOutCubic',
  //takes element by element, and delays each of them by 50
  delay: (el, index) => index * 50,
});

//CONVEYOR BELT
anime({
  //selector
  targets: '.conveyor',
  //move to left by half of its way
  translateX:'-50%',
  duration:1500,
  loop:true,
  easing:'linear',
  autoplay: true
});
//ZIGZAG BOX
const zigzagPath = document.querySelector('#zigzag path');
//setDashoffset ->how long it is
const zigzagOffset = anime.setDashoffset(zigzagPath);
zigzagPath.setAttribute('stroke-dashoffset', zigzagOffset)
anime({
    targets: zigzagPath,
    strokeDashoffset: [zigzagOffset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
 });