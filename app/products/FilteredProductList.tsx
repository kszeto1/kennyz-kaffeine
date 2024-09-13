import { fetchProducts } from "../api/products/data";

interface Item {
  name: string;
  description: string;
  image: string;
  price: number;
}

interface Product {
  id: number | string;
  name: string;
  description: string;
  price: number;
  category: string;
  items: {
    subCategory: string;
    items: Item[];
  }[];
}

export default async function FilteredProductList({
  category,
}: {
  category: string;
}) {
  const products = await fetchProducts();
  const filteredProducts = products.filter(
    (product: { category: string }) =>
      product.category?.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 min-h-screen">
      <div className="flex flex-wrap -mx-4">
        {filteredProducts.map((product: Product) => (
          <div key={product.id} className="w-full">
            {product.items.map((item) => (
              <div key={item.subCategory} className="mb-8">
                <h3 className="text-xl font-bold mb-4">{item.subCategory}</h3>
                <div className="flex flex-wrap -mx-2">
                  {item.items.map((subItem) => (
                    <div key={subItem.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                      <div className="shadow-md p-4 h-full flex flex-col bg-[#ebe8de] rounded-lg">
                        <h4 className="text-lg font-bold mb-2">{subItem.name}</h4>
                        <p className="mb-4 flex-grow">{subItem.description}</p>
                        <img src={subItem.image} alt={subItem.name} className="w-full h-48 object-cover rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
