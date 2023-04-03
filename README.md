# PASSWORD GENERATOR

## Description

For this project, I was provided starter HTML and CSS with a button and event listener in the JavaScript. I was tasked to create a random password generator that would accept user inputs and options. 

The script consists of 4 seperate character pools and, based on user needs, compiles the selected options into a randomly generate password. With the help of a friend, I implemented mulitple functions to; check minumum and maximum requirements, compile selected attributes, randomize the selected attributes, and a Fisher-Yates algorithm to shuffle the output for a truely random output. 

## Usage

As long as the user selects a number of characters between 8-128 characters, the generator will create a random password based on other attributes selected by the user. Alerts will notify the users if any inputs fall outside of parameters. 

![Password-Generator](Screenshot%202023-04-02%20171819.png)

[Live Link to Password Generator](https://ruggerheist.github.io/password-generator/)

### Citation

I utilized ChatGPT, an AI language model, to improve my code by addressing some issues. Specifically, ChatGPT assisted me in creating a null function to handle the situation where the user cancels the character length prompt. Additionally, ChatGPT provided suggestions to fix an infinite loop that occurred after the user clicked the "Create Password" button. Initially, I had considered using if statements and breaking up the starting attributes function, but ChatGPT proposed alternative solutions that preserved the original code. I acknowledge ChatGPT's contribution to the improvement of my code and attribute the following changes to its suggestions.
[ChatGPT](https://chat.openai.com/chat)