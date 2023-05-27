import React from 'react';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';
import YouTube from './youtube';

function Welcome(props) {
  return (
    <div className="container">
      <h1>Welcome to Quick Youtube Search!</h1>
      <p>This is a sample welcome page. Feel free to explore the youtube page.</p>
      <p>You could also refer to source code <a href="https://github.com/helenma0223234/youtube-video-search-react-redux"> here through Github</a>.</p>
    </div>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul id="navbar">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/youtube">YouTube</NavLink></li>
      </ul>
    </nav>
  );
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<FallBack />} />
          <Route path="/youtube" element={<YouTube />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
