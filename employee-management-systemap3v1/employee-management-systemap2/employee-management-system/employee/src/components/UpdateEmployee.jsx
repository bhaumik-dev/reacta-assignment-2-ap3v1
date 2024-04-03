import React, { useState } from "react";

const UpdateEmployee = ({
  employeeId,
  onSuccess,
  onFailure,
  onStopEditing,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    currentStatus: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending update request
      const response = await fetch(
        `http://localhost:4000/updateEmployee/${employeeId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        onSuccess();
      } else {
        onFailure();
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      onFailure();
    }
  };

  return (
    <div>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="currentStatus">Current Status:</label>
          <select
            id="currentStatus"
            name="currentStatus"
            value={formData.currentStatus}
            onChange={handleChange}
            required
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onStopEditing}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
