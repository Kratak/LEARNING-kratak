import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <nav>
        <i className="icon-home"><span>Home</span></i>
      </nav>
      <span>
        <p><i className="icon-github-squared"></i><a className="aGithub" href="https://github.com/Kratak" target="_blank"> github </a></p>
				<p><i className="icon-linkedin-squared"></i><a className="alinkedin" href="https://www.linkedin.com/in/maciej-kaczanowski-189404166/" target="_blank"> linkedin </a></p>
				<p><i className="icon-mail-alt"></i><a className="amail" href="mailto:contact.kaczanowski@gmail.com"> mail </a></p>
				<p><i className="icon-codeopen"></i><a className="aCodepen" href="https://codepen.io/kratak/#" target="_blank"> codepen </a></p>
      </span>
      </>
    );
  }
}

export default App;
