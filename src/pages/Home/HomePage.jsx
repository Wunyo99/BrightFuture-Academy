import Hero from "../../components/Hero"
import { ArrowRight, BookOpen, Building2Icon, FlaskConical, GraduationCap, Shield, UserCheck, Users2 } from "lucide-react"
import Testimonials from "./Testimonials"
import Events from "../../components/Events"
const Home = () => {

    const wcos = [
        {
            icon: <Building2Icon className="text-red-800" size={35} />,
            name: 'Modern Facilities',
            description: 'BrightFuture Academy provides students with fully equipped classrooms, digital learning tools, science and computer laboratories, a well-stocked library, and safe recreational areas designed to support effective and engaging learning.',
            bg: "#fae5e5ff",
            text: '#9f0712',
            border: '#9f0712'
        },
        {
            icon: <UserCheck className="text-green-800" size={35} />,
            name: 'Qualified Teachers',
            description: 'Our team of highly trained, experienced, and dedicated educators ensures that every student receives personalized attention, strong academic support, and guidance that nurtures confidence and success.',
            bg: "#ccffe0ff",
            text: '#016630',
            border: '#016630'

        },
        {
            icon: <FlaskConical className="text-yellow-600" size={35} />,
            name: 'Practical Learning',
            description: 'We go beyond textbooks by offering hands-on projects, STEM activities, fieldwork, and real-world problem-solving sessions that help students apply knowledge and develop critical skills.',
            bg: "#fcf3d9ff",
            text: '#d08700',
            border: '#d08700'

        },
        {
            icon: <Shield className="text-blue-800" size={35} />,
            name: 'High Discipline',
            description: 'We maintain a structured and respectful learning environment that promotes good behavior, responsibility, punctuality, and strong moral values essential for students’ future success.',
            bg: "#dbdbffff",
            text: '#193cb8',
            border: '#193cb8'
        }
    ]

    return (
        <>
            <Hero />
            <section className="section-padding">
                <div className="section-heading">
                    <h1 className="section-title">Why Choose Our School</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
                    {wcos.map((item) => (
                        <div key={item.name} className="card border bg-white flex flex-col px-5 shadow-xl gap-6 py-10 rounded-xl" style={{ borderColor: item.border }}>
                            <div className="w-15 h-15 flex items-center justify-center rounded-xl" style={{ backgroundColor: item.bg }}>
                                {item.icon}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold mb-4" style={{ color: item.text }}>{item.name}</h1>
                                <p className="text-base">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section-padding">
                <div className="section-heading">
                    <span className="uppercase text-sm font-medium text-yellow-600 tracking-widest ">programs</span>
                    <h1 className="section-title mt-2">Our Academic Programs</h1>
                    <p className="section-description">Comprehensive education from primary to high school with a focus on holistic development.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl px-8 py-6 hover:shadow-2xl transition-all duration-500">
                        <div className="flex flex-col gap-3">
                            <div className="bg-blue-700 w-15 h-15 flex items-center justify-center rounded-lg">
                                <BookOpen className="text-white" size={30} />
                            </div>
                            <h1 className="font-bold text-2xl py-2">Primary School</h1>
                            <p className="">Primary 1 - 3: Building strong foundations in core subjects with creative learning approaches.</p>
                            <div className="flex gap-1 items-center text-blue-800 font-medium">
                                <a href="" className="">Apply Now </a>
                                <ArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="bg-linear-to-br from-green-50 to-green-100 rounded-2xl shadow-xl px-8 py-6 hover:shadow-2xl transition-all duration-500">
                        <div className="flex flex-col gap-3">
                            <div className="bg-green-700 w-15 h-15 flex items-center justify-center rounded-lg">
                                <Users2 className="text-white" size={30} />
                            </div>
                            <h1 className="font-bold text-2xl py-2">Middle School</h1>
                            <p className="">Primary 4 - 6: Encouraging critical thinking and exploring diverse academic interests.</p>

                            <div className="flex gap-1 items-center text-green-800 font-medium">
                                <a href="" className="">Apply Now </a>
                                <ArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="bg-linear-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-xl px-8 py-6 hover:shadow-2xl transition-all duration-500">
                        <div className="flex flex-col gap-3">
                            <div className="bg-yellow-600 w-15 h-15 flex items-center justify-center rounded-lg">
                                <GraduationCap className="text-white" size={30} />
                            </div>
                            <h1 className="font-bold text-2xl py-2">High School</h1>
                            <p className="">JHS 1 - JHS 3: Preparing students for college and future careers with advanced curriculum.</p>

                            <div className="flex gap-1 items-center text-yellow-600 font-medium">
                                <a href="" className="">Apply Now </a>
                                <ArrowRight />
                            </div>                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                    <div>
                        <div className="bg-white shadow-lg rounded-2xl p-10 lg:mt-25 ">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-25 rounded-full">
                                    <img src="https://t4.ftcdn.net/jpg/06/51/57/09/240_F_651570931_7gVLS9wvXEy1SKpScuZtFaOf8vjgXiof.jpg" className="h-25 rounded-full object-cover " />
                                </div>
                                <div>
                                    <span className="uppercase text-sm text-gray-500">Principal's Message</span>
                                    <h3 className="font-medium text-lg">Dr. Mawunyo Anani</h3>
                                </div>
                            </div>
                            <p className="mb-5">"Welcome to BrightFuture Academy, where we believe every child has unique potential waiting to be unlocked. Our dedicated team of educators works tirelessly to create an environment where students not only excel academically but also grow as compassionate, responsible citizens.</p>
                            <p>"We are committed to providing a safe, inclusive, and inspiring learning environment that prepares our students for the challenges and opportunities of tomorrow."</p>
                        </div>
                    </div>
                    <div>
                        <span className="text-red-800 uppercase font-medium">What's happening</span>
                        <h1 className="font-bold text-4xl mb-10">Upcoming Events</h1>
                        <div>
                            <div className="flex flex-col gap-3">

                                <Events limit={4} />
                                    <a href="/events" className="font-medium text-center text-white bg-red-800 p-3 rounded-lg mt-4 cursor-pointer hover:bg-red-900 transition duration-300">View All Events</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="section-heading">
                    <h1 className="section-title"> What They Say About Us</h1>
                    <p className="section-description">Real experiences from students, parents, and teachers who trust BrightFuture Academy.</p>
                </div>
                <Testimonials />
            </section>
        </>
    )
}

export default Home