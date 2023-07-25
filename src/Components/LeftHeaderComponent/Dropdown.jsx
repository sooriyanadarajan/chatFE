import React,{useState} from 'react'
import RightHeaderComponent from '../RightHeaderComponent/RightHeaderComponent';

const Dropdown = () => {

    const [showDropDown,setShowDropDown]=useState(false);
    const toggleChecked=()=>{
        setShowDropDown(value=>!value);
    }
    const [master,setMaster]=useState(false);
    const toggleMaster=()=>{
        setMaster(value=>!value);
    }
    return (
        <section className='dropDownBlock'>
            <article>
                <div className='dropdown'>
                    <ul>
                        <li>Access Control</li>
                        <li onClick={toggleChecked}>KPI</li>
                            {
                                showDropDown && <>
                                    <li>Admin Activity Logs</li>
                                    <li>Location Employee Mappings</li>
                                    </>
                            }
                        <li onClick={toggleMaster}>CHATBOT Masters</li>
                            {
                                master&&<>
                                <li>Activity Master</li>
                                <li onClick={()=>{
                                    <RightHeaderComponent/>
                                }}>Stage Master</li>
                                <li>Agent Type Master</li>
                                <li>Customer Type Master</li>
                                <li>Sequence Master</li>
                                </>
                            }
                        <li>Masters</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Dropdown
