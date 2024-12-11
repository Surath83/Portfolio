import style from './Cv.module.css';
import img from './asserts/Resume_SurathChowdhury.pfd'
const Cv = () => {
  return (
    <div className={style.box}>
      <h2 className={style.h2}>Resume</h2>
      <div>{img}</div>
    </div>
  );
};
export default Cv;
