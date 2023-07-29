'use client';
import { Box } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { SliderData } from '../Data/SliderData/SliderData';
import shoeImage from '../images/shoe.jpg';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const SliderPage = () => {
  // const [data, setData] = useState<any>(SliderData);
  return (
    <div>
      <Carousel
        autoPlay={true}
        showArrows={true}
        dynamicHeight={true}
        infiniteLoop={true}
        showIndicators={false}
        swipeable={true}
        transitionTime={800}
        interval={5000}
      >
        {SliderData.map((slider: any) => {
          return (
            <Fragment key={slider.id}>
              <Image className="object-cover" src={slider.img} alt="img" />
            </Fragment>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SliderPage;
