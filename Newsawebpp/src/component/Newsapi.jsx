import { useState } from "react";
import Newscard from "./Newscard";
import { useEffect } from "react";
function Newsapi({category}) {
    const [alldata, setAlldata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.NEWS_API_KEY}`);
                const convert = await url.json();
                setAlldata(convert.articles);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, [category])
    return (
        <>
        
            {
                alldata.map((news,i)=>{
                    return <Newscard key={i} title={news.title} description={news.description} url={news.url} src={news.urlToImage}/>
                })
            }
        </>
    )
}
export default Newsapi;