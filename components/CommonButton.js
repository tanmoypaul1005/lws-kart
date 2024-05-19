"use client"
import React from 'react'

const CommonButton = ({btnLevel="",onClick,width="w-[150px]"}) => {
    return (
        <button
          onClick={onClick}
          className={`flex items-center text-center ${width} h-[44px] gap-2 px-8 py-2 font-medium text-white uppercase text-[14px] transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary`}
        >
          {btnLevel}
        </button>
    )
}

export default CommonButton