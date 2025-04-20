import { useState } from 'react'
import { Header } from './components/Header';
import "./App.css";
import { Breadcrumbs } from './components/Breadcrumbs';
import { Filters } from './components/Filters';
import { Catalog } from './components/Catalog';
import { goods } from './components/goods';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Breadcrumbs/>
      <div className="wrap flex gap-5">
        <Filters setSearchQuery={setSearchQuery}/>
        <Catalog searchQuery={searchQuery}/>
      </div>
    </>
  )
}

export default App
