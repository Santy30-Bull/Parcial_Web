import { useState } from "react";
import { motion } from "framer-motion";

interface Subcategory {
    name: string;
    price: string;
    description: string;
    imageUrl: string;
}

interface Category {
    name: string;
    subcategories?: Subcategory[];
}

{/* Toda la informacion acerca de las actividades y ventas ilegales */}
const categoriesData: { [key: string]: Category[] } = {
    drugs: [
        {
            name: "Cocaine",
            subcategories: [
                {
                    name: "Pure Cocaine",
                    price: "$150/g",
                    description: "Highly potent form of cocaine.",
                    imageUrl: "/images/pure-cocaine.jpg",
                },
                {
                    name: "Crack Cocaine",
                    price: "$80/g",
                    description: "Crystallized form of cocaine.",
                    imageUrl: "/images/crack-cocaine.jpg",
                },
            ],
        },
        {
            name: "Heroin",
            subcategories: [
                {
                    name: "Pure Heroin",
                    price: "$250/g",
                    description: "High-purity heroin for advanced users.",
                    imageUrl: "/images/pure-heroin.jpg",
                },
                {
                    name: "Black Tar Heroin",
                    price: "$200/g",
                    description: "Sticky and dark heroin with a strong effect.",
                    imageUrl: "/images/black-tar-heroin.jpg",
                },
            ],
        },
        {
            name: "Meth",
            subcategories: [
                {
                    name: "Crystal Meth",
                    price: "$200/g",
                    description: "Crystalline form of methamphetamine, known for its potency.",
                    imageUrl: "/images/crystal-meth.jpg",
                },
                {
                    name: "Powder Meth",
                    price: "$150/g",
                    description: "Powdered form of methamphetamine.",
                    imageUrl: "/images/powder-meth.jpg",
                },
            ],
        },
        {
            name: "Ketamine",
            subcategories: [
                {
                    name: "Liquid Ketamine",
                    price: "$60/ml",
                    description: "Liquid form of ketamine used for medical and recreational purposes.",
                    imageUrl: "/images/liquid-ketamine.jpg",
                },
                {
                    name: "Powder Ketamine",
                    price: "$50/g",
                    description: "Powdered form of ketamine, often used recreationally.",
                    imageUrl: "/images/powder-ketamine.jpg",
                },
            ],
        },
    ],
    humanTrafficking: [
        {
            name: "Women",
            subcategories: [
                {
                    name: "Adult Women",
                    price: "$12,000",
                    description: "Adult females available for various needs.",
                    imageUrl: "/images/adult-women.jpg",
                },
                {
                    name: "Teen Women",
                    price: "$15,000",
                    description: "Teenage females available for various needs.",
                    imageUrl: "/images/teen-women.jpg",
                },
            ],
        },
        {
            name: "Men",
            subcategories: [
                {
                    name: "Adult Men",
                    price: "$10,000",
                    description: "Adult males available for various tasks.",
                    imageUrl: "/images/adult-men.jpg",
                },
                {
                    name: "Teen Men",
                    price: "$12,000",
                    description: "Teenage males available for various tasks.",
                    imageUrl: "/images/teen-men.jpg",
                },
            ],
        },
        {
            name: "Children",
            subcategories: [
                {
                    name: "Boys",
                    price: "$20,000",
                    description: "Young boys available for various purposes.",
                    imageUrl: "/images/boys.jpg",
                },
                {
                    name: "Girls",
                    price: "$25,000",
                    description: "Young girls available for various purposes.",
                    imageUrl: "/images/girls.jpg",
                },
            ],
        },
    ],
    organs: [
        {
            name: "Kidneys",
            subcategories: [
                {
                    name: "Healthy Kidney",
                    price: "$60,000",
                    description: "Freshly harvested healthy kidney.",
                    imageUrl: "/images/healthy-kidney.jpg",
                },
                {
                    name: "Transplant Kidney",
                    price: "$70,000",
                    description: "Kidney suitable for transplant.",
                    imageUrl: "/images/transplant-kidney.jpg",
                },
            ],
        },
        {
            name: "Liver",
            subcategories: [
                {
                    name: "Healthy Liver",
                    price: "$40,000",
                    description: "Healthy liver for transplant.",
                    imageUrl: "/images/healthy-liver.jpg",
                },
                {
                    name: "Cirrhotic Liver",
                    price: "$25,000",
                    description: "Liver affected by cirrhosis.",
                    imageUrl: "/images/cirrhotic-liver.jpg",
                },
            ],
        },
        {
            name: "Pancreas",
            subcategories: [
                {
                    name: "Healthy Pancreas",
                    price: "$50,000",
                    description: "Healthy pancreas for medical use.",
                    imageUrl: "/images/healthy-pancreas.jpg",
                },
                {
                    name: "Diabetic Pancreas",
                    price: "$30,000",
                    description: "Pancreas affected by diabetes.",
                    imageUrl: "/images/diabetic-pancreas.jpg",
                },
            ],
        },
        {
            name: "Heart",
            subcategories: [
                {
                    name: "Healthy Heart",
                    price: "$120,000",
                    description: "Healthy heart for transplant purposes.",
                    imageUrl: "/images/healthy-heart.jpg",
                },
                {
                    name: "Heart with Valve Replacement",
                    price: "$100,000",
                    description: "Heart with valve replacement surgery.",
                    imageUrl: "/images/heart-valve-replacement.jpg",
                },
            ],
        },
    ],
    slaves: [
        {
            name: "Women",
            subcategories: [
                {
                    name: "House Maid",
                    price: "$6,000",
                    description: "Female domestic worker.",
                    imageUrl: "/images/house-maid.jpg",
                },
                {
                    name: "Prostitute",
                    price: "$10,000",
                    description: "Female available for sexual services.",
                    imageUrl: "/images/prostitute.jpg",
                },
            ],
        },
        {
            name: "Men",
            subcategories: [
                {
                    name: "Field Worker",
                    price: "$4,000",
                    description: "Male worker for field tasks.",
                    imageUrl: "/images/field-worker.jpg",
                },
                {
                    name: "House Servant",
                    price: "$3,000",
                    description: "Male domestic servant.",
                    imageUrl: "/images/house-servant.jpg",
                },
            ],
        },
        {
            name: "Children",
            subcategories: [
                {
                    name: "House Worker",
                    price: "$7,000",
                    description: "Child employed as a domestic worker.",
                    imageUrl: "/images/house-worker.jpg",
                },
                {
                    name: "Factory Worker",
                    price: "$9,000",
                    description: "Child working in a factory.",
                    imageUrl: "/images/factory-worker.jpg",
                },
            ],
        },
    ],
    weapons: [
        {
            name: "Firearms",
            subcategories: [
                {
                    name: "Pistol",
                    price: "$300",
                    description: "Standard semi-automatic pistol.",
                    imageUrl: "/images/pistol.jpg",
                },
                {
                    name: "Assault Rifle",
                    price: "$700",
                    description: "High-power assault rifle.",
                    imageUrl: "/images/assault-rifle.jpg",
                },
            ],
        },
        {
            name: "Explosives",
            subcategories: [
                {
                    name: "Grenades",
                    price: "$500",
                    description: "Standard hand grenades.",
                    imageUrl: "/images/grenades.jpg",
                },
                {
                    name: "C4",
                    price: "$1,000",
                    description: "Plastic explosive C4.",
                    imageUrl: "/images/c4.jpg",
                },
            ],
        },
        {
            name: "Bio weapons",
            subcategories: [
                {
                    name: "Anthrax",
                    price: "$15,000",
                    description: "Biological agent anthrax.",
                    imageUrl: "/images/anthrax.jpg",
                },
                {
                    name: "Sarin",
                    price: "$20,000",
                    description: "Deadly nerve agent sarin.",
                    imageUrl: "/images/sarin.jpg",
                },
            ],
        },
        {
            name: "Bladed weapons",
            subcategories: [
                {
                    name: "Knife",
                    price: "$200",
                    description: "Standard combat knife.",
                    imageUrl: "/images/knife.jpg",
                },
                {
                    name: "Machete",
                    price: "$400",
                    description: "Heavy-duty machete.",
                    imageUrl: "/images/machete.jpg",
                },
            ],
        },
    ],
    others: [
        {
            name: "Child Porn",
            subcategories: [
                {
                    name: "Photos",
                    price: "$1,500",
                    description: "Explicit photos of children.",
                    imageUrl: "/images/child-porn-photos.jpg",
                },
                {
                    name: "Live Streams",
                    price: "$4,000",
                    description: "Live streaming of explicit content.",
                    imageUrl: "/images/child-porn-live-streams.jpg",
                },
            ],
        },
        {
            name: "Raping",
            subcategories: [
                {
                    name: "Women",
                    price: "$2,000",
                    description: "Sexual assault on women.",
                    imageUrl: "/images/raping-women.jpg",
                },
                {
                    name: "Men",
                    price: "$1,800",
                    description: "Sexual assault on men.",
                    imageUrl: "/images/raping-men.jpg",
                },
            ],
        },
        {
            name: "Live Murdering",
            subcategories: [
                {
                    name: "Assassination",
                    price: "$10,000",
                    description: "Contract killing of individuals.",
                    imageUrl: "/images/assassination.jpg",
                },
                {
                    name: "Torture",
                    price: "$15,000",
                    description: "Live torture sessions.",
                    imageUrl: "/images/torture.jpg",
                },
            ],
        },
    ],
};

