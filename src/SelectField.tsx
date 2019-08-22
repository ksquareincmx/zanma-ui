import * as React from "react";
import { Touchable } from "./Touchable";

export interface ISelectFieldProps {
  value: string;
  onChange: (a: string) => void;
}

export const SelectField: React.FC<ISelectFieldProps> = ({
  value,
  onChange,
}) => {
  const [timeOutId, updateTimeOutId] = React.useState(null);
  const [isOpen, updateIsOpen] = React.useState(false);

  const handleBlur = () => {
    const id = setTimeout(() => {
      updateIsOpen(false);
    });

    updateTimeOutId(id);
  };

  const handleClickContainer = () => {
    updateIsOpen(!isOpen);
  };

  const handleFocus = () => {
    clearTimeout(timeOutId);
  };

  const handleClickItem = (val: string) => () => {
    onChange(val);
    updateIsOpen(false);
  };

  const handleClickPress = (val: string) => event => {
    console.log(event.keyCode);
    if (event.keyCode === 32 || event.keyCode === 13) {
      onChange(val);
      updateIsOpen(false);
    }
  };

  return (
    <div onBlur={handleBlur} onFocus={handleFocus}>
      <Touchable
        onClick={handleClickContainer}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {value}
      </Touchable>
      {isOpen && (
        <ul>
          <li
            tabIndex={0}
            onKeyUp={handleClickPress("Option 1")}
            onClick={handleClickItem("Option 1")}
          >
            Option 1
          </li>
          <li
            tabIndex={0}
            onKeyUp={handleClickPress("Option 2")}
            onClick={handleClickItem("Option 2")}
          >
            Option 2
          </li>
          <li
            tabIndex={0}
            onKeyUp={handleClickPress("Option 3")}
            onClick={handleClickItem("Option 3")}
          >
            Option 3
          </li>
        </ul>
      )}
    </div>
  );
};
