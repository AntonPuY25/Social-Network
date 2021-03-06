import React from "react";
import styles from "./FormControls.module.css";

export const Input = ({input,meta,...props})=>{
    const hasError = meta.touched && meta.error;
    return(
        <div className={(hasError?styles.error:"")}>
        <div>
        <input  {...input}{...props}/>
        </div>
            
            {hasError && <span className={styles.spanik}>{meta.error}</span>}
        </div>
       
    )
}