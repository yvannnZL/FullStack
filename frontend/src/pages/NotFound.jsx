import React from 'react'
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <div className="flex flex-col gap-2">
      404 Not Found
      <Link to="/">Home from Link</Link>
    </div>
  )
}
