import React from 'react'

function FileDetails() {
  return (
    <>
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
        </div>
    </>
  )
}

export default FileDetails