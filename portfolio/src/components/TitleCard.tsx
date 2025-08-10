import "./TitleCard.css";
import "./global.css"
type TitleCardProps = {

}
export const TitleCard = ({ }: TitleCardProps) => {
    return (
        <div className="TitleCardWrapper">
            <h2 className="TitleCardSubText">BEN SHORTEN</h2>
            <h1 className="TitleCardText">Software Engineer   <span className="caret"></span>
            </h1>
        </div>
    )
}