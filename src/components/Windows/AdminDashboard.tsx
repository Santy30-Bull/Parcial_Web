import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    //Chat dijo que es mejor borrar datos cuando se salga por motivos de seguridad, no se :p
    const handleLogout = () => {
        localStorage.removeItem('users');
        navigate('/');
    };

    return (
        <div className="admin-dashboard p-8">
            <div className="dashboard-header flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
                    Logout
                </button>
            </div>

            <div className="dashboard-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <DashboardSection title="Manage Models">
                    <p className="mt-2">Add, update, or remove models.</p>
                </DashboardSection>
                <DashboardSection title="Manage Products">
                    <p className="mt-2">Add, update, or remove products.</p>
                </DashboardSection>
                <DashboardSection title="Manage Events">
                    <p className="mt-2">Create, update, or delete events.</p>
                </DashboardSection>
                <DashboardSection title="Manage Photos">
                    <p className="mt-2">Upload or delete photos.</p>
                </DashboardSection>
                <DashboardSection title="Manage Memberships">
                    <p className="mt-2">View or edit membership plans.</p>
                </DashboardSection>
                <DashboardSection title="Website Analytics">
                    <p className="mt-2">Track website visits and user interactions.</p>
                </DashboardSection>
            </div>
        </div>
    );
};

const DashboardSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <div className="dashboard-section bg-gray-100 p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            {children}
        </div>
    );
};

export default AdminDashboard;
