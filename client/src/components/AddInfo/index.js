import React from 'react';
import {} from 'react-router-dom';
import PlantIntegration from '../Processes/PIInfo';
import Optimization from '../Processes/Optimization';
import Validation from '../Processes/Validiation';
import Notes from '../Notes';
import '../process.css';

function AddInfoGroup () {
    return(
        <div className='container fluid'>
            <div className='row'>
                <div className='col-sm'>   
                <PlantIntegration />
                </div>
                <div className='col-sm'> 
                <Optimization />
                </div>
                <div className='col-sm'> 
                <Validation />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                <Notes />
                </div>
            </div>
        </div>
    )
}
export default AddInfoGroup;