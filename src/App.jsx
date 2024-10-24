import { useState } from "react";
import Banner from "./components/banner";
import Header from "./components/header";
import History from "./components/History/History";
import Items from "./components/Items/Items";
import Title from "./components/Title";

const App = () => {

  const [items, setItems] = useState([]);
  const [listRemove, setListRemove] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const wantToCook = (item) =>{
    const isPresent = items.find((i) => i.id === item.id);
    if(isPresent)
    {
      alert("Already Is Preparing");
    }
    else{
          
    const newItems = [...items, item];
    setItems(newItems);

    }

  }

  const removeFromList =(item) =>{
    console.log("click");
    const isPresent = items.find((i) => i.id === item.id);

    const updateList = items.filter((i) => i.id !== item.id)
    setItems(updateList);
    setListRemove([...listRemove, isPresent]);

    const pTime = item.cookingTime.split(" ");
    console.log(parseInt(pTime[0]));
    const newTime = parseInt(pTime[0]) + totalTime;
    setTotalTime(newTime);
    const pCalories = item.calories.split(" ");
    console.log(parseInt(pCalories[0]));
    const newCalories = parseInt(pCalories[0]) + totalCalories;
    setTotalCalories(newCalories);

  }


  return (
    <div>

      <Header></Header>
      <Banner></Banner>
      <Title></Title>
      <div className="flex flex-col lg:flex-row gap-3 justify-between">
        <Items wantToCook = {wantToCook}></Items>
        <History items= {items} removeFromList = {removeFromList} listRemove = {listRemove} totalTime={totalTime} totalCalories={totalCalories}></History>
      </div>
      
      
    </div>
  );
};

export default App;