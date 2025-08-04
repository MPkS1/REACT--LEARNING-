import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactLearning from './learning/ReactLearning';
import EnvironmentSetup from './learning/EnvironmentSetup';
import JSXAndComponents from './learning/JSXAndComponents';
import VariablesAndFunctions from './learning/VariablesAndFunctions';
import PropsAndState from './learning/PropsAndState';
import ConditionalAndEvents from './learning/ConditionalAndEvents';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle GitHub Pages routing
  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/REACT--LEARNING-/' || path === '/REACT--LEARNING-') {
      setCurrentPage('home');
    }
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'learning':
        return <ReactLearning />;
      case 'environment':
        return <EnvironmentSetup />;
      case 'jsx-components':
        return <JSXAndComponents />;
      case 'variables-functions':
        return <VariablesAndFunctions />;
      case 'props-state':
        return <PropsAndState />;
      case 'conditional-events':
        return <ConditionalAndEvents />;
      default:
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Welcome to Your React Learning Journey!</h1>
              <p>
                This is your React application. Let's start learning React together!
              </p>
              <div className="navigation-buttons">
                <button 
                  className="learn-button"
                  onClick={() => setCurrentPage('learning')}
                >
                  📚 Learn React Concepts
                </button>
                <button 
                  className="learn-button"
                  onClick={() => setCurrentPage('environment')}
                >
                  ⚙️ Environment Setup
                </button>
                <button 
                  className="learn-button"
                  onClick={() => setCurrentPage('jsx-components')}
                >
                  ⚡ JSX & Components
                </button>
                <button 
                  className="learn-button"
                  onClick={() => setCurrentPage('variables-functions')}
                >
                  📦 Variables & Functions
                </button>
                <button 
                  className="learn-button"
                  onClick={() => setCurrentPage('props-state')}
                >
                  🔄 Props & State
                </button>
                <button 
                  className="learn-button"
                  onClick={() => setCurrentPage('conditional-events')}
                >
                  ⚡ Conditional & Events
                </button>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official React Docs
                </a>
              </div>
            </header>
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      {currentPage !== 'home' && (
        <nav className="app-nav">
          <button 
            className="nav-button"
            onClick={() => setCurrentPage('home')}
          >
            🏠 Home
          </button>
          <button 
            className="nav-button"
            onClick={() => setCurrentPage('learning')}
          >
            📚 React Concepts
          </button>
          <button 
            className="nav-button"
            onClick={() => setCurrentPage('environment')}
          >
            ⚙️ Environment Setup
          </button>
          <button 
            className="nav-button"
            onClick={() => setCurrentPage('jsx-components')}
          >
            ⚡ JSX & Components
          </button>
          <button 
            className="nav-button"
            onClick={() => setCurrentPage('variables-functions')}
          >
            📦 Variables & Functions
          </button>
          <button 
            className="nav-button"
            onClick={() => setCurrentPage('props-state')}
          >
            🔄 Props & State
          </button>
          <button 
            className="nav-button"
            onClick={() => setCurrentPage('conditional-events')}
          >
            ⚡ Conditional & Events
          </button>
        </nav>
      )}
      {renderPage()}
    </div>
  );
}

export default App;
