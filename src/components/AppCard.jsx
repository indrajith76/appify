import React from "react";

const AppCard = ({ item }) => {
  // Function to calculate average rating
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

  return (
    <div className="bg-gray-100 p-4 rounded-xl w-full shadow-sm">
      {/* Image */}
      <img src={item.image} alt={item.title} className="mb-4" />

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {item.title}
      </h2>

      {/* Footer */}
      <div className="flex justify-between items-center">
        {/* Download */}
        <div className="flex items-center gap-2 bg-green-100 text-green-600 px-3 py-1 rounded-md text-sm">
          <img src="/assets/icon-downloads.png" className="w-3" alt="" />
          <span>{item.downloads}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 bg-orange-100 text-orange-500 px-3 py-1 rounded-md text-sm">
          <img src="/assets/icon-ratings.png" className="w-3" alt="" />
          <span>{avgRating}</span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;