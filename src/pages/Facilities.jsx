import { CheckCircle } from "lucide-react";
import logo from '../assets/logo2.png'

const Facilities = () => {
  const facilities = [
    {
      img: "https://t3.ftcdn.net/jpg/05/20/22/70/240_F_520227091_qixfcYRC9jbO78km5JHMpTfYSlCi6a2D.jpg",
      title: "Well-Equiped Classrooms",
      color: "text-red-700",
      desc: "Comfortable and well-ventilated classrooms designed to enhance effective teaching and learning.",
      features: [
        "Spacious seating",
        "Whiteboards",
        "Proper lighting",
        "Good ventilation",
      ],
    },
    {
      img: "https://t3.ftcdn.net/jpg/05/67/30/66/240_F_567306695_XK8Cds0NflV2Eq9Ta1IUq5kzdFxmnHVu.jpg",
      title: "Modern Library",
      color: "text-cyan-600",
      desc: "A vast collection of 15,000+ books, digital resources, and comfortable reading spaces for students of all ages.",
      features: [
        "Digital catalog",
        "Study rooms",
        "Reading corners",
        "Librarian support",
      ],
    },
    {
      img: "https://t3.ftcdn.net/jpg/09/09/08/72/240_F_909087288_jnGPFSmnHgQ9qOQZW5S0MMT3CyeMS2cM.jpg",
      title: "Science Laboratory",
      color: "text-green-700",
      desc: "State-of-the-art labs for Physics, Chemistry, and Biology with modern equipment and safety measures.",
      features: [
        "Advanced equipment",
        "Safety protocols",
        "Interactive experiments",
        "Research facilities",
      ],
    },
    {
      img: "https://t4.ftcdn.net/jpg/00/12/12/11/240_F_12121143_llO40dmkVP4NEJ5BOPwV3OtiqdyikgHL.jpg",
      title: "Computer Laboratory",
      color: "text-blue-700",
      desc: "Latest technology with high-speed internet, coding platforms, and multimedia tools.",
      features: [
        "Latest hardware",
        "Software suite",
        "Coding platforms",
        "Tech support",
      ],
    },
    {
      img: "https://t4.ftcdn.net/jpg/01/40/79/73/240_F_140797360_o577lHzuCzCSnwa49Yvrs1kv2YSR3DZh.jpg",
      title: "Assembly Hall",
      color: "text-green-400",
      desc: "Large hall for gatherings, ceremonies, and co-curricular activities.",
      features: ["Public address system", "Stage", "Seating", "Lighting"],
    },
    {
      img: "https://t3.ftcdn.net/jpg/01/59/67/66/240_F_159676677_WpkQcRqwi0wYycfX3Cwl5HZUbd6FFBIc.jpg",
      title: "Art Studio",
      color: "text-red-500",
      desc: "A creative space where students explore painting, crafts, and visual arts.",
      features: [
        "Art supplies",
        "Drawing boards",
        "Exhibition corner",
        "Art instructor",
      ],
    },
    {
      img: "https://t4.ftcdn.net/jpg/16/51/37/03/240_F_1651370334_WvEsLOkAtANBOCotOiLcLIe1d9zUdsZ8.jpg",
      title: "Music Room",
      color: "text-purple-500",
      desc: "Dedicated space for musical training, instruments practice, and school band rehearsals.",
      features: [
        "Keyboards and drums",
        "Recording setup",
        "Acoustic panels",
        "Music instructors",
      ],
    },
    {
      img: "https://t3.ftcdn.net/jpg/01/19/95/48/240_F_119954823_W95xFqfTDJjKrlzmR0DE9l5mLt7ZkDx6.jpg",
      title: "Sports Field",
      color: "text-orange-600",
      desc: "Spacious grounds that promote physical fitness, teamwork, and sportsmanship.",
      features: [
        "Football field",
        "Athletics area",
        "Sports equipment",
        "Coaching support",
      ],
    },
    {
      img: "https://t4.ftcdn.net/jpg/00/69/63/83/240_F_69638396_arGQRU585M3eJEfzkXKFijJi34jUAn2b.jpg",
      title: "School Bus Service",
      color: "text-yellow-600",
      desc: "Safe and reliable transportation for students, ensuring timely arrival and departure.",
      features: [
        "Experienced drivers",
        "Safe buses",
        "Regular maintenance",
        "Morning and closing routes",
      ],
    },
    {
      img: "https://t4.ftcdn.net/jpg/08/68/29/79/240_F_868297955_QL23uTOPcha1UZbbBNurlKIWO66c3qh9.jpg",
      title: "Dining Hall",
      color: "text-violet-700",
      desc: "Clean, spacious dining area providing balanced and nutritious meals prepared under strict hygiene standards.",
      features: [
        "Nutritious meals",
        "High hygiene standards",
        "Spacious seating",
        "Qualified catering staff",
      ],
    },
    {
      img: "https://t4.ftcdn.net/jpg/16/12/60/49/240_F_1612604913_swxkK4WZCh6djlMzMzZgQp0H2CpER0Ce.jpg",
      title: "Boarding House",
      color: "text-teal-700",
      desc: "Safe and comfortable residential facilities that provide students with a supportive and well-supervised living environment.",
      features: [
        "24/7 supervision",
        "Comfortable dormitories",
        "Clean washrooms",
        "Security and safety monitoring",
      ],
    },
    {
      img: "https://t3.ftcdn.net/jpg/06/82/16/18/240_F_682161828_A5ZoJ4SZ24gDinw696wDOWF017i9sjjH.jpg",
      title: "Sickbay",
      color: "text-indigo-700",
      desc: "A fully functional health room providing first aid and basic medical attention to students.",
      features: [
        "Trained nurse",
        "First aid equipment",
        "Emergency care",
        "Clean environment",
      ],
    },
  ];
  return (
    <>
      <div className="bg-red-800 py-5 px-10 pt-25 lg:py-25 flex items-center gap-2  justify-between">
        <div className="text-white mt-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Our Facilities
          </h1>
          <p>
            World-class infrastructure designed to enhance learning and
            development
          </p>
        </div>
        <div className="bg-white w-25 h-25 md:w-46 md:flex items-center md:h-46 me-10 rounded-full hidden ">
          <img src={logo} className="object-cover" />
        </div>
      </div>

      <section className="section-padding bg-red-100">
        <div className="section-heading">
          <p className="uppercase tracking-wider font-medium text-yellow-600 text-sm mb-2">
            Excellence In Infrastructure
          </p>
          <h1 className="section-title">Campus Features</h1>
          <p className="section-description">
            We provide state-of-the-art facilities that support comprehensive
            education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <img
                src={facility.img}
                alt={facility.title}
                className="h-60 w-full hover:scale-102 duration-300"
              />
              <div className="space-y-4 px-4 py-5">
                <h1 className={`font-bold text-2xl ${facility.color}`}>
                  {facility.title}
                </h1>
                <p>{facility.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {facility.features.map((feature, ftindex) => (
                    <div
                      key={ftindex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className={`${facility.color}`} size={15} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Facilities;
