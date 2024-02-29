<template>
    <header class="header">
        <div class="header-top">


            <div class="container d-flex justify-content-between justify-content-xl-end align-items-center">

                <span class="icon icon-menu mobile-menu-btn d-xl-none" @click="openMobileMenu"></span>

                <a href="/" class="logo">
                    <div class="logo-img">
                        <img src="assets/logo.svg" alt="">
                    </div>
                </a>

                <ul class="hasnt-list-style header-top-block text-is-12 d-none d-xl-flex align-items-center pr-24">
                    <li class="ml-24">
                        <a href="#">Визы</a>
                    </li>
                    <li class="ml-24">
                        <a href="#">Страховки</a>
                    </li>
                    <li class="ml-24">
                        <a href="/contacts.html">Контакты</a>
                    </li>
                </ul>

                <ul class="hasnt-list-style header-top-block text-is-12 d-none  d-xl-flex align-items-center pr-24">
                    <li class="ml-24">
                        <a href="mailto:contact@email.ee" class="d-inline-flex align-items-center"><span class="icon icon-mail mr-8 text-is-16"></span>contact@email.ee</a>
                    </li>
                    <li class="ml-24">
                        <a href="tel:3726130633" class="d-inline-flex align-items-center"><span class="icon icon-phone mr-8 text-is-16"></span>+372 6 130 633</a>
                    </li>
                </ul>

                <ul class="hasnt-list-style header-top-block d-flex align-items-center">
                    <li class="ml-24">
                        <a href="/login.html">
                            <span class="icon icon-user profile-btn"></span>
                        </a>
                    </li>
                    <li class="ml-24 d-none d-xl-flex">
                        <a href="#" class="lang-btn">
                            <img src="assets/eesti.svg" alt="" class="lang-btn-icon">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header-desktop-nav">
            <div class="container">
                <nav class="main-nav">
                    <ul class="hasnt-list-style">
                        <li><a href="/search-results.html">Поиск тура</a></li>
                        <li><a href="/directions.html">Направления</a></li>
                        <li class="is-accent">
                            <a href="/campaigns.html">
                                <span class="icon icon-offer"></span>Кампании</a>
                        </li>
                        <li class="is-accent">
                            <a href="/hot-offers.html">
                                <span class="icon icon-fast-time"></span>Горящие предложения</a>
                        </li>
                        <li><a href="/tour-request.html">Запрос тура</a></li>
                        <li><a href="#">Авиабилеты</a></li>
                    </ul>
                </nav>
            </div>
        </div>



        <b-sidebar
                type="is-light"
                fullheight
                :open.sync="mobileMenuIsOpened"
        >
            <div class="mobile-menu is-show">

                <div class="logo-img mb-24">
                    <img src="assets/logo.svg" alt="">
                </div>
                <nav class="main-nav">
                    <ul class="hasnt-list-style">
                        <li><a href="#">Поиск тура</a></li>
                        <li class="mt-16"><a href="#">Направления</a></li>
                        <li class="mt-16"><a href="/campaigns.html">Кампании</a></li>
                        <li class="mt-16"><a href="#">Горящие предложения</a></li>
                        <li class="mt-16"><a href="#">Запрос тура</a></li>
                        <li class="mt-16"><a href="#">Авиабилеты</a></li>
                    </ul>
                </nav>
                <hr class="mt-16 mb-16">
                <nav class="mobile-menu-subnav">
                    <ul class="hasnt-list-style">
                        <li class="text-is-14">
                            <a href="#">Визы</a>
                        </li>
                        <li class="mt-12 text-is-14">
                            <a href="#">Страховки</a>
                        </li>
                        <li class="mt-12 text-is-14">
                            <a href="#">Контакты</a>
                        </li>
                        <li class="mt-12 text-is-14">
                            <a href="#" class="d-inline-flex align-items-center"><span class="icon icon-mail mr-8 text-is-16"></span>contact@email.ee</a>
                        </li>
                        <li class="mt-12 text-is-14">
                            <a href="#" class="d-inline-flex align-items-center"><span class="icon icon-phone mr-8 text-is-16"></span>+372 6 130 633</a>
                        </li>
                    </ul>
                </nav>
                <hr class="mt-16 mb-24">
                <a href="#" class="lang-btn text-is-222 d-flex align-items-center">
                    <img src="assets/eesti.svg" alt="" class="lang-btn-icon mr-12">
                    Eesti
                </a>
            </div>
        </b-sidebar>



    </header>
</template>

<script>
    export default {
        data() {
            return {
                mobileMenuIsOpened: false
            }
        },
        methods: {
            openMobileMenu() {
                this.mobileMenuIsOpened = true
            }
        }
    }
</script>