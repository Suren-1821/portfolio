import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Skills from "./components/Skills.jsx";
import Architecture from "./components/Architecture.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Blog from "./components/Blog.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import WhatsAppFAB from "./components/WhatsAppFAB.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Spinner from "./components/Spinner.jsx";
import { fetchPortfolio } from "./api.js";

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolio()
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="load-state">
        Couldn't reach the API at <code>/api/portfolio</code>. Make sure the backend server is running on port 4000.
      </div>
    );
  }

  if (!data) {
    return <Spinner />;
  }

  return (
    <>
      <ScrollProgress />
      <Nav />
      <Hero profile={data.profile} />
      <Stats stats={data.stats} />
      <Skills skills={data.skills} />
      <Architecture />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Blog data={data.blog} />
      <Testimonials data={data.testimonials} />
      <Education education={data.education} />
      <Contact profile={data.profile} />
      <WhatsAppFAB phone={data.profile.phone} />
    </>
  );
}
