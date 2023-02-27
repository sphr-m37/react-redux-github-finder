const AboutApp = () => {
    return (
        <section className="container about-app">
            <h3>about app </h3>
            <p>
                The way the program works is that when you enter and confirm a phrase in the form, the program sends a request to the GitHub server through API and uses the phrase you entered as an input parameter, and the information of the users who entered the phrase  It receives the matching input, the box on the main page is not displayed, and when one of the displayed items is clicked, the user enters the corresponding page, and again a request is sent to the Gates server through the API.  and uses the username of that user as an input parameter and receives more details of the user and reposetories and displays it on the screen and when
            </p>
            <p>
                This program was developed using redux State Manager, but we can use Contect api or without state manager to develop this application.
            </p>
        </section>
    );
};

export default AboutApp;
