import React, { useState } from 'react';
import './VariablesAndFunctions.css';

const VariablesAndFunctions = () => {
  const [activeSection, setActiveSection] = useState('variables');

  const renderContent = () => {
    switch(activeSection) {
      case 'variables':
        return (
          <div className="content-section">
            <h2>JavaScript Variables</h2>
            <div className="explanation-box">
              <p>Variables are containers that store data values. In JavaScript, there are three ways to declare variables: var, let, and const.</p>
              <h3>Key Differences:</h3>
              <ul>
                <li><strong>var</strong> - Function scoped, can be redeclared and updated</li>
                <li><strong>let</strong> - Block scoped, can be updated but not redeclared</li>
                <li><strong>const</strong> - Block scoped, cannot be updated or redeclared</li>
              </ul>
            </div>
            
            <h3>1. var Declaration</h3>
            <div className="code-box">
              <h4>var Examples</h4>
              <pre className="code-content">
{`var name = "John";
var age = 25;
var isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

var name = "Sarah";
console.log(name);

function testVar() {
  var localVar = "I'm local";
  console.log(localVar);
}

testVar();`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>var name = "John";</code> - Declares a variable named 'name' and assigns the string "John" to it
              </div>
              <div className="explanation-item">
                <strong>Line 2:</strong> <code>var age = 25;</code> - Declares a variable named 'age' and assigns the number 25 to it
              </div>
              <div className="explanation-item">
                <strong>Line 3:</strong> <code>var isStudent = true;</code> - Declares a variable named 'isStudent' and assigns the boolean value true
              </div>
              <div className="explanation-item">
                <strong>Line 5-7:</strong> <code>console.log()</code> - Prints the values of variables to the browser console for debugging
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>var name = "Sarah";</code> - Redeclares the same variable 'name' with a new value (allowed with var)
              </div>
              <div className="explanation-item">
                <strong>Line 12:</strong> <code>function testVar()</code> - Declares a function named 'testVar' with no parameters
              </div>
              <div className="explanation-item">
                <strong>Line 13:</strong> <code>var localVar = "I'm local";</code> - Creates a variable inside the function (function scoped)
              </div>
              <div className="explanation-item">
                <strong>Line 17:</strong> <code>testVar();</code> - Calls/executes the testVar function
              </div>
            </div>
            
            <div className="explanation-item">
              <strong>var characteristics:</strong> Can be redeclared, function scoped, gets hoisted to the top
            </div>
            
            <h3>2. let Declaration</h3>
            <div className="code-box">
              <h4>let Examples</h4>
              <pre className="code-content">
{`let userName = "Alice";
let userAge = 30;
let isActive = false;

console.log(userName);
console.log(userAge);
console.log(isActive);

userName = "Bob";
console.log(userName);

if (true) {
  let blockScoped = "I'm only available in this block";
  console.log(blockScoped);
}

for (let i = 0; i < 3; i++) {
  console.log("Loop iteration:", i);
}`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>let userName = "Alice";</code> - Declares a block-scoped variable 'userName' with string value
              </div>
              <div className="explanation-item">
                <strong>Line 2:</strong> <code>let userAge = 30;</code> - Declares a block-scoped variable 'userAge' with number value
              </div>
              <div className="explanation-item">
                <strong>Line 3:</strong> <code>let isActive = false;</code> - Declares a block-scoped variable 'isActive' with boolean value
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>userName = "Bob";</code> - Updates the value of existing variable (no redeclaration needed)
              </div>
              <div className="explanation-item">
                <strong>Line 12:</strong> <code>if (true)</code> - Creates a block scope with curly braces {}
              </div>
              <div className="explanation-item">
                <strong>Line 13:</strong> <code>let blockScoped = "...";</code> - Variable only exists inside this block, not outside
              </div>
              <div className="explanation-item">
                <strong>Line 17:</strong> <code>for (let i = 0; i &lt; 3; i++)</code> - Loop with block-scoped counter variable 'i'
              </div>
              <div className="explanation-item">
                <strong>Line 18:</strong> Variable 'i' is recreated for each loop iteration, preventing common closure issues
              </div>
            </div>
            
            <div className="explanation-item">
              <strong>let characteristics:</strong> Cannot be redeclared, block scoped, temporal dead zone
            </div>
            
            <h3>3. const Declaration</h3>
            <div className="code-box">
              <h4>const Examples</h4>
              <pre className="code-content">
{`const PI = 3.14159;
const APP_NAME = "React Learning";
const MAX_USERS = 100;

console.log(PI);
console.log(APP_NAME);
console.log(MAX_USERS);

const user = {
  name: "John",
  age: 25,
  email: "john@example.com"
};

user.name = "Jane";
user.age = 26;
console.log(user);

const colors = ["red", "green", "blue"];
colors.push("yellow");
colors[0] = "purple";
console.log(colors);`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>const PI = 3.14159;</code> - Declares a constant with mathematical value of PI (cannot be changed)
              </div>
              <div className="explanation-item">
                <strong>Line 2:</strong> <code>const APP_NAME = "React Learning";</code> - Declares a constant string (convention: UPPERCASE for constants)
              </div>
              <div className="explanation-item">
                <strong>Line 3:</strong> <code>const MAX_USERS = 100;</code> - Declares a constant number representing maximum users
              </div>
              <div className="explanation-item">
                <strong>Line 9-13:</strong> <code>const user = {`{...}`}</code> - Declares a constant object with properties name, age, email
              </div>
              <div className="explanation-item">
                <strong>Line 15-16:</strong> <code>user.name = "Jane";</code> - Modifies object properties (allowed - object reference is constant, not contents)
              </div>
              <div className="explanation-item">
                <strong>Line 19:</strong> <code>const colors = ["red", "green", "blue"];</code> - Declares a constant array with three string elements
              </div>
              <div className="explanation-item">
                <strong>Line 20:</strong> <code>colors.push("yellow");</code> - Adds new element to array (allowed - array reference is constant)
              </div>
              <div className="explanation-item">
                <strong>Line 21:</strong> <code>colors[0] = "purple";</code> - Changes first array element from "red" to "purple"
              </div>
            </div>
            
            <div className="explanation-item">
              <strong>const characteristics:</strong> Cannot be redeclared or reassigned, block scoped, must be initialized
            </div>
            
            <h3>Variable Comparison</h3>
            <div className="comparison-grid">
              <div className="comparison-box">
                <h4>var</h4>
                <div className="code-box mini">
                  <pre className="code-content">
{`var x = 1;
if (true) {
  var x = 2;
  console.log(x); // 2
}
console.log(x); // 2`}
                  </pre>
                </div>
                <p>Function scoped, can be redeclared</p>
              </div>
              
              <div className="comparison-box">
                <h4>let</h4>
                <div className="code-box mini">
                  <pre className="code-content">
{`let y = 1;
if (true) {
  let y = 2;
  console.log(y); // 2
}
console.log(y); // 1`}
                  </pre>
                </div>
                <p>Block scoped, cannot be redeclared</p>
              </div>
              
              <div className="comparison-box">
                <h4>const</h4>
                <div className="code-box mini">
                  <pre className="code-content">
{`const z = 1;
if (true) {
  const z = 2;
  console.log(z); // 2
}
console.log(z); // 1`}
                  </pre>
                </div>
                <p>Block scoped, immutable binding</p>
              </div>
            </div>
          </div>
        );

      case 'functions':
        return (
          <div className="content-section">
            <h2>JavaScript Functions</h2>
            <div className="explanation-box">
              <p>Functions are reusable blocks of code that perform specific tasks. JavaScript has several ways to create functions.</p>
              <h3>Types of Functions:</h3>
              <ul>
                <li><strong>Function Declaration</strong> - Traditional function syntax</li>
                <li><strong>Function Expression</strong> - Function assigned to a variable</li>
                <li><strong>Arrow Function</strong> - ES6 concise function syntax</li>
                <li><strong>Anonymous Function</strong> - Function without a name</li>
              </ul>
            </div>
            
            <h3>1. Function Declaration</h3>
            <div className="code-box">
              <h4>Regular Function Declaration</h4>
              <pre className="code-content">
{`function greet(name) {
  return "Hello, " + name + "!";
}

function add(a, b) {
  return a + b;
}

function calculateArea(length, width) {
  const area = length * width;
  return area;
}

function getUserInfo(name, age, city) {
  return {
    name: name,
    age: age,
    city: city,
    description: name + " is " + age + " years old and lives in " + city
  };
}

console.log(greet("John"));
console.log(add(5, 3));
console.log(calculateArea(10, 20));
console.log(getUserInfo("Alice", 25, "New York"));`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>function greet(name)</code> - Declares a function named 'greet' that accepts one parameter 'name'
              </div>
              <div className="explanation-item">
                <strong>Line 2:</strong> <code>return "Hello, " + name + "!";</code> - Returns a string by concatenating text with the parameter
              </div>
              <div className="explanation-item">
                <strong>Line 5:</strong> <code>function add(a, b)</code> - Declares a function with two parameters 'a' and 'b'
              </div>
              <div className="explanation-item">
                <strong>Line 6:</strong> <code>return a + b;</code> - Returns the sum of both parameters
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>function calculateArea(length, width)</code> - Function with descriptive name and two parameters
              </div>
              <div className="explanation-item">
                <strong>Line 10:</strong> <code>const area = length * width;</code> - Creates local variable by multiplying parameters
              </div>
              <div className="explanation-item">
                <strong>Line 11:</strong> <code>return area;</code> - Returns the calculated result
              </div>
              <div className="explanation-item">
                <strong>Line 14-20:</strong> Function returns an object with multiple properties and a computed description
              </div>
              <div className="explanation-item">
                <strong>Line 23-26:</strong> Function calls - executing functions with different arguments and printing results
              </div>
            </div>
            
            <div className="explanation-item">
              <strong>Function Declaration:</strong> Hoisted, can be called before definition, has function scope
            </div>
            
            <h3>2. Function Expression</h3>
            <div className="code-box">
              <h4>Function Expression Examples</h4>
              <pre className="code-content">
{`const sayHello = function(name) {
  return "Hello, " + name + "!";
};

const multiply = function(x, y) {
  return x * y;
};

const getFullName = function(firstName, lastName) {
  return firstName + " " + lastName;
};

const calculateDiscount = function(price, discountPercent) {
  const discount = price * (discountPercent / 100);
  return price - discount;
};

console.log(sayHello("Sarah"));
console.log(multiply(4, 7));
console.log(getFullName("John", "Doe"));
console.log(calculateDiscount(100, 20));`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>const sayHello = function(name)</code> - Assigns an anonymous function to a constant variable
              </div>
              <div className="explanation-item">
                <strong>Line 2:</strong> <code>return "Hello, " + name + "!";</code> - Same as function declaration but stored in variable
              </div>
              <div className="explanation-item">
                <strong>Line 3:</strong> <code>&#125;;</code> - Semicolon needed because this is a variable assignment
              </div>
              <div className="explanation-item">
                <strong>Line 5:</strong> <code>const multiply = function(x, y)</code> - Another function expression with two parameters
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>const getFullName = function(firstName, lastName)</code> - Function that combines two strings
              </div>
              <div className="explanation-item">
                <strong>Line 13-15:</strong> Function with calculation logic - creates local variable and performs math operations
              </div>
              <div className="explanation-item">
                <strong>Line 14:</strong> <code>const discount = price * (discountPercent / 100);</code> - Calculates percentage discount
              </div>
              <div className="explanation-item">
                <strong>Line 18-21:</strong> Calling function expressions - same syntax as regular functions
              </div>
            </div>
            
            <div className="explanation-item">
              <strong>Function Expression:</strong> Not hoisted, must be defined before use, assigned to variable
            </div>
            
            <h3>3. Arrow Functions</h3>
            <div className="code-box">
              <h4>Arrow Function Syntax</h4>
              <pre className="code-content">
{`const greetArrow = (name) => {
  return "Hello, " + name + "!";
};

const addArrow = (a, b) => a + b;

const square = x => x * x;

const getAge = () => 25;

const createUser = (name, email) => ({
  name: name,
  email: email,
  id: Math.random()
});

const processNumbers = (numbers) => {
  return numbers.map(num => num * 2).filter(num => num > 10);
};

console.log(greetArrow("Mike"));
console.log(addArrow(3, 7));
console.log(square(5));
console.log(getAge());
console.log(createUser("Alice", "alice@email.com"));
console.log(processNumbers([1, 5, 8, 12, 3]));`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>const greetArrow = (name) =&gt; &#123;</code> - Arrow function with parentheses around parameter and curly braces
              </div>
              <div className="explanation-item">
                <strong>Line 2:</strong> <code>return "Hello, " + name + "!";</code> - Explicit return statement needed with curly braces
              </div>
              <div className="explanation-item">
                <strong>Line 5:</strong> <code>const addArrow = (a, b) =&gt; a + b;</code> - Implicit return (no curly braces, no return keyword needed)
              </div>
              <div className="explanation-item">
                <strong>Line 7:</strong> <code>const square = x =&gt; x * x;</code> - Single parameter doesn't need parentheses
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>const getAge = () =&gt; 25;</code> - No parameters require empty parentheses ()
              </div>
              <div className="explanation-item">
                <strong>Line 11-15:</strong> <code>=&gt; (&#123;...&#125;)</code> - Parentheses around object literal for implicit return
              </div>
              <div className="explanation-item">
                <strong>Line 13:</strong> <code>id: Math.random()</code> - Generates random number for unique ID
              </div>
              <div className="explanation-item">
                <strong>Line 17:</strong> <code>numbers.map(num =&gt; num * 2)</code> - Arrow function used as callback in array methods
              </div>
              <div className="explanation-item">
                <strong>Line 17:</strong> <code>.filter(num =&gt; num &gt; 10)</code> - Chaining array methods with arrow functions
              </div>
            </div>
            
            <div className="explanation-item">
              <strong>Arrow Functions:</strong> Concise syntax, lexical this binding, cannot be used as constructors
            </div>
            
            <h3>Arrow Function Variations</h3>
            <div className="syntax-grid">
              <div className="syntax-box">
                <h4>Single Parameter</h4>
                <div className="code-box mini">
                  <pre className="code-content">
{`const double = x => x * 2;

const getName = user => user.name;

const isAdult = age => age >= 18;`}
                  </pre>
                </div>
              </div>
              
              <div className="syntax-box">
                <h4>Multiple Parameters</h4>
                <div className="code-box mini">
                  <pre className="code-content">
{`const add = (a, b) => a + b;

const getFullName = (first, last) => 
  first + " " + last;

const calculate = (x, y, operation) => 
  operation(x, y);`}
                  </pre>
                </div>
              </div>
              
              <div className="syntax-box">
                <h4>No Parameters</h4>
                <div className="code-box mini">
                  <pre className="code-content">
{`const getCurrentTime = () => 
  new Date().toLocaleTimeString();

const getRandomNumber = () => 
  Math.random();

const sayHello = () => "Hello World!";`}
                  </pre>
                </div>
              </div>
              
              <div className="syntax-box">
                <h4>Object Return</h4>
                <div className="code-box mini">
                  <pre className="code-content">
{`const createUser = (name, age) => ({
  name: name,
  age: age,
  id: Date.now()
});

const getCoordinates = (x, y) => ({
  x: x,
  y: y
});`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        );

      case 'advanced':
        return (
          <div className="content-section">
            <h2>Advanced Function Concepts</h2>
            <div className="explanation-box">
              <p>JavaScript functions have advanced features like closures, higher-order functions, callbacks, and async functions.</p>
            </div>
            
            <h3>1. Higher-Order Functions</h3>
            <div className="code-box">
              <h4>Functions that take or return other functions</h4>
              <pre className="code-content">
{`const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

const createMultiplier = (factor) => {
  return (number) => number * factor;
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(4));`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>const numbers = [1, 2, 3, 4, 5];</code> - Creates an array of numbers to work with
              </div>
              <div className="explanation-item">
                <strong>Line 3:</strong> <code>numbers.map(num =&gt; num * 2)</code> - map() creates new array by applying function to each element
              </div>
              <div className="explanation-item">
                <strong>Line 6:</strong> <code>numbers.filter(num =&gt; num % 2 === 0)</code> - filter() creates new array with elements that pass the test
              </div>
              <div className="explanation-item">
                <strong>Line 9:</strong> <code>numbers.reduce((total, num) =&gt; total + num, 0)</code> - reduce() combines all elements into single value
              </div>
              <div className="explanation-item">
                <strong>Line 12:</strong> <code>const createMultiplier = (factor) =&gt;</code> - Higher-order function that returns another function
              </div>
              <div className="explanation-item">
                <strong>Line 13:</strong> <code>return (number) =&gt; number * factor;</code> - Returns a function that remembers the 'factor' parameter
              </div>
              <div className="explanation-item">
                <strong>Line 16-17:</strong> <code>createMultiplier(2)</code> - Creates specific multiplier functions with different factors
              </div>
              <div className="explanation-item">
                <strong>Line 19-20:</strong> Using the created functions - each remembers its own factor value
              </div>
            </div>
            
            <h3>2. Closures</h3>
            <div className="code-box">
              <h4>Functions that remember their outer scope</h4>
              <pre className="code-content">
{`function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());

function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance: () => balance
  };
}

const account = createBankAccount(100);
console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.getBalance());`}
              </pre>
            </div>
            
            <h3>3. Callback Functions</h3>
            <div className="code-box">
              <h4>Functions passed as arguments to other functions</h4>
              <pre className="code-content">
{`function processData(data, callback) {
  const result = data * 2;
  callback(result);
}

function displayResult(result) {
  console.log("Result:", result);
}

processData(5, displayResult);

function fetchUserData(userId, onSuccess, onError) {
  setTimeout(() => {
    if (userId > 0) {
      const user = {
        id: userId,
        name: "John Doe",
        email: "john@example.com"
      };
      onSuccess(user);
    } else {
      onError("Invalid user ID");
    }
  }, 1000);
}

fetchUserData(1, 
  (user) => console.log("User found:", user),
  (error) => console.log("Error:", error)
);`}
              </pre>
            </div>
            
            <h3>4. Async Functions</h3>
            <div className="code-box">
              <h4>Functions that handle asynchronous operations</h4>
              <pre className="code-content">
{`async function fetchUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

const getUserData = async (userId) => {
  try {
    const user = await fetchUser(userId);
    console.log("User data:", user);
    return user;
  } catch (error) {
    console.log("Failed to get user");
  }
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const processWithDelay = async () => {
  console.log("Starting process...");
  await delay(2000);
  console.log("Process completed after 2 seconds");
};

processWithDelay();`}
              </pre>
            </div>
          </div>
        );

      case 'react-functions':
        return (
          <div className="content-section">
            <h2>Functions in React</h2>
            <div className="explanation-box">
              <p>React components are functions that return JSX. React also provides special functions called hooks for managing state and side effects.</p>
            </div>
            
            <h3>1. Function Components</h3>
            <div className="code-box">
              <h4>Basic React Function Components</h4>
              <pre className="code-content">
{`import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const Greeting = (props) => {
  return (
    <div>
      <h2>Welcome, {props.user}!</h2>
      <p>Today is {new Date().toLocaleDateString()}</p>
    </div>
  );
};

const UserCard = ({ name, age, email }) => (
  <div className="user-card">
    <h3>{name}</h3>
    <p>Age: {age}</p>
    <p>Email: {email}</p>
  </div>
);

function App() {
  return (
    <div>
      <Welcome name="John" />
      <Greeting user="Sarah" />
      <UserCard 
        name="Mike" 
        age={30} 
        email="mike@example.com" 
      />
    </div>
  );
}

export default App;`}
              </pre>
            </div>
            
            <div className="line-explanation">
              <h4>Line by Line Explanation:</h4>
              <div className="explanation-item">
                <strong>Line 1:</strong> <code>import React from 'react';</code> - Imports React library to use JSX
              </div>
              <div className="explanation-item">
                <strong>Line 3:</strong> <code>function Welcome(props)</code> - React component function that receives props parameter
              </div>
              <div className="explanation-item">
                <strong>Line 4:</strong> <code>return &lt;h1&gt;Hello, &#123;props.name&#125;!&lt;/h1&gt;;</code> - Returns JSX element with dynamic content from props
              </div>
              <div className="explanation-item">
                <strong>Line 7:</strong> <code>const Greeting = (props) =&gt;</code> - Arrow function component (alternative syntax)
              </div>
              <div className="explanation-item">
                <strong>Line 11:</strong> <code>new Date().toLocaleDateString()</code> - JavaScript method to get current date
              </div>
              <div className="explanation-item">
                <strong>Line 15:</strong> <code>const UserCard = (&#123; name, age, email &#125;) =&gt;</code> - Destructuring props directly in parameters
              </div>
              <div className="explanation-item">
                <strong>Line 15:</strong> <code>(JSX)</code> - Implicit return of JSX without curly braces
              </div>
              <div className="explanation-item">
                <strong>Line 25-31:</strong> Using components with props - passing data to child components
              </div>
              <div className="explanation-item">
                <strong>Line 35:</strong> <code>export default App;</code> - Makes component available for import in other files
              </div>
            </div>
            
            <h3>2. Event Handler Functions</h3>
            <div className="code-box">
              <h4>Handling events in React</h4>
              <pre className="code-content">
{`import React, { useState } from 'react';

function ButtonExample() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
    setMessage('Counter reset!');
  };

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with message:', message);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Enter a message"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Message: {message}</p>
    </div>
  );
}`}
              </pre>
            </div>
            
            <h3>3. Custom Hook Functions</h3>
            <div className="code-box">
              <h4>Creating reusable logic with custom hooks</h4>
              <pre className="code-content">
{`import React, { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        );

      default:
        return <div>Select a topic to learn about Variables and Functions</div>;
    }
  };

  return (
    <div className="variables-functions-container">
      <div className="vf-header">
        <h1>JavaScript Variables & Functions</h1>
        <p>Complete guide to variables, functions, and their usage in JavaScript and React</p>
      </div>
      
      <div className="vf-navigation">
        <button 
          className={`nav-btn ${activeSection === 'variables' ? 'active' : ''}`}
          onClick={() => setActiveSection('variables')}
        >
          📦 Variables
        </button>
        <button 
          className={`nav-btn ${activeSection === 'functions' ? 'active' : ''}`}
          onClick={() => setActiveSection('functions')}
        >
          ⚡ Functions
        </button>
        <button 
          className={`nav-btn ${activeSection === 'advanced' ? 'active' : ''}`}
          onClick={() => setActiveSection('advanced')}
        >
          🚀 Advanced
        </button>
        <button 
          className={`nav-btn ${activeSection === 'react-functions' ? 'active' : ''}`}
          onClick={() => setActiveSection('react-functions')}
        >
          ⚛️ React Functions
        </button>
      </div>
      
      <div className="vf-main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default VariablesAndFunctions;
