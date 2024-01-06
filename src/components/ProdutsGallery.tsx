import Gallery from './ProductCard';
import ProductFilterSidebar from './FilterSidebar';

function ProdutsGallery() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Product Gallery</h1>
      <div className="flex flex-col xl:flex-row">
        <ProductFilterSidebar />
        <Gallery />
      </div>
    </div>
  );
}

export default ProdutsGallery;
