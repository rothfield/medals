Usage:
-----

(assuming you are running the app on port 8000)

http://localhost:8000/?load-medals-url=medals.json

or
 http://localhost:8000

root directory is resources/public

I added a load-medals-url parameter. If present, the app uses the URL.
Otherwise it uses medals.json which is stored locally under 
resources/public/medals.json

The original URL on amazon seems to be down.


Medal Count Task
----------------

This project implements the Medal Count Module described below.
    
This is a Clojurescript/Reagent/Reframe project. It doesn't provide a web server.

My Choices of Tools/Frameworks
------------------------

I chose to use Clojurescript, Reagent, and re-frame for my front-end framework. I've used this combination in a previous project (http://github.com/rothfield/doremi-script). I really like the ease of use of Reagent compared to Om. I like how re-frame structures the reagent app through the use of message passing and how the views and handlers are decoupled. I also like re-frames approach to global state (keeping all state in a single db object.

Testing
-------

The integration tests are written in casperjs (in javascript)
. Run them as follows:

cd test/integration
./run_tests.sh

The integration tests source is in the file test_medal_count.js

The integration tests assume that the app runs at http://localhost:8000
The integration tests create png files.

Clean:
-----

lein clean

Build (minimized):
--------

lein cljsbuild once min

Build (unminimized)
------------------
lein cljsbuild once dev 

Running:
-------

./start_server.sh

Starts a python simple web server on port 8000.
Navigate to http://localhost:8000

Or use your own web server with root directory resources/public


Medal Count Module Specifications
---------------------------------

This Module shows up to 10 countries that have won the most  medals of a given kind in the Olympics games.  It has the  following requirements:
-It can accept up to two parameters: 

- element_id - an id of the element that the module will use  as its  container. 
- sort - determines the type of medals to sort by. It can have 
one of the  following values: 'total', 'gold', 'silver' and 
'bronze'. 

-If no sort parameter is passed the sort should be by gold 
medals.

-When ranking by total medals, ties are broken by most 
gold.

-When ranking by gold, ties are broken by most silver. 

-When ranking by silver, ties are broken by most gold. 

-When ranking by bronze, ties are broken by most gold. 

-Users can click the column headers to re-sort the 
countries by gold, silver,  bronze, or total medals won. 

With each sort the possibility exists that new  countries 
will enter and depart the top 10. 

-Please follow the design shown in the screenshots on the 
following pages. 

-A sprite with the 13 countries flags (in alphabetical order 
according to their country code) can be found here: 

flags: https://s3-us-west-2.amazonaws.com/reuters.medals-widget/flags.png

-To get the list of countries and their medals use the 
following URL:

medals endpoint:
https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json


Note that this should be loaded dynamically using an Ajax 
call (simulate a call to a live API endpoint). Give an 
appropriate error message if there was an error 
retrieving the JSON data (if in real production scenario 
the API is down, you can simulate that by running the 
widget but turning off your wifi/internet connection). 

Also note that although this is hosted on S3, a CORS file 
was set on this folder and thus this data can be retrieved 
with a regular Ajax request (no need for JSONP). 

You can use whatever frameworks, templates or other libraries  you want. Please explain briefly why you chose them.  Your  code can live on a server or emailed back as a zip file containing all the assets needed (html, css, js). If you use a zip 
zip file please email it to: talgiat@gmail.com.

Medal count table sorted by total gold 
Notice that the tiebreak between Netherlands and Germany is 
handled by total silver. 

Notice that the tiebreak between France and Sweden is 
handled by the total gold. 

Notice that the tiebreak between USA, Netherlands and 
Sweden is handled by the total gold. 

Medal count table sorted by total bronze 
Notice that the tiebreak between Russia and Netherlands is 
handled by total gold 

See the doc/ directory for the original pdf which includes the visual design 


