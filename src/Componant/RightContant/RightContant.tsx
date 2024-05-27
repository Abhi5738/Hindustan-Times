import Image from "next/image";
import "./RightContant.css";

const RightContant = ({
  description,
  image,
  BigDescription,
  BigImage,
}: any) => {
  return (
    <>
      <div className="htPremiumeContant">
        <div className="htPremiumeContantTitle">
          <p>{BigDescription}</p>
        </div>

        <div className="htPremiumeContantImg">
          <Image src={BigImage} alt="" height={1} width={286} />
        </div>
      </div>
      <div className="htPremiumeBigContant">
        <div className="htPremiumeBigTitle">
          <p>{description}</p>
        </div>
        <div className="htPremiumeBigImg">
          <Image src={image} width={85} height={1} alt="" />
        </div>
      </div>
    </>
  );
};

export default RightContant;
