interface Model {
    id: number;
    name: string;
    description: string;
    photos: string[];
    portfolio: string;
}

const models: Model[] = [
    {
        id: 1,
        name: 'Jane Doe',
        description: 'An experienced runway model from New York.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/jane-doe',
    },
    {
        id: 2,
        name: 'John Smith',
        description: 'A versatile model with a passion for fashion photography.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/john-smith',
    },
    {
        id: 3,
        name: 'Alice Johnson',
        description: 'A young model with a bright future in the industry.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/alice-johnson',
    },
    {
        id:4,
        name: 'Bob Brown',
        description:'Holi',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/bob-brown',
    },
    // Add more models as needed
];

export const ModelsPage = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Models Directory</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {models.map((model) => (
                    <div key={model.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">{model.name}</h2>
                            <p className="text-gray-600 mb-4">{model.description}</p>
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                {model.photos.map((photo, index) => (
                                    <img
                                        key={index}
                                        src={photo}
                                        alt={`${model.name} photo ${index + 1}`}
                                        className="object-cover w-full h-32 rounded-lg"
                                    />
                                ))}
                            </div>
                            <a
                                href={model.portfolio}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                View Portafolio
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModelsPage;
