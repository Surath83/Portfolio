import style from './Newsletter.module.css'
function Newsletter () {
    return(
        <>
            <div className={style.box}>
            <h2>Subscribe to our Newsletter</h2>
            <form className={style.ff}>
            <input type='email' className={style.inp} placeholder='Email Address' required/>
            <button className={style.submitbotton}>submit</button>
            </form>
            </div>           
        </>
    )
}
export default Newsletter;