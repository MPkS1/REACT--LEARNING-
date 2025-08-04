import React from 'react';
import './ReactLearning.css';

const ReactLearning = () => {
  return (
    <div className="react-learning-container">
      <header className="learning-header">
        <h1>Learning React: A Complete Guide</h1>
        <p className="subtitle">Understanding the popular JavaScript library that powers modern web applications</p>
      </header>

      <main className="learning-content">
        <section className="section">
          <h2>🤔 What is React?</h2>
          <div className="content-block">
            <p>
              React is a <strong>JavaScript library</strong> for building user interfaces, particularly web applications. 
              It was developed by Facebook (now Meta) and is used to create interactive, dynamic, and reusable UI components.
            </p>
            <div className="highlight-box">
              <p><strong>Key Definition:</strong> React is a declarative, efficient, and flexible JavaScript library 
              for building user interfaces that lets you compose complex UIs from small and isolated pieces of code called "components".</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>🛠️ What is React Used For?</h2>
          <div className="content-block">
            <ul className="feature-list">
              <li><strong>Single Page Applications (SPAs):</strong> Creating fast, responsive web apps that load once and update content dynamically</li>
              <li><strong>Component-Based Development:</strong> Building reusable UI components that can be used across different parts of an application</li>
              <li><strong>Interactive User Interfaces:</strong> Creating dynamic, responsive interfaces that react to user input</li>
              <li><strong>Mobile Apps:</strong> With React Native, you can build mobile applications using React principles</li>
              <li><strong>Progressive Web Apps (PWAs):</strong> Building web apps that feel like native mobile apps</li>
              <li><strong>E-commerce Platforms:</strong> Creating dynamic product catalogs and shopping experiences</li>
              <li><strong>Social Media Platforms:</strong> Building real-time, interactive social applications</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>🌟 Why is React So Popular?</h2>
          <div className="content-block">
            <div className="popularity-grid">
              <div className="popularity-item">
                <h3>🚀 Performance</h3>
                <p>Virtual DOM makes React applications fast and efficient by minimizing expensive DOM operations</p>
              </div>
              <div className="popularity-item">
                <h3>🧩 Component-Based</h3>
                <p>Reusable components make development faster and code more maintainable</p>
              </div>
              <div className="popularity-item">
                <h3>👥 Large Community</h3>
                <p>Huge ecosystem with extensive libraries, tools, and community support</p>
              </div>
              <div className="popularity-item">
                <h3>🔧 Developer Experience</h3>
                <p>Excellent debugging tools, hot reloading, and developer-friendly features</p>
              </div>
              <div className="popularity-item">
                <h3>📱 Cross-Platform</h3>
                <p>Learn once, write anywhere - web, mobile (React Native), and desktop apps</p>
              </div>
              <div className="popularity-item">
                <h3>🏢 Industry Adoption</h3>
                <p>Used by major companies like Facebook, Netflix, Airbnb, Uber, and thousands more</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>👨‍💻 Who Created React and When?</h2>
          <div className="content-block">
            <div className="creator-info">
              <div className="creator-details">
                <h3>Jordan Walke - The Creator</h3>
                <ul>
                  <li><strong>Created by:</strong> Jordan Walke, a software engineer at Facebook</li>
                  <li><strong>First Release:</strong> May 29, 2013</li>
                  <li><strong>Open Sourced:</strong> May 2013 at JSConf US</li>
                  <li><strong>Company:</strong> Facebook (now Meta)</li>
                  <li><strong>Current Status:</strong> Maintained by Meta and the open-source community</li>
                </ul>
              </div>
              <div className="timeline">
                <h3>React Timeline</h3>
                <ul>
                  <li><strong>2011:</strong> Jordan Walke creates FaxJS, React's prototype</li>
                  <li><strong>2012:</strong> Instagram starts using React</li>
                  <li><strong>2013:</strong> React is open-sourced at JSConf</li>
                  <li><strong>2015:</strong> React Native is announced</li>
                  <li><strong>2016:</strong> React 15 introduces improved DOM diffing</li>
                  <li><strong>2017:</strong> React 16 (Fiber) brings major performance improvements</li>
                  <li><strong>2019:</strong> React Hooks are introduced</li>
                  <li><strong>2022:</strong> React 18 with Concurrent Features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>🤷‍♂️ Why Was React Created?</h2>
          <div className="content-block">
            <div className="motivation-list">
              <div className="motivation-item">
                <h3>📊 Facebook's Growing Complexity</h3>
                <p>Facebook's user interface was becoming increasingly complex and difficult to manage with traditional approaches</p>
              </div>
              <div className="motivation-item">
                <h3>🔄 Data Flow Problems</h3>
                <p>Traditional MVC patterns led to complex data flow and made debugging difficult in large applications</p>
              </div>
              <div className="motivation-item">
                <h3>⚡ Performance Issues</h3>
                <p>Frequent DOM manipulations were causing performance bottlenecks in dynamic applications</p>
              </div>
              <div className="motivation-item">
                <h3>🔧 Maintainability</h3>
                <p>Need for a more predictable and maintainable way to build user interfaces</p>
              </div>
              <div className="motivation-item">
                <h3>🧩 Component Reusability</h3>
                <p>Desire to create reusable UI components that could be shared across different parts of the application</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>⚙️ How Does React Work?</h2>
          <div className="content-block">
            <div className="working-principles">
              <div className="principle">
                <h3>1. 🌐 Virtual DOM</h3>
                <p>React creates a virtual representation of the DOM in memory. When state changes, React compares the new virtual DOM with the previous version and updates only the parts that changed.</p>
                <div className="code-example">
                  <p><strong>Traditional DOM:</strong> Slow, direct manipulation</p>
                  <p><strong>React Virtual DOM:</strong> Fast, efficient diffing and batched updates</p>
                </div>
              </div>

              <div className="principle">
                <h3>2. 🧩 Component-Based Architecture</h3>
                <p>Everything in React is a component. Components are JavaScript functions or classes that return JSX (JavaScript XML) to describe what should appear on the screen.</p>
                <div className="code-example">
                  <pre>{`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}`}</pre>
                </div>
              </div>

              <div className="principle">
                <h3>3. 📊 Unidirectional Data Flow</h3>
                <p>Data flows in one direction - from parent components to child components through props. This makes the application more predictable and easier to debug.</p>
              </div>

              <div className="principle">
                <h3>4. 🎣 State Management</h3>
                <p>React components can have internal state that determines how they render. When state changes, React re-renders the component automatically.</p>
                <div className="code-example">
                  <pre>{`const [count, setCount] = useState(0);`}</pre>
                </div>
              </div>

              <div className="principle">
                <h3>5. 🔄 React Lifecycle</h3>
                <p>Components go through different phases: mounting, updating, and unmounting. React provides hooks and methods to tap into these lifecycle events.</p>
              </div>

              <div className="principle">
                <h3>6. 🎯 Reconciliation</h3>
                <p>React's algorithm for updating the UI efficiently by comparing the current component tree with the previous one and making minimal changes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>🚀 React in Action</h2>
          <div className="content-block">
            <p>Here's a simple example of how React works:</p>
            <div className="demo-section">
              <h3>Live Example in This App:</h3>
              <SimpleCounter />
            </div>
          </div>
        </section>

        <section className="section">
          <h2>📚 What's Next in Your React Journey?</h2>
          <div className="content-block">
            <div className="next-steps">
              <h3>Essential Concepts to Learn:</h3>
              <ul>
                <li>JSX Syntax</li>
                <li>Components and Props</li>
                <li>State and useState Hook</li>
                <li>Event Handling</li>
                <li>Conditional Rendering</li>
                <li>Lists and Keys</li>
                <li>useEffect Hook</li>
                <li>Context API</li>
                <li>React Router</li>
                <li>State Management (Redux, Zustand)</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="learning-footer">
        <p>🎉 Welcome to your React learning journey! This is just the beginning of building amazing web applications.</p>
      </footer>
    </div>
  );
};

// Simple counter component to demonstrate React in action
const SimpleCounter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter-demo">
      <h4>Interactive Counter Example:</h4>
      <p>Count: <span className="count-display">{count}</span></p>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - 1)} className="counter-btn">-</button>
        <button onClick={() => setCount(0)} className="counter-btn">Reset</button>
        <button onClick={() => setCount(count + 1)} className="counter-btn">+</button>
      </div>
      <p className="demo-explanation">
        This demonstrates React's state management and re-rendering. 
        Each button click updates the state, and React automatically re-renders the component!
      </p>
    </div>
  );
};

export default ReactLearning;
