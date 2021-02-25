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