import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import QouteImage from "../../assets/icons/qoutes.png";
import ateek from "../../assets/review_icon/ateek.png";

const feedbacks = [
  {
    name: "Mr. Suraj Singh",
    position: "Sr. Creative Head",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium consectetur. Curabitur tempor posuere massa in varius. Pellentesque viverra nibh eu vehicula mattis. Nullam porta facilisis justo, a feugiat.",
  },
  {
    name: "Mohd Suhel",
    position: "Sr. Creative Head",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium consectetur. Curabitur tempor posuere massa in varius. Pellentesque viverra nibh eu vehicula mattis. Nullam porta facilisis justo, a feugiat.",
  },
  {
    name: "Gaurav Yadav",
    position: "Sr. Creative Head",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium consectetur. Curabitur tempor posuere massa in varius. Pellentesque viverra nibh eu vehicula mattis. Nullam porta facilisis justo, a feugiat.",
  },
  {
    name: "Zaved Ahmad",
    position: "Sr. Creative Head",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium consectetur. Curabitur tempor posuere massa in varius. Pellentesque viverra nibh eu vehicula mattis. Nullam porta facilisis justo, a feugiat.",
  },
];

const CustomerFeedback = () => {
  return (
    <div className="pb-10 pt-6 bg-[#dee8f1]">
      <h1 className="text-center text-[40px] font-bold text-blue-900 mb-6">
        Customer Feedbacks
      </h1>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-6 h-6 bg-blue-600 mx-1 inline-block cursor-pointer transition-all duration-300 hover:bg-blue-800 active:bg-blue-900"></span>`;
            },
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="swiper-container"
        >
          {feedbacks.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-lg p-6 text-center relative overflow-hidden">
                {/* Quote Icon at the Top Right */}
                <div className="absolute top-4 right-4">
                  <img src={QouteImage} alt="Quote" className="w-16 h-16" />
                </div>

                {/* Star Ratings */}
                <div className="flex justify-center mb-3">
                  <span className="text-yellow-500 text-3xl">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                </div>

                {/* Feedback Text */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed text-justify">
                  {item.feedback}
                </p>

                {/* User Section */}
                <div className="flex items-center justify-center mt-4 relative text-left">
                  <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg">
                    <img src={ateek} className="rounded-full"/>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-[#244e8a] font-bold text-lg">{item.name}</h4>
                    <p className="text-blue-700 text-sm">{item.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Square Pagination */}
        <div className="custom-pagination flex justify-center mt-6 gap-2"></div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
