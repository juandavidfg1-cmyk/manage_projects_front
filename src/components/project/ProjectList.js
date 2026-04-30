import React, { useEffect, useState } from "react";
import * as ListProject  from "./ProjectServer";

// componets
import TableProject from "./TableProject";
const ProjectList = () => {
    const [list, setList] = useState([]);
    
    const consultProject = async ()=>{
        try {
            const responde = await ListProject.ListProject()
            const data = await responde.json()
            setList(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        consultProject();
    },[]);


    return (
        <div className="row">
            
            <TableProject 
            data ={list}
            consultProject={consultProject}
            />
            
        </div>
    )
};

export default ProjectList;