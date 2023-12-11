//image slideshow
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}  


  document.addEventListener('DOMContentLoaded', function () {
    const numberOfBubbles = 20;
    for (let i = 0; i < numberOfBubbles; i++) {
      createBubble();
    }
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';

        const size = Math.random() * 40 + 10;
        const duration = Math.random() * 4 + 2;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${duration}s`;

        document.getElementById('bubbles-container').appendChild(bubble);
    }
  });


// Function to show the scientific name
function showScientificName(species) {
  let scientificName;

  if (species === 'gentoo') {
    scientificName = "The scientific name of the Gentoo penguin is Pygoscelis papua.";
  } else if (species === 'emperor') {
    scientificName = "The scientific name of the Emperor Penguin is Aptenodytes forsteri.";
  } else if (species == 'african') {
    scientificName = "The scientific name of the African Penguin is Spheniscus demersus.";
  } else {
    scientificName = "Scientific name not available.";
  }

  alert(scientificName);
  return false; // Preventing page scroll
}


// Function to generate content
function generateContent() {
  const gentooPenguinsData = facts[0].gentooPenguins;
  const emperorPenguinsData = facts[1].emperorPenguins;
  const africanPenguinsData = facts[2].africanPenguins;

  //Gentoo Penguins
  document.write('<h2>Gentoo Penguins</h2>');
  document.write('<p>' + gentooPenguinsData.description + '</p>');
  document.write('<p><img class="gentooMap" src="' + gentooPenguinsData.imageSrc + '" alt="gentooMap" onclick="openModal(\'gentooMapModal\', \'' + gentooPenguinsData.imageSrc + '\', \'Gentoo Penguin\')"></p>');
  document.write('<p>' + gentooPenguinsData.breedingInfo + '</p>');

  document.write('<h3>Diet includes:</h3>');
  document.write('<ol>');
  gentooPenguinsData.diet.forEach(item => {document.write('<li>' + item + '</li>');});
  document.write('</ol>');

  document.write('<blockquote>');
  document.write('<p><a href="#" onclick="return showScientificName(\'gentoo\')">Click me!</a></p>');
  document.write('</blockquote>');

  //Emperor Penguins
  document.write('<h2>Emperor Penguins</h2>');
  document.write('<p>' + emperorPenguinsData.description + '</p>');
  document.write('<p><img class="emperorMap" src="' + emperorPenguinsData.imageSrc + '" alt="emperorMap" onclick="openModal(\'emperorMapModal\', \'' + emperorPenguinsData.imageSrc + '\', \'Emperor Penguin\')"></p>');
  document.write('<p>' + emperorPenguinsData.breedingInfo + '</p>');

  document.write('<h3>Diet includes:</h3>');
  document.write('<ol>');
  emperorPenguinsData.diet.forEach(item => {document.write('<li>' + item + '</li>');});
  document.write('</ol>');

  document.write('<blockquote>');
  document.write('<p><a href="#" onclick="return showScientificName(\'emperor\')">Click me!</a></p>');
  document.write('</blockquote>');

  //African Penguins
  document.write('<h2>African Penguins</h2>');
  document.write('<p>' + africanPenguinsData.description + '</p>');
  document.write('<p><img class="africanMap" src="' + africanPenguinsData.imageSrc + '" alt="africanMap" onclick="openModal(\'africanMapModal\', \'' + africanPenguinsData.imageSrc + '\', \'African Penguin\')"></p>');
  document.write('<p>' + africanPenguinsData.breedingInfo + '</p>');

  document.write('<h3>Diet includes:</h3>');
  document.write('<ol>');
  africanPenguinsData.diet.forEach(item => {document.write('<li>' + item + '</li>');});
  document.write('</ol>');

  document.write('<blockquote>');
  document.write('<p><a href="#" onclick="return showScientificName(\'african\')">Click me!</a></p>');
  document.write('</blockquote>');
}
generateContent();

// Modal for map images
function openModal(modalId, src, caption) {
  const modal = document.getElementById(modalId);
  const modalImg = document.getElementById(modalId + "Img");
  const modalCaption = document.getElementById(modalId + "Caption");

  modal.style.display = "block";
  modalImg.src = src;
  modalCaption.innerHTML = caption;
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}