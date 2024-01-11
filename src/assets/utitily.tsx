export const menuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/aboutPage" },
  { title: "Products", link: "/productCard" },
  { title: "Gallery", link: "/galleryPage" },
  { title: "Contact Us", link: "/contactUs" },
];

export const CoutnerData = [
  {
    countNo: "50",
    title: "Quality Products",
    description: "Explore our wide range of high-quality furniture products designed to elevate your space.",
  },
  {
    countNo: "70",
    title: "Variety of Styles",
    description: "Discover furniture pieces in various styles, from modern and contemporary to classic designs.",
  },
  {
    countNo: "45",
    title: "Expert Craftsmanship",
    description: "Experience furniture crafted by skilled artisans, ensuring top-notch quality and durability.",
  },
];
export type filter = {
  id: number;
  image: string;
  category: string;
  price:number;
  description:string;
};
export const sofa: filter[] = [
  { id: 2, image: "./img/sofa/2.png", category: "single", price: 499, description: "Stylish and comfortable single sofa." },
  { id: 3, image: "./img/sofa/3.png", category: "single", price: 599, description: "Premium quality single sofa with modern design." },
  { id: 4, image: "./img/sofa/4.png", category: "corner", price: 899, description: "Corner sofa with spacious seating." },
  { id: 5, image: "./img/sofa/5.png", category: "double", price: 799, description: "Luxurious double sofa for relaxation." },
  { id: 6, image: "./img/sofa/6.png", category: "corner", price: 999, description: "Contemporary corner sofa with adjustable features." },
  { id: 7, image: "./img/sofa/7.png", category: "corner", price: 1099, description: "Elegant corner sofa for modern living rooms." },
  { id: 8, image: "./img/sofa/8.png", category: "corner", price: 1199, description: "High-quality corner sofa with multiple seating options." },
  { id: 9, image: "./img/sofa/9.png", category: "corner", price: 1299, description: "Corner sofa with premium upholstery." },
  { id: 10, image: "./img/sofa/10.png", category: "single", price: 699, description: "Comfortable and durable single sofa." },
];

interface FilterHomeProps {
id:number,
image:string,
category:string
}

export const filterHomeImages: FilterHomeProps[] = [
  { id: 1, image: "./images/filter2.jpg", category: "double" },
  { id: 2, image: "./images/filter1.jpg", category: "corner" },
  { id: 3, image: "./images/filter3.jpg", category: "single" },
  { id: 4, image: "./images/filter4.jpg", category: "single" },
];
