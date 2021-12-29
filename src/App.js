import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/projects/Project';
import ProjectDetail from './pages/projects/ProjectDetail';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import Blogs from "./pages/publications/Blog/Blogs";
import ResearchPapers from "./pages/publications/ResearchPapers";
import Articles from "./pages/publications/Article/Articles";
import Webinar from "./pages/programs/Webinar";
import TalkShow from "./pages/programs/TalkShow";
import Courses from "./pages/courses/Courses";
import ScrollToTop from "./ScrollToTop";
import ArticalDetail from "./pages/publications/Article/ArticalDetail";
import WebinarDetail from "./pages/programs/WebinarDetail";
import TalkShowDetail from "./pages/programs/TalkShowDetail";
import CourseDetail from "./pages/courses/CourseDetail";

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
          <Route exact path="/webinars/detail" component={WebinarDetail} />
          <Route exact path="/talk-shows" component={TalkShow} />
          <Route exact path="/talk-shows/detail" component={TalkShowDetail} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/courses/detail" component={CourseDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
