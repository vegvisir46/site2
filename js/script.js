"use strict";



window.addEventListener('DOMContentLoaded', () => {

    // let now = new Date();

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');


    // TABS

        function hideTabContent () {
        tabsContent.forEach(item => {
           item.classList.add('hide');
           item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
           item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent (i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }



    hideTabContent ();
    showTabContent ();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        console.log(event);
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent ();
                    showTabContent (i);
                }
            });
        }
    });




    // TIMER

    const deadline = '2022-11-16 20:32:00';

    function getTime() {
        const t =  (Date.parse(deadline) - Date.parse(new Date())),
              years = Math.floor(t/ (1000 * 60 * 60 * 24 * 365)),
              days = Math.floor((t / (1000 * 60 * 60 * 24)) % 365),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'years': years,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }

    }

    function getZero (num) {
        if ((num > 0) && (num < 10)) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock () {
        const timer = document.querySelector('.timer'),
              years = timer.querySelector('#years'),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              update = setInterval(updateTimer, 1000);

        updateTimer();

        function updateTimer () {
            let time = getTime();
            years.innerHTML = getZero(time.years);
            days.innerHTML = getZero(time.days);
            hours.innerHTML = getZero(time.hours);
            minutes.innerHTML = getZero(time.minutes);
            seconds.innerHTML = getZero(time.seconds);

            if (time.total < 1) {
                clearInterval(update);
                years.innerHTML = 'Ы';
                days.innerHTML = 'Ы';
                hours.innerHTML = 'Ы';
                minutes.innerHTML = 'Ы';
                seconds.innerHTML = 'Ы';
            }
        }

    }

    setClock();


    // Modal



    const modal = document.querySelector('.modal'),
          // whiteBtn = document.querySelector('.btn_white'),
          // blackBtn = document.querySelector('.btn_dark'),
          modalTrigger = document.querySelectorAll('[data-modal]'),
          call = document.querySelector('[data-call]'),
          closeBtn = document.querySelector('[data-close]');



    modalTrigger.forEach(item =>  {
        item.addEventListener('click', (event) => {
            modal.classList.add('show', 'fade');
            document.body.style.overflow = 'hidden';
        });
    });

    // whiteBtn.addEventListener('click', (event) => {
    //     modal.classList.add('show', 'fade');
    // });
    //
    // blackBtn.addEventListener('click', (event) => {
    //     modal.classList.add('show', 'fade');
    // });

    function closeModal () {
        modal.classList.remove('show', 'fade');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', (event) => {
        closeModal ();
    });

    modal.addEventListener('click', (e) =>{
        if (e.target === modal) {
            closeModal ();
        }

    });

    call.addEventListener('click', (event) => {
        alert('haha nope');
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal ();
        }
    });






    // const deadline = '2022-11-17 00:00';
    //
    // function getTimeRemaining(endtime) { // вычисление количества единиц времени
    //     const t = Date.parse(endtime) - Date.parse(new Date()),
    //           days = Math.floor(t / (1000 * 60 * 60 * 24)),
    //           hours = Math.floor((t / (1000 * 60 * 60) % 24)),
    //           minutes = Math.floor((t / (1000 * 60)) % 60),
    //           seconds = Math.floor((t / 1000) % 60);
    //     return {
    //         'total': t,
    //         'days': days,
    //         'hours': hours,
    //         'minutes': minutes,
    //         'seconds': seconds
    //     };
    // }
    //
    // function  getZero(num) { // добавление нулей перед числами 1..9
    //     if (num >= 0 && num < 10) {
    //         return `0${num}`;
    //     } else {
    //         return num;
    //     }
    // }
    //
    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector), // получаем адреса
    //           days = timer.querySelector('#days'),
    //           hours = timer.querySelector('#hours'),
    //           minutes = timer.querySelector('#minutes'),
    //           seconds = timer.querySelector('#seconds'),
    //           timeInterval = setInterval(updateClock, 1000); // запуск обновления таймера
    //
    //     updateClock();
    //     function updateClock() {  // обновление таймера
    //         const t = getTimeRemaining(endtime); // массив текущего значения в моменте
    //
    //         days.innerHTML = getZero(t.days); // запись новых значений на страницу
    //         hours.innerHTML = getZero(t.hours);
    //         minutes.innerHTML = getZero(t.minutes);
    //         seconds.innerHTML = getZero(t.seconds);
    //
    //         if (t.total <= 0) {  // остановка таймера
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }
    //
    // setClock('.timer', deadline);















});