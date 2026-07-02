import { useState } from "react";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted:", formData);
  };

  const contactDetails = [
    {
      icon: <MapPin className="text-blue-600" size={25} />,
      h: "Address",
      p1: "123 Education Street",
      p2: "Learning District",
      p3: "City, State 12345",
      bg: "bg-blue-100",
    },
    {
      icon: <Phone className="text-green-600" size={25} />,
      h: "Phone",
      p1: "Main: (+233)-123-456-789",
      p2: "Admissions: (+233)-123-456-789",
      p3: "Admissions: (+233)-123-456-789",
      bg: "bg-green-100",
    },
    {
      icon: <Mail className="text-yellow-600" size={25} />,
      h: "Email",
      p1: "General: info@brightfutureaca.edu",
      p2: "Admissions: admi@brightfutureaca.edu",
      p3: "Support: support@brightfutureaca.edu",
      bg: "bg-yellow-100",
    },
    {
      icon: <Clock className="text-red-800" size={25} />,
      h: "Office Hours",
      p1: "Monday - Friday: 8:00AM - 4:00PM",
      p2: "Saturday: 9:00 AM - 12:00 PM",
      p3: "Sunday: Closed",
      bg: "bg-red-100",
    },
  ];
  return (
    <>
      <div className="bg-red-800 py-5 px-10 pt-25 lg:py-25 flex items-center gap-2  justify-between">
        <div className="text-white mt-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p>
            We'd love to hear from you. Reach out with any questions or
            concerns.
          </p>
        </div>
        <div className="bg-white w-25 h-25 md:w-46 md:flex items-center md:h-46 me-10 rounded-full hidden ">
          <img src="./public/logo2.png" className="object-cover" />
        </div>
      </div>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className=" space-y-2 mb-8">
              <p className="uppercase text-sm font-medium text-yellow-600">
                Get In Touch
              </p>
              <h3 className="text-4xl font-bold mb-4">Send Us A Message</h3>
              <p className="section-description">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} action="" className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-gray-700 text-sm font-semibold mb-2"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-800 focus:outline-none transition-colors"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-gray-700 text-sm font-semibold mb-2"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-800 focus:outline-none transition-colors"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-gray-700 text-sm font-semibold mb-2"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-800 focus:outline-none transition-colors"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-gray-700 text-sm font-semibold mb-2"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-800 focus:outline-none transition-colors"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="text-gray-700 text-sm font-semibold mb-2"
                >
                  Subject*
                </label>
                <select
                  name="subject"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-800 focus:outline-none transition-colors"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Admissions">Admissions</option>
                  <option value="Facilities">Facilities</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-gray-700 text-sm font-semibold mb-2"
                >
                  Message*
                </label>
                <textarea
                  rows={5}
                  name="message"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-800 focus:outline-none transition-colors resize-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                className="bg-red-800 py-4 rounded-lg w-full text-white text-lg font-semibold flex items-center justify-center gap-2"
                type="submit"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
          <div>
            <div className=" space-y-2 mb-8">
              <p className="uppercase text-sm font-medium text-yellow-600">
                Contact Information
              </p>
              <h3 className="text-4xl font-bold mb-4">Reach Us Directly</h3>
            </div>
            <div className="flex flex-col gap-7">
              {contactDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="border-2 border-gray-200 p-5 rounded-xl"
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.bg}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.h}</h4>
                      <div className="text-gray-600">
                        <p>{item.p1}</p>
                        <p>{item.p2}</p>
                        <p>{item.p3}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-700 text-white flex items-center justify-center rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 text-white flex items-center justify-center rounded-lg hover:bg-blue-500"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-700 text-white flex items-center justify-center rounded-lg hover:bg-pink-800"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-lg hover:bg-red-700"
                >
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-heading">
          <h1 className="section-title">Find Us Here</h1>
          <p className="section-description">Visit our beautiful campus</p>
        </div>
        <div className="w-full h-60">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15882.757682281388!2d-0.24464477388544267!3d5.6128021648733055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf996579ca9ebd%3A0x99822538ef7ed82f!2sAchimota!5e0!3m2!1sen!2sgh!4v1766708197503!5m2!1sen!2sgh"
            width="1200"
            style={{ border: 0 }}
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="section-padding bg-gray-900">
        <div className="section-heading">
          <h3 className="section-title">Schedule a Campus Tour</h3>
          <p className="text-white text-lg">
            Experience our facilities firsthand and meet our staff and students
          </p>
        </div>
        <div className="text-center">
          <a
            href=""
            className="bg-red-800 py-4 px-10 text-lg text-white rounded-lg"
          >
            Book a Tour
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
