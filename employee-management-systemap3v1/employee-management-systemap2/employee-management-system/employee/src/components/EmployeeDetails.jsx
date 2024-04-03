import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/styles.css";

const EmployeeDetails = () => {
  const { id } = useParams(); // Extract the employeeId from the URL path
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:4000/graphql`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query {
                employee(id: "${id}") {
                  id
                  firstName
                  lastName
                  age
                  dateOfJoining
                  title
                  department
                  employeeType
                  currentStatus
                }
              }
            `,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          setEmployee(data.data.employee);
          setLoading(false);
        } else {
          console.error("Failed to fetch employee data");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!employee) {
    return <p>Employee Not Found</p>;
  }

  return (
    <div className="employee-details-container">
      <h2>Employee Details</h2>
      <div>
        <strong>ID:</strong> {employee.id}
      </div>
      <div>
        <strong>First Name:</strong> {employee.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {employee.lastName}
      </div>
      <div>
        <strong>Age:</strong> {employee.age}
      </div>
      <div>
        <strong>Date of Joining:</strong> {employee.dateOfJoining}
      </div>
      <div>
        <strong>Title:</strong> {employee.title}
      </div>
      <div>
        <strong>Department:</strong> {employee.department}
      </div>
      <div>
        <strong>Employee Type:</strong> {employee.employeeType}
      </div>
      <div>
        <strong>Current Status:</strong>{" "}
        <span className={employee.currentStatus ? "active" : "inactive"}>
          {employee.currentStatus ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  );
};

export default EmployeeDetails;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "../styles/styles.css";

// const EmployeeDetails = ({ employeeData }) => {
//   const { id } = useParams(); // Extract the employeeId from the URL path
//   const [employee, setEmployee] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEmployee = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/graphql`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             query: `
//               query {
//                 employee(id: "${id}") {
//                   id
//                   firstName
//                   lastName
//                   age
//                   dateOfJoining
//                   title
//                   department
//                   employeeType
//                   currentStatus
//                 }
//               }
//             `,
//           }),
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setEmployee(data.data.employee);
//           setLoading(false);
//         } else {
//           console.error("Failed to fetch employee data");
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error("Error fetching employee data:", error);
//         setLoading(false);
//       }
//     };

//     fetchEmployee();
//   }, [id]);

//   const handleDelete = () => {
//     // Show confirmation dialog before deleting
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this employee?"
//     );
//     if (confirmDelete) {
//       // Filter out the deleted employee from the employeeData
//       const updatedEmployeeData = employeeData.filter((emp) => emp.id !== id);
//       // Redirect to the home page (EmployeeDirectory) after deletion
//       navigate("/");
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!employee) {
//     return <p>Employee Not Found</p>;
//   }

//   return (
//     <div className="employee-details-container">
//       <h2>Employee Details</h2>
//       <div>
//         <strong>ID:</strong> {employee.id}
//       </div>
//       <div>
//         <strong>First Name:</strong> {employee.firstName}
//       </div>
//       <div>
//         <strong>Last Name:</strong> {employee.lastName}
//       </div>
//       <div>
//         <strong>Age:</strong> {employee.age}
//       </div>
//       <div>
//         <strong>Date of Joining:</strong> {employee.dateOfJoining}
//       </div>
//       <div>
//         <strong>Title:</strong> {employee.title}
//       </div>
//       <div>
//         <strong>Department:</strong> {employee.department}
//       </div>
//       <div>
//         <strong>Employee Type:</strong> {employee.employeeType}
//       </div>
//       <div>
//         <strong>Current Status:</strong>{" "}
//         <span className={employee.currentStatus ? "active" : "inactive"}>
//           {employee.currentStatus ? "Active" : "Inactive"}
//         </span>
//       </div>
//       <button onClick={handleDelete}>Delete</button>
//     </div>
//   );
// };

// export default EmployeeDetails;
