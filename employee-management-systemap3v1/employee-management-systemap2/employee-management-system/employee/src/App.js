import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import EmployeeDirectory from "./components/EmployeeDirectory";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeTable from "./components/EmployeeTable";
import { Route, Routes } from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
  const [employeeData, setEmployeeData] = useState([]);
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<EmployeeDirectory />} />
          <Route path="/create" element={<EmployeeCreate />} />
          <Route path="/table" element={<EmployeeTable />} />
          {/* <Route path="/employee/:id/details" element={<EmployeeDetails />} /> */}
          <Route
            path="/employee/:id/details"
            element={<EmployeeDetails employeeData={employeeData} />}
          />
          <Route path="/employee/:id/update" element={<UpdateEmployee />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// try to use route params on EmployeeDetails for using dynamic routes
// remove props from EmployeeDetails page and define manually
