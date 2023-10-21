import React, { useState } from 'react'

interface ReplyBox {
    isPerson: boolean;
    date: String;
    text:string;
}

const ReplyBox:React.FC<ReplyBox> = ({isPerson,date, text}) => {
  const [expand, setExpand] = useState(false)
    // const boxStyles =  isPerson ? "justify-end" : ""
    return (
        <div className={isPerson != false ? "float-right clear-both" : "float-left clear-both"}>
          <div className="mb-5 rounded-lg bg-green-400 w-[350px] p-3 m-2 shadow-lg ring-1 ring-zinc-700 sm:px-6">
            <div className="flex space-x-3">
              <div className="flex-1 gap-4">
                <p className="font-large text-sm text-white font-semibold mb-2">
                  {isPerson == false ? "AI" : "You"} 
                </p>
                <p onClick={() => setExpand(true)}>{isPerson ? text : text.length > 200 ? expand ? text : text.slice(0,200)+"... Read more" : text}</p>
                <p className="text-black text-right font-light" style={{fontSize: 9}}>
                  {date}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ReplyBox