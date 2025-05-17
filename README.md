# Dosvid Personal Planner

## About the project
_Dosvid_ is an application for structuring your personal development.


## Design 
Level progression system:
- earned experience points
- goals
  - add, edit, complete, delete.
  - history view of completed goals
- Reward management
  
## Setup 
You can access the live demo here: https://dosvid.netlify.app/

Alternatively, you can set it up on your own machine. Clone the repo, and then simply run:
```
npm install
npm run build
npm run preview
```


## Usage 
Current application is in a demonstration state. It has some pre-loaded goals and rewards, for illustration purposes. 
You can, however, clear history, goals, and rewards if they bother you, and fully use the application. 
It has 11 levels, with gradually increasing experience goals. 
The recommended "difficulty scaling" is approximately 1 extra day of work, per level, beginning with 1 day.

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
#### complex project architecture
This project required a "time investment" into building the reducer and the context, together with the "typescript overhead" at the very beginning. While initially seeming like a challenge, this has turned out really well, as it functioned as a robust skeleton from the very beginning of development. 

## Future improvements 
- Calendar view - a more convenient, "zoomed out" view of previous progress, to complement the history view. 
- Statistics view - to observe trends
- Customiseable daily goal functionality
- Tailoring/customisation of "level difficulty"




## Author
### Author
Hi, my name is Anton Serdiuk, I am a front-end developer focused on building thoughtful, interactive applications with Javascript, React and TypeScript. I'm passionate about balancing clean code, UX clarity, and ambitious ideas.

