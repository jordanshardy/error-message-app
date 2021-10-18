import classes from "./Button.module.css";

const Button = (props) => {
   return (
      // we need set type from outside of the component using props from AddUser.js
      //if props type is undefined, 'button' will be used. Set with || operator
      //create handler function via props on this button component by setting onClick
      //with props and pointing at a function in AddUser called 'onClick'
      <button
         className={classes.button}
         type={props.type || "button"}
         onClick={props.onClick}
      >
         {props.children}
      </button>
   );
};

export default Button;
