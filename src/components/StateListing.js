import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setStates } from '../redux/actions/stateActions';
import StateComponent from './StateComponent';

const StateListing = () => {
    const states = useSelector((stateOf) => stateOf);
    const dispatch = useDispatch();

    const fetchStates = async () => {
        const response = await axios.get("https://react-tourism-api.herokuapp.com/states")
        .catch((error) => {
            console.log(error);
        });
        dispatch(setStates(response.data));
    };

    useEffect(() => {
        fetchStates();
    }, [])

    return (
        <>
            <div className="image">
                <h2 className="enterText">Choose a place you want to visit and discover the wonders of the incredible INDIA</h2>
            </div>
            <div className='ui grid container'>
                <StateComponent />
            </div>
        </>
    );
};

export default StateListing;