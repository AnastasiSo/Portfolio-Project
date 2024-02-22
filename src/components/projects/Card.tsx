import { FunctionComponent } from "react";

export interface ICardProps {
  data: {
    title: string;
    description: string;
    preview: string;
    github: string;
    technologies?: string;
  };
}

const Card: FunctionComponent<ICardProps> = ({ data }) => {
  return (
    <div className="card-wrap">
      <div className="card">
        <h3>{data.title}</h3>
        <p className="card-description">
          {data.description}
          <br />
          See code on&nbsp;
          <a className="card-link" href={data.github} target="blank">
            Git Hub
          </a>
          &nbsp;or view project on&nbsp;
          <a className="card-link" href={data.preview} target="blank">
            Preview
          </a>
          .
        </p>
        <p className="card-caption">TECHNOLOGIES USED</p>
        <p className="card-technologies">
          HTML & CSS <span>Java Script</span>
          <span>{data.technologies}</span>
        </p>
      </div>
    </div>
  );
};
export default Card;
