import style from './Cv.module.css';
import image from './assets/Resume_SurathChowdhury.png';
const Cv = () => {
    return (
    <div className={style.box}>
      <h2 className={style.h2}>Resume</h2><br />
      <div className={style.img}>
      <img  src={image} />
      </div>
    </div>
  );
};
export default Cv;