
import { PhotoCard } from '@components/molecules';
import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

type SwiperTemplateProps = {
    children?: any;
    data?: any;
    handleIndexChange?: any;
};
const SwiperTemplate = (props: SwiperTemplateProps) => {
    // fixme: Swiper 를 구현해 주세요. 
    return (
        <Swiper
            centeredSlides={true}
            spaceBetween={5}
            slidesPerView={1.1}
            onSlideChange={(swiper) => props.handleIndexChange(swiper.activeIndex)}
        >
            {props.data.map((item: any, index: number) => {
                return (<SwiperSlide key={index}>
                    <PhotoCard src={item.url}></PhotoCard>
                </SwiperSlide>)
            })}
        </Swiper>
    );
};
SwiperTemplate.defaultProps = {};

export default React.memo(SwiperTemplate);