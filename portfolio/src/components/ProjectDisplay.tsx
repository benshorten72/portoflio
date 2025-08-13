import { createPortal } from "react-dom";
import "./ProjectDisplay.css";
import { useEffect, useState, type ReactNode } from "react";

export const ProjectDisplay = ({ onClose, cardTitle, imgSrc, children = null, displayText, cardSubTitle }: { onClose: () => void, children?: ReactNode, cardTitle: string, imgSrc:string, displayText:string, cardSubTitle:string }) => {
  const [animate, setAnimate] = useState(false);

  return createPortal(
    <div className="wrapper" onClick={(e) => {
      e.preventDefault();
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}>

      <div className="wrapperBody">
        <div className="displayText">
          {children}
          <h2 className="displayTitle">{cardTitle}</h2>
          <h3 className="displaySubTitle">{cardSubTitle}</h3>

          <p>{displayText}</p>
        </div>
        <img className="displayImage" src={imgSrc}/>
        <button onClick={() => {
          onClose();
        }}>
          Close
        </button>

      </div>
    </div>,
    document.body
  );
};
