

// document.addEventListener('DOMContentLoaded', function () {
//     // ======== DATA WITH LINKS =========
//     const coursesByCategory = {
//         all: [
//             { name: "Next.js", link: "nextjs.html" },
//             { name: "C with C++", link: "c.html" },
//             { name: "WordPress", link: "wordpress.html" },
//             { name: "Python", link: "python.html" },
//             { name: "DSA and C++", link: "dsa.html" },
//             { name: "PHP Core & Advanced", link: "php.html" },
//             { name: "Java Core & Advanced", link: "java.html" },
//             { name: "Digital Marketing", link: "marketing.html" },
//             { name: "Front End (React / Angular)", link: "frontend.html" },
//             { name: "Python with Django", link: "django.html" },
//             { name: "React Native", link: "reactnative.html" },
//             { name: "Video Editing", link: "video.html" },
//             { name: "MERN Stack", link: "mern.html" },
//             { name: "MEAN Stack", link: "mean.html" },
//             { name: "Java Full Stack", link: "javafs.html" },
//             { name: "Python Full Stack", link: "pythonfs.html" },
//             { name: "Data Analysis", link: "analysis.html" },
//              { name: "Data Science", link: "data_science.html" },
//             { name: "UI/UX Development ", link: "ui_ux.html" },
//           { name: "Mobile App Development", link: "mobile_app.html" }
//         ],
//         web: [
//             { name: "Next.js", link: "nextjs.html" },
//             { name: "WordPress", link: "wordpress.html" },
//             { name: "PHP Core & Advanced", link: "php.html" },
//             { name: "Front End (React / Angular)", link: "frontend.html" },
//             { name: "Python with Django", link: "django.html" },
//             { name: "MERN Stack", link: "mern.html" },
//             { name: "MEAN Stack", link: "mean.html" },
//             { name: "Java Full Stack", link: "javafullstack.html" },
//             { name: "Python Full Stack", link: "pythonfullstack.html" }
//         ],
//         language: [
//             { name: "C with C++", link: "c.html" },
//             { name: "Python", link: "python.html" },
//             { name: "Java Core & Advanced", link: "java.html" },
//             { name: "DSA and C++", link: "dsa.html" }
//         ],
//         app: [
//             { name: "React Native", link: "reactnative.html" }
//         ],
//         ai: [
//             { name: "Data Analysis", link: "dataanalysis.html" },
//             { name: "Machine Learning", link: "ml.html" }
//         ],
//         other: [
//             { name: "Digital Marketing", link: "marketing.html" },
//             { name: "Video Editing", link: "videoediting.html" },
//             { name: "BDE", link: "B_D_E.html" }
//         ]
//     };

//     const coursesLinkDesktop = document.getElementById('courses-link');
//     const dropdownPanel = document.getElementById('dropdown-panel');
//     const categoryList = document.getElementById('category-list');
//     const courseList = document.getElementById('course-list');
//     let dropdownVisible = false;

//     const hamburgerIcon = document.getElementById('hamburger-icon');
//     const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
//     const closeButton = document.getElementById('close-mobile-nav');
//     const mobileNavLinks = mobileNavOverlay ? mobileNavOverlay.querySelectorAll('ul.mobile-nav-page a') : [];
//     const mobileCoursesLink = document.getElementById('mobile-courses-link');
//     let mobileCoursesDropdown = null;

//     function openMobileMenu() {
//         if (mobileNavOverlay) {
//             mobileNavOverlay.classList.add('active');
//             document.body.style.overflow = 'hidden';
//         }
//     }

//     function closeMobileMenu() {
//         if (mobileNavOverlay) {
//             mobileNavOverlay.classList.remove('active');
//             document.body.style.overflow = '';
//             if (mobileCoursesDropdown && mobileCoursesDropdown.classList.contains('active')) {
//                 mobileCoursesDropdown.classList.remove('active');
//             }
//         }
//     }

//     if (hamburgerIcon && mobileNavOverlay) {
//         hamburgerIcon.addEventListener('click', function () {
//             if (mobileNavOverlay.classList.contains('active')) {
//                 closeMobileMenu();
//             } else {
//                 openMobileMenu();
//             }
//         });
//     }

//     if (closeButton) {
//         closeButton.addEventListener('click', closeMobileMenu);
//     }

//     mobileNavLinks.forEach(link => {
//         if (link.id !== 'mobile-courses-link') {
//             link.addEventListener('click', closeMobileMenu);
//         }
//     });

//     if (mobileNavOverlay) {
//         mobileNavOverlay.addEventListener('click', function (event) {
//             if (event.target === mobileNavOverlay) {
//                 closeMobileMenu();
//             }
//         });
//     }

