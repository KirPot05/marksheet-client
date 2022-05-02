import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function useData(){
    return useContext(DataContext);
}

export function DataProvider({children}){

    const baseURL = process.env.REACT_APP_BASE_URL;
    const [data, setData] = useState([]);
    const [url, setUrl] = useState(baseURL);
 
    const changeURL = (newUrl) => {
        setUrl(baseURL + newUrl);
    }


    const getData = () => {
        return data;
    }

    const getMarks = (marks, idx) => {

        if(idx >= 0){
            let subMark = 0;
            marks.forEach((mark, i) => {
                if(idx === i){
                    subMark = (Object.entries(mark)[0])[1];
                }
            })
            return subMark;

        } else{
            let total = 0;
            marks.forEach(mark => {
                total += (Object.entries(mark)[0])[1];
            })
            return total;
        }
    }


    useEffect(() => {
        const fetchData = async () => {

            const res = await fetch(url);
            const tableData = await res.json();
            console.log(tableData);

            if(url !== baseURL){
                setData([tableData]); 
            } else{
                setData(tableData);
            }
        }

        fetchData();
        
    }, [url])

    const value = {
        changeURL,
        getData,
        getMarks
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )

}