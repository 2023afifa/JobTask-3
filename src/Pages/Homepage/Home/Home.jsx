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
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Element name="about">
                <About></About>
            </Element>
            <Element name="services">
                <Services></Services>
            </Element>
            <Element name="skills">
                <Skills></Skills>
            </Element>
            <Element name="projects">
                <Projects></Projects>
            </Element>
            <Element name="timeline">
                <Timeline></Timeline>
            </Element>
            <Element name="testimonials">
                <Testimonials></Testimonials>
            </Element>
            <Element name="contact">
                <Contact></Contact>
            </Element>
            <Footer></Footer>
        </div>
    );
};

export default Home;