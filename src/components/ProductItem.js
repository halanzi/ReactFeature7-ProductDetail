// Styling
import { ProductWrapper, DeleteButtonStyled } from "../styles";

const ProductItem = (props) => {
  const product = props.product;
  const handleDelete = () => {
    props.deleteProduct(product.id);
  };
  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
        onClick={() => props.setProduct(product)}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </ProductWrapper>
  );
};

export default ProductItem;
