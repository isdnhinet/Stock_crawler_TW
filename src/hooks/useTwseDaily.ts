import { useEffect, useState } from "react";

export function useTwseDaily (params: string) {

    const [data, setData] = useState<string[][]>([]);
    
    useEffect(() => {
    fetch("https://raw.githubusercontent.com/isdnhinet/twse-data/main/data/20260527.json")
        .then(res => res.json())
        .then(json => {
            console.log(json);
        });
    }, []); 


    return ;
}