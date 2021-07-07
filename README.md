# Re:Vibe
*Re:Vibe* is an interactive ear training platform game built with HTML, CSS and JavaScript, for music students of all ages and abilities who would like to improve their ears through the exercises that Re:Vibe provides. Whether the user is taking their first steps into the world of music, or are skilled in reading music and want to improve their ability to play by ear or in an ensemble, Re:Vibe serves as a user friendly, aesthetic platform that musicians enjoy training with time after time.

The website features a welcome page, a home page holding the training platform, a page featuring tips to practice ear training, and a contact page for users to submit feedback/questions to the site owner. 

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

[Landing Page](assets/wireframes/revibe-landing.pdf)
[Home/Game Page](assets/wireframes/revibe-homepage.pdf)
[Practice Tips Page](assets/wireframes/revibe-practicetips.pdf)
[Contact Page](assets/wireframes/revibe-contact.pdf)



















