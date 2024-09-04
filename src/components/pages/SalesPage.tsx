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
            printPrice: 50,
        },
        {
            id: 2,
            title: 'Fashion Event Highlight',
            description: 'Capturing the excitement of a major fashion event.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 20,
            printPrice: 60,
        },
        {
            id: 3,
            title: 'Behind the Scenes',
            description: 'An intimate look behind the scenes of a photo shoot.',
            imageUrl: 'https://via.placeholder.com/400',
            digitalPrice: 25,
            printPrice: 70,
        },
        // Add more photos as needed
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
