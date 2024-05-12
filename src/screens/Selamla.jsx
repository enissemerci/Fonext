import React from 'react'
import {useParams} from "react-router-dom";
export const Selamla = () => {
    const params = useParams()
    const userId = params.userId
  return (
    <div>Selam {userId}!</div>
  )
}
