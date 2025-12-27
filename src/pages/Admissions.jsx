import { Calendar, CheckCircle, Clock, FileText, LucideCircleDollarSign, NotepadText } from "lucide-react"

const Admissions = () => {

    const steps = [
        {
            step: 1,
            icon: <FileText className="text-blue-700" size={25} />,
            h: 'Submit Application',
            d: 'Complete the online application form with student information',
            bg1: '#193cb8',
            bg2: "#dbdbffff"
        },
        {
            step: 2,
            icon: <Calendar className="text-green-700" size={25} />,
            h: 'Schedule Tour',
            d: 'Book a campus visit and meet our staff and teachers',
            bg1: '#016630',
            bg2: '#ccffe0ff'
        },
        {
            step: 3,
            icon: <NotepadText className="text-yellow-600" size={25} />,
            h: 'Assessment',
            d: 'Complete age-appropriate evaluation and interview',
            bg1: '#d08700',
            bg2: '#fcf3d9ff'
        },
        {
            step: 4,
            icon: <CheckCircle className="text-red-800" size={25} />,
            h: 'Enrollment',
            d: 'Receive decision and complete enrollment process',
            bg1: '#9f0712',
            bg2: "#fae5e5ff"
        }
    ]

    const admreqs = [
        {
            req: 'Completed Application Form', desc: 'Fill out all required fields in the online application'
        },
        {
            req: 'Birth Certificate', desc: 'Official copy of student birth certificate'
        },
        {
            req: 'Academic Records', desc: 'Previous school transcripts and report cards'
        },
        {
            req: 'Immunization Records', desc: 'Up-to-date vaccination documentation'
        },
        {
            req: 'Passport Photos', desc: 'Two recent passport-sized photographs'
        },
        {
            req: 'Parent/Guardian ID', desc: 'Valid identification documents'
        }
    ]

    const impdts = [
        {
            icon: <Calendar size={25} />, name: 'Application Period Opens', day: 'January 15'
        },
        {
            icon: <Clock size={25} />, name: "Application Deadline", day: 'March 31'
        },
        {
            icon: <FileText size={25} />, name: 'Admission Decisions Released', day: 'April 15'
        },
        {
            icon: <CheckCircle size={25} />, name: 'Enrollment Confirmation Due', day: 'May 31',
        }
    ]

    const fees = [
        { sch: 'Primary School', grade: 'Primary 1-6', price: 'GH₵ 8,500', bg: "#9f0712" },
        { sch: 'Junior High School', grade: 'JHS 1-3', price: 'GH₵ 9,500', bg: '#16a34a' },
        { sch: 'Senior High School', grade: 'SHS 1-3', price: 'GH₵ 12,000', bg: '#ca8a04' }
    ]
    return (
        <>
            <div className="bg-red-800 py-5 px-10 pt-25 lg:py-25 flex items-center gap-2  justify-between">
                <div className="text-white mt-5">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Admissions</h1>
                    <p>Join our community of learners and embark on an exciting educational journey</p>
                </div>
                <div className="bg-white w-25 h-25 md:w-46 md:flex items-center md:h-46 me-10 rounded-full hidden ">
                    <img src="./src/assets/logo2.png" className="object-cover" />
                </div>
            </div>

            <section className="section-padding">
                <div className="section-heading">
                    <span className="text-yellow-600 text-sm font-medium uppercase tracking-widest">Simple Process</span>
                    <h1 className="section-title">How To Apply</h1>
                    <p className="section-description">Follow these steps to complete your application</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {steps.map((step) => (
                        <div key={step} className=" relative border border-gray-300 bg-white rounded-2xl px-5 py-7 flex flex-col gap-3">
                            <div className="absolute w-7 h-7 rounded-full text-center text-white font-medium -top-4" style={{ backgroundColor: step.bg1 }}>{step.step}</div>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: step.bg2 }}>
                                {step.icon}
                            </div>
                            <h1 className="font-medium text-lg mt-2">{step.h}</h1>
                            <p className="text-gray-500 lg:text-sm">{step.d}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="bg-red-800 px-10 py-3 text-white font-medium text-lg rounded-lg">
                        <a href="#" className="">Start Your Application</a>
                    </button>
                </div>
            </section>

            <section className="section-padding">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl font-bold">Admission Requirements</h1>
                            {admreqs.map((admreq) => (
                                <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4">
                                    <CheckCircle className="text-green-500" />
                                    <div className="flex flex-col">
                                        <h1 className="font-medium text-lg">{admreq.req}</h1>
                                        <p className=" text-gray-500 lg:text-sm">{admreq.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div>
                            <h1 className="text-3xl font-bold mb-4">Important Dates</h1>
                            <div className="bg-red-100 flex flex-col gap-4 px-5 py-7 rounded-xl">
                                {impdts.map((item) => (
                                    <div className="bg-white p-4 rounded-lg flex gap-4 items-center">
                                        <div className="bg-red-800 w-12 h-12 flex rounded-xl items-center justify-center text-white">
                                            {item.icon}
                                        </div>

                                        <div className="flex flex-col">
                                            <h1 className="text-lg font-medium">{item.name}</h1>
                                            <span className="text-gray-500">{item.day}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border border-yellow-500 bg-amber-50 rounded-2xl px-5 py-7 mt-10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Clock className="text-yellow-600" />
                                    <h3 className="font-medium">Rolling Admissions</h3>
                                </div>
                                <p className="lg:text-sm text-gray-500">We accept applications throughout the year based on availability. Apply early to secure your spot!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="section-padding">
                <div className="section-heading">
                    <h1 className="section-title">Tuition & Fees</h1>
                    <p className="section-description">Transparent pricing for quality education</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {fees.map((item) => (
                        <div className="rounded-xl overflow-hidden shadow-xl">
                            <div className="px-5 py-7 text-center text-white" style={{backgroundColor: item.bg}}>
                                <h1 className="font-bold text-2xl">{item.sch}</h1>
                                <p className="mt-1">{item.grade}</p>
                            </div>
                            <div className="p-4 flex flex-col gap-6 mt-2">
                                <div className="text-center">
                                    <h3 className="font-bold text-3xl">{item.price}</h3>
                                    <p className="text-gray-500 mt-1">per year</p>
                                </div>
                                <ul className="space-y-3 text-sm px-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-700" size={17} />
                                        <span className="text-gray-500">Registration fee included</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-700" size={17} />
                                        <span className="text-gray-500">Course materials</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-700" size={17} />
                                        <span className="text-gray-500">Library access</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="text-green-700" size={17} />
                                        <span className="text-gray-500">Technology resources</span>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-2xl flex gap-4 px-4 py-8 mt-10">
                    <div>
                        <LucideCircleDollarSign className="text-green-700" size={35} />
                    </div>
                    <div>
                        <h4 className="font-medium">Financial Aid Available</h4>
                        <p className="mt-2">We believe that quality education should be accessible to all. Merit-based scholarships and need-based financial aid are available for qualified families.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Admissions