import formatCurrency from '@/utility/formatCurrency'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

/**
 * @typedef {StoreItemProps} obj - object containing store item properties
 * @property {number} obj.id - store item id
 * @property {string} obj.name - store item name
 * @property {number} obj.price - store item price
 * @property {string} obj.imgUrl - store item image url
 */
type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

StoreItem()

/**
 * @param {StoreItemProps} props - store item properties
 * @returns {JSX.Element} store item component
 */
export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps): JSX.Element {
    const quantity = 1
    return (
        <Card className='h-100'>
            <Card.Img variant='top' src={imgUrl} height='200px' style={{ objectFit: 'cover' }} />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button className='w-100'>+ Add To Cart</Button>
                    ) : (
                        <div className='d-flex align-items-center flex-column' style={{ gap: '.5rem' }}>
                            <div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem' }}>
                                <Button>-</Button>
                                <div>
                                    <span className='fs-3'>{quantity}</span>
                                    in cart
                                </div>
                                <Button>+</Button>
                            </div>
                            <Button variant='danger' size='sm'>
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}
