import { productsList } from "../../utils/productsList";
import { CoffeeCard, ProductProps } from "../CoffeeCard";

export function CoffeeMenu() {
  return (
    <>
      {productsList.map((product: ProductProps) => 
        <CoffeeCard key={product.id} coffee={product}/>)
      }
    </>
  )
}