import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // this is a function to make the category we display in the tab when we select something from navbar to be displayed as first letter capitalized


  const updateNews = async () => {
    props.setProgress(10);
    const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=366bbcca6a11446cb339fe2f7f186a42&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
    // we made this function to make our code a bit simpler and smaller in length to increase code readability and efficiency and wrote code only once and just called it inside our previous and next functions.Also we will add the same updateNews function to the componentgitmount too for the same reason.

  }
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    //eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=366bbcca6a11446cb339fe2f7f186a42&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    // we replaced the page by page+1 and then shifted set page after it solve the error where when we scroll the new content is loaded but the previous content is displayed first and then the scroll works and it keeps on happening again and again 
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }
  return (
    <>
      <div className="container" style={{ border: "2px solid red", borderRadius: "18px", boxShadow: "0px 0px 10px rgba(0,0,0,0.5)", marginTop: "80px" }}>
        <h1 className='text-center' style={{ margin: "40px 0px", marginTop: "60px" }}>NewsMonkey - Top <span className='text-danger'>{capitalizeFirstLetter(props.category)} </span>Headlines</h1>
      </div >
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        {loading && <Spinner />}
        <div className="container">
          <div className="row">
            {!loading && articles.map((element) => {
              // the logic here says that if show loading only when there is no content on either previous or next button when clicked
              return <div className="col-md-4" key={element.url}>
                {/* //the unique key should be passed to the tag which is being returned */}
                {/*Using .slice to limit the characters in the card for adjusting the layout of the cards on the page.*/}
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                {/* We can only use the attributes present in the dataset which we are getting from the API and it should be exact name of the attribute.*/}
                {/* We are using .map function to traverse between the data on API to get the desired output format */}
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
    </ >
  )
}
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News

