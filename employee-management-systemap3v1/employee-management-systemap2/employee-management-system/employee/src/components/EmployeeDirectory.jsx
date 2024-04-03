// import React, { useState, useEffect } from "react";
// import EmployeeSearch from "./EmployeeSearch";
// import EmployeeTable from "./EmployeeTable";
// import EmployeeDetails from "./EmployeeDetails"; // Import EmployeeDetails component
// import "../styles/styles.css";

// const EmployeeDirectory = () => {
//   const [employeeData, setEmployeeData] = useState([]);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await fetch("http://localhost:4000/graphql", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             query: `
//               query {
//                 employees {
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
//           setEmployeeData(data.data.employees);
//         } else {
//           console.error("Failed to fetch employee data");
//         }
//       } catch (error) {
//         console.error("Error fetching employee data:", error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   return (
//     <div>
//       <h1>Employee Directory</h1>
//       <EmployeeSearch />
//       {employeeData.length > 0 ? (
//         <>
//           <EmployeeTable employeeData={employeeData} />
//           <EmployeeDetails employeeData={employeeData} />
//         </>
//       ) : (
//         <p>No employee data available</p>
//       )}
//     </div>
//   );
// };

// export default EmployeeDirectory;

import React, { useState, useEffect } from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeTable from "./EmployeeTable";
import { useParams } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";
import "../styles/styles.css";

const EmployeeDirectory = () => {
  const { id } = useParams(); // Extract the employeeId from the URL path
  const [employeeData, setEmployeeData] = useState([]);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:4000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query {
                employees {
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
          setEmployeeData(data.data.employees);
        } else {
          console.error("Failed to fetch employee data");
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    // Check if id exists in the route params to determine whether to show EmployeeDetails
    setShowEmployeeDetails(!!id);
  }, [id]);

  return (
    <div>
      <h1>Employee Directory</h1>
      <EmployeeSearch />
      {employeeData.length > 0 ? (
        <>
          <EmployeeTable employeeData={employeeData} />
          {showEmployeeDetails && <EmployeeDetails />}
        </>
      ) : (
        <p>No employee data available</p>
      )}
    </div>
  );
};

export default EmployeeDirectory;
