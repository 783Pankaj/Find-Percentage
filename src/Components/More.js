import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const More = () => {
    const navigate = useNavigate();
    const [firstVal, setFirst] = useState();
    const [second, setSecond] = useState();
    let [store, setStore] = useState();
    // const [show, setShow] = useState();

    const addVal = () => {
        let a = parseInt(firstVal, 0);
        let b = parseInt(second, 0);
        setStore(a + b);
    }

    const subVal = () => {
        setStore(firstVal - second)
    }

    const multiVal = () => {
        setStore(firstVal * second)
    }

    const divideVal = () => {
        setStore(firstVal / second)
    }

    // const ShowAdd=()=>{
    //     if(show===true){

    //     }else{
    //         setShow(null);
    //     }
    // }
    const back=()=>{
        navigate('/');
    }

    return (
        <>
        <div className="full">
            <center>
                <h2>Here ! We Can do more calculator</h2>
            </center>

            {/* <div>
                  <button type="addition" onClick={ShowAdd} value={show}>+</button>
            </div><br/><br/> */}

            <div className='centered'>
                <input type="number"
                    placeholder="Enter your first Value"
                    className="first-input"
                    onChange={(e) => { setFirst(e.target.value) }} /><br /><br />

                <input type="number"
                    placeholder="Enter your Second Value"
                    className="first-input"
                    onChange={(e) => { setSecond(e.target.value) }} /><br /><br />

                <button type="submit" onClick={addVal} className="allBtn">ADD</button>
                <button type="submit" onClick={subVal} className="allBtn">Sub</button>
                <button type="submit" onClick={multiVal} className="allBtn">Multi</button>
                <button type="submit" onClick={divideVal} className="allBtn">divide</button><br /><br/>
                <div>
                    <label className="ans">Ans:</label>
                    <input type="text"  className="first-input" value={store} />
                </div>
                <button onClick={back}>Back</button>
            </div><br />
            </div>
        </>
    );
}
export default More;