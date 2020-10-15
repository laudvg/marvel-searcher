# :star2: MARVEL SEARCHER :star2:

This is an app to seach for superheroes.
The app does a charachter search. 
You can do a search by writing the name of the character and choose the maximum number of characters you want to receive.

If you are not sure for what to look for, you have a preview of the charachters in alphabetical order and you can set the number of items displayed. 

Every character has a modal where, if available, you'll see more information about the superheroe.

All the data and pictures are from the Marvel Api for Developers.

## I used to make this app

:small_blue_diamond: Javascript<br />
:small_blue_diamond: HTML<br />
:small_blue_diamond: CSS<br />
:small_blue_diamond: React.js<br />
:small_blue_diamond: React-Modal<br />
:small_blue_diamond: Data from the Marvel Api: [https://developer.marvel.com/](https://developer.marvel.com/)

## Before running

You should get your own Keys from the Marvel Api. 
[Register](https://www.marvel.com/signin?referer=https%3A%2F%2Fdeveloper.marvel.com%2Faccount), then get them [here](https://developer.marvel.com/account).
You have to make your hash following the instructions for _Authentication for Server-Side Applications_ in the documentation<br />

Once you have the keys, create a **.env** file. In this file you'll add the variables:<br />
:small_blue_diamond: REACT_APP_MARVEL_API_KEY=(Your api key)<br />
:small_blue_diamond: REACT_APP_MARVEL_HASH=(Your api hash)<br />

Remember to place the .env in .gitignore to prevent your keys to go public.

## How do you turn this on? :oncoming_automobile:

Now, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## What youll find

In the folder **scr**:<br />
  - App files(html,js,css)<br />
  - index(css, js)
  - components: all the api components.<br />
  - services: the files that do API call.<br /><br />

In the folder **public**:<br />
  - images<br />
  - index.html<br /><br />


Now, you can check and edit the app :smiley:

## Next Steps

I would like to improve the character search, and do more complex searchs.<br />
I think could be a nice idea to also display random characters at the begining of the app. <br />
Improve the responsive answer of the app <br />


