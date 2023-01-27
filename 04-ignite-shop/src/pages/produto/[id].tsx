import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const {query} = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta 1</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aliquam repellat earum magnam voluptates temporibus officiis enim quod rem voluptate.</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
