// blog toc javascript
document.addEventListener('DOMContentLoaded', function () {

    const articleBody = document.querySelector('.bp-article-body');
    const tocList = document.getElementById('bpTocList');
    const tocSidebar = document.getElementById('bpTocSidebar');
    const tocToggle = document.getElementById('bpTocToggle');

    if (!articleBody || !tocList) return;

    const headings = articleBody.querySelectorAll('h2');

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
        while (usedIds.has(finalId)) {
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

    const tocLinks = tocList.querySelectorAll('a');

    tocLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.dataset.target;
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            const headerOffset = 90;
            const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            if (tocSidebar && tocSidebar.classList.contains('bp-toc-open')) {
                tocSidebar.classList.remove('bp-toc-open');
                if (tocToggle) tocToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    if (tocToggle && tocSidebar) {
        tocToggle.addEventListener('click', function () {
            const isOpen = tocSidebar.classList.toggle('bp-toc-open');
            tocToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                const id = entry.target.id;
                const link = tocList.querySelector('a[data-target="' + id + '"]');
                if (!link) return;

                if (entry.isIntersecting) {
                    tocLinks.forEach(function (l) { l.classList.remove('bp-toc-active'); });
                    link.classList.add('bp-toc-active');
                }
            });
        }, {
            rootMargin: '-100px 0px -70% 0px',
            threshold: 0
        });

        headings.forEach(function (heading) {
            observer.observe(heading);
        });
    }

});



