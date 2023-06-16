import PrimarySearchAppBar from './Header/page';
import SliderPage from './Slider/page';

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export default async function HomePage() {
  const product = await getProducts();
  return (
    <div>
      <PrimarySearchAppBar />
      <SliderPage />
      <div className="flex flex-wrap w-[90%] m-auto mt-5">
        {product?.map((product: any) => {
          return (
            <div key={product.id} className="w-[14%]">
              <img src={product.image} alt="img" className="w-[100px]" />
              <h5>{product.title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
