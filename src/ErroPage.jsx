import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="flex justify-center w-full p-20">
      <div className="flex flex-col items-center p-10">
        <div>
          <h1 className="text-center p-10 font-bold">Oops!</h1>
        </div>
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
