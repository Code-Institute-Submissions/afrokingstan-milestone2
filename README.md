# Holiday Spotter (second milestone project)

I have built a website that presents external users with a simple platform to spot potential holiday destinations and 
to find more information about their potential holiday and estimated flight cost. 
I displayed all information in a visually appealing and userfriendly manner.
 
## UX
User A- As a delivery driver based in USA, I am very familiar with google maps when i am looking for a place and directions.I will like to do the same or similar when I am search for my next holiday destination. 
User B- As a low income earner in the U.K, I always plan my holiday my self i want know more about holiday hotspots and the average cost of flight so that i can plan my holiday myself and estimate the true value of my money.
This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features
This project is divided into 3 sections with different goals.
- Site owner's goal: to ensure that the site is easy to navigate, display information in a friendly manner and finally to possibly allow users to choose a travel package from third party website.
- External users goal : to find out best holiday destination for their needs. this is to be supported by reviews of pervious travellers to various holiday cities and their star ratings as well as google star ratings.
- Selecting relevant features/technology: to consider relevant features that will be meaningful for the external user and the right technology to create them.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- Feature 1 - Google API - allows all user to achieve a simplified google search which presents 5 key information about 3 main places to visit when on holiday in any city around the world.
- Feature 2 - TripAdvisor API - allows all users to view written reviews and rating by travellers and holiday goers about places vsited in the featurred holiday cities and allows users to leave their own reviews and ratings these place through a special redirect button. Finally through a special redirect button users can read more about these places.  
- Feature 3 - Skyscanner API - allows all users to find quotes for flights between specified cities and the ariline carrier.
- Features for the future - Festivo API or any API that can give users information about public holidays and specific festival details for various holiday destination.

### Features Left to Implement
- Another feature idea would be to provide users an easier way to select and save holiday packages before redirecting to third party website. And also a feature that allows users to send to themselves their saved holiday packages and searches.

## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - The project uses **Javascript** to simplify DOM manipulation.
- [HTML](https://www.w3schools.com/)
    - The project uses **HTML** to diplay text on web browser.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    - The project uses **CSS** to simplify DOM manipulation.    
- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Javascript** to simplify DOM manipulation.
- [Fontawesome](https://fontawesome.com/)
    - The project uses **Fontawesome** to simplify visual illustration.
- [Google Api](https://cloud.google.com/maps-platform/)
    - The project uses **Google API** to display google maps on the wesite.
- [rapidapi](https://rapidapi.com/)
    - The project uses **rapidapi** to simplify DOM manipulation.    
## Testing
I tested my codes on google chrome console, w3.org validator and jasmine  for error. At every stage of development this project was tested for errors and bugs were found and fixed. Particularly javascript try and catch codes was effectively used. 

External user test was perform by listing the unique expectations of users A and B and providing access to text the project was capable of delivering and for them to provide feedback.
USER A - test
1. maps form found on index page:
    1. Go to the "index" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid input like a number and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.
    5. Try to select different attractions and submit form verify that new data appears.

USER B - test
1. Reviews page:
    1. Go to the "reviews" page
    2. Try a new selection on the 3 featured destinations and verify that new information is presented
    3. Try to click on read more button and verify that you are redirected on a new tab to tripadvisor site specific to that     establishment.
    4. Try to click on post review button and verify that you are redirected on a new tab to tripadvisor site specific to that establishment where you can leave a new rating and review.
    
After I received both feedbacks I implemented changes inaccordance to the feedbacks I received and another test was carried out to verify changes. Finally user A and B suggested new features that has now been listed as feaures to implement for the future. However, i was able to adapt the project design to provide an easy and sensible way for users A and B to achieve their goals for example i ensure that the index page was now the maps page and i added the hotels page as per user B feedback. 

Interesting Bugs were Uncaught typeError: cannot read 'images' of undefined. I didnt understand howthe error came about but after much research i found the source. yet i had no solution so i dicided to research futher and i resolved it with a condition statement. 


## Deployment
I fully worked on my project on visual studio codes and I deployed my project on GitHub Pages through file upload.
I backed up all project files on one drive through the course of this project.
I ran my codes locally on my pc on several web browsers (Google chrome and Edge).


## Credits
Credit goes to all those who supported and continously encouraged me even when i felt i could give up, especially during my battles with COVID-19.
### Content
- The icons used for entire project was copied from [fontawesome](https://fontawsome.com)
- The text/images for the reviews/hotels page was provided from the [Tripadvisor API](https://rapidapi.com/apidojo/api/tripadvisor1)
- The text for the Flights page was provided from the [Skyscanner API](https://rapidapi.com/skyscanner/api/skyscanner-flight-search)
- The images found the the flights page were rights free and copied from the [Pixabay](https://pixabay.com)https://codepen.io/amandalouise/pen/PNzeGx?editors=1111
- The datepicker found the the flights page were rights free and copied from the [colorlib.com](https://colorlib.com/wp/bootstrap-datepicker/?v=79cba1185463)
### Media
- The photos used in this site were obtained from 
- [PIXABAY - harubaba](https://pixabay.com/photos/cape-town-table-mountain-111397/)
- [Pixbay - pelephoto](https://pixabay.com/photos/animal-beach-kangaroo-kangaroo-5048843/)
- [Pixbay - james3214](https://pixabay.com/photos/grand-cayman-swimming-pool-summer-298080/)
### Acknowledgements

- I received inspiration for this project from skyscanner and trpiadvisor website.
