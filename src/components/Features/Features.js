const features = [
    {
        id: 0,
        title: 'Fast & Easy Booking',
        description:
            'Book your car online or offline. Follow the easy process to book your car online. Or just call us any time from anywhere',
    },
    {
        id: 1,
        title: 'Many Pickup Location',
        description:
            'We have an extensive number of cars that will be available to pick you up from any location throughout the country',
    },
    {
        id: 2,
        title: 'Satisfied Customers',
        description:
            "We have 70,000+ happy customers and it's increasing. View our review section to get their feedback about out service",
    },
];

function Features() {
    return (
        <section className="p-10">
            <h1 className="text-2xl font-bold text-center mb-6">Why Choose HirenGo?</h1>
            <div className="grid grid-cols-3 gap-x-9">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className="ease duration-300 rounded-[2rem] p-5 hover:shadow-[0_5px_24px_0_rgba(148,163,184,0.6)]"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="bg-sky-100 w-20 h-20">
                                <div className="flex h-1/2">
                                    <div className="w-1/2 bg-sky-400"></div>
                                    <div className="w-1/2"></div>
                                </div>
                                <div className="flex h-1/2">
                                    <div className="w-1/2"></div>
                                    <div className="w-1/2 bg-sky-400"></div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="text-slate-600 text-sm mt-4">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
