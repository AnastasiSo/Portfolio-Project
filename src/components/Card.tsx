import { FunctionComponent } from "react";

export interface ICardProps {
  data: {
    title: string;
    description: string;
    codePen: string;
    github: string;
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
          See code on{" "}
          <a className="card-link" href={data.github}>
            Git Hub
          </a>{" "}
          or view project on{" "}
          <a className="card-link" href={data.codePen}>
            CodePen
          </a>
          .
        </p>
        <p className="card-caption">TECHNOLOGIES USED</p>
        <p className="card-technologies">
          HTML & CSS <span>Java Script</span>
        </p>
      </div>
    </div>
  );
};
export default Card;
