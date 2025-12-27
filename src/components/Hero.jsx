import { MoveRight } from "lucide-react"
const Hero = () => {
    return (

        <section id="home" className="relative h-screen flex items-center justify-center md:justify-start">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `
                          linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                    url('https://t4.ftcdn.net/jpg/08/57/54/15/240_F_857541523_IX92bZKfFjJy0e64Gy9sY6cCvJBlIGJ7.jpg')`,
                }}>

            </div>

            <div className="relative max-w-2xl px-15 text-center md:text-start space-y-10">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-5">Welcome to<span className="text-red-800"> Bright Future Academy</span></h1>
                <p className="text-white text-xl">Empowering students to reach their full potential through excellence in education, character development, and innovation</p>

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5">
                    <button className="flex items-center gap-2 bg-yellow-500 py-5 px-10 rounded-2xl text-black font-medium hover:bg-yellow-600">
                        <a href="">Apply Now</a>
                        <MoveRight />
                    </button>

                    <button className="bgbackdrop-blur-sm py-5 px-10 rounded-2xl hover:bg-white/20 text-white font-medium border-2 border-white transition-colors">
                        <a href="">Book a Tour</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero