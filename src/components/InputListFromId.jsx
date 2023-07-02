import React, { useState } from "react";
import SelectInputField from "./form-fields/SelectInputField";

const InputListFromId = ({ idList }) => {
  const [list] = useState(idList);
  return (
    <div>
      {list.map((eachId) => {
        return (
          <div className="bg-secondary flex  col-span-1">
            <SelectInputField value={eachId} />
          </div>
        );
      })}
    </div>
  );
};

export default InputListFromId;
