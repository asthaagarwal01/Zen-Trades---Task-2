import React, { useState, useEffect } from 'react';
import './FileSelect.css';


function FileSelect({ file }) {
    const [availableFields, setAvailableFields] = useState([]);
    const [displayFields, setDisplayFields] = useState([]);
    const [selectedAvailableFields, setSelectedAvailableFields] = useState([]);
    const [selectedDisplayFields, setSelectedDisplayFields] = useState([]);
    const [products, setProducts] = useState([]);
    const [showTable, setShowTable] = useState(false);

    useEffect(() => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                try {
                    const data = JSON.parse(content);
                    if (data && data.products && typeof data.products === 'object') {
                        // Convert products object to array
                        const productsArray = Object.values(data.products);
                        productsArray.sort((a, b) => b.popularity - a.popularity);
                        setProducts(productsArray);


                        const fields = productsArray.length > 0 ? Object.keys(productsArray[0]) : [];
                        setAvailableFields(fields);
                    } else {
                        console.error('The JSON structure is not recognized:', data);
                    }
                } catch (error) {
                    console.error('Error reading or parsing file:', error);
                }
            };
            reader.readAsText(file);
        }
    }, [file]);

    const addToDisplay = () => {
        const newDisplayFields = [...displayFields, ...selectedAvailableFields];
        const newAvailableFields = availableFields.filter(field => !selectedAvailableFields.includes(field));
        setDisplayFields(newDisplayFields);
        setAvailableFields(newAvailableFields);
        setSelectedAvailableFields([]);
    };

    const removeFromDisplay = () => {
        const newAvailableFields = [...availableFields, ...selectedDisplayFields];
        const newDisplayFields = displayFields.filter(field => !selectedDisplayFields.includes(field));
        setAvailableFields(newAvailableFields);
        setDisplayFields(newDisplayFields);
        setSelectedDisplayFields([]);
    };

    const handleGenerateTable = () => {
        setShowTable(true);
    };

    const handleCancel = () => {
        setSelectedAvailableFields([]);
        setSelectedDisplayFields([]);
        setDisplayFields([]);
        setShowTable(false);
    };

    return (
        <>
            <div className='container'>

                <div className='contains'>
                    <div className='left'>
                        <p>Step 3 :</p>
                    </div>
                    <div className='right'>
                        <p>Display Handling</p>
                        <p>Select the fields to be displayed</p>
                    </div>
                </div>

                <div className='divide'>
                    <div className='one'>
                        <p>Available Fields</p><select multiple value={selectedAvailableFields} onChange={(e) => setSelectedAvailableFields(Array.from(e.target.selectedOptions, option => option.value))}>
                            {availableFields.map(field => (
                                <option key={field} value={field}>{field}</option>
                            ))}
                        </select>
                    </div>


                    <div className='two'>
                        <button onClick={addToDisplay}>&gt;&gt;</button><br />
                        <button onClick={removeFromDisplay}>&lt;&lt;</button>
                    </div>


                    <div className='three'>
                        <p>Fields to be displayed</p><select multiple value={selectedDisplayFields} onChange={(e) => setSelectedDisplayFields(Array.from(e.target.selectedOptions, option => option.value))}>
                            {displayFields.map(field => (
                                <option key={field} value={field}>{field}</option>
                            ))}
                        </select>
                    </div>

                </div>

                

                

            </div>

            <div className='btn'>
                        <button onClick={handleGenerateTable}>Next</button>
                        <button onClick={handleCancel}>Cancel</button>
                </div>

                <div className='disp'>
                        {showTable && (
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            {displayFields.map(field => (
                                                <th key={field}>{field}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, index) => (
                                            <tr key={index}>
                                                {displayFields.map(field => (
                                                    <td key={`${field}-${index}`}>{product[field]}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

        </>
    );
}

export default FileSelect;
