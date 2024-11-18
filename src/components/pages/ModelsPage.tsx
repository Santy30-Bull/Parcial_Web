import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Interfaz para los modelos con los campos en español
interface Model {
    id: number;
    nombre: string;         // Campo para el nombre del modelo
    descripcion: string;    // Campo para la descripción
    evento?: {              // Objeto evento
        id: number;
        nombre: string;
        descripcion: string;
        lugar: string;
        fecha: string;
    };
}

// Función para obtener los modelos desde la API
export const fetchAllModels = async (): Promise<Model[]> => {
    try {
        const response = await axios.get('http://localhost:3000/modelos');
        console.log('Response from API:', response.data);  // Ver los datos completos
        return response.data || [];  // Asegúrate de que los datos se devuelvan correctamente
    } catch (error) {
        console.error('Error fetching models:', error);
        return [];
    }
};

export const ModelsPage = () => {
    const [models, setModels] = useState<Model[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Cargar los modelos al montar el componente
    useEffect(() => {
        const loadModels = async () => {
            try {
                const data = await fetchAllModels();
                console.log('Models fetched:', data); // Ver los datos obtenidos
                setModels(data);
            } catch (error) {
                setError('Failed to load models');
            } finally {
                setLoading(false);
            }
        };

        loadModels();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Models Directory</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loading ? (
                    <div className="text-center text-gray-500 col-span-full">Loading...</div>
                ) : error ? (
                    <div className="text-center text-red-500 col-span-full">{error}</div>
                ) : models.length === 0 ? (
                    <div className="text-center text-gray-500 col-span-full">No models available</div>
                ) : (
                    models.map((model) => (
                        <div key={model.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6 flex flex-col">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{model.nombre || 'Unnamed Model'}</h2>
                                <p className="text-gray-600 mb-4">{model.descripcion || 'No description available.'}</p>
                                {model.evento && (
                                    <div className="text-gray-500 text-sm">
                                        <p>Evento: <span className="font-medium">{model.evento.nombre}</span></p>
                                        <p>Descripción: <span className="font-medium">{model.evento.descripcion}</span></p>
                                        <p>Lugar: <span className="font-medium">{model.evento.lugar}</span></p>
                                        <p>Fecha: <span className="font-medium">{model.evento.fecha}</span></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ModelsPage;
