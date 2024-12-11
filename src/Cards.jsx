/* eslint-disable react/prop-types */

import style from './Cards.module.css'
function Cards ({title, image ,description ,year ,link}) {
    const handleClick = () => {
        if (!link) {
            return;
        }
        window.open(link, '_blank');
    }
    return(
        <div className={style.container}>
            <div className={style.label}>
                <h2>{title}</h2><h6><i>{year}</i></h6>
                <br />
                <p>{description}</p>
                <button className={style.button} onClick={handleClick}>Link</button>
            </div>
            <img className={style.img} src={image} alt={title}  />
        </div>
    )
}


export default Cards;