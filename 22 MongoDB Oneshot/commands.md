# MongoDB Oneshot by CodeWithHarry Youtube

## MongoDB CRUD Operations

### Command Structure
```bash
db.collection.command()
```

### Create Operation

- `insertOne()` - to insert a single document
- `insertMany()` - to insert more than one documents at a time.

### Read Operation

- `find({})` - to get all the documents, no filter is used
- `find({ "name": "Harsh" })` - using the filter

#### using Comparison Operators
- `find({ price: { $gt: 1000 } })` - to find the document(s) where price is greater than 1000
    - `gte` : greator than and equal to
    - `lt` : less than
    - `lte` : less than and equal to
- `find({ price: { $gt: 400, $lt: 1000 } })` - to find the document(s) where price is greater than 400 and less than 1000

- `find({ $or: [{ category: "Electronics" }, {stock: { $lt: 50 } }] })` - category should be electronics *OR* stock is less than 50

- `find({}, { name: 1, price: 1, _id: 0 })` - name and price must be in the output, but not _id, used to select specific field

- `find().sort({ price: -1 }).skip(1).limit(1)` - to get products in limit and according to usecase, used in pagination

### Update Operation

- `updateOne(
    { name: "Wireless Mouse" },
    { $set: { price: 899 } }
    )` - used to update a single document, set for setting the value

- `updateMany(
    { category: "Electronics" },
    { $inc: { stock: 11 } }
    )` - used to update multiple document, inc for increase

- `updateOne(
    { name: "Wireless Mouse" },
    { $push: { tags: "Mouse" } }
    )` - used to push a value in an array

### Delete Operaion

- `deleteOne({ name: "Alice" })` - used to delete a single document
- `deleteMany({ status: "Delivered" })` - used to delete many documents based on the filters