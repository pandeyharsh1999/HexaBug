import styles from "@/styles/ProgramFilter.module.css";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { checkbox, radio } from "./programConstants";

export default function ProgramFilter() {
  const [selected, setSelected] = useState();
  const [showPicker, setShowPicker] = useState(false);
  const [checked, setChecked] = useState(
    new Array(checkbox.length).fill(false)
  );
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() - 7
      ),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checked.map((item, index) =>
      index === position ? !item : item
    );

    setChecked(updatedCheckedState);
  };

  const clearCheckbox = () => {
    setChecked(new Array(checkbox.length).fill(false));
  };

  const clearRadio = () => {
    setSelected();
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input type="search" placeholder="Search by program name" />
      </div>
      <div className={styles.rewardType}>
        <div className={styles.heading}>
          <span>Reward Type</span>
          {checked.includes(true) && (
            <span className={styles.clear} onClick={clearCheckbox}>
              clear
            </span>
          )}
        </div>
        <div className="checkbox-group">
          {checkbox.map((each, index) => (
            <div key={index} className="checkbox">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                name="rewardType"
                value={each.value}
                checked={checked[index]}
                onChange={() => handleOnChange(index)}
              />
              <label htmlFor={`checkbox-${index}`}>{each.label}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.launchRange}>
        <div className={styles.heading}>
          <span>Launch Within</span>
          {selected && (
            <span className={styles.clear} onClick={clearRadio}>
              clear
            </span>
          )}
        </div>
        <div className="checkbox-group">
          {radio.map((each, index) => (
            <div key={index} className="radio">
              <input
                type="radio"
                id={`radio-${index}`}
                name="launchWithin"
                value={each.value}
                checked={selected === each.value}
                onChange={() => setSelected(each.value)}
              />
              <label htmlFor={`radio-${index}`}>{each.label}</label>
            </div>
          ))}
        </div>
      </div>
      {/* {selected === "custom" && (
        <div className={styles.custom}>
          <div
            onClick={() => setShowPicker(true)}
            className={styles.rangePicker}
          >
            1 Apr, 2022 - 2 May, 2022
          </div>
        </div>
      )} */}
      {selected === "custom" && (
        <div className={styles.picker}>
          <DateRange
            // className={styles.rangeWrapper}
            editableDateInputs={true}
            onChange={(item) => setDateRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
          />
        </div>
      )}
    </div>
  );
}
