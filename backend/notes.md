- Install TypeScript in NodeJS
https://www.geeksforgeeks.org/how-to-use-typescript-on-backend/
- Hash passwords - bcryptjs
<code> const password = bcrypt.hashSync(password, 10) </code>
For security, salt value is at least to be 10.


#### Fix Bugs Method
 
<strong>Issue: When sending a request to <code>/:id</code>, the cast fails.</strong>
> CastError: Cast to ObjectId failed for value "{ blogId: '62ff8eb56f2492dff1ffcbd7' }" (type Object) at path "_id" for model "Blog"  ....
  stringValue: `"{ blogId: '62ff8eb56f2492dff1ffcbd7' }"`,
  kind: 'ObjectId',
  value: { blogId: '62ff8eb56f2492dff1ffcbd7' }

<strong>Fix Method: </strong>
>   const blogId = req.params.id
    const _id = mongoose.Types.ObjectId.createFromHexString(blogId);
