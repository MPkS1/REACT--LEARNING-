import React, { useState } from 'react';
import './ConditionalAndEvents.css';

const ConditionalAndEvents = () => {
  const [activeSection, setActiveSection] = useState('conditional-intro');

  const renderContent = () => {
    switch(activeSection) {
      case 'conditional-intro':
        return (
          <div className="content-section">
            <h2>Conditional Rendering Introduction</h2>
            <div className="explanation-box">
              <p>Conditional rendering in React allows you to display different components or elements based on certain conditions. It's like having if-else statements in your UI!</p>
              <h3>Why Use Conditional Rendering?</h3>
              <ul>
                <li><strong>User Authentication</strong> - Show login form or dashboard based on login status</li>
                <li><strong>Loading States</strong> - Display spinner while data is loading</li>
                <li><strong>Error Handling</strong> - Show error messages when something goes wrong</li>
                <li><strong>Feature Toggles</strong> - Enable/disable features based on user permissions</li>
                <li><strong>Dynamic Content</strong> - Show different content based on user preferences</li>
              </ul>
            </div>
            
            <h3>Basic Conditional Rendering Example</h3>
            <div className="code-box">
              <h4>Simple If-Else with State</h4>
              <pre className="code-content">
{`import React, &#123; useState &#125; from 'react';

function WelcomeMessage() &#123;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("John Doe");

  if (isLoggedIn) &#123;
    return (
      &lt;div className="welcome-container"&gt;
        &lt;h1&gt;Welcome back, &#123;userName&#125;!&lt;/h1&gt;
        &lt;p&gt;Great to see you again.&lt;/p&gt;
        &lt;button onClick=&#123;() =&gt; setIsLoggedIn(false)&#125;&gt;
          Logout
        &lt;/button&gt;
      &lt;/div&gt;
    );
  &#125;

  return (
    &lt;div className="login-container"&gt;
      &lt;h1&gt;Please Log In&lt;/h1&gt;
      &lt;p&gt;You need to log in to access this content.&lt;/p&gt;
      &lt;button onClick=&#123;() =&gt; setIsLoggedIn(true)&#125;&gt;
        Login
      &lt;/button&gt;
    &lt;/div&gt;
  );
&#125;

export default WelcomeMessage;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 4:</strong> <code>const [isLoggedIn, setIsLoggedIn] = useState(false);</code> - Creates boolean state to track login status
              </div>
              <div className="explanation-item">
                <strong>Line 5:</strong> <code>const [userName, setUserName] = useState("John Doe");</code> - Creates string state for user name
              </div>
              <div className="explanation-item">
                <strong>Line 7:</strong> <code>if (isLoggedIn) &#123;</code> - JavaScript if statement checks the condition
              </div>
              <div className="explanation-item">
                <strong>Line 8-16:</strong> Returns JSX for logged-in users - welcome message and logout button
              </div>
              <div className="explanation-item">
                <strong>Line 12:</strong> <code>onClick=&#123;() =&gt; setIsLoggedIn(false)&#125;</code> - Arrow function that sets state to false
              </div>
              <div className="explanation-item">
                <strong>Line 18-26:</strong> Returns JSX for non-logged-in users - login prompt and login button
              </div>
              <div className="explanation-item">
                <strong>Line 22:</strong> <code>onClick=&#123;() =&gt; setIsLoggedIn(true)&#125;</code> - Arrow function that sets state to true
              </div>
            </div>
          </div>
        );

      case 'conditional-methods':
        return (
          <div className="content-section">
            <h2>Conditional Rendering Methods</h2>
            <div className="explanation-box">
              <p>React provides multiple ways to conditionally render content. Each method has its own use cases and benefits.</p>
            </div>
            
            <h3>Method 1: If-Else Statements</h3>
            <div className="code-box">
              <h4>Traditional If-Else</h4>
              <pre className="code-content">
{`function UserStatus(&#123; user &#125;) &#123;
  if (!user) &#123;
    return &lt;div&gt;Loading user data...&lt;/div&gt;;
  &#125;

  if (user.role === 'admin') &#123;
    return (
      &lt;div className="admin-panel"&gt;
        &lt;h2&gt;Admin Dashboard&lt;/h2&gt;
        &lt;p&gt;Welcome, &#123;user.name&#125;&lt;/p&gt;
        &lt;button&gt;Manage Users&lt;/button&gt;
        &lt;button&gt;View Reports&lt;/button&gt;
      &lt;/div&gt;
    );
  &#125;

  if (user.role === 'user') &#123;
    return (
      &lt;div className="user-panel"&gt;
        &lt;h2&gt;User Dashboard&lt;/h2&gt;
        &lt;p&gt;Hello, &#123;user.name&#125;&lt;/p&gt;
        &lt;button&gt;View Profile&lt;/button&gt;
      &lt;/div&gt;
    );
  &#125;

  return &lt;div&gt;Invalid user role&lt;/div&gt;;
&#125;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 2-4:</strong> <code>if (!user)</code> - Checks if user is null/undefined and shows loading state
              </div>
              <div className="explanation-item">
                <strong>Line 6-15:</strong> <code>if (user.role === 'admin')</code> - Checks for admin role and returns admin interface
              </div>
              <div className="explanation-item">
                <strong>Line 17-25:</strong> <code>if (user.role === 'user')</code> - Checks for regular user role and returns user interface
              </div>
              <div className="explanation-item">
                <strong>Line 27:</strong> Fallback return for invalid roles - always have a default case
              </div>
            </div>
            
            <h3>Method 2: Ternary Operator</h3>
            <div className="code-box">
              <h4>Ternary for Simple Conditions</h4>
              <pre className="code-content">
{`function NotificationBell(&#123; notificationCount &#125;) &#123;
  return (
    &lt;div className="notification-bell"&gt;
      &lt;span className="bell-icon"&gt;🔔&lt;/span&gt;
      &#123;notificationCount &gt; 0 ? (
        &lt;span className="notification-badge"&gt;
          &#123;notificationCount &gt; 99 ? '99+' : notificationCount&#125;
        &lt;/span&gt;
      ) : null&#125;
      &lt;p&gt;
        &#123;notificationCount &gt; 0 
          ? \`You have \$&#123;notificationCount&#125; new notifications\`
          : 'No new notifications'
        &#125;
      &lt;/p&gt;
    &lt;/div&gt;
  );
&#125;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 5-9:</strong> <code>&#123;notificationCount &gt; 0 ? (...) : null&#125;</code> - Shows badge only if there are notifications
              </div>
              <div className="explanation-item">
                <strong>Line 7:</strong> <code>&#123;notificationCount &gt; 99 ? '99+' : notificationCount&#125;</code> - Nested ternary for badge text
              </div>
              <div className="explanation-item">
                <strong>Line 11-14:</strong> <code>&#123;condition ? 'text1' : 'text2'&#125;</code> - Different text based on notification count
              </div>
              <div className="explanation-item">
                <strong>Line 12:</strong> Template literal with embedded variable for dynamic text
              </div>
            </div>
            
            <h3>Method 3: Logical AND Operator</h3>
            <div className="code-box">
              <h4>Logical AND for Show/Hide</h4>
              <pre className="code-content">
{`function ShoppingCart(&#123; items, isOpen, onClose &#125;) &#123;
  return (
    &lt;div&gt;
      &#123;isOpen &amp;&amp; (
        &lt;div className="cart-overlay"&gt;
          &lt;div className="cart-modal"&gt;
            &lt;h2&gt;Shopping Cart&lt;/h2&gt;
            &lt;button onClick=&#123;onClose&#125;&gt;Close&lt;/button&gt;
            
            &#123;items.length === 0 &amp;&amp; (
              &lt;p&gt;Your cart is empty&lt;/p&gt;
            )&#125;
            
            &#123;items.length &gt; 0 &amp;&amp; (
              &lt;div&gt;
                &#123;items.map(item =&gt; (
                  &lt;div key=&#123;item.id&#125;&gt;
                    &#123;item.name&#125; - $&#123;item.price&#125;
                  &lt;/div&gt;
                ))&#125;
                &lt;button&gt;Checkout&lt;/button&gt;
              &lt;/div&gt;
            )&#125;
          &lt;/div&gt;
        &lt;/div&gt;
      )&#125;
    &lt;/div&gt;
  );
&#125;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 4-26:</strong> <code>&#123;isOpen &amp;&amp; (...)&#125;</code> - Shows entire cart modal only if isOpen is true
              </div>
              <div className="explanation-item">
                <strong>Line 10-12:</strong> <code>&#123;items.length === 0 &amp;&amp; (...)&#125;</code> - Shows empty message only if no items
              </div>
              <div className="explanation-item">
                <strong>Line 14-23:</strong> <code>&#123;items.length &gt; 0 &amp;&amp; (...)&#125;</code> - Shows items and checkout only if cart has items
              </div>
              <div className="explanation-item">
                <strong>Line 16-20:</strong> <code>&#123;items.map(...)&#125;</code> - Maps through items array to display each item
              </div>
              <div className="explanation-item">
                <strong>Line 17:</strong> <code>key=&#123;item.id&#125;</code> - Unique key required for list items in React
              </div>
            </div>
          </div>
        );

      case 'events-intro':
        return (
          <div className="content-section">
            <h2>Event Handling Introduction</h2>
            <div className="explanation-box">
              <p>Event handling in React allows your components to respond to user interactions like clicks, keyboard input, form submissions, and more. React uses SyntheticEvents that work consistently across all browsers.</p>
              <h3>Common Events in React:</h3>
              <ul>
                <li><strong>onClick</strong> - Button clicks, element clicks</li>
                <li><strong>onChange</strong> - Input field changes, form updates</li>
                <li><strong>onSubmit</strong> - Form submissions</li>
                <li><strong>onMouseOver/onMouseOut</strong> - Mouse hover effects</li>
                <li><strong>onKeyDown/onKeyUp</strong> - Keyboard interactions</li>
                <li><strong>onFocus/onBlur</strong> - Input focus and blur events</li>
              </ul>
            </div>
            
            <h3>Basic Event Handling</h3>
            <div className="code-box">
              <h4>Simple Click Events</h4>
              <pre className="code-content">
{`import React, &#123; useState &#125; from 'react';

function ClickCounter() &#123;
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Event handler function
  const handleClick = () =&gt; &#123;
    setCount(count + 1);
    setMessage(\`Button clicked \$&#123;count + 1&#125; times!\`);
  &#125;;

  // Event handler with parameter
  const handleReset = (resetMessage) =&gt; &#123;
    setCount(0);
    setMessage(resetMessage);
  &#125;;

  return (
    &lt;div className="click-counter"&gt;
      &lt;h2&gt;Click Counter&lt;/h2&gt;
      &lt;p&gt;Count: &#123;count&#125;&lt;/p&gt;
      &lt;p&gt;&#123;message&#125;&lt;/p&gt;
      
      &lt;button onClick=&#123;handleClick&#125;&gt;
        Click Me!
      &lt;/button&gt;
      
      &lt;button onClick=&#123;() =&gt; handleReset('Counter has been reset!')&#125;&gt;
        Reset
      &lt;/button&gt;
      
      &lt;button onClick=&#123;() =&gt; setCount(count - 1)&#125;&gt;
        Decrease
      &lt;/button&gt;
    &lt;/div&gt;
  );
&#125;

export default ClickCounter;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 8-11:</strong> <code>const handleClick = () =&gt; &#123;</code> - Defines event handler function outside JSX
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>setCount(count + 1);</code> - Updates count state by incrementing
              </div>
              <div className="explanation-item">
                <strong>Line 10:</strong> Template literal creates dynamic message with current count
              </div>
              <div className="explanation-item">
                <strong>Line 13-16:</strong> <code>handleReset = (resetMessage) =&gt;</code> - Event handler that accepts parameters
              </div>
              <div className="explanation-item">
                <strong>Line 25:</strong> <code>onClick=&#123;handleClick&#125;</code> - Assigns function reference (no parentheses!)
              </div>
              <div className="explanation-item">
                <strong>Line 29:</strong> <code>onClick=&#123;() =&gt; handleReset('message')&#125;</code> - Arrow function to pass arguments
              </div>
              <div className="explanation-item">
                <strong>Line 33:</strong> <code>onClick=&#123;() =&gt; setCount(count - 1)&#125;</code> - Inline arrow function for simple operations
              </div>
            </div>
          </div>
        );

      case 'events-advanced':
        return (
          <div className="content-section">
            <h2>Advanced Event Handling</h2>
            <div className="explanation-box">
              <p>Advanced event handling includes form events, keyboard events, mouse events, and working with event objects to access detailed information about user interactions.</p>
            </div>
            
            <h3>Form Events and Input Handling</h3>
            <div className="code-box">
              <h4>Complete Form with Multiple Event Types</h4>
              <pre className="code-content">
{`import React, &#123; useState &#125; from 'react';

function UserRegistrationForm() &#123;
  const [formData, setFormData] = useState(&#123;
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  &#125;);
  const [errors, setErrors] = useState(&#123;&#125;);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = (event) =&gt; &#123;
    const &#123; name, value, type, checked &#125; = event.target;
    
    setFormData(prevData =&gt; (&#123;
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    &#125;));
    
    // Clear error when user starts typing
    if (errors[name]) &#123;
      setErrors(prevErrors =&gt; (&#123;
        ...prevErrors,
        [name]: ''
      &#125;));
    &#125;
  &#125;;

  // Handle form submission
  const handleSubmit = (event) =&gt; &#123;
    event.preventDefault(); // Prevent page refresh
    setIsSubmitting(true);
    
    // Validation
    const newErrors = &#123;&#125;;
    if (!formData.username.trim()) &#123;
      newErrors.username = 'Username is required';
    &#125;
    if (!formData.email.includes('@')) &#123;
      newErrors.email = 'Valid email is required';
    &#125;
    if (formData.password.length &lt; 6) &#123;
      newErrors.password = 'Password must be at least 6 characters';
    &#125;
    if (formData.password !== formData.confirmPassword) &#123;
      newErrors.confirmPassword = 'Passwords do not match';
    &#125;
    if (!formData.agreeToTerms) &#123;
      newErrors.agreeToTerms = 'You must agree to terms';
    &#125;

    if (Object.keys(newErrors).length &gt; 0) &#123;
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    &#125;

    // Simulate API call
    setTimeout(() =&gt; &#123;
      alert('Registration successful!');
      setIsSubmitting(false);
      // Reset form
      setFormData(&#123;
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
      &#125;);
    &#125;, 2000);
  &#125;;

  // Handle key press events
  const handleKeyPress = (event) =&gt; &#123;
    if (event.key === 'Enter' &amp;&amp; event.target.name !== 'submit') &#123;
      event.preventDefault();
      // Move to next input or submit
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      if (form.elements[index + 1]) &#123;
        form.elements[index + 1].focus();
      &#125;
    &#125;
  &#125;;

  return (
    &lt;form onSubmit=&#123;handleSubmit&#125; className="registration-form"&gt;
      &lt;h2&gt;User Registration&lt;/h2&gt;
      
      &lt;div className="form-group"&gt;
        &lt;label htmlFor="username"&gt;Username:&lt;/label&gt;
        &lt;input
          type="text"
          id="username"
          name="username"
          value=&#123;formData.username&#125;
          onChange=&#123;handleInputChange&#125;
          onKeyPress=&#123;handleKeyPress&#125;
          placeholder="Enter username"
          className=&#123;errors.username ? 'error' : ''&#125;
        /&gt;
        &#123;errors.username &amp;&amp; (
          &lt;span className="error-message"&gt;&#123;errors.username&#125;&lt;/span&gt;
        )&#125;
      &lt;/div&gt;

      &lt;div className="form-group"&gt;
        &lt;label htmlFor="email"&gt;Email:&lt;/label&gt;
        &lt;input
          type="email"
          id="email"
          name="email"
          value=&#123;formData.email&#125;
          onChange=&#123;handleInputChange&#125;
          onKeyPress=&#123;handleKeyPress&#125;
          placeholder="Enter email"
          className=&#123;errors.email ? 'error' : ''&#125;
        /&gt;
        &#123;errors.email &amp;&amp; (
          &lt;span className="error-message"&gt;&#123;errors.email&#125;&lt;/span&gt;
        )&#125;
      &lt;/div&gt;

      &lt;div className="form-group"&gt;
        &lt;label htmlFor="password"&gt;Password:&lt;/label&gt;
        &lt;input
          type="password"
          id="password"
          name="password"
          value=&#123;formData.password&#125;
          onChange=&#123;handleInputChange&#125;
          onKeyPress=&#123;handleKeyPress&#125;
          placeholder="Enter password"
          className=&#123;errors.password ? 'error' : ''&#125;
        /&gt;
        &#123;errors.password &amp;&amp; (
          &lt;span className="error-message"&gt;&#123;errors.password&#125;&lt;/span&gt;
        )&#125;
      &lt;/div&gt;

      &lt;div className="form-group"&gt;
        &lt;label htmlFor="confirmPassword"&gt;Confirm Password:&lt;/label&gt;
        &lt;input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value=&#123;formData.confirmPassword&#125;
          onChange=&#123;handleInputChange&#125;
          onKeyPress=&#123;handleKeyPress&#125;
          placeholder="Confirm password"
          className=&#123;errors.confirmPassword ? 'error' : ''&#125;
        /&gt;
        &#123;errors.confirmPassword &amp;&amp; (
          &lt;span className="error-message"&gt;&#123;errors.confirmPassword&#125;&lt;/span&gt;
        )&#125;
      &lt;/div&gt;

      &lt;div className="form-group"&gt;
        &lt;label&gt;
          &lt;input
            type="checkbox"
            name="agreeToTerms"
            checked=&#123;formData.agreeToTerms&#125;
            onChange=&#123;handleInputChange&#125;
          /&gt;
          I agree to the terms and conditions
        &lt;/label&gt;
        &#123;errors.agreeToTerms &amp;&amp; (
          &lt;span className="error-message"&gt;&#123;errors.agreeToTerms&#125;&lt;/span&gt;
        )&#125;
      &lt;/div&gt;

      &lt;button 
        type="submit" 
        disabled=&#123;isSubmitting&#125;
        className="submit-button"
      &gt;
        &#123;isSubmitting ? 'Registering...' : 'Register'&#125;
      &lt;/button&gt;
    &lt;/form&gt;
  );
&#125;

export default UserRegistrationForm;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 15-29:</strong> <code>handleInputChange = (event) =&gt;</code> - Generic handler for all form inputs
              </div>
              <div className="explanation-item">
                <strong>Line 16:</strong> <code>const &#123; name, value, type, checked &#125; = event.target;</code> - Destructures event properties
              </div>
              <div className="explanation-item">
                <strong>Line 18-21:</strong> <code>setFormData(prevData =&gt; (...)</code> - Updates form data using functional state update
              </div>
              <div className="explanation-item">
                <strong>Line 20:</strong> <code>[name]: type === 'checkbox' ? checked : value</code> - Handles both regular inputs and checkboxes
              </div>
              <div className="explanation-item">
                <strong>Line 33:</strong> <code>event.preventDefault();</code> - Prevents default form submission (page refresh)
              </div>
              <div className="explanation-item">
                <strong>Line 37-51:</strong> Form validation - checks each field and creates error messages
              </div>
              <div className="explanation-item">
                <strong>Line 53-57:</strong> <code>if (Object.keys(newErrors).length &gt; 0)</code> - Only proceed if no validation errors
              </div>
              <div className="explanation-item">
                <strong>Line 71-79:</strong> <code>handleKeyPress = (event) =&gt;</code> - Handles Enter key to move between inputs
              </div>
              <div className="explanation-item">
                <strong>Line 82:</strong> <code>onSubmit=&#123;handleSubmit&#125;</code> - Attaches submit handler to form element
              </div>
              <div className="explanation-item">
                <strong>Line 94:</strong> <code>onChange=&#123;handleInputChange&#125;</code> - Same handler works for all inputs due to name attribute
              </div>
            </div>
          </div>
        );

      case 'events-practical':
        return (
          <div className="content-section">
            <h2>Practical Event Examples</h2>
            <div className="explanation-box">
              <p>Real-world examples combining conditional rendering with event handling to create interactive user interfaces.</p>
            </div>
            
            <h3>Interactive Todo List with Events</h3>
            <div className="code-box">
              <h4>Complete Todo App with Multiple Event Types</h4>
              <pre className="code-content">
{`import React, &#123; useState, useEffect &#125; from 'react';

function InteractiveTodoList() &#123;
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Load todos from localStorage on component mount
  useEffect(() =&gt; &#123;
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) &#123;
      setTodos(JSON.parse(savedTodos));
    &#125;
  &#125;, []);

  // Save todos to localStorage whenever todos change
  useEffect(() =&gt; &#123;
    localStorage.setItem('todos', JSON.stringify(todos));
  &#125;, [todos]);

  // Add new todo
  const handleAddTodo = (event) =&gt; &#123;
    event.preventDefault();
    if (inputValue.trim() === '') return;
    
    const newTodo = &#123;
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    &#125;;
    
    setTodos(prevTodos =&gt; [...prevTodos, newTodo]);
    setInputValue('');
  &#125;;

  // Toggle todo completion
  const handleToggleTodo = (id) =&gt; &#123;
    setTodos(prevTodos =&gt;
      prevTodos.map(todo =&gt;
        todo.id === id 
          ? &#123; ...todo, completed: !todo.completed &#125;
          : todo
      )
    );
  &#125;;

  // Delete todo
  const handleDeleteTodo = (id) =&gt; &#123;
    if (window.confirm('Are you sure you want to delete this todo?')) &#123;
      setTodos(prevTodos =&gt; prevTodos.filter(todo =&gt; todo.id !== id));
    &#125;
  &#125;;

  // Start editing
  const handleStartEdit = (id, currentText) =&gt; &#123;
    setEditingId(id);
    setEditValue(currentText);
  &#125;;

  // Save edit
  const handleSaveEdit = (id) =&gt; &#123;
    if (editValue.trim() === '') &#123;
      handleDeleteTodo(id);
      return;
    &#125;
    
    setTodos(prevTodos =&gt;
      prevTodos.map(todo =&gt;
        todo.id === id 
          ? &#123; ...todo, text: editValue.trim() &#125;
          : todo
      )
    );
    setEditingId(null);
    setEditValue('');
  &#125;;

  // Cancel edit
  const handleCancelEdit = () =&gt; &#123;
    setEditingId(null);
    setEditValue('');
  &#125;;

  // Handle key events for editing
  const handleEditKeyPress = (event, id) =&gt; &#123;
    if (event.key === 'Enter') &#123;
      handleSaveEdit(id);
    &#125; else if (event.key === 'Escape') &#123;
      handleCancelEdit();
    &#125;
  &#125;;

  // Clear all completed todos
  const handleClearCompleted = () =&gt; &#123;
    setTodos(prevTodos =&gt; prevTodos.filter(todo =&gt; !todo.completed));
  &#125;;

  // Filter todos based on current filter
  const getFilteredTodos = () =&gt; &#123;
    switch (filter) &#123;
      case 'active':
        return todos.filter(todo =&gt; !todo.completed);
      case 'completed':
        return todos.filter(todo =&gt; todo.completed);
      default:
        return todos;
    &#125;
  &#125;;

  const filteredTodos = getFilteredTodos();
  const activeCount = todos.filter(todo =&gt; !todo.completed).length;
  const completedCount = todos.filter(todo =&gt; todo.completed).length;

  return (
    &lt;div className="todo-app"&gt;
      &lt;h1&gt;Interactive Todo List&lt;/h1&gt;
      
      &#123;/* Add Todo Form */&#125;
      &lt;form onSubmit=&#123;handleAddTodo&#125; className="add-todo-form"&gt;
        &lt;input
          type="text"
          value=&#123;inputValue&#125;
          onChange=&#123;(e) =&gt; setInputValue(e.target.value)&#125;
          placeholder="Add a new todo..."
          className="todo-input"
        /&gt;
        &lt;button type="submit"&gt;Add Todo&lt;/button&gt;
      &lt;/form&gt;

      &#123;/* Filter Buttons */&#125;
      &lt;div className="filter-buttons"&gt;
        &lt;button 
          onClick=&#123;() =&gt; setFilter('all')&#125;
          className=&#123;filter === 'all' ? 'active' : ''&#125;
        &gt;
          All (&#123;todos.length&#125;)
        &lt;/button&gt;
        &lt;button 
          onClick=&#123;() =&gt; setFilter('active')&#125;
          className=&#123;filter === 'active' ? 'active' : ''&#125;
        &gt;
          Active (&#123;activeCount&#125;)
        &lt;/button&gt;
        &lt;button 
          onClick=&#123;() =&gt; setFilter('completed')&#125;
          className=&#123;filter === 'completed' ? 'active' : ''&#125;
        &gt;
          Completed (&#123;completedCount&#125;)
        &lt;/button&gt;
      &lt;/div&gt;

      &#123;/* Todo List */&#125;
      &#123;filteredTodos.length === 0 ? (
        &lt;div className="empty-state"&gt;
          &#123;todos.length === 0 
            ? 'No todos yet. Add one above!' 
            : \`No \$&#123;filter&#125; todos.\`
          &#125;
        &lt;/div&gt;
      ) : (
        &lt;ul className="todo-list"&gt;
          &#123;filteredTodos.map(todo =&gt; (
            &lt;li 
              key=&#123;todo.id&#125; 
              className=&#123;\`todo-item \$&#123;todo.completed ? 'completed' : ''&#125;\`&#125;
            &gt;
              &#123;editingId === todo.id ? (
                &lt;div className="edit-mode"&gt;
                  &lt;input
                    type="text"
                    value=&#123;editValue&#125;
                    onChange=&#123;(e) =&gt; setEditValue(e.target.value)&#125;
                    onKeyDown=&#123;(e) =&gt; handleEditKeyPress(e, todo.id)&#125;
                    onBlur=&#123;() =&gt; handleSaveEdit(todo.id)&#125;
                    autoFocus
                    className="edit-input"
                  /&gt;
                  &lt;button onClick=&#123;() =&gt; handleSaveEdit(todo.id)&#125;&gt;
                    Save
                  &lt;/button&gt;
                  &lt;button onClick=&#123;handleCancelEdit&#125;&gt;
                    Cancel
                  &lt;/button&gt;
                &lt;/div&gt;
              ) : (
                &lt;div className="view-mode"&gt;
                  &lt;input
                    type="checkbox"
                    checked=&#123;todo.completed&#125;
                    onChange=&#123;() =&gt; handleToggleTodo(todo.id)&#125;
                    className="todo-checkbox"
                  /&gt;
                  &lt;span 
                    onDoubleClick=&#123;() =&gt; handleStartEdit(todo.id, todo.text)&#125;
                    className="todo-text"
                  &gt;
                    &#123;todo.text&#125;
                  &lt;/span&gt;
                  &lt;button 
                    onClick=&#123;() =&gt; handleStartEdit(todo.id, todo.text)&#125;
                    className="edit-btn"
                  &gt;
                    Edit
                  &lt;/button&gt;
                  &lt;button 
                    onClick=&#123;() =&gt; handleDeleteTodo(todo.id)&#125;
                    className="delete-btn"
                  &gt;
                    Delete
                  &lt;/button&gt;
                &lt;/div&gt;
              )&#125;
            &lt;/li&gt;
          ))&#125;
        &lt;/ul&gt;
      )&#125;

      &#123;/* Footer Actions */&#125;
      &#123;todos.length &gt; 0 &amp;&amp; (
        &lt;div className="todo-footer"&gt;
          &lt;p&gt;
            &#123;activeCount&#125; item&#123;activeCount !== 1 ? 's' : ''&#125; left
          &lt;/p&gt;
          &#123;completedCount &gt; 0 &amp;&amp; (
            &lt;button 
              onClick=&#123;handleClearCompleted&#125;
              className="clear-completed"
            &gt;
              Clear completed (&#123;completedCount&#125;)
            &lt;/button&gt;
          )&#125;
        &lt;/div&gt;
      )&#125;
    &lt;/div&gt;
  );
&#125;

export default InteractiveTodoList;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 11-16:</strong> <code>useEffect(() =&gt; &#123;</code> - Loads saved todos from localStorage on component mount
              </div>
              <div className="explanation-item">
                <strong>Line 19-21:</strong> <code>useEffect(() =&gt; &#123;</code> - Saves todos to localStorage whenever todos array changes
              </div>
              <div className="explanation-item">
                <strong>Line 24-37:</strong> <code>handleAddTodo = (event) =&gt;</code> - Prevents default form submission and adds new todo
              </div>
              <div className="explanation-item">
                <strong>Line 40-47:</strong> <code>handleToggleTodo = (id) =&gt;</code> - Maps through todos to toggle completion status
              </div>
              <div className="explanation-item">
                <strong>Line 50-53:</strong> <code>window.confirm()</code> - Shows browser confirmation dialog before deleting
              </div>
              <div className="explanation-item">
                <strong>Line 80-86:</strong> <code>handleEditKeyPress = (event, id) =&gt;</code> - Handles Enter to save, Escape to cancel
              </div>
              <div className="explanation-item">
                <strong>Line 92-100:</strong> <code>getFilteredTodos = () =&gt;</code> - Returns filtered array based on current filter
              </div>
              <div className="explanation-item">
                <strong>Line 142-147:</strong> Ternary operator shows different empty states based on filter
              </div>
              <div className="explanation-item">
                <strong>Line 154-180:</strong> Conditional rendering shows edit mode or view mode for each todo
              </div>
              <div className="explanation-item">
                <strong>Line 169:</strong> <code>onDoubleClick</code> - Double-click event to start editing
              </div>
              <div className="explanation-item">
                <strong>Line 163:</strong> <code>onBlur</code> - Saves edit when input loses focus
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a topic to learn about Conditional Rendering and Events</div>;
    }
  };

  return (
    <div className="conditional-events-container">
      <div className="ce-header">
        <h1>Conditional Rendering & Event Handling</h1>
        <p>Master dynamic UI updates and user interactions in React</p>
      </div>
      
      <div className="ce-navigation">
        <button 
          className={`nav-btn ${activeSection === 'conditional-intro' ? 'active' : ''}`}
          onClick={() => setActiveSection('conditional-intro')}
        >
          🎯 Conditional Basics
        </button>
        <button 
          className={`nav-btn ${activeSection === 'conditional-methods' ? 'active' : ''}`}
          onClick={() => setActiveSection('conditional-methods')}
        >
          🔀 Rendering Methods
        </button>
        <button 
          className={`nav-btn ${activeSection === 'events-intro' ? 'active' : ''}`}
          onClick={() => setActiveSection('events-intro')}
        >
          👆 Event Basics
        </button>
        <button 
          className={`nav-btn ${activeSection === 'events-advanced' ? 'active' : ''}`}
          onClick={() => setActiveSection('events-advanced')}
        >
          🚀 Advanced Events
        </button>
        <button 
          className={`nav-btn ${activeSection === 'events-practical' ? 'active' : ''}`}
          onClick={() => setActiveSection('events-practical')}
        >
          💡 Practical Examples
        </button>
      </div>
      
      <div className="ce-main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default ConditionalAndEvents;
