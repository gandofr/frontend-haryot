import { UNSAFE_ErrorResponseImpl, useRouteError } from "react-router-dom";
import NotFoundPage from "./not-found-page";

export default function ErrorPage() {
  const error = useRouteError();

  if (error instanceof UNSAFE_ErrorResponseImpl) {
    if (error.status === 404) {
      return <NotFoundPage />;
    }
  }

  return (
    <div id="error-page" className="container m-auto">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p></p>
    </div>
  );
}
