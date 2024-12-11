import style from './Getintouch.module.css'
function Getintouch () {
    return(
        <div className={style.box}>
                  <h2>Get in touch</h2><br />
                  <form>
                    <input type='text' className={style.textinput} placeholder='First Name' required/>
                    <input type='text' className={style.textinput} placeholder='Last Name' required/>
                    <br/>
                    <input type='email' className={style.textinput} placeholder='Email Address' required/>
                    <input type='number' className={style.textinput} placeholder='Phone No.' required/>
                    <br />
                    <textarea className={style.msginput} placeholder='Message' required></textarea>
                    <br /><br />
                    <button className={style.submitButton}>Send</button>
                  </form>
                </div>
    )
}
export default Getintouch;