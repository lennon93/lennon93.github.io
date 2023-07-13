import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import certificado1 from '../assets/certificado_page-0001.jpg';
import certificado2 from '../assets/certificado2_page-0001.jpg';
import certificado3 from '../assets/certificadoCienciadeDados_page-0001.jpg';
import certificado4 from '../assets/img20230712_23213802_page-0001.jpg'

SwiperCore.use([Navigation]);

 const Achievements: React.FC = () => {
  return (
<div className="flex w-screen bg-slate-800" id="achievements">
      <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          navigation
          className="p-2"
      >
        <SwiperSlide className="flex h-auto ">
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7006649793703743488/"><img src={certificado2} className='p-8' alt="" /></a>
        </SwiperSlide>
        <SwiperSlide className="flex h-auto ">
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7049032204873515008/"><img src={certificado1} className='p-8' alt="" /></a>
        </SwiperSlide>
        <SwiperSlide className="flex h-auto ">
          <a href="https://www.linkedin.com/in/lennon-xavier/details/certifications/"><img src={certificado4} className='p-8' alt="" /></a>
        </SwiperSlide>
        <SwiperSlide className="flex h-auto ">
          <a href=""><img src={certificado3} className='p-8' alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Achievements;
