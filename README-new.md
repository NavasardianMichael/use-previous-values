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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- About The Hook -->
## About The Hook

The hook provides a unique functionality which helps to maintain data changes. It is the extended version of <a href="https://usehooks.com/usePrevious/">usePrevious</a> hook.

Of course, it is new and there can be some missing cases of logic. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.


<!-- GETTING STARTED -->
## Getting Started

```sh
npm install use-previous-values
```
 

<!-- USAGE EXAMPLES -->
## Usage

Check out an example.

```sh
function App() {
  const [state, setState] = useState<string>("");
  const [data, reset] = usePreviousValues<string>(state, 10);

  return (
    <div className="App">
      <h4>Textarea changes are maintained due to the hook</h4>
      <textarea 
        value={state} 
        onChange={(e) => setState(e.target.value)} 
      />
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
```

<!-- ROADMAP -->
## Roadmap

- [x] Finalize the initial version
- [x] Add extended props callbacks
- [ ] Add exclude functionality
- [ ] Support other intervalTypes
- [ ] Support date short formatting (e.g. dd/mm/yyyy)

See the [open issues](https://github.com/NavasardianMichael/use-previous-values/issues) for a full list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the <a target="_blank" href="https://github.com/NavasardianMichael/use-previous-values">Github Repository</a> and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/short-description`)
3. Commit your Changes (`git commit -m 'Provided some Amazing feature'`)
4. Push to the Branch (`git push origin feature/short-description`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Michael Navasardyan - <a target="_blank" href='mailto:navasardianmichael@gmail.com'>navasardianmichael@gmail.com</a> | <a target="_blank" href='https://www.linkedin.com/in/michael-navasardyan'>linkedin</a>

Project Link: [https://github.com/NavasardianMichael/use-previous-values](https://github.com/NavasardianMichael/use-previous-values)