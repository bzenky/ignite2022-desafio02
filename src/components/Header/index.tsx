import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartButton, CartLength, HeaderContainer, LocationTag } from './styles';
import logo from '../../assets/logo.svg'
import { useCart } from '../../hooks/useCart';
import { NavLink } from 'react-router-dom';

export function Header() {
  const { cartLength } = useCart()

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="Coffe Delivery Logo" draggable="false" />
        </NavLink>

        <div>
          <LocationTag>
            <MapPin size={22} color='#8047F8' weight='fill' />
            Rio do Sul, SC 
          </LocationTag>

          <NavLink to="/checkout">
            <CartButton>
              <ShoppingCart size={22} color='#C47F17' weight='fill' />
              {cartLength > 0 && <CartLength>{cartLength}</CartLength>}
            </CartButton>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}