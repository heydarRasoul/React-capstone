import onePlaceLogo from "../../assets/icons/one-place-logo.png";
import shoppingVideo from "../../assets/videos/shop-video.mp4";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="content-wrapper">
        <h2>Everything You Need</h2>
        <img
          className="one-place-logo"
          src={onePlaceLogo}
          alt="One Place Logo"
        />
      </div>
      <div className="video-wrapper">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={shoppingVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
