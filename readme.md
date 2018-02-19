
## Server Run
```
npm install
nodemon dev
http://localhost:4000/graphql
```
## Some Examples For GraphQL
### View Scraped Data
```
{
  items{
    id,
    name,
    price,
    calories
  }
}
```
### Add Query Mutation
```
mutation test($nam: String!, $cal: Float!, $price: Float!) {
  addItem(name: $nam, calories: $cal, price: $price) {
    id,
    name
  }
}
```
### Variables

```
{
  "nam": "Taco Supreme",
  "cal": 499,
  "price": 1.99
}
```
## Some Useful Links

[Timers in Node](https://nodejs.org/en/docs/guides/timers-in-node/)

