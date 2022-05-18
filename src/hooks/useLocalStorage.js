import {useState, useEffect} from 'react';

export function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(()=>{
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [storedValue, key])
    

    const setValue = ({clientName, bikeType, rentalDays, total}) => {
        try {
            const date = new Date().toLocaleString()
            setStoredValue((prev)=> [...prev, {
                date, 
                clientName,
                bikeType,
                rentalDays,
                total
            }]);
        } catch (error) {
            console.error(error);
        }
    }
    return [storedValue, setValue]
}