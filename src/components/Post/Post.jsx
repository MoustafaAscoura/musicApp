import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostComponent = ({ id, title, body, tags, reactions, views, userId }) => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{body}</p>
        <div className="d-flex flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-primary me-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="card-footer text-muted d-flex justify-content-between">
        <div>
          <span className="me-2"><i className="bi bi-hand-thumbs-up"></i> {reactions.likes}</span>
          <span className="me-2"><i className="bi bi-hand-thumbs-down"></i> {reactions.dislikes}</span>
          <span className="me-2"><i className="bi bi-eye"></i> {views}</span>
        </div>
        <div>
          <span className="me-2">User ID: {userId}</span>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
