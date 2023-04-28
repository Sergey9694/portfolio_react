import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";

import styles from "./App.module.scss";

function App() {
    return (
        <div className={styles.app}>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default App;
