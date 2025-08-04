import React, { useState } from 'react';
import './EnvironmentSetup.css';

const EnvironmentSetup = () => {
  const [activeTab, setActiveTab] = useState('environment');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'environment':
        return <EnvironmentExplanation />;
      case 'installation':
        return <InstallationGuide />;
      case 'execution':
        return <ExecutionGuide />;
      case 'tips':
        return <CrucialTips />;
      default:
        return <EnvironmentExplanation />;
    }
  };

  return (
    <div className="environment-setup-container">
      <header className="setup-header">
        <h1>React Environment Setup Guide</h1>
        <p className="subtitle">Complete guide to setting up your React development environment</p>
      </header>

      <nav className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'environment' ? 'active' : ''}`}
          onClick={() => setActiveTab('environment')}
        >
          🌍 What is Environment?
        </button>
        <button 
          className={`tab-btn ${activeTab === 'installation' ? 'active' : ''}`}
          onClick={() => setActiveTab('installation')}
        >
          📥 Installation Guide
        </button>
        <button 
          className={`tab-btn ${activeTab === 'execution' ? 'active' : ''}`}
          onClick={() => setActiveTab('execution')}
        >
          🚀 Running React
        </button>
        <button 
          className={`tab-btn ${activeTab === 'tips' ? 'active' : ''}`}
          onClick={() => setActiveTab('tips')}
        >
          💡 Crucial Tips
        </button>
      </nav>

      <main className="setup-content">
        {renderTabContent()}
      </main>
    </div>
  );
};

// Environment Explanation Component
const EnvironmentExplanation = () => (
  <div className="tab-content">
    <section className="section">
      <h2>🌍 What is a Development Environment?</h2>
      <div className="content-block">
        <div className="definition-box">
          <h3>Development Environment Definition</h3>
          <p>
            A <strong>development environment</strong> is a workspace where developers write, test, and debug code. 
            It includes all the tools, software, libraries, and configurations needed to build applications.
          </p>
        </div>

        <div className="environment-components">
          <h3>Components of a React Development Environment:</h3>
          <div className="components-grid">
            <div className="component-item">
              <h4>💻 Operating System</h4>
              <p>Windows, macOS, or Linux - the foundation platform</p>
            </div>
            <div className="component-item">
              <h4>🟢 Node.js</h4>
              <p>JavaScript runtime that allows running JavaScript on your computer</p>
            </div>
            <div className="component-item">
              <h4>📦 NPM/Yarn</h4>
              <p>Package managers for installing and managing JavaScript libraries</p>
            </div>
            <div className="component-item">
              <h4>📝 Code Editor</h4>
              <p>VS Code, Sublime Text, or other editors for writing code</p>
            </div>
            <div className="component-item">
              <h4>🌐 Web Browser</h4>
              <p>Chrome, Firefox, Safari for testing and debugging</p>
            </div>
            <div className="component-item">
              <h4>⚛️ React Tools</h4>
              <p>Create React App, React Developer Tools, and other utilities</p>
            </div>
          </div>
        </div>

        <div className="environment-types">
          <h3>Types of Environments:</h3>
          <div className="env-types-list">
            <div className="env-type">
              <h4>🔧 Development Environment</h4>
              <p>Where you write and test code locally on your machine</p>
              <ul>
                <li>Hot reloading for instant feedback</li>
                <li>Debug tools and error messages</li>
                <li>Development-specific optimizations</li>
              </ul>
            </div>
            <div className="env-type">
              <h4>🧪 Testing Environment</h4>
              <p>Where you run automated tests and quality checks</p>
              <ul>
                <li>Unit tests, integration tests</li>
                <li>Code coverage reports</li>
                <li>Performance testing</li>
              </ul>
            </div>
            <div className="env-type">
              <h4>🚀 Production Environment</h4>
              <p>Where your app runs live for users</p>
              <ul>
                <li>Optimized, minified code</li>
                <li>Performance monitoring</li>
                <li>Security hardening</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Installation Guide Component
const InstallationGuide = () => (
  <div className="tab-content">
    <section className="section">
      <h2>📥 Complete Installation Guide</h2>
      
      <div className="installation-steps">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>🟢 Install Node.js</h3>
            <p>Node.js is required to run React development tools and manage packages.</p>
            
            <div className="os-instructions">
              <h4>For Windows:</h4>
              <ol>
                <li>Go to <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
                <li>Download the LTS (Long Term Support) version</li>
                <li>Run the installer and follow the setup wizard</li>
                <li>Check "Add to PATH" option during installation</li>
              </ol>

              <h4>For macOS:</h4>
              <ol>
                <li>Download from nodejs.org OR use Homebrew:</li>
                <li><code>brew install node</code></li>
              </ol>

              <h4>For Linux (Ubuntu/Debian):</h4>
              <ol>
                <li><code>curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -</code></li>
                <li><code>sudo apt-get install -y nodejs</code></li>
              </ol>
            </div>

            <div className="verification-box">
              <h4>✅ Verify Installation:</h4>
              <div className="code-block">
                <pre>{`node --version
