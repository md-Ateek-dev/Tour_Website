import React, { useState } from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(8)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const GalapagosBookingPage = () => {
  const [ratingFilters, setRatingFilters] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
  });

  const handleRatingFilterChange = (rating) => {
    setRatingFilters((prev) => ({
      ...prev,
      [rating]: !prev[rating],
    }));
  };

  const reviews = [
    {
      id: 1,
      name: "Susan",
      rating: 5,
      date: "Traveled February 2025",
      comment:
        "I stumbled on Intrepid by chance as I was looking for a trip to the Galapagos. And now I plan to book all future adventures with them. Excellent communication and on land arrangements. Not to mention how perfect the actually trip was!",
      submitted: "Review submitted 01 Mar 2025",
    },
    {
      id: 2,
      name: "Susan",
      rating: 5,
      date: "Traveled February 2025",
      comment:
        "I stumbled on Intrepid by chance as I was looking for a trip to the Galapagos. And now I plan to book all future adventures with them. Excellent communication and on land arrangements. Not to mention how perfect the actually trip was!",
      submitted: "Review submitted 01 Mar 2025",
    },
  ];

  const ratingCounts = {
    5: 37,
    4: 1,
    3: 0,
    2: 0,
    1: 0,
  };

  const totalReviews = Object.values(ratingCounts).reduce(
    (sum, count) => sum + count,
    0
  );
  const averageRating = 5; // Calculated as per the design (all 5-star reviews)

  // Filter reviews based on selected ratings
  const filteredReviews = reviews.filter((review) => {
    const activeFilters = Object.values(ratingFilters).some(Boolean);
    if (!activeFilters) return true;
    return ratingFilters[review.rating];
  });

  return (
    <div className="container mx-auto p-4 sm:p-6 max-w-6xl">
      {/* Reviews Section with Responsive Two Columns */}
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reviews</h2>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left Column - Rating Section */}
          <div className="w-full md:w-1/4">
            {/* Overall Rating */}
            <div className="flex items-center mb-6">
              <StarRating rating={averageRating} />
              <span className="ml-2 text-yellow-500 text-lg font-medium">
                {averageRating}.38 reviews
              </span>
              <span className="ml-1 text-gray-400 text-sm">({totalReviews})</span>
            </div>

            {/* Filter by rating */}
            <div className="mb-6">
              <p className="font-medium text-gray-700 mb-2">Filter by rating</p>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`rating-${rating}`}
                      className="w-4 h-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                      checked={ratingFilters[rating]}
                      onChange={() => handleRatingFilterChange(rating)}
                    />
                    <label
                      htmlFor={`rating-${rating}`}
                      className="ml-2 flex items-center w-full"
                    >
                      <span className="w-16 text-gray-700">{rating} Star</span>
                      <div className="mx-2 bg-gray-200 h-2 flex-1 rounded-full overflow-hidden">
                        <div
                          className="bg-yellow-400 h-full"
                          style={{
                            width: `${
                              (ratingCounts[rating] / totalReviews) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-gray-600 ml-2">
                        {ratingCounts[rating]}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Reviews List */}
          <div className="w-full md:w-3/4 border-l md:border-l border-gray-200 md:pl-6">
            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <div key={review.id} className="pb-6">
                  <StarRating rating={review.rating} />
                  <div className="flex items-center mb-2">
                    <span className="font-medium text-gray-800">
                      {review.name}
                    </span>
                    <span className="mx-2 text-gray-400">·</span>
                    <span className="text-gray-600">{review.date}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{review.comment}</p>
                  <p className="text-gray-500 text-sm">{review.submitted}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalapagosBookingPage;