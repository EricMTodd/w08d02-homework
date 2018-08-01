import React, { Component } from "react";
import NewsList from "../NewsList/index.js";

class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            news: [],
        }
    }

    getNews = async () => {
        try {
            const news = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=46bdaa2d4efa4e8ab84475358d8f5c80");
            const newsJson = await news.json();
            return newsJson;
        } catch (err) {
            console.log(err);
            return err;
        }
    }

    componentDidMount(data) {
        this.getNews().then((data) => {
            this.setState({news: data.articles});
        })
    }

    render() {
        return (
            <div> 
                <h1>Main Container</h1>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}


export default MainContainer;