
import axios from "axios";

export class CLientWrapper{
    makeGetRequest(url:string, callback:any){
        return axios.get(url).then(callback);
    }
}