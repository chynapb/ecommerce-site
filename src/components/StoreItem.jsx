import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utils/formatCurrency';

export const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className='h-100'>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='400px'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='d-flex flex-column' />
      <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
        <span className='fs-2 ms-3'>{name}</span>
        <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
      </Card.Title>
      <div
        className='mt-auto'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        {quantity === 0 ? (
          <Button
            className='w-75 mb-3'
            onClick={() => increaseCartQuantity(id)}
          >
            Add To Cart
          </Button>
        ) : (
          <div
            className='d-flex align-items-center flex-column'
            style={{ gap: '.5rem' }}
          >
            <div
              className='d-flex align-items-center justify-content-center'
              style={{ gap: '.5rem' }}
            >
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className='fs-3'>{quantity}</span> in cart
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button
              className='mb-3'
              variant='danger'
              size='sm'
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
