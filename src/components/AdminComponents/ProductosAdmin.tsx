import { useState } from 'react';
import axios from 'axios';

const backendUrl = process.env.VITE_BACKEND_URL;

export const ProductosAdmin = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isPatchModalOpen, setIsPatchModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [productId, setProductId] = useState(''); // Para actualización y eliminación
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState(0);
    const [stock, setStock] = useState(0);
    const [estado, setEstado] = useState(true);

    // Funciones para abrir los modales
    const openAddModal = () => setIsAddModalOpen(true);
    const openPatchModal = () => setIsPatchModalOpen(true);
    const openDeleteModal = () => setIsDeleteModalOpen(true);

    // Funciones para cerrar los modales
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
        setProductId('');
    };

    // Resetear formulario
    const resetForm = () => {
        setProductId('');
        setNombre('');
        setDescripcion('');
        setPrecio(0);
        setStock(0);
        setEstado(true);
    };

    // Función para manejar el guardado del producto (POST)
    const handleSaveProduct = async () => {
        try {
            const productData = { nombre, descripcion, precio, stock, estado };
            const response = await axios.post(`${backendUrl}/productos`, productData, {
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.status === 201) {
                alert('Product successfully added!');
            } else {
                alert('Failed to save the product!');
            }
        } catch (error) {
            alert('An error occurred while saving the product.');
            console.error(error);
        }
        closeAddModal();
    };

    // Función para manejar la eliminación del producto (DELETE)
    const handleDeleteProduct = async () => {
        try {
            const response = await axios.delete(`${backendUrl}/productos/${productId}`);
            if (response.status === 200) {
                alert('Product successfully deleted!');
            } else {
                alert('Failed to delete the product!');
            }
        } catch (error) {
            alert('An error occurred while deleting the product.');
            console.error(error);
        }
        closeDeleteModal();
    };

    const handlePatchProduct = async () => {
        // Crear un objeto para los campos actualizados
        const updatedFields: Record<string, any> = {};

        // Verificar cada campo y agregar al objeto solo si ha cambiado
        if (nombre.trim() !== "") updatedFields.nombre = nombre;
        if (descripcion.trim() !== "") updatedFields.descripcion = descripcion;
        if (!isNaN(precio)) updatedFields.precio = precio;
        if (!isNaN(stock)) updatedFields.stock = stock;
        if (estado !== undefined) updatedFields.estado = estado;

        // Si no hay cambios, no enviar nada
        if (Object.keys(updatedFields).length === 0) {
            alert("No hay cambios para actualizar.");
            return;
        }

        try {
            // Enviar la solicitud PATCH solo con los campos que han sido modificados
            const response = await axios.patch(`${backendUrl}/productos/${productId}`, updatedFields, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.status === 200) {
                alert('Producto actualizado con éxito.');
                closePatchModal();
            } else {
                alert('Failed to update the product!');
            }
        } catch (error) {
            alert('An error occurred while updating the product.');
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
                    Add Product
                </button>
                <button
                    onClick={openPatchModal}
                    className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-6 py-2 rounded-lg"
                >
                    Update Product
                </button>
                <button
                    onClick={openDeleteModal}
                    className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded-lg"
                >
                    Delete Product
                </button>
            </div>

            {/* Modal para agregar producto */}
            {isAddModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Nombre</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
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
                            <label className="block text-gray-700">Precio</label>
                            <input
                                type="number"
                                value={precio}
                                onChange={(e) => setPrecio(parseFloat(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Stock</label>
                            <input
                                type="number"
                                value={stock}
                                onChange={(e) => setStock(parseFloat(e.target.value))}
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
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={handleSaveProduct}>
                                Save
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg" onClick={closeAddModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal para actualizar producto */}
            {isPatchModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Update Product</h2>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Product ID</label>
                            <input
                                type="text"
                                value={productId}
                                onChange={(e) => setProductId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Nombre</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
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
                            <label className="block text-gray-700">Precio</label>
                            <input
                                type="number"
                                value={precio}
                                onChange={(e) => setPrecio(parseFloat(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Stock</label>
                            <input
                                type="number"
                                value={stock}
                                onChange={(e) => setStock(parseFloat(e.target.value))}
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
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg" onClick={handlePatchProduct}>
                                Update
                            </button>
                            <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg" onClick={closePatchModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal para eliminar producto */}
            {isDeleteModalOpen && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Delete Product</h2>
                        <div className="form-group mb-4">
                            <label className="block text-gray-700">Product ID</label>
                            <input
                                type="text"
                                value={productId}
                                onChange={(e) => setProductId(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg" onClick={handleDeleteProduct}>
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
export default ProductosAdmin;