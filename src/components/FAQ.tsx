
// eslint-disable-next-line react-refresh/only-export-components
export const FAQ = () => {
    return (
        <div className="my-6">
  <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Frequently Asked Questions</h2>

  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-md p-6 shadow-lg">
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2 text-purple-900">Q: How can I place an order?</h3>
      <p className="text-gray-800">
        A: You can place an order through our website by adding items to your cart and proceeding to checkout.
      </p>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2 text-purple-900">Q: What payment methods do you accept?</h3>
      <p className="text-gray-800">
        A: We accept Visa, MasterCard, American Express, PayPal, and bank transfers.
      </p>
    </div>

    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-2 text-purple-900">Q: Do you offer international shipping?</h3>
      <p className="text-gray-800">
        A: Yes, we offer international shipping to selected countries. Contact our support for details.
      </p>
    </div>

    {/* Add more FAQ items as needed */}
  </div>
</div>

      


    )
}
