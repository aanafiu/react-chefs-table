

const List = ({item,index, removeFromList}) => {
    console.log("aa" ,item.title);

    return (
<div className="grid grid-cols-12  gap-5 my-3 px-4">
    <h1 className="col-span-1">{index + 1}</h1>
    <h1 className=" col-span-3">{item.title}</h1>
    <h1 className="col-span-3">{item.cookingTime}</h1>
    <h1 className="col-span-2">{item.calories}</h1>
    <button onClick = {()=>removeFromList(item)} className="col-span-3 btn btn-ghost w-fit flex items-center justify-center rounded-full bg-btnBG text-btnText hover:bg-btnText hover:text-btnBG px-3 py-2 text-base">Preparing</button>
</div>

    );
};

export default List;