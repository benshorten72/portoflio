import type { ReactNode } from 'react';
import styles from './InfoCard.module.css';

type InfoCardProps = {
    cardTitle: string,
    cardText: string,
    infoCardDimensions?: [string, number],
    children?: ReactNode
}

function styleWidth(allignment: string, percentage: number) {
    const margin: number = 100 - percentage
    if (allignment == "right") {
        // margin: top right bottom left
        return { margin: `5% 0% 0% ${margin}%`, width: `${percentage}%` }
    } else {
        return { margin: `5% ${margin}% 0% 0% `, width: `${percentage}%` }
    }

}

export const InfoCard = ({ cardTitle, cardText, infoCardDimensions = ["right", 100], children = null }: InfoCardProps) => {
    return (
        <div className={styles.card} style={styleWidth(...infoCardDimensions)}>
            <h2 className={styles.cardTitle}>{cardTitle}</h2>
            <p className={styles.cardText}>{cardText}</p>
            <div className='info-content'>
                {children}
            </div>
        </div>
    )
}