﻿import "microsoft-ajax";
import * as React from "react";
import "sharepoint";
import "sp-init";
import "sp-runtime";
import Add from "../icons/Add";
import styles from "./Listview.module.scss";

const Listview: React.FC = () => {
  const load = async (): Promise<void> => {
    try {
      const context: SP.ClientContext = SP.ClientContext.get_current();
      const web: SP.Web = context.get_web();
      context.load(web);
      context.executeQueryAsync(
        (_, __) => {
          context.executeQueryAsync(
            (_, __) => {
              alert("It works!");
            },
            (sender, args) => {
              console.error(sender);
              console.error(args);
            }
          );
        },
        (sender, args) => {
          console.error(sender);
          console.error(args);
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.action} onClick={load}>
          <Add />
          <div className={styles.title}>Click here</div>
        </div>
      </div>
    </div>
  );
};

export default Listview;
