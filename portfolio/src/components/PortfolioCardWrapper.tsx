import { PortfolioCard } from './PortfolioCard';
import './PortfolioCard.css'
export const PortfolioCardWrapper = () => {
    return (
        <div className='cardWrapper'>
        <PortfolioCard 
            cardTitle='Sands of Orisis' 
            cardSubTitle='University Team Project' 
            cardImageSrc='/assets/sandsOfOrisis'
            cardText='Godot'
            displayText="Sands Of Orisis is a multiplayer real time strategy game developed as a joint university project of 4 people over the course of 2 months.
    We used Godot, an open-source, lightweight game engine to develop Sands Of Osiris. I took lead on developing the project as I had the most experience in game development. 
    While developing this project I had to think deeply about the system design of the game, learn how to implement algorithms such as A* for pathfinding, optimize the game to reduce lag and 
    also apply my multimedia skills in sprite work and sound design. It was a great project that really tested the team's ability to work together in a codebase that grew quickly and had a lot of different moving parts.
    "
    githubLink='https://github.com/colmmurphyxyz/CS3305-2024-Team-2'
/>
<PortfolioCard 
    cardTitle='Distributed IoT Testbed to Perform Split-Fed Learning' 
    cardSubTitle='Final Year University Project' 
    cardImageSrc='/assets/fyp'
    cardText='Kubernetes, Python, Keras '
    displayText="
    My final year project focused on designing a testbed system to spin up K3s clusters running EdgeX. 
    This allows for several lightweight clusters to act as edge devices, simulating real-world data, which communicate with a central cluster that has access to a large portion of resources. 
    A machine learning model used for inference is split between the edge and central clusters, while all models have their weights federated to allow learning to occur across models. 
    Accompanying the testbed is a web app that displays various useful metrics on inference, communication, and resource usage. 
    This testbed overall is designed for rapid prototyping of edge systems and allows for benchmarking in experiments concerned with edge performance and machine learning. To gain a better understanding of the project I recommend reading my associated bachelor's thesis available in the GitHub link.
    "
    githubLink='https://github.com/benshorten72/FYP'
/>
<PortfolioCard 
    cardTitle='Cat World' 
    cardSubTitle='Personal Project' 
    cardImageSrc='/assets/catWorld'
    cardText='AWS Lambda/Rekognition/Transcribe/S3/DynamoDB, NodeJs, Javascript'
    displayText="Cat World is a site that allows users to view and upload pictures and soundbites of cats on an interactive 3D globe. This fun project was started with the goal of me learning how to use AWS services and integrate AI technologies into personal projects. I ended up using many different services such as S3 for image/audio storage, Rekognition/Transcribe for content moderation, Lambda for event handling, DynamoDB for table data & ES/Route 53 for hosting. 
    I also familiarized myself with Three JS to be able to display the globe. The site is still available to use through the link in my GitHub."
    githubLink='https://github.com/benshorten72/cat-world'
/>
<PortfolioCard 
    cardTitle='Portfolio Website' 
    cardSubTitle='Personal Project' 
    cardImageSrc='/assets/portfolio'
    cardText='React, Three React Fiber'
    displayText="This site originally started out as a way to learn how to work with Three React Fiber / Three JS, which eventually transitioned into the portfolio website visible as it is today. 
    I've designed this site so that it's modular, so that I can take out or put in new parts in the future depending on where I'm at career-wise. As it stands at the moment, I have what I feel is a semi-brief overview of me and my work."
    githubLink='https://github.com/benshorten72/portfolio'
/>
        </div>
    )
}
