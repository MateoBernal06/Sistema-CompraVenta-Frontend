import { useState } from 'react'

const useformulario = (valores = {}) =>{

    const [formUser, setFormUser] = useState(valores)

    const OnInputOnchange = ({target}) => {
        const {name, value} = target 
        setFormUser({
            ...formUser,
            [name]:value
        })
    }

    return{
        formUser,
        OnInputOnchange,
    }
}
export default useformulario

