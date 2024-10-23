import { useState } from "react";
import Banner from "./components/banner";
import Header from "./components/header";
import History from "./components/History/History";
import Items from "./components/Items/Items";
import Title from "./components/Title";

const App = () => {

  const [items, setItems] = useState([]);

  const wantToCook = (item) =>{
    console.log(item);
    const newItems = [...items, item];
    setItems(newItems);
  }

  return (
    <div>

      <Header></Header>
      <Banner></Banner>
      <Title></Title>
      <div className="flex gap-3 justify-between">
        <Items wantToCook = {wantToCook}></Items>
        <History items= {items}></History>
      </div>
      
      
    </div>
  );
};

export default App;