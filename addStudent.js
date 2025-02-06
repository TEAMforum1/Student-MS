import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
    const [studentName, setStudentName] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            await axios.post(
                "http://localhost:8000/api/student/",
                {StudentName: studentName},
                { headers: { Authorization: `Token ${token}` } }
            );
            alert("Student added successfully");            
          } catch (error) {
            alert("Error adding student");
          }
    };

return(
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="card p-4 shadow">
                    <h2 className="text-center">Add Student</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input 
                            type="text" className="form-control" required
                             placeholder="Student Name" onChange={(e)=>setStudentName(e.target.value)}/>
                        </div>
                            <button className="btn btn-primary w-100" type="submit">Add Student</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
};

export default AddStudent;