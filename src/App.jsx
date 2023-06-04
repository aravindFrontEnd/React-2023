import { useState } from "react";
import Title from "./Title";
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';


const allCategories = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {

  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filteredItems = (category) =>{
    if(category === 'all'){
      setMenuItems(menu)
      return;
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu'>
        <Title text='Papa Jaan' />
        <Categories list={categories} filteredItems={filteredItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
};
export default App;
