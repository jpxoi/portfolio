import { useEffect } from 'react'
import Landing from './Pages/Landing'

function App() {

  /* Lazy Load CSS */
  useEffect(() => {
    const decodeHTML = function(html){
      const textarea = document.createElement('textarea');
      textarea.innerHTML = html;
      return textarea.value;
    };
    const getItemsFromContainerText = function(container, selector){
      const parser = new DOMParser();
      const parsedHtml = parser.parseFromString(decodeHTML(container.textContent), 'text/html');
    
      return parsedHtml.querySelectorAll(selector);
    };
    function loadCss(){
      const cssContainers = document.querySelectorAll('noscript[data-css-lazyload]');
      if(!cssContainers){
        return;
      }
      const styleSheets = document.createDocumentFragment();
      for(const cssContainer of cssContainers){
        const sheets = getItemsFromContainerText(cssContainer, 'link[rel="stylesheet"]');
        styleSheets.append(...sheets);
        cssContainer.remove();
      }
      document.head.append(styleSheets);
    }
    loadCss();
  }, [])

  return (
    <>
      <Landing />
    </>
  )
}

export default App
