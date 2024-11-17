import { useState } from 'react';
import { ModelosAdmin } from '../AdminComponents/ModelosAdmin';
import { ProductosAdmin } from '../AdminComponents/ProductosAdmin';
import { FotosAdmin } from '../AdminComponents/FotosAdmin';
import { EventosAdmin } from '../AdminComponents/EventosAdmin';

export const AdminDashboard = () => {
    const [showModelosAdmin, setShowModelosAdmin] = useState(false); 
    const [showProductosAdmin, setShowProductosAdmin] = useState(false); 
    const [showFotosAdmin, setShowFotosAdmin] = useState(false); 
    const [showEventosAdmin, setShowEventosAdmin] = useState(false); // Nuevo estado para EventosAdmin

    const handleLogout = () => {
        localStorage.removeItem('users');
        window.location.href = '/';
    };

    const handleManageModelsClick = () => {
        setShowModelosAdmin(true);
        setShowProductosAdmin(false);
        setShowFotosAdmin(false);
        setShowEventosAdmin(false);
    };

    const handleManageProductsClick = () => {
        setShowProductosAdmin(true);
        setShowModelosAdmin(false);
        setShowFotosAdmin(false);
        setShowEventosAdmin(false);
    };

    const handleManagePhotosClick = () => {
        setShowFotosAdmin(true);
        setShowModelosAdmin(false);
        setShowProductosAdmin(false);
        setShowEventosAdmin(false);
    };

    const handleManageEventsClick = () => { // Nueva función para manejar clic en "Manage Events"
        setShowEventosAdmin(true);
        setShowModelosAdmin(false);
        setShowProductosAdmin(false);
        setShowFotosAdmin(false);
    };

    return (
        <div className="admin-dashboard min-h-screen bg-gray-50 p-6">
            <div className="dashboard-header bg-white shadow-md rounded-lg p-6 mb-8 flex justify-between items-center">
                <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
                <button 
                    onClick={handleLogout} 
                    className="bg-red-500 hover:bg-red-600 transition text-white px-6 py-2 rounded-lg shadow-sm"
                >
                    Logout
                </button>
            </div>

            <div className="dashboard-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardSection 
                    title="Manage Models" 
                    description="Add, update, or remove models." 
                    onClick={handleManageModelsClick} 
                />
                <DashboardSection 
                    title="Manage Products" 
                    description="Add, update, or remove products." 
                    onClick={handleManageProductsClick} 
                />
                <DashboardSection 
                    title="Manage Photos" 
                    description="Upload or delete photos." 
                    onClick={handleManagePhotosClick} 
                />
                <DashboardSection 
                    title="Manage Events" 
                    description="Create, update, or delete events." 
                    onClick={handleManageEventsClick} // Maneja clic en "Manage Events"
                />
                <DashboardSection title="Manage Memberships" description="View or edit membership plans." />
                <DashboardSection title="Website Analytics" description="Track website visits and user interactions." />
            </div>

            {/* Mostrar componentes según el estado */}
            {showModelosAdmin && <ModelosAdmin />}
            {showProductosAdmin && <ProductosAdmin />}
            {showFotosAdmin && <FotosAdmin />}
            {showEventosAdmin && <EventosAdmin />} {/* Mostrar EventosAdmin */}
        </div>
    );
};

const DashboardSection = ({ title, description, onClick }: { title: string, description: string, onClick?: () => void }) => {
    return (
        <div 
            className="dashboard-section bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" 
            onClick={onClick} 
        >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default AdminDashboard;