import { useState } from 'react'
import { Header } from './components/Header';
import "./App.css";
import { Breadcrumbs } from './components/Breadcrumbs';
import { Filters } from './components/Filters';
import { Catalog } from './components/Catalog';
import { goods } from './components/goods';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [filteredGoods, setFilteredGoods] = useState(goods);
  
  const filterCatalog = (e) => {
    setSelectedColor(e)
    setFilteredGoods(goods.filter((el) => el.colors.some(color => color === e)))
  }
  
  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Breadcrumbs/>
      <div className="wrap flex gap-5">
        <Filters filterCatalog={filterCatalog}/>
        <Catalog filteredGoods={filteredGoods} searchQuery={searchQuery}/>
      </div>
    </>
  )
}

export default App
