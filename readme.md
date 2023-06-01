

### Tables 
#### User
- firstName
- lastName
- email
- password
- role [seller, admin, customer]
- avatar
- gender
- birthday
- aboutMe
- createdAt DATETIME
- updatedAt DATETIME

#### Movies 
- title
- stock
- price
- discount
- casts
- director
- summary
- country
- genre
- category   JSON[]
- sellerId ref seller table
- releasedYear: Date
- duration

#### Rating
- movieId int
- rate int
- 