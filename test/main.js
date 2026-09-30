  //for slecting english nd hindi content separaetely
  var english = document.getElementById("englishContent");
               var hindi = document.getElementById("hindiContent");


               function ELanguage() {
                    english.classList.remove("hidden");
                    hindi.classList.add("hidden");
               }

               function HLanguage() {
                    english.classList.add("hidden");
                    hindi.classList.remove("hidden");
               }

//for show hide button
     // function toggleSection(header) {
     //           const content = header.nextElementSibling;
     //           const btn = header.querySelector('.toggle-btn');

     //           if (content.style.display === 'none') {
     //                content.style.display = 'block';
     //                btn.textContent = 'Hide';
     //                header.style.background = 'linear-gradient(45deg, #5a6fd8, #6a4190)';
     //           } else {
     //                content.style.display = 'none';
     //                btn.textContent = 'Show';
     //                header.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
     //           }
     //      }

          function toggleSection(header) {
  const content = header.nextElementSibling;
  const btn = header.querySelector('.toggle-btn');

  content.classList.toggle("hidden");
  header.classList.toggle("active");

  if (content.classList.contains("hidden")) {
    btn.textContent = "Show";
  } else {
    btn.textContent = "Hide";
  }
}
//For Whatsapp  

window.addEventListener("scroll", () => {
  const whatsappButton = document.getElementById("whatsappButton");
  const footer = document.querySelector("footer");

  if (!footer || !whatsappButton) return;

  const footerTop = footer.offsetTop;
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // Total page height before footer
  const distanceFromBottom = document.body.offsetHeight - (scrollY + windowHeight);

  // When close to footer, push button up
  if (distanceFromBottom < 80) {
    whatsappButton.style.bottom = `${70 - distanceFromBottom + 20}px`;
  } else {
    whatsappButton.style.bottom = "20px";
  }
});
