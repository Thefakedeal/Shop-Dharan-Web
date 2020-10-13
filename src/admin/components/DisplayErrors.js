import React from 'react'
import ErrorText from './ErrorText'

export default function DisplayErrors({errors=[]}) {
    if(errors.length>0){
        return errors.map((err, index)=>(
            <ErrorText key={index} >
                {err.toString()}
            </ErrorText>
        ))
    }
    return null;
}
