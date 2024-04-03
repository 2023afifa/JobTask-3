import About from "../About/About";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Timeline from "../Timeline/Timeline";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";

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
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;