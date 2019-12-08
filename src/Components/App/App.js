import React from 'react';

import './App.css';

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import BenefitsPanel from "../Benefit/BenefitsPanel";
import ReviewPanel from "../Review/ReviewPanel";
import WarrantyPanel from '../Warranty/WarrantyPanel'
import JobOfferPanel from "../JobOffer/JobOfferPanel";
import DeliveryPanel from "../DeliveryPanel";
import Footer from "../Footer";

import userAvatar0 from "./assets/ReviewsPanel/Avatars/user-avatar-0 1.png";
import userAvatar1 from "./assets/ReviewsPanel/Avatars/user-avatar-1 1.png";
import userAvatar2 from "./assets/ReviewsPanel/Avatars/user-avatar-2 1.png";
import userAvatar3 from "./assets/ReviewsPanel/Avatars/user-avatar-3 1.png";
import userAvatar4 from "./assets/ReviewsPanel/Avatars/user-avatar-4 1.png";
import userAvatar5 from "./assets/ReviewsPanel/Avatars/user-avatar-5 1.png";
import userAvatar6 from "./assets/ReviewsPanel/Avatars/user-avatar-6 1.png";
import userAvatar7 from "./assets/ReviewsPanel/Avatars/user-avatar-7 1.png";
import userAvatar8 from "./assets/ReviewsPanel/Avatars/user-avatar-8 1.png";
import userAvatar9 from "./assets/ReviewsPanel/Avatars/user-avatar-9 1.png";

import benefitItemImg1 from './assets/BenefitsPanel/items/benefit-item-1.svg';
import benefitItemImg2 from './assets/BenefitsPanel/items/benefit-item-2.svg';
import benefitItemImg3 from './assets/BenefitsPanel/items/benefit-item-3.svg';
import benefitItemImg4 from './assets/BenefitsPanel/items/benefit-item-4.svg';
import mapImg from './assets/DeliveryPanel/map.png'

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
                logo={getAppLogo()}
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

            <WarrantyPanel
                title="Гарантия и сертификаты качества"
                warrantyPanelItems={getWarrantyItems()}
            />

            <JobOfferPanel
                title={getJobOfferPanelTitle()}
                jobOfferItems={getJobOfferItems()}
            />

            <DeliveryPanel
                title={getDeliveryPanelTitle()}
                mapImg={mapImg}
                selfDeliveryOptions={getSelfDeliveryOptions()}
                deliveryOptions={getDeliveryOptions()}
            />

            <Footer
                logo={getAppLogo()}
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

const getAppLogo = () => {
    return app.name.ru
};

const getNavLinkItems = () => {
    return [
        {id: 0, href: '#about-us', label: 'О Нас'},
        {id: 1, href: '/catalog', label: 'Каталог'},
        {id: 2, href: '#review-panel', label: 'Отзывы'},
        {id: 3, href: '#contacts', label: 'Контакты'},
        {id: 4, href: '#job-offer-panel', label: 'Вакансии'},
    ];
};

const getSearchPanelTitle = () => {
    return 'Быстрый поиск детали'
};

const getSearchPanelFormItems = () => {
    return [
        {
            id: 'brand', label: 'Марка авто', options: getBrands()
        },
        {
            id: 'type', label: 'Тип кузова', options: getCorpusTypes()
        },
        {
            id: 'year', label: 'Год выпуска', options: getYears(1990)
        },
        {
            id: 'detail', label: 'Запчасть', options: getDetails()
        },
    ];
};

const getDetails = () => {
    return [
        {id: 0, label: 'Двигатель', value: 'Двигатель'},
        {id: 1, label: 'Оптика и свет', value: 'Оптика и свет'},
        {id: 2, label: 'Системы охлаждения', value: 'Системы охлаждения'},
        {id: 3, label: 'Подвеска', value: 'Подвеска'},
        {id: 4, label: 'Топливная система', value: 'Топливная система'},
    ]
};

const getYears = (yearFrom = 1980) => {
    const currentYear = new Date().getFullYear();

    const years = [];

    let j = 0;

    for (let i = yearFrom; i < currentYear; i++) {
        years.push({id: j++, label: i, value: i})
    }

    return years
};

const getCorpusTypes = () => {
    return [
        {id: 0, label: 'Купе', value: 'Купе'},
        {id: 1, label: 'Хетчбек', value: 'Хетчбек'},
        {id: 2, label: 'Седан', value: 'Седан'},
        {id: 3, label: 'Универсал', value: 'Универсал'},
        {id: 4, label: 'Минивен', value: 'Минивен'},
        {id: 5, label: 'Кроссовер', value: 'Кроссовер'},
        {id: 6, label: 'Внедорожник', value: 'Внедорожник'},
        {id: 7, label: 'Микроавтобус', value: 'Микроавтобус'},
    ]
};

