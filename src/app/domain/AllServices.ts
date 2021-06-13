
export class AllServices{
    client:any;

    constructor(client:any){
        this.client = client;
    }

    requestAllItems(callback:any){
        const url = 'https://jsonplaceholder.typicode.com/todos/';
        this.client.makeGetRequest(url, callback);
    }
}