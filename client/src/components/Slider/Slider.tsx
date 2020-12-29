import { Swiper, SwiperSlide } from "swiper/react";
import { Content } from "../../Styled/Styled";
import SwiperCore, { EffectFade,Autoplay } from "swiper";
import "swiper/swiper.scss";
import { Link } from "react-router-dom";
SwiperCore.use([EffectFade,Autoplay]);
export default function Slider() {
  return (
    <div className='Slider_padding'>
      <Swiper
        effect="fade"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000
      }}
      >
        <SwiperSlide>
          <div className="Slider Slider0">
            <div className="Slider_Div">
              <Content className='ContentSlider'>
                <p className='SliderTxtTitle'>
                  Welcome to EDF. EDF is your most dedicated partner
                </p>
                <Link className='SliderCTA' to='#'>Donate Now</Link>
              </Content>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slider Slider3">
            <div className="Slider_Div">
              <Content className='ContentSlider'>
                <p className='SliderTxtTitle'>
                EDF Is A New Born Idea, A Call Of Unity.
                </p>
                <Link className='SliderCTA' to='#'>Donate Now</Link>
              </Content>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slider Slider2">
            <div className="Slider_Div">
              <Content className='ContentSlider'>
                <p className='SliderTxtTitle'>
                Change YourSelf And Change the World.
                </p>
                <Link className='SliderCTA' to='#'>Donate Now</Link>
              </Content>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slider Slider1">
            <div className="Slider_Div">
              <Content className='ContentSlider'>
                <p className='SliderTxtTitle'>
                EDF is the open heart Kingdom where you help yourself to shape your Digital Victory
                </p>
                <Link className='SliderCTA' to='#'>Donate Now</Link>
              </Content>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
