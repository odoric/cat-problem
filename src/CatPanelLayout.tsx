import { CatPanel } from "./CatPanel";
import { CatRecord } from "./data";
import "./styles.css";

type Props = {
  catData: CatRecord[];
};

export const CatPanelLayout = (props: Props) => {
  return (
    <div className="cat-panel-layout">
      {props.catData.map((catRecord: CatRecord) => (
        <CatPanel cat={catRecord} />
      ))}
    </div>
  );
};
