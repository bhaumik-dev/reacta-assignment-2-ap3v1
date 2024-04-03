// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/styles.css";

// const EmployeeTable = ({ employeeData, onDelete }) => {
//   const navigate = useNavigate();

//   // const handleDelete = (id) => {
//   //   onDelete(id);
//   // };

//   const handleRowClick = (id) => {
//     // Navigate to the details page of the clicked employee
//     console.log(`Navigating to details page of employee with ID: ${id}`);
//     navigate(`/employee/${id}/details`);
//   };

//   return (
//     <div className="employee-table-container">
//       <h2>Employee Table</h2>
//       {employeeData && employeeData.length > 0 ? (
//         <table className="employee-table">
//           <thead>
//             <tr>
//               <th>FirstName</th>
//               <th>LastName</th>
//               <th>Age</th>
//               <th>DateOfJoining</th>
//               <th>Title</th>
//               <th>Department</th>
//               <th>EmployeeType</th>
//               <th>CurrentStatus</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employeeData.map((employee, index) => (
//               <tr
//                 key={index}
//                 onClick={() => handleRowClick(employee.id)}
//                 className={index % 2 === 0 ? "even-row" : "odd-row"}
//               >
//                 <td>{employee.firstName}</td>
//                 <td>{employee.lastName}</td>
//                 <td>{employee.age}</td>
//                 <td>{employee.dateOfJoining}</td>
//                 <td>{employee.title}</td>
//                 <td>{employee.department}</td>
//                 <td>{employee.employeeType}</td>
//                 <td>{employee.currentStatus ? "Working" : "Retired"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No employee data available</p>
//       )}
//     </div>
//   );
// };

// export default EmployeeTable;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const EmployeeTable = ({ employeeData }) => {
  const navigate = useNavigate();

  const handleRowClick = (employeeId) => {
    navigate(`/employee/${employeeId}/details`);
  };

  return (
    <div className="employee-table-container">
      <h2>Employee Table</h2>
      {employeeData && employeeData.length > 0 ? (
        <table className="employee-table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>DateOfJoining</th>
              <th>Title</th>
              <th>Department</th>
              <th>EmployeeType</th>
              <th>CurrentStatus</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee, index) => (
              <tr
                key={employee.id}
                onClick={() => handleRowClick(employee.id)}
                className={index % 2 === 0 ? "even-row" : "odd-row"} // Apply even-row class for even index and odd-row class for odd index
              >
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.age}</td>
                <td>{employee.dateOfJoining}</td>
                <td>{employee.title}</td>
                <td>{employee.department}</td>
                <td>{employee.employeeType}</td>
                <td>{employee.currentStatus ? "Working" : "Retired"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employee data available</p>
      )}
    </div>
  );
};

export default EmployeeTable;
