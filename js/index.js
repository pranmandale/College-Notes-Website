    var typed = new Typed(".auto-type", {
        strings: ["Class Notes", "Previous year papers", "Free Courses", "Start Studying Smarter Today !|"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    })

// navbar


  const navLinks = document.getElementById('company-links');
  const togglebtn = document.getElementById('nav-toggle');
  // console.log('Button clicked!');
  togglebtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
  });

  // Function to toggle a specific dropdown by ID
function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId + "Dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    closeAllDropdowns(); // Close all other open dropdowns
    dropdown.style.display = "block";
  }
}

// drop2

function toggleDropdown1(dropdownId) {
  var dropdown = document.getElementById(dropdownId + "Dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    // closeAllDropdowns(); // Close all other open dropdowns
    dropdown.style.display = "block";
  }
}

// Function to close all open dropdowns
function closeAllDropdowns() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.style.display === "block") {
      openDropdown.style.display = "none";
    }
  }
}

// Close all dropdowns when clicking outside of them
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    closeAllDropdowns();
  }
}

// let c= document.getElementsByClassName("hover-links")
// c.style.color="red";