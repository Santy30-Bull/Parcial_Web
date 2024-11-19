import { useEffect, useState } from 'react';
import axios from 'axios';


const backendUrl = process.env.REACT_APP_BACKEND_URL;

// Actualizamos la interfaz para reflejar los nombres correctos de las propiedades
interface Photo {
    id: number;
    url: string;
    titulo: string;
    descripcion: string;
    precioDigital: number;
    precioImpresa: number;
    fechaCreacion: string; // O puedes usar `Date` si prefieres que sea un objeto Date
    fechaActualizacion: string; // Igualmente, podría ser `Date` si prefieres un tipo de dato Date
    estado: boolean;
}

export const SalesPage = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                // Reemplaza '/api/photos' con la URL de tu API
                const response = await axios.get(`${backendUrl}/fotos`);
                setPhotos(response.data); // Asume que la API devuelve un array de fotos
            } catch (err) {
                setError('Failed to fetch photos');
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Photo Sales</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photos.map((photo, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
                        <div className="mb-4">
                            {/* Imagen de la foto */}
                            <img
                                src={photo.url}
                                alt={photo.titulo}
                                className="object-cover w-full h-64 rounded-lg mb-4"
                            />
                            {/* Titulo de la foto */}
                            <h2 className="text-xl font-semibold mb-2">{photo.titulo}</h2>
                            {/* Descripción de la foto */}
                            <p className="text-gray-600 mb-4">{photo.descripcion}</p>
                            {/* Precios */}
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <span className="font-semibold">Digital Download:</span> ${photo.precioDigital}
                                </div>
                                <div>
                                    <span className="font-semibold">Physical Print:</span> ${photo.precioImpresa}
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
