import "../App.css";

const Newsitems=(props)=> {
    let { title, description, imageURL, newsurl, author, publishedAt, source } =
      props;
    return (
      <div className="card">
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-danger "
          style={{ zindex: "1", left: "80%" }}
        >
          {source}
        </span>
        <img
          className="card-img-top"
          src={
            !imageURL
              ? "https://c.ndtvimg.com/2022-02/qcqb4jg8_ukraine-belarus-exercise-650_625x300_21_February_22.jpg"
              : imageURL
          }
          alt="imagehhg"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-dark">
              By {author} on {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            href={newsurl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }


export default Newsitems;
