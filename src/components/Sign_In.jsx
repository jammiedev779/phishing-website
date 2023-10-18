import { useNavigate } from "react-router-dom"
import "../style/Sign_In.css"

export default function Sign_In() {

  const nav = useNavigate('');
  const onSubmit = () => {
    nav('/Home/form');
  }

  return (
    <div>
       <form onSubmit={onSubmit} action={onSubmit}>
            <h2>Sign In</h2>
            <p className="sub-title">Please Sign In to continue</p>
                <div class="container">
                    <label for="uname">Username</label>
                    <input type="text" placeholder="Username" required/>

                    <label for="psw">Password</label>
                    <input type="password" placeholder="Password" required/>
                        
                    <button className="submit" type="submit">Sign In</button>
                </div>

            
                <p className="text">Don't have an account?<a href="#">Sign Up</a></p>
                <p className="">
                IMPORTANT: Having multiple accounts causes delays in receiving exam results. Creating multiple 
                accounts to avoid a rescheduling fee, circumvent the (ISC2) Retake Policy or to reapply a free exam code 
                is a violation of (ISC2) Exam Policies and may nullify your exam results and/or result in a temporary or 
                permanent ban from ISC2 exams.
                </p>
                
            </form>
    </div>
  )
}

