import React from 'react'
import "@fontsource/poppins"; 
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/700.css"; 
import AppRoutes from "./routes/Route";
import SmoothScroll from './components/SmoothScroll';
import './App.css'

function App() {
  return (
    <SmoothScroll>
      <AppRoutes/>
    </SmoothScroll>
  );
}

export default App
