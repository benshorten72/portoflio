import { PortfolioCard } from './PortfolioCard';
import './PortfolioCard.css'
export const PortfolioCardWrapper = () => {
    return (
        <div className='cardWrapper'>
        <PortfolioCard 
            cardTitle='Sands of Orisis' 
            cardSubTitle='University Team Project' 
            cardImageSrc='/assets/sandsOfOrisis.png'
            cardText='Godot'
            displayText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, sapiente. Optio tenetur rem quod id eveniet labore laborum nemo, numquam necessitatibus vitae dolorum dicta. Tempore atque doloremque similique dicta consectetur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, sapiente. Optio tenetur rem quod id eveniet labore laborum nemo, numquam necessitatibus vitae dolorum dicta. Tempore atque doloremque similique dicta consectetur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, sapiente. Optio tenetur rem quod id eveniet labore laborum nemo, numquam necessitatibus vitae dolorum dicta. Tempore atque doloremque similique dicta consectetur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, sapiente. Optio tenetur rem quod id eveniet labore laborum nemo, numquam necessitatibus vitae dolorum dicta. Tempore atque doloremque similique dicta consectetur."
        />
        <PortfolioCard 
            cardTitle='Distributed IoT Testbed to Perform Split-Fed Learning' 
            cardSubTitle='Final Year University Project' 
            cardImageSrc='/assets/fyp.png'
            cardText='Kubernetes, Python, Keras '
            displayText='w'
        />
        <PortfolioCard 
            cardTitle='Cat World' 
            cardSubTitle='Personal Project' 
            cardImageSrc='/assets/catWorld.png'
            cardText='AWS Lambda/Rekognition/Transcribe/S3/Dynamo, NodeJs, Javascript'
            displayText='w'
        />

        <PortfolioCard 
            cardTitle='Portfolio Website' 
            cardSubTitle='Personal Project' 
            cardImageSrc='/assets/portfolio.png'
            cardText='React, React Three Fibre'
            displayText='w'
        />

        </div>
    )
}
