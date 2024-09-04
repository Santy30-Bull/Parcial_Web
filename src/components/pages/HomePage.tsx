


export const HomePage = () => {
    return (
        <div className="p-6 bg-gray-100">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Andrea Mesa's World</h1>
                <p className="text-xl text-gray-600">Discover the beauty within and express yourself.</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Featured Models</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded shadow">Model 1</div>
                    <div className="bg-white p-4 rounded shadow">Model 2</div>
                    <div className="bg-white p-4 rounded shadow">Model 3</div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Featured Makeup Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded shadow">Product 1</div>
                    <div className="bg-white p-4 rounded shadow">Product 2</div>
                    <div className="bg-white p-4 rounded shadow">Product 3</div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Upcoming Events</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded shadow">Event 1</div>
                    <div className="bg-white p-4 rounded shadow">Event 2</div>
                    <div className="bg-white p-4 rounded shadow">Event 3</div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
