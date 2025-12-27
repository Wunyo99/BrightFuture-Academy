import { Clock, MapPin } from "lucide-react"
const Events = ({ isEvPage = false, limit }) => {
    const events = [
        {
            id: 1, month: 'FEB', day: '15', activity: 'Spring Science Fair', time: '9:00 AM - 3:00 PM', venue: 'Main Auditorium'
        },
        {
            id: 2, month: 'FEB', day: '22', activity: 'Parent-Teacher Conference', time: '2:00 AM - 6:00 PM', venue: 'Main Auditorium'
        },
        {
            id: 3, month: 'MAR', day: '10', activity: 'Annual Sports Day', time: '8:00 AM - 4:00 PM', venue: 'Sports Complex'
        },
        {
            id: 4, month: 'MAR', day: '27', activity: 'Art Exhibition', time: '10:00 AM - 5:00 PM', venue: 'Art Gallery'
        },
        {
            id: 5, month: 'APR', day: '07', activity: 'Career Day', time: '10:00 AM - 4:00 PM', venue: 'School Park'
        },
        {
            id: 6, month: 'APR', day: '16', activity: 'Debate Contest', time: '10:00 AM - 2:00 PM', venue: 'Assembly Hall'
        },
        {
            id: 7, month: 'APR', day: '25', activity: 'Cultural Day', time: '10:00 AM - 4:00 PM', venue: 'Main Auditorium'
        },
        {
            id: 8, month: 'MAY', day: '10', activity: 'Excursion', time: '10:00 AM - 4:00 PM', venue: 'Elmina Castle'
        },
        {
            id: 9, month: 'MAY', day: '17', activity: 'End of Term Party', time: '10:00 AM - 4:00 PM', venue: 'School Park'
        }
    ];

    const displayedEvents = limit ? events.slice(0, limit) : events;

    return (
        <>
            {displayedEvents.map(event => (
                <div key={event.id} className={`border border-gray-300 p-5 rounded-2xl duration-300  ${isEvPage ? "hover:border-red-800 border-2 hover:shadow-2xl bg-red-50 " : " bg-white hover:shadow-lg"}`}>
                    <div className="flex items-center gap-4">
                        <div className="bg-red-800 text-white flex flex-col w-15 h-18 justify-center items-center rounded-xl">
                            <p className="text-sm">{event.month}</p>
                            <p className="font-bold text-3xl">{event.day}</p>
                        </div>
                        <div>
                            <h3 className="font-medium">{event.activity}</h3>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Clock size={15} />
                                <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <MapPin size={15} />
                                <span>{event.venue}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Events