

const Item = ({item, wantToCook}) => {
    // console.log(item);
    const {title,description,imageUrl,ingredients,cookingTime,calories} = item;
    return (
        <div className="border-2 rounded-lg p-4 flex flex-col h-full justify-between ">
            <img className = "w-full h-[200px] rounded-xl" src={imageUrl} alt="" />
            <h1 className="text-xl font-bold mt-2">{title}</h1>
            <p className="text-pText text-base mt-2">{description}</p>

            <h1 className="text-xl font-bold mt-4">Ingredients: {ingredients.length}</h1>
            <ul className="list-disc ml-8 text-pText">
                {ingredients.map((i, index) => (
                    <li  key={index}>{i}</li>
                ))}
            </ul>

            <div className="flex justify-between items-center mt-4 text-lg text-pText">
                <div className="flex gap-2 items-center justify-center">
                    <i className="fa-solid fa-clock"></i>
                    <p>{cookingTime}</p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <i className="fa-solid fa-fire"></i>
                    <p>{calories}</p>
                </div>
            </div>

            <button onClick={()=> wantToCook(item)} className="btn btn-ghost rounded-full bg-btnBG text-btnText hover:bg-btnText hover:text-btnBG px-6 py-2 my-3 text-lg">Want to Cook</button>
            
        </div>
    );

    
};

// Item.propTypes = {
//     // eslint-disable-next-line no-undef
//     item : PropTypes.function.isRequired,
// }

export default Item;