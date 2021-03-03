import React from 'react';
import {} from 'react-router-dom';
import '../../process.css';

function Optimization() {
    return(
            <form id='integration'> 
            <h5 id='Stages'>Optimization</h5>
            <div id='oFormGroup'className='formLabel-group'>
                <label id='formLabel'>
                Optimization Location:</label>
                <input type="text" />
            </div>
            <div id='oFormGroup'className='formLabel-group'>
            <label id='oFormLabel'>
                Optimization Date:</label>
                <input type="text" />
            </div>
            <div id='oFormGroup'className='formLabel-group'>
            <label id='oFormLabel'>
                Leoni Technician who performed Optimization:</label>
                <input type="text" />
            </div>
            <div id='oFormGroup'className='formLabel-group'>
            <label id='oFormLabel'>
                Are Changes Required? Y/N:</label>
                <input type="text" />
            </div>
            <div id='oFormGroup'className='formLabel-group'>
            <label id='oFormLabel'>
                Date Integrator Resolved Optimization Issues:</label>
                <input type="text" />
            </div>
            <div id='oFormGroup'className='formLabel-group'>
            <label id='oFormLabel'>
                Date Optimization Complete:</label>
                <input type="text" />
            </div>          
        </form>
    )
}
export default Optimization;