import "./BigCarts.css";
import Image from "next/image";

const BigCarts = ({ title, image }: any) => {
  return (
    <>
      <div className="arvindNewsBanner">
        <div className="arvindNewsBannerHeading">
          <p>{title}</p>
        </div>
        <div className="arvindNewsBannerSmallheading">
          <div className="indiaNews">India News</div>
          <div className="indiaNewsPublished"> Updated 5 mins ago</div>
        </div>

        <div className="arvindImg">
          <Image src={image} alt="big img" width={900} height={400} />
        </div>
      </div>
    </>
  );
};

export default BigCarts;