//     // ======== DESKTOP COURSES DROPDOWN =========
//     if (coursesLinkDesktop && dropdownPanel) {
//         coursesLinkDesktop.addEventListener('click', (e) => {
//             e.preventDefault();
//             dropdownVisible = !dropdownVisible;
//             if (dropdownVisible) {
//                 dropdownPanel.classList.add('show-dropdown');
//                 coursesLinkDesktop.classList.add('active');
//             } else {
//                 dropdownPanel.classList.remove('show-dropdown');
//                 coursesLinkDesktop.classList.remove('active');
//             }
//         });
//     }

//     document.addEventListener('click', (e) => {
//         if (dropdownPanel && coursesLinkDesktop &&
//             !dropdownPanel.contains(e.target) && e.target !== coursesLinkDesktop) {
//             dropdownPanel.classList.remove('show-dropdown');
//             coursesLinkDesktop.classList.remove('active');
//             dropdownVisible = false;
//         }
//     });

//     if (categoryList && courseList) {
//         const categoryItems = categoryList.querySelectorAll('li');

//         categoryItems.forEach(item => {
//             item.addEventListener('mouseenter', () => {
//                 categoryItems.forEach(i => i.classList.remove('active'));
//                 item.classList.add('active');
//                 const category = item.getAttribute('data-category');
//                 const courses = coursesByCategory[category];
//                 courseList.innerHTML = "";
//                 if (courses) {
//                     courses.forEach(course => {
//                         const li = document.createElement('li');
//                         const a = document.createElement('a');
//                         a.href = course.link;
//                         a.textContent = course.name;
//                         li.appendChild(a);
//                         courseList.appendChild(li);
//                     });
//                 }
//             });
//         });

//         if (categoryItems.length > 0) {
//             categoryItems[0].dispatchEvent(new Event('mouseenter'));
//         }
//     }

//     // ======== MOBILE DROPDOWN FOR COURSES =========
//     if (mobileCoursesLink) {
//         const mobileCoursesDropdownHTML = `
//             <ul class="mobile-courses-dropdown">
//                 ${Object.keys(coursesByCategory).map(categoryKey => `
//                     <li><a href="#" class="mobile-category-link" data-category="${categoryKey}">${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}</a></li>
//                 `).join('')}
//             </ul>
//         `;
//         mobileCoursesLink.insertAdjacentHTML('afterend', mobileCoursesDropdownHTML);
//         mobileCoursesDropdown = mobileCoursesLink.nextElementSibling;

//         mobileCoursesLink.addEventListener('click', function (e) {
//             e.preventDefault();
//             if (mobileCoursesDropdown) {
//                 mobileCoursesDropdown.classList.toggle('active');
//             }
//         });

//         if (mobileCoursesDropdown) {
//             const mobileCategoryLinks = mobileCoursesDropdown.querySelectorAll('.mobile-category-link');
//             mobileCategoryLinks.forEach(link => {
//                 link.addEventListener('click', function (e) {
//                     e.preventDefault();
//                     const category = e.target.getAttribute('data-category');
//                     const courses = coursesByCategory[category];

//                     if (courses) {
//                         const courseListHTML = `
//                             <ul class="mobile-course-links">
//                                 ${courses.map(c => `<li><a href="${c.link}">${c.name}</a></li>`).join('')}
//                             </ul>
//                         `;
//                         mobileCoursesDropdown.innerHTML = `
//                             <li><a href="#" class="back-to-categories">← Back to Categories</a></li>
//                             ${courseListHTML}
//                         `;

//                         const backLink = mobileCoursesDropdown.querySelector('.back-to-categories');
//                         backLink.addEventListener('click', function (e) {
//                             e.preventDefault();
//                             mobileCoursesDropdown.innerHTML = mobileCoursesDropdownHTML;
//                             // rebind links
//                             mobileCoursesDropdown.querySelectorAll('.mobile-category-link').forEach(l => {
//                                 l.addEventListener('click', arguments.callee);
//                             });
//                         });
//                     }
//                 });
//             });
//         }
//     }
// });

// //For Whatsapp   

// window.addEventListener("scroll", () => {
//   const whatsappButton = document.getElementById("whatsappButton");
//   const footer = document.querySelector("footer");

//   if (!footer || !whatsappButton) return;

//   const footerTop = footer.offsetTop;
//   const scrollY = window.scrollY;
//   const windowHeight = window.innerHeight;

//   // Total page height before footer
//   const distanceFromBottom = document.body.offsetHeight - (scrollY + windowHeight);

