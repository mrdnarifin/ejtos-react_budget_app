import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (e) => {
        let curr = e.target.value
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        });
    }

    return (
        <>
            <select name="currency" onChange={changeCurrency}>
                <option value={currency} selected>{currency}</option>
                <option value="$">$ Dollar</option>
                <option value="IDR">Rp Rupiah</option>
                <option value="₱">₱ Peso</option>
            </select>
        </>
    );
};
export default Currency;
