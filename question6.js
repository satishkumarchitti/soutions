import { useState } from "react";

function useDebounce(value,delay){
    const [dobouncedValue,setDebouncedValue]= useState(value);
    useEffect(()=>{
        const timer=setTimeOut(()=>{
            setDebouncedValue(value);
        },delay);
        return () => clearTimeout(timer);
    },[value,delay]);
    return setDebouncedValue;
}