import React from 'react'

function Kurs({ kurs }) {
    const { id, ad, fiyat, resim, kategori, aciklama } = kurs;
    return (
        <div className='kurs' style={{padding: '10px'}}>
            <div>

                <img src={resim} alt={ad} width={200} height={200} />
                <h2>{ad}</h2>
                <p>{fiyat}</p>
                <p>{kategori}</p>
                <p>{aciklama}</p>
            </div>
        </div>
    )
}

export default Kurs