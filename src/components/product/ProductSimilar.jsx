import { products } from "../../data/data";
import { Section } from "../../styles/themes/styles";
import Title from "../common/Title";
import ProductList from "./ProductList";

const ProductSimilar = () => {
  return (
    <Section>
      <Title titleText={"Similar Products"} />
      <ProductList products={products.slice(0, 4)} />
    </Section>
  );
};

export default ProductSimilar;