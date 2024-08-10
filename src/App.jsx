import Header from './header';
import Content from './content';
import Footer from './footer';
import { useState} from 'react';

  function App(){
    
    const [items, setItems] = useState([
      { 
          id: 1,
          checked: false,
          item: "Milk"
      },
      { 
          id: 2,
          checked: false,
          item: "Eggs"
      },
      { 
          id: 3,
          checked: false,
          item: "Bread"
      },
      { 
          id: 4,
          checked: false,
          item: "Cheese"
      }
  ]);

  const handleCheck = (id) => {
    const updatedItems = items.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <Header/>
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}



export default App;
