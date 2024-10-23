import { useEffect } from "react";
import { useState } from "react";
import Item from "./item/Item";


const Items = ({wantToCook}) => {

    const [items, setItems] = useState([]);

     useEffect(()=>{
        fetch('items.json')
        .then(res => res.json())
        .then(data => setItems(data));
     },[ ])

    return (
        <div className="w-[80%]">

                <div className="grid grid-cols-2 place-content-center gap-5">

                    {
                        items.map(item => <Item key={item.id} item={item} wantToCook = {wantToCook}></Item>)
                    }

                </div>
            
        </div>
    );
};

export default Items;