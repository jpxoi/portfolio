import { useEffect } from 'react'
import Landing from './Pages/Landing'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error404 from './Pages/Error404';
import Privacy from './Pages/Privacy';

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


  /* Light/Dark Mode */
  useEffect(() => {
    const themeButton = document.getElementById("theme-button")
    const lightTheme = "light-theme"
    const iconTheme = "bx-sun"

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme")
    const selectedIcon = localStorage.getItem("selected-icon")

    // We obtain the current theme that the interface has by validating the light-theme class
    const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? "dark" : "light"
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun"

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](lightTheme)
      themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme)
    }
    
    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener("click", () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(lightTheme)
      themeButton.classList.toggle(iconTheme)

      // We save the theme and the current icon that the user chose
      localStorage.setItem("selected-theme", getCurrentTheme())
      localStorage.setItem("selected-icon", getCurrentIcon())
    })
}, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<Privacy />} />          
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
