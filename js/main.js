//Cross animation box
//duplicate cross svg 10 times
const duplicateHtml = (element, quantity) => {
	const newContent = new Array(quantity).fill(element.innerHTML).join('');
	element.innerHTML = newContent
}
const crosses = document.querySelector('#crosses');
duplicateHtml(crosses, 10);

anime({
  targets: '#crosses path',
  rotate:'1turn',
  loop:true,
  duration: 1200,
  delay: (el, i , l) => i * 100,
  direction :'alternate',
  easing:'easeInOutSine',
})


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

//WAVE BOX
const wavePath = document.querySelector('#wave path');
const waveOffset = anime.setDashoffset(wavePath);
wavePath.setAttribute('stroke-dashoffset', waveOffset)
anime({
		targets: wavePath,
  	strokeDashoffset:[0, waveOffset],
 		duration: 2000,
  	loop: true,
    direction:'alternate',
    easing: 'easeInOutSine',
})


//Dots animation
duplicateHtml(document.querySelector('#dots'), 40);
const dots = document.querySelectorAll('#dots .dot');
dots.forEach(dot => {
  anime({
  targets: '.dot',
	rotate: (el, i) => anime.random(90, 360),
	duration: (el, i) => anime.random(250, 750),
	loop: true,
	easing: 'easeInOutSine',
	direction: 'alternate',
	autoplay: true
})
})

