import { useEffect } from 'react';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Sets a unique document title + meta/OG/Twitter description for the current page. */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    const fullTitle = `${title} | Assunta's Creamy Alfredo`;
    document.title = fullTitle;
    setMeta('description', description);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
  }, [title, description]);
}
