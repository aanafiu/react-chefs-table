import Current from './Current';
import List from './List';
const History = ({items, removeFromList,listRemove}) => {
    // console.log(items);

    return (
        <div className="w-[60%] bg-blue-400 p-4 border-2 rounded-lg">
            
            <div className="my-3">
                <h1 className="font-bold text-2xl border-b-2 text-center">Want to Cook:  {items.length}</h1>
                
                <div className='grid grid-cols-12 gap-5 px-4'>
                        <h1 className='invisible col-span-1'>S</h1>
                        <h1 className='col-span-3'>Name</h1>
                        <h1 className='col-span-3'>Time</h1>
                        <h1 className='col-span-2'>Calories</h1>
                        <h1 className='invisible px-3 text-base col-span-3'>preparing</h1>
                </div>

                    {
                        items.map((item,index)=>
                            // console.log(item)
                            <List key={index} item = {item} index={index} removeFromList = {removeFromList}></List>
                        )
                    }  
            </div>

            {/* remove */}
            <div className='w-full'>
                <div className="my-3">
                    <h1 className="font-bold text-2xl border-b-2 text-center">Currently Cooking:  {listRemove.length}</h1>
                    
                    <div className='grid grid-cols-12 gap-5 px-4'>
                            <h1 className='invisible col-span-1'>S</h1>
                            <h1 className='col-span-4'>Name</h1>
                            <h1 className='col-span-3'>Time</h1>
                            <h1 className='col-span-4'>Calories</h1>

                    </div>
                        {
                        listRemove.map((item,index)=>
                            // console.log(item)
                            // <List key={index} item = {item} index={index} ></List>
                            <Current key={index} item = {item} index={index}></Current>
                        )
                        }  
                </div>
            </div>
        </div>

    );
};

export default History;