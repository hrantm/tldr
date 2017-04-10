## TLDR (Too Long Didn't Read)

### Background

Sometimes articles can be long winded and have difficulty holding your attention. This mobile application takes articles from the web, summarizes the text file into small manageable notes, and displays a feed of summarized articles to the user. Users will be able to visit the full article if they wish and  filter articles based on category.

Development of the features in this application was guided by
[SMMRY](http://smmry.com/about) and
[NewsAPI](https://newsapi.org/#documentation)

## Features and Implementation

This application was implemented with a rails backend and React-Native for the mobile views.

### Current News Sources

In order to get current news sources, we built a rails app that would make AJAX requests to the [NewsAPI](https://newsapi.org/#documentation). References to these articles were saved in a PostgreSQL database. Our rails app provided an easy to use API for our mobile app to have access to those articles.

Article feed:

![feed](docs/feed.png)

### Summarized Articles

Our rails backend also created summarizations of news articles through the use of the [SMMRY API](http://smmry.com/about).

The mobile frontend can access article information and article summaries with the use of AJAX requests which return JSON objects from the rails backend.

Summarized articles:

![show](docs/show.png)

### Text To Speech

React-Native Text To Speech was used on the frontend to allow users to play articles out loud rather than reading them. Users can listen to specific articles as well as all the articles on their feed one after another.

```
resumeArticle () {
  Tts.resume();
  this.setState({speaking: 'playing'});
}

pauseArticle() {
  Tts.pause();
  this.setState({speaking: 'paused'});
}

stopArticle() {
  Tts.stop();
  this.state.speaking = 'stopped';
}

```

## Future Directions for the Project

In addition to the features already implemented, we plan to continue work on this project. The next steps for TLDR are outlined below.

- More categories
- matching web application
