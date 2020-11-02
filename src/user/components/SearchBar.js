import React, {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core'

import CustomText from './CustomText'
import CustomButton from './CustomButton'

const useStyle = makeStyles({
    searchbar:{
        display: "flex",
        width:"100%",
        alignItems: "center",
        justifyContent:"space-evenly"
    }
})

export default function SearchBar({search, setSearch}) {
    const styles = useStyle()
    const [value, setValue] =  useState(search)
    
    useEffect(()=>{
        if(value === '') setSearch(value)
      },[value])

    return (
        <div className={styles.searchbar}>
          <CustomText type="Search" label="Search" 
            onChange={
                event=>{
                    setValue(event.target.value)
                }
            }
          />  
          <CustomButton 
            onClick={()=>{
                setSearch(value)
            }}
          > Search </CustomButton>
        </div>
    )
}
