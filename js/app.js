// Hide Preloader
// All the images, scripts, links, have finished loading

// Event Listeners
eventListeners();
function eventListeners(){
  const ui = new UI()

  // Preloader
  window.addEventListener('load',function(){
    ui.hidePreloader();
  })

  // Nav Btn
  document.querySelector('.navBtn').addEventListener('click',function(){
    ui.showNav();
  })

  // Control Video
  document.querySelector('.video__switch').addEventListener('click',function(){
    ui.videoControls();
  })
}

// Constructor Function
function UI(){
}

// Hide Preloader
UI.prototype.hidePreloader = function(){
  document.querySelector('.preloader').style.display="none";
}

// Show Nav
UI.prototype.showNav = function(){
  document.querySelector('.nav').classList.toggle('nav--show');
}

// Video Controls
UI.prototype.videoControls = function(){
  let btn = document.querySelector('.video__switch-btn');
  if(!btn.classList.contains('btnSlide')){
    btn.classList.add('btnSlide')
    document.querySelector('.video__item').pause()
  }
  else{
    btn.classList.remove('btnSlide')
    document.querySelector('.video__item').play()
  }
}
