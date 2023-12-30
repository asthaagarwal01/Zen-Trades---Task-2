import React from 'react'

function FileSelect() {
  return (
    <div className='contain'>
        <div className='left'>
            <p>Step 3</p>
        </div>
        <div className='right'>
            <p>Display Handling</p>
            <p>Select the fields to be displayed</p>
        </div>
        
        <label>Available Fields</label>
        {/*<select multiple>
          {availableFields.filter(f => !selectedFields.includes(f)).map(field => (
            <option key={field} value={field} onDoubleClick={() => handleAddField(field)}>
              {field}
            </option>
          ))}
        </select>*/}
      
      <div>
        <label>Selected Fields</label>
        {/*<select multiple>
          {selectedFields.map(field => (
            <option key={field} value={field} onDoubleClick={() => handleRemoveField(field)}>
              {field}
            </option>
          ))}
        </select>*/}
      </div>
    </div>
        
  )
}

export default FileSelect