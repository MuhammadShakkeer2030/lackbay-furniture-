import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 p-6 md:p-10 lg:p-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#006e63]">Lacbay</h2>
          <p className="text-gray-600">
            Lacbay is the brand name of Lacbay Ventures LLP. The Lacbay Ventures are well-established international furniture segment providers in Kottakkal. Its world-quality brought it into a position of leadership within a very short period worldwide. It created high-profile machines by which the company made maximum perfection for the output. Innovation, commitment, and customer-focused service are the key aspects that helped Lacbay to achieve one of the best positions in the furniture sector.
          </p>
        </div>

        <div className="mt-10 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#006e63] ">Vision</h3>
            <p className="text-gray-600">
              Our vision is to manufacture and supply a range of unique, quality, and futuristic furniture that satisfies the needs and meets the expectations of customers.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#006e63]">Mission</h3>
            <p className="text-gray-600">
              Customer satisfaction is our major concern, and we always care about the value of their spending by making sure that the product meets international quality at every phase of its manufacturing procedures and delivery stages.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-16 lg:mt-20">
          <h3 className="text-2xl font-bold mb-4 text-[#006e63]">Business & Ethics</h3>
          <p className="text-gray-600">
            We believe that wood and wooden things have magic and very strong elements to communicate beauty. A piece of well-organized furniture tells a story and creates an aesthetic area, as it enhances the comfort level and beauty of the space.
          </p>
          <p className="text-gray-600">
            Lacbay furniture signs up to make signature designs for the category of the sofa. It has a wide range of collections available in the catalogue of different aesthetics like classic, modern, contemporary, industrial, etc. Our team of highly skilled, diligent, and trained hands actualizes aesthetic space concepts for those who long for a global standard of living without compromising on the creation. And our furniture designs are exclusively unique to keep the prestige of our customers.
          </p>
        </div>

        <div className="mt-10 md:mt-16 lg:mt-20">
          <h3 className="text-2xl font-bold mb-4 text-[#006e63]">Quality Process</h3>
          <p className="text-gray-600">
            Committed to honesty and fairness to attain a leadership position in all core business areas. So we mainly focus on ensuring that every product we deliver meets the required high-quality standards. Our aspiration to achieve the best value for the customer is the main driving force of our company and its growth as an organization.
          </p>
          <p className="text-gray-600">
            Our biggest advertisement is our product quality. When customers like a product, they are more than happy to convince others to like it too. Therefore, our well-organized management method in manufacturing, marketing, administration, and all activities and procedures of management ensures quality. For each stage of production like wood purchasing, wood swaying, carpentry work, etching, polishing, spray painting, and upholstery, we conduct strict quality checks before moving from one section to another. This is why we can provide the utmost perfection and a lifelong guarantee for our outputs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
