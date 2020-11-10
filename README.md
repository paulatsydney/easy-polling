# easy-polling

Easy-polling aims to achieve one simple and pure task:\
Check result of an asynchronous task until the result matched required criteria.\
This process is so called "polling" or "poll"!.

## Get Started

```js
const poll = require("easy-polling");

const fnAsyncTask = async () => {
    // Do some async task, like calling a webservice or API
    // Return a result which contains state to be checked
    // Using axios as an example
    return await axios.get("http://domain/api");
}

const fnValidate = (result) => {
    // Input parameter result is the return value of fnAsyncTask
    // Check state, below example check if status equal to done
    return result["status"] === "DONE";
};

// fnAsyncTask: Do some async task, it has a return value
// fnValidate: Check state of return value from above function, if true, return the value, otherwise keep polling
// Polling interval 1000ms
// Polling timeout 30000ms, which means if fnValidate returns false until timeout, polling return null
poll(fnAsyncTask, fnValidate, 1000, 30000).then(pollingResponse = > {
    console.log(pollingResponse);
});
```

## Github Repository

https://github.com/paulatsydney/easy-polling
