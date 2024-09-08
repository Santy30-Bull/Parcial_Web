import React from "react";
import { motion } from "framer-motion";

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4">Choose Payment Option</h2>
                <ul className="text-lg">
                    <li className="mb-4">
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">PayPal</button>
                    </li>
                    <li className="mb-4">
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">Credit/Debit Card</button>
                    </li>
                    <li className="mb-4">
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full">Bank Transfer</button>
                    </li>
                </ul>
                <button
                    onClick={onClose}
                    className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg w-full"
                >
                    Cancel
                </button>
            </div>
        </motion.div>
    );
};

export default PaymentModal;
