import { Language } from "lib/models"
import { useState } from "react"
// import { APP_CONFIG } from "lib/config"

export const useSupportedLanguages = (
    onSucces: (languages: Array<Language>)=>void
    )=>{
const [isLoading, setLoading]=useState<boolean>(false)
const [hasError, setHasError]=useState<boolean>(false)

    return {
        isLoading,
        hasError,
        fetch: ()=>{
            setLoading(true)
            setHasError(false)
            fetch(`http://192.168.0.17:3100/api/v1/users`)
            .then(res=>{
                if(res.ok){
                    return res
                }
                throw res
            })
            .then(res=> res.json())
            .then(onSucces)
            .catch(()=>{
            setHasError(true)
            })
            .finally(()=>{
                setLoading(false)
            })
        }
    }

}