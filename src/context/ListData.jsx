import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";


const ListContext = createContext()

export default ListContext

export const ListProvider = ({children}) => {

    let [traineesList, setTraineesList] = useState([])
    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)

    async function getTraineesList(user){
        let response = await fetch("http://127.0.0.1:8000/trainees/all_trainee_location/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': user})
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")
                setTraineesList(data)   
            }
            console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    let contextData ={
        getTraineesList : getTraineesList,
        traineesList: traineesList
       }


    return (
        <ListContext.Provider value = {contextData}>
            {children}
        </ListContext.Provider>
    )
}