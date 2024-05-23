import './ProfileStyle.css';
import Main from "./images/Main.png"
import Progress from "./images/Progress.png"
import Achieves from "./images/Achieves.png"
import Homeworks from "./images/Homeworks.png"
import St_Mater from "./images/St Mater.png"
import News from "./images/News.png"
import Payment from "./images/Payment.png"
import Schedule from "./images/Schedule.png"
import otzov from "./images/otzov.png"
import ProfileImage from "./images/Profile.png"
import questans from "./images/questans.png"
import contacts from "./images/contacts.png"
import signal from "./images/signal.png"
import Instructions from "./images/Instructions.png"
import Shop from "./images/Shop.png"

function Profile() {
  return (
    
    <div className="Profile">
      <nav class="menu">
      <a className="Mystat-image" href="#"><img src="https://img.freepik.com/free-photo/field-landscape-during-day-time_23-2150724913.jpg"></img></a>
        <ul>
          <li><img src={Main}></img><a href="#">Головна</a></li>
          <li><img src={Progress}></img><a href="#">Прогрес</a></li>
          <li><img src={Achieves}></img><a href="#">Ваші нагороди</a></li>
          <li><img src={Homeworks}></img><a href="#">Домашні завдання</a></li>
          <li><img src={St_Mater}></img><a href="#">Навчальні матеріали</a></li>
          <li><img src={News}></img><a href="#">Новини</a></li>
          <li><img src={Payment}></img><a href="#">Оплата</a></li>
          <li><img src={Schedule}></img><a href="#">Розклад занять</a></li>
          <li><img src={otzov}></img><a href="#">Відгуки</a></li>
          <li><img src={ProfileImage}></img><a href="">Профіль</a></li>
          <li><img src={questans}></img><a href="#">Запитання та відгуки</a></li>
          <li><img src={contacts}></img><a href="#">Контакти</a></li>
          <li><img src={signal}></img><a href="#">Сигнал</a></li>
          <li><img src={Instructions}></img><a href="#">Інструкція з експлуатації </a></li>
          <li><img src={Shop}></img><a href="#">Магазин </a></li>
        </ul>
      </nav>


      <header>
        <div className="MyStat-header">
        <img className="Image-header" src="https://img.freepik.com/free-photo/field-landscape-during-day-time_23-2150724913.jpg"></img>
        <p className="UserName-header">Прізвище Ім'я Б</p>
        <p>Група:</p>    
        <select className="GroupSelect-header">
          <option>КН 21-2</option>
          <option>Розробка</option>
          <option>Дизайн</option>
        </select>
        <p className="kol-voStart-header">3800</p> 
        <img className="Stars-header" src="star.png"></img>
        <div className="Diamonds-Coins-header">
          <p>2000</p> 
          <img className="Diamonds-header" src="christal.png"></img>
          <p>1800</p> 
          <img className="Coins-header" src="coin.png"></img>
          <p>10</p> 
          <img className="Badges-header" src="badge.png"></img>
        </div>
        <div className="LangQuit-header">
        <select className="Select-header">
          <option>UA</option>
          <option>EN</option>
        </select>
        <img className="Quit-header" src="logout.png"></img>
        </div>
        </div>
      </header>

      <body>
        <div className="DivMain">
          <p>ПРОФІЛЬ</p>
          <div className="Profile-General">
            <div className="FirstColumn-Main">
              <img src="https://img.freepik.com/free-photo/field-landscape-during-day-time_23-2150724913.jpg"></img>
              <a href="#">Завантажити фото </a>
            </div>
            <div className="SecondColumn-Main">
              
              <p><input placeholder="Прізвище Ім'я"></input></p>        
              <p><input placeholder="Email"></input></p>
              <p><input placeholder="Адреса"></input></p>
            </div>
            <div className="ThirdColumn-Main">
              <p><input placeholder="Телефон"></input></p>
              <p><input placeholder="Дата народження"></input></p>
              <p><input placeholder="Instagram"></input></p>
            </div>
          </div>
          <div className="SaveBtn">
            <a href="#">ЗБЕРЕГТИ ЗМІНИ</a>
          </div>
          <div  className="DataOffice">
            <p>ДАННІ І ДОСТУПИ ДО ПЛАТФОРМ</p>
            <div className="LoginLinkOffice">
              <div className="LoginOffice">
                <p>ЛОГІН В OFFICE365</p>
                <div className="OfficeTextArea">
                  <p>Login@student.itstep.org</p>
                </div>
              </div>
              <div className="LinkOffice">
                <p>OFFICE365</p>
                <div className="OfficeTextArea">
                  <p>https://office365.itstep.org</p>
                </div>
              </div>
            </div>
          </div>
          <div className="BonusBalance">
            <p>БАЛАНС БОНУСІВ</p>
            <div className="Bonuses-Main">
              <div className="Bonuses-Main2">
                <div className="SimpleBonus">
                  <p>СТЕПКОІН</p>
                  <div className="ValueBonuses">
                    <p>100</p>
                  </div>
                </div>
                <div className="SimpleBonus">
                  <p>АЛМАЗИ</p>
                  <div className="ValueBonuses">
                    <p>100</p>
                  </div>
                </div>
                <div className="SimpleBonus">
                  <p>МОНЕТИ</p>
                  <div className="ValueBonuses">
                    <p>100</p>
                  </div>
                </div>
                <div className="SimpleBonus">
                  <p>ЗІРКИ</p>
                  <div className="ValueBonuses">
                    <p>100</p>
                  </div>
                </div>
                </div>
            </div>
          </div>
          <div className="Usp">
            <p>УСПІШНІСТЬ ЗА ОСТАННІЙ МІСЯЦЬ</p>
            <div className="IDK">
              <div className="IDK1"></div>
              <div className="IDK2"></div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Profile;

