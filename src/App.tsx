import Header from './components/header/Header.tsx';
import './App.css'
import {BrowserRouter} from "react-router-dom";
import About from "./components/about/About.tsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <About />
        </BrowserRouter>
    </>
  )
}

export default App
