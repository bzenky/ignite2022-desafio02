import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartButton, HeaderContainer, LocationTag } from './styles';
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <a href="/">
          <img src={logo} alt="Coffe Delivery Logo" draggable="false" />
        </a>
        <div>
          <LocationTag>
            <MapPin size={22} color='#8047F8' weight='fill' />
            Rio do Sul, SC 
          </LocationTag>

          <CartButton>
            <ShoppingCart size={22} color='#C47F17' weight='fill' />
          </CartButton>
        </div>
      </nav>
    </HeaderContainer>
  )
}