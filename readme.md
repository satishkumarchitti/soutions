question 1:
    each fatch waits for the prious one to finist 3 users 3s
    to fix this start all requests at the same time instead of one-by-one. map() creates all fetch promises instantly. promise.all() waits for all them together so in total it will take 1s.
question 2:
    flat list of comments but need a nested tree.
    to create this store every element in object{id,comment}.by checking the parentId for null we push parents children.

question 3:
    we have to count how many orders per status.
    we can use .reduce() to build and object{key=status,value=counter}.if it already exists increamt the count by 1.if it not exist start with count 1.
question 4:
    setTimeout captures old state So when react rerenders, the timeout still remembers the old darkMode to fix this use UseRef to always store the latest value.
quesiton 5:
    fetchUser is recreated on every render infinite loop. to fix Wrap fetchUser in useCallback.
question 6:
    triggers too many