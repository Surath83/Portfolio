/* eslint-disable no-unused-vars */
import React, { Suspense, lazy, useRef } from 'react';
import Navbar from './Navbar';
import style from './App.module.css';
import Welcome from './Welcome';
import CookieBanner from './CookieBanner';
import reactLogo from './assets/react.svg';
import Links from './Links';

const Introduction = lazy(() => import('./Introduction'));
const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Project = lazy(() => import('./Project'));
const Contact = lazy(() => import('./Contact'));

function App() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    project: useRef(null),
    contact: useRef(null),
  };
    return (
    <>
      <div className={style.div} ref={sections.home}>
        <Navbar sections={sections} />
        <Welcome /><br />
        <CookieBanner />
        <Suspense fallback={<img src={reactLogo} className={style.logo} alt="React logo" />}>
          <Links />
          <div>
            <Introduction />
          </div>
          <div ref={sections.about}>
            <About />
          </div>
          <div id={style.id} ref={sections.skills}>
            <Skills />
          </div>
          <div ref={sections.project}>
            <Project />
          </div>
          <div ref={sections.contact}>
            <Contact />
          </div>
        </Suspense>
        <div className={style.copyright}>
          <p>© Copyright Reserved | Designed by <i><b className={style.b}>Surath</b></i></p>
        </div>
      </div>
    </>
  );
}

export default App;
