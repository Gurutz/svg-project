//Cross animation box
//duplicate cross svg 10 times
const duplicateHtml = (element, quantity) => {
	const newContent = new Array(quantity).fill(element.innerHTML).join('');
	element.innerHTML = newContent
}

duplicateHtml(document.querySelector('#crosses'), 10);

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
const allDots = document.querySelectorAll('#dots .dot');
allDots.forEach(dot => {
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
//circles animation
duplicateHtml(document.querySelector('#circles'), 20);
  anime({
    targets: '#circles .dot',
    scale:[0, 1.2],
    delay: (el, i) => i *100,
    duration:250,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    autoplay: true
   })

//Flashing animation boxes
anime({
  targets:'#flashes .flash',
  backgroundColor: (el, i) => ['#fff636','#cb89fc','#fc3035','#77ebfd'][i],
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
})

//Square tunnel animation box
anime({
  targets:'#squares rect',
  translateX: ['-50%','-50%'],
  translateY: ['-50%','-50%'],
  rotate:[45, 0, -45],
  delay: (el, i) => 100 * i,
  duration: (el, i) => 750,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine',
})
