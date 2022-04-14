import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedState, selectedState } from '../redux/actions/stateActions';
import PlacesToVisitComponent from './PlacesToVisitComponent';

const PlacesToVisit = () => {

    const statePlaces = useSelector((stateOf) => stateOf.statePlace);
    const { name, description, image_url } = statePlaces;
    const { stateId } = useParams();
    const dispatch = useDispatch();
    const fetchPlacetoVisit = async () => {
        const response = await axios.get(`https://react-tourism-api.herokuapp.com/states/${stateId}/places`)
        .catch((error) => {
            console.log(error);
        });
        dispatch(selectedState(response.data));
    };
    
    useEffect(() => {
        if(stateId && stateId !== "")
            fetchPlacetoVisit();
        return () => {
            dispatch(removeSelectedState());
        }
    }, [stateId]);
    
    return(
        <div>
            <PlacesToVisitComponent />
        </div>
    )
};

export default PlacesToVisit;