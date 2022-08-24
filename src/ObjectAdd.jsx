import { useEffect, useState } from "react";
import styles from "./Modals.module.css";

function ObjectAdd(props) {
  const [name, setName] = useState("");
  const [shortName, setshortName] = useState("");
  const [enabled, setEnabled] = useState(true);
  const [description, setDescription] = useState("");

  const addObject = () => {
    if (name?.length <= 0 || shortName?.length <= 0) {
      return;
    }

    const entity = {
      type: "object",
      name: name,
      shortname: shortName,
      enabled: enabled,
      description: description,
    };
    if (props.edit) {
      props.onConfirmEdit(props.data, entity);
    } else {
      props.onConfirm(entity);
    }
  };

  useEffect(() => {
    if (props.edit) {
      setName(props.data.name);
      setshortName(props.data.shortname);
      setEnabled(props.data.enabled);
      setDescription(props.data.description);
    }
  }, []);

  const generateObject = () => {
    setName("Test Object");
    setshortName("TO");
    setEnabled(true);
    setDescription("This is a test object");
    setInventory("");
  };

  return (
    <div className={styles.modal}>
      <label>{props.edit ? "Edit" : "Add"} Scene</label>
      <br />
      <br />
      <label>Name</label>
      <br />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Short Name</label>
      <br />
      <input
        type="text"
        placeholder="Short Name"
        value={shortName}
        onChange={(e) => setshortName(e.target.value)}
      />
      <br />
      <label>Description</label>
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input
        type="checkbox"
        checked={enabled}
        onChange={(e) => setEnabled(e.target.checked)}
      />
      <label>Enabled</label>
      <br />
      <br />
      {!props.edit && <button onClick={generateObject}>Generate</button>}
      <button onClick={addObject}>{props.edit ? "Edit" : "Add"}</button>
      <button onClick={props.onCancel}>Cancel</button>
    </div>
  );
}

export default ObjectAdd;
