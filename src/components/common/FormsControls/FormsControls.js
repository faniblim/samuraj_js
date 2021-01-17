import React from "react";
import { Field } from "redux-form";
import { required } from "../../../utils/validators/validators";
import styles from "./FormsControls.module.css";

const Formcontrol = ({input, meta:{touched, error}, children}) => {
    const hasError = touched && error;
    return (
      <div
        className={styles.formControl + " " + (hasError ? styles.error : "")}
      >
        <div>{children}</div>
        <div>{hasError && <span>{error}</span>}</div>
      </div>
    );
}

export const Textarea = (props) => {
    const {input, meta,child, ...restprops} = props;
    return <Formcontrol {...props}><textarea {...input}  {...restprops} /></Formcontrol>    
}

export const Input = (props) => {
    const {input, meta,child, ...restprops} = props;
    return <Formcontrol {...props}><input {...input}  {...restprops} /></Formcontrol>    
}

export const createField = (placeholder, name, validators, component, props={}, text="") => 
<div>
<Field placeholder={placeholder} name={name} 
validate={validators} component={component} {...props} />{text}
</div>

