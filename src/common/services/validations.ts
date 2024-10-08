const regEx:any={
    "REQUIRED":{
        pattern:/./,
        message:'Required!!!'
    },
    "EMAIL":{
        pattern:/^[a-zA-Z]{1}[a-zA-Z0-9_./]*@[a-zA-Z]{3,10}\.[a-zA-Z]{2,3}$/,
        message:"should be in the email format"
    },
    "MIN5CHAR":{
        pattern:/[a-zA-Z0-9]{5,}/,
        message:"min 5 chars"
    },
    "PHONE":{
        pattern:/^[0-9]{10}$/,
        message:"exactly 10 digits"
    }
}
function validate(inputObj:any){
    inputObj.errorMsg = "";
    for (let val of inputObj?.criteria){
        const {pattern,message} = regEx[val]
       if (!pattern.test(inputObj?.value)){
        inputObj.errorMsg=message
        break;
       }
    }
}
export function handleFieldLevelValidation(eve:any,inputControls:any,setInputControls:any){
    const { name, value } = eve?.target
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
    let inputObj: any = clonedInputControls.find((obj: any) => {
        return obj.name === name
    })
   
    inputObj.value = value;
    validate(inputObj)
    setInputControls(clonedInputControls)

}

export function handleFormLevelValidation(inputControls:any,setInputControls:any){
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
    const dataObj: any = {}
    clonedInputControls.forEach((obj: any) => {
        dataObj[obj.name] = obj.value;
        validate(obj)
})
const isInValid = clonedInputControls.some((obj: any) => obj.errorMsg)
setInputControls(clonedInputControls)


return[isInValid, dataObj]
}