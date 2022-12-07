# QUORUM CODING CHALLENGE

This project was developed after a challenge proposed by Quorum: working out a solution for an application that reads data coming from .csv files locally, handles them to extract their parsed data, perform "queries" and write their output in .csv files, using any suitable programming language. I decided to solve it by using Typescript with Node.js.

## Content
[1. Getting Started](#getting-started)   
&emsp;[1.1 Requirements](#requirements)   
[2. Download and Installation](#download-and-installation)  
[3. Resources](#resources)      
[4. Technologies](#technologies)   
[5. License](#license)   

## Getting Started

The following instructions will help you get a copy of this project up and running on your local machine. You will be able to run it with a single command and generate the necessary .csv files.

### Requirements

You need to have Node.js (preferably the latest LTS version) and npm installed on your machine in order to run this project. You can download it using the link below:

- https://nodejs.org/en/download/

## Download and Installation

Make sure you have Git installed on your machine so you can clone this project by running the following command:

```
git clone https://github.com/luiscoelhodev/quorum-coding-challenge.git
```

Alternatively, if you are reading this README after downloading the .zip file, open a terminal window from the root directory of this project and run the following command:

```
npm run start
```

The command above will run the *'./dist/index.js'* file and generate the two required .csv files inside the root directory of this project: *'legislators-support-oppose-count.csv'* and *'bills.csv'*.

## Resources

The folder *'./assets'* contain the input .csv data that was provided for the challenge and is required for this application to work, as well as a Entity-Relationship Diagram that better illustrates the entity connections. The file *'my-followup-answers.md'* contains my answers to the questions I was expected to answer after finishing the challenge.

## Technologies  

Main technologies in this project:
- [Node.js](https://nodejs.org/en/) - *A JavaScript runtime built on Chrome's V8 JavaScript engine.*
- [Typescript](https://www.typescriptlang.org/) - *A strongly typed programming language that builds on JavaScript.*

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.
