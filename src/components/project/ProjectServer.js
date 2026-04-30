const APIT_URL = "http://127.0.0.1:8000/"

export const ListProject = async ()=>{
    return  await fetch(APIT_URL)
}

export const InsertProject = async (data)=>{
    let ruta = APIT_URL+'api/insert/activite'
    return  await fetch(ruta,{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
            "project_id": data.project_id,
            "name": data.name,
            "budget_at_completion": data.budget_at_completion,
            "planned_progress": data.planned_progress,
            "actual_progress": data.actual_progress,
            "actual_cost": data.actual_cost
        })
    })
}

export const DeleteProject = async (id)=>{
    return  await fetch(`${APIT_URL}api/delete/activiti/${id}`,{
        method:'DELETE'
    })
}