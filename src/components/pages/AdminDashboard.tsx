import { useState } from 'react';
import { ModelosAdmin } from '../AdminComponents/ModelosAdmin';

export const AdminDashboard = () => {
    const [showModelosAdmin, setShowModelosAdmin] = useState(false); // Estado para mostrar/ocultar ModelosAdmin

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        localStorage.removeItem('users');
        window.location.href = '/'; // Redirigir manualmente a la página principal
    };

    // Función para mostrar el componente de ModelosAdmin
    const handleManageModelsClick = () => {
        setShowModelosAdmin(true); // Mostrar el componente ModelosAdmin
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
                    onClick={handleManageModelsClick} // Al hacer clic, mostrar ModelosAdmin
                />
                <DashboardSection title="Manage Products" description="Add, update, or remove products." />
                <DashboardSection title="Manage Events" description="Create, update, or delete events." />
                <DashboardSection title="Manage Photos" description="Upload or delete photos." />
                <DashboardSection title="Manage Memberships" description="View or edit membership plans." />
                <DashboardSection title="Website Analytics" description="Track website visits and user interactions." />
            </div>

            {/* Condicional para mostrar ModelosAdmin cuando el usuario haga clic */}
            {showModelosAdmin && <ModelosAdmin />}

        </div>
    );
};

const DashboardSection = ({ title, description, onClick }: { title: string, description: string, onClick?: () => void }) => {
    return (
        <div 
            className="dashboard-section bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg" 
            onClick={onClick} // Ejecutar el manejador al hacer clic
        >
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default AdminDashboard;
