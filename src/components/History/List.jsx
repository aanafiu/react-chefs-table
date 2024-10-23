

const List = ({item}) => {
    console.log("aa" ,item.title);

    return (
<div className="grid grid-cols-aa  gap-5 my-3 px-4">
    <h1 className="text-center flex items-center justify-center h-full">{1}</h1>
    <h1 className=" flex items-center justify-start h-full">{item.title}</h1>
    <h1 className=" flex items-center justify-center h-full">{item.cookingTime}</h1>
    <h1 className=" flex items-center justify-center h-full">{item.calories}</h1>
    <button className=" btn btn-ghost w-fit flex items-center justify-center rounded-full bg-btnBG text-btnText hover:bg-btnText hover:text-btnBG px-3 py-2 text-base">Preparing</button>
</div>

    );
};

export default List;