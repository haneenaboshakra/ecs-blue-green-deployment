import React from "react";
import {Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TreatmentCard from "./TreatmentCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TreatmentsSwiper() {
  const treatments = [
    {
      image: require("..//assets/images/Default_aged_vs_young_woman_face_protrait_dark_teal_color_mood_3.jpg"),
      treatment_name: "Anti Aging & Vitality",
      treatment_description: "Boosts energy and slows down aging signs.",
    },
    {
      image: require("..//assets/images/Default_Realistic_full_portrait_of_transition_phases_of_the_sa_1.jpg"),
      treatment_name: "Weight Loss",
      treatment_description: "Promotes fat loss and healthy metabolism.",
    },
    {
      image: require("..//assets/images/Default_Mood_and_sleep_individual_with_dark_teal_color_mood_1.jpg"),
      treatment_name: "Mood & Sleep",
      treatment_description:
        "Enhances mood and improves sleep quality.",
    },
    {
      image: require("..//assets/images/Default_aged_vs_young_woman_face_protrait_dark_teal_color_mood_3.jpg"),
      treatment_name: "Cognitive Enhancement",
      treatment_description: "Improves focus, memory, and mental clarity.",
    },
    {
      image: require("..//assets/images/Default_aged_vs_young_woman_face_protrait_dark_teal_color_mood_3.jpg"),
      treatment_name: "Muscle Support",
      treatment_description: "Enhances your muscle growth and strength.",
    },
    {
      image: require("..//assets/images/Default_aged_vs_young_woman_face_protrait_dark_teal_color_mood_3.jpg"),
      treatment_name: "Injury Repair and Recovery",
      treatment_description: "Speeds up healing of injuries and recovery.",
    },
    {
      image: require("..//assets/images/Default_aged_vs_young_woman_face_protrait_dark_teal_color_mood_3.jpg"),
      treatment_name: "Libido Enhancement",
      treatment_description: "Increases sexual desire and performance.",
    },
    {
      image: require("..//assets/images/Default_aged_vs_young_woman_face_protrait_dark_teal_color_mood_3.jpg"),
      treatment_name: "Hair Loss",
      treatment_description: "Reduces your hair loss and promotes growth.",
    },
    {
      image: require("..//assets/images/Default_aged_vs_young_woman_face_protrait_dark_teal_color_mood_3.jpg"),
      treatment_name: "Immunity",
      treatment_description: "Strengthens immune system against infections.",
    },
    {
      image: require("..//assets/images/Default_aged_vs_young_woman_face_protrait_dark_teal_color_mood_3.jpg"),
      treatment_name: "Skin Care",
      treatment_description: "Improves your skin health and appearance.",
    },
  ];
  return (
    <div className="treatments_swiper">
      <div className="row">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Scrollbar]}
          // pagination={{
          //   clickable: true,
          //   dynamicBullets: true,
          // }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            740: {
              slidesPerView: 2,
            },
            940: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 5,
            },
          }}
        >
          {treatments.map((treatment, index) => (
            <SwiperSlide key={index}>
              <TreatmentCard
                image={treatment.image}
                treatment_name={treatment.treatment_name}
                treatment_description={treatment.treatment_description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default TreatmentsSwiper;
