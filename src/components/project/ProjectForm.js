import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as ListProject  from "./ProjectServer";
import { useNavigate } from "react-router-dom"; 

const ProjectForm = () => {
    const history = useNavigate();
    const initialState = {
        project_id: "",
        name: "",
        budget_at_completion: "",
        planned_progress: "",
        actual_progress: "",
        actual_cost: ""
    }

    const [dataRequest, setDataRequest] = useState(initialState)
    
    const handleInputChange = (e)=>{
        setDataRequest({...dataRequest,[e.target.name]:e.target.value})
    }

    const handleIpuntSudmit =  async (e)=>{
        try {
            e.preventDefault();
            let res = await ListProject.InsertProject(dataRequest)
            const data = await res.json()
            if (data == null) {
                setDataRequest(initialState);
                
            } 
            history("/")
            console.log(data)

        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <div >
            <Form className="row" onSubmit={handleIpuntSudmit}>
                <Form.Group className="col-md-4" controlId="formBasicEmail">
                    <Form.Label>project_id</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="project_id"
                        name="project_id"
                        value={dataRequest.project_id} 
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group className="col-md-4" controlId="formBasictext">
                    <Form.Label>name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="name" 
                        name="name"
                        value={dataRequest.name} 
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group className="col-md-4" controlId="formBasictext">
                    <Form.Label>budget_at_completion</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="budget_at_completion" 
                        name="budget_at_completion"
                        value={dataRequest.budget_at_completion} 
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group className="col-md-4" controlId="formBasictext">
                    <Form.Label>planned_progress</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="planned_progress" 
                        name="planned_progress"
                        value={dataRequest.planned_progress} 
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group className="col-md-4" controlId="formBasictext">
                    <Form.Label>actual_progress</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="actual_progress" 
                        name="actual_progress"
                        value={dataRequest.actual_progress} 
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group className="col-md-4" controlId="formBasictext">
                    <Form.Label>actual_cost</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="actual_cost" 
                        name="actual_cost"
                        value={dataRequest.actual_cost} 
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Button variant="primary" type="submit" className="col-md-4">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ProjectForm;
