// Debounce function (from GfG article)
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Throttle function (optional, you can choose to use or not)
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// The "search" function: simulate making API call or filtering
function search(query) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerText = `Searching for: ${query}`;
  console.log('Search triggered for:', query);
  // For real use: here you might call fetch(...) etc.
}

// Setup debounced and throttled versions
const debouncedSearch = debounce(search, 500);
// For example usage of throttle
const throttledSearch = throttle(search, 500);

const inputElem = document.getElementById('search-input');

inputElem.addEventListener('input', function(e) {
  const query = e.target.value;
  // Use either debounce or throttle here:
  
  // 1. Using debounce
  debouncedSearch(query);

  // 2. If you want throttle instead, comment above and use:
  // throttledSearch(query);
});