const getBrands = () => {
    return [
        {id: 0, label: 'Mercedes', value: 'Mercedes'},
        {id: 1, label: 'Audi', value: 'Audi'},
        {id: 2, label: 'BMW', value: 'BMW'},
        {id: 3, label: 'Volkswagen', value: 'Volkswagen'},
        {id: 4, label: 'Mitsubishi', value: 'Mitsubishi'},
        {id: 5, label: 'Ford', value: 'Ford'},
        {id: 6, label: 'Toyota', value: 'Toyota'},
        {id: 7, label: 'Geely', value: 'Geely'},
        {id: 8, label: 'Mini', value: 'Mini'},
        {id: 9, label: 'Opel', value: 'Opel'},
    ].sort((a, b) => {
            if (a.label > b.label) {
                return 1
            }

            if (a.label < b.label) {
                return -1
            }

            return 0
        }
    )
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

const getWarrantyItems = () => {
    return [
        {id: 0, days: 60, text: 'на двигатели '},
        {id: 1, days: 14, text: 'на коробки передач и редукторы'},
        {id: 2, days: 7, text: 'на колесные диски'},
        {id: 3, days: 14, text: 'на прочие запчасти'},
    ]
};

const getJobOfferPanelTitle = () => {
    return 'Вакансии'
};

const getJobOfferItems = () => {
    return [
        {
            id: 0,
            title: 'Кладовщик',
            salary: 'от 700 бел.руб.',
            functions: [
                'Приемка/отгрузка товара на склад/со склада.',
                'Размещение товара по адресам хранения.',
                'Сборка (комплектация) товара по заявкам.'
            ]
        },
        {
            id: 1,
            title: 'Продавец автозапчестей',
            salary: 'от 900 бел.руб.',
            functions: [
                'Работа со входящими звонками, прием заказов.',
                'Обслуживание клиентов.',
                'Организация отправок заказов и контроль.',
                'Анализ потребностей клиентов.'
            ]
        },
        {
            id: 2,
            title: 'Специалист по логистике',
            salary: 'от 1400 бел.руб.',
            functions: [
                'Управление перемещением транспорта, ТО.',
                'Мониторинг цен на рынке транспортных услуг.',
                'Взаимодействие с перевозчиками',
                'Работа с рекламациями.',
            ]
        },
        {
            id: 3,
            title: 'Бухгалтер',
            salary: 'от 1000 бел.руб.',
            functions: [
                'Оформление операций по учету товаров.',
                'Установка и контроль розничных цен.',
                'Минимизация налоговых выплат.',
                'Подготовка документации.'
            ]
        },
    ]
};

const getDeliveryPanelTitle = () => {
    return 'Доставка'
};

const getSelfDeliveryOptions = () => {
    return [
        {
            id: 0,
            text: 'МОТОРЦЕНТР, Рынок «Малиновка», Вт-Вс 9:00 - 17:00.'
        },
        {
            id: 1,
            text: 'СКЛАД УРУЧЬЕ, г. Минск, ул. Основателей, 35, Пн-Вс 9:00 - 18:00.'
        },
        {
            id: 2,
            text: 'МАГАЗИН МОТОР, г. Минск, ул. Р.Люксембург, 195, Пн-Пт 9:00 - 18:00, Сб 10:00 - 16:00.'
        },
        {
            id: 3,
            text: 'МАГАЗИН МОТОР, г. Лида, ул. Кирова, пом.3, Пн-Пт 9:00 - 18:00, Сб 10:00 - 16:00.'
        },
        {
            id: 4,
            text: 'МАГАЗИН МОТОР, г. Борисов, ул. 1-го июля, 22, Пн-Пт 9:00 - 18:00, Сб 10:00 - 16:00.'
        }
    ]
};

const getDeliveryOptions = () => {
    return [
        {
            id: 0,
            text: 'Доставку осуществляем в 32 города Беларуси.'
        },
        {
            id: 1,
            text: 'Заказы, поступившие до 12:00 доставим в этот же день, после 12:00 - на следующий день.'
        },
        {
            id: 2,
            text: 'Стоимость доставки по Минску — 10 BYN, по Беларуси — 50 BYN.   При заказе товара на сумму,больше 600 BYN — доставка в любой город БЕСПЛАТНО.\n'
        },
    ]
};

export default App;
