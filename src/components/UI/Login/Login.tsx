import React from "react";
import { Login } from "./Login.style";

export const Registration = () => {
    return (
        <Login>
            <span>
                Уже есть аккаунт? <a href="#">Войти</a>
            </span>
            <p>Войти с помощью</p>
            <div className="icons-wrapper">
                <a className="reg__link google-link" href="#">
                    <img src="./img/icons/google.svg" alt="Google" />
                </a>
                <a className="reg__link google-plus-link" href="#">
                    <img src="./img/icons/google-plus.svg" alt="Google Plus" />
                </a>
                <a className="reg__link yandex-link" href="#">
                    <img src="./img/icons/yandex.svg" alt="Yandex" />
                </a>
                <a className="reg__link mail-ru-link" href="#">
                    <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
                </a>
            </div>
        </Login>
    )
}