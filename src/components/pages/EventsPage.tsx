import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Nueva interfaz de evento con productos y modelos
interface Evento {
    id: number;
    nombre: string;
    descripcion: string;
    lugar: string;
    fecha: string;
    productos: {
        id: number;
        nombre: string;
        descripcion: string;
        precio: string;
        stock: number;
        estado: boolean;
        fechaCreacion: string;
        fechaActualizacion: string;
    }[];
    modelos: {
        id: number;
        nombre: string;
        descripcion: string;
    }[];
}

export const EventPage = () => {
    const [events, setEvents] = useState<Evento[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Asegúrate de que la URL de la API sea correcta
                const response = await axios.get('http://localhost:3000/eventos');
                console.log('Fetched events:', response.data); // Verifica los datos
                setEvents(response.data); // Asume que la API devuelve un array de eventos
            } catch (err) {
                console.error('Error fetching events:', err);
                setError('Failed to fetch events');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    // Si está cargando o hay error, mostrar los mensajes correspondientes
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">Event Sales</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.length === 0 ? (
                    <div className="col-span-3 text-center text-xl font-semibold text-gray-600">
                        No events available.
                    </div>
                ) : (
                    events.map((evento) => (
                        <div key={evento.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
                            {/* Titulo del evento */}
                            <h2 className="text-xl font-semibold mb-2">{evento.nombre}</h2>

                            {/* Descripción del evento */}
                            <p className="text-gray-600 mb-4">{evento.descripcion}</p>

                            {/* Fecha y lugar */}
                            <div className="mb-4">
                                <span className="font-semibold">Fecha:</span> {evento.fecha}<br />
                                <span className="font-semibold">Lugar:</span> {evento.lugar}
                            </div>

                            {/* Productos asociados al evento */}
                            {evento.productos.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold">Productos:</h3>
                                    <ul>
                                        {evento.productos.map((producto) => (
                                            <li key={producto.id} className="text-gray-600">
                                                <span className="font-semibold">{producto.nombre}:</span> ${producto.precio}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Modelos asociados al evento */}
                            {evento.modelos.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold">Modelos:</h3>
                                    <ul>
                                        {evento.modelos.map((modelo) => (
                                            <li key={modelo.id} className="text-gray-600">
                                                {modelo.nombre}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default EventPage;
