# ex-async-timed-loop
Using **setTimeout()** with async functions and promises:

The provided code example uses setTimeout() combined with async functions and promises to create a more controlled flow of function execution. This approach is more suitable for cases when you want to run a sequence of functions or tasks, ensuring that one task is completed before starting the next.

## Pros:
- More controlled execution flow, ensuring that one task is completed before starting the next.
- Takes the function's execution time into account, preventing overlaps.
- Easier to handle errors and control execution flow using promises and async/await.

## Cons:
- More complex than using setInterval().
- Not suitable for cases where a fixed interval between function executions is desired.
