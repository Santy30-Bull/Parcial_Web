import { useState } from 'react';
import axios from 'axios';

export const FotosAdmin = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isPatchModalOpen, setIsPatchModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [photoId, setPhotoId] = useState(''); // For updating and deleting photos
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precioDigital, setPrecioDigital] = useState(0);
    const [precioImpresa, setPrecioImpresa] = useState(0);
    const [foto, setUrl] = useState(''); // String for the image URL or base64 string
    const [estado, setEstado] = useState(true); // New state for active/inactive

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
        setPhotoId('');
    };

    // Reset form fields
    const resetForm = () => {
        setPhotoId('');
        setTitulo('');
        setDescripcion('');
        setPrecioDigital(0);
        setPrecioImpresa(0);
        setUrl('');
        setEstado(true); // Reset the activo state
    };

    const handleSavePhoto = async () => {
        if (!foto) {
            alert('Please provide a photo URL!');
            return;
        }

        try {
            const data = {
                titulo,
                descripcion,
                precioDigital,
                precioImpresa,
                url: foto, // Using URL or base64 string
                estado, // Include the activo state
            };

            const response = await axios.post('http://localhost:3000/fotos', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                alert('Photo successfully added!');
            } else {
                alert('Failed to save the photo!');
            }
        } catch (error) {
            alert('An error occurred while saving the photo.');
            console.error(error);
        }
        closeAddModal();
    };

    const handleDeletePhoto = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/fotos/${photoId}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                alert('Photo successfully deleted!');
            } else {
                alert('Failed to delete the photo!');
            }
        } catch (error) {
            alert('An error occurred while deleting the photo.');
            console.error(error);
        }
        closeDeleteModal();
    };

    const handlePatchPhoto = async () => {
        const updatedFields: Record<string, any> = {};

        if (titulo.trim() !== '') updatedFields.titulo = titulo;
        if (descripcion.trim() !== '') updatedFields.descripcion = descripcion;
        if (!isNaN(precioDigital)) updatedFields.precioDigital = precioDigital;
        if (!isNaN(precioImpresa)) updatedFields.precioImpresa = precioImpresa;
        updatedFields.estado = estado; // Add active state to updated fields

        if (Object.keys(updatedFields).length === 0) {
            alert('No changes to update.');
            return;
        }

        try {
            const response = await axios.patch(`http://localhost:3000/fotos/${photoId}`, updatedFields, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                alert('Photo updated successfully.');
                closePatchModal();
            } else {
                alert('Failed to update the photo!');
            }
        } catch (error) {
            alert('An error occurred while updating the photo.');
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
                    Add Photo
                </button>
                <button
                    onClick={openPatchModal}
                    className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-6 py-2 rounded-lg"
                >
                    Update Photo
                </button>
                <button
                    onClick={openDeleteModal}
                    className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded-lg"
                >
                    Delete Photo
                </button>
            </div>

            {/* Modal for adding photo */}
            {isAddModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Add Photo</h2>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Titulo</label>
                            <input
                                type="text"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Descripción</label>
                            <textarea
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Precio Digital</label>
                            <input
                                type="number"
                                value={precioDigital}
                                onChange={(e) => setPrecioDigital(parseFloat(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Precio Físico</label>
                            <input
                                type="number"
                                value={precioImpresa}
                                onChange={(e) => setPrecioImpresa(parseFloat(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Photo URL</label>
                            <input
                                type="text"
                                value={foto}
                                onChange={(e) => setUrl(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="Enter image URL or base64 string"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={handleSavePhoto}>
                                Save
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg" onClick={closeAddModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for updating photo */}
            {isPatchModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Update Photo</h2>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Photo ID</label>
                            <input
                                type="text"
                                value={photoId}
                                onChange={(e) => setPhotoId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Titulo</label>
                            <input
                                type="text"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Descripción</label>
                            <textarea
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Precio Digital</label>
                            <input
                                type="number"
                                value={precioDigital}
                                onChange={(e) => setPrecioDigital(parseFloat(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Precio Físico</label>
                            <input
                                type="number"
                                value={precioImpresa}
                                onChange={(e) => setPrecioImpresa(parseFloat(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Estado</label>
                            <select
                                value={estado ? "Activo" : "Inactivo"}
                                onChange={(e) => setEstado(e.target.value === "Activo")}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            >
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg" onClick={handlePatchPhoto}>
                                Update
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg" onClick={closePatchModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for deleting photo */}
            {isDeleteModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Delete Photo</h2>
                        <p>Are you sure you want to delete this photo?</p>
                        <div className="flex justify-between">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg" onClick={handleDeletePhoto}>
                                Yes, Delete
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
