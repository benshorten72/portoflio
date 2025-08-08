import type { ReactNode } from 'react';
import styles from './InfoCard.module.css';


type InfoCardProps = {
    cardTitle: string,
    cardText: string,
    children?: ReactNode
}
export const InfoCard = ({ cardTitle, cardText, children=null}: InfoCardProps) => {

    return(
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{cardTitle}</h2>
            <p className={styles.cardText}>{cardText}</p>
            <div className='info-content'>
                {children}
            </div>
        </div>
    )
}