//   // When close to footer, push button up
//   if (distanceFromBottom < 80) {
//     whatsappButton.style.bottom = `${70 - distanceFromBottom + 20}px`;
//   } else {
//     whatsappButton.style.bottom = "20px";
//   }
// });


// function showCourseList(category) {
//     const courses = coursesByCategory[category];
//     mobileCoursesDropdown.innerHTML = `
//         <li><a href="#" class="back-to-categories">← Back</a></li>
//         <ul class="mobile-course-links">
//             ${courses.map(c => `<li><a href="${c.link}">${c.name}</a></li>`).join('')}
//         </ul>
//     `;

//     const courseLinks = mobileCoursesDropdown.querySelector(".mobile-course-links");
//     courseLinks.style.maxHeight = "80vh";
//     courseLinks.style.overflowY = "auto";

//     mobileCoursesDropdown
//         .querySelector(".back-to-categories")
//         .addEventListener("click", function (e) {
//             e.preventDefault();
//             mobileCoursesDropdown.innerHTML = createCategoryList();
//             bindCategoryClicks();
//         });
// }





// testing 


document.addEventListener('DOMContentLoaded', function () {
  // ======== DATA WITH LINKS =========
  const coursesByCategory = {
    all: [
      { name: "Digital Marketing", link: "digital_marketing.html" },
      { name: "Digital Marketing with AI", link: "digital_marketing_with_ai.html" },
      { name: "Python Full Stack", link: "python_full_stack.html" },
      { name: "Python AI and ML", link: "python_ai_and_ml_course.html" },
      { name: "MERN Stack", link: "mern_stack.html" },
      { name: "MEAN Stack", link: "mean_stack.html" },
      { name: "Data Analysis", link: "data_analysis.html" },
      { name: "Data Science with AI", link: "data_science.html" },
      { name: "Video Editing", link: "video_editing.html" },
      { name: "Graphics & Video Editing", link: "graphics_design_video_editing.html" },
      { name: "Graphics Design", link: "graphics_design_course.html" },
      { name: "C & C++", link: "C_and_C++.html" },
      { name: "Java Full Stack", link: "java_full_stack.html" },
      { name: "Java Core & Advanced", link: "java_core_and_advanced.html" },
      { name: "C, C++ & DSA", link: "dsa.html" },
      { name: "Java & DSA", link: "java_dsa_course.html" },
      { name: "React", link: "frontend_with_react.html" },
      // { name: "Angular", link: "angular_course.html" },
      { name: "Python with Django", link: "django.html" },
      // { name: "Python", link: "python.html" },
      { name: "PHP Core & Advanced", link: "php.html" },
      // { name: "WordPress", link: "wordpress_development.html" },
      // { name: "Mobile App Development", link: "mobile_app_development.html" },
      // { name: "UI/UX Development ", link: "ui_ux_design.html" },
      // { name: "Next.js", link: "nextjs_development.html" },
    ],
    web: [
      // { name: "Next.js", link: "nextjs_development.html" },
      // { name: "WordPress", link: "wordpress_development.html" },
      { name: "MERN Stack", link: "mern_stack.html" },
      { name: "MEAN Stack", link: "mean_stack.html" },
      { name: "React", link: "frontend_with_react.html" },
      { name: "PHP Core & Advanced", link: "php.html" },

      { name: "Python with Django", link: "django.html" },
      { name: "Java Full Stack", link: "java_full_stack.html" },
      { name: "Python Full Stack", link: "python_full_stack.html" }

    ],
    language: [
      { name: "C & C++", link: "C_and_C++.html" },
      // { name: "Python", link: "python.html" },
      { name: "Java Core & Advanced", link: "java_core_and_advanced.html" },
      { name: "C, C++ with DSA", link: "dsa.html" },
      { name: "Java & DSA", link: "java_dsa_course.html" },
    ],
    app: [
      { name: "React", link: "react_course.html" }
    ],
    ai: [
      { name: "Python AI and ML", link: "python_ai_and_ml_course.html" },
      { name: "Data Science with AI", link: "data_science.html" },
      { name: "Machine Learning", link: "machine_learning.html" }
    ],
    other: [
      { name: "Digital Marketing", link: "digital_marketing.html" },
      { name: "Digital Marketing with AI", link: "digital_marketing_with_ai.html" },
      { name: "Video Editing", link: "video_editing.html" },
      { name: "Graphics & Video Editing", link: "graphics_design_video_editing.html" },
      // { name: "BDE", link: "business_development_executive.html" }
    ]
  };

  const coursesLinkDesktop = document.getElementById('courses-link');
  const dropdownPanel = document.getElementById('dropdown-panel');
  const categoryList = document.getElementById('category-list');
  const courseList = document.getElementById('course-list');
  let dropdownVisible = false;

  const hamburgerIcon = document.getElementById('hamburger-icon');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const closeButton = document.getElementById('close-mobile-nav');
  const mobileNavLinks = mobileNavOverlay ? mobileNavOverlay.querySelectorAll('ul.mobile-nav-page a') : [];
  const mobileCoursesLink = document.getElementById('mobile-courses-link');
  let mobileCoursesDropdown = null;

  function openMobileMenu() {
    if (mobileNavOverlay) {
      mobileNavOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileNavOverlay) {
      mobileNavOverlay.classList.remove('active');
      document.body.style.overflow = '';
      if (mobileCoursesDropdown && mobileCoursesDropdown.classList.contains('active')) {
        mobileCoursesDropdown.classList.remove('active');
      }
    }
  }

  if (hamburgerIcon && mobileNavOverlay) {
    hamburgerIcon.addEventListener('click', function () {
      if (mobileNavOverlay.classList.contains('active')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    if (link.id !== 'mobile-courses-link') {
      link.addEventListener('click', closeMobileMenu);
    }
  });

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', function (event) {
      if (event.target === mobileNavOverlay) {
        closeMobileMenu();
      }
    });
  }

  // ======== DESKTOP COURSES DROPDOWN =========
  if (coursesLinkDesktop && dropdownPanel) {
    coursesLinkDesktop.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownVisible = !dropdownVisible;
      if (dropdownVisible) {
        dropdownPanel.classList.add('show-dropdown');
        coursesLinkDesktop.classList.add('active');
      } else {
        dropdownPanel.classList.remove('show-dropdown');
        coursesLinkDesktop.classList.remove('active');
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (dropdownPanel && coursesLinkDesktop &&
      !dropdownPanel.contains(e.target) && e.target !== coursesLinkDesktop) {
      dropdownPanel.classList.remove('show-dropdown');
      coursesLinkDesktop.classList.remove('active');
      dropdownVisible = false;
    }
  });

  if (categoryList && courseList) {
    const categoryItems = categoryList.querySelectorAll('li');

    categoryItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        categoryItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const category = item.getAttribute('data-category');
        const courses = coursesByCategory[category];
        courseList.innerHTML = "";
        if (courses) {
          courses.forEach(course => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = course.link;
            a.textContent = course.name;
            li.appendChild(a);
            courseList.appendChild(li);
          });
        }
      });
    });

    if (categoryItems.length > 0) {
      categoryItems[0].dispatchEvent(new Event('mouseenter'));
    }
  }

  // ======== MOBILE DROPDOWN FOR COURSES =========
  if (mobileCoursesLink) {
    const mobileCoursesDropdownHTML = `
            <ul class="mobile-courses-dropdown">
                ${Object.keys(coursesByCategory).map(categoryKey => `
                    <li><a href="#" class="mobile-category-link" data-category="${categoryKey}">${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}</a></li>
                `).join('')}
            </ul>
        `;
    mobileCoursesLink.insertAdjacentHTML('afterend', mobileCoursesDropdownHTML);
    mobileCoursesDropdown = mobileCoursesLink.nextElementSibling;

    // mobileCoursesLink.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     if (mobileCoursesDropdown) {
    //         mobileCoursesDropdown.classList.toggle('active');
    //     }
    // });

    // if (mobileCoursesDropdown) {
    //     const mobileCategoryLinks = mobileCoursesDropdown.querySelectorAll('.mobile-category-link');
    //     mobileCategoryLinks.forEach(link => {
    //         link.addEventListener('click', function (e) {
    //             e.preventDefault();
    //             const category = e.target.getAttribute('data-category');
    //             const courses = coursesByCategory[category];

    //             if (courses) {
    //                 const courseListHTML = `
    //                     <ul class="mobile-course-links">
    //                         ${courses.map(c => `<li><a href="${c.link}">${c.name}</a></li>`).join('')}
    //                     </ul>
    //                 `;
    //                 mobileCoursesDropdown.innerHTML = `
    //                     // <li><a href="#" class="back-to-categories">← Back to Categories</a></li>
    //                     ${courseListHTML}
    //                 `;

    //                 const backLink = mobileCoursesDropdown.querySelector('.back-to-categories');
    //                 backLink.addEventListener('click', function (e) {
    //                     e.preventDefault();
    //                     mobileCoursesDropdown.innerHTML = mobileCoursesDropdownHTML;
    //                     // rebind links
    //                     mobileCoursesDropdown.querySelectorAll('.mobile-category-link').forEach(l => {
    //                         l.addEventListener('click', arguments.callee);
    //                     });
    //                 });
    //             }
    //         });
    //     });
    // }
    // ======== MOBILE DROPDOWN FOR COURSES (FULLY FIXED) =========
    if (mobileCoursesLink) {
      const mobileCoursesDropdownHTML = `
    <ul class="mobile-courses-dropdown">
      ${Object.keys(coursesByCategory)
          .map(
            (categoryKey) => `
        <li>
          <a href="#" class="mobile-category-link" data-category="${categoryKey}">
            ${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
          </a>
        </li>
      `
          )
          .join("")}
    </ul>
  `;

      // Create dropdown and add it to DOM
      mobileCoursesLink.insertAdjacentHTML("afterend", mobileCoursesDropdownHTML);
      const mobileCoursesDropdown = mobileCoursesLink.nextElementSibling;

      // Function to show all categories again
      function showCategories() {
        mobileCoursesDropdown.innerHTML = `
      ${Object.keys(coursesByCategory)
            .map(
              (categoryKey) => `
        <li>
          <a href="#" class="mobile-category-link" data-category="${categoryKey}">
            ${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
          </a>
        </li>
      `
            )
            .join("")}
    `;
        bindCategoryLinks();
      }

      // Function to show courses for a category
      function showCourses(category) {
        const courses = coursesByCategory[category] || [];

        const courseListHTML = `
      <li>
        <button class="back-btn">Back to Categories</button>
      </li>
      <ul class="mobile-course-links">
        ${courses
            .map(
              (c) => `
          <li><a href="${c.link}">${c.name}</a></li>
        `
            )
            .join("")}
      </ul>
    `;

        mobileCoursesDropdown.innerHTML = courseListHTML;

        // Add scroll for long lists
        const courseList = mobileCoursesDropdown.querySelector(".mobile-course-links");
        if (courseList) {
          courseList.style.maxHeight = "70vh";
          courseList.style.overflowY = "auto";
        }

        // Handle back button click
        const backBtn = mobileCoursesDropdown.querySelector(".back-btn");
        if (backBtn) {
          backBtn.addEventListener("click", (e) => {
            e.preventDefault();
            showCategories();
          });
        }
      }

      // Bind click to all category links
      function bindCategoryLinks() {
        const categoryLinks = mobileCoursesDropdown.querySelectorAll(".mobile-category-link");
        categoryLinks.forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const category = e.currentTarget.dataset.category;
            showCourses(category);
          });
        });
      }

      // Initial binding
      bindCategoryLinks();

      // Toggle dropdown open/close
      mobileCoursesLink.addEventListener("click", (e) => {
        e.preventDefault();
        mobileCoursesDropdown.classList.toggle("active");
        if (!mobileCoursesDropdown.classList.contains("active")) {
          mobileCoursesDropdown.innerHTML = ""; // hide content when closing
        } else {
          showCategories();
        }
      });
    }

  }

});

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

