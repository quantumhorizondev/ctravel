module.exports = {
    pages: {
        'index': {
            entry: 'src/views/index',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Главная страница',
        },
        'campaigns': {
            entry: 'src/views/campaigns',
            template: 'public/index.html',
            filename: 'campaigns.html',
            title: 'Кампании и новости',
        },
        'hotel': {
            entry: 'src/views/hotel',
            template: 'public/index.html',
            filename: 'hotel.html',
            title: 'Отель',
        },
        'hot-offers': {
            entry: 'src/views/hot-offers',
            template: 'public/index.html',
            filename: 'hot-offers.html',
            title: 'Горящие предложения',
        },
        'search-results': {
            entry: 'src/views/search-results',
            template: 'public/index.html',
            filename: 'search-results.html',
            title: 'Результаты поиска',
        },
        'directions': {
            entry: 'src/views/directions',
            template: 'public/index.html',
            filename: 'directions.html',
            title: 'Направления',
        },

        'login': {
            entry: 'src/views/login',
            template: 'public/index.html',
            filename: 'login.html',
            title: 'Регистрация',
        },
        'registration': {
            entry: 'src/views/registration',
            template: 'public/index.html',
            filename: 'registration.html',
            title: 'Регистрация',
        },
        'pass-recovery': {
            entry: 'src/views/pass-recovery',
            template: 'public/index.html',
            filename: 'pass-recovery.html',
            title: 'Восстановление пароля',
        },

        'contacts': {
            entry: 'src/views/contacts',
            template: 'public/index.html',
            filename: 'contacts.html',
            title: 'Регистрация',
        },
        'tour-request': {
            entry: 'src/views/tour-request',
            template: 'public/index.html',
            filename: 'tour-request.html',
            title: 'Запрос тура',
        },

        '404': {
            entry: 'src/views/page-not-found',
            template: 'public/index.html',
            filename: '404.html',
            title: 'Страница не найдена',
        },

        'account': {
            entry: 'src/views/account',
            template: 'public/index.html',
            filename: 'account.html',
            title: 'Страница пользователя',
        },
    },

    publicPath: ''
}