import { useContext, useEffect, useState } from 'react';
import * as S from './styles';
import { OrderContext } from '../../context/OrderContext';
import { formatPrice } from '../../helpers';

export default function Header() {
  const [hasAnimateSubtotal, setHasAnimateSubtotal] = useState(false);

  const { order } = useContext(OrderContext);

  useEffect(() => {
    setHasAnimateSubtotal(true);
    const animateTimeout = setTimeout(() => {
      setHasAnimateSubtotal(false);
      clearTimeout(animateTimeout);
    }, 5000);
  }, [order]);

  return (
    <S.Header>
      <img
        src="santex-logo-dark.svg"
        width={73}
        height={16}
        alt="logo"
      />
      <S.SubTotal className={hasAnimateSubtotal ? "animate" : ""}>$ {formatPrice(order?.subTotal || 0)}</S.SubTotal>
    </S.Header >
  );
}
