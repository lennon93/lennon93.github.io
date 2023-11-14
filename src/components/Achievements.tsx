import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import certificado1 from '../assets/certificado_page-0001.jpg';
import certificado2 from '../assets/certificado2_page-0001.jpg';
import certificado4 from '../assets/img20230712_23213802_page-0001.jpg';
import certificado5 from '../assets/certificado5.jpg';
import certificado6 from '../assets/kj1iar0g_1694647742879_page-0001.jpg';
import certificado7 from '../assets/05B7FAB7_page-0001.jpg';
import certificado8 from '../assets/cert_page-0001.jpg';

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
          <a href="https://www.linkedin.com/feed/updathttps://www.linkedin.com/feed/update/urn:li:activity:7128728863328657408/?commentUrn=urn%3Ali%3Acomment%3A(ugcPost%3A7128728862724677632%2C7129994021984219136)&dashCommentUrn=urn%3Ali%3Afsd_comment%3A(7129994021984219136%2Curn%3Ali%3AugcPost%3A7128728862724677632)e/urn:li:activity:7006649793703743488/"><img src={certificado8} className='p-8' alt="" /></a>
        </SwiperSlide>
        <SwiperSlide className="flex h-auto ">
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7006649793703743488/"><img src={certificado2} className='p-8' alt="" /></a>
        </SwiperSlide>
        <SwiperSlide className="flex h-auto ">
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7049032204873515008/"><img src={certificado1} className='p-8' alt="" /></a>
        </SwiperSlide>
        <SwiperSlide className="flex h-auto ">
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7095106189914468352/"><img src={certificado5} className='p-8' alt="" /></a>
        </SwiperSlide>
        <SwiperSlide className="flex h-auto ">
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7102667374515908608/"><img src={certificado6} className='p-8' alt="" /></a>
        </SwiperSlide>
        <SwiperSlide className="flex h-auto ">
          <a href="https://www.linkedin.com/in/lennon-xavier/details/certifications/"><img src={certificado4} className='p-8' alt="" /></a>
        </SwiperSlide>
        <SwiperSlide className="flex h-auto ">
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7121160123405729793/"><img src={certificado7} className='p-8' alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Achievements;
