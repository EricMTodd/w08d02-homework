import React from "react";


const NewsList = (props) => {
    console.log(props)
    const newsList = props.news.map((article, i) => {
        return (
            <div>
                <li key={i}>{article.description}</li>
            </div>
        )
    })
    return (
        <div>
            <h4>News</h4>
            <ul>
                {newsList}
            </ul>
        </div>
    )
}


export default NewsList