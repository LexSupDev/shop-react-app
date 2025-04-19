import { useState } from 'react'
import { Header } from './components/Header';
import "./App.css";
import { Breadcrumbs } from './components/Breadcrumbs';
import { Filters } from './components/Filters';
import { Catalog } from './components/Catalog';

function App() {
  
  return (
    <>
      <Header/>
      <Breadcrumbs/>
      <div className="wrap flex gap-5">
        <Filters/>
        <Catalog/>
      </div>
    </>
  )
}

export default App
