import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);

  return (
    <div>
      <h1 className="text-3xl text-slate-700 font-semibold">Oops!</h1>
      <p>Sorry, {isRouteError ? 'This page does not exist' : 'Unexpected error occurred' }</p>
    </div>
  );
};

export default ErrorPage;
