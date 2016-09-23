# code-template

The jsPsych, Heroku with NodeJS (to host the application), and MongoDB-MLab.com setup follows the instructions from [Tuuleh’s tutorial](https://github.com/Tuuleh/jsPsychBackendStart). The tutorial covers the basics of jsPsych with Heroku/NodeJS/MongoDB(Mongoose).  The code attached uses the above tutorial as a starting point which was extended to customize the team’s need.



* Install NodeJS with NPM
* Follow Tuuleh’s tutorial as a starting point
* The app.js file contains the config for the app
* line 19 has the database name that was changed per experiment: mongoose.connect(process.env.CONNECTION || 'mongodb://localhost/NAME-HERE');
* Lines 48 to 63 has the routing information
* Images are located: '\gmm-like\public\img' 
* HTML files are located: '\gmm-like\public\views' 
* The heart of the JS code is located in ‘gmm-like\public\views\exp.html’.
* The plugin used is the [jspsych-survey-text](http://docs.jspsych.org/plugins/jspsych-survey-text/).
* The data was downloaded directly from MLab’s website but can also be downloaded using the command line interface.

