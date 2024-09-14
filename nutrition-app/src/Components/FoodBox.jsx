import { useState } from "react";
import "./FoodBox.css"
function FoodBox(props){

    let foodEle = props.foodItem;
    const [qty, setQty]=useState(0);
    const [totalcal, setTotalCalories]=useState(0);

    const handleChange=(e)=>{
        let inputBoxValue = e.target.value;
        setQty(inputBoxValue);
        setTotalCalories(calorie*qty);
    }

    const handleUpdate=(calorie)=>{
        setQty(qty+1)
        setTotalCalories(calorie*qty);
    }

    const handleReset=()=>{
        setQty(0);
        setTotalCalories(0)
    }

    return(
        <>
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={foodEle.img} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{foodEle.name}</strong> <br />
                            <small>{foodEle.cal}</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={qty} onChange={(event)=>handleChange(event)}/>
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={()=>handleUpdate(foodEle.cal)}>+</button>
                        </div>
                    </div> 
                 </div>
            </article>
            <section>
                <span>{qty}{foodEle.name}=</span>
                <span>{totalcal} calories</span>
                <button onClick={handleReset}>Reset</button>
            </section>
        </div>
        
        </>
    )
}

export default FoodBox;