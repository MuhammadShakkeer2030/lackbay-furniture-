export const menuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/AboutPage" },
  { title: "Products", link: "/ProductCard" },
  { title: "Gallery", link: "/GalleryPage" },
  { title: "Contact Us", link: "/ContactUs" },
];

export const sofa = [
  { id: 2, image: "./images/sofa/2.jpg", category: "single" },
  { id: 3, image: "./images/sofa/3.jpg", category: "single" },
  { id: 4, image: "./images/sofa/4.jpg", category: "corner" },
  { id: 5, image: "./images/sofa/5.jpg", category: "double" },
  { id: 6, image: "./images/sofa/6.jpg", category: "corner" },
  { id: 7, image: "./images/sofa/7.jpg", category: "corner" },
  { id: 8, image: "./images/sofa/8.jpg", category: "corner" },
  { id: 9, image: "./images/sofa/9.jpg", category: "corner" },
  { id: 10, image: "./images/sofa/10.jpg", category: "single" },
  { id: 11, image: "./images/sofa/11.jpg", category: "double" },
  { id: 12, image: "./images/sofa/12.jpg", category: "corner" },
  { id: 13, image: "./images/sofa/13.jpg", category: "single" },
  { id: 14, image: "./images/sofa/14.jpg", category: "single" },
  { id: 15, image: "./images/sofa/15.jpg", category: "single" },
  { id: 16, image: "./images/sofa/16.jpg", category: "corner" },
  { id: 17, image: "./images/sofa/17.jpg", category: "single" },
  { id: 18, image: "./images/sofa/18.jpg", category: "single" },
  { id: 19, image: "./images/sofa/19.jpg", category: "single" },
  { id: 20, image: "./images/sofa/20.jpg", category: "single" },
];

export type filter = {
  id: number;
  image: string;
  category: string;
};
export const filterHomeImages: filter[] = [
  { id: 1, image: "./images/filter2.jpg", category: "double" },
  { id: 2, image: "./images/filter1.jpg", category: "corner" },
  { id: 3, image: "./images/filter3.jpg", category: "single" },
  { id: 4, image: "./images/filter4.jpg", category: "single" },
];
