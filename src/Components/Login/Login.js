import "./Login.css";
function Login(){

    return (

        <div className="Body">
            <div className="BlurLayer">
                <img className="MystatLogo" src="https://mystat.itstep.org/assets/images/logo.png?v=cce222be7d237f6d95418ecb8c5529b8" alt="mystat_logo"></img>
                <input className="InputField" placeholder="Логін"></input>
                <input className="InputField" placeholder="Пароль"></input>
                <button className="LoginButton">
                    Вхід
                </button>
                <a className="PasswordRestore" href="google.com">Забули пароль?</a>
            </div>
                
        </div>
    );

}

export default Login;