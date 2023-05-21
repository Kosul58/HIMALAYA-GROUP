document.getElementById("sign").addEventListener("click", function() {
    document.getElementById("modalContainer").style.display = "none";
    document.getElementById("modalContainer2").style.display = "block";
  }
);

document.getElementById("log").addEventListener("click", function() {
    document.getElementById("modalContainer2").style.display = "none";
    document.getElementById("modalContainer").style.display = "block";
  }
);
  
document.querySelector(".closelogin").addEventListener("click", function() {
    document.getElementById("modalContainer1").style.display = "none";
  }
);


document.querySelector(".closesignup").addEventListener("click", function() {
    document.getElementById("modalContainer2").style.display = "none";
  }
);


  var loginPopup = document.getElementById("modalContainer2");
   
  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    loginPopup.style.top = scrollTop + "px";
  });

  var oginPopup = document.getElementById("modalContainer");

  window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    oginPopup.style.top = scrollTop + "px";
  });

  document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("modalContainer2").style.display = "none";
  }
  );

  document.getElementById("signupBtn").addEventListener("click", function() {
    document.getElementById("modalContainer").style.display = "none";
  }
  );


  var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });