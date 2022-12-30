import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import BrandsData from '@/data/brands/brands.json';

const BrandSlider = () => {
    type Brand = {
        id: number;
        title: string;
        thumbnailUrl: string;
    };

    return (
        <div className="brandSlider container mx-auto">
            {BrandsData.length > 0 && (
                <Swiper
                    spaceBetween={50}
                    slidesPerView={7}
                    onSlideChange={() => {}}
                    onSwiper={() => {}}
                >
                    <>
                        {BrandsData.map((brand: Brand) => (
                            <div key={brand.id} className="border-1 abc">
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
