import React, { useState } from 'react';
import './JSXAndComponents.css';

const JSXAndComponents = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <div className="content-section">
            <h2>What is JSX Syntax?</h2>
            <div className="explanation-box">
              <p>JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. React uses JSX to describe what the UI should look like.</p>
              <h3>Key Features of JSX:</h3>
              <ul>
                <li>Combines JavaScript and HTML in one syntax</li>
                <li>Makes React components easier to read and write</li>
                <li>Gets compiled to regular JavaScript by Babel</li>
                <li>Supports JavaScript expressions inside curly braces</li>
              </ul>
            </div>
            
            <h3>JSX vs Regular JavaScript</h3>
            <div className="code-comparison">
              <div className="code-box">
                <h4>With JSX (Easy to read)</h4>
                <pre className="code-content">
{`const element = <h1>Hello, World!</h1>;`}
                </pre>
              </div>
              
              <div className="code-box">
                <h4>Without JSX (Hard to read)</h4>
                <pre className="code-content">
{`const element = React.createElement(
  'h1',
  null,
  'Hello, World!'
);`}
                </pre>
              </div>
            </div>
          </div>
        );

      case 'indexjs':
        return (
          <div className="content-section">
            <h2>Understanding index.js File</h2>
            <div className="explanation-box">
              <p>The index.js file is the entry point of your React application. It renders the main App component into the DOM element with id 'root'.</p>
            </div>
            
            <h3>Complete index.js Code</h3>
            <div className="code-box">
              <pre className="code-content">
{`import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();`}
              </pre>
            </div>
            
            <h3>Line by Line Explanation</h3>
            <div className="explanation-list">
              <div className="explanation-item">
                <strong>Lines 1-5:</strong> Import React, ReactDOM, CSS, App component, and performance monitoring
              </div>
              <div className="explanation-item">
                <strong>Line 7:</strong> Create a root element that will control the React app
              </div>
              <div className="explanation-item">
                <strong>Lines 9-13:</strong> Render the App component wrapped in StrictMode for development warnings
              </div>
              <div className="explanation-item">
                <strong>Line 15:</strong> Start performance monitoring (optional)
              </div>
            </div>
            
            <h3>Key JSX Points in index.js</h3>
            <div className="jsx-points">
              <div className="point-box">
                <h4>JSX Element</h4>
                <div className="code-box">
                  <pre className="code-content">
{`<App />`}
                  </pre>
                </div>
                <p>This is a JSX element representing the App component</p>
              </div>
              
              <div className="point-box">
                <h4>JSX Wrapper</h4>
                <div className="code-box">
                  <pre className="code-content">
{`<React.StrictMode>
  <App />
</React.StrictMode>`}
                  </pre>
                </div>
                <p>JSX allows nesting components inside other components</p>
              </div>
            </div>
          </div>
        );

      case 'appjs':
        return (
          <div className="content-section">
            <h2>Understanding App.js File</h2>
            <div className="explanation-box">
              <p>App.js contains the main App component. It's the root component that all other components are built upon.</p>
            </div>
            
            <h3>Basic App.js Structure</h3>
            <div className="code-box">
              <pre className="code-content">
{`import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <p>Edit src/App.js and save to reload.</p>
      </header>
    </div>
  );
}

export default App;`}
              </pre>
            </div>
            
            <h3>Advanced App.js with State</h3>
            <div className="code-box">
              <pre className="code-content">
{`import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');

  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default App;`}
              </pre>
            </div>
            
            <h3>JSX Syntax Rules in App.js</h3>
            <div className="jsx-rules">
              <div className="rule-box">
                <h4>Rule 1: Single Parent Element</h4>
                <div className="code-box">
                  <pre className="code-content">
{`return (
  <div className="App">
    <h1>Title</h1>
    <p>Content</p>
  </div>
);`}
                  </pre>
                </div>
                <p>All JSX must be wrapped in a single parent element</p>
              </div>
              
              <div className="rule-box">
                <h4>Rule 2: JavaScript Expressions</h4>
                <div className="code-box">
                  <pre className="code-content">
{`<h1>Hello {name}!</h1>
<p>You clicked {count} times</p>
<p>Today is {new Date().toDateString()}</p>`}
                  </pre>
                </div>
                <p>Use curly braces to embed JavaScript expressions</p>
              </div>
              
              <div className="rule-box">
                <h4>Rule 3: Event Handlers</h4>
                <div className="code-box">
                  <pre className="code-content">
{`<button onClick={() => setCount(count + 1)}>
  Click me
</button>

<input onChange={(e) => setName(e.target.value)} />`}
                  </pre>
                </div>
                <p>Event handlers use camelCase and arrow functions</p>
              </div>
            </div>
          </div>
        );

      case 'component':
        return (
          <div className="content-section">
            <h2>Creating Custom React Components</h2>
            <div className="explanation-box">
              <p>Components are independent, reusable pieces of UI. They accept inputs (props) and return JSX that describes what should appear on screen.</p>
            </div>
            
            <h3>Simple Function Component</h3>
            <div className="code-box">
              <pre className="code-content">
{`import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;`}
              </pre>
            </div>
            
            <h3>Component with Props and Styling</h3>
            <div className="code-box">
              <pre className="code-content">
{`import React from 'react';
import './Welcome.css';

function Welcome(props) {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Hello, {props.name}!</h1>
      <p className="welcome-message">
        Welcome to our {props.appName} application!
      </p>
      <img 
        src={props.avatar} 
        alt={props.name}
        className="welcome-avatar"
      />
    </div>
  );
}

export default Welcome;`}
              </pre>
            </div>
            
            <h3>Component with State and Events</h3>
            <div className="code-box">
              <pre className="code-content">
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="counter-controls">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="step-control">
        <label>Step: </label>
        <input 
          type="number" 
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Counter;`}
              </pre>
            </div>
            
            <h3>Using Components in App.js</h3>
            <div className="code-box">
              <pre className="code-content">
{`import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Welcome 
        name="John" 
        appName="React Learning"
        avatar="/images/john.jpg"
      />
      <Welcome 
        name="Sarah" 
        appName="React Learning"
        avatar="/images/sarah.jpg"
      />
      <Counter />
    </div>
  );
}

