import React from 'react';

import './App.css';

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import BenefitsPanel from "../BenefitsPanel";
import ReviewPanel from "../ReviewsPanel";

import userAvatar1 from "./assets/user-avatar-1.png";
import userAvatar2 from "./assets/user-avatar-2.png";
import userAvatar3 from "./assets/user-avatar-3.png";

const app = {
    name: 'F-AUTO'
};

function App() {
    return (
        <div className="App">
            <Header app={app}/>
            <SearchPanel/>
            <BenefitsPanel/>
            <ReviewPanel
                usersReviews={getUsersReviews()}
            />
        </div>
    );
}

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