npm --version`}</pre>
              </div>
              <p>You should see version numbers (e.g., v18.17.0)</p>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>📝 Choose a Code Editor</h3>
            <div className="editor-options">
              <div className="editor-option recommended">
                <h4>🎯 VS Code (Recommended)</h4>
                <p>Free, powerful, with excellent React support</p>
                <ul>
                  <li>Download from <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a></li>
                  <li>Install React extensions (ES7+ React/Redux snippets)</li>
                  <li>Built-in terminal and Git integration</li>
                </ul>
              </div>
              <div className="editor-option">
                <h4>Other Options:</h4>
                <ul>
                  <li><strong>WebStorm:</strong> Powerful but paid</li>
                  <li><strong>Sublime Text:</strong> Lightweight and fast</li>
                  <li><strong>Atom:</strong> GitHub's editor (discontinued)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>⚛️ Install Create React App</h3>
            <p>The official tool for creating React applications with zero configuration.</p>
            
            <div className="installation-methods">
              <h4>Method 1: Global Installation</h4>
              <div className="code-block">
                <pre>{`npm install -g create-react-app`}</pre>
              </div>

              <h4>Method 2: Using npx (Recommended)</h4>
              <div className="code-block">
                <pre>{`npx create-react-app my-app`}</pre>
              </div>
              <p>💡 npx runs the latest version without global installation</p>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>🚀 Create Your First React App</h3>
            <div className="code-block">
              <pre>{`npx create-react-app my-react-app
cd my-react-app
npm start`}</pre>
            </div>
            
            <div className="what-happens">
              <h4>What happens during creation:</h4>
              <ul>
                <li>📁 Creates project folder structure</li>
                <li>📦 Installs React and dependencies</li>
                <li>⚙️ Sets up build configuration</li>
                <li>🧪 Includes testing setup</li>
                <li>🔧 Configures development server</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Execution Guide Component
const ExecutionGuide = () => (
  <div className="tab-content">
    <section className="section">
      <h2>🚀 How React Runs and Executes</h2>
      
      <div className="execution-flow">
        <h3>🔄 React Application Execution Flow</h3>
        
        <div className="flow-steps">
          <div className="flow-step">
            <div className="flow-number">1</div>
            <div className="flow-content">
              <h4>📁 Project Structure</h4>
              <div className="code-block">
                <pre>{`my-react-app/
├── public/
│   ├── index.html    ← Entry HTML file
│   └── favicon.ico
├── src/
│   ├── index.js      ← Entry JavaScript file
│   ├── App.js        ← Main component
│   └── App.css       ← Styles
├── package.json      ← Dependencies
└── node_modules/     ← Installed packages`}</pre>
              </div>
            </div>
          </div>

          <div className="flow-step">
            <div className="flow-number">2</div>
            <div className="flow-content">
              <h4>🌐 Development Server Startup</h4>
              <p>When you run <code>npm start</code>:</p>
              <ul>
                <li>🔧 Webpack dev server starts</li>
                <li>📦 Bundles JavaScript files</li>
                <li>🔄 Enables hot reloading</li>
                <li>🌍 Opens browser at localhost:3000</li>
              </ul>
            </div>
          </div>

          <div className="flow-step">
            <div className="flow-number">3</div>
            <div className="flow-content">
              <h4>🎯 React Rendering Process</h4>
              <div className="rendering-steps">
                <div className="render-step">
                  <h5>A. Initial Load</h5>
                  <div className="code-block">
                    <pre>{`// public/index.html
<div id="root"></div>

