export const ContactUsPage = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Contactanos</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-1">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-semibold mb-1">
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                placeholder="Subject"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Your Message"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <p className="text-lg mb-2">
                        <strong>Email:</strong> contact@andreamesa.com
                    </p>
                    <p className="text-lg mb-2">
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
