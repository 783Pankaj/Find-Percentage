import React, { useState } from 'react'
import ShowResult from './ShowResult';
import { useNavigate } from 'react-router-dom';

const Input = () => {
    const navigate = useNavigate();
    const [val, setVal] = useState();
    let [store, setStore] = useState();
    const[per, setPer] = useState();
    const[perf, setPerF] = useState();
    const[perS, setPerS] = useState();
    let [rem, setRem] = useState();
    let [storef, setStoreF] = useState();
    let [remf, setRemF] = useState();
    let [stores, setStoreS] = useState();
    let [rems, setRemS] = useState();

    const submitVal = (e) => {
        store = val * per / 100;
        setStore(store);
        rem = val - store;
        setRem(rem);

       storef = rem * perf / 100;
        setStoreF(storef);
        remf = rem - storef;
        setRemF(remf)

        stores = remf * perS / 100;
        setStoreS(stores);
        rems = remf - stores;
        setRemS(rems);

    }

    const MoreCal=()=>{
        navigate('/more')
    }

    const clearVal=()=>{
        
        setStore('');
        setStoreF('');
        setStoreS('');
        setRem('');
        setRemF('');
        setRemS('');
        setVal('');
        setPer('');
        setPerF('');
        setPerS('');
    }
    return (
        <>
            <div className='split left'>
                <div className='centered'>
                    <input type='text'
                        className="mb-3"
                        placeholder='Enter Your Amount'
                        onChange={(e) => { setVal(e.target.value) }}
                        value={val}
                    />
                    <br />
                    <input type='input'
                        placeholder='Enter %' 
                        onChange={(e)=>{setPer(e.target.value)}}
                        value={per}
                        /> <br />

                    <br />
                    <input type='input'
                        placeholder='Enter %' 
                        onChange={(e)=>{setPerF(e.target.value)}}
                        value={perf}
                        /> <br />

                    <br />
                    <input type='input'
                        placeholder='Enter %' 
                        onChange={(e)=>{setPerS(e.target.value)}}
                        value={perS}
                        /> <br />

                    <br />
                    <button type='submit' onClick={submitVal}>submit</button>
                    <button type='submit' onClick={clearVal} className='clear'>Clear</button><br /> <br/>
                    <button type='submit' onClick={MoreCal} className='clear'>More calculator</button><br />
                    <br />
                </div>
            </div>

            <div className='split right'>
                <div className='centered'>
                    {/* <label className='text'>{per}% of your Total Amount</label> */}
                    <ShowResult  per = {per}/>
                    <br />

                    <input type='text'
                        value={store}
                       
                    /> <br />
                    <br />


                    <label className='text'>Remaning Amount</label>
                    <br />
                    <input type='text' value={rem} />
                    <br />
                    <br />
                    <br />
                    <br />

                    <label className='text'>{perf} of your Total Amount</label>
                    <br />
                    <input type='text'
                        value={storef}
                    />
                    <br />
                    <br />
                    <label className='text'>Remaning Amount</label>
                    <br />

                    <input type='text' value={remf} />

                    <br />
                    <br />
                    <br />
                    <br />

                    <label className='text'>{perS} of your Total Amount</label>
                    <br />

                    <input type='text'
                        value={stores}
                    // onChange={(e) => { setStoreS(e.target.value) }}
                    /> <br />
                    <br />

                    <label className='text'>Remaning Amount</label>
                    <br />

                    <input type='text' value={rems} />
                </div>

            </div>
        </>
    );
}

export default Input
