# Engage Project : Microsoft Teams Clone
Realtime Video Chat application built under the Microsoft Engage Program 2021
## Contents
 - [About the Project](#about-the-project)
    * [Problem Statement](#problem-statement)
    * [Motivation](#motivation)
 - [Methodology](#methodology)
 - [Demo Links](#demo-links)
 - [Getting started](#getting-started)
 - [Product Information](#product-information)
   - [Features](#features)
 - [Scopes of Improvement](#scopes-of-improvement)

## About the Project
Engage 2021 is a Engagement and Mentorship program created by Microsoft engineers, in association with Ace Hacker team, for engineering students. Through this initiative, students get a chance to be mentored by Microsoft and be a part of AMA Sessions, Webinars and Leader talks delivered by Microsoft employees.

### Problem Statement
 The challenge was to *build a Microsoft Teams Clone* . It should be a fully functional prototype with at least one mandatory functionality - a minimum of two participants should be able connect with each other using your product to have a video conversation.
[Microsoft Engage 2021](https://microsoft.acehacker.com/engage2021/?mc_cid=51cf8705a5&mc_eid=e7a7568555#challenge)

### Motivation
While the world has crumbled down because of the ongoing pandemic, the only thing that is binding us together right now is being connected through social media platforms and get a chance to talk to our friends, family and co-workers through video conferencing platforms such as *Microsoft Teams*.

## Methodology

### Scrum Methodology

Scrum is an *Agile* development methodology used in the development of software based on an iterative and incremental processes. Each iteration consists of two to four week sprints, where each sprint’s goal is to build the most important features first and come out with a potentially deliverable product.

### *Sprint Map*
 Below points provides insight to sprint wise progress and bugs:

- #### *Week 1* : 
    1.  Learn about developement i.e HTML, CSS, Javascript, NodeJs
    2.  Explored and decided what to use as a signaling server for establishing a peer-to-peer connection. (Two options were firebase or socket.io)
    3.  Learn about Git and GitHub.
   

- #### *Week 2* : 
    1.  Got an overview of *WebRTC* and *PeerJs*
    2.  Started working on backend part and adding minimal feature
    3.  Build the basic UI
    4.  Connected client side and server side
    5.  Prepared the feature list and assigned them different priorities 
    
    *Challenges and bugs:* Was not able to stream video and audio due to few arguments of Peer object.

- #### *Week 3* :
    1.  Add extra features like mute,unmute, camera on and off.
    2.  Add chat feature during video call.
    3.  Update UI
    4.  Explored more about WebRTC
    5.  Fixed bugs faced last week and finally they were resolved.
    6.  Testing on local server
   
    
    *Bugs* : Chats were broadcasting to all rooms and display name was not present.

- #### *Week 4* :  
    1.  Add title icon.
    2.  Server deployment on Heroku.
    3.  Global working(Testing on different networks).
    4.  Try to implement adapt feature.
    5.  Added Invite button and raise hand button
    6.  Solved all the bugs related to chat 
    7.  Update README.
    8.  Create demo video.
    
    *Bugs* : Globally not working on some ISPs.

## Demo Links
Site : https://obscure-woodland-38405.herokuapp.com/

Demo Video : https://vimeo.com/574551770

## Getting Started
To run the project on your local machine, follow the instructions:
1. Clone the repository
bash
git clone https://github.com/kajalpathriyal/Microsoft-Teams-Clone.git


2. Change your current directory to repository folder and then install all the dependencies
bash
cd Microsoft-Teams-Clone
npm install


3. Run the server
bash
npm run dev

Now open http://localhost:3030/ on browser


## Product Information

### Features
1. Connectivity for 3-4 participants
2. Audio toggle- mute/unmute mic.
3. Video toggle - on/off camera
4. Custom user names.
5. Group chatting during the meeting (username being your chosen display name).
6. Notification when someone joins.
7. Invite button functionality-automatically copies room link to clipboard.
8. Raise hand functionality



## Scopes of Improvement
   * Multiple Rooms can be created.
   * Screen Share to be added
   * Invite with the help of email
   * Keep chat window active before and after meeting.
   * Improving Raise Hand feature
   * Adding emotions in chat messages
   * Adding background change
   * Display a list of Participants
   * Adding authentication feature and making home page with login/signup
   * Record meeting feature

## Limitations

Since an external TURN server has not been integrated, the connection between two people on different networks might not be possible if they have firewall enabled or their IP address is masked by the browser.
