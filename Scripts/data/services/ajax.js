import { CONSTANTS } from "../settings/config.js";

export async function doAjax(){
    try{
        const response= await fetch(CONSTANTS.TASK_URL);
        const json=await response.json();
        return json;
    }
    catch(err){
        throw(err);
    }
    
}