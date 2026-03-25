import React from "react";
import { useNavigate } from "react-router";

const AppCard = ({ item }) => {
  const navigate = useNavigate();

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

  const avgRating = calculateAvgRating(item.ratings);

  const handleDetailsPage = () => {
    navigate(`/app-details/${item.id}`, {
      state: item,
    });
  };

  return (
    <div
      onClick={handleDetailsPage}
      className="bg-white p-4 rounded-xl w-full shadow-sm hover:cursor-pointer border border-gray-100"
    >
      <div className="bg-[#d9d9d983] rounded-lg md:h-72 flex items-center justify-center mb-2">
        <img src={item.image} alt={item.title} />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-4">{item.title}</h2>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 bg-green-100 text-green-600 px-3 py-1 rounded-md text-sm">
          <img src="/assets/icon-downloads.png" className="w-3" alt="" />
          <span>{item.downloads}</span>
        </div>

        <div className="flex items-center gap-2 bg-orange-100 text-orange-500 px-3 py-1 rounded-md text-sm">
          <img src="/assets/icon-ratings.png" className="w-3" alt="" />
          <span>{avgRating}</span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