export const SecretPage = () => {
    {/* Todo esto es para poder tener los desplegables y el hover del mouse y las selecciones de las categorias */}
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const handleToggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
        setSelectedCategory(null);
        setSelectedSubcategory(null);
    };

    const handleSelectCategory = (categoryName: string) => {
        setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
        setSelectedSubcategory(null);
    };

    const handleSelectSubcategory = (subcategoryName: string) => {
        setSelectedSubcategory(subcategoryName);
    };

    const handleBuyNow = () => {
        setShowPaymentModal(true);
    };

    const closeModal = () => {
        setShowPaymentModal(false);
    };

    const renderSubcategories = (subcategories?: Subcategory[]) => {
        if (!subcategories) {
            return <p className="text-gray-400">No subcategories available.</p>;
        }

        return (
            <ul className="bg-gray-700 p-4 rounded-lg shadow-lg w-full z-20 transition-opacity duration-300 opacity-100">
                {subcategories.map((subcategory, subIndex) => (
                    <li
                        key={subIndex}
                        className="flex flex-col mb-4"
                        onClick={() => handleSelectSubcategory(subcategory.name)}
                    >
                        <span className="font-semibold">{subcategory.name}</span>
                        <span>{subcategory.price}</span>
                        <p className="text-gray-400">{subcategory.description}</p>
                        <img src={subcategory.imageUrl} alt={subcategory.name} className="w-full h-auto mt-2 rounded-lg" />
                        {selectedSubcategory === subcategory.name && (
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded-lg transition duration-300 ease-in-out hover:bg-red-600 mt-2"
                                onClick={handleBuyNow}
                            >
                                Buy Now
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    const renderCategories = (categories: Category[]) => (
        <ul className="text-gray-300 mt-4 space-y-6">
            {categories.map((category, index) => (
                <li key={index} className="relative mb-6">
                    <div
                        className="flex justify-between items-center bg-gray-800 p-6 rounded-md shadow-lg cursor-pointer"
                        onClick={() => handleSelectCategory(category.name)}
                    >
                        <span className="text-lg font-semibold">{category.name}</span>
                    </div>

                    {selectedCategory === category.name && (
                        <div className="mt-2">
                            {renderSubcategories(category.subcategories)}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <div className="relative overflow-hidden">
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-black to-gray-900"
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                exit={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                transition={{ duration: 2 }}
            />
            <motion.div
                className="relative z-10 p-6 bg-gray-800 min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
            >
                <section className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-100 mb-4">Welcome to Andrea's Black Market</h1>
                    <p className="text-2xl text-gray-400">The darkest products you can find</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Seccion de drogas */}
                    <div className="p-4 bg-gray-700 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold mb-2 text-white">Drugs</h2>
                        <button
                            onClick={() => handleToggleSection("drugs")}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                            {expandedSection === "drugs" ? "Hide" : "View"}
                        </button>
                        {expandedSection === "drugs" && renderCategories(categoriesData.drugs)}
                    </div>

                    {/* Seccion de trafico humano */}
                    <div className="p-4 bg-gray-700 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold mb-2 text-white">Human Trafficking</h2>
                        <button
                            onClick={() => handleToggleSection("humanTrafficking")}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                            {expandedSection === "humanTrafficking" ? "Hide" : "View"}
                        </button>
                        {expandedSection === "humanTrafficking" && renderCategories(categoriesData.humanTrafficking)}
                    </div>

                    {/* Seccion de organos */}
                    <div className="p-4 bg-gray-700 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold mb-2 text-white">Organs</h2>
                        <button
                            onClick={() => handleToggleSection("organs")}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                            {expandedSection === "organs" ? "Hide" : "View"}
                        </button>
                        {expandedSection === "organs" && renderCategories(categoriesData.organs)}
                    </div>

                    {/* Seccion de esclavos */}
                    <div className="p-4 bg-gray-700 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold mb-2 text-white">Slaves</h2>
                        <button
                            onClick={() => handleToggleSection("slaves")}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                            {expandedSection === "slaves" ? "Hide" : "View"}
                        </button>
                        {expandedSection === "slaves" && renderCategories(categoriesData.slaves)}
                    </div>

                    {/* Seccion de armas */}
                    <div className="p-4 bg-gray-700 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold mb-2 text-white">Weapons</h2>
                        <button
                            onClick={() => handleToggleSection("weapons")}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                            {expandedSection === "weapons" ? "Hide" : "View"}
                        </button>
                        {expandedSection === "weapons" && renderCategories(categoriesData.weapons)}
                    </div>

                    {/* Seccion de otros */}
                    <div className="p-4 bg-gray-700 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold mb-2 text-white">Others</h2>
                        <button
                            onClick={() => handleToggleSection("others")}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg"
                        >
                            {expandedSection === "others" ? "Hide" : "View"}
                        </button>
                        {expandedSection === "others" && renderCategories(categoriesData.others)}
                    </div>
                </div>
            </motion.div>

            {/* Metodos de pago */}
            {showPaymentModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold text-gray-100 mb-4">Choose Payment Option</h2>
                        <div className="flex flex-col space-y-4">
                            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600">
                                Pay with Credit Card
                            </button>
                            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600">
                                Pay with Cryptocurrency
                            </button>
                            <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-600">
                                Pay with Cash
                            </button>
                        </div>
                        <button
                            onClick={closeModal}
                            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SecretPage;