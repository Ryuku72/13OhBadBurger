![GitHub last commit](https://img.shields.io/github/last-commit/Ryuku72/HomeworkW13?style=for-the-badge)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/Ryuku72/HomeworkW13?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/Ryuku72/HomeworkW13?style=for-the-badge)

# HomeworkW13
## Oh!Bad Burger APP
25th May 2020
*****

### Aim
This week we focus on using Handlebars, MySQL and Express within Node.JS to make an app which allows the user to devour burgers. This will then be uploaded to Heroku for marking. However, for flare I wanted to also allow the option to customize your burger... 
<br>

### Working Project Example
* Heroku App https://aqueous-wildwood-59065.herokuapp.com/#
<br>

## Key Concepts for HomeworkW10
- Handlebars
- MySQL Cascade property
- ORMs
- Async
- MVC

## Contents
* [Build Process](#Build_Process)
* [Project Issues](#Project_Issues)
* [Future Plans](#future)
* [Installation](#Installation)
* [Usuage](#Usuage)
* [Tests](#Tests)
* [Additional_Information](#Additional_Information)
 <br>
<a name="Build_Process">

## Build Process 

This week was maybe about MVC's and really organising mySQL tables, your folders and views to follow those core concepts. This is easily visible in how `apiController.js`, `burgers.js`, `orm.js` and 'script.js' files interacted with one another. Folder locations like public and how information was passed via `callbacks` litered this project.

When I started I heard there was a cat project that was very similiar to our homework assignment. Whilst in theory this was true, in reality I should have never taken this as a cue to do what I done... make a custom burger app. As I was doing this, I began with Photoshop and started designing my assets.

After the assets was complete I started using the code from `day3/17-CatsApp` as a baseline of how to organise my code and change what was needed. Next I made my template tables with mySQL and then started hammering away.

Unfortunately, for time restrictions... I used `bootstrap`. This will be changed!~~~

Core things I learnt.
1. Nesting, though ugly is sometimes the best approach to problem.
2. When requesting information from mySQL make sure your capital and uppercase checks out
3. Don't rely on things like `CatsApp` to help you... i don't understand so many things in there
4. Ambition is great.... but its expensive
5. parseInt, JSON.stringfy and other tools are your friend
6. script.js and AJAX plays a major part in your req.body and req.params search
7. Loops are your friend but make sure they end
8. Remember to do something with your responses. 
9. MySQL reference tables, Delete and Update cascades
10. How to validate forms with `script.js` and regEx

I learnt alot with this project but it was taxing.


 <br>
<a name="Project_Issues">

## Project Issues

How do you do forms correctly? How do you find their values correctly? If you are using handlebars, how will you grab a value and change it after the page loads. 

Honestly, there was so many things to learn this time around. Besides trying to push multiple MySQL requests to different tables at the same time (Thank you Luke... your AMAZING!)... the issues were never ending. The biggest problem with MVC is an issue within 1 file can affect all the others. So instead of fixing 1 line of code, you might be fixing ever folder that interacts with that line of code. There was a lot of these issues. 

Core problems
1. I don't understand `querystrings` from the `CatsApp` example
2. I still not 100% about how forms work and validation is painful
3. Interacting with multiple tables and getting errors "Header issues" though educational is painful
4. I don't like bootstrap... but sometimes its a godsend
5. There has to be a method to edit handlebars output... 
6. I did not use the ORM file correctly as I had issues passing data. This is most likely to not using query string or the question function. I did not understand their usuage as code and thus tried to work around it.
7. Using script.js to make buttons work correctly and the relationship to req.body is still alien to me
8. MySQL requests of VALUE vs BY was annoying. Had to fall back on the VALUE tag to sure things would work
9. Join request should not be in the ORM
10. Still not confident about the entire / get process


Happy its done and leason learnt

 <br>
<a name="future">

## Future plans

Currently outstanding issues

1. Should be able to order Burger without Sauce, Topping or patty
2. Price should be correctly formated
3. Tables should be correctly marginalised
4. Bootstrap should be removed
5. Clean up my code
7. Double click still appears to be an issue. 

> 26/05/20202
> Fixed issue with Date by using Handlebars-helper
> Double click is still an issue but added an alert to avoid additional additional clicks
 <br>
<a name="Installation">

## Installation 
1. Copy project from GitHub page. Open terminal, 
 
```sh
$ cd homeworkW13
$ npm install
$ node server.js
```
 \
2. Setup MySQL with seeds. Seeds are located in the `./db` folder. Copy the text from the;

- `schema.sql` Contains the database and table commands
- `seeds.sql` Contains the seeds for the tables 

_OR_ go to _https://aqueous-wildwood-59065.herokuapp.com/#_

<br>
<a name="Usuage">

## Usuage 
Show an example of a burger ordering website
<br>
<a name="Tests">

## Tests
No time to make notes :( \
Some validators have been installed 

<br>
<a name="Additional_Information">

## Additional Information
Licenses: MIT
<br>

### Resources
* NPMJS.com
* W3 Schools
* Medium
* Developer.mozilla.org
* Stackoverflow.com
* Resources provided in Slack
* Youtube tutorials
* Dillinger.io
* Handlebars-Helper

<br>

### Technology
* Heroku
* Node.JS
* Javascript
* Inquirer
* Visual Studio Code
* GitHub
* Google Chrome
* mySQL
* Chalk
* Sequel Pro
* JawsDB
* ZOOM

<br>

## Source
Code was originally supplied in the WAUS-CRAW-FSF-PT-02-2020-U-C-MW / Week 13 / Homework repository on GitLab https://waustralia.bootcampcontent.com/the-university-of-western-australia/WAUS-CRAW-FSF-PT-02-2020-U-C-MW/tree/master/Week%2013/Homework/Instructions
<br>

### Joshua K Bader // Ryuku72 // jaybshinsen@hotmail.com
### Made with ReadMe.Md Generator 
