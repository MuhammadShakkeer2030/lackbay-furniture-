import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <div className="border" >
          <h1 className="text-xl  font-bold mb-4">Free Delivery & Shipping</h1>
          <p className="text-lg mb-8">For all orders over $200.</p>
        </div>


        <div className="border" >
          <h1 className="text-xl  font-bold mb-4">Return Warranty</h1>
          <p className="text-lg mb-8">If you're not satisfied.</p>
        </div>

        <div className="border" >
          <h1 className="text-xl  font-bold mb-4">24/7 Technical Support</h1>
          <p className="text-lg mb-8">Anytime & anywhere you're.</p>
        </div>

        <div className="border" >
          <h1 className="text-xl  font-bold mb-4">Easy EMI</h1>
          <p className="text-lg mb-8">Easy EMI Available.</p>
        </div>

      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4 text-[#006e63] ">ABOUT</h2>
        <p className="text-lg mb-8">
          Lacbay is the brand name of Lacbay Ventures LLP. The Lacbay ventures are well-established International furniture segment providers in Kottakkal. Its world-quality brought it into a position of leadership within a very short period worldwide. It created high-profile machines by which the company made maximum perfection for the output. Innovation, commitment, and customer-focused service are the key aspects that helped Lacbay to achieve one of the best positions in the furniture sector. Lacbay furniture is the best manufacturing unit to create visionary unique furniture in -furniture segments with state-of-the-art updated technology in the industry by evolving the human endeavor in skills, procedures, and efforts to contribute to the promising value for the customer.
        </p>

        <p className="text-lg mb-8">
          <strong className="text-[#006e63]" >VISION</strong><br />
          Our vision is to manufacture and supply a range of unique, quality, and futuristic furniture that satisfies the needs and meets the expectations of customers.
        </p>

        <p className="text-lg mb-8">
          <strong className="text-[#006e63]" >MISSION</strong><br />
          Customer satisfaction is our major concern, and we always care about the value of their spending by making sure that the product meets international quality at every phase of its manufacturing procedures and delivery stages.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#006e63]">Our Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Single Seat</h3>
            <img src="/images/single-seat.jpg" alt="Single Seat" className="w-full mb-2" />
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Corner Sofa</h3>
            <img src="/images/corner-sofa.jpg" alt="Corner Sofa" className="w-full mb-2" />
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">Double Seat</h3>
            <img src="/images/double-seat.jpg" alt="Double Seat" className="w-full mb-2" />
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home