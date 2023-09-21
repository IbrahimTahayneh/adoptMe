import { useState } from "react";
import { Link } from "react-router-dom";

const ErrorBoundary = (props) => {
  const [hasError, setHasError] = useState(false);

  const handleCatch = (error, info) => {
    console.error("ErrorBoundary caught an error", error, info);
    setHasError(true);
  };

  if (hasError) {
    return (
      <h2>
        There was an error with this listing. <Link to="/">Click here</Link> to
        back to the home page.
      </h2>
    );
  }

  return <ErrorBoundary onError={handleCatch}>{props.children}</ErrorBoundary>;
};

export default ErrorBoundary;
