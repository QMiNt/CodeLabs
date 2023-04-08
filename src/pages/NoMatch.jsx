import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="login-form-bg h-100">
      <div className="container h-100">
        <div className="row justify-content-center h-100">
          <div className="col-xl-6">
            <div className="error-content">
              <div className="card mb-0">
                <div className="card-body text-center pt-5">
                  <h1 className="error-text text-primary">404</h1>
                  <h4 className="mt-4">
                    <i className="fa fa-thumbs-down text-danger"></i> Bad
                    Request
                  </h4>
                  <p>Your Request resulted in an error.</p>
                  <div className="text-center mb-4 mt-4">
                    <Link to="/" className="btn btn-primary">
                      Back to Homepage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
