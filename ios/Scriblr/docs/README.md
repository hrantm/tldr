## TLDV (Too Long Didn't View)

### Background

Sometimes articles can be long winded and have difficulty holding your attention. This mobile application will take articles from the web, summarize the text file into small manageable notes, and display a feed of summarized articles to the user. Users will be able to visit full articles if they wish and will be able to filter their articles based on category.

This will be a great tool for getting quick condensed news on the go!

Development of the features in this application will be guided by
[SMMRY](http://smmry.com/about) and
[NewsAPI](https://newsapi.org/#documentation)

### Functionality & MVP

With this application, users will be able to:

- [ ] Sign in/Log in,
- [ ] Article feed shows all articles,
- [ ] Article show displays single article summary and links to original article,
- [ ] Summarize articles into concise notes,
- [ ] User can filter articles based on category
- [ ] Demo Page


### Wireframes

![wireframes](images/flex-settings.png)

### Technologies & Technical Challenges

This mobile application will be implemented with JavaScript, Ruby, Rails, React Native, the NEWS API and the SMMRY API

The primary technical challenges will be:

- Implementing React Native Framework
- Interacting with the News and SMMRY API
- Incorporating a iOS emulator into the Demo Page

Additionally another one of our challenges will be to aggregate the news and update our database with new news

### Group Members & Work Breakdown

Our group consists of three members, Harvey Mirijanyan and Ryley Sill, Daniel Cheng.

Harvey's primary responsibility will be
- Setting up backend auth
- Create CRUD cycle for Notes
- Build out API endpoints
- Build Database

Ryley's primary responsibility will be
- Implement beautiful styling for all views
- Manage redux cycle and maintain flat state
- Build out efficient component hierarchy

Daniel's primary responsibility will be
- Set up relationship between application and News API
- Set up relationship between application and SMMRY API
- Build Demo Page

### Implementation Timeline

**Day 1**: Build out auth and start views
- Backend Auth(Harvey)
- Frontend Auth(Ryley)
- Research News API(Daniel)

**Day 2**: Build Notes backend, implement Redux Cycle for note saving
- Build backend for Notes(Harvey)
- Build Redux cycle for Notes(Ryley)
- Research Summarize algorithm and SMMRY API(Daniel)

**Day 3**: Connect Frontend to Backend, begin styling and implement News API

- Start connecting backend to firebase(Harvey)
- Start Styling Views(Ryley)
- Implement News API(Daniel)

**Day 4**: Start Demo page, finish styling and incorporate SMMRY API

- Finish up Firebase, start Demo Page(Harvey)
- Finish up all styling(Ryley)
- Implement SMMRY API(Daniel)

**Day 5**: Create demo page for application extension. By the end of the day:
- Set up github pages (Harvey)
- Set up Emulator on Demo Page(Ryley)
- Create production Readme(Daniel)

### Plan for getting users and reviews
- Reach out to friends and classmates
- Put on product Hunt

### Bonus Features
- More categories
- matching web application
