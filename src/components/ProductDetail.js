import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
  const product = props.product;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img
        src={product.name}
        alt={product.name}
        onClick={() => props.setProduct(product)}
      />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
    </DetailWrapper>
  );
};

export default ProductDetail;
