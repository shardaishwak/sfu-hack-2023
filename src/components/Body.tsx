import React, { useState } from 'react'
import ReplyBox from './ReplyBox'
import InputBox from './InputBox'
import { askChat } from '@/chat-api'

const Body = () => {
  const [userInput,setUserInput] = useState('')
  const [chatResponse,setChatResponse] = useState([]) 

  const handleInputChange = (e) =>{
    setUserInput(e.target.value);
}

const handleSubmission = async() =>{
  
    try{
        const response = await askChat(userInput);
        const arr: any[] = [...chatResponse];
        
        arr.unshift({
          from: "user",
          message: userInput,
          date: new Date()
        });
        arr.unshift({
          from: "ai",
          message: response[0].message.content,
          date: new Date()
        });
        
       setChatResponse(arr);
       
    }catch(error){
        console.error('Error calling askChat:', error);
    }
}
    
  return (
    <div className="bg-gray-100 w-1/2 mx-auto mt-5 flex-col">
        <InputBox onChange={handleInputChange} onSubmit={handleSubmission} userInput={userInput} />
        {chatResponse.map(response => <ReplyBox isPerson = {response.from === "user"} date={response.date.getMonth()} text={response.message}/>)}
       
    </div>
  )
}

export default Body