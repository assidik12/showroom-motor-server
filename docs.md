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
  "total_price": 150000,
  "user_email": "ahmad12@gmail.com",
  "products": [
    {
      "id_product": 1,
      "qty": 2
    }
  ]
}
```

response body

```json
{
  "message": "transaction success fatched",
  "result": [
    {
      "no_order": "trx-8625",
      "date": "2024-06-02T02:54:19.847Z",
      "total_price": 150000,
      "transactions": [
        {
          "id_products": 1,
          "qty": 5
        }
      ]
    }
  ]
}
```

- GET : /trancation/:username

response body

```json
{
  "message": "transaction success fatched",
  "result": [
    {
      "no_order": "trx-8625",
      "date": "2024-06-02T02:54:19.847Z",
      "total_price": 150000,
      "transactions": [
        {
          "id_products": 1,
          "qty": 5
        }
      ]
    }
  ]
}
```
