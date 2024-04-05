import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Timeline from "../Timeline/Timeline";
import Contact from "../Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Timeline></Timeline>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;