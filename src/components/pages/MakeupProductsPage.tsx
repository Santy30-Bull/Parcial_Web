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
        // Add more products as needed
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Makeup Products</h1>
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
