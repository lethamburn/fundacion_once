import "./Banner.css";

const Banner = ({bannerImage, bannerAlt}) => {
  return <img src={bannerImage} alt={bannerAlt} className="banner" />;
};

export default Banner;
