import React from 'react'

export default function Container({children}) {
  return (
    <div className="max-w-5xl w-full mx-auto">
      {children}
    </div>
  )
}