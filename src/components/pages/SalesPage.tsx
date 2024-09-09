interface Photo {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    digitalPrice: number;
    printPrice: number;
}

export const SalesPage = () => {
    const photos: Photo[] = [
        {
            id: 1,
            title: 'Runway Elegance',
            description: 'A stunning photo of a model on the runway.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 15,
            printPrice: 30,
        },
        {
            id: 2,
            title: 'Fashion Event Highlight',
            description: 'Capturing the excitement of a major fashion event.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 20,
            printPrice: 35,
        },
        {
            id: 3,
            title: 'Behind the Scenes',
            description: 'An intimate look behind the scenes of a photo shoot.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 25,
            printPrice: 40,
        },
        {
            id: 4,
            title: 'Street Style',
            description: 'A candid shot showcasing the latest street fashion.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 18,
            printPrice: 35,
        },
        {
            id: 5,
            title: 'Model Close-Up',
            description: 'A close-up portrait of a model in natural light.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 22,
            printPrice: 40,
        },
        {
            id: 6,
            title: 'Outdoor Fashion Shoot',
            description: 'A vibrant outdoor photo shoot with a scenic background.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 20,
            printPrice: 38,
        },
        {
            id: 7,
            title: 'Black and White Portrait',
            description: 'An artistic black and white portrait.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 25,
            printPrice: 45,
        },
        {
            id: 8,
            title: 'Fashion Editorial',
            description: 'A high-fashion editorial spread photo.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 30,
            printPrice: 50,
        },
        {
            id: 9,
            title: 'Evening Gown Glamour',
            description: 'A glamorous photo of a model in an evening gown.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 28,
            printPrice: 45,
        },
        {
            id: 10,
            title: 'Urban Fashion',
            description: 'A photo featuring edgy urban fashion.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 19,
            printPrice: 35,
        },
        {
            id: 11,
            title: 'Accessories in Focus',
            description: 'A close-up shot of luxury fashion accessories.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 23,
            printPrice: 40,
        },
        {
            id: 12,
            title: 'Vintage Fashion',
            description: 'A throwback to vintage fashion styles.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 27,
            printPrice: 42,
        },
        {
            id: 13,
            title: 'Night Out Look',
            description: 'A chic night out fashion look.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 26,
            printPrice: 45,
        },
        {
            id: 14,
            title: 'Luxury Fabrics',
            description: 'A photo emphasizing the texture of luxury fabrics.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 24,
            printPrice: 42,
        },
        {
            id: 15,
            title: 'Creative Makeup Shoot',
            description: 'A colorful and creative makeup-focused shoot.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 21,
            printPrice: 38,
        },
    ];
    
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Photo Sales</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photos.map((photo) => (
                    <div key={photo.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
                        <div className="mb-4">
                            <img
                                src={photo.imageUrl}
                                alt={photo.title}
                                className="object-cover w-full h-64 rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{photo.title}</h2>
                            <p className="text-gray-600 mb-4">{photo.description}</p>
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <span className="font-semibold">Digital Download:</span> ${photo.digitalPrice}
                                </div>
                                <div>
                                    <span className="font-semibold">Physical Print:</span> ${photo.printPrice}
                                </div>
                            </div>
                        </div>
                        <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesPage;
