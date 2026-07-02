const Gallery = () => {
  const pics = [
    {
      img: "https://t3.ftcdn.net/jpg/04/38/59/70/240_F_438597053_x6UPWNuxAtoB84HeKujiTEGeBfpxoefb.jpg",
      desc: "Students in classrooms",
    },
    {
      img: "https://www.bsu.edu/-/media/www/images/opengraph/sciencefair.jpg?sc_lang=en",
      desc: "Annual Science Fair 2025",
    },
    {
      img: "https://media.yourobserver.com/img/photos/2022/07/28/162452_standard_t1100.jpeg?31a214c4405663fd4bc7e33e8c8cedcc07d61559",
      desc: "Basketball Team",
    },
    {
      img: "https://t4.ftcdn.net/jpg/04/61/38/29/240_F_461382969_bfHUMSC9H5MajC0DlKbZ5SdcIrvIcaX9.jpg",
      desc: "Graduation Ceremony",
    },
    {
      img: "https://t4.ftcdn.net/jpg/10/08/87/61/240_F_1008876120_gzWYg26aY3DUfMhFngpoLJqWTWbTDL6R.jpg",
      desc: "Art Exhibition",
    },
    {
      img: "https://t3.ftcdn.net/jpg/00/66/16/58/240_F_66165856_Shf0ngCkhQHzU3M9J3Qx6VjRMU0XG2BZ.jpg",
      desc: "Chemistry Lab Session",
    },
    {
      img: "https://t4.ftcdn.net/jpg/02/52/15/49/240_F_252154999_pjw3Vrql17RjJBLbzDPJMppAXgvei4AN.jpg",
      desc: "Parent-Teacher Meeting",
    },
    {
      img: "https://i0.wp.com/gis.edu.gh/wp-content/uploads/2023/03/IMG_5591.jpg?resize=1024%2C683&ssl=1",
      desc: "Cultural Day Celebration",
    },
    {
      img: "https://www.hallfieldschool.co.uk/wp-content/uploads/2024/07/IMG_7705-scaled.jpg",
      desc: "Speech And Prize Giving Day",
    },
    {
      img: "https://t4.ftcdn.net/jpg/18/01/06/11/240_F_1801061154_I0cdBj5vQuwr4fA0JqhJsGOPjv6y6JpC.jpg",
      desc: "Examination",
    },
    {
      img: "https://t3.ftcdn.net/jpg/08/67/45/32/240_F_867453240_k6LjCx2pRmeGAKtJt2BBnbu8SFGPVG4v.jpg",
      desc: "Teacher Workshops",
    },
    {
      img: "https://t3.ftcdn.net/jpg/09/27/06/50/240_F_927065012_oxyOaDP2jXKuOB8bmxv96m7obFjFJZpg.jpg",
      desc: "PE Session",
    },
    {
      img: "https://t3.ftcdn.net/jpg/02/54/37/70/240_F_254377074_lsDHDGuNjsd7K5WVj5NfIU6yYxKdKalw.jpg",
      desc: "Drama Session",
    },
    {
      img: "https://t3.ftcdn.net/jpg/08/57/58/20/240_F_857582076_ai8sNYokCTY28bchVrwxndWOqcjZ3WeB.jpg",
      desc: "Robotics Club",
    },
    {
      img: "https://t4.ftcdn.net/jpg/16/48/05/89/240_F_1648058933_lYuLmw0HqwmHPOQQhQ3h3xc4DlY7khaK.jpg",
      desc: "ICT Lab Session ",
    },
  ];
  return (
    <>
      <div className="bg-red-800 py-5 px-10 pt-25 lg:py-25 flex items-center gap-2  justify-between">
        <div className="text-white mt-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Gallery</h1>
          <p>
            Explore moments that capture the vibrant life at Bright Future
            Academy
          </p>
        </div>
        <div className="bg-white w-25 h-25 md:w-46 md:flex items-center md:h-46 me-10 rounded-full hidden ">
          <img src="./public/logo2.png" className="object-cover" />
        </div>
      </div>

      <section className="section-padding">
        <div className="section-heading">
          <p className="uppercase text-sm text-yellow-600 font-medium mb-2 tracking-widest">
            Visual Stories
          </p>
          <h1 className="section-title">Campus Life in Pictures</h1>
          <p className="section-description">
            A glimpse into our daily activities, events, and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {pics.map((pic, idx) => (
            <div key={idx} className="shadow-xl overflow-hidden rounded-xl">
              <img
                src={pic.img}
                className="w-full h-60 object-cover hover:scale-105 transition-all duration-500"
              />
              <div className="p-5">
                <p className="font-medium">{pic.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="section-heading">
          <h1 className="section-title">Recent Highlights</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="rounded-xl shadow-xl overflow-hidden ">
            <img
              src="https://t4.ftcdn.net/jpg/03/87/23/97/240_F_387239712_hpuZw0kJ00ppuTIHXQqrzqmbxemG1QaZ.jpg"
              className="w-full h-80 hover:scale-105 transition duration-500"
            />
            <div className="bg-red-100 px-4 py-6">
              <h3 className="text-3xl font-bold mb-3 text-red-800">
                Annual Sports Day 2025
              </h3>
              <p className="text-gray-700 ">
                Students showcased their athletic talents in various
                competitions including track and field, basketball, and
                swimming.
              </p>
            </div>
          </div>
          <div className="rounded-xl shadow-xl overflow-hidden ">
            <img
              src="https://t4.ftcdn.net/jpg/09/79/82/79/240_F_979827910_RI9Lc4LQ01I0YAhLKwtAaR9okPlHjX3a.jpg"
              className="w-full h-80 hover:scale-105 transition duration-500"
            />
            <div className="bg-red-100 px-4 py-6">
              <h3 className="text-3xl font-bold mb-3 text-red-800">
                Science Exhibition 2025
              </h3>
              <p className="text-gray-700 ">
                Our students presented innovative projects demonstrating their
                understanding of scientific principles and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
