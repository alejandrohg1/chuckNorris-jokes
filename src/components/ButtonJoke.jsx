import React from 'react'

const ButtonJoke = ({handleClick,text}) => {
  return (
    <button className="border-white border rounded-md p-2 hover:bg-slate-600" onClick={handleClick}>{text}</button>
  )
}

export default ButtonJoke