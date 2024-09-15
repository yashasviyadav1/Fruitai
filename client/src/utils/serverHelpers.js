// these functions help frontend to connect with backend 
// import { BACKEND_BASE_URL } from "../config";

// const backendBaseUrl = 'http://localhost:5000';
const backendBaseUrl = 'https://fruit-ai-web-backend.vercel.app';

export const makeUnauthenticatedPOSTRequest = async (route, body) => { // route will be API route  

    // fetch(APIRoute, {some things to specify about API})
    const response = await fetch(backendBaseUrl + route, 
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json" // we need to specify the headers content type as well
            },
            body:JSON.stringify(body) // converting the body recieved from user into string format, and set body equals to that
        }
    )

    const formattedResponse = await response.json();
    return formattedResponse;
}; 

export const makeUnauthenticatedGETRequest = async (route) => { // route will be API route  

    // fetch(APIRoute, {some things to specify about API})
    const response = await fetch(backendBaseUrl + route, 
        {
            method:"GET",
            headers:{
                "Content-Type":"application/json" // we need to specify the headers content type as well
            },
            // body:JSON.stringify(body) // converting the body recieved from user into string format, and set body equals to that
        }
    )

    const formattedResponse = await response.json();
    return formattedResponse;
}; 


export const makeUnauthenticatedDELETERequest = async (route) => { // route will be API route  

    // fetch(APIRoute, {some things to specify about API})
    const response = await fetch(backendBaseUrl + route, 
        {
            method:"DELETE",
            headers:{
                "Content-Type":"application/json" // we need to specify the headers content type as well
            },
            // body:JSON.stringify(body) // converting the body recieved from user into string format, and set body equals to that
        }
    )
    if (response.status === 204) {
        return null; // No content, so return null
    }

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const formattedResponse = await response.json();
    return formattedResponse; 
}


export const makeUnauthenticatedPUTRequest = async (route, body) => { // route will be API route  

    // fetch(APIRoute, {some things to specify about API})
    const response = await fetch(backendBaseUrl + route, 
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json" // we need to specify the headers content type as well
            },
            body:JSON.stringify(body) // converting the body recieved from user into string format, and set body equals to that
        }
    )

    const formattedResponse = await response.json();
    return formattedResponse;
}; 

