import React from 'react'
import { request } from '../api/request';
import './productsSlidder.scss'
import Button from '../formComponents/Button';

const ProductSlider = () => {
    const [data, setData] = React.useState([]);
    const [allProducts, setAllProducts] = React.useState(false);

    React.useEffect(() => {
        request.get().then((res) => setData(res.data.products)).catch((error) => console.error(error))
    }, [])

    const productsMap = data?.slice(0, allProducts ? 20 : 4).map((product) => (
        <div className="products__section__cards" key={product.id}>
            <p className='products__section__cards__sale'>sale !</p>
            <div className="products__section__cards__img"><img src={product.images} alt="image" /></div>
            <div className='products__section__cards__title'> <p> {product.title} </p> <p> {product.category} </p> <p> {product.brand} </p> </div>
        </div>
    ))

    return (
        <section>
            <div className="products__section"> {productsMap} </div>
            <Button className={'allProducts__btn'} onClick={() => setAllProducts(!allProducts)}> {!allProducts ? 'All Products' : '4 products'} </Button>
        </section>
    )
}

export default ProductSlider;