// src/index.js
ReactDOM.render(<App />, document.getElementById('root'));`}</pre>
                  </div>
                </div>
                
                <div className="render-step">
                  <h5>B. Component Rendering</h5>
                  <ul>
                    <li>React creates Virtual DOM</li>
                    <li>Compares with previous state</li>
                    <li>Updates only changed elements</li>
                    <li>Renders to browser DOM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flow-step">
            <div className="flow-number">4</div>
            <div className="flow-content">
              <h4>🔄 Hot Reloading Magic</h4>
              <p>When you save code changes:</p>
              <div className="hot-reload-process">
                <div className="reload-step">File Change Detected</div>
                <div className="arrow">→</div>
                <div className="reload-step">Webpack Rebuilds</div>
                <div className="arrow">→</div>
                <div className="reload-step">Browser Updates</div>
                <div className="arrow">→</div>
                <div className="reload-step">State Preserved</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="execution-commands">
        <h3>📋 Essential Commands</h3>
        <div className="commands-grid">
          <div className="command-item">
            <h4>🚀 Start Development</h4>
            <div className="code-block">
              <pre>npm start</pre>
            </div>
            <p>Starts development server with hot reloading</p>
          </div>

          <div className="command-item">
            <h4>🏗️ Build for Production</h4>
            <div className="code-block">
              <pre>npm run build</pre>
            </div>
            <p>Creates optimized production build</p>
          </div>

          <div className="command-item">
            <h4>🧪 Run Tests</h4>
            <div className="code-block">
              <pre>npm test</pre>
            </div>
            <p>Runs test suite in watch mode</p>
          </div>

          <div className="command-item">
            <h4>⚙️ Eject Configuration</h4>
            <div className="code-block">
              <pre>npm run eject</pre>
            </div>
            <p>⚠️ Exposes build configuration (irreversible)</p>
          </div>
        </div>
      </div>

      <div className="browser-process">
        <h3>🌐 What Happens in the Browser</h3>
        <div className="browser-steps">
          <div className="browser-step">
            <h4>1. HTML Loading</h4>
            <p>Browser loads <code>index.html</code> with empty root div</p>
          </div>
          <div className="browser-step">
            <h4>2. JavaScript Execution</h4>
            <p>React code runs and creates component tree</p>
          </div>
          <div className="browser-step">
            <h4>3. DOM Injection</h4>
            <p>React injects components into the root div</p>
          </div>
          <div className="browser-step">
            <h4>4. Event Listeners</h4>
            <p>React attaches event handlers for interactivity</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// Crucial Tips Component
const CrucialTips = () => (
  <div className="tab-content">
    <section className="section">
      <h2>💡 Crucial Tips for React Development</h2>
      
      <div className="tips-categories">
        <div className="tip-category">
          <h3>🚨 Common Mistakes to Avoid</h3>
          <div className="tips-list">
            <div className="tip-item danger">
              <h4>❌ Don't modify state directly</h4>
              <div className="code-comparison">
                <div className="wrong">
                  <h5>Wrong:</h5>
                  <div className="code-block">
                    <pre>{`// Never do this
this.state.message = 'Hello';
items.push(newItem);`}</pre>
                  </div>
                </div>
                <div className="right">
                  <h5>Correct:</h5>
                  <div className="code-block">
                    <pre>{`// Always use setState or hooks
