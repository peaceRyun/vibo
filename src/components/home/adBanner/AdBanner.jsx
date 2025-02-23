// 광고 배너
import { BannerWrapper, BannerImage } from './style';

const AdBanner = () => {
  return (
    <BannerWrapper>
      <BannerImage
        src="public/vibo_banner.jpg"
        // src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/sample/adBannerSample.png'
        alt="광고배너1"
      />
    </BannerWrapper>
  );
};

export default AdBanner;
