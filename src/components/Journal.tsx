import { FunctionComponent } from "react";
import { JournalData } from "../data";
import pin from "../images/pin.png";

const Journal: FunctionComponent<JournalData> = (props: JournalData) => {
  return (
    <div className="journal">
      <img src={props.imageUrl} className="journal-image" />
      <div className="journal-content">
        <span
          style={{
            fontSize: "11px",
            fontWeight: "400",
            lineHeight: "13px",
            letterSpacing: "0.17em",
          }}
        >
          <img
            src={pin}
            alt=""
            style={{ height: "10px", paddingRight: "5px" }}
          />
          <span style={{ paddingRight: "10px" }}>
            {props.location.toUpperCase()}
          </span>
          <a
            href={props.googleMapsUrl}
            style={{
              fontSize: "10.24px",
              lineHeight: "12px",
              textDecorationLine: "underline",
              letterSpacing: "0.5px",
            }}
          >
            View on Google Maps
          </a>
        </span>
        <h1>{props.title}</h1>
        <h5>
          {props.startDate} - {props.endDate}
        </h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Journal;
