import { useEffect, useState } from "react";

function getSavedValue(key, initialvalue) {

    const savedValue = JSON.parse(localStorage.getItem(key));

    if(savedValue) return savedValue;

    if(initialvalue instanceof Function) return initialvalue();

    return initialvalue;

}

export default function useLocalStorage(key,initialvalue) {

    const [value, setValue] = useState(() => {
        return getSavedValue(key,initialvalue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[value]);

    return [value, setValue];

}