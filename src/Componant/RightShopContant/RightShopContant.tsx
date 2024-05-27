import Image from "next/image";
import "./RightShopContant.css";

const RightShopContant = ({
  image,
  description,
  old_price,
  new_price,
}: any) => {
  return (
    <>
      <div className="product">
        <div className="productImg">
          <Image src={image} alt="" height={100} width={100} />
        </div>
        <div className="productDetails">
          <p>{description}</p>
          <p>{new_price}</p>
          <p className="lineThrough">{old_price}</p>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default RightShopContant;
