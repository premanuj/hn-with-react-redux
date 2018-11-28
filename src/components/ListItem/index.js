import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const ListItem = ({ by, kids = [], score, url, title, id, type, time }) => {
  return (
    <>
      <Link
        key={id}
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{title}</h5>
          <small>{type}</small>
        </div>
        <p className="mb-1">
          <small>{moment(new Date(time * 1000).toISOString()).fromNow()}</small>
          <small>
            {" "}
            score: {score} comments: {kids.length}
          </small>
        </p>
        <small>{url}</small>
      </Link>
    </>
  );
};

export default ListItem;
