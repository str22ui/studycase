// import './MyComponent.css';
import React from "react";
import styles from './MyComponent.module.css';
import comp from './MyComponent2.module.css'
// import "./style/styles.css";

const Styling = () => {
    return <div className={styles.component}>Hello, world!</div>;
    return <div className={comp.compo}>Hello, world!</div>;
  };
export default Styling; 


// import styles from './MyButton.module.css';

// const MyButton = () => {
//   return (
//     <button className={styles.button}>Button</button>
//   );
// };

// export default MyButton;