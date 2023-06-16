'use client';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { SliderData } from '../Data/SliderData/SliderData';
import shoe from '../Images/shoe.jpg';

const SliderPage = () => {
  return (
    <Box>
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
            <Box key={slider.id}>
              <img src={slider.img} alt="img" />
            </Box>
          );
        })}
      </Carousel>
      <img src={shoe} alt="img" />
    </Box>
  );
};

export default SliderPage;
