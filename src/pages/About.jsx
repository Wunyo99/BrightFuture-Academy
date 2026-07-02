import { use, useState } from "react";
import {
  Award,
  HandHeart,
  Heart,
  History,
  Minus,
  Plus,
  Target,
  TrendingUp,
  Users2,
} from "lucide-react";
import logo from '../assets/logo2.png'
const About = () => {
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordionIndex(activeAccordionIndex === id ? null : id);
  };

  const stats = [
    {
      icon: <History className="text-blue-700" size={35} />,
      name: "Established",
      int: 1995,
      text: "#193cb8",
    },
    {
      icon: <Users2 className="text-red-800" size={35} />,
      name: "Students",
      int: "2000+",
      text: "#9f0712",
    },
    {
      icon: <Award className="text-yellow-600" size={35} />,
      name: "Awards",
      int: "50+",
      text: "#d08700",
    },
    {
      icon: <TrendingUp className="text-green-800" size={35} />,
      name: "Success Rate",
      int: "98%",
      text: "#016630",
    },
  ];

  const leaders = [
    {
      img: "https://t4.ftcdn.net/jpg/06/51/57/09/240_F_651570931_7gVLS9wvXEy1SKpScuZtFaOf8vjgXiof.jpg",
      name: "Dr. Mawunyo Anani",
      post: "Principal",
      description:
        "With over 15 years of educational leadership experience, Dr. Mawunyo Anani is committed to academic excellence, character development, and creating a supportive learning environment where every student can thrive.",
    },
    {
      img: "https://t4.ftcdn.net/jpg/15/56/81/17/240_F_1556811747_a8go1YWHiK19DSMQBHl3WHe9YUPSh8Kt.jpg",
      name: "Mrs. Evelyn Tetteh",
      post: "Vice Principal",
      description:
        "Mrs. Tetteh oversees academics and student welfare, ensuring high teaching standards and strong student engagement. She works closely with teachers to maintain quality learning across all departments.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/06/10/85/74/240_F_610857421_rl7DX7V5YXIqx8ZCFjAEKBOjRU7ZOmSq.jpg",
      name: "Mr. Michael Asare",
      post: "Administrator",
      description:
        "Mr. Asare manages school operations, admissions, and parent relations. His goal is to make the school system efficient, organized, and welcoming for both students and families.",
    },
  ];

  const values = [
    {
      icon: <Award className="text-blue-700" size={35} />,
      title: "Excellence",
      description:
        "We strive for the highest standards in academics, character, and personal growth.",
      bg: "#dbdbffff",
    },
    {
      icon: <Heart className="text-red-600" size={35} />,
      title: "Compassion",
      description:
        "We foster empathy, kindness, and respect for all members of our community.",
      bg: "#fae5e5ff",
    },
    {
      icon: <Users2 className="text-green-800" size={35} />,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strong relationships.",
      bg: "#ccffe0ff",
    },
    {
      icon: <Target className="text-yellow-600" size={35} />,
      title: "Integrity",
      description:
        "We uphold honesty, responsibility, and ethical behavior in all we do.",
      bg: "#fcf3d9ff",
    },
    {
      icon: <TrendingUp className="text-purple-800" size={35} />,
      title: "Innovation",
      description:
        "We embrace new ideas and modern teaching methods to enhance learning.",
      bg: "#dab2ff",
    },
    {
      icon: <HandHeart className="text-cyan-600" size={35} />,
      title: "Tradition",
      description:
        "We honor our heritage while preparing students for the future.",
      bg: "#a2f4fd",
    },
  ];

  const awards = [
    {
      year: "2024",
      name: "Overall Best School",
      org: "Ghana Education Service",
    },
    {
      year: "2023",
      name: "Innovation in Teaching",
      org: "National Teaching Council",
    },
    {
      year: "2023",
      name: "Outstanding Sports Performance",
      org: "Ghana Schools Sports Federation",
    },
    {
      year: "2022",
      name: "Community & Impact Award",
      org: "District Assembly",
    },
  ];

  const faqs = [
    {
      id: 1,
      quest: "What are the school’s admission requirements?",
      ans: "Admissions are based on an application form, assessment, interview, and review of the student’s previous academic records.",
    },
    {
      id: 2,
      quest: "How can parents apply for admission?",
      ans: "Parents can apply by visiting the school office to obtain an admission form or by completing the online application form available on our website. Our admissions team is available to assist throughout the process.",
    },
    {
      id: 3,
      quest: "What facilities are available to students?",
      ans: "The school provides modern classrooms, a computer laboratory, a library, science facilities, sports grounds, and a safe learning environment to support academic excellence.",
    },
    {
      id: 4,
      quest: "How does the school communicate with parents?",
      ans: "We communicate with parents through meetings, notices, phone calls, and official school messages. Important updates are also shared through the school’s website and approved communication channels.",
    },
    {
      id: 5,
      quest: "Does the school offer boarding facilities?",
      ans: "Yes, we provide safe and well-supervised boarding facilities for students who require accommodation.",
    },
  ];

  return (
    <>
      <div className="bg-red-800 py-5 px-10 pt-25 lg:py-25 flex items-center gap-2  justify-between">
        <div className="text-white mt-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
          <p>
            Discover our story, values, and commitment to educational excellence
          </p>
        </div>
        <div className="bg-white w-25 h-25 md:w-46 md:flex items-center md:h-46 me-10 rounded-full hidden ">
          <img src={logo} className="object-cover" />
        </div>
      </div>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-red-800 tracking-widest uppercase text-sm font-medium">
              Our Story
            </span>
            <h1 className="text-4xl font-bold">
              Excellence Through Dedication
            </h1>

            <p>
              Founded in 1995, BrightFuture Academy has been at the forefront of
              educational innovation for over three decades. What began as a
              small community school with 100 students has grown into a renowned
              institution serving over 2,000 students annually.
            </p>
            <p>
              Our journey has been marked by unwavering commitment to academic
              excellence, character development, and holistic education. We
              believe that every child deserves an environment where they can
              thrive academically, socially, and emotionally.
            </p>
            <p>
              Today, we stand proud as one of the leading educational
              institutions in the region, consistently producing graduates who
              excel in higher education and make meaningful contributions to
              society.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div className="bg-white border border-gray-300 rounded-2xl py-5 flex flex-col items-center justify-center gap-2">
                  <p>{stat.icon}</p>
                  <p className="text-sm font-semibold">{stat.name}</p>
                  <p
                    className="text-3xl font-bold"
                    style={{ color: stat.text }}
                  >
                    {stat.int}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-red-50">
        <div className="section-heading">
          <h1 className="section-title">School Leadership</h1>
          <p className="section-description lg:w-150 mx-auto">
            Meet the dedicated leaders who guide BrightFuture Academy with
            vision, integrity, and a commitment to excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-7 items-center justify-center">
          {leaders.map((leader) => (
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl duration-500">
              <div className="w-full h-75 overflow-hidden">
                <img src={leader.img} className="w-full h-full  object-cover" />
              </div>
              <div className=" p-4 space-y-1.5">
                <h1 className="text-xl font-semibold">{leader.name}</h1>
                <small className="text-sm font-semibold tracking-widest text-red-800 uppercase">
                  {leader.post}
                </small>
                <p className="text-gray-600 mt-2">{leader.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="section-heading">
          <span className="uppercase tracking-wider text-sm font-medium text-yellow-600">
            What we stand for
          </span>
          <h1 className="section-title mt-2">Our Core Values</h1>
          <p className="section-description">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {values.map((value) => (
            <div>
              <div className="p-5 bg-gray-100 rounded-xl flex flex-col gap-2">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: value.bg }}
                >
                  {value.icon}
                </div>
                <h1 className="font-bold text-xl py-2">{value.title}</h1>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="h-130 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://t4.ftcdn.net/jpg/03/15/22/65/240_F_315226533_98tL1Hqx0lh2JT0NK8FbThLYqqgYlM9k.jpg')`,
          }}
        >
          <div className="flex flex-col lg:flex-row gap-6 mx-auto">
            <div className="md:w-120 p-5">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-red-800 bg-white w-fit px-5 py-2 rounded-full">
                Our Mission
              </h1>
              <p className="text-white">
                To provide a nurturing and stimulating environment where
                students develop academically, socially, emotionally, and
                physically. We are committed to fostering critical thinking,
                creativity, and a lifelong love of learning while instilling
                strong values and character.
              </p>
            </div>

            <div className="md:w-120  p-5">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-red-800 bg-white w-fit px-5 py-2 rounded-full">
                Our Vision
              </h1>
              <p className="text-white">
                To be recognized as a leading educational institution that
                empowers students to become confident, responsible, and
                compassionate global citizens who make positive contributions to
                society and excel in their chosen fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-heading">
          <span className="uppercase tracking-widest text-yellow-600 text-sm font-semibold">
            Recognition
          </span>
          <h1 className="section-title">Awards & Achievements</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award) => (
            <div className="border border-gray-300 rounded-2xl bg-white px-8 py-4 text-center shadow-sm hover:shadow-2xl duration-300 flex flex-col gap-3">
              <div className="bg-yellow-200 w-10 h-10 flex items-center rounded-full justify-center mx-auto">
                <Award className="text-yellow-600" size={25} />
              </div>
              <p className="text-red-800 font-medium text-sm">{award.year}</p>
              <h3 className="font-semibold text-">{award.name}</h3>
              <p className="text-sm text-gray-500">{award.org}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="section-heading">
          <h1 className="section-title">FAQs</h1>
        </div>
        <div className="flex flex-col gap-5">
          {faqs.map((faq, id) => (
            <div
              key={faq.id}
              className={` flex flex-col border-2 sm:w-full lg:w-200 mx-auto rounded-lg p-5 ${activeAccordionIndex === id ? "border-red-800 " : "border-gray-200"}`}
            >
              <div className="flex justify-between gap-6">
                <p className="font-semibold text-xl">{faq.quest}</p>
                <button
                  className="text-red-800 w-8 h-8 flex items-center justify-center bg-red-100 rounded-full"
                  onClick={() => toggleAccordion(id)}
                >
                  {activeAccordionIndex === id ? (
                    <Minus className="w-6 h-6 " />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </button>
              </div>
              {activeAccordionIndex === id && (
                <div className="p-2 flex flex-col">
                  <p>{faq.ans}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
