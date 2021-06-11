<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Emojtcha React</h3>

  <p align="center">
    CAPTCHA made with Emoji you loved
    <br />
    <br />
    <a href="https://github.com/pknn/emojtcha-react">View Demo</a>
    ·
    <a href="https://github.com/pknn/emojtcha-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/pknn/emojtcha-react/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

CAPTCHA is one of the most frustrating experience of surfing the internet and you know it. There must be a time that you're ready to slam your keyboard, throw your mouse, gouge your eyes out, just from the frustration of solving CAPTCHA, and when you know the struggle of using CAPTCHA, as a web developer, you should get rid of it (maybe), and make your web easier and less frustrate to use.

Introducing Emojtcha, the CAPTCHA made easy with Emoji that everyone loves. Just use it, and you (and probably your users) will love it.

Emojtcha was made with 3 principles in mind.  
1. Easy for developers to adopt
2. Easy for users to use
3. Hard for bot to automate (or it will defeat the purpose of using CAPTCHA)

### Built With

- [React](https://reactjs.org)
- Emoji

<!-- GETTING STARTED -->

## Getting Started


### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- yarn [optional]

  ```sh
  npm install yarn@latest -g
  ```

### Installation

- Using npm
  ```sh
  npm install emojtcha-react
  ```
- Using yarn
  ```sh
  yarn add emojtcha-react
  ```

<!-- USAGE EXAMPLES -->

## Usage

Using Emojtcha is simple as 3 steps  
  ```js
    import React from 'react';
    /* Your others imports */
    // 1. Importing EmojtCha
    import { Emojtcha } from 'emojtcha-react';

    const Component = () => {
      // 2. Define an event handler
      const handleEmojtchaSelected = (isCorrectEmojtcha) => {
        if (isCorrectEmojtcha) {
          /* Do something */
        }
      }

      return (
        <div>
          <!-- Your component content -->
          ...
          <!-- 3. Using EmojtCha -->
          <EmojtCha onSelect={handleEmojtchaSelected} />
        </div>
      )
    }
  ```

Or you can directly set state
  ```js
    import React from 'react';
    /* Your others imports */
    // 1. Importing EmojtCha
    import { Emojtcha } from 'emojtcha-react';

    const Component = () => {
      // 2. Define a state
      const [isValidationPassed, setIsValidationPassed] = React.useState(false)

      return (
        <div>
          <!-- Your component content -->
          ...
          <!-- 3. Using EmojtCha -->
          <EmojtCha onSelect={setIsValidationPassed} />
        </div>
      )
    }
  ```

_For more examples, please refer to the [Documentation (Coming Soon)](https://example.com)_

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/pknn/emojtcha-react/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Pakanon Pantisawat - pakanon.pantisawat@gmail.com

Project Link: [https://github.com/pknn/emojtcha-react](https://github.com/pknn/emojtcha-react)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [styled-components](https://styled-components.com)
- [Rollup.js](https://rollupjs.org)
- [Babel](https://babeljs.io)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/pknn/emojtcha?style=flat-square
[contributors-url]: https://github.com/pknn/emojtcha-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/pknn/emojtcha-react?style=flat-square
[forks-url]: https://github.com/pknn/emojtcha-react/network/members
[stars-shield]: https://img.shields.io/github/stars/pknn/emojtcha-react?style=flat-square
[stars-url]: https://github.com/pknn/emojtcha-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/pknn/emojtcha-react?style=flat-square
[issues-url]: https://github.com/pknn/emojtcha-react/issues
[license-shield]: https://img.shields.io/github/license/pknn/emojtcha-react?logoColor=green&style=flat-square
[license-url]: https://github.com/pknn/emojtcha-react/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/linkedin-connect-blue?style=flat-square
[linkedin-url]: https://www.linkedin.com/in/pakanon-pantisawat-44316b170/
[product-screenshot]: screenshot.png
