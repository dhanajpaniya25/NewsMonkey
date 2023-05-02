import React from 'react'


const NewsItem = (props) => {
    const handleImgError = (e) => {
        e.target.src = "https://img.etimg.com/thumb/msid-99706628,width-1070,height-580,imgsize-54828,overlay-economictimes/photo.jpg";
    }
    // We have made this function to handle the error if the imageUrl is not null but the get request is not working properly.
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <>
            <div className='my-3'>
                <div className="card">
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0"
                    }}>
                        <span id="badge" className="badge rounded-pill bg-danger" >
                            {/* we have set the position to left 90% and zindex to 1 for the positioning of this span tag on the card */}
                            {source}
                        </span>
                    </div>
                    <img src={!imageUrl ? "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg" : imageUrl} onError={handleImgError} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-danger' style={{ fontWeight: "700" }}>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

                        <a href={newsUrl} className="btn btn-sm btn-dark" rel="noopener noreferrer" target="_blank">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem


