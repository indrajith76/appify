import React from "react";
import { useLocation } from "react-router";

const AppsDetails = () => {
  const location = useLocation();
  const { title, companyName, downloads, ratings, reviews, image,description } =
    location.state;

  const calculateAvgRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;

    let totalScore = 0;
    let totalCount = 0;

    ratings.forEach((r) => {
      totalScore += parseInt(r.name) * r.count; // Multiply star value by count
      totalCount += r.count;
    });

    return (totalScore / totalCount).toFixed(1); // Round to 1 decimal place
  };

  const avgRating = calculateAvgRating(ratings);

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex items-center gap-6 py-20">
        {/* Icon */}
        <div className="w-[25%] bg-white flex items-center justify-center rounded-lg">
          <img src={image} alt="App Icon" className="w-full h-full" />
        </div>

        {/* Content */}
        <div className="w-[75%]">
          {/* Title */}
          <h2 className="text-3xl mb-2 font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-blue-500 font-medium">{companyName}</span>
          </p>

          <hr className="my-7 border-0.5 border-gray-300" />

          {/* Stats */}
          <div className="flex items-center gap-10">
            {/* Downloads */}
            <div className="text-center">
              <img
                className="mx-auto"
                src="/assets/icon-downloads.png"
                alt=""
              />
              <p className="text-gray-500 my-2">Downloads</p>
              <p className="font-bold text-4xl text-[#001931]">{downloads}</p>
            </div>

            {/* Ratings */}
            <div className="text-center">
              <img className="mx-auto" src="/assets/icon-ratings.png" alt="" />
              <p className="text-gray-500 my-2">Average Ratings</p>
              <p className="font-bold text-4xl text-[#001931]">{avgRating}</p>
            </div>

            {/* Reviews */}
            <div className="text-center">
              <img className="mx-auto" src="/assets/icon-review.png" alt="" />
              <p className="text-gray-500 my-2">Total Reviews</p>
              <p className="font-bold text-4xl text-[#001931]">
                {reviews >= 1000 ? (reviews / 1000).toFixed(1) + "k" : reviews}
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-7 bg-[#00D390] hover:bg-[#00eca2] text-white px-5 py-2 rounded-md text-sm font-medium cursor-pointer">
            Install Now (291 MB)
          </button>
        </div>
      </div>

      <div className="container mx-auto  py-10 border-t border-gray-300">
        <h4 className="text-2xl font-semibold text-[#001931] mb-6">Description</h4>
        <p className="text-[#627382] text-md text-justify">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AppsDetails;
