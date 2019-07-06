import React, {Component} from 'react';
import {connect} from 'react-redux';
//import UserDetails from '../UserDetails';
//import TrackSearch from '../TrackSearch';


const Header=()=> {
    return(
        <div className='header'>
            <TrackSearch/>>
            <UserDetails/>
        </div>
    );
};
export default Header;