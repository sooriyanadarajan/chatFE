// import React, { useState,useEffect } from 'react'
// import axios from 'axios';
// // import {fetchStageMaster} from "../../redux/Reducer/Reducer";
// import { FaEdit ,FaStreetView} from "react-icons/fa";
// import { PaginationControl } from 'react-bootstrap-pagination-control';
// const PaginationStageMaster = () => {

//     // const dispatch=useDispatch();
//     // useEffect(()=>{
//     //    let data= dispatch(fetchStageMaster())
//     //     console.log("data....",data);
//     // },[dispatch]);
//     const [stage,setStage]=useState();
//     useEffect(()=>{
//         getPosts();
//     },[])
//     const getPosts = () => {
//         axios
//           .post("http://localhost:5027/chatbot/stage")
//           .then((response) => {
//             if (response.status === 200) {
//                 setStage(response?.data);
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       };

//     const [page,setPage]=useState(1)
//     return (
//         <>
//         <table class="table" className='paginationTable'>
//             <thead>
//                 <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Stage Code</th>
//                     <th scope="col">Stage Label</th>
//                     <th scope="col">Short Description</th>
//                     <th scope="col">Stage Short Name</th>
//                     <th scope="col">Stage Complexity</th>
//                     <th scope="col">Delegation NonLending Power</th>
//                     <th scope="col">Check Point</th>
//                     <th scope="col">Edit</th>
//                     <th scope="col">View</th>
//                     <th scope="col">Select</th>
//                     {/* <th scope="col">Status</th> */}
//                 </tr>
//             </thead>
//             <tbody>
//                 {stage && stage.data.map((x)=>(
//                     <tr>
//                     <th scope="row">1</th>
//                     <td>{x.stage_Code}</td>
//                     <td>{x.stage_Label}</td>
//                     <td>{x.stage_Description}</td>
//                     <td>{x.stage_Short_Name}</td>
//                     <td>{x.stage_Complexity}</td>
//                     <td>{x.delegation_NonLending_Power}</td>
//                     <td>{x.check_Point}</td>
//                     <td><FaEdit/></td>
//                     <td><FaStreetView/></td>
//                     {/* <td className='checkBox'><input type="checkbox"/></td> */}
//                     {/* <td>Mark</td> */}
//                 </tr>
//             ))}
                
//             </tbody>
//         </table>

//         <PaginationControl page={page} between={4} total={250} limit={20} changePage={(page)=>{
//             setPage(page);
//             console.log(page)
//         }} ellipsis={1}/>
//         </>
//     )
// }

// export default PaginationStageMaster
