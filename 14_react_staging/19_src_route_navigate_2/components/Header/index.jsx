import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
          <h2>React Router Demo</h2>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Go back</button><button onClick={() => navigate(1)}>Go forward</button>
    </div>
  );
}
