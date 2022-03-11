(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
  
    /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
  
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function popupModal(speakerModal, speakerBtn, speakerSpan) {
		// When the user clicks on the button, open the modal
		speakerBtn.onclick = function() {
		  speakerModal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		speakerSpan.onclick = function() {
		  speakerModal.style.display = "none";
		} 
	}
	
	// Get the modal
	var MLmodal = document.getElementById("MLmodal");
	// Get the button that opens the modal
	var MLBtn = document.getElementById("more-info-ML");
	// Get the <span> element that closes the modal
	var MLmodalClose = document.getElementsByClassName("MLmodalClose")[0];
	popupModal(MLmodal, MLBtn, MLmodalClose);
	
	// Get the modal
	var BBmodal = document.getElementById("BBmodal");
	// Get the button that opens the modal
	var BBBtn = document.getElementById("more-info-BB");
	// Get the <span> element that closes the modal
	var BBmodalClose = document.getElementsByClassName("BBmodalClose")[0];
	popupModal(BBmodal, BBBtn, BBmodalClose);
	
	// Get the modal
	var SKmodal = document.getElementById("SKmodal");
	// Get the button that opens the modal
	var SKBtn = document.getElementById("more-info-SK");
	// Get the <span> element that closes the modal
	var SKmodalClose = document.getElementsByClassName("SKmodalClose")[0];
	popupModal(SKmodal, SKBtn, SKmodalClose);
	
	// Get the modal
	var JPmodal = document.getElementById("JPmodal");
	// Get the button that opens the modal
	var JPBtn = document.getElementById("more-info-JP");
	// Get the <span> element that closes the modal
	var JPmodalClose = document.getElementsByClassName("JPmodalClose")[0];
	popupModal(JPmodal, JPBtn, JPmodalClose);
	
	// Get the modal
	var MGmodal = document.getElementById("MGmodal");
	// Get the button that opens the modal
	var MGBtn = document.getElementById("more-info-MG");
	// Get the <span> element that closes the modal
	var MGmodalClose = document.getElementsByClassName("MGmodalClose")[0];
	popupModal(MGmodal, MGBtn, MGmodalClose);

	// Get the modal
	var KLmodal = document.getElementById("KLmodal");
	// Get the button that opens the modal
	var KLBtn = document.getElementById("more-info-KL");
	// Get the <span> element that closes the modal
	var KLmodalClose = document.getElementsByClassName("KLmodalClose")[0];
	popupModal(KLmodal, KLBtn, KLmodalClose);
	
	// Get the modal
	var HGmodal = document.getElementById("HGmodal");
	// Get the button that opens the modal
	var HGBtn = document.getElementById("more-info-HG");
	// Get the <span> element that closes the modal
	var HGmodalClose = document.getElementsByClassName("HGmodalClose")[0];
	popupModal(HGmodal, HGBtn, HGmodalClose);
	
	// Get the modal
	var HSmodal = document.getElementById("HSmodal");
	// Get the button that opens the modal
	var HSBtn = document.getElementById("more-info-HS");
	// Get the <span> element that closes the modal
	var HSmodalClose = document.getElementsByClassName("HSmodalClose")[0];
	popupModal(HSmodal, HSBtn, HSmodalClose);

	// Get the modal
	var AKmodal = document.getElementById("AKmodal");
	// Get the button that opens the modal
	var AKBtn = document.getElementById("more-info-AK");
	// Get the <span> element that closes the modal
	var AKmodalClose = document.getElementsByClassName("AKmodalClose")[0];
	popupModal(AKmodal, AKBtn, AKmodalClose);
	
	// Get the modal
	//var DGmodal = document.getElementById("DGmodal");
	// Get the button that opens the modal
	//var DGBtn = document.getElementById("more-info-DG");
	// Get the <span> element that closes the modal
	//var DGmodalClose = document.getElementsByClassName("DGmodalClose")[0];
	//popupModal(DGmodal, DGBtn, DGmodalClose);

	// Get the modal
	var KPmodal = document.getElementById("KPmodal");
	// Get the button that opens the modal
	var KPBtn = document.getElementById("more-info-KP");
	// Get the <span> element that closes the modal
	var KPmodalClose = document.getElementsByClassName("KPmodalClose")[0];
	popupModal(KPmodal, KPBtn, KPmodalClose);

	// Get the modal
	//var MMmodal = document.getElementById("MMmodal");
	// Get the button that opens the modal
	//var MMBtn = document.getElementById("more-info-MM");
	// Get the <span> element that closes the modal
	//var MMmodalClose = document.getElementsByClassName("MMmodalClose")[0];
	//popupModal(MMmodal, MMBtn, MMmodalClose);

	// Get the modal
	var MSmodal = document.getElementById("MSmodal");
	// Get the button that opens the modal
	var MSBtn = document.getElementById("more-info-MS");
	// Get the <span> element that closes the modal
	var MSmodalClose = document.getElementsByClassName("MSmodalClose")[0];
	popupModal(MSmodal, MSBtn, MSmodalClose);

	// Get the modal
	var NHmodal = document.getElementById("NHmodal");
	// Get the button that opens the modal
	var NHBtn = document.getElementById("more-info-NH");
	// Get the <span> element that closes the modal
	var NHmodalClose = document.getElementsByClassName("NHmodalClose")[0];
	popupModal(NHmodal, NHBtn, NHmodalClose);

	// Get the modal
	var OBmodal = document.getElementById("OBmodal");
	// Get the button that opens the modal
	var OBBtn = document.getElementById("more-info-OB");
	// Get the <span> element that closes the modal
	var OBmodalClose = document.getElementsByClassName("OBmodalClose")[0];
	popupModal(OBmodal, OBBtn, OBmodalClose);
	
	// Get the modal
	var ASmodal = document.getElementById("ASmodal");
	// Get the button that opens the modal
	var ASBtn = document.getElementById("more-info-AS");
	// Get the <span> element that closes the modal
	var ASmodalClose = document.getElementsByClassName("ASmodalClose")[0];
	popupModal(ASmodal, ASBtn, ASmodalClose);

	
	window.onclick = function(event) {
	  if (event.target == MLmodal) {
		MLmodal.style.display = "none";
	  }
	  else if (event.target == BBmodal) {
		BBmodal.style.display = "none";
	  }
	  else if (event.target == SKmodal) {
		SKmodal.style.display = "none";
	  }
	  else if (event.target == JPmodal) {
		JPmodal.style.display = "none";
	  }
	  else if (event.target == MGmodal) {
		MGmodal.style.display = "none";
	  }
	  else if (event.target == KLmodal) {
		KLmodal.style.display = "none";
	  }
	  else if (event.target == HGmodal) {
		HGmodal.style.display = "none";
	  }
	  else if (event.target == HSmodal) {
		HSmodal.style.display = "none";
	  }
	  else if (event.target == AKmodal) {
		AKmodal.style.display = "none";
	  }
	  //else if (event.target == DGmodal) {
		//DGmodal.style.display = "none";
	  //}
	  else if (event.target == KPmodal) {
		KPmodal.style.display = "none";
	  }
	  //else if (event.target == MMmodal) {
		//MMmodal.style.display = "none";
	  //}
	  else if (event.target == MSmodal) {
		MSmodal.style.display = "none";
	  }
	  else if (event.target == NHmodal) {
		NHmodal.style.display = "none";
	  }
	  else if (event.target == OBmodal) {
		OBmodal.style.display = "none";
	  }
	  else if (event.target == ASmodal) {
		ASmodal.style.display = "none";
	  }
	}

})()