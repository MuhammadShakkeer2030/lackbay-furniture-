import { useEffect } from "react";

const ContactUs: React.FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="container mx-auto flex flex-col xl:flex-row px-4 py-8">
      <div className="text-center w-full md:w-[600px] mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-8">
          Call Us: (+91) 974 519 9922, (+91) 974 529 9922
        </p>
        <p className="text-lg mb-8">Email Address: info@lacbayfurniture.com</p>
        <p className="text-lg mb-8">
          Store Location: LACBAY FURNITURE LLP, X1 /279/U, Near Al Huda School,
          Vattapparamb – Chappanangadi Malappuram-Dist, Kerala – 676503
        </p>
      </div>

      <div className="max-w-md mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-4 text-[#006e63]">Get In Touch</h2>
        <form className="">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium">
              Name<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium">
              Email<span className="text-red-500">*</span>:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-lg font-medium">
              Subject<span className="text-red-500">*</span>:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium">
              Message<span className="text-red-500">*</span>:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            ></textarea>
          </div>

          <a
            href="mailto:info@lacbayfurniture.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
