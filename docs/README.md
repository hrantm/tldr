## Scriblr

### Background

Taking notes during meetings and lectures in both tedious and time consuming. This mobile application will record long speeches, convert the speech to a text file and summarize the text file and turn it into a small manageable note. Users will be able to save their notes, and revisit them individually.

This will be a great tool for college students, business professionals as well as the hearing impaired.

Development of the features in this application will be guided by
[SMMRY](http://smmry.com/about) and
[WATSON](https://github.com/watson-developer-cloud/node-sdk)

### Functionality & MVP

With this application, users will be able to:

- [ ] Sign in/Log in,
- [ ] Record Audio,
- [ ] Convert recorded speech to text,
- [ ] Summarize large blocks of text into notes,
- [ ] Create, Read, Delete Notes
- [ ] Demo Page


### Wireframes

![wireframes](images/flex-settings.png)

### Technologies & Technical Challenges

This mobile application will be implemented with JavaScript, Ruby, Rails, React Native, the Watson API and the SMMRY API

The primary technical challenges will be:

- Implementing React Native Framework
- Interacting with the Watson and SMMRY API
- Incorporating a iOS emulator into the Demo Page

Additionally another one of our challenges will be to make the app accessible to people with hearing impairments at every level

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
- Set up relationship between application and Watson API
- Set up relationship between application and SMMRY API
- Build Demo Page

### Implementation Timeline

**Day 1**: Build out auth and start views
- Backend Auth(Harvey)
- Frontend Auth(Ryley)
- Research Watson API(Daniel)

**Day 2**: Build Notes backend, implement Redux Cycle for note saving
- Build backend for Notes(Harvey)
- Build Redux cycle for Notes(Ryley)
- Research Summarize algorithm and SMMRY API(Daniel)

**Day 3**: Connect Frontend to Backend, begin styling and implement Watson API

- Start connecting backend to firebase(Harvey)
- Start Styling Views(Ryley)
- Implement Watson API(Daniel)

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
- Share notes with friends
- Translate notes
- Text to speech
- Online Dashboard for viewing notes(web)
