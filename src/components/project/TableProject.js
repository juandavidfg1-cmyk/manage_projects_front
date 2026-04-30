import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import * as ListProject  from "./ProjectServer";

function TableProject({ data ,consultProject }) {

    const handleDelete = async (id)=>{
        await ListProject.DeleteProject(id);
        consultProject();
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>name_Project</th>
                    <th>description_project</th>
                    <th>id</th>
                    <th>name</th>
                    <th>planned_value</th>
                    <th>earned_value</th>
                    <th>cost_performance_index</th>
                    <th>schedule_performance_index</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {data.map((info) => (
                    <tr>
                        <td>{info.name_Project}</td>
                        <td>{info.description_project}</td>
                        <td>{info.id}</td>
                        <td>{info.name}</td>
                        <td>{info.planned_value}</td>
                        <td>{info.earned_value}</td>
                        <td>{info.cost_performance_index}</td>
                        <td>{info.schedule_performance_index}</td>
                        <td><Button onClick={() => info.id && handleDelete(info.id)} className='btn btn-danger'>Eliminar</Button> </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    );
}

export default TableProject;