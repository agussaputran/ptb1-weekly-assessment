# 5th Week Backend Assessment
Assignment checklist
- [x] Create a function to find, update and delete data. See: [index,js](index.js)
- [x] Create an API to get all data provided

**Deadline**: Sunday, 7 November 2021, 12:00 WIB (12 siang)

## Instructions
- Run ```npm i``` to install dependecies
- Run ```npm start``` to start the server.
- Run ```npm db@reset``` to restore database to original state

Server should be started on port 8000

## API
### GET
```GET /province``` to retrieve all provinces

Respond:
```json
[
  {
    "id": 1,
    "name": "JAWA SELATAN",
    "created_at": "2021-11-11T13:37:08.638Z",
    "updated_at": "2021-11-11T13:37:08.638Z",
    "deleted_at": null
  },
  {
    "id": 11,
    "name": "ACEH",
    "created_at": "2021-11-11T13:36:39.060Z",
    "updated_at": "2021-11-11T13:36:39.060Z",
    "deleted_at": null
  },
  {
    "id": 12,
    "name": "SUMATERA UTARA",
    "created_at": "2021-11-11T13:36:39.060Z",
    "updated_at": "2021-11-11T13:36:39.060Z",
    "deleted_at": null
  }
]

```

```GET /province/?id=12``` to get province by Id

Response:
```json
{
  "id": 12,
  "name": "SUMATERA UTARA",
  "created_at": "2021-11-11T13:36:39.060Z",
  "updated_at": "2021-11-11T13:36:39.060Z",
  "deleted_at": null
}
```

### PUT
```PUT /province/?id=12&name=SULAWESI SELATAN``` to update province name by Id

Request body:
```json
{
  "id": 12,
  "name": "SULAWESI SELATAN",
  "created_at": "2021-11-11T13:36:39.060Z",
  "updated_at": "2021-11-11T13:43:42.219Z",
  "deleted_at": null
}
```

### DELETE
```DELETE /province/?id=11``` to delete province by Id

Request body:
```json
{
  "id": 11,
  "name": "ACEH",
  "created_at": "2021-11-11T13:36:39.060Z",
  "updated_at": "2021-11-11T13:36:39.060Z",
  "deleted_at": null
}
```