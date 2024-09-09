import Carousel from '../Carousel';
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}
export const MakeupProductsPage = () => {
    const products: Product[] = [
        {
            id: 1,
            name: 'Lipstick',
            description: 'A bold red lipstick.',
            price: 20,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            name: 'Foundation',
            description: 'A light foundation for a natural look.',
            price: 35,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            name: 'Eyeshadow Palette',
            description: 'A palette with vibrant colors.',
            price: 50,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 4,
            name: 'Mascara',
            description: 'A volumizing black mascara.',
            price: 25,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 5,
            name: 'Blush',
            description: 'A soft pink blush for a fresh glow.',
            price: 22,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 6,
            name: 'Concealer',
            description: 'A high-coverage concealer.',
            price: 18,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 7,
            name: 'Highlighter',
            description: 'A shimmering highlighter for radiant skin.',
            price: 30,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 8,
            name: 'Eyeliner',
            description: 'A waterproof liquid eyeliner.',
            price: 15,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 9,
            name: 'Bronzer',
            description: 'A matte bronzer for a sun-kissed look.',
            price: 28,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 10,
            name: 'Lip Gloss',
            description: 'A glossy lip shine with a hint of color.',
            price: 12,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 11,
            name: 'Setting Powder',
            description: 'A translucent setting powder to reduce shine.',
            price: 32,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 12,
            name: 'Brow Gel',
            description: 'A clear brow gel for taming and shaping.',
            price: 16,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 13,
            name: 'Primer',
            description: 'A smoothing face primer for flawless application.',
            price: 24,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 14,
            name: 'Contour Kit',
            description: 'A contouring kit with shades for sculpting.',
            price: 40,
            imageUrl: 'https://via.placeholder.com/150',
        },
        {
            id: 15,
            name: 'Makeup Remover',
            description: 'A gentle makeup remover for all skin types.',
            price: 10,
            imageUrl: 'https://via.placeholder.com/150',
        },
    ];

    const carouselItems = products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
        </div>
    ));

    return (
        <div className='p-6 bg-gray-100 min-h-screen'>
            <h1 className='text-3xl font-bold text-center mb-8'>Makeup Products</h1>
            <Carousel items={carouselItems} />

            <h2 className='text-2xl font-bold mt-8 mb-4 text-center'>Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
                        <div className="mb-4">
                            <div className="h-48 bg-gray-200 rounded-lg mb-4">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-lg font-bold mt-2">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MakeupProductsPage;
