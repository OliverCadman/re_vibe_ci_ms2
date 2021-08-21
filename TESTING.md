# re:Vibe Website - Testing Details

[Main README.md file](README.md)

# Table of Contents

* [Testing](#Testing)
    * [Markup Validation](#Markup-Validation)
        * [HTML and CSS](#HTML-and-CSS)
            * [W3C](#W3C)
            * [W3C Jigsaw Issues](#W3C-Jigsaw-Issues)
    * [JS Hint Validation](#JS-Hint-Validation)
        * [JS Hint Issues](#JS-Hint-Issues)
            * [Unused/Undefined Variables](#Unused/Undefined-Variables)
            * [Warnings in main.js](#Warnings-in-main.js)
    * [User Stories Testing](#User-Stories-Testing)
        * [Paths Through The Website](#Paths-Through-The-Website)
        * [Path Through The Game](#Path-Through-The-Game)
    * [Testing User Stories from UX Section of README.md](#Testing-User-Stories-from-UX-Section-of-README.md)
        * [New Visitors](#New-Visitors)
        * [Returning Visitors](#Returning-Visitors)
* [Manual Testing of features on all pages](#Manual-Testing-of-features-on-all-pages)
    * [Title Page](#Title-Page)
    * [Home Page](#Home-Page)
        * [Game Play](#Game-Play)
            * [Interval Trainer](#Interval-Trainer)
                * [Interval Training Complete](#Interval-Training-Complete)
                * [Interval Game Over](#Interval-Game-Over)
            * [Chord Identifier](#Chord-Identifier)
                * [Chord Game Complete](#Chord-Game-Complete)
                * [Chord Game Over](#Chord-Game-Over)
        * [Footer](#Footer)
    * [Practice Tips Page](#Practice-Tips-Page)
    * [Contact Page](#Contact-Page)
    * [404 Page](#404-page)
    * [iPad Pro - Bootstrap Class Override](#iPad-Pro---Bootstrap-Class-Override)
* [Bugs](#Bugs)
    * [Fixed Bugs](#Fixed-Bugs)
        * [Using the WebAudio API](#Using-the-WebAudio-API)
        * [runIntervalGame() and runChordGame() functions](#runIntervalGame()-and-runChordGame()-functions)
        * [Replay interval](#Replay-interval)
        * [Answer List Display Bug](#Answer-List-Display-Bug)

    * [Unfixed Bugs](#Unfixed-Bugs)
        * [ScriptProcessorNode Deprecation](#ScriptProcessorNode-Deprecation)
        * [iOS Safari Audio Context Suspended](#iOS-Safari-Audio-Context-Suspended)
* [Lighthouse Testing](#Lighthouse-Testing)
    * [Title Page](#Title-Page)
    * [Home Page](#Home-Page)
    * [Practice Tips Page](#Practice-Tips-Page)
    * [Contact Page](#Contact-Page)
    * [404 Page](#404-page)
        * [Issues](#Issues)
            * [Home Page Best Practice Issues](#Home-Page-Best-Practice-Issues)
* [Further Testing](#Further-Testing)

# Testing

## Markup Validation

### HTML and CSS

Both W3C HTML and Jigsaw CSS Markup Validators were used to check the validity of the source code:

#### W3C 

Passed with no issues

#### W3C Jigsaw Issues

Some errors were thrown when using certain CSS properties on some elements of the page. 

![Screenshot of Jigsaw Errors](assets/images/testing-images/jigsaw-errors.png)

The 'shape-outside' property was used on two classes with float properties, to provide a smooth text-wrap around the images. However, the Jigsaw validator states that these properties don't exist.

![Screenshot of caniuse.com results](assets/images/testing-images/shape-outside-caniuse.png)

Upon discovering this error, the developer consulted the Slack community, and the validity of the 'shape-outside' property was checked with the website 'https://www.caniuse.com'. It was confirmed that this property has cross-browser compatibility, and it's usage wasn't violating best-practice principles. With this, the 'shape-outside' property was not removed from the style.css file.

![Screenshot of Jigsaw warnings](assets/images/testing-images/jigsaw-warnings.png)

The Jigsaw validator also threw some warnings with regards to some properties that were used to control the animation time of the elements animated using the 'animateCSS' library, namely the following properties:

* '--animate-duration' and '--animate-delay' - These properties pertain to the animateCSS library, to control the duration and timing of their animations. 

* '-webkit-shape-outside' - This property was applied to elements with the 'shape-outside' property, to ensure cross-browser compatibility.

Since the warning states that the properties are an unknown vendor extension, it was surmised that these properties are unknown to the Jigsaw validator, and so were not seriously violating any best-practice priniciples. To confirm this definitively, the website was tested on all main browsers, and no issues were found.

Additionally, a warning was thrown with regards to the imported Google Fonts added at the top of the Custom CSS file. This was unexpected, as the same method of importing Google Fonts was used for the Milestone Project 1. When validating the code using Jigsaw for this project, there were no warnings with regards to this method of importing Google Fonts.


### JS Hint Validation

The JSHint service was used to lint and validate the JavaScript source code used to develop this project.

#### JS Hint Issues

##### Unused/Undefined Variables

Upon validating each JavaScript file with JSHint, there were multiple issues regarding unused and undefined variables.

![Screenshot of JSHint results for email.js](assets/images/testing-images/js-hint-emailjs.png)

![Screenshot of JSHint results for title.js](assets/images/testing-images/js-hint-vivusjs.png)

The issues in the images above pertain to the external libraries used to implement Email functionality using the emailJS library/service, as well as the animation of the SVGs used in the title page (index.html). JSHint is stating that these variables are undefined due to the pertaining libraries not being recognised, as they are from an external source. 

Functionality has been checked thoroughly on all main browsers, and it can be confirmed that the code functions correctly and as expected.

![Screenshot of JSHint results for data.js](assets/images/testing-images/js-hint-datajs.png)

Similarly to the issues regarding external libraries, JSHint is not recognising the variables in data.js as being defined or used, due to the fact that the object arrays assigned to these variables are being accessed and used by another file 'main.js'. This decision was made to keep code as organised as possible, but unfortunately results in not getting a clean result from JSHint.

##### Warnings in main.js

![Screenshot of JSHint warnings for main.js](assets/images/testing-images/js-hint-warnings.png)

Three warnings were being thrown when validating the JavaScript code in main.js. These warnings are being generated by the for loops which are used to generate the buttons to start the game, and to submit the answers using the buttons. 

The severity of these warnings is hard to gauge, since I used the Code Institute's walkthrough project 'Love Maths' as a guide for creating this code. Again, I have thoroughly tested the code and have encountered no issues with regards to the functionality. Since the JSHint warning states that 'referencing the outer-scoped variable may lead to confusing semantics', the developer surmised that it was sufficient enough to explicitly state the purpose of the code in a comment.

## User Stories Testing

### Paths Through the Website

There is only one main path through the website:

Title Page > Home Page > Practice Tips > Contact

An original intention for the structure of the website was to invite the user to visit the Practice Tips page once they had completed the game. This was going to be achieved by including a button in the bootstrap modal window when the user had completed the game, with the text content 'Visit our Practice Tips Page'.

However, as the project developed, more buttons were added to the modal window which were game-specific:

* Play Again
* Try our Chord Identifier/Interval Trainer
* Close

It was determined that adding a fourth button to this window would result in the window being too busy, risking cognitive overload for the user, and a bad user experience.

Therefore, as it was most important that the three buttons already included related specifically to the game platform (which is the most important aspect of the website), the decision was made to omit the button linked to the Practice Tips page.

### Path through the game

The game is structured as follows:

* Choose Game Mode 
* Click 'Begin Training'
* Countdown from 3
* Answer 10 questions correctly/Lose all three lives
* Repeat sound by clicking speaker icon (if desired)
* Game complete/game over

Once the game is complete or the game is over, the user can choose to:

* Play Again - Selecting this option begins the game directly from the countdown, in the same game mode.

* Try the Interval Trainer/Chord Identifier - Dependent on which game mode the user is currently in, the alternative game mode will be an option for the user to select. This will bring the user to the point where they click 'Begin Training', in the alternative game mode.

* Close - This closes the modal window, and leaves the user to browse the website at their own will.

## Testing User Stories from UX Section of README.md

### New Visitors

1. As a new visitor, I want the purpose of the website to be immediatey apparent, so I can quickly trust that the website will suit my needs.

    1. Much consideration and thought was invested in creating a brand name which made the purpose of the website immediately apparent, while also emitting a sleek, contemporary feeling. With this, the name 're:Vibe' was created, as the word 'Vibe' is directly attributed to vibrations, and sound. 

    2. Upon landing on the website, the user is immediately presented with a sleek animation of the re:Vibe logo, featuring an animation of two SVGs.
        1. The re:Vibe text logo
        2. An image of an ear

    These animations are intended to draw the user into the purpose of the website in a smooth manner, and to immediately grab the users attention, while reinforcing the purpose of the website and re:Vibe brand.

    3. To further reinforce the purpose of the website, a button is faded in with the text content 'ear training' featured above. This was added to guarantee that the purpose of the website was as obvious and recognisable as possible.

2. As a new visitor, I want to be able to navigate the site intuitively and with ease, so that my time isn't wasted.

    1. With a fixed, responsive navbar displayed on all pages, users on all screen sizes are always able to view the navigation and navigate around the website with minimal effort.

    2. A clickable logo is visible on all pages, and on all screen sizes. Clicking this logo will take the user back to the website's home page.

    3. Visual feedback is provided for users on laptop/desktop, with the inclusion of 'hover' pseudo-classes in the navlinks, as well as styling for active navlinks.

    4. 'Play Again/Try Again' buttons in completed game/game over modal windows - The decision was made to implement functionality to allow the user to play the game again, immediately from when the countdown begins. This was purely a UX-based decision, since it minimised the amount of clicks the user had to make in order to start the game again, if they so wished.

3. As a new visitor, I want instructions of how to use the platform to be clearly presented, so I can start using the platform as quickly as possible.

    1. Upon landing on the website's home page, the user is immediately presented with instructions on how to use the platform. The text content used to provide instructions is intended to be fully comprehensive, while also being concise. 
    2. Sufficient contrast between the dark background and light, readable font ensures that the user can read the text content easily.
    3. The button with text content 'Begin Training' is initially replaced with 'Please Select Training Mode', to further ensure that the user knows how to use the platform, while minimising cognitive overload.

4. As a new visitor, I want clear visual feedback when I am using the platform, so I know that the game is responding to my actions.

    1. Three 'user' fontawesome icons are displayed in the right hand corner of the game window.
    2. Information on how many correct answers the user has remaining is present on the left hand side of the game window.
    3. The speaker icon is animated using animateCSS. When a note is played, the speaker icon is animated to the beat of the chord, with the effect 'heartbeat'. This animation is also applied when the user clicks the icon to replay the sound. 
    4. When a user submits an incorrect answer, the speaker icon wobbles, a 'user' icon is removed from the window, and a message is displayed to the user, informing them of how many lives they have remaining.
    5. When a user submits a correct answer, the speaker icon is replaced with notation of the correct answer, along with the name of the interval/chord.
    6. Modal windows are presented to the user immediately upon completing the game, or losing all three lives. In these modals, a message is presented congratulating or commiserating the user, along with a list of the correct answers they submitted, with images of the notation.

5. As a new visitor, I want the website to be visually appealing with good colour contrast, so I'm not distracted from the learning experience.

    1. A key design decision in the initial development of the project was to have a 'dark mode' theme. The website's background is dark in colour, and contrasted with a relatively bring user interface/GUI. This decision was made to encourage the user to focus on the game/learning experience.
    2. The images used in the header sections of the 'Practice Tips' and 'Contact' pages were chosen to emit a calming, peaceful and focused emotion.
    3. When beginning the game from the countdown, an opaque overlay is added to the game background, to 'dim the lights' and immerse the user in the moment of gameplay.

6. As a new visitor, I want the learning experience to be engaging and challenging, so that I am stimulated by the experience.

    1. A countdown is included, as an effort to engage the user in the moment, and anticipate the start of the game.
    2. The use of an opaque overlay is intended to immerse the user in the game.
    3. A wide selection of intervals and chords is included in the data.js file. There are a range of 144 intervals available to be generated, as well as 60 chords available to be generated. This ensures that the game has variety, and there's a lesser chance that the user will hear the same interval/chord twice.

### Returning Visitors

1. As a returning visitor, I want to be able to create a profile on the website, so I can save and keep track of my progress.

    1. Unfortunately, the answer to this user story will only be available when the developer learns more about backend development, so a database can be built to hold the user information. This user story will be fulfilled in the future release.

2. As a returning visitor, I want to be able to navigate to a contact form, so I can give any positive or negative feedback, or ask any questions.

    1. A link to the website's contact page is present and clearly visible at all times, on all pages.
    2. Customised form validation is included using JavaScript, to inform the user if they have inputted any information incorrectly.

3. As a returning visitor, I want to learn more about the different aspects of aural training and music practice in general, so I can build more on my experience and knowledge of the musical discipline.
    
    1. The website features a 'Practice Tips' page, which is easy to navigate to, since the link to the page is present at all times, on all pages by way of a fixed navbar.
    2. The Practice Tips page features five cards, containing different tips on how to go about learning/practicing ear training. This information is presented clearly, with good colour contrast, and visual aids through the use of vector graphics.
    3. A side bar is present on the 'Practice Tips' page, displaying four embedded YouTube videos, directly related to the practice of Ear Training, and the practice/learning of music theory.

4. As a returning visitor, I want to see a leaderboard in the challenge section, detailing the high scores submitted by the other users of the website, so that I feel stimulated and engaged.
    
    1. Unfortunately, the answer to this user story will only be available when the developer learns more about backend development, so a database can be built to hold the user information. This user story will be fulfilled in the future release.

# Manual Testing of features on all pages

Manual testing was undertaken on the following browser platforms: 

* Google Chrome
* Apple Safari
* Mozilla Firefox

## Title Page

1. Confirm the Vivus Animation 'draws' the SVGs smoothly, and both SVGs are animated in sync with eachother.
2. Confirm the div featuring text content 'ear training' and button 'Enter' fades in correctly, and is timed correctly.
3. Hover over 'Enter' button to confirm hover styling is present.
4. Click 'Enter' button to confirm it is correctly linked to the Home Page.

## Home Page

1. Navigation Bar
    1. Navigate to home page on desktop, tablet and mobile.
    2. Change screen size from laptop to mobile to check if responsive navbar collapses to burger icon as intended.
    3. Confirm that the logo is present in the navbar on all device sizes.
    4. Hover over navbar links to ensure that each link is underlined upon hovering.

2. Game Section 
    1. Confirm the responsivity of the section, by ensuring the columns collapse to span the full width of the container on iPad and mobile devices, and expand to three columns on laptop and desktop screen sizes.
    2. Confirm that the section is cleared from the fixed navbar - top padding was applied to the section to ensure this.
    3. Confirm that the text content for instructions is clearly visible on all device sizes.

3. Graphical User Interface 
    1. Confirm that the entire game background is visible on all device sizes.
    2. Confirm that the buttons scale correctly upon hovering.
    3. Confirm that initial text 'Please Select Game Mode' is present upon first page load, and is disabled.


### Game Play 

#### Interval Trainer

1. Select Interval Trainer
    1. Hover over button to confirm that it scales as expected.
    2. Confirm that the heading for the game mode 'Interval Trainer' is displayed in the top-left corner of the GUI, when button is clicked.
    3. Confirm that the disabled button becomes enabled and is replaced with text content 'Begin Training', and is styled as intended.
    4. Confirm that speaker icon appears.
    5. Confirm that the buttons to select game mode are hidden.

2. Click 'Begin Training' button
    1. Confirm that the opaque overlay is applied.
    2. Confirm that the countdown begins.
    3. Confirm that the 'Begin Training' button is hidden.

3. Confirm that only one interval is played (not all intervals in 'questions' object)

4. Confirm the content 'Correct Answers Remaining' and fontawesome 'user' icons are displayed correctly.

5. Confirm the speaker animates in time with the interval played.

6. Click the speaker icon to confirm that the interval is replaying correctly - 

There was an issue with this, as the click event listener assigned to the speaker icon was 'remembering' the intervals/chords as the game progressed, and would play them all at once. This is obviously not ideal. I added an 'off.("click")' removeEventListener method immediately before adding the click event, which solved the issue, and resulted in the individual interval/chord in question playing correctly.

7. Select an incorrect answer
    1. Confirm the speaker icon wobbles
    2. Confirm the relevant audio file is played
    2. Confirm a fontawesome 'user' icon is removed from GUI
    3. Confirm the text content to inform of how many lives are left is displaying, and fades in and out correctly.

8. Select a correct answer
    1. Confirm the speaker icon is replaced with the name of the interval/chord and it's accompanying name, and animated correctly with correct timing.
    2. Confirm the relevant audio file is played
    3. Confirm that the text content 'Correct Answers Remaining', decrements from 10 correctly.

9. Next question
    1. Confirm the name and image of interval is replaced with the speaker icon, and animated correctly, with correct timing.
    2. Confirm that the next interval plays, without playing previous intervals.
    3. Confirm the speaker icon animates correctly.

10. Repeat steps 6, and 8 through 9 until game complete.

or

11. Select three incorrect answers (please visit sub-header 'Game Over' for relative testing information)

##### Interval Game Complete

1. Game complete modal
    1. Confirm that the bootstrap modal window is displayed
    2. Confirm that the correct amount of lives remaining is displayed.
    3. Confirm that the relevant audio file is played.
    4. Confirm that the list of correct answers is displayed correctly, along with the image of the notation.

2. Click 'Play Again' button
    1. Confirm that this begins the game, in the same game mode, from the countdown.
    2. Confirm that all variables are reset and displayed correctly, and are positioned in the exact same places, on all device sizes.
    3. Confirm that one interval is played - 
    There was an issue here, much like the issue with regards to replaying the sound by clicking the speaker icon. The function containing the for loop to grab 10 intervals was running three times, collecting 30 intervals. This resulted in three sounds being played at once. I added a method to remove event listener from button to 'Play Again' before adding the event listener. This solved the issue.
    4. Repeat the steps taken in the first round of the game to ensure that game runs the same as the previous round.

3. Click the 'Try Our Chord Identifier' button
    1. Confirm that this invokes the function readyGame correctly, and is passing in the correct gameType as an argument.
    2. Confirm that the heading 'Chord Identifier' is present in the top-left corner of the GUI.
    3. Confirm that the opaque overlay is hidden.
    4. Click 'Begin Training' to confirm countdown is initiated and displayed correctly.
    5. Confirm that the sound played is indeed a chord, instead of an interval.
    6. Confirm that one sound is played at a time.
    7. Click the speaker icon to confirm that the chord in question is replayed correctly.
    8. Confirm that the list of optional answers in buttons relate to a chord, and not an interval.
    9. Repeat the same process undertaken in Interval Trainer to see if game runs through without and issues.

4. Click the 'Close' button 
    1. Confirm that the features of the GUI are all present, as they were upon first page load.
    2. Select a game mode and begin a game, using the same manual testing procedures taken. Play the game through to confirm it functions as intended.

##### Interval Game Over

1. Game over modal
    1. Confirm that the bootstrap modal window is displayed
    2. Confirm that the correct amount of lives remaining is displayed.
    3. Confirm that the relevant audio file is played.
    4. Confirm that the list of correct answers is displayed correctly, along with the image of the notation.


2. Click 'Play Again' button
    1. Confirm that this begins the game, in the same game mode, from the countdown.
    2. Confirm that all variables are reset and displayed correctly, and are positioned in the exact same places, on all device sizes.
    3. Confirm that one interval is played - 
    There was an issue here, much like the issue with regards to replaying the sound by clicking the speaker icon. The function containing the for loop to grab 10 intervals was running three times, collecting 30 intervals. This resulted in three sounds being played at once. I added a method to remove event listener from button to 'Play Again' before adding the event listener. This solved the issue.
    4. Repeat the steps taken in the first round of the game to ensure that game runs the same as the previous round.

3. Click the 'Try Our Chord Identifier' button
    1. Confirm that this invokes the function readyGame correctly, and is passing in the correct gameType as an argument.
    2. Confirm that the heading 'Chord Identifier' is present in the top-left corner of the GUI.
    3. Confirm that the opaque overlay is hidden.
    4. Click 'Begin Training' to confirm countdown is initiated and displayed correctly.
    5. Confirm that the sound played is indeed a chord, instead of an interval.
    6. Confirm that one sound is played at a time.
    7. Click the speaker icon to confirm that the chord in question is replayed correctly.
    8. Confirm that the list of optional answers in buttons relate to a chord, and not an interval.
    9. Repeat the same process undertaken in Interval Trainer Testing to see if game runs through without and issues.

4. Click the 'Close' button 
    1. Confirm that the features of the GUI are all present, as they were upon first page load.
    2. Select a game mode and begin a game, using the same manual testing procedures taken. Play the game through to confirm it functions as expected.

#### Chord Identifier


1. Select Chord Identifier
    1. Confirm that the heading for the game mode 'Chord Identifier' is displayed in the top-left corner of the GUI, when button is clicked.
    2. Confirm that the disabled button becomes enabled and is replaced with text content 'Begin Training', and is styled as intended.
    3. Confirm that speaker icon appears.
    4. Confirm that the buttons to select game mode are hidden.


 2. Click 'Begin Training' button
    1. Confirm that the opaque overlay is applied.
    2. Confirm that the countdown begins.
    3. Confirm that the 'Begin Training' button is hidden.

3. Confirm that only one chord is played (not all chords in 'questions' object)

4. Confirm the content 'Correct Answers Remaining' and fontawesome 'user' icons are displayed correctly.

5. Confirm the speaker animates in time with the chord played.   

6. Click the speaker icon to confirm that the chord is replaying correctly.

7. Select an incorrect answer
   1. Confirm the same functionality tested in 'Interval Trainer' mode is functioning as expected.

8. Select a correct answer
   1. Confirm the same functionality tested in 'Interval Trainer' mode is functioning as expected.

9. Next question
    1. Confirm the same functionality tested in 'Interval Trainer' mode is functioning as expected.

10. Repeat steps 6, and 8 through 9 until game complete.

##### Chord Game Complete

1. Undergo the same manual testing procedures that were undertaken in 'Interval Trainer' mode, to confirm that the game functions correctly, and correct gameType is passed in as argument to countDown function, if 'Play Again' button is selected.

##### Chord Game Over

1. Undergo the same manual testing procedures that were undertaken in 'Interval Trainer' mode, to confirm that the game functions correctly, and correct gameType is passed in as argument to countDown function, if 'Try Again' button is selected.

### Footer

1. Confirm that three social media icons are present, with correct styling and hover pseudo-class applied. Confirm that the footer icons are centered.
2. Collapse to mobile device size and iPad size to ensure responsivity, and the positioning retains it's integrity.

## Practice Tips Page

1. Navigation Bar
    1. Repeat verification steps taken in home page testing.

2. Header section
    1. Confirm that the header is clearly present and correctly sized across all device sizes.
    2. Confirm that the hero image is appropriately sized, relative to device sizes.
    3. Reduce screen size to confirm that each column collapses correctly, and is responsive.

3. Practice Tips Section
    1. Confirm that text content is clearly contrasted against light background.
    2. Reduce screen size to confirm that the images displayed in each card are responsive in size.
    3. Confirm that embedded YouTube videos in the sidebar are playing correctly.
    4. Confirm there is sufficient margin between practice tip cards, on all screen sizes.
    5. Confirm there is sufficient margin between the side bar and the main body, on laptop screen sizes and up.

4. Video Resources Section
    1. Collapse to mobile screen size and iPad device size to confirm each video spans full width of the viewport.

4. Footer
    1. Repeat verification steps taken in home page testing.

## Contact Page

1. Navigation Bar
    1. Repeat verification steps taken in home page testing.

2. Header section
    1. Confirm that the header is clearly present and correctly sized across all device sizes.
    2. Confirm that the hero image is appropriately sized, relative to device sizes.
    3. Reduce screen size to confirm that the columns collapse correctly, and is responsive.
    4. Reduce screen size to mobile, to confirm that the text content sits within the hero image, and is not distracted by the background image.

3. Contact Form Section
    1. Reduce to mobile screen size to confirm that the columns collapse to full-width of viewport.
    2. Confirm that the background for contact form changes to dark colour on mobile screen sizes.

3. Contact Form 
    1. Confirm that the text is sufficiently contrasted against the background.
    2. Input invalid information in name input and click 'Submit', to confirm that the custom error message displays, and is animated correctly.
    3. Replace name input with valid information, and input invalid information into the Email input. Click submit to confirm that the custom error message displays, and is animated correctly.
    4. Replace email input with valid information, and input invalid information into the Questions textarea. Click submit to confirm that the custom error message displays, and is animated correctly.
    3. Input all valid information and click 'Submit', to confirm that Email JS sends the email to the assigned inbox correctly, with status 200.

4. Footer 
    1. Repeat verification steps taken in home page testing.


## 404 Page

1. Type a non-existent destination in the URL to confirm 404 page displays upon trying to access page.
2. Confirm image is appropriately sized on all devices.
3. Collapse to mobile device size to confirm the border-right is hidden.
4. Confirm all content is clearly displayed and centered on all device sizes.
5. Confirm the logo link takes the user back to the website's home page.

## iPad Pro - Bootstrap Class Override

Upon testing the positioning of each page's elements on the iPad Pro screen size, it was discovered that the bootstrap col utility classes applied to laptop/desktop were also being applied to the iPad Pro device. However the iPad Pro screen width wasn't quite large enough to be able to accommodate the content without looking too busy. Therefore, I overrided those classes in the Custom CSS iPad Pro media query, using extra classes 'ipad-pro-override...' applied to the the specific divs in question on each page. This ensured that the overriding of bootstrap classes would only apply to the one div, rather than all the divs on each page sharing the same bootstrap class.

# Bugs

## Fixed Bugs

### Using the WebAudio API

The developer made the choice to use JavaScript to create the sounds needed for the re:Vibe game.

Upon initial development of the re:Vibe project, the native WebAudio API was used to create the synthesisers needed to create the intervals. However, there were many issues with regards to the sound quality, and consistency of volumes. When testing the synthesiser, the volumes of the playback would fluctuate regularly, sometimes so much that they became barely audible.

It was suspected that this was due to inexperience in the usage/correct implementation of the WebAudio, as there is a direct emphasis on the Audio Context’s ‘current time’ to create gain nodes for envelope functionality, which the developer wasn’t so experienced in. Furthermore, the code needed to create the synthesisers was very bulky and convoluted.

Therefore, the developer opted for the usage of Tone.js, a WebAudio framework which is ‘wrapped’ in the native Audio Context, but much of the code to create the required synthesisers is abstracted away. Furthermore, the ToneJS synthesiser provided the ability to pass in the frequency, duration, and scheduling as arguments in its `triggerAttackRelease` envelope and scheduling function. For example:

`const synth = new Tone.Synth();
  synth.oscillator.type = "sine4";
  synth.triggerAttackRelease(frequency1, "8n");
  synth.triggerAttackRelease(frequency2, "8n", "+1");`


All this considered, the choice resulted in much tidier and concise code, and also - importantly - resulted in a consistency of volume across each playback of the sound. 

### runIntervalGame() and runChordGame() functions

When undergoing initial testing, the developer played through the game, and clicked 'Play Again' to ensure that the game repeated correctly. However, what resulted was the playback of three intervals/chords at once, resulting in a completely unintelligible interval/chord. 

A quick fix for that time being was to invoke `location.reload` to mimic a game replay, but of course this was only a stop gap, as refreshing the page would greatly jeopardise many UX decisions in the later development of the platform, particularly if what was desired was to replay the game instantly.

Upon scouring the code, it was found that both these functions were being called three times when the game restarted. Research was undergone to determine what the cause might be, and it was discovered that the cause of this was due to the event listeners not being removed (or 'garbage collected') after game play. With this, the developer removed all event listeners directly before re-adding them. For instance:

  `$(".play-again-btn")
    .off("click")
    .on("click", () => {
      countDown(gameType);
      $("#completed-game-modal").modal("hide");
    });`

Removing the event listeners ensured that the the garbage was collected upon each iteration of the interval and chord questions list, and resulted in the `runIntervalGame()` and `runChordGame()` functions being called only once, when the game was replayed. 

### Replay interval

I had the a similar issue with the click event assigned to the speaker icon, that replays the sound in question when clicked. Over the course of the game, the click event would 'remember' every chord/interval that came before, and would play them all at once, again resulting in unintelligibility. 
Therefore the following code was added to remove the event listener:

`
$("#replay-question")
    .off("click")
    .on("click", () => {
      playChord(questions[currentChord]);
    });`

This code ensured that the click event's 'garbage' was collected, and that only the chord/interval in question is replayed.

### Answer List Display Bug

Upon repetitions of the game, the window in the Completed Game/Game Over modal used to display the answers behaved unexpectedly. 

When playing the game through until the game was complete, I selected Play Again, and answered some answers correctly, then lost all lives. In the Game Over modal window, the message informing that there was no correct answers was present, as well as the list of correct answers. 

Furthermore, when playing the game and losing all lives upon repetition, the Game Over modal’s correct answer list display was ‘remembering’ the answers for the previous games, as well as displaying the correct answers for the current game.

To deal with this, I invoked the resetGlobalVariable function within the click event of each button in the modal window, as before doing this, the function was in the same scope as the map method to display the list of correct answers. Putting this function inside each click event, along with setting the answerDisplay.innerHTML to an empty string inside the click event, has seemed to have squashed this bug.

This bug spurred me to test the running of the game based on the variety of outcomes and actions that are possible, to thoroughly test whether this bug was well and truly squashed. Below is a chronological outline of the patterns of game play that were undertaken.

1. Select Interval Trainer Mode > Begin Training > Complete Game
2. Play Again > Select three correct answers > Lose all Lives
3. Try Again > Lose all Lives
4. Try Again > Complete Game
5. Try Again > Lose all Lives
6. Try Again > Complete Game
7. Select Chord Trainer Mode > Begin Training > Complete Game
8. Play Again > Lose all Lives
9. Try Again > Select three correct answers > Lose all Lives
10. Try Again > Lose all Lives
11. Try Again > Complete Game
12. Select Interval Trainer Mode > Begin Training > Complete Game
13. Play Again > Lose all Lives
14. Try Again > Answer 3 questions correctly > Lose all Lives
15. Try Again > Complete Game
16. Close Modal > Select Interval Trainer Mode from GUI > Begin Training > Complete Game
17. Close Modal > Select Interval Trainer Mode from GUI > Begin Training > Lose all Lives
19. Close Modal > Select Interval Trainer Mode from GUI > Begin Training > answer 3 questions correctly > Lose all Lives
20. Close Modal > Select Chord Identifier Mode from GUI > Begin Training > Complete Game
21. Close Modal > Select Chord Identifier Mode from GUI > Begin Training > Lose all Lives
22. Close Modal > Select Chord Identifier Mode from GUI > Answer 3 questions correctly > Lose all Lives

After testing all of these iterations of game play in order, the answer display was displaying correctly, each time the Completed Game or Game Over modals were displayed. From here, I was confident that the bug was indeed squashed.


## Unfixed Bugs

### ScriptProcessorNode Deprecation

When using the ToneJS library, a warning is shown in the console:

`[Deprecation] The ScriptProcessorNode is deprecated. Use AudioWorkletNode instead.`

Upon investigation, it was found that the warning was being thrown by an assignment of ToneJS' 'analyser' feature, which is assigned to the function `nativeAudioContext.createScriptProcessorNode()`.

The developer doesn't have an analyser assigned to their audio context, so it is their hope that this warning doesn't directly impact the functionality of their website. Furthermore, the developer is using the latest version of ToneJS (version 14.8.6), and the developer discovered that in version 14.7.39, ToneJS had added the AudioWorkletNode constructors to their context. 

### iOS Safari Audio Context Suspended

When beginning the game on Chrome and Firefox browsers, the sounds were played as expected. However, when using iOS Safari, the sound wasn't being played after the countdown had finished. Upon inspecting the console, an error message was displayed stating that the Audio Context was suspended, and the user needed to interact with the page for the Audio Context to run. This is a UX measure that all browsers have implemented, to ensure that the user isn't barraged with unwanted sound upon visiting a website. However, in this case, the user has interacted with the website, and is expected a sound to be played.

In an attempt to fix this bug, the following code was inputted into the audio.js file:

`if (Tone.context.state === "suspended") {
    Tone.context.state = "running";
  } else {
    Tone.context.state = "running";
  }`

It was expected that this would allow Safari to run the context in the event that it is suspended. However, the issue persisted. 

As a temporary workaround, I added a bootstrap modal to be displayed on load of home-page.html, to alert any visitors using Safari that they might not hear the sounds when the game starts, and if that is the case, click the speaker icon once, and the sounds will play for the rest of the game with no trouble. I regret and appreciate that this bug doesn’t contribute to a completely smooth user experience, however efforts have been made to remedy this by use of a modal alert on page load, clearly stating to the user that they might need to take an action in order to hear the sound. 

This is of course only a stop-gap, and the intention is certainly to find the way to squash the bug as soon as possible, to allow the user a completely smooth user experience.

# Lighthouse Testing

Google Chrome’s ‘Lighthouse’ extension for its DevTools feature was used to test the website’s Performance, Accessibility, Best Practices and Search Engine Optimisation. Listed below are the latest reports from Lighthouse’s run of testing:

## Title Page

![Screenshot of Lighthouse Testing Results for Title Page](assets/images/testing-images/lighthouse-index.png)

## Home Page

![Screenshot of Lighthouse Testing Results for Home Page](assets/images/testing-images/lighthouse-homepage.png)

## Practice Tips Page

![Screenshot of Lighthouse Testing Results for Practice Tips Page](assets/images/testing-images/lighthouse-index.png)

## Contact Page

![Screenshot of Lighthouse Testing Results for Contact Page](assets/images/testing-images/lighthouse-contact.png)

## 404 Page

![Screenshot of Lighthouse Testing Results for 404 Page](assets/images/testing-images/lighthouse-404.png)

### Issues

#### Home Page Best Practice Issue

While the majority of the testing using Google Chrome's 'Lighthouse' brough favourable results. The results for 'Best Practices' testing for the Home Page scored relatively lower. This is due to the deprecated API used for ToneJS. An explanation of this can be found in the [Unfixed Bugs](#Unfixed-Bugs) portion of this file.

# Further Testing

1. Tested all pages on my mobile, laptop and large-screen monitor to ensure responsivity across these device sizes.
2. Asked family, friends and the Slack community to test the website on their own devices. No major issues were found.









    










