import React from 'react'
import {useHistory} from 'react-router-dom'
import LightScreen from '../components/LightScreen'
import CustomButton from '../components/CustomButton'
import Center from '../components/Center'
import loadingCat from '../loadingcat.png'

export default function LostScreen() {
    const history = useHistory()
    return (
        <LightScreen>
            <Center>
                <text> Nothing To See Here.</text>
                <CustomButton
                    variant="text"
                    onClick={
                        ()=>{
                            history.goBack()
                        }
                    }
                >
                    Go Back
                </CustomButton>
                <img src={loadingCat} alt="Me Wondering How You Got Here"/>
                <text>Me Wondering How You Got Here</text>
            </Center>
        </LightScreen>
    )
}