// for CourseList

function showCourseList(category) {
  const courses = coursesByCategory[category];
  mobileCoursesDropdown.innerHTML = `
        <li><a href="#" class="back-to-categories">← Back</a></li>
        <ul class="mobile-course-links">
            ${courses.map(c => `<li><a href="${c.link}">${c.name}</a></li>`).join('')}
        </ul>
    `;

  const courseLinks = mobileCoursesDropdown.querySelector(".mobile-course-links");
  courseLinks.style.maxHeight = "80vh";
  courseLinks.style.overflowY = "auto";

  mobileCoursesDropdown
    .querySelector(".back-to-categories")
    .addEventListener("click", function (e) {
      e.preventDefault();
      mobileCoursesDropdown.innerHTML = createCategoryList();
      bindCategoryClicks();
    });
}

// Frequently Asked Questions
// const faqs = document.querySelectorAll(".faq-item");

// faqs.forEach((item) => {
//   item.querySelector(".faq-question").addEventListener("click", () => {
//     faqs.forEach(f => f.classList.remove("active"));
//     item.classList.toggle("active");
//   });
// });

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // If already open → close it
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      // Close all first (optional: remove this if you want multiple open)
      faqs.forEach(f => f.classList.remove("active"));

      // Open clicked one
      item.classList.add("active");
    }
  });
});

// Annimation Effect on Certification
const cards = document.querySelectorAll('.certificate-gallery-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }

  });
}, {
  threshold: 0.1
});

cards.forEach(card => observer.observe(card));


// Annimation for Learning Section
document.addEventListener('DOMContentLoaded', () => {
  const cols = document.querySelectorAll('.learning-format-col');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.2 });

  cols.forEach(col => observer.observe(col));
});