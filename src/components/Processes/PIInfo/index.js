import React from 'react';
import {} from 'react-router-dom';
import '../../process.css';

function PlantIntegration() {
    return(
    <form id='integration'>
            <h5  id='Stages'>Plant & Integrator Information</h5>
            <div id='formGroup'className='formLabel-group'>
                <label id='formLabel'>
                Robot Type/Model:</label>
                <input type="text" />
            </div>
            <div id='formGroup'className='formLabel-group'>
            <label id='formLabel'>
                Robot Application:</label>
                <input type="text" />
            </div>
            <div id='formGroup'className='formLabel-group'>
            <label id='formLabel'>
                Serial Number/F #:</label>
                <input type="text" />
            </div>
            <div id='formGroup'className='formLabel-group'>
            <label id='formLabel'>
                Customer & Plant Location:</label>
                <input type="text" />
            </div>
            <div id='formGroup'className='formLabel-group'>
            <label id='formLabel'>
                Integrator/Line Owner:</label>
                <input type="text" />
            </div>
            <div id='formGroup'className='formLabel-group'>
            <label id='formLabel'>
                Station/Robot ID:</label>
                <input type="text" />
            </div>
            <div id='formGroup'className='formLabel-group'>
            <label id='formLabel'>
                System/Line:</label>
                <input type="text" />
            </div>
            <div style={{marginTop:15}} id='formGroup'className='formLabel-group'>
            <label id='formLabel'>
                Leoni PD#:</label>
                <input type="text" />
            </div>
        </form>
    )
}
export default PlantIntegration;