import localforage from "localforage"


export const request = async (url: string) => {
    try {
        const cached : string | null = await localforage.getItem(url)
        if(cached){
            return JSON.parse(cached)
        }
        const headers = {
            "headers": {
              "accept": "application/json"
            }
          };
        const result = await fetch(url, headers).then(res => res.json())
    
        localforage.setItem(url, JSON.stringify(result))
        
        return result;
    } catch (err) {
        throw new Error('Unable to connect to the server. Data retrieval failed')
    }  
}