export default App;`}
              </pre>
            </div>
          </div>
        );

      case 'jsx-syntax':
        return (
          <div className="content-section">
            <h2>Complete JSX Syntax Guide</h2>
            <div className="explanation-box">
              <p>JSX has specific rules and syntax that you must follow. Here are all the important rules with examples.</p>
            </div>
            
            <h3>Basic JSX Rules</h3>
            <div className="syntax-grid">
              <div className="syntax-box">
                <h4>1. className instead of class</h4>
                <div className="code-box">
                  <pre className="code-content">
{`<div className="container">
  <p className="text-primary">Hello World</p>
  <span className="badge badge-success">Success</span>
</div>`}
                  </pre>
                </div>
              </div>
              
              <div className="syntax-box">
                <h4>2. Self-closing tags need /</h4>
                <div className="code-box">
                  <pre className="code-content">
{`<img src="logo.png" alt="Logo" />
<input type="text" placeholder="Name" />
<br />
<hr />`}
                  </pre>
                </div>
              </div>
              
              <div className="syntax-box">
                <h4>3. camelCase for attributes</h4>
                <div className="code-box">
                  <pre className="code-content">
{`<button onClick={handleClick}>Click</button>
<input onChange={handleChange} />
<div onMouseOver={handleHover}>Hover me</div>
<label htmlFor="input-id">Label</label>`}
                  </pre>
                </div>
              </div>
              
              <div className="syntax-box">
                <h4>4. Curly braces for JavaScript</h4>
                <div className="code-box">
                  <pre className="code-content">
{`const name = "React";
const age = 25;

<h1>Hello {name}</h1>
<p>Age: {age}</p>
<p>Next year: {age + 1}</p>
<p>Random: {Math.random()}</p>`}
                  </pre>
                </div>
              </div>
              
              <div className="syntax-box">
                <h4>5. Conditional rendering</h4>
                <div className="code-box">
                  <pre className="code-content">
{`const isLoggedIn = true;
const user = { name: "John", role: "admin" };

{isLoggedIn && <p>Welcome back!</p>}

{user.role === "admin" ? (
  <button>Admin Panel</button>
) : (
  <button>User Panel</button>
)}`}
                  </pre>
                </div>
              </div>
              
              <div className="syntax-box">
                <h4>6. Lists and keys</h4>
                <div className="code-box">
                  <pre className="code-content">
{`const items = ["Apple", "Banana", "Orange"];

<ul>
  {items.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" }
];

<div>
  {users.map(user => (
    <div key={user.id}>{user.name}</div>
  ))}
</div>`}
                  </pre>
                </div>
              </div>
              
              <div className="syntax-box">
                <h4>7. Inline styles</h4>
                <div className="code-box">
                  <pre className="code-content">
{`const styles = {
  color: "blue",
  fontSize: "16px",
  backgroundColor: "lightgray"
};

<div style={styles}>Styled text</div>

<p style={{
  color: "red",
  fontWeight: "bold",
  textAlign: "center"
}}>
  Inline styled paragraph
</p>`}
                  </pre>
                </div>
              </div>
              
              <div className="syntax-box">
                <h4>8. Fragments</h4>
                <div className="code-box">
                  <pre className="code-content">
{`return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);

return (
  <React.Fragment>
    <h1>Title</h1>
    <p>Paragraph</p>
  </React.Fragment>
);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a topic to learn about JSX and Components</div>;
    }
  };

  return (
    <div className="jsx-components-container">
      <div className="jsx-header">
        <h1>JSX Syntax & React Components Guide</h1>
        <p>Complete guide to writing JSX code and creating React components</p>
      </div>
      
      <div className="jsx-navigation">
        <button 
          className={`nav-btn ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          📖 What is JSX?
        </button>
        <button 
          className={`nav-btn ${activeSection === 'indexjs' ? 'active' : ''}`}
          onClick={() => setActiveSection('indexjs')}
        >
          🚀 index.js
        </button>
        <button 
          className={`nav-btn ${activeSection === 'appjs' ? 'active' : ''}`}
          onClick={() => setActiveSection('appjs')}
        >
          📱 App.js
        </button>
        <button 
          className={`nav-btn ${activeSection === 'component' ? 'active' : ''}`}
          onClick={() => setActiveSection('component')}
        >
          🧩 Components
        </button>
        <button 
          className={`nav-btn ${activeSection === 'jsx-syntax' ? 'active' : ''}`}
          onClick={() => setActiveSection('jsx-syntax')}
        >
          ⚡ JSX Syntax
        </button>
      </div>
      
      <div className="jsx-main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default JSXAndComponents;
