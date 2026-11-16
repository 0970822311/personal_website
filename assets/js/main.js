/**
 * Portfolio & Project Showcase - Core JavaScript
 * Handles dynamic filtering, mobile navigation, category counts, and interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProjectFilter();
  initBackToTop();
});

/**
 * 1. Mobile Navigation Toggle
 */
function initNavigation() {
  const toggleBtn = document.querySelector('.nav-mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? '✕' : '☰';
  });

  // Close nav when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '☰';
    });
  });
}

/**
 * 2. Dynamic Project Filter & Category Counter
 */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const emptyState = document.querySelector('.empty-state');
  const filterInfo = document.querySelector('.filter-info');

  if (!filterBtns.length || !projectCards.length) return;

  // Update counts for each category button
  updateCategoryCounts(filterBtns, projectCards);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button style
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.getAttribute('data-filter');
      let visibleCount = 0;

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.classList.remove('is-hidden');
          visibleCount++;
        } else {
          card.classList.add('is-hidden');
        }
      });

      // Show or hide empty state if no projects match
      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.style.display = 'block';
        } else {
          emptyState.style.display = 'none';
        }
      }

      // Update filter info text
      if (filterInfo) {
        const categoryName = btn.textContent.trim().replace(/\d+$/, '').trim();
        filterInfo.textContent = `顯示中：${categoryName} (${visibleCount} 件作品)`;
      }
    });
  });
}

/**
 * Calculate and display project counts per filter button
 */
function updateCategoryCounts(buttons, cards) {
  const counts = { all: cards.length };

  cards.forEach(card => {
    const cat = card.getAttribute('data-category');
    if (cat) {
      counts[cat] = (counts[cat] || 0) + 1;
    }
  });

  buttons.forEach(btn => {
    const filter = btn.getAttribute('data-filter');
    const countSpan = btn.querySelector('.count');
    if (countSpan) {
      countSpan.textContent = counts[filter] || 0;
    }
  });
}

/**
 * 3. Back to Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
