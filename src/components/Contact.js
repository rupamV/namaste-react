const Contact = () => {
	return (
		<div className="contact-container max-w-md mx-auto my-10 p-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-semibold text-center text-gray-800 mb-8">Contact Us</h1>
			<form className="space-y-4">
				<div>
					<label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
					<input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
				</div>

				<div>
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
					<input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
					<textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
				</div>

				<button type="submit" className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
