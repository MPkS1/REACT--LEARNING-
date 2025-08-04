/* eslint-disable */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import './PropsAndState.css';

const PropsAndState = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const renderContent = () => {
    switch(activeSection) {
      case 'introduction':
        return (
          <div className="content-section">
            <h2>React Props and State</h2>
            <div className="explanation-box">
              <p>Props and State are fundamental concepts in React that control how data flows and changes in your application.</p>
              <h3>Key Differences:</h3>
              <ul>
                <li><strong>Props</strong> - Data passed from parent to child components (read-only)</li>
                <li><strong>State</strong> - Data that belongs to a component and can change over time</li>
                <li><strong>Props</strong> - External data (like function parameters)</li>
                <li><strong>State</strong> - Internal data (like variables inside a function)</li>
              </ul>
            </div>
            
            <h3>What are Props?</h3>
            <div className="code-box">
              <h4>Basic Props Example</h4>
              <pre className="code-content">
{`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Sarah" />
    </div>
  );
}`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>function Greeting(props)</code> - Component receives props as parameter
              </div>
              <div className="explanation-item">
                <strong>Line 2:</strong> <code>&#123;props.name&#125;</code> - Accesses the 'name' property from props object
              </div>
              <div className="explanation-item">
                <strong>Line 7:</strong> <code>&lt;Greeting name="John" /&gt;</code> - Passes "John" as name prop to component
              </div>
              <div className="explanation-item">
                <strong>Line 8:</strong> <code>&lt;Greeting name="Sarah" /&gt;</code> - Same component, different prop value
              </div>
            </div>
            
            <h3>What is State?</h3>
            <div className="code-box">
              <h4>Basic State Example</h4>
              <pre className="code-content">
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>import &#123; useState &#125;</code> - Import useState hook from React
              </div>
              <div className="explanation-item">
                <strong>Line 4:</strong> <code>const [count, setCount] = useState(0);</code> - Creates state variable with initial value 0
              </div>
              <div className="explanation-item">
                <strong>Line 8:</strong> <code>&#123;count&#125;</code> - Displays current state value
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>onClick=&#123;() =&gt; setCount(count + 1)&#125;</code> - Updates state when clicked
              </div>
            </div>
          </div>
        );

      case 'props-deep':
        return (
          <div className="content-section">
            <h2>Props Deep Dive</h2>
            <div className="explanation-box">
              <p>Props (properties) are how components communicate with each other. They flow down from parent to child components.</p>
            </div>
            
            <h3>Different Types of Props</h3>
            <div className="code-box">
              <h4>Various Prop Types</h4>
              <pre className="code-content">
{`function UserProfile(props) {
  return (
    &lt;div className="user-profile"&gt;
      &lt;h2&gt;{props.name}&lt;/h2&gt;
      &lt;p&gt;Age: {props.age}&lt;/p&gt;
      &lt;p&gt;Email: {props.email}&lt;/p&gt;
      &lt;p&gt;Active: {props.isActive ? "Yes" : "No"}&lt;/p&gt;
      &lt;p&gt;Hobbies: {props.hobbies.join(", ")}&lt;/p&gt;
      &lt;button onClick={props.onEdit}&gt;Edit Profile&lt;/button&gt;
    &lt;/div&gt;
  );
}

function App() {
  const handleEdit = () => {
    alert("Edit button clicked!");
  };

  return (
    &lt;UserProfile 
      name="Alice Johnson"
      age={28}
      email="alice@example.com"
      isActive={true}
      hobbies={["reading", "swimming", "coding"]}
      onEdit={handleEdit}
    /&gt;
  );
}`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 4:</strong> <code>&#123;props.name&#125;</code> - String prop: text data passed from parent
              </div>
              <div className="explanation-item">
                <strong>Line 5:</strong> <code>&#123;props.age&#125;</code> - Number prop: numeric data (note: no quotes in JSX)
              </div>
              <div className="explanation-item">
                <strong>Line 7:</strong> <code>&#123;props.isActive ? "Yes" : "No"&#125;</code> - Boolean prop with conditional rendering
              </div>
              <div className="explanation-item">
                <strong>Line 8:</strong> <code>&#123;props.hobbies.join(", ")&#125;</code> - Array prop: JavaScript array methods work
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>onClick=&#123;props.onEdit&#125;</code> - Function prop: parent's function passed as prop
              </div>
              <div className="explanation-item">
                <strong>Line 18:</strong> <code>age=&#123;28&#125;</code> - Curly braces needed for non-string values
              </div>
              <div className="explanation-item">
                <strong>Line 21:</strong> <code>hobbies=&#123;["reading", "swimming", "coding"]&#125;</code> - Array literal as prop
              </div>
              <div className="explanation-item">
                <strong>Line 22:</strong> <code>onEdit=&#123;handleEdit&#125;</code> - Function reference (no parentheses)
              </div>
            </div>
            
            <h3>Props Destructuring</h3>
            <div className="code-box">
              <h4>Cleaner Props with Destructuring</h4>
              {/* eslint-disable */}
              <pre className="code-content">
                {`
// Destructuring Assignment in Props  
function UserProfile({ name, age, email, isActive, hobbies, onEdit }) {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Active: {isActive ? "Yes" : "No"}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
}

function ProductCard({ title, productPrice, image, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="productPrice">${productPrice}</p>
      <button onClick={() => onAddToCart(title, productPrice)}>
        Add to Cart
      </button>
    </div>
  );
}`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>&#123; name, age, email, isActive, hobbies, onEdit &#125;</code> - Destructures props object in parameter
              </div>
              <div className="explanation-item">
                <strong>Line 4:</strong> <code>&#123;name&#125;</code> - Direct use without props. prefix (cleaner code)
              </div>
              <div className="explanation-item">
                <strong>Line 14:</strong> <code>&#123; title, productPrice, image, onAddToCart &#125;</code> - Different component, different props
              </div>
              <div className="explanation-item">
                <strong>Line 16:</strong> <code>&lt;img src=&#123;image&#125; alt=&#123;title&#125; /&gt;</code> - Multiple props in single element
              </div>
              <div className="explanation-item">
                <strong>Line 19:</strong> <code>onClick=&#123;() =&gt; onAddToCart(title, productPrice)&#125;</code> - Calling function prop with arguments
              </div>
            </div>
          </div>
        );

      case 'state-deep':
        return (
          <div className="content-section">
            <h2>useState Hook Deep Dive</h2>
            <div className="explanation-box">
              <p>useState is a React Hook that lets you add state to function components. It returns an array with the current state value and a function to update it.</p>
            </div>
            
            <h3>Different Types of State</h3>
            <div className="code-box">
              <h4>Various State Examples</h4>
              <pre className="code-content">
{`import React, { useState } from 'react';

function StateExamples() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [colors, setColors] = useState(["red", "blue"]);
  const [user, setUser] = useState(&#123;
    firstName: "",
    lastName: "",
    email: ""
  &#125;);

  const addColor = () =&gt; &#123;
    setColors([...colors, "green"]);
  &#125;;

  const updateUser = () =&gt; &#123;
    setUser(&#123;
      ...user,
      firstName: "John"
    &#125;);
  &#125;;

  return (
    &lt;div&gt;
      &lt;h3&gt;String State: &#123;name&#125;&lt;/h3&gt;
      &lt;input 
        value=&#123;name&#125;
        onChange=&#123;(e) =&gt; setName(e.target.value)&#125;
        placeholder="Enter name"
      /&gt;

      &lt;h3&gt;Number State: &#123;age&#125;&lt;/h3&gt;
      &lt;button onClick=&#123;() =&gt; setAge(age + 1)&#125;&gt;
        Increase Age
      &lt;/button&gt;

      &lt;h3&gt;Boolean State&lt;/h3&gt;
      &lt;button onClick=&#123;() =&gt; setIsVisible(!isVisible)&#125;&gt;
        Toggle Visibility
      &lt;/button&gt;
      &#123;isVisible &amp;&amp; &lt;p&gt;I am visible!&lt;/p&gt;&#125;

      &lt;h3&gt;Array State&lt;/h3&gt;
      &lt;p&gt;Colors: &#123;colors.join(", ")&#125;&lt;/p&gt;
      &lt;button onClick=&#123;addColor&#125;&gt;Add Green&lt;/button&gt;

      &lt;h3&gt;Object State&lt;/h3&gt;
      &lt;p&gt;User: &#123;user.firstName&#125; &#123;user.lastName&#125;&lt;/p&gt;
      &lt;button onClick=&#123;updateUser&#125;&gt;Set First Name&lt;/button&gt;
    &lt;/div&gt;
  );
&#125;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 4:</strong> <code>const [name, setName] = useState("");</code> - String state with empty initial value
              </div>
              <div className="explanation-item">
                <strong>Line 5:</strong> <code>const [age, setAge] = useState(0);</code> - Number state with 0 initial value
              </div>
              <div className="explanation-item">
                <strong>Line 6:</strong> <code>const [isVisible, setIsVisible] = useState(true);</code> - Boolean state with true initial value
              </div>
              <div className="explanation-item">
                <strong>Line 7:</strong> <code>const [colors, setColors] = useState(["red", "blue"]);</code> - Array state with initial array
              </div>
              <div className="explanation-item">
                <strong>Line 8-12:</strong> <code>const [user, setUser] = useState(&#123;...&#125;);</code> - Object state with initial object
              </div>
              <div className="explanation-item">
                <strong>Line 15:</strong> <code>setColors([...colors, "green"]);</code> - Spread operator to add to array (immutable update)
              </div>
              <div className="explanation-item">
                <strong>Line 19-22:</strong> <code>setUser(&#123;...user, firstName: "John"&#125;);</code> - Spread operator to update object property
              </div>
              <div className="explanation-item">
                <strong>Line 28:</strong> <code>onChange=&#123;(e) =&gt; setName(e.target.value)&#125;</code> - Updates state with input value
              </div>
              <div className="explanation-item">
                <strong>Line 37:</strong> <code>setIsVisible(!isVisible)</code> - Toggle boolean state with NOT operator
              </div>
            </div>
          </div>
        );

      case 'complete-app':
        return (
          <div className="content-section">
            <h2>Complete Application Example</h2>
            <div className="explanation-box">
              <p>Let's build a complete Todo application showing Props and State working together with multiple components.</p>
            </div>
            
            <h3>index.js - Application Entry Point</h3>
            <div className="code-box">
              <h4>src/index.js</h4>
              <pre className="code-content">
{`import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;
);`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>import React from 'react';</code> - Import React library for JSX
              </div>
              <div className="explanation-item">
                <strong>Line 2:</strong> <code>import ReactDOM from 'react-dom/client';</code> - Import ReactDOM for rendering
              </div>
              <div className="explanation-item">
                <strong>Line 4:</strong> <code>import App from './App';</code> - Import our main App component
              </div>
              <div className="explanation-item">
                <strong>Line 6:</strong> <code>ReactDOM.createRoot(document.getElementById('root'))</code> - Create React root element
              </div>
              <div className="explanation-item">
                <strong>Line 8-12:</strong> <code>root.render(&lt;App /&gt;)</code> - Render App component wrapped in StrictMode
              </div>
            </div>
            
            <h3>App.js - Main Component with State</h3>
            <div className="code-box">
              <h4>src/App.js</h4>
              <pre className="code-content">
{`import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    &#123; id: 1, text: "Learn React", completed: false &#125;,
    &#123; id: 2, text: "Build a project", completed: true &#125;
  ]);

  const addTodo = (text) =&gt; &#123;
    const newTodo = &#123;
      id: Date.now(),
      text: text,
      completed: false
    &#125;;
    setTodos([...todos, newTodo]);
  &#125;;

  const toggleTodo = (id) =&gt; &#123;
    setTodos(todos.map(todo =&gt;
      todo.id === id 
        ? &#123; ...todo, completed: !todo.completed &#125;
        : todo
    ));
  &#125;;

  const deleteTodo = (id) =&gt; &#123;
    setTodos(todos.filter(todo =&gt; todo.id !== id));
  &#125;;

  const completedCount = todos.filter(todo =&gt; todo.completed).length;
  const totalCount = todos.length;

  return (
    &lt;div className="app"&gt;
      &lt;header className="app-header"&gt;
        &lt;h1&gt;Todo Application&lt;/h1&gt;
        &lt;p&gt;Completed: &#123;completedCount&#125; / &#123;totalCount&#125;&lt;/p&gt;
      &lt;/header&gt;
      
      &lt;main className="app-main"&gt;
        &lt;TodoForm onAddTodo=&#123;addTodo&#125; /&gt;
        &lt;TodoList 
          todos=&#123;todos&#125;
          onToggleTodo=&#123;toggleTodo&#125;
          onDeleteTodo=&#123;deleteTodo&#125;
        /&gt;
      &lt;/main&gt;
    &lt;/div&gt;
  );
&#125;

export default App;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 7-10:</strong> <code>const [todos, setTodos] = useState([...])</code> - State array with initial todo items
              </div>
              <div className="explanation-item">
                <strong>Line 12:</strong> <code>const addTodo = (text) =&gt; &#123;</code> - Function to add new todo (will be passed as prop)
              </div>
              <div className="explanation-item">
                <strong>Line 13-17:</strong> Creates new todo object with unique ID using current timestamp
              </div>
              <div className="explanation-item">
                <strong>Line 18:</strong> <code>setTodos([...todos, newTodo]);</code> - Adds new todo to existing array immutably
              </div>
              <div className="explanation-item">
                <strong>Line 21-27:</strong> <code>const toggleTodo = (id) =&gt;</code> - Function to toggle completed status
              </div>
              <div className="explanation-item">
                <strong>Line 22-26:</strong> <code>todos.map(todo =&gt; ... )</code> - Maps through todos, updates matching ID
              </div>
              <div className="explanation-item">
                <strong>Line 29-31:</strong> <code>const deleteTodo = (id) =&gt;</code> - Function to remove todo by filtering
              </div>
              <div className="explanation-item">
                <strong>Line 33-34:</strong> Computed values from state for displaying statistics
              </div>
              <div className="explanation-item">
                <strong>Line 43:</strong> <code>&lt;TodoForm onAddTodo=&#123;addTodo&#125; /&gt;</code> - Passing function as prop
              </div>
              <div className="explanation-item">
                <strong>Line 44-48:</strong> Passing multiple props: data array and functions
              </div>
            </div>
          </div>
        );

      case 'components':
        return (
          <div className="content-section">
            <h2>Child Components</h2>
            <div className="explanation-box">
              <p>Child components receive props from parent and use them to render UI and handle events.</p>
            </div>
            
            <h3>TodoForm Component</h3>
            <div className="code-box">
              <h4>src/components/TodoForm.js</h4>
              <pre className="code-content">
{`import React, { useState } from 'react';

function TodoForm(&#123; onAddTodo &#125;) &#123;
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) =&gt; &#123;
    e.preventDefault();
    if (inputText.trim() !== "") &#123;
      onAddTodo(inputText);
      setInputText("");
    &#125;
  &#125;;

  return (
    &lt;form onSubmit=&#123;handleSubmit&#125; className="todo-form"&gt;
      &lt;input
        type="text"
        value=&#123;inputText&#125;
        onChange=&#123;(e) =&gt; setInputText(e.target.value)&#125;
        placeholder="Add new todo..."
        className="todo-input"
      /&gt;
      &lt;button type="submit" className="add-button"&gt;
        Add Todo
      &lt;/button&gt;
    &lt;/form&gt;
  );
&#125;

export default TodoForm;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 3:</strong> <code>function TodoForm(&#123; onAddTodo &#125;)</code> - Destructures onAddTodo function from props
              </div>
              <div className="explanation-item">
                <strong>Line 4:</strong> <code>const [inputText, setInputText] = useState("");</code> - Local state for input field
              </div>
              <div className="explanation-item">
                <strong>Line 6:</strong> <code>const handleSubmit = (e) =&gt; &#123;</code> - Form submission handler
              </div>
              <div className="explanation-item">
                <strong>Line 7:</strong> <code>e.preventDefault();</code> - Prevents page refresh on form submit
              </div>
              <div className="explanation-item">
                <strong>Line 8:</strong> <code>if (inputText.trim() !== "")</code> - Validates input is not empty
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>onAddTodo(inputText);</code> - Calls parent function with input text
              </div>
              <div className="explanation-item">
                <strong>Line 10:</strong> <code>setInputText("");</code> - Clears input after successful add
              </div>
              <div className="explanation-item">
                <strong>Line 15:</strong> <code>onSubmit=&#123;handleSubmit&#125;</code> - Attaches submit handler to form
              </div>
              <div className="explanation-item">
                <strong>Line 19:</strong> <code>onChange=&#123;(e) =&gt; setInputText(e.target.value)&#125;</code> - Updates state with input value
              </div>
            </div>
            
            <h3>TodoList Component</h3>
            <div className="code-box">
              <h4>src/components/TodoList.js</h4>
              <pre className="code-content">
{`import React from 'react';
import TodoItem from './TodoItem';

function TodoList(&#123; todos, onToggleTodo, onDeleteTodo &#125;) &#123;
  if (todos.length === 0) &#123;
    return (
      &lt;div className="todo-list empty"&gt;
        &lt;p&gt;No todos yet. Add one above!&lt;/p&gt;
      &lt;/div&gt;
    );
  &#125;

  return (
    &lt;div className="todo-list"&gt;
      &#123;todos.map(todo =&gt; (
        &lt;TodoItem
          key=&#123;todo.id&#125;
          todo=&#123;todo&#125;
          onToggle=&#123;() =&gt; onToggleTodo(todo.id)&#125;
          onDelete=&#123;() =&gt; onDeleteTodo(todo.id)&#125;
        /&gt;
      ))&#125;
    &lt;/div&gt;
  );
&#125;

export default TodoList;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 4:</strong> <code>function TodoList(&#123; todos, onToggleTodo, onDeleteTodo &#125;)</code> - Destructures multiple props
              </div>
              <div className="explanation-item">
                <strong>Line 5:</strong> <code>if (todos.length === 0)</code> - Conditional rendering for empty state
              </div>
              <div className="explanation-item">
                <strong>Line 15:</strong> <code>&#123;todos.map(todo =&gt; (</code> - Maps through todos array to render list
              </div>
              <div className="explanation-item">
                <strong>Line 17:</strong> <code>key=&#123;todo.id&#125;</code> - Unique key prop required for list items
              </div>
              <div className="explanation-item">
                <strong>Line 18:</strong> <code>todo=&#123;todo&#125;</code> - Passes entire todo object as prop
              </div>
              <div className="explanation-item">
                <strong>Line 19:</strong> <code>onToggle=&#123;() =&gt; onToggleTodo(todo.id)&#125;</code> - Wraps function call with specific ID
              </div>
              <div className="explanation-item">
                <strong>Line 20:</strong> <code>onDelete=&#123;() =&gt; onDeleteTodo(todo.id)&#125;</code> - Wraps delete function with specific ID
              </div>
            </div>
            
            <h3>TodoItem Component</h3>
            <div className="code-box">
              <h4>src/components/TodoItem.js</h4>
              <pre className="code-content">
{`import React from 'react';

function TodoItem(&#123; todo, onToggle, onDelete &#125;) &#123;
  return (
    &lt;div className=&#123;\`todo-item \$&#123;todo.completed ? 'completed' : ''&#125;\`&#125;&gt;
      &lt;div className="todo-content"&gt;
        &lt;input
          type="checkbox"
          checked=&#123;todo.completed&#125;
          onChange=&#123;onToggle&#125;
          className="todo-checkbox"
        /&gt;
        &lt;span className="todo-text"&gt;&#123;todo.text&#125;&lt;/span&gt;
      &lt;/div&gt;
      &lt;button onClick=&#123;onDelete&#125; className="delete-button"&gt;
        Delete
      &lt;/button&gt;
    &lt;/div&gt;
  );
&#125;

export default TodoItem;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 3:</strong> <code>function TodoItem(&#123; todo, onToggle, onDelete &#125;)</code> - Receives todo object and functions
              </div>
              <div className="explanation-item">
                <strong>Line 5:</strong> <code>className=&#123;\`todo-item \$&#123;todo.completed ? 'completed' : ''&#125;\`&#125;</code> - Conditional CSS class with template literal
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>checked=&#123;todo.completed&#125;</code> - Checkbox state from todo.completed property
              </div>
              <div className="explanation-item">
                <strong>Line 10:</strong> <code>onChange=&#123;onToggle&#125;</code> - Calls parent function when checkbox changes
              </div>
              <div className="explanation-item">
                <strong>Line 13:</strong> <code>&#123;todo.text&#125;</code> - Displays todo text from props
              </div>
              <div className="explanation-item">
                <strong>Line 15:</strong> <code>onClick=&#123;onDelete&#125;</code> - Calls parent delete function when clicked
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a topic to learn about Props and State</div>;
    }
  };

  return (
    <div className="props-state-container">
      <div className="ps-header">
        <h1>React Props & State</h1>
        <p>Complete guide to Props and useState with working examples</p>
      </div>
      
      <div className="ps-navigation">
        <button 
          className={`nav-btn ${activeSection === 'introduction' ? 'active' : ''}`}
          onClick={() => setActiveSection('introduction')}
        >
          🎯 Introduction
        </button>
        <button 
          className={`nav-btn ${activeSection === 'props-deep' ? 'active' : ''}`}
          onClick={() => setActiveSection('props-deep')}
        >
          📤 Props Deep Dive
        </button>
        <button 
          className={`nav-btn ${activeSection === 'state-deep' ? 'active' : ''}`}
          onClick={() => setActiveSection('state-deep')}
        >
          🔄 State Deep Dive
        </button>
        <button 
          className={`nav-btn ${activeSection === 'complete-app' ? 'active' : ''}`}
          onClick={() => setActiveSection('complete-app')}
        >
          🚀 Complete App
        </button>
        <button 
          className={`nav-btn ${activeSection === 'components' ? 'active' : ''}`}
          onClick={() => setActiveSection('components')}
        >
          🧩 Components
        </button>
      </div>
      
      <div className="ps-main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default PropsAndState;
