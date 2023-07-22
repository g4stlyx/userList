import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ children, header, addPhotoButton }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="panelDiv">
      <div className="topArrangement">
        <div className="topArrangement">{header}</div>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        {addPhotoButton}
          <div onClick={handleClick} style={{ cursor: "pointer" }}>
            {expanded ?<GoChevronDown />: <GoChevronLeft/>}
          </div>
        </div>
      </div>
      {expanded && <div>{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
