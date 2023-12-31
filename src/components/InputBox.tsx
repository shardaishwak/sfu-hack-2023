import {useState} from 'react'
import SubmitButton from "./SubmitButton"

export default function InputBox({onChange, onSubmit, userInput}) {

    return (
        <div className="inputContainer flex w-full">
            <div className="inputBoxContainer p-1 flex-1 align-middle rounded-xl">
                <input type="text" placeholder="Your Input Goes Here..." className="userInput outline-none flex w-full p-3 rounded-xl text-black border-2 border-gray-300 shadow-md " value={userInput} onChange={onChange}>
                </input>
            </div>
            <div>
                <SubmitButton onSubmit={onSubmit}/>
            </div>
        </div>
   
    )
}