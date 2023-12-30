import React from 'react'
import './FileDeatils.css';

function FileDetails() {
  return (
    <div className='contain'>
        <div className='left'>
        <p>Step 2:</p>
        </div>
        <div className='right'>
            <p>Specify Format</p>
            File Type <select>
                <option value="">Select an option</option>
                <option value="CSV">CSV</option>
                <option value="JSON">JSON</option>
            </select>
            <br/>
            <br/>
            Character encoding <select>
                <option value="">Select an option</option>
                <option value="UTF-8">UTF-8</option>
                <option value="UTF-16BE">UTF-16BE</option>
            </select>
            <br/>
            <br/>
            Delimiter <select>
                <option value="">Select an option</option>
                <option value="Comma">Comma</option>
                <option value="Space">Space</option>
            </select>
            <br/>
            <br/>
            Has Header<input type='checkbox'/>
        </div>
    </div>
  )
}

export default FileDetails