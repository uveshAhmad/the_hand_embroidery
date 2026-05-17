import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, try to scroll to the element
    if (hash) {
      // Need a slight delay to ensure the DOM is updated when navigating between pages
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    // Otherwise scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
