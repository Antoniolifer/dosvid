import HomePage from "./pages/HomePage";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

import ContextProvider from "./context/ContextProvider";
function App() {
  
  return (
    
    <ContextProvider>
      <div className="flex flex-col h-full">
      <Navbar /> 
      <HomePage />
      <Footer />
      </div>
    </ContextProvider>
  )
}

export default App;
