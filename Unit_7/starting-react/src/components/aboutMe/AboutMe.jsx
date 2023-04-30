/* 
   - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/
import "./AboutMe.css";

function AboutMe() {
  const city = "Essex";
  const state = "Vermont";

  let styles = {
    ul: {
      textAlign: "right",
      color: "green",
    },
    p: {
      fontSixe: "20pt",
    },
  };
  return (
    <div>
      <p style={styles.p}>
        I grew up in {city}, {state}.{" "}
      </p>
      {/* <ul style={{ textAlign: "left", color: "blue" }}> */}
      <ul style={styles.ul}>
        <li>The kitchen</li>
        <li>Mars</li>
        <li>The Great Wall of China</li>
      </ul>
    </div>
  );
}

export default AboutMe;
