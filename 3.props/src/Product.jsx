import React from 'react'

function Product(props) {
    console.log(props)

    //Bu kullanım daha güvenli ve okunaklıdır.
    const {productName, productPrice} = props; //{productName: "Ayakkabı", productPrice: 3200}
  return (
    <div>
        <div>ÜRÜN BİLGİLERİ</div>

        <div>
            <div>Ürün Adı : {productName}</div>
            <div>Ürün Fiyatı : {productPrice} TL</div>
        </div>
        <hr />
        <div>
            <div>Ürün Adı : {productName}</div>
            <div>Ürün Fiyatı : {productPrice} TL</div>
        </div>
    </div>
  )
}

export default Product