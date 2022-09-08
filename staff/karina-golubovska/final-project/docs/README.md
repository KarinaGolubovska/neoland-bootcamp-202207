# ...

![](...)

...

## Functional Description

### Use Cases

User
- view profile (posts, likes, ...)
- view post (photo)
- add item (brand, type, title, description, url, ...)
- remove item
- update item

...

## Technical Description

### Blocks
...

### Data Model

User
- id: ObjectId
- name
- email
- password

Look
- id: ObjectId
- user: ObjectId (from User)
- photo: String
- item: [Item]

Item
- id: ObjectId
- title
- description
- url
- coords: [Number] (ex: [23, 57])

## TODOs

Iteration 0

TODO figma
TODO data model
TODO populate data into db (populate.js)
TODO 
...

Iteration 1

TODO search items (from diff users, by brand, by type, price, ...)
TODO add post (upload image, ...)
...