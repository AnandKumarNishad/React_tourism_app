import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../App.css";

const StateComponent = () => {
    const states = useSelector((stateOf) => stateOf.allStates.states);
    const renderList = states.map((state) => {
        const { state_id, image_url, name } = state;
        return (
            <div className='wide' key={state_id}>
                <Link to = {`/states/place-to-visit/${state_id}`}>
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src = { image_url } alt = { name }></img>
                            </div>
                            <div className='content'>
                                <div className='header'>{ name }</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }) 
    return (
        <>{renderList}</>
    );
};

export default StateComponent;