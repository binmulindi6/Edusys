function openLeftMenu() {
    document.getElementById("sidebar").style.display = "block";
  }
  
  function closeLeftMenu() {
    document.getElementById("sidebar").style.display = "none";
  }
  
  
    var reveals = document.querySelectorAll(".banner");
    var i = 0;
    if (i < reveals.length) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 40;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }


  /*window.addEventListener("scroll", reveal);*/