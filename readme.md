## Athena Hacks 2021: Hackathon Project

### Inspiration for Emoticontext :D :( :-|

In our fast-paced 24-hour news cycle, emotionally charged content often gets the most clicks, views, and human attention. Our media diets are unhealthy by default, and we're left feeling drained and uninformed. We wanted to create a program that combats the modern media cycle and helps people stay mentally healthy by allowing them to be more intentional about the content they consume. 

### What it does

Emoticontext is a browser extension that uses the Google Cloud Natural Language API to analyze the sentiment of a given webpage. Emoticontext uses icons to tell you about your webpage's sentiment score and alerts you if you're reading an article that's highly negative or otherwise emotionally charged.

### Some images showing Emoticontext in action

#### Emoticontext google chrome extension showing up in the extension manager
![1](https://user-images.githubusercontent.com/45024120/112572655-d525a100-8da7-11eb-8537-164514a4d926.png)

#### Google cloud's sentiment analysis scores Disney's website positively as internet's happy place. :)
![2](https://user-images.githubusercontent.com/45024120/112572652-d48d0a80-8da7-11eb-8f1c-406f04271994.png)

#### Web page with negative sentiment score
![original](https://user-images.githubusercontent.com/45024120/112572645-d060ed00-8da7-11eb-88d8-4278b9049fc7.png)

#### Athenahacks webpage also scores positively on sentiment analysis. :)
![4](https://user-images.githubusercontent.com/45024120/112572648-d35bdd80-8da7-11eb-841f-74e9b6901e0b.png)

### How it's built

Created a Google Chrome browser extension and made requests to the Google Cloud Natural Language API to retrieve webpage sentiment values. We added interactivity, alerts, and sentiment-based icons by writing JavaScript scripts using Chrome APIs. 

### Challenges

No prior experience creating browser extensions. Unfamiliarity with the Chrome APIs. The learning curve was steep and the errors were plentiful, but we gained a lot from the experience! 

### Accomplishments

Scrape a webpage's text data, make the API call from the extension, and render extension icon changes based on webpage sentiment. 

### What's next for emoticontext

Would like to add features that detect fake news, abusive/offensive content, and other notes about a webpage that people should be aware of. We'd also like to expand the range of emotions detected (angry, silly, etc.), display an emotion only if the algorithm's certainty is above a given threshold, be able to parse different types of content (such as social media posts or comments sections), and make the extension more configurable with an options menu. For security purposes - want to eventually make API calls from our own back-end server.
