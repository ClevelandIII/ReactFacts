//compiles components to send to main jsx file

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <Main />
            <Footer />
        </>
    );
}
