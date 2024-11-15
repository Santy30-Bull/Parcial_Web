import { useState } from 'react';
import axios from 'axios';

export const ModelosAdmin = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
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
    };
    const closeUpdateModal = () => {
        setIsUpdateModalOpen(false);
        setModelId('');
        setNombre('');
        setDescripcion('');
    };
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setModelId('');
    };

    // Función para manejar el guardado del modelo (POST)
    const handleSaveModel = async () => {
        try {
            const modelData = { nombre, descripcion };
            const response = await axios.post('http://localhost:3000/modelos', modelData, {
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

    // Función para manejar la actualización del modelo (PUT)
    const handleUpdateModel = async () => {
        try {
            const modelData = { nombre, descripcion };
            const response = await axios.put(`http://localhost:3000/modelos/${modelId}`, modelData, {
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.status === 200) {
                alert('Model successfully updated!');
            } else {
                alert('Failed to update the model!');
            }
        } catch (error) {
            alert('An error occurred while updating the model.');
            console.error(error);
        }
        closeUpdateModal(); // Cierra el modal después de la operación
    };

    // Función para manejar la eliminación del modelo (DELETE)
    const handleDeleteModel = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/modelos/${modelId}`);
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

            {/* Modal para actualizar modelo */}
            {isUpdateModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Update Model</h2>

                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Model ID</label>
                            <input
                                type="text"
                                value={modelId}
                                onChange={(e) => setModelId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>

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

                        <div className="flex justify-between">
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
}
export default ModelosAdmin;