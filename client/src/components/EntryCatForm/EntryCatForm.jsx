import { useContext, useState } from "react";
import classes from "../Form/Form.module.css";
import MenuCtx from "../../store/menu-ctx";
import Preview from "../Preview/Preview";
import PreviewTwo from "../PreviewTwo/PreviewTwo";

const EntryCatForm = ({ setWhichForm }) => {
  const menuCtxManager = useContext(MenuCtx);
  const [showRequired, setShowRequired] = useState(false);

  const [catOne, setCatOne] = useState("");
  const [catTwo, setCatTwo] = useState("");
  const [catThree, setCatThree] = useState("");
  const [catFour, setCatFour] = useState("");
  const [catFive, setCatFive] = useState("");

  const addCategoriesToMenu = (e) => {
    e.preventDefault();
    if (
      catOne !== "" ||
      catTwo !== "" ||
      catThree !== "" ||
      catFour !== "" ||
      catFive !== ""
    ) {
      let catArr = [catOne, catTwo, catThree, catFour, catFive];

      let filtered = catArr.filter((item) => {
        return item !== "";
      });

      filtered.forEach((category) => {
        menuCtxManager.addCategoryToMenu(category);
      });
      setWhichForm((prev) => prev + 1);
    } else {
      setShowRequired(true);
    }
  };

  return (
    <div className={classes.previewDiv}>
      <form onSubmit={addCategoriesToMenu} className={classes.form}>
        <fieldset className={classes.fieldset}>
          <legend className={classes.legend}>Category</legend>
          {showRequired && (
            <p className={classes.feedback}>At least one field is required</p>
          )}
          <label className={classes.label}>Enter up to 5 categories</label>
          <input
            value={catOne}
            onChange={(e) => setCatOne(() => e.target.value)}
            className={classes.input}
            type="text"
            placeholder="Ex: Starters"
          />

          <input
            onChange={(e) => setCatTwo(() => e.target.value)}
            value={catTwo}
            className={classes.input}
            type="text"
            placeholder="Ex: Meals"
          />
          <input
            onChange={(e) => setCatThree(() => e.target.value)}
            value={catThree}
            className={classes.input}
            type="text"
            placeholder="Ex: Thali"
          />
          <input
            onChange={(e) => setCatFour(() => e.target.value)}
            value={catFour}
            className={classes.input}
            type="text"
            placeholder="Ex: Desserts"
          />
          <input
            onChange={(e) => setCatFive(() => e.target.value)}
            value={catFive}
            className={classes.input}
            type="text"
            placeholder="Ex: Drinks"
          />
        </fieldset>
        <input type="submit" className={classes.btn} />
      </form>
      <div className={classes.previewBox}>
        <h1 className={classes.newww}>Preview</h1>
        <Preview info={menuCtxManager.genInfo} />
        <PreviewTwo
          catArr={[
            { category: catOne, dishes: [] },
            { category: catTwo, dishes: [] },
            { category: catThree, dishes: [] },
            { category: catFour, dishes: [] },
            { category: catFive, dishes: [] },
          ]}
        />
      </div>
    </div>
  );
};

export default EntryCatForm;
