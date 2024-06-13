import Image from "next/image";
import "./SmallCarts.css";

const SmallCarts = ({ title, image }: any) => {
  let time = new Date();
  let minute = time.getMinutes();
  // let hour = timee.getHours();
  // let second = timee.getSeconds();
  return (
    <>
      <div className="smallBanner">
        <div className="smallBannerHeading">
          <p>{title}</p>
          <div className="arvindNewsBannerSmallheading smallBannerPublished">
            <div className="indiaNews">India News</div>
            <div className="indiaNewsPublished">
              Published {minute} minutes ago{" "}
            </div>
          </div>
        </div>
        <div className="smallBannerImg">
          {/* <img src={image} alt="" /> */}
          <Image src={image} alt="small Image" height={90} width={150} />
        </div>
      </div>
    </>
  );
};

export default SmallCarts;
