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
import Symposium from "./pages/programs/Symposium";
import Courses from "./pages/courses/Courses";
import ScrollToTop from "./ScrollToTop";
import ArticalDetail from "./pages/publications/Article/ArticalDetail";
import WebinarDetail from "./pages/programs/WebinarDetail";
import SymposiumDetail from "./pages/programs/SymposiumDetail";
import CourseDetail from "./pages/courses/CourseDetail";
import BlogDetail from "./pages/publications/Blog/BlogDetail";

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
          <Route exact path="/blogs/:slug" component={BlogDetail} />
          <Route exact path="/research-papers" component={ResearchPapers} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/:slug" component={ArticalDetail} />
          <Route exact path="/webinars" component={Webinar} />
          <Route exact path="/webinars/:id" component={WebinarDetail} />
          <Route exact path="/symposiums/" component={Symposium} />
          <Route exact path="/symposiums/:id" component={SymposiumDetail} />
          <Route exact path="/courses/" component={Courses} />
          <Route exact path="/courses/:id" component={CourseDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
