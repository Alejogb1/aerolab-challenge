import axios from "axios"

const getProducts = ( ) => {
    fetch('URL_GOES_HERE', { 
        method: 'get', 
        headers: new Headers({
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMxMmYwYzdlNzE4NzAwMjBlMzhmMDciLCJpYXQiOjE2MTM4MzYwNDR9.-au_zWBfFCB8KCr-uEfgJjGXcHx0H3TXddBahp9CLrU',
        }), 
      })
  .then(response => response.json())
  .then(data => console.log(data));
}

export default getProducts