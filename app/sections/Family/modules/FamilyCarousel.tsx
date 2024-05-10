import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { FamilyData } from "@/lib/data";
const FamilyCarousel = () => {
  return (
    <>
      <div className="flex justify-center gap-x-10 text-white ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide className=" py-10 ">
            {" "}
            <div className="flex justify-center gap-x-32">
              {FamilyData.slice(3, 7).map((item, index) => (
                <div key={index} className="relative inline-block w-60 h-60">
                  <Image
                    className="rounded-full object-cover w-full h-full"
                    src={item.src}
                    alt="Image"
                    width={200} // Set a fixed width
                    height={200} // Set a fixed height
                  />
                  {/* Overlay for "Read More" text */}
                  <h1 className="text-center text-2xl font-bold pt-4">
                    {item.name}
                  </h1>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full">
                    <Link
                      href={`/${item.name}`}
                      className="text-white text-lg font-semibold"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide className=" py-10 ">
            {" "}
            <div className="flex justify-center gap-x-32">
              {FamilyData.slice(8, 13).map((item, index) => (
                <div key={index} className="relative inline-block w-60 h-60">
                  <Image
                    className="rounded-full object-cover w-full h-full"
                    src={item.src}
                    alt="Image"
                    width={200} // Set a fixed width
                    height={200} // Set a fixed height
                  />
                  {/* Overlay for "Read More" text */}
                  <h1 className="text-center pt-4">{item.name}</h1>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full">
                    <Link
                      href={`/${item.name}`}
                      className="text-white text-lg font-semibold"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FamilyCarousel;
