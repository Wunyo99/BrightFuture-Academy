import {
  BookOpen,
  Calendar,
  Film,
  Megaphone,
  MoveRight,
  Trophy,
  Users2,
} from "lucide-react";
import Events from "../components/Events";

const EventsPage = () => {
  const news = [
    {
      type: "Achievement",
      icon: <Trophy size={30} />,
      title: "Students Win National Science Competition",
      date: "March 18, 2025",
      desc: "Our high school team secured first place at the National Science Olympiad, competing against 150 schools nationwide.",
      color: "text-red-800",
      bg: "bg-red-800",
    },
    {
      type: "Announcement",
      icon: <Megaphone size={30} />,
      title: "New STEM Lab Opening Next Month",
      date: "March 15, 2025",
      desc: "State-of-the-art STEM laboratory with advanced robotics and AI learning equipment will open in April.",
      color: "text-blue-500",
      bg: "bg-blue-500",
    },
    {
      type: "Event",
      icon: <BookOpen size={30} />,
      title: "Annual Book Fair Success",
      date: "March 10, 2025",
      desc: "Over 2,000 books were sold during our annual book fair, with proceeds supporting the school library expansion.",
      color: "text-green-600",
      bg: "bg-green-600",
    },
    {
      type: "Workshop",
      icon: <Users2 size={30} />,
      title: "Parent Workshop on Digital Safety",
      date: "March 8, 2025",
      desc: "Successful workshop attended by 200+ parents focusing on online safety and digital citizenship for students.",
      color: "text-yellow-600",
      bg: "bg-yellow-600",
    },
    {
      type: "Performance",
      icon: <Film size={30} />,
      title: "Drama Club Presents Spring Musical",
      date: "March 5, 2025",
      desc: 'Students showcase their theatrical talents in a brilliant production of "The Sound of Music" this weekend.',
      color: "text-indigo-600",
      bg: "bg-indigo-600",
    },
    {
      type: "Sports",
      icon: <Trophy size={30} />,
      title: "Football Team Wins Regional Championship",
      date: "March 1, 2025",
      desc: "Bright Future football team clinches regional title after an undefeated season.",
      color: "text-teal-600",
      bg: "bg-teal-600",
    },
  ];
  return (
    <>
      <div className="bg-red-800 py-5 px-10 pt-25 lg:py-25 flex items-center gap-2  justify-between">
        <div className="text-white mt-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">News & Events</h1>
          <p>
            Stay updated with the latest happenings at Bright Future Academy
          </p>
        </div>
        <div className="bg-white w-25 h-25 md:w-46 md:flex items-center md:h-46 me-10 rounded-full hidden ">
          <img src="./public/logo2.png" className="object-cover" />
        </div>
      </div>

      <section className="section-padding">
        <div className="section-heading">
          <p className="uppercase text-sm font-medium text-yellow-600 tracking-widest mb-2">
            Latest Updates
          </p>
          <h1 className="section-title">Recent News</h1>
          <p className="section-description">
            Celebrating achievements and sharing important announcements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl overflow-hidden"
            >
              <div className={`${item.bg} p-6 `}>
                <div className="flex justify-between items-center mb-4 text-white">
                  <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                  <p>{item.icon}</p>
                </div>
                <h4 className="text-white font-bold text-xl">{item.title}</h4>
              </div>
              <div className="p-5 space-y-3">
                <div className="text-sm flex gap-2 items-center text-gray-600">
                  <Calendar size={15} />
                  <p>{item.date}</p>
                </div>
                <p className="text-gray-600">{item.desc}</p>

                <div className={`flex items-center gap-2 ${item.color}`}>
                  <a href="#" className="font-medium">
                    Read More
                  </a>
                  <MoveRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="section-heading">
          <p className="uppercase text-sm font-medium text-yellow-600 tracking-widest mb-2">
            Mark Your Calendar
          </p>
          <h1 className="section-title">Upcoming Events</h1>
          <p className="section-description">
            Join us for exciting activities and important school events
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <Events isEvPage={true} />
        </div>
      </section>
    </>
  );
};

export default EventsPage;
