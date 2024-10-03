import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
AOS.init();



function TestimonialsSection() {
  const testimonials = [
    {
      title: "The service is just amazing",
      review:
        "The service is just amazing, everything from how quick it is, to how easy the website is to use, and the fact that it's really discrete as well is amazing.",
      name: "Alex D.",
    },
    {
      title: "The service is just amazing",
      review:
        "The service is just amazing, everything from how quick it is, to how easy the website is to use, and the fact that it's really discrete as well is amazing.",
      name: "Alex D.",
    },
    {
      title: "The service is just amazing",
      review:
        "The service is just amazing, everything from how quick it is, to how easy the website is to use, and the fact that it's really discrete as well is amazing.",
      name: "Alex D.",
    },
    {
      title: "The service is just amazing",
      review:
        "The service is just amazing, everything from how quick it is, to how easy the website is to use, and the fact that it's really discrete as well is amazing.",
      name: "Alex D.",
    },
    {
      title: "The service is just amazing",
      review:
        "The service is just amazing, everything from how quick it is, to how easy the website is to use, and the fact that it's really discrete as well is amazing.",
      name: "Alex D.",
    },
  ];
  return (
    <div className="testimonials_section" >
      <div className="row">
        <div className="col-lg-12">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            breakpoints={{
              740: {
                slidesPerView: 2,
              },
              940: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 4,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  title={testimonial.title}
                  review={testimonial.review}
                  name={testimonial.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
