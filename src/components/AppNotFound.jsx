import LinkBtn from "./LinkBtn";

const AppNotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center my-10 h-[80vh] px-10 lg:px-10">
      <img className="lg:w-1/5" src="/assets/appNotFound.png" alt="" />
      <h5 className="text-2xl lg:text-4xl text-center mt-4">
        OPPS!! <br className="block lg:hidden" />
        APP NOT FOUND
      </h5>
      <p className="my-3 text-gray-500">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <LinkBtn url="/" text="Go Back!" />
    </div>
  );
};

export default AppNotFound;
