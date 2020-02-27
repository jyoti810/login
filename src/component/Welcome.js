import React from 'react';
import './Welcome.css';

function Welcome (){
return <div>
    <div className="head">
          <h2>LOGIN</h2>
        <div className="main">
    
           <input type="email" className="email"placeholder="EMAIL" name="email"></input><br></br>
           <input type="password" className="pass"placeholder="PASSWORD" name="password"></input><br></br>
           <a href="#"><span id="password">forgot your password ?</span></a>
            <a href="#"><span id="memorize">MEMORIZE</span></a>
           <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="LOGIN" />
           <a href="#"><span id="account" >No account ?</span></a>
            <a href="#"><span id="register">Register now</span></a>
        </div>
 </div>
 <div className="b2">
 <button className="btn btn-md btn-primary btn-center" id="sign" type="button"><i className="fa fa-facebook" id="face" aria-hidden="true"></i>  CONNECT TO US WITH FACEBOOK</button>
  </div>
</div>
     
}
export default Welcome;