// blog toc javascript
document.addEventListener('DOMContentLoaded', function () {

    const articleBody = document.querySelector('.bp-article-body') || document.querySelector('.article-main-content');
    const tocList = document.getElementById('bpTocList');
    const tocSidebar = document.getElementById('bpTocSidebar');
    const tocToggle = document.getElementById('bpTocToggle');
    const tocInner = document.querySelector('.bp-toc-inner');

    if (!articleBody || !tocList) return;

    const headings = Array.from(articleBody.querySelectorAll('h2'));

    if (headings.length === 0) {
        const wrapper = document.querySelector('.bp-toc-wrapper');
        if (wrapper) wrapper.style.display = 'none';
        return;
    }

    const usedIds = new Set();

    headings.forEach(function (heading) {
        let slug = heading.textContent
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

        if (!slug) slug = 'section';

        let finalId = slug;
        let counter = 2;
        while (usedIds.has(finalId) || (document.getElementById(finalId) && document.getElementById(finalId) !== heading)) {
            finalId = slug + '-' + counter;
            counter++;
        }
        usedIds.add(finalId);

        heading.id = finalId;

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + finalId;
        a.textContent = heading.textContent.trim();
        a.dataset.target = finalId;

        li.appendChild(a);
        tocList.appendChild(li);
    });

    const tocLinks = Array.from(tocList.querySelectorAll('a'));

    // Smooth scroll on TOC link click
    tocLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.dataset.target;
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            const headerOffset = 105;
            const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            setActiveToc(targetId);

            if (tocSidebar && tocSidebar.classList.contains('bp-toc-open')) {
                tocSidebar.classList.remove('bp-toc-open');
                if (tocToggle) tocToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Mobile toggle
    if (tocToggle && tocSidebar) {
        tocToggle.addEventListener('click', function () {
            const isOpen = tocSidebar.classList.toggle('bp-toc-open');
            tocToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    let currentActiveId = null;

    function setActiveToc(activeId) {
        if (!activeId) return;
        if (activeId === currentActiveId) return;

        currentActiveId = activeId;
        let activeLink = null;

        tocLinks.forEach(function (link) {
            if (link.dataset.target === activeId) {
                link.classList.add('bp-toc-active');
                activeLink = link;
            } else {
                link.classList.remove('bp-toc-active');
            }
        });

        // Keep active link visible in TOC container when scrolling far down
        if (activeLink && tocInner) {
            const linkTop = activeLink.offsetTop;
            const linkHeight = activeLink.offsetHeight;
            const innerScrollTop = tocInner.scrollTop;
            const innerHeight = tocInner.clientHeight;

            if (linkTop < innerScrollTop + 25 || linkTop + linkHeight > innerScrollTop + innerHeight - 25) {
                tocInner.scrollTo({
                    top: Math.max(0, linkTop - (innerHeight / 2) + (linkHeight / 2)),
                    behavior: 'smooth'
                });
            }
        }
    }

    let ticking = false;

    function updateActiveOnScroll() {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                const headerOffset = 125;
                const scrollY = window.pageYOffset || document.documentElement.scrollTop;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;

                let activeId = null;

                // When scrolled near the end of the document, activate the last section
                if (scrollY + windowHeight >= documentHeight - 140) {
                    activeId = headings[headings.length - 1].id;
                } else {
                    // Check headings from top to bottom
                    for (let i = 0; i < headings.length; i++) {
                        const heading = headings[i];
                        const rect = heading.getBoundingClientRect();

                        if (rect.top <= headerOffset + 30) {
                            activeId = heading.id;
                        } else {
                            break;
                        }
                    }

                    // Fallback to first heading if scrolled past hero
                    if (!activeId && headings.length > 0) {
                        const firstRect = headings[0].getBoundingClientRect();
                        if (firstRect.top < windowHeight * 0.5) {
                            activeId = headings[0].id;
                        }
                    }
                }

                if (activeId) {
                    setActiveToc(activeId);
                }

                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', updateActiveOnScroll, { passive: true });
    window.addEventListener('resize', updateActiveOnScroll, { passive: true });

    // Initial detection on page load
    setTimeout(updateActiveOnScroll, 100);
});




