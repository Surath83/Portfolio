import style from './About.module.css';

const About = () => {
    const openLink = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <div className={style.desc}>
                <h1 className={style.heading}>INTRODUCTION :</h1>
                <br />
                <h4>
                    <p>My name is Surath, and I was born and raised in Kolkata, India. I completed my schooling there up to the 12th grade. After finishing high school, I moved to Bangalore to pursue my B.Tech studies. I come from a small, close-knit nuclear family.</p>
                    <p>&emsp;&emsp;From a very young age, I developed a fascination with electronic devices, and this curiosity gradually extended to computers as I grew older. My father played a significant role in nurturing my interest by encouraging me to explore and learn more about computers. Over time, this early curiosity turned into a deep passion for technology and its endless possibilities.</p>
                    <p>&emsp;&emsp;Today, I am driven by my love for innovation and problem-solving, which motivates me to explore new ideas and work on projects that bridge my technical knowledge with practical applications.</p>
                </h4>
                <br />
                <br />
                <h1 className={style.heading}>EDUCATION :</h1>
                <br />
                <h4>
                    <ul>
                        <li><b className={style.b}>B-tech: </b>Computer Science and Engineering | (VTU) | SJB Institute of Technology | Bengaluru | CGPA: 7.8 | (2nd year,2023-2024) <i>(highest qualification)</i> </li>
                        <li><b className={style.b}>XII: </b>(WBCHSE) | Swami Pranava Nanda Vidyapith | Kolkata | 83.8% | (2022)</li>
                        <li><b className={style.b}>X: </b>(WBBSE) | Swami Pranava Nanda Vidyapith | Kolkata | 72% | (2020)</li>
                    </ul>
                </h4>
                <br />
                <br />
                <h1 className={style.heading}>COURSES :</h1>
                <br />
                <h4>
                    <ul>
                        <li>Operating System</li>
                        <li>Linux Commands</li>
                        <li>Networking</li>
                        <li>Digital circuits <i className={style.i}>(Microprocessor-8085, ARM7)</i></li>
                        <li>Git, GitHub</li>
                    </ul>
                </h4>
                <br />
                <br />
                <h1 className={style.heading}>Certification :</h1>
                <br />
                <h4>
                    <ul>
                        <li>
                            <button className={style.bbt} onClick={() => openLink('https://drive.google.com/file/d/1rXgKgzk2cZtQj9EKwSHhwIzoS6NlhjLZ/view?usp=drive_link')}>
                                Certification of DSA with Java (2023)
                            </button>
                            <p><i className={style.i}>Online course- Apna College</i></p>
                        </li>
                        <li>
                            <button className={style.bbt} onClick={() => openLink('https://drive.google.com/file/d/1JJQTJFbX6moy4qWBKajQFDXWzA3YKpn6/view?usp=drive_link')}>
                                Certification of ARM7 (2024)
                            </button>
                            <p><i className={style.i}>Online course- Bharat Acharya Education</i></p>
                        </li>
                    </ul>
                </h4>
                <br />
                <br />
                <h1 className={style.heading}>INTERESTS :</h1>
                <br />
                <h4>
                    <ul>
                        <li>Fitness</li>
                        <li>Storytelling</li>
                        <li>Problem solving</li>
                        <li>Sketching</li>
                        <li>Gardening</li>
                        <li>Traveling</li>
                    </ul>
                </h4>
            </div>
        </>
    );
};

export default About;
