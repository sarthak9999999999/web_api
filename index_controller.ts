import {Request,Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../database'

export const getEmployee = async (req : Request,res : Response) : Promise<Response> => 
{
    try{
   const response : QueryResult= await pool.query("SELECT * from employee ORDER by name ASC");
    return res.status(200).json(response.rows);
    }
    catch(e)
    {
        console.log(e)
        return res.status(400).json("Error Fetching Data!");
    }
}

export const getEmployeebyId = async (req : Request,res : Response) : Promise<Response> =>
{
   const id= parseInt(req.params.id);
   const response : QueryResult= await pool.query("SELECT * from employee where id = $1",[id] );
    return res.json(response.rows)
    
}

export const createEmployee = async (req : Request,res : Response) :Promise<Response> =>
{
    const {name,salary}=req.body;
    const response : QueryResult=await pool.query("INSERT INTO employee (name,salary) VALUES ($1,$2)", [name,salary]);
    return res.json({
        message :"Employee Successfully Added!!",
        body : {
            employee : {
                name,
                salary
            }
        }
    })
    
}

export const updateEmployee = async (req : Request,res : Response) :Promise<Response> =>
{
    const id= parseInt(req.params.id);
    const {name,salary} =req.body;

    await pool.query("UPDATE employee SET name =$1 , salary = $2, id=$3",[name,salary,id]);
    return res.json("Updated Sucessfully!");

    
}


export const deleteEmployee = async (req : Request,res : Response) : Promise<Response> =>
{
    const id=parseInt(req.params.id);
    await pool.query("DELETE from employee where id =$1",[id]);
    return res.json('User sucessfully deleted!');

}


