


### Technologies 
- Zustand 
- GraphQL
- MYSQL
- Antd
- React
- Tailwindcss


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
- casts string
- director
- summary
- country
- genres [ids] JSON
- sellerId ref seller table id
- releasedYear: Date
- duration int

#### Rating
- movieId int
- rate int
- customerId