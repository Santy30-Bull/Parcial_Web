import { useState } from 'react';
import axios from 'axios';

const backendUrl = process.env.VITE_BACKEND_URL;


export const EventosAdmin = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isPatchModalOpen, setIsPatchModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [eventId, setEventId] = useState(''); // For updating and deleting events
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [lugar, setLugar] = useState('');
    const [fecha, setFecha] = useState('');
    const [modeloIds, setModeloIds] = useState<number[]>([]);

    // Functions to open modals
    const openAddModal = () => setIsAddModalOpen(true);
    const openPatchModal = () => setIsPatchModalOpen(true);
    const openDeleteModal = () => setIsDeleteModalOpen(true);

    // Functions to close modals
    const closeAddModal = () => {
        setIsAddModalOpen(false);
        resetForm();
    };
    const closePatchModal = () => {
        setIsPatchModalOpen(false);
        resetForm();
    };
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setEventId('');
    };

    // Reset form fields
    const resetForm = () => {
        setEventId('');
        setNombre('');
        setDescripcion('');
        setLugar('');
        setFecha('');
        setModeloIds([]);
    };

    const handleSaveEvent = async () => {
        if (!nombre || !descripcion) {
            alert('Por favor, completa los campos requeridos.');
            return;
        }

        try {
            const data = {
                nombre,
                descripcion,
                lugar,
                fecha,
                ModeloId: modeloIds,
            };

            const response = await axios.post(`${backendUrl}/eventos`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                alert('Evento agregado con éxito.');
            } else {
                alert('Error al agregar el evento.');
            }
        } catch (error) {
            alert('Ocurrió un error al guardar el evento.');
            console.error(error);
        }
        closeAddModal();
    };

    const handleDeleteEvent = async () => {
        console.log(`Deleting event with ID: ${eventId}`);
        try {
            const response = await axios.delete(`${backendUrl}/${eventId}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                alert('Evento eliminado con éxito.');
            } else {
                alert('Error al eliminar el evento.');
            }
        } catch (error) {
            alert('Ocurrió un error al eliminar el evento.');
            console.error(error);
        }
        closeDeleteModal();
    };

    const handlePatchEvent = async () => {
        const updatedFields: Record<string, any> = {};

        if (nombre.trim() !== '') updatedFields.nombre = nombre;
        if (descripcion.trim() !== '') updatedFields.descripcion = descripcion;
        if (lugar.trim() !== '') updatedFields.lugar = lugar;
        if (fecha.trim() !== '') updatedFields.fecha = fecha;
        if (modeloIds.length > 0) updatedFields.ModeloId = modeloIds;

        if (Object.keys(updatedFields).length === 0) {
            alert('No hay cambios para actualizar.');
            return;
        }

        try {
            const response = await axios.patch(`${backendUrl}/eventos/${eventId}`, updatedFields, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                alert('Evento actualizado con éxito.');
                closePatchModal();
            } else {
                alert('Error al actualizar el evento.');
            }
        } catch (error) {
            alert('Ocurrió un error al actualizar el evento.');
            console.error(error);
        }
    };

    return (
        <div className="admin-dashboard min-h-screen bg-gray-50 p-6">
            <div className="dashboard-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <button
                    onClick={openAddModal}
                    className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded-lg"
                >
                    Add Event
                </button>
                <button
                    onClick={openPatchModal}
                    className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-6 py-2 rounded-lg"
                >
                    Update Event
                </button>
                <button
                    onClick={openDeleteModal}
                    className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded-lg"
                >
                    Delete Event
                </button>
            </div>

            {/* Modal for adding event */}
            {isAddModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Add Event</h2>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Event Title</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Description</label>
                            <textarea
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Place</label>
                            <input
                                type="text"
                                value={lugar}
                                onChange={(e) => setLugar(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Date</label>
                            <input
                                type="date"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Models ID's</label>
                            <input
                                type="text"
                                placeholder="IDs separados por comas"
                                onChange={(e) => setModeloIds(e.target.value.split(',').map(Number))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={handleSaveEvent}>
                                Save
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg" onClick={closeAddModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for updating event */}
            {isPatchModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Update Event</h2>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Event ID</label>
                            <input
                                type="text"
                                value={eventId}
                                onChange={(e) => setEventId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Event ID"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Event Title</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Event Title"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Description</label>
                            <textarea
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Event Description"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Place</label>
                            <input
                                type="text"
                                value={lugar}
                                onChange={(e) => setLugar(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Event Place"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Date</label>
                            <input
                                type="date"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Models ID's</label>
                            <input
                                type="text"
                                placeholder="IDs separados por comas"
                                onChange={(e) => setModeloIds(e.target.value.split(',').map(Number))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                value={modeloIds.join(',')}
                            />
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg" onClick={handlePatchEvent}>
                                Update
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg" onClick={closePatchModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal for deleting event */}
            {isDeleteModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Delete Event</h2>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Event ID</label>
                            <input
                                type="text"
                                value={eventId}
                                onChange={(e) => setEventId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Event ID"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg" onClick={handleDeleteEvent}>
                                Delete
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg" onClick={closeDeleteModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
export default EventosAdmin;