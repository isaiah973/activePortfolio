// import Home from "./Pages/Home";
import Home from "./Pages/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const shouldScrollToTop = sessionStorage.getItem("scrollToTop");

    if (shouldScrollToTop) {
      window.scrollTo(0, 0);
      sessionStorage.removeItem("scrollToTop");
    }
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
