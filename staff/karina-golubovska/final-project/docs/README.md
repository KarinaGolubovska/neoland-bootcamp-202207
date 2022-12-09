# Moda 2.0

![alt image](https://i.pinimg.com/474x/e8/b3/17/e8b317feab6f0d30041db92da1f3392e.jpg)

## Introduction
Have you ever liked a jacket in a photo on the Internet, but you have no idea how to find it? 
Moda 2.0 is an application where in just three clicks the thing is already yours.
Register, share your looks with others, look for new ideas and replenish your wardrobe.


## Functional Description

### Use Cases

User
- view profile (posts, likes, ...)
- view post (photo)
- add item (brand, type, title, description, url, ...)
- remove item
- update item
- search item 
- follow others 
- put likes 



<!-- ## Technical Description

### Blocks -->
...

### Data Model

User
- id: ObjectId
- name: String
- email: String
- password : String
- photo: String 

Look
- id: ObjectId
- user: ObjectId (from User)
- photo: String
- description
- item: [Item]

Item
- id: ObjectId
- description:String
- url
- coords: [Number] (ex: [23, 57])
## ROADMAP
### Version 0
- create profile
- download looks
- download with items 
- search looks

### Version 1
- likes function
- chat
- data about the number of followers , following and looks



## TODOs

Iteration (version 0)

- TODO figma 
- TODO data model
- TODO populate data into db (populate.js)
- TODO retrieve Looks
- TODO retrieve Items
- TODO Avatar
- TODO search items (from diff users, by brand, by type, price, ...)

Iteration (version 1)
- TODO add post (upload image, ...)
- TODO add items
- TODO likes
- TODO stats (followers , following , looks)

