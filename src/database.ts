import {Pool} from 'pg';

export const pool = new Pool(
    {
       user : 'postgres',
       host : 'localhost',
       password : "Flstudio9#" ,
       database : "employee_system",    
       port : 5432
    }
)