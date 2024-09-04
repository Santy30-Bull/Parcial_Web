interface Event {
    id: number;
    date: string;
    location: string;
    models: string[];
    products: string[];
}

// Componente EventPage
export const EventPage = () => {
    // Array de eventos
    const events: Event[] = [
        {
            id: 1,
            date: '2024-09-15',
            location: 'Paris, France',
            models: ['Model A', 'Model B'],
            products: ['Product X', 'Product Y'],
        },
        {
            id: 2,
            date: '2024-10-01',
            location: 'Milan, Italy',
            models: ['Model C', 'Model D'],
            products: ['Product Z', 'Product W'],
        },
        // Añadir más eventos según sea necesario
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Fashion Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-xl font-semibold mb-2">{event.date}</h2>
                            <p className="text-gray-600 mb-4">{event.location}</p>
                            <h3 className="text-lg font-semibold">Participating Models:</h3>
                            <ul className="list-disc list-inside mb-4">
                                {event.models.map((model, index) => (
                                    <li key={index} className="text-gray-700">
                                        {model}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-lg font-semibold">Products Showcased:</h3>
                            <ul className="list-disc list-inside">
                                {event.products.map((product, index) => (
                                    <li key={index} className="text-gray-700">
                                        {product}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventPage;
