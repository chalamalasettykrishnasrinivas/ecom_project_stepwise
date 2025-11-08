import React, { useState } from 'react';
import './App.css'
import Router from './router/Router';
import publicRoutes from './router/routers/publicRoutes';
function App() {
  const [allRoutes,setAllRoutes] = useState([...publicRoutes]);
  console.log("All Routes:", allRoutes);
  return <Router allRoutes={allRoutes}/>
}

export default App;

