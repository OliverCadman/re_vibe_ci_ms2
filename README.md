# Re:Vibe
*Re:Vibe* is an interactive ear training platform game built with HTML, CSS and JavaScript, for music students of all ages and abilities who would like to improve their ears through the exercises that Re:Vibe provides. Whether the user is taking their first steps into the world of music, or are skilled in reading music and want to improve their ability to play by ear or in an ensemble, Re:Vibe serves as a user friendly, aesthetic platform that musicians enjoy training with time after time.

The website features a welcome page, a home page holding the training platform, a page featuring tips to practice ear training, and a contact page for users to submit feedback/questions to the site owner. 

# Table of Contents

* [UX](#UX)
   * [Strategy](#Strategy)
      * [Vision](#Vision)
      * [Site Owner Goals](#Site-Owner-Goals)
      * [Target Audience](#Target-Audience)
      * [User Stories](#User-Stories)
         * [Visitors](#Visitors)
         * [In or Out?](#In-or-Out)
   * [Scope](#Scope)
   * [Structure](#Structure)
   * [Skeleton](#Skeleton)
   * [Surface](#Surface)
      * [General Considerations](#General-Considerations)
      * [Colour Palette](#Colour-Palette)
      * [Fonts](#Fonts)
      * [Images](#Images)
* [Features](#Features)
   * [Global Features](#Global-Features)
      * [Navbar](#Navbar)
      * [Footer](#Footer)
   * [Title Page](#Title-Page)
   * [Home Page](#Home-Page)
      * [Graphical User Interface](#Graphical-User-Interface)
   * [Practice Tips Page](#Practice-Tips-Page)
   * [Contact Page](#Contact-Page)
   * [404 Page](#404-Page)
   * [Features for Future Implementation](#Features-for-Future-Implementation)
* [Technologies Used](#Technologies-Used)
   * [JavaScript Libraries Used](#JavaScript-Libraries-Used)
* [Testing](#Testing)
* [Credits](#Credits)
   * [Code](#Code)
      * [ToneJS Synthesizers](#ToneJS-Synthesizers)
      * [AnimateCSS](#AnimateCSS)
      * [Shuffling the Answers](#Shuffling-the-Answers)
      * [VivusJS Animations](#VivusJS-Animations)
      * [Hamburger Icon Animation](#Hamburger-Icon-Animation)
      * [Session Storage in safari-modal-alert.js](#Session-Storage-in-safari-modal-alert.js)
      * [For Loop to Generate Intervals/Answers](#For-Loop-to-generate-Intervals/Answers)
      * [Bootstrap Modals and Contact Form](#Bootstrap-Modals-and-Contact-Form)
      * [CSS 'Shape-Outside' Property](#CSS-'Shape-Outside'-Property)
   * [Frequencies for Intervals and Chords](#Frequencies-for-Intervals-and-Chords)
   * [Text Content](#Text-Content)
      * [Home Page Text](#Home-Page-Text)
      * [Practice Tips Page Text](#Practice-Tips-Page-Text)
      * [Contact Page Text](#Contact-Page-Text)
      * [404 Page Text](#404-Page-Text)
   * [Images](#Images)
      * [Home Page Images](#Home-Page-Images)
      * [Practice Tips Page Images](#Practice-Tips-Page-Images)
      * [Contact Page Images](#Contact-Page-Images)
      * [404 Page Images](#404-Page-Images)
   * [Videos](#Videos)
   * [Icons](#Icons)
* [Deployment](#Deployment)
   * [Running the Project Locally](#Running-the-Project-Locally)
* [Acknowledgements](#Acknowledgements)

## UX

### Strategy

#### Vision

While there is certainly no shortage of comprehensive ear training websites already on the web, there are few which provide a clean, aesthetic user experience. As I myself am a musician, I have used a number of ear training websites in the past to brush up on my aural skills. However, many of the websites I have used are crammed with an abundance of large, unnecessary blocks of text content, and the colour schemes used to design the websites are visually unappealing. On top of this, the model of these platforms is more utilitarian and - for want of a better word - rather boring.

With this, the vision of Re:Vibe is to provide the user with an aesthetic and sleek learning experience, designed to minimise cognitive overload so as to maximise focus and learning retention when using the platform. Furthermore, the learning experience will be presented less like a utility, and more like a game, as it is widely documented that learning is best achieved through play.  By implementing these choices coupled with a consistent focus on UX throughout the development of the project, I hope that the end result will serve to encourage users to favour the Re:Vibe ear training platform whenever they want to hone their aural skills.

#### Site Owner Goals

1. Create a platform to inspire and pass on the owner’s experience in music to the younger generation of budding musicians.
2. To establish Re:Vibe as a trusted brand to both new and returning visitors.
3. To provide a fun, game-like learning experience that both the visitors and site owner will enjoy.
4. Provide general tips on the practice of music, and resources to inspire visitors to the website to delve deeper into the world of music.
5. Provide excellent UX to maximise visitor’s dwell time and minimise bounce rate, so as to maximise SEO and brand recognition.
6. Employ a mobile-first design, to cater to users who may be commuting or away from a desktop/laptop computer.
7. Ensure that website is responsive on all device sizes.

#### Target Audience

Potential visitors to the website could be:

1. Music students - Visitors may be studying a musical instrument, and may want to improve their recognition of pitch and chords to improve their efficiency when learning pieces of music.
2. Students preparing for an upcoming exam - as aural tests are an element of practical musical examinations, visitors may want to use the service to brush up on their aural skills for their upcoming examinations.
3. Musicians seeking to play in ensembles (particularly in the jazz idiom) - as jazz music is an art form centred around spontaneity and interplay/communication between musicians, a good foundation of aural skills is essential to a jazz musician’s repertoire.
4. Visual learners - Visitors to the website may benefit from visual indicators when learning.
5. Hobbyists who are casually interested in challenging their ears.

#### User Stories

##### Visitors

As a visitor using the website for the first time, I want…

1. The purpose of the website to be immediately apparent, so I can quickly trust that the website will suit my needs.
2. To be able to navigate the site intuitively and with ease, so that my time isn’t wasted.
3. Instructions of how to use the platform to be clearly presented, so I can start using the platform as quickly as possible.
4. Clear visual feedback when I submit either a correct or incorrect answer, so I know clearly the areas on which I need to improve.
5. The website to be visually appealing with good colour contrast, so I’m not distracted from the learning experience.
6. To see visual aids (particularly notation of the pitches and chords) when correct answer is submitted, so I can better internalise my learning.
7. The learning experience to be engaging and challenging, so that I am stimulated by the experience.

As a returning visitor, I want...

1. To be able to create a profile on the website, so I can save and keep track of my progress.
2. To easily navigate to a contact form, so I can give positive or negative feedback, or ask any questions.
3. Learn more about the different aspects of aural training and music practice in general, so I can build more on my experience and knowledge of the musical discipline.
4. To see a leaderboard in the challenge section, detailing the high scores submitted by other users of the website, so that I feel stimulated and challenged.
5. To be kept up-to-date about any new features that have been added to the website.

##### In or Out?

Below is a table to weight the importance of features in first release, against the feasibility of implementation.

| Feature/Opportunity | Importance (score out of 5) | Feasibility/Viability (score out of 5) | In or Out? |
|---|---|---|---|
| Introduction/welcome page stating the role of the website | 4 | 5 | In |
| Graphical User Interface (GUI) to hold the training exercises | 5 | 5 | In |
| Interval Training Mode | 5 | 5 | In
| Chord Training Mode | 5 | 5 | In
| A score tally of correct or incorrect answers | 5 | 5 | In |
| Symbols to indicate how many lives the user has left | 5 | 5 | In |
| Audio cues when a user submits a correct/incorrect answer | 3 | 5 | In |
| A visual display of the musical notation when a correct answer is submitted | 5 | 4 | In |
| Modal pop up windows when a challenge is completed or when the user has lost all their lives | 5 | 5 | In |
| Degrees of difficulty ranging between Beginner, Intermediate and Advanced | 4 | 3 | Out |
| Challenge mode (timed run of musical interval/chord recognition exercises) | 3 | 2 | Out |
| Leaderboard for registered users to display their high scores | 1 | 0 | Out
| A page detailing practice tips/general resources to inspire musicians | 2 | 5 | In |
| Functionality for user to create a profile to save and track their progress | 4 | 0 | Out |
| A contact page for users to get in touch with site owner | 5 | 5 | In |
| 404 Page | 5 | 5 | In |
| **Total** | 61 | (Average viability x Number of Items) 59 |

### Scope

Unfortunately, due to the trade-offs the developer has to take into consideration, the first release of *Re:Vibe* will not feature many of the training modes that are features on competitor's websites. Therefore, the first release will be modeled as a game as opposed to a fully comprehensive training platform. The pitfall of having these trade-offs in the first release will hopefully be offset by the enjoyable user experience, in comparison to competitor's websites.

Main features for a Minimal Viable Product:

* Welcome landing page
* Graphical User Interface
* Interval Training Mode
* Chord Training Mode
* Score tally
* Lives-left symbols
* Audio cues for correct/incorrect answers
* Visual "reveal" of musical notation when correct answer is submitted.
* Modal Popups for Completed Games/Game Over
* Practice Page
* Contact Page
* 404 Page

Features for future releases:

* Difficulty modes (Beginner, Intermediate, Advanced) - This is the most important feature to be implemented, and will be implemented in the first release should the developer have enough time and resources before deadline.
* Challenge Mode
* Functionality/database for user to create profile, and save their progress
* Melody Matching 
* Rhythm Identifier 
* Jazz Progressions Identifier 
* Scale Identifier
* Perfect Pitch Training

### Structure

The structure of the website is listed in the bullet-points, in order from top to bottom level.

1. Landing Page

The first page the user will see when entering the page. This page contains:

* Brand logo

* Image of a sleek, one-line drawing of an ear.

* Call-to-action button inviting the user to enter the platform.

2. Home/Game Page

   1. Main Page

* Navigation Bar - A navigation bar will be displayed at the top level of the page, with the brand logo on the far left, and navigation links on the far right. Will collapse to hamburger icon with dropdown list on mobile screen sizes.

* Game Instructions - A short, concise overview of how to use the platform will be displayed. 

* Graphical Use Interface (GUI) - Where the game/training will be undertaken.

* Footer - Social media/Github Links will be displayed at the bottom level.

   2. Modal Windows (displayed when user completes game, or game is over)

   * Header - Congratulating or commiserating visitor.

   * An elaboration on the congratulations or commiserations.

   * An invitation to play again, or try the chord identifier.


3. Practice Tips Page 

* Navigation Bar

* Two pieces of content side-by-side: on the left, a graphic illustration of a character practicing a musical instrument, and on the right, some tips on how to practice an instrument effectively.

* Footer

4. Contact Page

* Navigation Bar

* A short paragraph inviting the user to submit any questions or feedback.

* Contact form in the center of the page

* The developer's Github details

* Footer

### Skeleton

Links to the wireframes are listed below:

* [Landing Page](assets/wireframes/revibe-landing.pdf)
* [Home/Game Page](assets/wireframes/revibe-homepage.pdf)
* [Practice Tips Page](assets/wireframes/revibe-practicetips.pdf)
* [Contact Page](assets/wireframes/revibe-contact.pdf)

### Surface

#### General Considerations

When considering the design decisions in the context of a colour palette, it was of course surmised that the Home Page - which holds the Graphical User Interface where the game is played - was the critical page to consider. Since the primary purpose of the re:Vibe website is focused on providing an engaging learning experience, the decision was made to use a background color that would represent a 'dark' mode theme, using HEX Color #23272A. 

The colour theme for the GUI is, in contrast, relatively bright. This contrast would hopefully result in maximum engagement and attention to the game, and provide an experience which is easy on the eyes, and minimal in cognitive overload. Since the game is designed to be a fairly challenging learning experience,  it is important that unnecessary cognitive overload is minimised.

Since the primary consideration of the colour choices was centered around the Home Page, the colour palette of the Practice Tips, Contact and 404 Page were ultimately determined by these initial considerations.

#### Colour Palette

![Color Palette Used For Website](assets/images/readme-images/revibe-color-palette.png)

* #23272A (Charleston Green) - This was the colour used for the Navigation Bar, and the entire background in the Title Page and Home Page, as well as in the headers of the Practice Tips and Contact Pages. This colour defines the 'dark mode' theme of the website. 

* #2F455A (Charcoal) - This colour is featured in the Practice Tips and Contact Pages, to provide a small contrast between the primary background color used in the headers, and so provide a distinction between the two sections of each page.

* #29ABE2 (Cyan Process)  - This color is used in the background image for the Home Page's GUI, selected again to contrast against the dark background.

* #808080 (Gray Web) - Another color used in the development of the background image for the GUI, this color was also used for the collapsible Navigation Bar on mobile devices, as it was found upon testing that using the same #23272A color for both the NavBar and the page's background resulted in an unappealing blend between the open Navbar and the page's backgrounds, as it was hard to distinguish where the NavBar ended and the background color started.

* #E7782D - This color was applied to the Ear SVG featured on the Title Page and in the Navbar, as well as all fontAwesome icons, and Navlink text (when a cursor is hovered over the Navlinks). It was determined that this provided a contrast between the primary background color #23272A, that was sleek and pleasing to the eye.

* #EEEEEE - This is the color used for the links and hamburger icon in the Navbar, the text content in Home Page and header section of the Practice Tips page, and also for the buttons featured in the Home Page's GUI. It was also used as the background color for the practice tip cards in the Practice Tips page, and the contact form in the Contact page. 

#### Fonts

* Work Sans - This is the primary font used for the re:Vibe logo, the buttons in the GUI, and most of the text content in the website, and for the links in the navigation bar. It was chosen for it's neutrality and sleek aspect which is pleasing to the eye, and when coloured using #EEEEEE, compliments the dark backgrounds nicely.

* Roboto Condensed - This was chosen as a secondary font, used in the headers in the GUI (Interval Trainer & Chord Identifier). It was also used as the sub-header for the card 'Learn Piano' in the website's Contact Page. The font was chosen to provide a variation, and emphasis between the roles of features in the website.

#### Images

The re:Vibe website makes heavy use of vector images. The vector image used in the GUI was created using Adobe Illustrator, and was designed to mimic a stage with two speakers and representation of a spotlight which 'shines' on the buttons that the user interacts with.

The images used in the headers for the Practice Tips and Contact page were selected to provide a sense of calm and peace, which is important when practicing and playing music.

# Features

## Global Features

### Navbar

![Image Navbar for iPad and Laptop](assets/images/readme-images/revibe-navbar-laptop.png)

Each page features a responsive navigation bar, with a clickable logo icon positioned on the left on iPad and Laptop device sizes and up. The logo is centered on mobile device sizes.

![Image of Navbar for Mobile](assets/images/readme-images/revibe-navbar-mobile.png)

The navigation bar collapses to a CSS-made burger icon which opens a collapsible dropdown list of the links.
The burger icon animates to a cross when clicked, to provide user feedback when the icon is clicked and the collapsible dropdown list is opened.

### Footer 

![Image of Footer](assets/images/readme-images/revibe_footer.png)

A footer is present on all pages, featuring social media links represented by fontAwesome icons, which transition to a white color when hovered. The name of the developer is also featured using the lightest weight of the 'Work Sans' font.

## Title Page

![Screenshot of Title Page](assets/images/readme-images/revibe-title-page.png)

This is the first page where the user lands upon visiting the website. It features two animate SVGs, which draw the re:Vibe logo, before a button fades in, inviting the user to enter the website. The animation is intended to provide a sleek entrance into the website, and to simply and concisely state the purpose of the website, and re-inforce the brand.

## Home Page

![Screenshot of Home Page](assets/images/readme-images/revibe-homepage.png)

The home page feature the main GUI where the game takes place. To the right of the GUI, a brief summary of instructions are featured to inform the user of how to use the platform. Each portion of the page collapses to a full-width column on mobile devices.

Currently, a modal window is displayed upon page load, informing users on iOS Safari that they made need to click the icon once to hear the first sound (they will not need to do this for the rest of the game). This is a temporary measure, until the bug which resulted in the inclusion of this modal message is squashed.

### Graphical User Interface

https://user-images.githubusercontent.com/79907183/129479108-a704c5aa-a12a-4ddf-b517-3c10fdc5f665.mp4

Here, the user is invited to select two game modes - Interval Trainer, or Chord Identifier. The user can only begin training when they have selected a game mode, at which point the button 'Please Select Training Mode' becomes enabled, changes colour and text content to 'Begin Training'. 

When the user clicks the 'Begin Training' button, an opaque overlay is added to draw the user into the action, and a countdown is started to give the user time to settle into the game. When the countdown is complete, the game starts, and an interval/chord is played (based on the game mode selected). 

A display of how many correct answers remain is added to the GUI, along with three font awesome 'user' icons, representing how many lives the user has left.

The font awesome speaker icon is animated with a 'heartbeat' animation, to provide additional feedback that the sound is played. This icon can be clicked to replay the sound, and can be clicked as many times as the user wishes.

When the user selects a wrong answer, the speaker icon wobbles and a sound is played to represent a wrong answer. Additionally, a life is lost (represented by the removal of a font awesome 'user' icon), and a message is displayed informing the user of how many lives are remaining. 

When the user selects a correct answer, a sound is played to represent a correct answer, and the speaker icon is hidden, and replaced with the name of the interval/chord, along with an image of the notation of the correct interval/chord. This is animated to provide a smooth experience.



https://user-images.githubusercontent.com/79907183/129479466-b6d55d4b-d305-4834-8882-76924647792b.mp4



If the user answers all 10 intervals/chords correctly, a congratulatory bootstrap modal window is displayed, with a short congratulatory message along with information on how many lives they had remaining when they completed the game. Additionally, a list of the correctly identified intervals/chords is displayed in a window for the user to browse at their will. At the bottom of the modal, the two buttons are featured, inviting the user to play the game again (which initiates the countdown when clicked) or close the modal window and browse at their will, or pick another game mode.

A short, cheerful jingle is played to represent that the game is complete.



https://user-images.githubusercontent.com/79907183/129479507-f102a6f3-a96e-4ce8-b527-a51f42efcd82.mp4



If the user loses all three lives, a commiseratory bootstrap modal window is displayed, with a short commiseratory message. This also features a list of the correct intervals/chords that the user identified correctly. This modal also features buttons inviting the user to Try Again (which initiates the countdown when clicked), or close the modal window and browse at their will, or pick another game mode.

A short, sad jingle is played to represent that the game is over.

## Practice Tips Page

![Screenshot of Practice Tips Header](assets/images/readme-images/revibe-practice-tips-header.png)

The practice tips page features two sections.

The first section of the practice tips page features a top-level header, and a summary of the concept of ear training and it's importance. This is accompanied with a graphic illustration of a man playing the piano. This particular image was selected to convey a sense of peace, calm and focus.

![Screenshot of Practice Tips Cards](assets/images/readme-images/revibe-practice-tips-cards.png)

The second section features individual cards displaying information about how to practice ear training effectively, as well as information on how to integrate ear training into general music practice. The cards are displayed within a white background, with box-shadow to contrast clearly against the darker background. On the right is a side bar featuring videos, as an extra educational resource for the user to visit if they so wish. 

## Contact Page

![Screenshot of Contact Page Header](assets/images/readme-images/revibe-contact-header.png)

The contact page also features two sections.

The first section features a top level header, with a brief invitation for the user to get in touch with any questions, ideas or comments. A small sub-section of the header is dedicated to a brief invitation to the user to get in touch if they would like piano lessons. This feature is hidden on mobile devices. This text content is accompanied with a vector graphic of a person listening to music with headphones. Again, this image was selected to provide a sense of peace and calm. 

![Screenshot of Contact Form](assets/images/readme-images/revibe-contact-form.png)

The second section features a simple bootstrap contact form, sat in a light background with some box-shadow, to contrast clearly against the darker background.

## 404 Page

![Screenshot of 404 Page](assets/images/readme-images/404-page.png)

A 404 Page is displayed in the event that the user visits a page of the website that doesn't exist. A short message is featured to inform the user that the page isn't found, along with a vector graphic of someone singing badly to their friend, who is covering their ears. A short friendly message is featured next, along with a button to take the user back to the home page.

## Features for Future Implementation

1. Difficulty modes - To give the user the option to select either Beginner, Intermediate or Advanced level interval/chord recognition training. 

   1. Intervals - Beginner mode would feature simple, easily identifiable intervals (Octave, Perfect Fifths). Intermediate would add Perfect Fourths, Major Thirds and Minor Thirds. Advanced level would feature all intervals.
   2. Chords - Beginner mode would feature only major and minor triads. Intermediate would add Minor Sevenths. Advanced mode would feature all chords.


2. Perfect Pitch Trainer - A game mode which would challenge the user to identify exactly the note/chord played. Meaning, the answers that the user has to choose from would feature the actual name of the chord, not just the chord type (if a C Major Seven chord was played, then the answer options would feature C Major Seven as it's text content, along with a selection of 5 other answers).

3. Jazz Progression Identifier - A mode where the user has to identify common jazz progressions using Roman Numeral notation (ii-V-I, iii-VI-ii-V-I etc)

4. Challenge Mode - A timed run, where the user has to identify all chords/intervals correctly within a given time frame. Challenge Mode would also feature a leaderboard for the users to pit themselves against other users of the re:Vibe service.

5. Sign Up/Login functionality - The ability for the user to create a profile and save their games and results to track their progress, and also register their results to the re:Vibe leaderboard.

# Technologies Used

The primary languages used in the development of this project include HTML, CSS and Javascript.

* [Visual Studio Code 2](https://code.visualstudio.com/) - The IDE used to develop this project is Microsoft's Visual Studio Code 2.

* [Bootstrap 5 CDN](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - The Bootstrap 5 framework was imported via CDN, to provide responsiveness to website. Bootstrap 5 was also utilised for creating the buttons and contact form.

* [popper.js](https://popper.js.org/) - PopperJS was used in conjunction with Bootstrap 5, to provide responsiveness to the website's NavBar.

* [FontAwesome CDN](https://fontawesome.com/) - The FontAwesome library was used to create the social media icons, and the icons used in the Home Page's GUI.

* [Google Fonts](https://fonts.google.com/) - The fonts used in the website were supplied by Google Font's library.

* [animateCSS CDN](https://animate.style/) - animateCSS library was used to animate the GUI's speaker icon and countdown, as well as the display of all bootstrap modal windows.

* [remove.bg] - This technology was used to remove the background of the vector image used in the website's 404 page.

* [tinypng.com](https://tinypng.com/) - TinyPNG was used to compress the larger images used in the website, to improve the page's load time and performance, without losing image quality.

* [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator/free-trial-download.html) - The background used in the Home Page GUI was created using Adobe Illustrator.

* [Adobe Photoshop](https://www.adobe.com/uk/products/photoshop/free-trial-download.html) - The hero image used for the Practice Tips page was edited using Adobe Photoshop.

## JavaScript Libraries Used

* [jQuery CDN](https://jquery.com/download/) - The website makes heavy use of jQuery in it's main.js file, particularly for the hiding and showing of the elements used in the Home Page GUI.

* [ToneJS CDN](https://tonejs.github.io/) - The WebAudio framework ToneJS was imported via CDN, to be used to build the two synthesizers that create the tones used in the re:Vibe gameplay.

* [VivusJS CDN](https://maxwellito.github.io/vivus/) - The Vivus JS Animation Library was used to provide animation to the website's landing page.

* [EmailJS CDN](https://www.emailjs.com/) - The EmailJS service was used to provide emailing functionality to the website's Contact form.

# Testing

Testing Information can be found in a seperate [TESTING.md file](TESTING.md)

# Credits

## Code

### ToneJS Synthesizers 

The developer used ToneJS [Tone.Synth()](https://tonejs.github.io/docs/14.7.77/Synth) and [Tone.PolySynth()](https://tonejs.github.io/docs/14.7.77/PolySynth) to create the synthesizers used to play the sounds in the Interval Trainer and Chord Identifier games, respectively. The [ToneJS API Docs](https://tonejs.github.io/docs/14.7.77/index.html) was referenced to create these synthesizers.

### AnimateCSS

The project's main.js file includes a promise-based function provided by  to animate the speaker when a correct or incorrect answer is submitted. The code was referenced from the [animateCSS API Docs](https://animate.style/)

### Shuffling the Answers

The Fisher-Yates algorithm was used to shuffle the list of answers which are displayed upon each question. This method was found on [Stack OverFlow - How To Randomize Shuffle a JavaScript Array](https://stackoverflow.com/questions/2450954
/how-to-randomize-shuffle-a-javascript-array).

### VivusJS Animations

The animation used in the website's landing page was referenced from the [Vivus JS API Docs](https://github.com/maxwellito/vivus)

### Hamburger Icon Animation

Animation for the website's hamburger icon was created from CSS transitions and JavaScript. The code was referenced from YouTube:

[Animated Hamburger Menu Tutorial](https://www.youtube.com/watch?v=dIyVTjJAkLw&t=336s)

### Session Storage in safari-modal-alert.js

The website includes a modal alert which displays on load of the Home Page, to alert iOS Safari users that they may need to click the speaker icon once in order to hear the sounds, upon playing the first game. The developer deemed it was important that this modal only fired once, and wouldn't fire again if the user returned to the home page from another page on the website. 

This code was referenced from [Stack Overflow - Popup Modal by Browser Session](https://stackoverflow.com/questions/59660094/popup-modal-by-browser-session )

### For Loop to generate Intervals/Answers

After unsuccessfully experimenting with ways to play the sounds and create answers (with the correct answer pushed into the list of the correct answers), research was undertaken to find a clean way to gather the intervals and chords used in each training session.  The developer ultimately referenced another ear training website on Github, which used a for loop to gather the collection of questions used for their ear trainer. This method was adopted and used in the runIntervalGame and runChordGame functions, found in main.js.

This code can be found [here]('https://github.com/mmaynar1/ear-trainer/blob/master/ear-trainer/main.js), at line 23.

### Bootstrap Modals and Contact Form

The code used to create the website's [Modals](https://getbootstrap.com/docs/4.0/components/modal/) and [Contact Form](https://getbootstrap.com/docs/4.0/components/forms/) is referenced from the [Bootstrap 5 API Docs](https://getbootstrap.com/docs/4.0/getting-started/introduction/).

### CSS 'Shape-Outside' Property

Two areas of the website make use of the CSS 'shape-outside- property, in conjunction with float properties. This code was referenced from a YouTube Tutorial:

[Wrap text around any image or shape that you want!](https://www.youtube.com/watch?v=sifXs4XVK7g&t=276s)

## Frequencies for Intervals and Chords

[Physics of Music - Notes](https://pages.mtu.edu/~suits/notefreqs.html) was referenced to gather all the numeric frequencies used in the intervalList and chordList object arrays, found in data.js.

## Text Content

### Home Page Text

All text content featured in the home page was created by the developer.

### Practice Tips Page Text

The text content featured in the header and practice tip cards was created from a combination of the developer and [musical-u-learn](https://www.musical-u.com/learn/10-musical-ear-training-tips-for-the-adult-beginner/)

### Contact Page Text

All text content featured in the home page was created by the developer.

### 404 Page Text

All text content featured in the home page was created by the developer.

## Images

### Ear Logo

The image used as the re:Vibe logo was adopted from [Amazon Media](https://m.media-amazon.com/images/I/513xWcLhbNL._AC_SX450_.jpg)

### Home Page Images

The background for the Home Page GUI was created by the developer.

### Practice Tips Page Images

The hero image featured in the header was taken, and edited, from an album cover by pianist Kiefer - 

[Kiefer - Between Days Album Cover](https://www.stonesthrow.com/news/kiefer-between-days/)

The vector images featured in each practice tip card was taken from [Vecteezy](https://www.vecteezy.com/) and [Shutterstock](https://www.shutterstock.com/).

### Contact Page Images

The vector used as the Contact page's hero image was taken from [Vecteezy](https://www.vecteezy.com/)

### 404 Page Images

The vector featured on the 404 Page was taken from [Shutterstock](https://www.shutterstock.com/)

## Videos

The embedded videos featured in the Practice Tips sidebar were supplied [YouTube](https://www.youtube.com)

## Icons

All icons (excluding the hamburger icon) used throughout the website were supplied by [FontAwesome](https://fontawesome.com/)

# Deployment

This project was developed using the Visual Studio Code 2 IDE, and committed and pushed to GitHub using the VSCode2 integrated terminal.

In order to run this project through GitHub pages, take the following steps:

* Navigate to [this repository](https://github.com/OliverCadman/re_vibe_ci_ms2), which contains all files needed to run the project.
![Deploy re:Vibe project - first step](assets/images/readme-images/readme-deploy-1.png)
* From the row of menu tabs listed along the top of the repository towards the top of the page, select the last menu item, named 'Settings'.
![Deploy re:Vibe project - second step](assets/images/readme-images/readme-deploy-2.png)
* Scroll down the Settings page and select the tab named 'Pages', listed down the left hand side of the page.
![Deploy re:Vibe project - third step](assets/images/readme-images/readme-deploy-3.png)
* Under Source, open the dropdown list labelled 'None'.
![Deploy re:Vibe project - fourth step](assets/images/readme-images/readme-deploy-4.png)
* Select the master branch, and click Save. The website is now deployed!
![Deploy re:Vibe project - final step](assets/images/readme-images/readme-deploy-5.png)
* Once saved, the website's URL link will be displayed above, with the message ' Your site is published at https://olivercadman.github.io/re_vibe_ci_ms2/'. Click the link to enter the website!

## Running the project locally

In order to run this project on GitPod, you will need:

* A GitHub account. If you don't have one already, you can [create one here](https://github.com/join).
* A Google Chrome Browser

If you are using GitPod for the first time, you will need to then follow these steps:

1. Install [the GitPod browser extension for Google Chrome](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki?hl=en).
2. Login to GitPod using your GitHub account details.
3. Navigate to the [project's GitHub repository](https://github.com/OliverCadman/re_vibe_ci_ms2).
4. Click the green 'Gitpod' button to the right hand of the page.
5. This will open your Gitpod workspace, where you can start working on the repository's files on your local machine.

For those who would rather use their own local IDE (such as VSCode, Sublime Text or PyCharm), follow these steps:

1. Navigate to the [project repository](https://github.com/OliverCadman/re_vibe_ci_ms2).
2. In the list of buttons above the collection of the repository's files, select 'Code'.
3. Copy the HTTPS URL to your clipboard.
4. Open your integrated terminal inside your preferred IDE.
5. Change directory "cd" or make a new directory "mkdir DIRECTORY-NAME" to contain the repository's files.
6. Type 'git clone', then paste the URL that you copied to your clipboard in step 3.
7. Hit Enter, and the repository's folders and files will be cloned into your chosen directory.
8. Finally, navigate to the cloned files and have fun coding!

# Acknowledgements

* Inspiration for this project came from the developer's love of music, and excitement of using their knowledge to be creative, and learn with JavaScript.

* Thanks to my mentor Adegbenga Adeye for guiding me through the refinement of the design and implementation stages of the project's life. 

* Thanks to my friends, bandmates and the Slack community for testing my application and offering their opinions and advice.

Thanks to anyone for taking the time to look at my work. I wish you all the best.





























































