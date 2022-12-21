import React, { createContext, useState, useEffect } from "react";

const CreateContext = createContext()

export default CreateContext

export const CreateProvider = ({children}) => {

    let [success, SetSuccess] = useState(null)
    let [error, setError] = useState(null)

    async function createTrainee(firstName, lastName, otherName, Email, phoneNumber, amountPaid, Balance, Duration, Location, Course){
        console.log(firstName, lastName, otherName, Email, phoneNumber, amountPaid, Balance, Duration, Location, Course)
        let response = await fetch("http://127.0.0.1:8000/trainees/create_trainee/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "first_name": firstName,
                "last_name": lastName,
                "other_names": otherName,
                "email": Email,
                "phone_number": phoneNumber,
                "course_learning": Course,
                "course_duration": Duration,
                "amount_paid": amountPaid,
                "balance": Balance,
                "location": Location
            })
        })
        console.log(response)
        if (response.ok){
            let data = await response.json()
            if(response.status === 200){
                SetSuccess("Successfully Logged In")  
            }
            console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }

    async function deleteTrainee(id){      
        // console.log(id)
        let response = await fetch(`http://127.0.0.1:8000/trainees/delete_trainee/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response)
        if (response.ok){
            if(response.status === 204){
                SetSuccess("Successfully Logged In")  
            }
            // console.log(data)
        }
        else{
            console.log("error")
            setError("Invalid Username or Password")
    
        }
    }


    let contextData ={
        createTrainee : createTrainee,
        deleteTrainee : deleteTrainee
       }


    return (
        <CreateContext.Provider value = {contextData}>
            {children}
        </CreateContext.Provider>
    )
}