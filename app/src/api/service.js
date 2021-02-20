import axios from "axios"
import {Link} from "react-router-dom"
const getProducts = ( ) => {
    fetch('https://coding-challenge-api.aerolab.co/products', { 
        method: 'get', 
        headers: new Headers({
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMxMmYwYzdlNzE4NzAwMjBlMzhmMDciLCJpYXQiOjE2MTM4MzYwNDR9.-au_zWBfFCB8KCr-uEfgJjGXcHx0H3TXddBahp9CLrU',
        }), 
      })
  .then(response => response.json())
  .then(data => console.log(data));
  return (
    <>
        {console.log(data)}
        {
          data 
          ? data.map( producto => (
            <div className="card">
              <Link>
                <img className="medium" src={product.img.url}></img>
              </Link>
              <div className="card-body">
                <Link>
                    <h2>{producto.name}</h2>
                </Link>
              </div>
              <div className="price">{producto.cost}</div>
            </div>          
          ))
          : <div>Xd</div>
        }
    </>
  )
}

export default getProducts