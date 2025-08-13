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
        return { margin: `0% 0% 0% ${margin}%`, width: `${percentage}%` }
    } else {
        return { margin: `0% ${margin}% 0% 0% `, width: `${percentage}%` }
    }

}

export const InfoCard = ({ cardTitle, cardText, infoCardDimensions = ["right", 100], children = null }: InfoCardProps) => {
    return (
    <div className={styles.cardWrapper}>
          <h2 className={styles.cardTitle}>{cardTitle}</h2>
        <div className={styles.card}   style={window.innerWidth > 1400 ? styleWidth(...infoCardDimensions) : undefined}>
                {children}
        </div>
    </div>
    )
}