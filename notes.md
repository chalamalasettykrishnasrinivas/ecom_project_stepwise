# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=====================================================


npx create-react-app bmvc_board

npm install react-router-dom
npm install
npm install web-vitals


npm i apexcharts react-apexcharts axios jwt-decode moment react-hot-toast react-icons @reduxjs/toolkit react-redux react-spinners react-window redux-thunk socket.io-client



mkdir -p api layout navigation router/routers store/Reducers utils views/auth views/pages

touch api/api.jsx

touch layout/Header.jsx
touch layout/MainLayout.jsx
touch layout/Sidebar.jsx

touch navigation/allNav.jsx
touch navigation/index.jsx

touch router/Router.jsx
touch router/routers/adminRoutes.jsx
touch router/routers/index.jsx
touch router/routers/privateRoutes.jsx
touch router/routers/ProtextRoute.jsx
touch router/routers/publicRoutes.jsx
touch router/routers/sellerRoutes.jsx

touch store/Reducers/index.jsx
touch store/Reducers/rootReducers.jsx

# utils folder (empty)

touch views/auth/Login.jsx
touch views/auth/Register.jsx

# pages folder (empty)


==========================================================
│   App.css
│   App.jsx
│   App.test.js
│   index.css
│   index.js
│   logo.svg
│   reportWebVitals.js
│   setupTests.js
│
├───api
│       api.js
│
├───layout
│       Header.jsx
│       MainLayout.jsx
│       Sidebar.jsx
│
├───navigation
│       allNav.js
│       index.js
│
├───router
│   │   Router.js
│   │
│   └───routers
│           adminRoutes.jsx
│           index.jsx
│           privateRoutes.jsx
│           ProtextRoute.jsx
│           publicRoutes.jsx
│           sellerRoutes.jsx
│           
├───store
│   └───Reducers
│           index.jsx
│           rootReducers.jsx
│
├───utils
└───views
├───auth
│       Login.jsx
│       Register.jsx
│
└───pages



STEP 1:  LOGIN AND REGISTER PAGE WITHOUT CSS 

===========================================================================
edited files

App.jsx 
===========

import './App.css';
import {useState} from "react";
import Router from "./router/Router"
import publicRoutes from "./router/routers/publicRoutes";


function App() {
const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
console.log(allRoutes);
return <Router allRoutes={allRoutes}/>
}

export default App;



