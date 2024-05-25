## USER MENEGEMENT API

- POST : /user/register

request body:

```json
{
  "username": "",
  "email": "",
  "alamat": "",
  "nomor hp": "",
  "role": "",
  "password": ""
}
```

response body:

```json
{
  "status": 200,
  "message": ""
}
```

- POST : /user/login

request body:

```json
{
  "email": "",
  "password": ""
}
```

response body:

```json
{
  "message": "",
  "token": ""
}
```

## PRODUCT MANAGEMENT

- GET: /product

response body:

```json
{
  "message": "",
  "payload": [
    {
      "id": "",
      "merek": "",
      "model": "",
      "color": "",
      "tipe": "",
      "tahun": "",
      "price": "",
      "stok": "",
      "spesifikasi": "",
      "image": ""
    }
  ]
}
```

- GET: /product/:id

response body:

```json
{
  "message": "",
  "payload": [
    {
      "id": "",
      "merek": "",
      "model": "",
      "color": "",
      "tipe": "",
      "tahun": "",
      "price": "",
      "stok": "",
      "spesifikasi": "",
      "image": ""
    }
  ]
}
```

- POST: /product

requeest body:

```json
{
  "merek": "",
  "model": "",
  "color": "",
  "tipe": "",
  "tahun": "",
  "price": "",
  "stok": "",
  "spesifikasi": "",
  "image": ""
}
```

response body:

```json
{
  "message": "",
  "payload": [
    {
      "id": "",
      "merek": "",
      "model": "",
      "color": "",
      "tipe": "",
      "tahun": "",
      "price": "",
      "stok": "",
      "spesifikasi": "",
      "image": ""
    }
  ]
}
```

- PUT: /product/:id

response body:

```json
{
  "merek": "",
  "model": "",
  "color": "",
  "tipe": "",
  "tahun": "",
  "price": "",
  "stok": "",
  "spesifikasi": "",
  "image": ""
}
```

response body :

```json
{
  "message": "",
  "payload": [
    {
      "id": "",
      "merek": "",
      "model": "",
      "color": "",
      "tipe": "",
      "tahun": "",
      "price": "",
      "stok": "",
      "spesifikasi": "",
      "image": ""
    }
  ]
}
```

- DELETE: /product/:id

response body :

```json
{
  "message": "",
  "payload": [
    {
      "id": "",
      "merek": "",
      "model": "",
      "color": "",
      "tipe": "",
      "tahun": "",
      "price": "",
      "stok": "",
      "spesifikasi": "",
      "image": ""
    }
  ]
}
```

## TRANSACTIONS API

- POST : /transaction

request body

```json
{
  "no-order": "",
  "total-price": 10000,
  "products": {
    "id-product": "",
    "quantyty": ""
  }
}
```

- GET : /trancation/:userid

response body

```json
{
  "message": "",
  "payload": [
    {
      "no-order": "xxx",
      "total-price": 10000,
      "products": {
        "id-product": "",
        "quantyty": ""
      }
    }
  ]
}
```
