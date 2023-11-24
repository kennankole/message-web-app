import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col items-center p-10">
        <div><h1>Oops!</h1></div>
        <div>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
        <div>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </section>

  );
}
export default ErrorPage;
