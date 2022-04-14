import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../App.css";

const PlacesToVisitComponent = () => {

    const states = useSelector((stateOf) => stateOf.allStates.states);
    const { stateId } = useParams();
    const { name } = states[stateId-2];

    const statePlace = useSelector((stateOf) => stateOf.statePlace);
    const renderPlace = Object.keys(statePlace).map((place) => {
        const { place_id, image_url, name, description } = statePlace[place];
        return (
            <div className='places' key={ place_id }>
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='image'>
                            <img src = { image_url } alt = { name }></img>
                        </div>
                        <div className='content'>
                            <div className='header'>{ name }</div>
                            <hr></hr>
                            <div className='description'>{ description }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }) 
    return (
        <>
            <div className='placeText'>
                <h2>Places to visit in { name }</h2>
            </div>
            <div className='ui grid container'>
                {renderPlace}
            </div>
        </>
    );
};

export default PlacesToVisitComponent;