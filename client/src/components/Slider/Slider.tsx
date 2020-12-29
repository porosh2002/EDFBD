import { Swiper, SwiperSlide } from "swiper/react";
import { Content } from "../../Styled/Styled";
import SwiperCore, { EffectFade } from "swiper";
import "swiper/swiper.scss";
SwiperCore.use([EffectFade]);
export default function Slider() {
  return (
    <div className='Slider_padding'>
      <Swiper
        effect="fade"
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="Slider">
            <div className="Slider_Div">
              <Content>

              </Content>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
        <div className="Slider">
      <div className="Slider_Div"></div>
    </div>
      </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
