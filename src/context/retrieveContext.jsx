import React, { useContext } from 'react'
import { createContext, useState, useEffect } from "react";

const RetrieveContext = createContext()

export default RetrieveContext

export const RetrieveProvider = ({children}) => {

    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)
    let [retrievedData, setRetrievedData] = useState(null)


    async function retrievedTrainee(id){
        let response = await fetch(`http://127.0.0.1:8000/trainees/get_trainee/${id}/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In") 
                setRetrievedData(data) 
                localStorage.removeItem("trainee")
                if (!localStorage.getItem("trainee")){
                    localStorage.setItem("trainee", JSON.stringify({}))
                }
                let trainee = JSON.parse(localStorage.getItem("trainee"))
                trainee = data
                localStorage.setItem("trainee", JSON.stringify(trainee))   
            }
            console.log(data)
            setRetrievedData(retrievedData)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    let contextData = {
        retrievedData : retrievedData,
        retrievedTrainee : retrievedTrainee
    }

    return (
        <RetrieveContext.Provider value = {contextData}>
            {children}
        </RetrieveContext.Provider>
    )
}