#!/bin/bash
# This is a command line script for installing phantomjs and your application
# Each line is automatically entered into a terminal as if you typed them

# The following command sets a flag that tells the terminal to abort the script if any errors occur.
# We wouldn't want to continue if there was something wrong, right?
set -e

# First we need nodejs and npm, which help us get phantomjs
echo "Enter your password at the prompt to install..."
sudo apt-get install npm nodejs-legacy

# Now npm should be available
sudo npm -g install phantomjs

# blank line
echo

echo "Good to go! Start the bot by typing the following command in the terminal:"
echo "phantomjs app.js"
