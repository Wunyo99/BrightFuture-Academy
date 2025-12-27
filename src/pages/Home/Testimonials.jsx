import { ChevronLeft, ChevronRight, LucideMessageSquareQuote } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";



const Testimonials = () => {

  const test = [
    {
      quote: 'BrightFuture Academy has really improved my confidence. The teachers explain everything clearly.',
      img: 'https://t3.ftcdn.net/jpg/05/19/28/86/240_F_519288634_s63DaNmOlYvIX5xPMCoGEX7b5hV72g7J.jpg',
      name: 'Ama Serwaa',
      status: 'student'
    },
    {
      quote: 'BrightFuture Academy has helped me grow not only academically but personally. The teachers really care about us.',
      img: 'https://t3.ftcdn.net/jpg/05/60/00/24/240_F_560002450_oxu1G9y76P4vVPNugw0KMOrYi954v6XL.jpg',
      name: 'Daniel Owusu',
      status: 'student'
    },
    {
      quote: "Since enrolling my children, I’ve seen tremendous academic and behavioral improvement.",
      img: 'https://t3.ftcdn.net/jpg/02/34/21/48/240_F_234214852_k4rH5s775vnec5DWHlcYxGDEvsVJMeKx.jpg',
      name: 'Mr. Isaac Agyemang',
      status: 'parent'
    },
    {
      quote: "Teaching here is fulfilling because students eagerly learn and the school provides excellent tools for success.",
      img: 'https://t3.ftcdn.net/jpg/01/04/93/90/240_F_104939026_zfARs9vI4VUlXRU72XJTHXcV8VMIJD38.jpg',
      name: 'Mr. Bernard Tetteh',
      status: 'teacher'
    },
    {
      quote: 'BrightFuture Academy shaped my confidence and discipline. The foundation I built here still guides me today.',
      img: 'https://t4.ftcdn.net/jpg/01/82/04/15/240_F_182041526_za64hR46M8bI82i2D1qPkA1VmfIyiXiY.jpg',
      name: 'Jordan Appiah',
      status: 'alumini'
    },
    {
      quote: 'The school environment is warm, supportive, and professional, and I’m proud to help shape young minds here.',
      img: 'https://t4.ftcdn.net/jpg/06/26/64/43/240_F_626644352_YeTMGQ8qDs1h9xaNSTQzZGIioPNx94WE.jpg',
      name: 'Ms. Diana Badu',
      status: 'teacher'
    },
    {
      quote: 'The teachers are professional and approachable. Communication between the school and parents is excellent.',
      img: 'https://t3.ftcdn.net/jpg/06/26/33/68/240_F_626336847_DT2UpCyXUy0H2PyEhXKTOQCSFFREyFNN.jpg',
      name: 'Mr. Kofi Adom',
      status: 'parent'
    },
    {
      quote: 'The ICT lab and modern facilities make learning so easy. I’ve gained confidence in subjects I used to struggle with.',
      img: 'https://t3.ftcdn.net/jpg/09/04/46/38/240_F_904463840_YHcGHWwEcXDaWngeE0VZgzUMgye1S4tC.jpg',
      name: 'Kelvin Mensah',
      status: 'student'
    },
    {
      quote: 'The school provides a safe, clean, and motivating environment for learning. I’m very impressed with the quality of teaching.',
      img: 'https://t3.ftcdn.net/jpg/04/17/85/08/240_F_417850826_ZQ98ggEKoZcqFjfLSgmBwYPHu1Tc4MGU.jpg',
      name: 'Mrs. Janet Opoku',
      status: 'parent'
    },
    {
      quote: 'The management encourages innovation in our teaching methods. It’s a great place for both students and teachers to grow.',
      img: 'https://t3.ftcdn.net/jpg/15/74/27/02/240_F_1574270201_aIJAL6kZDhUB9vh8xK8uQBx148Tq8der.jpg',
      name: 'Mr. Francis Nyarko',
      status: 'teacher'
    },
    {
      quote: 'The discipline and moral values taught here are outstanding. I feel confident knowing my child is in the right place.',
      img: 'https://t3.ftcdn.net/jpg/05/42/12/58/240_F_542125868_r238ZKQCd6hgbz3FrFTxicXmAHIuuhb1.jpg',
      name: 'Mrs. Linda Amankwa',
      status: 'parent'
    },
    {
      quote: 'BrightFuture Academy promotes collaboration and continuous improvement. Every day feels meaningful.',
      img: 'https://t3.ftcdn.net/jpg/15/85/16/28/240_F_1585162868_BShhL9g6QSij9XKVOuP6mhExcZex1zBj.jpg',
      name: 'Ms. Evelyn Sarpong',
      status: 'teacher'
    }
  ]
  return (
    <>
      <div className="relative px-5 pb-16">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          // pagination = {true}
          loop={true}
          navigation={{
            nextEl: ".swiper-next-btn",
            prevEl: ".swiper-prev-btn",
          }}
          autoplay={{ delay: 4000 }}
          speed={800}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {test.map((item, index) => (
            <SwiperSlide key={index} >
              <div
                className="bg-white border border-gray-300 px-4 py-8 rounded-2xl h- space-y-5">
                <div>
                  <LucideMessageSquareQuote className="text-red-800" size={35} />
                </div>

                <p className="font-medium">{item.quote}</p>

                <div className="flex items-center gap-3">
                  <img src={item.img} alt="" className="w-18 h-18 object-cover rounded-full" />
                  <div className="flex flex-col gap-2">
                    <h1 className="font-medium">{item.name}</h1>
                    <span className="text-sm font-medium text-red-800">{item.status}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-2 right-5 flex gap-3 z-50">
          <button className="swiper-prev-btn bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full">
            <ChevronLeft />
          </button>

          <button className="swiper-next-btn bg-red-800 text-white flex justify-center items-center rounded-full w-10 h-10">
            <ChevronRight />
          </button>
        </div>
      </div>

    </>
  )
}

export default Testimonials