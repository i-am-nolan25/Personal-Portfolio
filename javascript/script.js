'use strict';


// element toggle function
const elementToggleFunc = function (elem) {
  console.log("Toggle function called on element:", elem);
  console.log("Current classes:", elem.classList.toString());
  
  if (elem.classList) {
    elem.classList.toggle("active");
    console.log("After toggle - classes:", elem.classList.toString());
  } else {
    // Fallback for elements that don't support classList
    if (elem.style.display === "none" || elem.style.display === "") {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  }
}


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Add debug logging
console.log("Sidebar element:", sidebar);
console.log("Sidebar button:", sidebarBtn);
console.log("Sidebar initial classes:", sidebar?.classList.toString());
console.log("Sidebar button initial classes:", sidebarBtn?.classList.toString());

// sidebar toggle functionality for mobile
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function (event) {
    console.log("Sidebar button clicked");
    console.log("Event target:", event.target);
    console.log("Button classes:", this.classList.toString());
    elementToggleFunc(sidebar);
  });
} else {
  console.error("Sidebar button or sidebar not found:", {
    sidebar: !!sidebar,
    sidebarBtn: !!sidebarBtn
  });
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// introduction audio
audioIcon.addEventListener("click", () => {
  console.log("Audio Icon Clicked");
  if (audioElement.paused) {
    console.log("Audio Play");
    audioElement.play();
  } else {
    console.log("Audio Pause");
    audioElement.pause();
  }
});