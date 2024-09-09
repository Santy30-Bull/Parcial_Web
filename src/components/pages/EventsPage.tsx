import Carousel from '../Carousel';

interface Event {
    id: number;
    date: string;
    location: string;
    models: string[];
    products: string[];
}

export const EventPage = () => {
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
        {
            id: 3,
            date: '2024-10-15',
            location: 'New York, USA',
            models: ['Model E', 'Model F'],
            products: ['Product A', 'Product B'],
        },
        {
            id: 4,
            date: '2024-11-05',
            location: 'Tokyo, Japan',
            models: ['Model G', 'Model H'],
            products: ['Product C', 'Product D'],
        },
        {
            id: 5,
            date: '2024-11-20',
            location: 'Berlin, Germany',
            models: ['Model I', 'Model J'],
            products: ['Product E', 'Product F'],
        },
        {
            id: 6,
            date: '2024-12-02',
            location: 'London, UK',
            models: ['Model K', 'Model L'],
            products: ['Product G', 'Product H'],
        },
        {
            id: 7,
            date: '2024-12-15',
            location: 'Sydney, Australia',
            models: ['Model M', 'Model N'],
            products: ['Product I', 'Product J'],
        },
        {
            id: 8,
            date: '2025-01-10',
            location: 'Rio de Janeiro, Brazil',
            models: ['Model O', 'Model P'],
            products: ['Product K', 'Product L'],
        },
        {
            id: 9,
            date: '2025-01-25',
            location: 'Madrid, Spain',
            models: ['Model Q', 'Model R'],
            products: ['Product M', 'Product N'],
        },
        {
            id: 10,
            date: '2025-02-05',
            location: 'Toronto, Canada',
            models: ['Model S', 'Model T'],
            products: ['Product O', 'Product P'],
        },
        {
            id: 11,
            date: '2025-02-20',
            location: 'Seoul, South Korea',
            models: ['Model U', 'Model V'],
            products: ['Product Q', 'Product R'],
        },
        {
            id: 12,
            date: '2025-03-05',
            location: 'Dubai, UAE',
            models: ['Model W', 'Model X'],
            products: ['Product S', 'Product T'],
        },
        {
            id: 13,
            date: '2025-03-20',
            location: 'Los Angeles, USA',
            models: ['Model Y', 'Model Z'],
            products: ['Product U', 'Product V'],
        },
        {
            id: 14,
            date: '2025-04-10',
            location: 'Shanghai, China',
            models: ['Model AA', 'Model BB'],
            products: ['Product W', 'Product X'],
        },
        {
            id: 15,
            date: '2025-04-25',
            location: 'Mexico City, Mexico',
            models: ['Model CC', 'Model DD'],
            products: ['Product Y', 'Product Z'],
        },
    ];

    const carouselItems = events.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-lg p-6">
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
    ));

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Fashion Events</h1>
            
            {/* Usamos el componente de carrusel personalizado */}
            <Carousel items={carouselItems} />

            {/* La lista normal */}
            <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Featured Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
