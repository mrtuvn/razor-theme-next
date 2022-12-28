import React, { useDeferredValue, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
const BrandSlider = () => {
    const apiEndpoint = "https://jsonplaceholder.typicode.com/photos";
    const [brandPhotos, setBrandPhotos] = useState([]);
    const deferedValue = useDeferredValue(brandPhotos);

    const FetchData = () => {
        //setTimeout(() => {
        fetch(apiEndpoint)
            .then((response) => {
                return response.json(); /* return json */
            })
            .then((data) => {
                console.log({ data });
                setBrandPhotos(data);
            })
            .catch((error) => console.log(error));
        //}, 5000);
    };

    type Brand = {
        id: number;
        title: string;
        thumbnailUrl: string;
    };

    useEffect(() => {
        FetchData();
    }, []);

    return (
        <div className="brandSlider container mx-auto">
            {deferedValue.length > 0 && (
                <Swiper
                    spaceBetween={50}
                    slidesPerView={7}
                    onSlideChange={() => {}}
                    onSwiper={() => {}}
                >
                    <>
                        {deferedValue.map((brand: Brand) => (
                            <div key={brand.id} className="border-1">
                                <SwiperSlide>
                                    <Image
                                        src={brand.thumbnailUrl}
                                        width={190}
                                        height={59}
                                        alt={brand.title}
                                    />
                                </SwiperSlide>
                            </div>
                        ))}
                    </>
                </Swiper>
            )}
        </div>
    );
};

export default BrandSlider;
