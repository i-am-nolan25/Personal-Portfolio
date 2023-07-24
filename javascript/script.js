'use strict';


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Define the elementToggleFunc function
function elementToggleFunc(element) {
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}


// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// // add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);


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

// Note: The purpose of this JavaScript code, linked with the PHP code, is to get message/data sent by someone using my "Contact" form on my website. However, as Github doesn't support to send a message using a back-end server on their github.io website, I couldn't really utilize it. My current solution is adding the third-party service called Formspree.io (free version) and trying to achieve my goal. 
// contact form variables

// // Get the form element
// const form = document.querySelector('[data-form]');

// // Add an event listener for form submission
// form.addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent default form submission

//   // Get the form inputs
//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');
//   const messageInput = document.getElementById('message');

//   // Get the input values
//   const name = nameInput.value;
//   const email = emailInput.value;
//   const message = messageInput.value;

//   // Create an object with the form data
//   const formData = {
//     fullname: name,
//     email: email,
//     message: message
//   };

//   // Send the form data to the server using fetch
//   fetch('backend.php', {
//     method: 'POST',
//     body: JSON.stringify(formData),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(function (response) {
//       // Handle the response if needed
//     })
//     .catch(function (error) {
//       // Handle any errors that occur during the request
//     });

//   // Reset the form inputs
//   nameInput.value = '';
//   emailInput.value = '';
//   messageInput.value = '';
// });


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


// Instagram Basic Display API

//Generate access token using meta for developers
const accessToken = process.env.ACCESS_TOKEN;

//Generate user id using "https://graph.instagram.com/me?fields=id,username&access_token="
const userId = process.env.USER_ID;

const instagramFeed = document.getElementById('instagram-feed');

// Function to fetch media for a given URL
async function fetchMedia(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// Fetch a specific number of media items from the user's Instagram feed using custom batching
async function fetchInstagramMediaWithLimit(desiredLimit) {
  const batchLimit = 100; // Number of media items to fetch in each batch
  let allMedia = [];
  let nextPageURL = null;

  while (allMedia.length < desiredLimit) {
    const batchURL = nextPageURL
      ? nextPageURL
      : `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink,timestamp,caption&access_token=${accessToken}&limit=${batchLimit}`;

    const { data, paging } = await fetchMedia(batchURL);

    // Filter media items based on the presence of a specific hashtag in the caption text
    const filteredMedia = data.filter(item => item.caption && item.caption.includes('#nolan'));

    allMedia.push(...filteredMedia);
    nextPageURL = paging?.next;

    if (!nextPageURL) break; // Exit the loop if there are no more pages
  }

  // Sort media items by timestamp in descending order (most recent first)
  allMedia.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return allMedia.slice(0, desiredLimit); // Return only the desired number of media items
}

// Process the retrieved data and generate HTML for the feed
function generateFeedHTML(media) {
  let html = '<div class="grid">';
  media.forEach(post => {
    if (post.media_type === 'IMAGE') {
      html += `
        <a href="${post.permalink}" target="_blank" rel="noopener">
          <img src="${post.media_url}" alt="Instagram Photo">
        </a>
      `;
    }
  });
  html += '</div>';
  return html;
}

// Fetch the Instagram feed and display it with the desired limit
const desiredPhotoLimit = 12; // Change this value to the desired number of photos
fetchInstagramMediaWithLimit(desiredPhotoLimit)
  .then(media => {
    const html = generateFeedHTML(media);
    instagramFeed.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching Instagram feed:', error);
    instagramFeed.innerHTML = 'Failed to fetch Instagram feed.';
  });