import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/projects/Project';
import ProjectDetail from './pages/projects/ProjectDetail';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import Blogs from "./pages/publications/Blogs";
import ResearchPapers from "./pages/publications/ResearchPapers";
import Articles from "./pages/publications/Article/Articles";
import Webinar from "./pages/programs/Webinar";
import TalkShow from "./pages/programs/TalkShow";
import Courses from "./pages/courses/Courses";
import ScrollToTop from "./ScrollToTop";
import ArticalDetail from "./pages/publications/Article/ArticalDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/projects/:slug" component={ProjectDetail} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/research-papers" component={ResearchPapers} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/:slug" component={ArticalDetail} />
          <Route exact path="/webinars" component={Webinar} />
          <Route exact path="/talk-shows" component={TalkShow} />
          <Route exact path="/courses" component={Courses} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
