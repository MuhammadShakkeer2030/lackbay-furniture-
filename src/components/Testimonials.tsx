
const TestimonialsSection = () => {
  return (
    <section className="my-8">
  <h2 className="text-3xl font-semibold mb-6 text-center">Testimonials</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Testimonial Cards */}
    <div className="bg-gradient-to-br from-purple-200 to-purple-300 p-6 shadow-md rounded-lg hover:shadow-xl">
      <p className="text-gray-800 mb-4">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ante ut augue
        aliquam malesuada."
      </p>
      <p className="text-sm font-semibold text-purple-700">John Doe</p>
      <p className="text-sm text-gray-600">CEO, Company Name</p>
    </div>
    <div className="bg-gradient-to-br from-blue-200 to-blue-300 p-6 shadow-md rounded-lg hover:shadow-xl">
      <p className="text-gray-800 mb-4">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium."
      </p>
      <p className="text-sm font-semibold text-blue-700">Jane Smith</p>
      <p className="text-sm text-gray-600">Designer</p>
    </div>
    <div className="bg-gradient-to-br from-green-200 to-green-300 p-6 shadow-md rounded-lg hover:shadow-xl">
      <p className="text-gray-800 mb-4">
        "Vestibulum venenatis nisl id facilisis dignissim. Sed auctor urna non hendrerit
        vestibulum."
      </p>
      <p className="text-sm font-semibold text-green-700">David Williams</p>
      <p className="text-sm text-gray-600">Marketing Manager</p>
    </div>
    {/* Add more testimonial cards as needed */}
  </div>
</section>

  );
};

export default TestimonialsSection;
