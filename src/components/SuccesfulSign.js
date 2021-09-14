import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export default function SuccesfulSign() {
    const history = useHistory()
    useEffect(() => {
        setTimeout(()=>{
            history.push('/');
        },2000)
    },)
    return (
        <div className="form--success">
            Form submitted succesfully!
        </div>
    )
}
