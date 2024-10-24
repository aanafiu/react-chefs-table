import { useState } from "react";
import { useEffect } from "react";

const Current = ({item,index}) => {
    const [totalTime, setTotalTime] = useState(0);
    useEffect(() => {
        setTotalTime(totalTime + item.cookingTime);
    }, [item.cookingTime]);
    return (
        <div>

<div className="grid grid-cols-12  gap-5 my-3 px-4">
    <h1 className="col-span-1">{index + 1}</h1>
    <h1 className=" col-span-4">{item.title}</h1>
    <h1 className="col-span-3">{item.cookingTime}</h1>
    <h1 className="col-span-4">{item.calories}</h1>
</div>

<h1>{totalTime}</h1>
            
        </div>
    );
};

export default Current;