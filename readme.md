## Movie Rental Shop


### Technologies 
- Zustand (state management)
- GraphQL
- MYSQL(database)
- Antd
- React
- Tailwindcss 

### Features
- User signup/signin.
- Customer can rent movies.
- Seller can add or upload movie
- Admin can handle all thins like  genres, movies, role management.
- Bkash and Card payment will coming soon.


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



### Screen shoot

##### Homepage
![2023-06-01_212953 copy.webp](preview%2F2023-06-01_212953%20copy.webp)

##### Add Movie Page
![2023-06-01_213232 copy.webp](preview%2F2023-06-01_213232copy.webp)

##### User Registration
![register copy.webp](preview%2Fregister%20copy.webp)

##### User Login
![logincopy.webp](preview%2Flogincopy.webp)
