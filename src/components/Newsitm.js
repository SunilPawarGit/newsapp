import React, { Component } from "react";

export class Newsitm extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            style={{ height: "215px" }}
            src={imageUrl}
            className="card-img-top"
            alt="Loading"
          />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 40)}...</h5>
            <p className="card-text">{description.slice(0, 88)}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} On{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-secondary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitm;
