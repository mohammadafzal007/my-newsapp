import React, { useEffect, useState } from "react";
import Newsitems from "./Newsitems";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll  from "react-infinite-scroll-component";
const News=(props)=>{
  
 const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
const [articles, setArticles] = useState([]);
const [totalResults, settotalResults] = useState(0);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(true);

  
const updatenews=async()=>{
    const url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=15229b971c064130806ab63d4fb35172&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false);
   
}
  
 useEffect(()=>{
    updatenews();
 },[])

  // handlePrev = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //     props.category
  //   }&apikey=edf66adc50674684b9d37df0467f0b3c&page=${
  //     this.state.page - 1
  //   }&pageSize=${props.pageSize}`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);

  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  //   //   this.setState({page:this.state.page-1});
  //   // this.updatenews();
  // };
  // handleNext = async () => {
  //   if (
  //     !(
  //       this.state.page + 1 >
  //       Math.ceil(this.state.totalResults / props.pageize)
  //     )
  //   ) {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //       props.category
  //     }&apikey=edf66adc50674684b9d37df0467f0b3c&page=${
  //       this.state.page + 1
  //     }&pageSize=${props.pageSize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);

  //     let parsedData = await data.json();
  //     console.log(parsedData);

  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading: false,
  //     });
  //   }
    // this.setState({page:this.state.page+1});
    // this.updatenews();
  // };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=15229b971c064130806ab63d4fb35172&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1 );
    setLoading(true );
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    
      setArticles(articles.concat(parsedData.articles));
      settotalResults(parsedData.totalResults);
      setLoading(false);

  }
  
    return (
      <>
      
        <h1 className="text-center  bg bg-white" style={{margin:'100px'}}>
         <u>
            NewsWala - Top {capitalize(props.category)} Headlines
            </u> 
        </h1>
        {loading && <Loading />}
        <InfiniteScroll dataLength={articles.length}  next={fetchMoreData} hasMore={articles.length !== totalResults} 
        >
          <div className="container">
            <div className="row ">
              {articles.map((element) => {
                return (
                  <div className="col-md-3 my-3" key={element.url}>
                    <Newsitems title={element.title ? element.title.slice(0, 66) : ""} description={  element.description ? element.description.slice(0, 111) : ""  } 
                     imageURL={element.urlToImage}  newsurl={element.url}  author={element.author}  publishedAt={element.publishedAt}  source={element.source.name} />
                  </div>
                );
              })
              }
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className=" btn  btn-dark bg-dark" onClick={handlePrev}>&larr;Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className=" btn  btn-dark bg-dark" onClick={this.handleNext}>Next&rarr;</button>
        </div> */}
      </>
    );
  
}

export default News;
News.defaultProps = {
  category: "general",
  pageSize: 8,
  country: "in",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};