import "./NavMenu.css"
import NavMenuButton from "../NavMenuButton/NavMenuButton"
import NavMenuShopButton from "../NavMenuShopButton/NavMenuShopButton"
import { useState } from "react"

function NavMenu(){

    return(
        <div className="NavMenu_Body" >     
            <div className="NavMenu_Blur">
                <img className="MystatLogo_Nav" src="https://mystat.itstep.org/assets/images/logo.png?v=cce222be7d237f6d95418ecb8c5529b8" alt="mystat_logo"></img>
                <NavMenuButton 
                    buttonimage="https://mystat.itstep.org/assets/resources/main.svg?v=9ef25e2e9ad9a7edcc0874c8c7275d02"
                    buttontext="Головна"
                />
                 <NavMenuButton 
                    buttonimage="https://mystat.itstep.org/assets/resources/line.svg?v=3c436a6ccd609a0ea51bcfff124ddcc5"
                        buttontext="Прогрес"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/star.svg?v=fc76426a3f94ee094207b980836da593"
                        buttontext="Ваші нагороди"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/tasks.svg?v=03b1949b244741a0b01c079715b57b08"
                        buttontext="Домашні завдання"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/books.svg?v=746d852bc18fc92c72d50dfb230c9fee"
                        buttontext="Навчальні матеріали"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/message.svg?v=e711d530809deaab5baf6370c76b8635"
                        buttontext="Новини"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/card.svg?v=5c0c6a947cc6b096b68946fedc1f30fc"
                        buttontext="Оплата"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/calendar.svg?v=5a3c09757c1d09d04b271f3ed9dc0028"
                        buttontext="Розклад занять"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/pen.svg?v=ee2f2e200d4301cc9d468057fb39d87e"
                        buttontext="Відгуки"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/profile.svg?v=67734166db7ccc381ee701f2a11ac7db"
                        buttontext="Профіль"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/question.svg?v=42767485eaec12b16d8e7747936e9e96"
                        buttontext="Запитання та відповіді"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/pin.svg?v=1406b8b0e201d0791161ae703ff4249a"
                        buttontext="Контакти"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/main.svg?v=9ef25e2e9ad9a7edcc0874c8c7275d02"
                        buttontext="Сигнал"
                    />
                    <NavMenuButton 
                        buttonimage="https://mystat.itstep.org/assets/resources/faq.svg?v=abeab1b77e931d962dba15879f1fd94f"
                        buttontext="Інструкція з експлутації"
                    />
                    <NavMenuShopButton/>
            </div>
            
        </div>

    )

}

export default NavMenu