import shoe from '../../Images/shoe.jpg';
import mobile from '../../Images/mobile.jpg';
import summer from '../../Images/summer-appliance.jpg';
import toys from '../../Images/toys.jpg';
import bottle from '../../Images/water-bottle.jpg';

export interface SliderDataProps {
  id: number;
  title: string;
  img: string;
}

export const SliderData = [
  { id: 1, title: 'Shoe', img: shoe },
  { id: 2, title: 'mobile', img: mobile },
  { id: 3, title: 'summer', img: summer },
  { id: 4, title: 'toys', img: toys },
  { id: 5, title: 'bottle', img: bottle },
];
