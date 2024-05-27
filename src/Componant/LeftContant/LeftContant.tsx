import "./LeftContant.css";

const LeftContant = ({ title, description }: any) => {
  return (
    <>
      <div className="indiaNewsHeading">
        <p>{title}</p>
      </div>
      <div className="indiaNewsContent">
        <p>{description}</p>
        <p className="indiaNewsContentPublish">Published 1 hour ago</p>
      </div>
      <hr />
    </>
  );
};

export default LeftContant;