INDEX.JS
-------------------------
import React,{lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const App = lazy(() => import('./App'))



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<App />
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


Router.js
----------------------
import React from 'react'
import {useRoutes} from "react-router-dom";



const Router = ({allRoutes}) => {
const routes = useRoutes([...allRoutes])
return routes;
}
export default Router

==============================================
publicRoutes.js
---------------

import {lazy} from "react";
const Login = lazy(() => import("../../views/auth/Login"))
const Register = lazy(() => import("../../views/auth/Register"))
const publicRoutes = [
{
path : '/login',
element : <Login/>
},
{
path : '/register',
element : <Register/>
},

]

export default  publicRoutes

========================================================



=======================================================
STEP:2       LOGIN AND REGISTER PAGE WITH CSS                                           
=======================================================

LOGIN PAGE




import React from 'react'
import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";

const Login = () => {
return (
// full screen
<div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center ">
{/*mainbox style */}
<div className="w-[350px]  text-[#ffffff] p-2 ">
{/*	sub box */}
<div className="bg-[#6f68d1] p-4 rounded-md ">
<h2 className='text-xl mb-3 font-bold '>
Welcome to Ecommerce
</h2>
<p className="text-sm mb-3 font-bold ">
Please SignIn your account
</p>

					<form action="">
						{/*Name field*/}
						
						{/*Email field*/}
						<div className="flex flex-col w-full gap-1 mb-3">
							<label htmlFor="name">Email</label>
							<input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md '
								   type="text" id="email" name="email" placeholder='Email' required/>
						</div>
						{/*password field*/}
						<div className="flex flex-col w-full gap-1 mb-3">
							<label htmlFor="password">Password</label>
							<input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md '
								   type="password" id="password" name="password" placeholder='enter Password' required/>
						
						</div>
						
						
						<button className='bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg rounded-2xl text-white px-5 py-1.5 mb-3'>Sign Up</button>
						
						{/*Redirect to Sign In page */}
						
						<div className="flex items-center  gap-3 mb-3 justify-center ">
							<p>Dont Have an account ? <Link className="font-bold " to={"/register"}>Register</Link></p>
						</div>
						
						<div className="w-full flex  justify-center items-center mb-3">
							<div className='w-[45%] bg-slate-800 h-[1px]'></div>
							<div className="w-[10%] flex justify-center items-center">
								<span className={"pb-1"}> Or </span>
							</div>
							<div className='w-[45%] bg-slate-800 h-[1px]'></div>
						
						</div>
						
						{/* Social login buttons */}
						<div className="flex justify-center gap-4 mt-6">
							<button
								type="button"
								className="w-[135px] h-[30px] flex items-center justify-center bg-white text-black rounded-md shadow hover:shadow-orange-700/50 transition-all"
							>
								<FcGoogle size={20} className="mr-2" />
								Google
							</button>
							<button
								type="button"
								className="w-[135px] h-[30px] flex items-center justify-center bg-blue-500 text-white rounded-md shadow hover:shadow-blue-400 transition-all"
							>
								<FaFacebook size={20} className="mr-2" />
								Facebook
							</button>
						</div>
					
					</form>
				
				
				</div>
			
			</div>
		</div>
	)
}
export default Login


=========================================================================

REGISTER PAGE 

=========================================================================

import React from 'react'
import {Link} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
const Register = () => {
return (
// full screen
<div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center ">
{/*mainbox style */}
<div className="w-[350px]  text-[#ffffff] p-2 ">
{/*	sub box */}
<div className="bg-[#6f68d1] p-4 rounded-md ">
<h2 className='text-xl mb-3 font-bold '>
Welcome to Ecommerce
</h2>
<p className="text-sm mb-3 font-bold ">
Please register your account
</p>

					<form action="">
						{/*Name field*/}
						<div className="flex flex-col w-full gap-1 mb-3">
							<label htmlFor="name">Name</label>
							<input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md '
								   type="text" id="name" name="name" placeholder='Name' required/>
						
						</div>
						{/*Email field*/}
						<div className="flex flex-col w-full gap-1 mb-3">
							<label htmlFor="name">Email</label>
							<input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md '
								   type="text" id="email" name="email" placeholder='Email' required/>
						
						</div>
						{/*password field*/}
						<div className="flex flex-col w-full gap-1 mb-3">
							<label htmlFor="password">Password</label>
							<input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md '
								   type="password" id="password" name="password" placeholder='enter Password' required/>
						
						</div>
						
						{/*terms*/}
						<div className="flex items-center w-full gap-3 mb-3">
							<input className ='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-red-950'
								   type="checkbox" id="checkbox" name="checkbox" />
							<label htmlFor="checkbox">I agree to privacy policy & terms </label>
						</div>
						<button className='bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg rounded-2xl text-white px-5 py-1.5 mb-3'>Sign Up</button>
						
						{/*Redirect to Sign In page */}
						
						<div className="flex items-center  gap-3 mb-3 justify-center ">
							<p>Already Have an account ? <Link className="font-bold " to={"/login"}>Sign In</Link></p>
						</div>
						
						<div className="w-full flex  justify-center items-center mb-3">
							<div className='w-[45%] bg-slate-800 h-[1px]'></div>
							<div className="w-[10%] flex justify-center items-center">
								<span className={"pb-1"}> Or </span>
							</div>
							<div className='w-[45%] bg-slate-800 h-[1px]'></div>
						
						</div>
						
						{/* Social login buttons */}
						<div className="flex justify-center gap-4 mt-6">
							<button
								type="button"
								className="w-[135px] h-[30px] flex items-center justify-center bg-white text-black rounded-md shadow hover:shadow-orange-700/50 transition-all"
							>
								<FcGoogle size={20} className="mr-2" />
								Google
							</button>
							<button
								type="button"
								className="w-[135px] h-[30px] flex items-center justify-center bg-blue-500 text-white rounded-md shadow hover:shadow-blue-400 transition-all"
							>
								<FaFacebook size={20} className="mr-2" />
								Facebook
							</button>
						</div>
					
					</form>
				
				
				</div>
			
			</div>
		</div>
	)
}
export default Register


===========================================================================
ERROR AFTER STATE MANAGEMENT


🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄🙄



ERROR in ./node_modules/body-parser/lib/read.js 19:11-26
Module not found: Error: Can't resolve 'zlib' in 'D:\JAVASCRIPT_PROJECTS\prj_014_name_Build_Multi_Vendor_Ecommerce\bmvc_board\node_modules\body-parser\lib'

BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

If you want to include a polyfill, you need to:
- add a fallback 'resolve.fallback: { "zlib": require.resolve("browserify-zlib") }'
- install 'browserify-zlib'
If you don't want to include a polyfill, you can use an empty module like this:
resolve.fallback: { "zlib": false }



ANSWER:



This error occurs because Webpack 5 (or later) no longer automatically includes polyfills for Node.js core modules like `zlib`. The `body-parser` package indirectly depends on `zlib`, which causes this issue.

To resolve the issue, follow one of the solutions below:

---

### **Solution 1: Configure Webpack with a Polyfill**
1. Install the `browserify-zlib` package:
   ```bash
   npm install browserify-zlib --save-dev
   ```

2. Update your Webpack configuration:
    - If you have a `webpack.config.js` file, add the following under the `resolve.fallback` section:
      ```javascript
      resolve: {
        fallback: {
          zlib: require.resolve("browserify-zlib"),
        },
      },
      ```

---

### **Solution 2: Disable `zlib` Polyfill**
If you don't need `zlib` functionality for your project, you can disable the polyfill by setting it to `false`.

1. Update your Webpack configuration:
   ```javascript
   resolve: {
     fallback: {
       zlib: false,
     },
   },
   ```

---

### **Solution 3: Use a Compatible Version of `body-parser`**
Sometimes older versions of `body-parser` might not require `zlib` for the frontend. Downgrade to an older version that doesn't rely on `zlib`.

1. Install an earlier version of `body-parser`:
   ```bash
   npm install body-parser@1.19.0
   ```

---

### **Solution 4: Use an Alternative**
If `body-parser` is not mandatory for your project, consider replacing it with the built-in `express.json()` and `express.urlencoded()` middleware provided by Express:

1. Remove `body-parser`:
   ```bash
   npm uninstall body-parser
   ```

2. Update your code to use Express's built-in parsing middleware:
   ```javascript
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
   ```

---

### **Verify Your Changes**
After applying one of these solutions:
1. Restart your development server.
2. Verify that the error is resolved.

Let me know if you need further assistance!