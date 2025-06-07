# Dosvid Personal Planner

## About the project
_Dosvid_ is a goal planner for structuring development and enhancing it with a reward system. 

_A powerful and flexible tool for levelling up._

It was developed using **React**(native React Context x Reducer global store), **Typescript**, and **Tailwind**. 

_Check out the live demo here:_ https://dosvid.netlify.app/
<div align="center">
<img width="900" alt="main page showing the goals" src="https://github.com/user-attachments/assets/0c2ce0c4-9c45-478b-ab58-1738cd31760a" />
  <p>Goals view</p>
</div>





## Design 
Level progression system:
- earned experience bar
- goals
  - add, edit, complete, delete.
  - history view of completed goals
- Reward management
  - adding,
  - claiming,
  - deleting,
  - or deferring to next level
- Quality of life UI features
  - notifications through Toastify
  - responsiveness for all devices
  - non-distracting, smooth animations
  - local storage - fully functional offline
  
<div align="center">
<img width="900" alt="secondary page showing the rewards" src="https://github.com/user-attachments/assets/5d016fad-d94e-4f70-89cf-db58a31299b7" />
  <p>Rewards View</p>
</div>


## Usage 
The expected user experience involves adding some goals for the near future, and then adding an incentive, a reward for reaching the next level. 
The user has the ability to decide how important that task is, my giving it a particular number of experience points, when the goal is completed. 


<div align="center">
<img width="900" alt="secondary page showing the history logs" src="https://github.com/user-attachments/assets/144a9df0-dec8-4a3c-a3d6-8ec29c769828" />
  <p>History View</p>
</div>

## Implementation Stack
- **Typescript**: For better type safety, especially useful in managing reducer states and context.
- **React + Context + useReducer**: A scalable pattern for global state without external libraries.
- **Tailwind**: Utility-first styling allowed fast prototyping and responsive UI without context-switching into custom CSS.
  
## Optimisation 
#### Performance Testing 
Overall, the app is responsive, and does not suffer from any noticeable lag, delay, even with longer list sizes. However, not just the Largest Contentful Paint, but also the First Contentful Paint, was significantly delayed when loading the website. LCP presented a time of, on average, 4.5seconds on x4 CPU slowdown and 3G network. Bottleneck was the bundle size. Upon inspection, the HTML file was <1kB, CSS was ~20kB, and the single Javascript file was ~250kB. 

#### Bundle analysis & Chunk Splitting
Initially, given the structure of the application, I chose to lazy-load the secondary views. This has allowed to reduce the main js chunk size from 250kB to 230kB, an ~8% reduction. As I was anticipating a different result, I decided to analyse the bundle contents, and more than 70% was the react-dom dependency. Further explained in [dependency externalisation](#dependency-externalisation)

## Technical decisions

#### Feature Creep 
The nature of this project permits it to be ambitious and all-reaching in terms of inspiration for features and future prospects. 
A game-like mechanic of level progression opens up to a whole world of Role-Playing Game elements that can be introduced. 
At the same time, the "data" side, with earning points daily over time, invites statistical analysis, visualisations, graphs and charts, and much more. 

Recognising these "magnetic poles" as fertile ground for feature creep has allowed me to establish a strict MVP very early in the development, outlining exactly the features that are the core functionality of the _Dosvid_ system. 

#### Dependency Externalisation 
As described in [performance testing](#Optimisation), the bottleneck of the loading speed was the size of react-dom dependency. It initially seemed highly valuable to reduce the bundle size by a factor of 4. However, after extensive testing of various plugins and native vite tools for dependency externalisation, there was no working solution found for the current project configuration. As well as that, it seemed sensible, as the project is a kind of sandbox, a demo, to simply include all dependencies together, at the cost of an extra second of initial load time. Had the project been developed as a service/product, then investing more time into dependency externalisation would have been top priority, with potentially considering the switch to a different build tool. 

#### Project architecture
This project required a "time investment" into building the reducer and the context, together with the "typescript overhead" at the very beginning. While initially seeming like a challenge, this has turned out really well, as it functioned as a robust skeleton from the very beginning of development. 

## Future of the project 
The current system provides a great foundation for expansion and addition of new features. 
- API integration
- Calendar view - a more convenient, "zoomed out" view of previous progress, to complement the history view. 
- Statistics view - to observe trends
- Customiseable daily goal functionality
- Сustomisation of "level difficulty"




<div align="center">
<img width="280" alt="" src="https://github.com/user-attachments/assets/ece49052-fce0-430c-a95b-eb821f4522b0" hspace="5"/>
<img width="280" alt="" src="https://github.com/user-attachments/assets/ec197598-b7a6-4b12-b41c-d568ff7797cf" hspace="5"/>
<img width="280" alt="" src="https://github.com/user-attachments/assets/b09b77c9-b1e8-42a1-ad87-cd51a7cf6e06" hspace="5"/>
  <p>Mobile layouts</p>
</div>


## Author
### Author
Hi, my name is Anton Serdiuk, I am a front-end developer focused on building thoughtful, interactive applications with Javascript, React and TypeScript. I'm passionate about balancing clean code, UX clarity, and ambitious ideas.

