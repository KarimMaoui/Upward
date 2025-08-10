import { useState } from "react";
import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";

const ServicesB2B = () => {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  const [selectedDate, setSelectedDate] = useState(null);

  const courseFormats = [
    "In-person workshops",
    "Virtual training sessions",
    "Hybrid learning programs",
    "Custom corporate packages",
    "Leadership development programs",
    "Team communication training",
  ];

  const useCases = [
    {
      title: "Executive Communication",
      description:
        "Help senior leaders improve their presentation skills and executive presence.",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Sales Team Training",
      description:
        "Enhance sales team communication and negotiation skills for better results.",
      image: "/api/placeholder/300/200",
    },
  ];

  const generateCalendarDays = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Get the first day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Get the number of days in the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: "", date: null, available: false, isEmpty: true });
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const isToday = date.toDateString() === currentDate.toDateString();
      const isPast = date < currentDate;

      days.push({
        day,
        date: date,
        available: !isPast && Math.random() > 0.3, // Random availability for future dates
        isToday,
        isPast,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const currentDate = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services (B2B)
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your organization's communication culture with our
            comprehensive B2B training and coaching solutions.
          </p>
        </div>
      </section>

      {/* Course Formats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Course formats & delivery methods
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4">
                {courseFormats.map((format, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                    <span className="text-lg text-gray-700">{format}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-gray-600 mb-6">
                  Our flexible delivery methods ensure that your team can access
                  high-quality communication training regardless of location or
                  schedule constraints. We work with you to create a customized
                  program that fits your organization's needs.
                </p>
                <Link to="/contact" className="btn-primary">
                  Get Custom Quote
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Course Formats Visual
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Real Use Cases Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Real use cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">
                    Use Case {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              These are just a few examples of how we've helped organizations
              improve their communication effectiveness. Every company is
              unique, and we tailor our approach to meet your specific
              challenges and goals.
            </p>
            <Link to="/case-studies" className="btn-secondary">
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Book a call with us today
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Schedule Your Consultation
              </h3>
              <p className="text-gray-600 mb-8">
                Ready to transform your organization's communication skills?
                Book a free consultation call to discuss your needs and learn
                how we can help you achieve your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Free 30-minute consultation
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                  <span className="text-gray-700">Customized proposal</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-4"></div>
                  <span className="text-gray-700">No commitment required</span>
                </div>
              </div>
            </div>

            {/* Calendar Component */}
            {/* <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-gray-900">
                  {monthNames[currentDate.getMonth()]}{" "}
                  {currentDate.getFullYear()}
                </h4>
              </div>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-sm font-medium text-gray-500 py-2"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => day.date && setSelectedDate(day.date)}
                    className={`p-2 text-sm rounded-lg transition-colors ${
                      day.isEmpty
                        ? "invisible"
                        : selectedDate &&
                          selectedDate.toDateString() ===
                            day.date?.toDateString()
                        ? "bg-black text-white"
                        : day.isToday
                        ? "bg-blue-100 text-blue-900 font-semibold"
                        : day.isPast
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : day.available
                        ? "bg-white text-gray-900 hover:bg-gray-100"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={day.isEmpty || day.isPast || !day.available}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
              {selectedDate && (
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Selected: {selectedDate.toLocaleDateString()}
                  </p>
                  <Link to="/book-session" className="btn-primary w-full">
                    Book This Date
                  </Link>
                </div>
              )}
            </div> */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-gray-900">
                  Book a time directly via our calendar
                </h4>
              </div>
              <div className="h-[800px]">
                <InlineWidget url={calendlyUrl} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesB2B;
