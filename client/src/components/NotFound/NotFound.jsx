import classes from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={classes.div}>
      <div className={classes.txtBox}>
        <h2 className={classes.h2}>
          The menu you are looking for is definitely not here
        </h2>
        <p className={classes.p}>Need one?</p>
        <a className={classes.a} href="https://smart-menu-card.herokuapp.com/">
          Click here!
        </a>
      </div>
    </div>
  );
};

export default NotFound;
