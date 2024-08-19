import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("error", error);

  return (
    <>
      <div className="text-center flex items-center justify-center text-2xl min-h-screen">
        <div className="font-semibold flex-col">
          <h1 className="py-10 text-4xl">Opps!</h1>
          <p className="py-10">Sorry, an unexpected error has occured.</p>
          <p>
            <i className="font-xl">{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
