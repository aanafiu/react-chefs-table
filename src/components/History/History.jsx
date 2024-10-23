import List from './List';
const History = ({items}) => {
    // console.log(items);
    return (
        <div className="w-[60%] bg-blue-400 p-4 border-2 rounded-lg">
            
            <div className="my-3">
                <h1 className="font-bold text-2xl border-b-2 text-center">Want to Cook:  {items.length}</h1>
                
                <div className='grid grid-cols-aa gap-5 px-4'>
                    <h1 className='invisible'>S</h1>
                        <h1 className='w-full flex items-center justify-start h-full'>Name</h1>
                        <h1 className=' flex items-center justify-start h-full'>Time</h1>
                        <h1 className=' flex items-center justify-start h-full'>Calories</h1>
                        <h1 className='invisible px-3 text-base'>preparing</h1>
                </div>

                    {
                        items.map((item,index)=>
                            // console.log(item)
                            <List key={index} item = {item}></List>
                        )
                    }
                   

                
            </div>
        </div>
    );
};

export default History;