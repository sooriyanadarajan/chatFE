import React, { useState } from 'react';

const StageForm = () => {
  const [formData, setFormData] = useState({
    dropdownValue: '',
    textBoxValue: '',
  });

  const handleDropdownChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, dropdownValue: value });
  };

  const handleTextBoxChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, textBoxValue: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any actions you need with the form data here
    console.log('Form data:', formData);
    // Reset the form fields after submission (if needed)
    setFormData({
      dropdownValue: '',
      textBoxValue: '',
    });
  };

  const handleCancel = () => {
    // Reset the form fields when cancel button is clicked
    setFormData({
      dropdownValue: '',
      textBoxValue: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        <br></br>
        <label style={{ marginBottom: '10px' }}>
        Stage Code:
        <input
          type="text"
          value={formData.textBoxValue}
          onChange={handleTextBoxChange}
        />
      </label >           <label style={{ marginBottom: '100px' }}>
        Stage Label:
        <input
          type="text"
          value={formData.textBoxValue}
          onChange={handleTextBoxChange}
        />
      </label>
        <br></br>
        <br></br>
        <br></br>
        <label>
        Stage Description:
        <input
          type="text"
          value={formData.textBoxValue}
          onChange={handleTextBoxChange}
        />






        
      </label>       <label>
        Stage Short Name:
        <input
          type="text"
          value={formData.textBoxValue}
          onChange={handleTextBoxChange}
        />
      </label>
        <br></br>
        <br></br>
      <label>
       Product Code:
        <select value={formData.dropdownValue} onChange={handleDropdownChange}>
          <option value="SBI Regular Home Loan">SBI Regular Home Loan</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>  
      <label>
       Stage Complexity:
        <select value={formData.dropdownValue} onChange={handleDropdownChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium </option>
          <option value="High">High </option>
        </select>
      </label>
      <br></br>    <br></br>
      <br></br>    <br></br>
      
         <label>
      Agent Type:
        <select value={formData.dropdownValue} onChange={handleDropdownChange}>
          <option value="Expert">Expert</option>
          <option value="Specialist">Specialist</option>
          <option value="Standard">Standard</option>
        </select>
      </label>
      <label>
       Customer Type:
        <select value={formData.dropdownValue} onChange={handleDropdownChange}>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>
      </label>
        <br></br>    <br></br>
        <label>
       ChatBot:
        <select value={formData.dropdownValue} onChange={handleDropdownChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
        <br></br>    <br></br>
        <br></br>    <br></br>
      <label>
       
       Checkpoint:
        <select value={formData.dropdownValue} onChange={handleDropdownChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      
        <br></br>
      <label>
        Delegation Non Lending Power:
        <input
          type="text"
          value={formData.textBoxValue}
          onChange={handleTextBoxChange}
        />
      </label>
        <br></br>
      <br />
      <button type="submit">Submit</button> 
      <br></br>
      <br></br>


      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
};

export default StageForm;
