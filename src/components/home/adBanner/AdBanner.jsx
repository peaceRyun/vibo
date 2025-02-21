// 광고 배너
import { BannerWrapper, BannerImage } from './style';

const AdBanner = () => {
    return (
        <BannerWrapper>
            <BannerImage
                src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/mainhome/sample/adBannerSample.png'
                alt='배너 이미지 파친코'
            />
        </BannerWrapper>
    );
};

export default AdBanner;
