export const Footer = () => {
    return (
        <>
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="text-center md:text-center">
                    <h2 className="text-2xl font-semibold mb-4">Business Contact Details</h2>
                    <p className="mb-2">
                        <strong>Email:</strong> contact@andreamesa.com
                    </p>
                    <p className="mb-2">
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </p>
                    <p className="mb-4">
                        <strong>Follow us on:</strong>
                    </p>
                    <div className="flex justify-center md:text-center space-x-4 ">
                        <span className="text-white hover:text-blue-600">
                            Facebook
                        </span>
                        <span className="text-white hover:text-pink-600">
                            Instagram
                        </span>
                        <span className="text-white hover:text-blue-500">
                            Twitter
                        </span>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;

