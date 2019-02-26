# HealthMatch

This project was created for the Brown Datathon 2019.

## Goal
We ask you some basic health questions and use the CDC 2017 survey data to predict diseases that you could have/develop based on users with similar answers.

## Twist
The app is Tinder styled - diseases have a bio and a description with a set of Do's and Dont's. You can swipe right to learn more, or swipe left to skip.

## Inspiration
Tinder for diseases.

## What it does
We ask you some basic health questions and use the CDC 2017 survey data to predict diseases that you could have/develop based on users with similar answers. The twist is that diseases have a bio and a description with a set of Do's and Dont's. You can swipe right to learn more, or swipe left to skip.

## How we built it
We imported the CDC dataset using Pandas on Jupyter Notebook and wrote a fully Connected Neural Network to predict health issues for a new user, based on their answers to a few questions.
The front-end is Angular - Tinder themed to make it quircky. We use a REST API on the Jupyter notebook to communicate.

## Challenges we ran into
Importing the 1 GB dataset too up half the time. We haven't worked with R/Big Data/Parallel Programming so we had to improvise with Python. 

## Accomplishments that we're proud of
Managing to import the dataset and getting a prediction accuracy of 73%

## What we learned
We learned a lot of new things - Jupyter, a bit of CUDA, a LOT of Tensorflow.

## What's next for HealthMatch
Improving the model to get better accuracy and make the Disease Profiles dynamic.