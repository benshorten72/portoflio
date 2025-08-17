import type { ReactNode } from 'react';
import styles from './InfoCard.module.css';

type InfoCardProps = {
    cardTitle: string,
    cardText: string,
    infoCardDimensions?: [string, number],
    children?: ReactNode
}


export const InfoCard = ({ cardTitle, cardText, infoCardDimensions = ["right", 100], children = null }: InfoCardProps) => {
    return (
    <div className={styles.cardWrapper}>
          <h2 className={styles.cardTitle}>{cardTitle}</h2>
        <div className={styles.card}>
                {children}
        </div>
    </div>
    )
}