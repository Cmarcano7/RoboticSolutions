import { TextareaAutosize } from '@material-ui/core';
import React from 'react';
import {} from 'react-router-dom';
import '../../process.css';

function Validation() {
    return(
        <form id='validation' fluid='md'>
            <h5 id='Stages'>Validation</h5>
            <div id='vFormGroup'className='formLabel-group'>
                <label id='vFormLabel'>
                Validation Location:</label>
                <input type="text" />
            </div>
            <div style={{marginTop:20}}id='vFormGroup'className='formLabel-group'>
            <label id='vFormLabel'>
                Date of Validation:</label>
                <input type="text" />
            </div>
            <div id='vFormGroup'className='formLabel-group'>
            <label id='vFormLabel'>
                Leoni Technician who Performed Validation:</label>
                <input type="text" />
            </div>
            <div id='vFormGroup'className='formLabel-group'>
            <label id='vFormLabel'>
                Any Unresolved Issues Y/N:</label>
                <input type="text" />
            </div>
            <div id='vFormGroup'className='formLabel-group'>
            <label id='vFormLabel'>
                Date Integrator Resolved Validation Issues:</label>
                <input type="text" />
            </div>
            <div id='vFormGroup'className='formLabel-group'>
            <label id='vFormLabel'>
                SOP/Warranty Effective Date:</label>
                <input type="text" />
            </div>
            <div id='vFormGroup'className='formLabel-group'>
            <label id='vFormLabel'>
                Warranty Expiration Date:</label>
                <input type="text" />
            </div>
            <div id='vFormGroup'className='formLabel-group'>
            <label id='vFormLabel'>
                Final Inspection Date:</label>
                <input type="text" />
            </div>
            <div id='vFormGroup'className='formLabel-group'>
            <label id='vFormLabel'>
                Robot Programs Verified Document Program Names:</label>
                <TextareaAutosize style={{fontSize:12, width:220}} type="text" />
            </div>
        </form>
    )
}
export default Validation;