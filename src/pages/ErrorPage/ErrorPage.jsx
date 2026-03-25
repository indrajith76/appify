import React from "react";
import LinkBtn from "../../components/LinkBtn";

const ErrorPage = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center flex-col items-center my-10 ">
        <img className="w-[75%]" src="/assets/error-404.png" alt="" />
        <h5 className="text-4xl mt-4">Oops, page not found!</h5>
        <p className="my-3 text-gray-500">
          The page you are looking for is not available.
        </p>
        <LinkBtn url="/" text="Go Back!" />
      </div>
    </section>
  );
};

export default ErrorPage;
