import React from 'react';

import './App.css';

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import BenefitsPanel from "../Benefit/BenefitsPanel";
import ReviewPanel from "../Review/ReviewsPanel";
import Footer from "../Footer";

import userAvatar0 from "./assets/ReviewsPanel/Avatars/user-avatar-0.svg";
import userAvatar1 from "./assets/ReviewsPanel/Avatars/user-avatar-1.svg";
import userAvatar2 from "./assets/ReviewsPanel/Avatars/user-avatar-2.svg";
import userAvatar3 from "./assets/ReviewsPanel/Avatars/user-avatar-3.svg";
import userAvatar4 from "./assets/ReviewsPanel/Avatars/user-avatar-4.svg";
import userAvatar5 from "./assets/ReviewsPanel/Avatars/user-avatar-5.svg";
import userAvatar6 from "./assets/ReviewsPanel/Avatars/user-avatar-6.svg";
import userAvatar7 from "./assets/ReviewsPanel/Avatars/user-avatar-7.svg";
import userAvatar8 from "./assets/ReviewsPanel/Avatars/user-avatar-8.svg";
import userAvatar9 from "./assets/ReviewsPanel/Avatars/user-avatar-9.svg";

import benefitItemImg1 from './assets/BenefitsPanel/items/benefit-item-1.svg';
import benefitItemImg2 from './assets/BenefitsPanel/items/benefit-item-2.svg';
import benefitItemImg3 from './assets/BenefitsPanel/items/benefit-item-3.svg';
import benefitItemImg4 from './assets/BenefitsPanel/items/benefit-item-4.svg';

const avatars = [
    userAvatar0,
    userAvatar1,
    userAvatar2,
    userAvatar3,
    userAvatar4,
    userAvatar5,
    userAvatar6,
    userAvatar7,
    userAvatar8,
    userAvatar9,
];

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
            <Footer/>
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
    const reviews = getReviews();

    return reviews.map((it, i) => {
        return {
            id: i,
            user: users[i],
            review: it
        }
    })
};

const getUsers = () => {
    return [
        {id: 0, name: 'Руслан', avatar: avatars[0]},
        {id: 1, name: 'Андрей', avatar: avatars[1]},
        {id: 2, name: 'Максим', avatar: avatars[2]},
        {id: 3, name: 'Игнат', avatar: avatars[3]},
        {id: 4, name: 'Валерий', avatar: avatars[4]},
        {id: 5, name: 'Филипп', avatar: avatars[5]},
        {id: 6, name: 'Кирилл', avatar: avatars[6]},
        {id: 7, name: 'Александр', avatar: avatars[7]},
        {id: 8, name: 'Михаил', avatar: avatars[8]},
        {id: 9, name: 'Антон', avatar: avatars[9]},
    ];
};

const getReviews = () => {
    return [
        {
            id: 0,
            text: '«В силу специфики моей работы знаю Компанию Ф-АВТО уже очень давно. ' +
                'С самого первого момента отметил для себя профессиональный подход руководства ' +
                'компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
            date: getRandomDate(new Date(2012, 0, 1))
        },
        {
            id: 1,
            text: '«В силу специфики моей работы знаю Компанию Ф-АВТО уже очень давно. ' +
                'С самого первого момента отметил для себя профессиональный подход руководства ' +
                'компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
            date: getRandomDate(new Date(2012, 0, 1))
        },
        {
            id: 2,
            text: '«В силу специфики моей работы знаю Компанию Ф-АВТО уже очень давно. ' +
                'С самого первого момента отметил для себя профессиональный подход руководства ' +
                'компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
            date: getRandomDate(new Date(2012, 0, 1))
        },
        {
            id: 3,
            text: '«В силу специфики моей работы знаю Компанию Ф-АВТО уже очень давно. ' +
                'С самого первого момента отметил для себя профессиональный подход руководства ' +
                'компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
            date: getRandomDate(new Date(2012, 0, 1))
        },
        {
            id: 4,
            text: '«В силу специфики моей работы знаю Компанию Ф-АВТО уже очень давно. ' +
                'С самого первого момента отметил для себя профессиональный подход руководства ' +
                'компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
            date: getRandomDate(new Date(2012, 0, 1))
        },
        {
            id: 5,
            text: '«В силу специфики моей работы знаю Компанию Ф-АВТО уже очень давно. ' +
                'С самого первого момента отметил для себя профессиональный подход руководства ' +
                'компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
            date: getRandomDate(new Date(2012, 0, 1))
        },
        {
            id: 6,
            text: '«В силу специфики моей работы знаю Компанию Ф-АВТО уже очень давно. ' +
                'С самого первого момента отметил для себя профессиональный подход руководства ' +
                'компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
            date: getRandomDate(new Date(2012, 0, 1))
        },
        {
            id: 7,
            text: '«В силу специфики моей работы знаю Компанию Ф-АВТО уже очень давно. ' +
                'С самого первого момента отметил для себя профессиональный подход руководства ' +
                'компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
            date: getRandomDate(new Date(2012, 0, 1))
        },
        {
            id: 8,
            text: '«В силу специфики моей работы знаю Компанию Ф-АВТО уже очень давно. ' +
                'С самого первого момента отметил для себя профессиональный подход руководства ' +
                'компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
            date: getRandomDate(new Date(2012, 0, 1))
        },
        {
            id: 9,
            text: '«В силу специфики моей работы знаю Компанию Ф-АВТО уже очень давно. ' +
                'С самого первого момента отметил для себя профессиональный подход руководства ' +
                'компании к формированию команды и выстраиванию бизнес-процессов. Рекомендую!»',
            date: getRandomDate(new Date(2012, 0, 1))
        },
    ]
};

const getRandomDate = (start, end = new Date()) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        .toLocaleDateString()
};

export default App;