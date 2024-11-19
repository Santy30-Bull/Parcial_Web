import { useState } from 'react';
import axios from 'axios';

const backendUrl = process.env.VITE_BACKEND_URL;

export const ModelosAdmin = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [eventoId, setEventoId] = useState(''); // Para asociar el evento
    const [modelId, setModelId] = useState(''); // Para actualización y eliminación

    // Función para abrir los modales
    const openAddModal = () => setIsAddModalOpen(true);
    const openUpdateModal = () => setIsUpdateModalOpen(true);
    const openDeleteModal = () => setIsDeleteModalOpen(true);

    // Función para cerrar los modales
    const closeAddModal = () => {
        setIsAddModalOpen(false);
        setNombre('');
        setDescripcion('');
        setEventoId('');
    };
    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setModelId('');
        setNombre('');
        setDescripcion('');
        setEventoId('');
    };
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setModelId('');
    };

    // Función para manejar el guardado del modelo (POST)
    const handleSaveModel = async () => {
        try {
            const modelData = { nombre, descripcion, eventoId };
            const response = await axios.post(`${backendUrl}/modelos`, modelData, {
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.status === 201) {
                alert('Model successfully added!');
            } else {
                alert('Failed to save the model!');
            }
        } catch (error) {
            alert('An error occurred while saving the model.');
            console.error(error);
        }
        closeAddModal(); // Cierra el modal después de la operación
    };

    // Funcion para manejar la actualizacion parcial del modelo (PATCH)
    const handleUpdateModel = async () => {
        if (!modelId) {
            alert("Please provide a valid Model ID.");
            return;
        }
    
        try {
            // Obtener los datos actuales del modelo
            const { data: currentModel } = await axios.get(
                `${backendUrl}/modelos/${modelId}`
            );
    
            // Crear el nuevo objeto con los datos existentes y los actualizados
            const updatedModel = {
                ...currentModel, // Mantener los datos actuales
                ...(nombre && { nombre }), // Sobrescribir solo si hay nuevos valores
                ...(descripcion && { descripcion }),
                ...(eventoId && { eventoId }),
            };
    
            // Realizar el PATCH
            const response = await axios.patch(
                `${backendUrl}/modelos/${modelId}`,
                updatedModel,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
    
            if (response.status === 200) {
                alert("Model successfully updated!");
            } else {
                alert("Failed to update the model.");
            }
        } catch (error) {
            alert("An error occurred while updating the model.");
            console.error(error);
        }
        closeUpdateModal(); // Cierra el modal después de la operación
    };    

    // Función para manejar la eliminación del modelo (DELETE)
    const handleDeleteModel = async () => {
        try {
            const response = await axios.delete(`${backendUrl}/modelos/${modelId}`);
            if (response.status === 200) {
                alert('Model successfully deleted!');
            } else {
                alert('Failed to delete the model!');
            }
        } catch (error) {
            alert('An error occurred while deleting the model.');
            console.error(error);
        }
        closeDeleteModal(); // Cierra el modal después de la operación
    };

    return (
        <div className="admin-dashboard min-h-screen bg-gray-50 p-6">
            <div className="dashboard-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <button
                    onClick={openAddModal}
                    className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded-lg"
                >
                    Add Model
                </button>
                <button
                    onClick={openUpdateModal}
                    className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-6 py-2 rounded-lg"
                >
                    Update Model
                </button>
                <button
                    onClick={openDeleteModal}
                    className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded-lg"
                >
                    Delete Model
                </button>
            </div>

            {/* Modal para agregar modelo */}
            {isAddModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Add Model</h2>

                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Model Name</label>
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
                            <label className="block text-gray-700">Event ID</label>
                            <input
                                type="text"
                                value={eventoId}
                                onChange={(e) => setEventoId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div className="flex justify-between">
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
                                onClick={handleSaveModel}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                                onClick={closeAddModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de actualización de modelo */}
            {isUpdateModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-2xl font-semibold mb-4">Update Model</h2>

                        {/* Campo para ingresar el ID del modelo */}
                        <div className="form-group mb-4">
                            <label className="block text-gray-700 font-medium">Model ID</label>
                            <input
                                type="text"
                                value={modelId}
                                onChange={(e) => setModelId(e.target.value)}
                                placeholder="Enter Model ID"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        {/* Campo para actualizar el nombre del modelo */}
                        <div className="form-group mb-4">
                            <label className="block text-gray-700 font-medium">Model Name</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                placeholder="Enter new name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        {/* Campo para actualizar la descripción */}
                        <div className="form-group mb-4">
                            <label className="block text-gray-700 font-medium">Description</label>
                            <textarea
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                placeholder="Enter new description"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        {/* Campo para actualizar el ID del evento */}
                        <div className="form-group mb-4">
                            <label className="block text-gray-700 font-medium">Event ID</label>
                            <input
                                type="text"
                                value={eventoId}
                                onChange={(e) => setEventoId(e.target.value)}
                                placeholder="Enter Event ID"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        {/* Botones de acción */}
                        <div className="flex justify-between mt-4">
                            <button
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg"
                                onClick={handleUpdateModel}
                            >
                                Update
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                                onClick={closeUpdateModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal para eliminar modelo */}
            {isDeleteModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Delete Model</h2>

                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Model ID</label>
                            <input
                                type="text"
                                value={modelId}
                                onChange={(e) => setModelId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div className="flex justify-between">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
                                onClick={handleDeleteModel}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
                                onClick={closeDeleteModal}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ModelosAdmin;