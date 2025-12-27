import { Facebook, Instagram, Twitter, Youtube, MapPin, PhoneCall, Mail } from "lucide-react"
const Footer = () => {
    return (
        <footer className="footer p-8 md:p-15 bg-red-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
                <div className="w-full">
                    <div className="logo flex items-center gap-2 text-white mb-2">
                        <i className="fa-solid fa-scissors rotate-270 text-3xl"></i>
                        <a href="#" className="text-3xl font-bold">BrightFuture Academy </a>
                    </div>
                    <p className="text-base leading-relaxed text-gray-300 mb-4">We are committed to providing quality education, nurturing discipline, and empowering students with the skills needed for a successful future.</p>

                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/me/"
                            className="w-10 h-10 bg-gray-200 border border-white flex items-center justify-center text-xl text-red-800 rounded-full hover:text-white hover:bg-red-800 transition duration-500"><Facebook /></a>
                        <a href="#"
                            className="w-10 h-10 bg-gray-200 border border-white flex items-center justify-center text-xl text-red-800 rounded-full hover:text-white hover:bg-red-800 transition duration-500"><Twitter /></a>
                        <a href="https://www.instagram.com/mawunyo.anani/"
                            className="w-10 h-10 bg-gray-200 border border-white flex items-center justify-center text-xl text-red-800 rounded-full hover:text-white hover:bg-red-800 transition duration-500"><Instagram /></a>
                        <a href="https://www.youtube.com/@MawunyoAnani-vz1bs"
                            className="w-10 h-10 bg-gray-200 border border-white flex items-center justify-center text-xl text-red-800 rounded-full hover:text-white hover:bg-red-800 transition duration-500"><Youtube /></a>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="text-gray-300 space-y-2">
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="/home">home</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="/about">about us</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="/admissions">admissions</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="/facilities">facilities</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="/staff">staff</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="/gallery">gallery</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="/events">events</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="/contact">contact us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-2xl font-semibold text-white mb-4">Resources</h4>
                    <ul className="text-gray-300 space-y-2">
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="#home">admission forms</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="#about">school calendar</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="#services">prospectus</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="#gallery">book a tour</a></li>
                        <li className="text-base capitalize hover:text-black transition duration-500"><a href="#booking"></a></li>
 
                    </ul>
                </div>

                <div>
                    <h4 className="text-2xl font-semibold text-white mb-4">Contact Us</h4>
                    <ul className="space-y-5">
                        <li className="text-gray-300 flex items-center gap-3"><MapPin className="text-white" /> Achimota, Accra Ghana</li>
                        <li className="text-gray-300 flex items-center gap-3"><PhoneCall className="text-white" />(+233) 245 494 534</li>
                        <li className="text-gray-300 flex items-center gap-3"><Mail className="text-white" />brightfutureacademy@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white mt-10 pt-6 text-center text-white">
                <p>&copy; 2025 BrightFuture Academy. All Rights Reserved</p>
            </div>
        </footer>)
}

export default Footer