setState({message: 'Hello'});
setItems([...items, newItem]);`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="tip-item danger">
              <h4>❌ Missing keys in lists</h4>
              <div className="code-comparison">
                <div className="wrong">
                  <h5>Wrong:</h5>
                  <div className="code-block">
                    <pre>{`items.map(item => <li>{item.name}</li>)`}</pre>
                  </div>
                </div>
                <div className="right">
                  <h5>Correct:</h5>
                  <div className="code-block">
                    <pre>{`items.map(item => <li key={item.id}>{item.name}</li>)`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="tip-item danger">
              <h4>❌ Using array index as key</h4>
              <p>Only use index as key if list doesn't change order</p>
            </div>
          </div>
        </div>

        <div className="tip-category">
          <h3>✅ Best Practices</h3>
          <div className="tips-list">
            <div className="tip-item success">
              <h4>✅ Use functional components with hooks</h4>
              <p>Modern React prefers functions over classes</p>
              <div className="code-block">
                <pre>{`function MyComponent() {
  const [state, setState] = useState(initialValue);
  return <div>{state}</div>;
}`}</pre>
              </div>
            </div>

            <div className="tip-item success">
              <h4>✅ Keep components small and focused</h4>
              <p>Each component should have a single responsibility</p>
            </div>

            <div className="tip-item success">
              <h4>✅ Use meaningful component names</h4>
              <p>Component names should be descriptive and PascalCase</p>
            </div>

            <div className="tip-item success">
              <h4>✅ Extract reusable logic into custom hooks</h4>
              <div className="code-block">
                <pre>{`function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  return { count, increment };
}`}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="tip-category">
          <h3>🔧 Development Tips</h3>
          <div className="tips-list">
            <div className="tip-item info">
              <h4>🛠️ Install React Developer Tools</h4>
              <p>Browser extension for debugging React components</p>
              <ul>
                <li><a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi" target="_blank" rel="noopener noreferrer">Chrome Extension</a></li>
                <li><a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/" target="_blank" rel="noopener noreferrer">Firefox Extension</a></li>
              </ul>
            </div>

            <div className="tip-item info">
              <h4>🔍 Use console.log() for debugging</h4>
              <div className="code-block">
                <pre>{`function MyComponent() {
  const [state, setState] = useState(0);
  
  console.log('Component rendered with state:', state);
  
  return <div>{state}</div>;
}`}</pre>
              </div>
            </div>

            <div className="tip-item info">
              <h4>📁 Organize your files</h4>
              <div className="code-block">
                <pre>{`src/
├── components/     ← Reusable components
├── pages/         ← Page components
├── hooks/         ← Custom hooks
├── utils/         ← Helper functions
└── styles/        ← CSS files`}</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="tip-category">
          <h3>⚡ Performance Tips</h3>
          <div className="tips-list">
            <div className="tip-item warning">
              <h4>⚡ Use React.memo for expensive components</h4>
              <div className="code-block">
                <pre>{`const ExpensiveComponent = React.memo(function MyComponent(props) {
  // Component will only re-render if props change
  return <div>{props.data}</div>;
});`}</pre>
              </div>
            </div>

            <div className="tip-item warning">
              <h4>⚡ Use useCallback and useMemo wisely</h4>
              <p>Only use when you have proven performance issues</p>
            </div>

            <div className="tip-item warning">
              <h4>⚡ Avoid creating objects in render</h4>
              <div className="code-comparison">
                <div className="wrong">
                  <h5>Slow:</h5>
                  <div className="code-block">
                    <pre>{`<MyComponent style={{color: 'red'}} />`}</pre>
                  </div>
                </div>
                <div className="right">
                  <h5>Better:</h5>
                  <div className="code-block">
                    <pre>{`const redStyle = {color: 'red'};
<MyComponent style={redStyle} />`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tip-category">
          <h3>🔒 Security Considerations</h3>
          <div className="tips-list">
            <div className="tip-item danger">
              <h4>🔒 Never trust user input</h4>
              <p>Always sanitize data before rendering</p>
            </div>

            <div className="tip-item danger">
              <h4>🔒 Be careful with dangerouslySetInnerHTML</h4>
              <p>Only use with trusted content to prevent XSS attacks</p>
            </div>

            <div className="tip-item info">
              <h4>🔒 Keep dependencies updated</h4>
              <div className="code-block">
                <pre>{`npm audit
npm update`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="learning-resources">
        <h3>📚 Recommended Learning Resources</h3>
        <div className="resources-grid">
          <div className="resource-item">
            <h4>📖 Official Documentation</h4>
            <p><a href="https://reactjs.org/docs" target="_blank" rel="noopener noreferrer">reactjs.org/docs</a></p>
          </div>
          <div className="resource-item">
            <h4>🎓 React Tutorial</h4>
            <p><a href="https://reactjs.org/tutorial" target="_blank" rel="noopener noreferrer">Interactive Tic-Tac-Toe Tutorial</a></p>
          </div>
          <div className="resource-item">
            <h4>📺 Video Courses</h4>
            <p>freeCodeCamp, Codecademy, Udemy</p>
          </div>
          <div className="resource-item">
            <h4>💻 Practice</h4>
            <p>CodePen, CodeSandbox, Repl.it</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default EnvironmentSetup;
