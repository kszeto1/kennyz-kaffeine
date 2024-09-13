import FilteredProductList from "../products/FilteredProductList";

export default function FilteredProductListWrapper({ category }: { category: string }) {
  return <FilteredProductList category={category} />;
}