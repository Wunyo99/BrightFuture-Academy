import { Award } from "lucide-react";

const Staff = () => {
  const staffMembers = [
    {
      img: "https://t4.ftcdn.net/jpg/01/80/70/55/240_F_180705597_TufbYw2dqPReeWW2gxMnYNIBXg5dVs3o.jpg",
      name: "Mr. Richard Antwi",
      position: "Head of Mathematics Department",
      departments: "Mathematics",
      bio: "Oversees curriculum planning and academic excellence in Mathematics.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/06/60/60/80/240_F_660608019_iihLNY5PSdg56F81x6vMgpC4LyiAQQqx.jpg",
      name: "Mrs. Elizabeth Adjei",
      position: "Head of Languages Department",
      departments: "Languages",
      bio: "Leads language development and literacy programs.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/06/65/09/30/240_F_665093017_sb9OKpEw2CnNkqV3TDr6VUxpauA93SJZ.jpg",
      name: "Mr. Joseph Quaye",
      position: "Head of Science Department",
      departments: "Science",
      bio: "Promotes scientific inquiry and practical learning.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/06/40/76/56/240_F_640765633_8q8SdOrmE9vZDXiY7ILq5svYScKIqjgh.jpg",
      name: "Mr. Daniel Owusu",
      position: "Senior Mathematics Teacher",
      departments: "Mathematics",
      bio: "Dedicated to building strong problem-solving skills and confidence in students.",
    },
    {
      img: "https://t4.ftcdn.net/jpg/15/34/13/05/240_F_1534130586_7cnhMR2EHMkENzvHHlwkA4ETYeE3NEZg.jpg",
      name: "Ms. Gloria Mensah",
      position: "English Language Teacher",
      departments: "Languages",
      bio: "Passionate about literacy, communication skills, and creative expression.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/06/41/40/64/240_F_641406441_ZLun3NdRb4KjbHMcN5yCjjQw6sXy54bp.jpg",
      name: "Mr. Michael Asare",
      position: "Integrated Science Teacher",
      departments: "Science",
      bio: "Encourages curiosity and hands-on learning through experiments.",
    },
    {
      img: "https://t4.ftcdn.net/jpg/02/34/47/83/240_F_234478336_bRxx9eiWy3g9hrEwjE7Cibu4LgSGBHnc.jpg",
      name: "Mrs. Adjoa Boateng",
      position: "ICT Teacher",
      departments: "Information Technology",
      bio: "Equips students with digital skills for the modern world.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/15/74/27/02/240_F_1574270201_aIJAL6kZDhUB9vh8xK8uQBx148Tq8der.jpg",
      name: "Mr. Francis Nyarko",
      position: "Social Studies Teacher",
      departments: "Social Studies",
      bio: "Passionate about civic education and helping students understand society, leadership, and national values.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/15/85/16/28/240_F_1585162868_BShhL9g6QSij9XKVOuP6mhExcZex1zBj.jpg",
      name: "Ms. Evelyn Sarpong",
      position: "Creative Arts Teacher",
      departments: "Arts",
      bio: "Encourages creativity and self-expression through art, design, and hands-on practical activities.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/00/60/03/52/240_F_60035289_6Rs2cG12oxad6tTXNxvDYx1u57LwZ4eV.jpg",
      name: "Mr. John Dickson",
      position: "Music Director",
      departments: "Arts",
      bio: "Encourages creativity and self-expression through art, design, and hands-on practical activities.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/06/10/26/36/240_F_610263602_804QjQfTYjuioYRRLFBmkskpkui3oWtb.jpg",
      name: "Mr. Samuel Darko",
      position: "Accounts Officer",
      departments: "Finance",
      bio: "Responsible for financial records and school accounts.",
    },
    {
      img: "https://t4.ftcdn.net/jpg/15/54/69/19/240_F_1554691922_Ky7GvEd1bIHd9Yzf6wYCfizgrz1BzHpg.jpg",
      name: "Ms. Linda Owusu",
      position: "Front Desk Officer",
      departments: "Reception",
      bio: "First point of contact for parents, visitors, and students.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/13/09/98/72/240_F_1309987232_Xs1tmyCE7z8rxcRcwc1HpqUMsXsPLZNh.jpg",
      name: "Mr. Kwame Badu",
      position: "School Security Officer",
      departments: "Security",
      bio: "Ensures safety and security within the school premises.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/03/48/80/90/240_F_348809098_o6EY4nhHRPlkQKw2EYBcpa6N8EpTdwVI.jpg",
      name: "Mrs. Akosua Frimpong",
      position: "School Matron",
      departments: "Student Welfare",
      bio: "Provides care and support for students’ wellbeing.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/02/92/85/98/240_F_292859897_f5mcVebhWgmDKrFXu14qGUNGB34uBPfh.jpg",
      name: "Mr. Emmanuel Tetteh",
      position: "Maintenance Supervisor",
      departments: "Maintenance",
      bio: "Oversees cleanliness and upkeep of school facilities.",
    },
  ];

  const qualities = [
    {
      color: "text-blue-700",
      bg: "bg-blue-100",
      no: "150+",
      title: "Qualified Teachers",
    },
    {
      color: "text-green-700",
      bg: "bg-green-100",
      no: "25+",
      title: "Years Average Experience",
    },
    {
      color: "text-yellow-600",
      bg: "bg-yellow-100",
      no: "95%",
      title: "Advanced Degrees",
    },
    {
      color: "text-red-800",
      bg: "bg-red-100",
      no: "100%",
      title: "Certified Educators",
    },
  ];
  return (
    <>
      <div className="bg-red-800 py-5 px-10 pt-25 lg:py-25 flex items-center gap-2  justify-between">
        <div className="text-white mt-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Staff</h1>
          <p>Meet our dedicated team of educators and professionals</p>
        </div>
        <div className="bg-white w-25 h-25 md:w-46 md:flex items-center md:h-46 me-10 rounded-full hidden ">
          <img src="./public/logo2.png" className="object-cover" />
        </div>
      </div>

      <section className="section-padding">
        <div className="section-heading">
          <p className="uppercase text-sm font-medium text-yellow-600 tracking-widest mb-2">
            Our Team
          </p>
          <h1 className="section-title">Experienced Educators</h1>
          <p className="section-description">
            Our qualified and passionate staff members are committed to student
            success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {staffMembers.map((staffMember, index) => (
            <div
              key={index}
              className="bg-red-100 shadow-xl rounded-2xl overflow-hidden"
            >
              <img
                src={staffMember.img}
                alt={staffMember.position}
                className="h-60 w-full object-cover hover:scale-105 duration-500"
              />
              <div className="px-4 py-5 space-y-1.5">
                <h1 className="text-center text-2xl font-medium">
                  {staffMember.name}
                </h1>
                <p className="text-center text-red-800 font-medium">
                  {staffMember.position}
                </p>
                <p className="text-center text-gray-700 text-sm font-medium">
                  {staffMember.departments}
                </p>
                <p>{staffMember.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="section-heading">
          <h1 className="section-title">Why Our Team Stands Out</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {qualities.map((quality, idx) => (
            <div key={idx} className="p-5">
              <div
                className={`w-18 h-18 rounded-full flex items-center justify-center mb-5 mx-auto ${quality.bg}`}
              >
                <Award className={`${quality.color}`} size={30} />
              </div>
              <div className="text-center">
                <h1
                  className={`text-3xl md:text-4xl font font-bold mb-2 ${quality.color}`}
                >
                  {quality.no}
                </h1>
                <p className="text-gray-700 font-medium">{quality.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-gray-900">
        <div className="section-heading">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Join Our Team
          </h1>
          <p className="text-white text-lg">
            We're always looking for passionate educators to join our community
          </p>

          <button className="px-10 py-4 bg-red-800 mt-10 rounded-lg text-white font-medium text-lg">
            <a href="#">View Career Opportunities</a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Staff;
