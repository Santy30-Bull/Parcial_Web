import Carousel from '../Carousel';
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
        id: 4,
        name: 'Bob Brown',
        description: 'A male model known for his strong runway presence.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/bob-brown',
    },
    {
        id: 5,
        name: 'Eva Green',
        description: 'A well-established model with international campaigns.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/eva-green',
    },
    {
        id: 6,
        name: 'Carlos Rivera',
        description: 'A rising male model with a passion for high fashion.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/carlos-rivera',
    },
    {
        id: 7,
        name: 'Lena White',
        description: 'A runway star known for her elegance and grace.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/lena-white',
    },
    {
        id: 8,
        name: 'Mia Wong',
        description: 'An emerging model with a unique look and style.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/mia-wong',
    },
    {
        id: 9,
        name: 'David Park',
        description: 'A top model known for his versatile fashion shoots.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/david-park',
    },
    {
        id: 10,
        name: 'Sophia Lee',
        description: 'A high-fashion model with a sharp editorial style.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/sophia-lee',
    },
    {
        id: 11,
        name: 'Lucas Martinez',
        description: 'A male model with a strong portfolio in commercial and editorial work.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/lucas-martinez',
    },
    {
        id: 12,
        name: 'Olivia Adams',
        description: 'An iconic model known for her work in beauty campaigns.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/olivia-adams',
    },
    {
        id: 13,
        name: 'Emma Clark',
        description: 'A young and energetic model with a love for streetwear fashion.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/emma-clark',
    },
    {
        id: 14,
        name: 'Daniel Kim',
        description: 'A successful model with experience in both fashion and fitness modeling.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/daniel-kim',
    },
    {
        id: 15,
        name: 'Ava Thompson',
        description: 'An editorial model with an eye for detail and artistry.',
        photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        portfolio: '/portfolio/ava-thompson',
    },
];
const carouselItems = models.map((model) => (
    <div key={model.id} className="p-4">
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
            <p className="text-gray-600">{model.description}</p>
        </div>
    </div>
)); 

export const ModelsPage = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Models Directory</h1>
            <Carousel items={carouselItems} />

            <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Featured Models</h2>
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
