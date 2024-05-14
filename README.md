# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

------------------------------------------------
        REACT - ADVANCED Front end TECHNOLOGY
    -------------------------------------------------

    - Basic Concepts 
        - React App is a Collection of different Library 
        - React App is a Collection of Components 
            - Components are arranged in a tree structure
            - There will be a root Component in React app which is commonly known as 'App' 
        - React used to create Single Page Application
        - Pure functions : which doesnot cause side effects, used to create react functional compoenent, 
        - Declarative Approach 
        - *Virtual DOM : Light weight memory representation of real DOM
            - Reconciliation 
        - *JSX (JAVASCRIPT XML) : (Language used to write code in React) - used to display content in browser 
            - ex: JSX Elements :  const heading = <h1>Heading 1</h1>
            - Rules for Using JSX 
                - Every JSX elements must be inside a single parent tag
                - Parent Tag can be any container tag /  react fragment ( <>...</> )
                - Every tag must has a closing tag. ex: <h1>heading</h1> , <br/> (self closing tags)
                - JSX using camel case
                - Instead of Attribute 'class' use 'className' in JSX
                - Instead of Attribute 'for' use 'htmlFor' in JSX
                - use { js-expression } : To provide js expression in JSX
        - React App Creation
            - CRA (using create-react-app commanad)
            - Vite : build tool for web projects
                - Installing vite Globally : npm i -g create-vite
                - React app using vite : npm create vite@latest react-app -- --template react
        - React App File & Folder structure
            - package.json file : npm configuaration file for the project
            - package-lock.json file : contains version history all packages installed in the project
            - .gitignore file : contains files/folder name which is ignored while adding to git
            - index.html file : entry page to react app 
            - node-modules folder : used to hold copies of dependent libraries of react project (we can install using command : npm install)
            - public folder : react project can access data stored in public folder as Globally 
            - src folder : define react app here
                - assets folder : used to hold media files used in react app
                - main.jsx file : create ReactDOM with parent node as div with id as 'root', and render the  parent (App) Component inside the node
            - to run react app : use command 'npm run dev'
            - Babel library : transpile JSX code to simple react function which is understood by Browser
        - *High Performance
        - *Data Binding / Shairing : One way Data binding (from parent to child)
        - *Components : Part of User Interface, independent and reusable code
            - General Rules for Creating components
                - create a js / jsx file, file name must starts with capital letter
            - Different Types compenents
                - Class Based Compoenets : use 'class' to create compoenent it cam inherit react component class
                    - Statefull Component , because it can create state 
                - Functional Based Componets : use 'function' to create compoenent, return jsx code 
                    - Stateless componenet : it cannot create state
            - Life cycle methods of React Component
                - Mounting Phase : Putting JSX to DOM
                    - constructor()
                    - getDerivedStateFromProps()
                    - render()
                    - componentDidMount()
                - Updating Phase : When component is updating
                    - getDerivedStateFromProps()
                    - shouldComponentUpdate()
                    - render()
                    - getSnapshotBeforeUpdate()
                    - componentDidUpdate()
                - Unmounting Phase : Removing component from DOM
                    - componentWillUnmount()
        - Difference between functional and class based compoenent
        -------------------------------------------------------------------------------------------------
                Functional Component                        Class Compoenent
        -------------------------------------------------------------------------------------------------
            1.  JS Pure function to accept props        1. Is class extended from react compoenent
            and return JSX Element                          it render function return JSX Element 
            2. It executes from top to bottom, once     2. Compoent alive depending on different life
            it return JSX, then it cannot be alive          cycle
            3. Stateless component                      3. Statefull component
            4. Hooks are used                           4. Hooks are not used
            5. Life cycle method is not available       5. Can use life cycle method in component
            6. No need render function                  6. It requires render to return JSX
            7. No need of constructor                   7. Constructor used to initialise state

        - Props Object : Property of a component, Using props a component can get the shared data from its parent, props will be get as an 'argument' of functional component 
        - Styling JSX Elements in React Component - using CSS
            - Using Inline CSS : using style attribute
                - syntax : style={{property:value}}
            - Using External CSS : using external css file, import css file to compeonent file
            - CSS Module file : file with extension as .module.css is known as CSS Module file, import module filein compoenet
        - React Events Binding
            - Binding a function without argument : event={function-name}
            - Binding a function with argument : event={()=>function-name(arg)}
            - Binding a function with argument as event : event={(e)=>function-name(e)}
        - Conditional Rendering : Based on a condition we can control the jsx element in browser
            - if statement : use opertaor &&
            - if - else statements : use operator ?:
        - React State : Is an object used to store data / information regarding a compoenent, whenever state changes, the component re-renders
            - use setState(value) : to update state 
        - React Hooks : Is a predefined functions used to provide react component features to functional component
            - Hooks are function with function name starts with 'use' keyword
            - to use a hook in functional component, we must call the hook
            - Rule for calling hooks in functional component
                - Import hook from react, in component
                - Hooks can called at the top level of a component
                - Hooks cannot be conditional
            - Types of Hooks
                - Predefined Hooks
                    - useState(initial-value) : to help functionanl component to create state
                    syntax : const [state-name,state updating function name] = useState(initial-value)
                    - useEffect(function, dependency) : used to provide side effects to your component
                        - function : used define side effects applied to compoent
                        - dependency : based on dependency, useEffect will get called, side effect will applied to the component
                            - no dependency : useEffect hook will call all time in compoenet
                            - [] : useEffect hook will call only at the time in compoenet creation
                            - [data] : useEffect hook will call  at the time in compoenet creation as well as data changes
                - Customised Hook : 
                    - Create a function with name starts with 'use' keyword
        - Handling List/Array using React
            - using 'map' method
            - to uniquely identify each item in a list use 'key' attribute in component
        - Styling Frameworks in REACT                
            - Material UI : npm install @mui/material @emotion/react @emotion/styled
            - React Bootstrap : npm install react-bootstrap bootstrap , we have to add bootstrap theme to properly work bootstrap, bootswatch.com will provide the theme, choose a theme and download its bootstrap.min.css file into project src folder, import bootstrap.min.css into main.jsx file
        - React Forms
            - Controlled Components : data changes in the form is handled by the compoenet by storing its state using change event
            - Uncontrolled Components : form handled by real DOM
            - To submit form, to prevent it from reloading use preventDefault() method compoenet    
        - Set up path for Compoenet in React
            - install react-router-dom :   npm i react-router-dom  
            - React app must render inside 'BrowserRouter' component
            - Compoenets needs to set up path must inside 'Routes' COmpoenent of react router dom in App.jsx
            - using Route compoenet define each compoenet path 
            - Link compoenet used to redirect from one page to another within the app
        - Higher Order Component (HOC) : A compoenet is argument / props to another compoenet
        - react-toastify : Library for notification in react - npm i react-toastify
        - API Call in React
            - Axios library : npm i axios
            - Create folder for services


        ----------------------------------------
                JSON SERVER
        ----------------------------------------
        1. Create a folder to hold json file
        2. Create package.json file inside the folder : npm init -y
        3. Create db.json file inside the folder and resources as key to the json file
        4. To run json file install json-server : npm i json-server / npm i json-server@0.17.4
        5. To run json file in localhost use : npx json-server db.json / node index.js
        -------------------------------------------------
              Deploying A  JSON FILE  using NODE JS
        -------------------------------------------------
        1. Create index.js file server folder
        2. update script in package.json file as "start":"node index.js"
        3. create .gitignore file and add 'node_modules' folder
        4. Define json-server to run json file in index.js
            - import json-server
            - create server run json file using create() method of jsonServer
            - create middleware used by JSON Server.
            - set up route for json file in server
            - use middleware, route in server app
            - listen the app in given port to resolve client request
        5. To run the app, use 'node index.js'

 