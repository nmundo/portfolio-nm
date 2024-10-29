import Header from './components/header/Header.tsx';
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./components/about/About.tsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                {/*<Route path="/skills" element={<Skills />} />*/}
                {/*<Route path="/experience" element={<Experience />} />*/}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
