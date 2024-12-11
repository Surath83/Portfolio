import style from './Cv.module.css';

const Cv = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/Resume_SurathChowdhury.pdf';
    link.download = 'Resume_SurathChowdhury.pdf';
    link.click();
  };

  return (
    <div className={style.box}>
      <h2 className={style.h2}>Resume</h2>
      <div className={style.line}>
      <p className={style.p}>Check my resume</p>
      <button className={style.submitbotton} onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
};
export default Cv;