import { Input } from '@/common/components/Input'
import { appCtx } from '@/context/appCtx'
import React, { useContext, useState } from 'react'
import config from './config.json'
import { handleFieldLevelValidation,handleFormLevelValidation } from '@/common/services/validations'
export const Login = () => {
    const [inputControls, setInputControls] = useState(config)
    const ctxData = useContext(appCtx)
    const fnLogin = () => {
       const [isInValid,dataObj]:any=handleFormLevelValidation(inputControls,setInputControls)
        if (isInValid) return;
       
        alert(JSON.stringify(dataObj))
        // ctxData.dispatch({
        //     type: "LOGIN",
        //     payload: true
        // })
    }
    const handleChange = (eve: any) => {
        handleFieldLevelValidation(eve, inputControls, setInputControls)
    }
    return (
        <div className='container-fluid'>
            <h3 className='mt-3 mb-3 text-center'>Login</h3>
            {
                inputControls.map((obj) => {
                    return <Input {...obj} hanldeChange={handleChange} />
                })
            }
            <div className='row mb-3'>
                <div className='offset-sm-5 col-sm-7'>
                    <button className='btn btn-primary' onClick={fnLogin}>Login</button>
                </div>
            </div>

        </div>
    )
}