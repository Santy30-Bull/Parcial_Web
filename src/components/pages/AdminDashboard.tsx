import { useNavigate} from 'react-router-dom';


export const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('users');
        navigate('/');
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
                <DashboardSection title="Manage Models" description="Add, update, or remove models." />
                <DashboardSection title="Manage Products" description="Add, update, or remove products." />
                <DashboardSection title="Manage Events" description="Create, update, or delete events." />
                <DashboardSection title="Manage Photos" description="Upload or delete photos." />
                <DashboardSection title="Manage Memberships" description="View or edit membership plans." />
                <DashboardSection title="Website Analytics" description="Track website visits and user interactions." />
            </div>
            <button 
                className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg shadow-sm mt-4"
                onClick={() => navigate('/1234/secret')} // Navega a la ruta deseada
            >
                Secret
            </button>
        </div>
    );
};

const DashboardSection = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="dashboard-section bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default AdminDashboard;

