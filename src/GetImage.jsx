import one from './images/1.webp';
import two from './images/2.webp';
import three from './images/3.jpeg';
import c1 from './images/c1.jpeg';
import c2 from './images/c2.jpeg';
import c3 from './images/c3.jpeg';
import p1 from './images/p1.png';
import p2 from './images/p2.webp';
import p3 from './images/p3.png';
import p4 from './images/p4.png';
import p5 from './images/p5.png';
import p6 from './images/p6.png';
import p7 from './images/p7.webp';
import p8 from './images/p8.png';
import pay from './images/pay.png'
import reg from './images/reg.jpeg'
import log from './images/log.webp'
import cart from './images/cart.png'

const images = {
  one,
  two,
  three,
  c1,
  c2,
  c3,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  pay,
  reg,
  log,
  cart,
};

function GetImage(key) {
  return images[key]
}

export default GetImage