export default class SearchPanelService {

    fetchSearchPanelFormItems = () => {
        return [
            {
                id: 'brand', label: 'Марка авто', options: this.getBrands()
            },
            {
                id: 'type', label: 'Тип кузова', options: this.getCarTypes()
            },
            {
                id: 'year', label: 'Год выпуска', options: this.getYears(1990)
            },
            {
                id: 'detail', label: 'Запчасть', options: this.getDetailTypes()
            },
        ];
    };

    getDetailTypes = () => {
        return [
            {id: 0, label: 'Двигатель', value: 'Двигатель'},
            {id: 1, label: 'Оптика и свет', value: 'Оптика и свет'},
            {id: 2, label: 'Системы охлаждения', value: 'Системы охлаждения'},
            {id: 3, label: 'Подвеска', value: 'Подвеска'},
            {id: 4, label: 'Топливная система', value: 'Топливная система'},
        ]
    };

    getYears = (yearFrom = 1980) => {
        const currentYear = new Date().getFullYear();

        const years = [];

        let j = 0;

        for (let i = yearFrom; i < currentYear; i++) {
            years.push({id: j++, label: i, value: i})
        }

        return years
    };

    getCarTypes = () => {
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

    getBrands = () => {
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

    getSearchPanelTitle = () => {
        return 'Быстрый поиск детали'
    };
}