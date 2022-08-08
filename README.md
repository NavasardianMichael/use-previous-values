<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-hook">About The Hook</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- About The Hook -->
## About The Hook

Sometimes we need to keep, manage or versionize data changes during the app lifetime. The <a href="https://www.npmjs.com/package/use-previous-values">usePreviousValues</a> hook provides a unique functionality which helps to maintain data changes. It is an extended version of the <a href="https://usehooks.com/usePrevious/">usePrevious</a> hook.

You may  suggest changes by forking this repo and creating a pull request or opening an issue.


<!-- GETTING STARTED -->
## Getting Started

```sh
npm install use-previous-values
```
 

<!-- USAGE EXAMPLES -->
## Usage

The hook accepts two parameters. First is the value which changes are maintained, the second is the steps count which are memorized by the hook: its default is 30 and max value is 50.

The hook returns an array of two elements: first is an array consisting of previous values respectively by steps. The second is a function, which resets the array, i.e., assigns an empty array to the first element of the returned array.   


Check out an example, where every textarea change is kept in variable named data. The second argument helps to avoid memory leak and remember the last 3 values only.

```
import React, { useState } from "react";
import { usePreviousValues } from "use-previous-values";

function App() {
  const [value, setValue] = useState<string>("");
  const [data] = usePreviousValues<typeof value>(value, 3);

  return (
    <div className="App">
      <h4>Textarea changes are maintained</h4>
      <textarea onChange={(e) => setState(e.target.value)} value={state} />
      <hr />
      <h4>Previous values</h4>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
```

And the result is

![hook usage example 1](https://raw.githubusercontent.com/NavasardianMichael/use-previous-values/main/recordings/example-1.gif)


Check out the reset function! After 5 times the value changed, the sixth iteration is done and the data is reseted.

```
import React, { useState } from "react";
import { usePreviousValues } from "use-previous-values";

function App() {
  const [value, setValue] = useState<string>("");
  const [data, reset] = usePreviousValues<typeof value>(value);

  if(data.length > 5) reset();

  return (
    <div className="App">
      <h4>Textarea changes are maintained</h4>
      <textarea onChange={(e) => setValue(e.target.value)} value={value} />
      <hr />
      <h4>Previous values</h4>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
```

And the result is

![hook usage example 2](https://raw.githubusercontent.com/NavasardianMichael/use-previous-values/main/recordings/example-2.gif)


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the <a href="https://github.com/NavasardianMichael/use-previous-values">Github Repository</a> and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/short-description`)
3. Commit your Changes (`git commit -m 'Provided some amazing feature'`)
4. Push to the Branch (`git push origin feature/short-description`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

<a href='mailto:navasardianmichael@gmail.com'>navasardianmichael@gmail.com</a>

<a href='https://www.linkedin.com/in/michael-navasardyan'>linkedin</a>

Project Link: [https://github.com/NavasardianMichael/use-previous-values](https://github.com/NavasardianMichael/use-previous-values)