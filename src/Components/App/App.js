import React from 'react';

import './App.css';

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import BenefitsPanel from "../BenefitsPanel";
import ReviewPanel from "../ReviewsPanel";

import userAvatar1 from "./assets/ReviewsPanel/Avatars/user-avatar-1.png";
import userAvatar2 from "./assets/ReviewsPanel/Avatars/user-avatar-2.png";
import userAvatar3 from "./assets/ReviewsPanel/Avatars/user-avatar-3.png";

import benefitItemImg1 from './assets/BenefitsPanel/items/benefit-item-1.svg';
import benefitItemImg2 from './assets/BenefitsPanel/items/benefit-item-2.svg';
import benefitItemImg3 from './assets/BenefitsPanel/items/benefit-item-3.svg';
import benefitItemImg4 from './assets/BenefitsPanel/items/benefit-item-4.svg';

const app = {
    name: {
        en: 'F:AUTO',
        ru: 'Ф:АВТО'
    },
};

function App() {
    return (
        <div className="App">
            <Header
                app={app}
                logo={getHeaderLogo()}
                title={getHeaderTitle()}
                text={getHeaderText()}
                navLinkItems={getNavLinkItems()}
            />
            <SearchPanel
                title={getSearchPanelTitle()}
                searchPanelFormItems={getSearchPanelFormItems()}
            />
            <BenefitsPanel
                title={getBenefitsPanelTitle()}
                benefitsPanelItems={getBenefitsPanelItems()}
            />
            <ReviewPanel
                usersReviews={getUsersReviews()}
            />
        </div>
    );
}

const getHeaderTitle = () => {
    return 'Найти автозапчасти — легко!'
};

const getHeaderText = () => {
    return 'Автозапчасти только от проверенных продавцов.'
};

const getHeaderLogo = () => {
    return app.name.ru
};

const getNavLinkItems = () => {
    return [
        {id: 0, href: '#about-us', label: 'О Нас'},
        {id: 1, href: '/catalog', label: 'Каталог'},
        {id: 2, href: '#customers-reviews', label: 'Отзывы'},
        {id: 3, href: '#contacts', label: 'Контакты'},
        {id: 4, href: '/signIn', label: 'Войти'},
    ];
};

const getSearchPanelTitle = () => {
    return 'Быстрый поиск детали'
};

const getSearchPanelFormItems = () => {
    return [
        {
            id: 'brand', label: 'Марка авто', options: [
                {id: 1, label: '', value: ''},
                {id: 2, label: '', value: ''},
                {id: 3, label: '', value: ''},
            ]
        },
        {
            id: 'model', label: 'Модель', options: [
                {id: 1, label: '', value: ''},
                {id: 2, label: '', value: ''},
                {id: 3, label: '', value: ''},
            ]
        },
        {
            id: 'year', label: 'Год выпуска', options: [
                {id: 1, label: '', value: ''},
                {id: 2, label: '', value: ''},
                {id: 3, label: '', value: ''},
            ]
        },
        {
            id: 'detail', label: 'Запчасть', options: [
                {id: 1, label: '', value: ''},
                {id: 2, label: '', value: ''},
                {id: 3, label: '', value: ''},
            ]
        },
    ];
};

const getBenefitsPanelTitle = () => {
    return 'Почему люди выбирают нас'
};

const getBenefitsPanelItems = () => {
    return [
        {
            id: 0,
            title: 'Быстрый поиск и доставка',
            text: 'Бахните текст про этот плюс на две или три строчки-строчечки',
            img: benefitItemImg1
        },
        {
            id: 1,
            title: 'Тысячи довольных клиентов',
            text: 'Бахните текст про этот плюс на две или три строчки-строчечки',
            img: benefitItemImg2
        },
        {
            id: 2,
            title: 'Самые доступные цены',
            text: 'Бахните текст про этот плюс на две или три строчки-строчечки',
            img: benefitItemImg3
        },
        {
            id: 3,
            title: 'Гарантия на все запчасти',
            text: 'Бахните текст про этот плюс на две или три строчки-строчечки',
            img: benefitItemImg4
        },
    ];
};

const getUsersReviews = () => {

    const users = getUsers();

    return [
        {
            id: 0,
            user: users[0],
            review: {
                text: '«В силу специфики моей работы знаю Компанию Ф-АВТО \n' +
                    'уже очень давно. С самого первого момента отметил для себя профессиональный подход руководства компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
                date: '03.11.2019'
            }
        },

        {
            id: 1,
            user: users[1],
            review: {
                text: '«В силу специфики моей работы знаю Компанию Ф-АВТО \n' +
                    'уже очень давно. С самого первого момента отметил для себя профессиональный подход руководства компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
                date: '18.09.2019'
            }
        },

        {
            id: 2,
            user:  users[2],
            review: {
                text: '«В силу специфики моей работы знаю Компанию Ф-АВТО \n' +
                    'уже очень давно. С самого первого момента отметил для себя профессиональный подход руководства компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
                date: '14.06.2019'
            }
        }
    ];
};

const getUsers = () => {
    return [
        { id: 0, name: 'Руслан', avatar: userAvatar1 },
        { id: 1, name: 'Андрей', avatar: userAvatar2 },
        { id: 2, name: 'Максим', avatar: userAvatar3 },
    ];
};

export default App;
