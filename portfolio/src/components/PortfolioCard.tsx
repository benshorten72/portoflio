import { useState, type ReactNode } from 'react'
import './PortfolioCard.css'
import "./global.css"
import { ProjectDisplay } from './ProjectDisplay'

type PortfolioCardProps = {
    cardTitle:string,
    cardSubTitle:string,
    cardImageSrc:string,
    cardText:string,
    children?: ReactNode,
    displayText:string
}
export const PortfolioCard = ({ cardTitle, cardSubTitle, cardImageSrc, cardText, children, displayText }: PortfolioCardProps) => {
    const [showCard, setShowCard] = useState(false);
    const [triggerDisplayCard, setTriggerDisplayCard] = useState(0);

    // When we click, 
    const handleClick = (toggle: boolean) => {
        setShowCard(toggle);
        setTriggerDisplayCard(t => t +1)
    };

    return (
        <>
            <button className="PortfolioCardBox" onClick={() => handleClick(true)}>
                <div className="PortfolioCardImageWrapper">
                    <img className="PortfolioCardImage" src={cardImageSrc} />
                </div>
                <div className="PortfolioCardTextWrapper">
                    <h2 className="PortfolioCardTitle">{cardTitle}</h2>
                    <h3 className="PortfolioCardSubTitle">{cardSubTitle}</h3>
                    <h4 className="PortfolioCardText">{cardText}</h4>
                </div>
            </button>

            {showCard && <ProjectDisplay onClose={() => setShowCard(false)} key={triggerDisplayCard} cardTitle={cardTitle} imgSrc={cardImageSrc} displayText={displayText} cardSubTitle={cardSubTitle}/>}
        </>
    );
};
