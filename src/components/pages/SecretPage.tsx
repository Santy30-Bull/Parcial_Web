import {motion} from 'framer-motion';

export const SecretPage = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Capa de "corte" */}
            <motion.div
                className="absolute inset-0 bg-gray-800"
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                exit={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
                transition={{ duration: 2 }}
            />
            {/* Contenido de la página */}
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <div className="p-6 bg-gray-100">
                    <section className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Secret Page</h1>
                        <p className="text-xl text-gray-600">This is a secret page.</p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default SecretPage;