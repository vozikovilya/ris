gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const html = document.querySelector('html');
const body = document.querySelector('.body');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const headerBtnOpen = document.querySelector('.header__btn-menu');
const headerBtnOpenFooter = document.querySelector('.header__btn-menu--footer');
const headerDynamic = document.querySelector('.header__dynamic');
const headerBtnOpenDynamic = document.querySelector('.header__dynamic .header__btn-menu');
const headerMenuDynamic = document.querySelector('.header__menu');
const headerBtnCloseDynamic = document.querySelector('.header__menu-close');
const headerBtnDynamic = document.querySelectorAll('.header__menu .header__menu-btn');
const footer = document.querySelector('.wrapper__footer');

// Preloader

// document.addEventListener('DOMContentLoaded', () => {
    
//     // const mediaFiles = document.querySelectorAll('img');
//     // const preloaderPercent = document.querySelector('.preloader__percent span');
//     // const preloaderProgress = document.querySelector('.preloader__progress');
//     // let i = 0;
//     // console.log(mediaFiles.length)

//     // mediaFiles.forEach((file, index) => {
//     //     file.onload = () => {
//     //         i++
            
//     //         preloaderPercent.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1);
//     //         preloaderProgress.style.width = ((i * 100) / mediaFiles.length).toFixed(1);
            
//     //         if(i === mediaFiles.length) {
//     //             console.log('aaaa');
//     //             preloaderPercent.innerHTML = '100%';
//     //             preloaderProgress.style.width = '100%';
//     //         }
//     //     }
//     // });

//     function outNum(num, elem, options) {
//         const { step, time } = options;
      
//         let n = parseInt(elem.innerHTML);
//         let t = Math.round(time / (num / step));
      
//         let interval = setInterval(() => {
//           n = n + step;
//           elem.innerHTML = n;
      
//           if (n >= num) {
//             clearInterval(interval);
//             elem.innerHTML = num;
//           }
//         }, t);
//       }
      
//       const allCounts = document.querySelectorAll("[data-count]");
      
//       allCounts.forEach((count) => {
//         outNum(count.getAttribute("data-count"), count, {
//           step: 3,
//           time: 1500
//         });
//     });

//     const tlPr = gsap.timeline();

//     tlPr.to('#preloader', 1.5, {
//         delay: 2,
//         x: '-100%',
//         opacity: 0,
//         ease: "circ.out",
//     });
//     const title = document.querySelectorAll('.js-anim-title');
//     const titleText = document.querySelectorAll('.js-anim-title-text');
//     const titleTextUp = document.querySelectorAll('.js-anim-title-text-up');

//     title.forEach(function(i) {
//         i.style.backgroundColor = 'transparent';
//         i.style.overflow = 'hidden';
//     })
//     titleText.forEach(function(e) {
//         e.style.transform = 'translateY(-110%)';
//     })
//     titleTextUp.forEach(function(e) {
//         e.style.transform = 'translateY(110%)';
//     })

//     let tl = new TimelineMax()
    
//         .fromTo('#bg', 1, {
//             opacity: 0,
//         }, {
//             delay: 3.5,
//             ease: "circ.out",
//             opacity: 1,
//         }, '<=')

//         .fromTo('#main', .3, {
//             opacity: 0,
//         }, {
//             ease: "circ.out",
//             opacity: 1,
//         }, '<=')

//         .fromTo('.wrapper__footer', .3, {
//             opacity: 0,
//         }, {
//             ease: "circ.out",
//             opacity: 1,
//         }, '<=')

//         .fromTo('header .header__top', 1.5, {
//             y: -100,
//             opacity: 0,
//             ease: "circ.out",
//         }, {
//             delay: 1,
//             y: 0,
//             opacity: 1,
//         }, '<=')
        
//         .to('.js-anim-title-text-up', 1.5, {
//             y: '0%',
//             delay: 0,
//             ease: "circ.out",
//             duration: 1,
//             stagger: 0.2,
//         }, '<=')

//         .to('.js-anim-title-text', 1.5, {
//             y: '0%',
//             delay: 0,
//             ease: "circ.out",
//             duration: 1,
//         }, '<=')

//         .fromTo('.js-anim-opacity', 1.5, {
//             yPercent: 25,
//             opacity: '0',
//         }, {
//             yPercent: 0,
//             ease: "circ.out",
//             opacity: '1',
//         }, '<=')
// });

// Header

const headerHeight = header.offsetHeight;
const footerHeight = footer.offsetHeight;
const documentHeight = body.offsetHeight;

if (window.scrollY > headerHeight - 10 && window.scrollY > documentHeight - footerHeight - 200) {
    headerDynamic.classList.add('active');
}

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance > headerHeight - 10) {
        headerDynamic.classList.add('active');
    } else if (scrollDistance > documentHeight - footerHeight - 300) {
        headerDynamic.classList.remove('active');
    } else {
        headerDynamic.classList.remove('active');
    }
});

headerBtnOpenDynamic.addEventListener('click', () => {
    body.classList.add('no-scroll');
    headerMenuDynamic.classList.add('active');
});

headerBtnOpen.addEventListener('click', () => {
    body.classList.add('no-scroll');
    headerMenuDynamic.classList.add('active');

    if (headerDynamic.className != 'active') {
        headerDynamic.classList.add('active');
    }
});

headerMenuDynamic.addEventListener('click', (e) => {
    if(e.target.id === 'header__menu' || e.target.id === 'header__menu-close') {
        body.classList.remove('no-scroll');
        headerMenuDynamic.classList.remove('active');

        if (window.scrollY < headerHeight - 10) {
            headerMenuDynamic.classList.remove('active');
        }
    }
});

headerBtnDynamic.forEach(item => { 
    item.addEventListener('click', ()=> {
        body.classList.remove('no-scroll');
        headerMenuDynamic.classList.remove('active');
    });
});


headerBtnOpenFooter.addEventListener('click', () => {
    body.classList.add('no-scroll');
    headerMenuDynamic.classList.add('active');

    if (headerDynamic.className != 'active') {
        headerDynamic.classList.add('active');
    }
});

// Section Cases

const sectionCasesBtn = document.querySelector('.section-cases__btn');
const sectionCasesItems = document.querySelectorAll('.section-cases__item');
const sectionCasesBottom = document.querySelector('.section-cases__bottom');

sectionCasesBtn.addEventListener('click', () => {
    if (sectionCasesBtn.classList.contains('active')) {
        if (window.innerWidth > 600) {
            sectionCasesItems.forEach((element, index) => {
                if (index > 8) {
                    element.style.display = 'none';
                    sectionCasesBtn.classList.remove('active');
                    sectionCasesBtn.innerHTML = 'Показать ещё <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13L11 23H13L13 13L23 13V11L13 11V1L11 1V11L1 11V13L11 13Z"/> </svg>';
                }
            })
        } else if (window.innerWidth <= 600) {
            sectionCasesItems.forEach((element, index) => {
                if (index > 3) {
                    element.style.display = 'none';
                    sectionCasesBtn.classList.remove('active');
                    sectionCasesBtn.innerHTML = 'Показать ещё <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 13L11 23H13L13 13L23 13V11L13 11V1L11 1V11L1 11V13L11 13Z"/> </svg>';
                }
            })
        }
    } else {
        sectionCasesItems.forEach(elem => {
            elem.style.display = 'block';
            sectionCasesBtn.classList.add('active');
            sectionCasesBtn.innerHTML = 'Скрыть <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g class="layer"><line fill="none" id="svg_1" stroke-dasharray="null" stroke-linecap="null" stroke-linejoin="null" stroke-width="2" x1="0.5" x2="23.520824" y1="12.40625" y2="12.40625"/></g></svg>';
        })
    }
});

const displayBtn = () => {
    if (sectionCasesItems.length >= 9) {
        sectionCasesBottom.style.display = 'grid';
    } else if (sectionCasesItems.length >= 4 && document.documentElement.clientWidth <= 600) {
        sectionCasesBottom.style.display = 'grid';
    } else {
        sectionCasesBottom.style.display = 'none';
    }
}

displayBtn();

window.addEventListener('resize', () => {
    displayBtn();

    if (window.innerWidth > 600) {
        sectionCasesItems.forEach((element, index) => {
            if (index < 8) {
                element.style.display = 'block';
            }
        })
    } else if (window.innerWidth <= 600) {
        sectionCasesItems.forEach((element, index) => {
            if (index < 3) {
                element.style.display = 'block';
            }
        })
    }
})

// Swipers

const swiperPerson = new Swiper('.section-team__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 48,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
        1199: {
            slidesPerView: 6,
            spaceBetween: 48,
        }
    },

    navigation: {
      nextEl: '.section-team__swiper-btn .section-team__swiper-btn--next',
      prevEl: '.section-team__swiper-btn .section-team__swiper-btn--prev',
    },
});

const swiperPublic = new Swiper('.section-public__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 48,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 32,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 48,
        }
    },

    navigation: {
      nextEl: '.section-public__swiper-btn .section-public__swiper-btn--next',
      prevEl: '.section-public__swiper-btn .section-public__swiper-btn--prev',
    },
});

// Popup section

const sectionCases = document.querySelector('.section-cases');
const sectionCasesPopupEl = document.querySelectorAll('#casesItems .popup__item');

const sectionServices = document.querySelector('.section-services');
const sectionServicesItems = document.querySelectorAll('.section-services__item');
const sectionServicesPopupEl = document.querySelectorAll('#servicesItems .popup__item');

const sectionTeam = document.querySelector('.section-team');
const sectionTeamItems = document.querySelectorAll('.section-team__head .section__person');
const sectionTeamPopupEl = document.querySelectorAll('#teamItems .popup__item');

const sectionCareer = document.querySelector('.section-career');
const sectionCareerItems = document.querySelectorAll('.section-career__item');
const sectionCareerPopupEl = document.querySelectorAll('#careerItems .popup__item');

const privacyPolicy = document.querySelector('.section-contacts');
const privacyPolicyBtn = document.querySelectorAll('.section-contacts__agreement button');
const privacyPolicyPopupEl = document.querySelectorAll('#privacyPolicy .popup__item');

const requestCall = document.querySelector('.header__right');
const requestCallBtn = document.querySelectorAll('button.header__tel');
const requestCallPopupEl = document.querySelectorAll('#requestCall .popup__item');

const popup = document.querySelectorAll('#popup');
const popupItem = document.querySelectorAll('#popup .popup__item');
const popupClose = document.querySelectorAll('.js-close-popup');
//     listItems.forEach(item => { 
//         item.addEventListener('click', ()=> {
//             console.log(item.closest('.section__title'))
//             popupTitle.innerHTML = item.closest('.section__title');
//             body.classList.add('no-scroll');
//             popup.classList.add('active');
//             elem[item.dataset.el - 1].classList.add('active');

//         });
//     });
// }

// openContentSection(sectionCasesItems, sectionCasesPopupEl);

sectionCasesItems.forEach(item => { 
    item.addEventListener('click', ()=> {
        const popup = sectionCases.querySelector('#popup');
        const popupTitle = sectionCases.querySelector('#popup .popup__title');

        popupTitle.innerHTML = 'кейсы';
        body.classList.add('no-scroll');
        popup.classList.add('active');
        sectionCasesPopupEl[item.dataset.el - 1].classList.add('active');
    });
});

sectionServicesItems.forEach(item => { 
    item.addEventListener('click', ()=> {
        const popup = sectionServices.querySelector('#popup');
        const popupTitle = sectionServices.querySelector('#popup .popup__title');

        popupTitle.innerHTML = 'услуги';
        body.classList.add('no-scroll');
        popup.classList.add('active');
        sectionServicesPopupEl[item.dataset.el - 1].classList.add('active');
    });
});

sectionTeamItems.forEach(item => { 
    item.addEventListener('click', ()=> {
        const popup = sectionTeam.querySelector('#popup');
        const popupTitle = sectionTeam.querySelector('#popup .popup__title');

        popupTitle.innerHTML = 'команда';
        body.classList.add('no-scroll');
        popup.classList.add('active');
        sectionTeamPopupEl[item.dataset.el - 1].classList.add('active');
    });
});

sectionCareerItems.forEach(item => { 
    item.addEventListener('click', ()=> {
        const popup = sectionCareer.querySelector('#popup');
        const popupTitle = sectionCareer.querySelector('#popup .popup__title');

        popupTitle.innerHTML = 'вакансии';
        body.classList.add('no-scroll');
        popup.classList.add('active');
        sectionCareerPopupEl[item.dataset.el - 1].classList.add('active');
    });
});

privacyPolicyBtn.forEach(item => { 
    item.addEventListener('click', ()=> {
        const popup = privacyPolicy.querySelector('#popup');
        const popupTitle = privacyPolicy.querySelector('#popup .popup__title');

        popupTitle.innerHTML = 'политика конфиденциальности';
        body.classList.add('no-scroll');
        popup.classList.add('active');
        privacyPolicyPopupEl[item.dataset.el - 1].classList.add('active');
    });
});
requestCallBtn.forEach(item => { 
    item.addEventListener('click', ()=> {
        const popup = body.querySelector('#popup.popup-tel');
        const popupTitle = body.querySelector('#popup.popup-tel .popup__title');

        console.log(item)

        popupTitle.innerHTML = 'контакты';
        body.classList.add('no-scroll');
        popup.classList.add('active');
        requestCallPopupEl[item.dataset.el - 1].classList.add('active');
    });
});

popup.forEach(item => {
    item.addEventListener('click', (e) => {
        if(e.target.id === 'popup' || e.target.id === 'popup__close') {
            body.classList.remove('no-scroll');
            item.classList.remove('active');
            
            popupItem.forEach(e => {
                e.classList.remove('active');
            })
        }
    });
    
    popupClose.forEach(item => {
        item.addEventListener('click', () => {
            body.classList.remove('no-scroll');
            popup.forEach(elem => {
                elem.classList.remove('active');
            })
            
            popupItem.forEach(e => {
                e.classList.remove('active');
            })
        });
    })
})

// Selected

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.selected-box__options');
const hiddenSelect = document.querySelector('.select-type-system')
const optionsList = document.querySelectorAll('.option');
const selectedBlock = document.querySelector('.section-contacts__field-selected');
const selectedForm = document.querySelector('.form__selected');
const selectedDelete = document.querySelector('.form__selected button');
const selectedDeleteChina = document.querySelector('.form__selected button.china');

selected.addEventListener('click', () => {
    selected.classList.toggle('active');
    optionsContainer.classList.toggle('active');
    // selectedForm.classList.toggle('active');
});

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(selectedBlock);
 
	if ( ! withinBoundaries ) {
		selected.classList.remove('active');
        optionsContainer.classList.remove('active');
	}
});

document.addEventListener('keydown', function(e) {
	if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
		selected.classList.remove('active');
        optionsContainer.classList.remove('active');
	}
});

optionsList.forEach( (o) => {
    o.addEventListener('click', () => {
        const optionValue = o.querySelector('label').innerHTML;

        hiddenSelect.value = optionValue;
        selected.innerHTML = optionValue;
        selected.style.color = '#ffffff';
        selected.classList.remove('active');
        optionsContainer.classList.remove('active');
        selectedForm.classList.add('btn-del');
    });
});

selectedDelete.addEventListener('click', () => {
    selectedForm.classList.remove('btn-del');
    hiddenSelect.value = '';
    selected.innerHTML = 'Тема обращения';
    selected.style.color = '#ffffff';
});

// Textarea

let textareas = document.querySelectorAll('textarea'),
    hiddenDiv = document.createElement('div'),
    content = null;

for (let j of textareas) {
  j.classList.add('txtstuff');
}

hiddenDiv.classList.add('txta');

hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';

for(let i of textareas) {
  (function(i) {
    i.addEventListener('input', function() {
      
      i.parentNode.appendChild(hiddenDiv);
      
      i.style.resize = 'none';
      
      i.style.overflow = 'hidden';

      content = i.value;

      
      content = content.replace(/\n/g, '<br>');
      
      hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

      hiddenDiv.style.visibility = 'hidden';
      hiddenDiv.style.display = 'block';
      i.style.height = hiddenDiv.offsetHeight + 16 + 'px';

      hiddenDiv.style.visibility = 'visible';
      hiddenDiv.style.display = 'none';
    });
  })(i);
}

// Изменение в контактах селекта

const servicesItemsBtn = document.querySelectorAll('.popup a');
const selectUpdateWrap = document.querySelector('.section-contacts-field__selected.form__selected');
const selectUpdate = document.querySelector('.selected.section-contacts-field__input.form-input');
const selectDefault = document.querySelector('.select-type-system');

servicesItemsBtn.forEach( (item) => {
    item.addEventListener('click', () => {
        selectUpdate.innerHTML = 'Бриф';
        selectUpdateWrap.classList.add('btn-del');
        hiddenSelect.value = 'Бриф';
    });
})

// Размер формы и успешной отправки

const formContacts  = document.querySelector('#form-contacts');
const sentBlockContacts = document.querySelector('.section-contacts__sent');

const heightChange = () => {
    sentBlockContacts.style.height = formContacts.offsetHeight + 'px';
}

heightChange();

window.addEventListener('resize', () => {
    heightChange();
})

// Валидация формы

const allInput = document.querySelectorAll('input');
const allTextarea = document.querySelectorAll('textarea');

const allInputs = [...allInput, ...allTextarea];

allInputs.forEach((input) => {
    let inputWrap = input.closest('div');

    input.oninput = function() {
        if (inputWrap.classList.contains('invalid')) {
            inputWrap.classList.remove('invalid');
        }
    };
});

const isValidationField = (field) => {
    const isRequeired = field.checkValidity();
    let errorMessage = '';

    if (!isRequeired) {
        return errorMessage = 'Заполните это поле';
    }

    field.setCustomValidity('')

    return errorMessage;
}

const isValidationFileField = (field) => {
    const isRequeired = field.checkValidity();
    let errorMessage = '';

    var fileTypes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png'
    ]
        
    function validFileType(file) {
        if(!file.files.length) {
            return true;
        }

        for(var i = 0; i < fileTypes.length; i++) {
            const fileType = file.files[0].type;
            if(fileType === fileTypes[i]) {
                return true;
            }
        }
        
        return false;
    }

    console.log(isRequeired)
    
    if (!isRequeired) {
        return errorMessage = 'Заполните это поле';
    } else if(!validFileType(field)) {
        return errorMessage = 'Неверный тип файла';
    }

    return errorMessage;
}

const isVladitionEmailField = (field) => {
    let errorMessage = '';
    const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/i;

    const ieEmailValue = emailPattern.test(field.value);
    const isRequeired = field.checkValidity();

    // console.log(!ieEmailValue)

    if (!isRequeired) {
        return errorMessage = 'Заполните это поле';
    } else if(!ieEmailValue) {
        return errorMessage = 'Введите корректный адрес эл. почты';
    }

    return errorMessage;
}

const isValidationNameField = (field) => {
    const isRequeired = field.checkValidity();
    const namePattern = /^[^1-9]+[^0-9]*$/;
    const testNameValue = namePattern.test(field.value);
    let errorMessage = '';

    if (!isRequeired) {
        return errorMessage = 'Заполните это поле';
    } else if (!testNameValue) {
        return errorMessage = 'Некорректный формат данных';
    }

    field.setCustomValidity('')

    return errorMessage;
}

const isValidationPhone = (field) => {
    const isRequeired = field.checkValidity();
    const phonePattern = /^[1-9\+\-\,\(\s)]+[0-9\+\-\,\(\s]*$/;
    let errorMessage = '';

    const testPhoneValue = phonePattern.test(field.value);

    if (!isRequeired) {
        return errorMessage = 'Заполните это поле';
    } else if (!testPhoneValue) {
        return errorMessage = 'Некорректный формат данных';
    }

    return errorMessage;
}

const checkFieldFormValidation = (field) => {
    let isValidateField = true;
    let errorMessage = ''

    if(field.name === 'email') {
        isValidateField = !Boolean(isVladitionEmailField(field));
        errorMessage = isValidateField ? '' : isVladitionEmailField(field);
    } else if(field.name === 'phone') {
        isValidateField = !Boolean(isValidationPhone(field));
        errorMessage = isValidateField ? '' : isValidationPhone(field);
    } else if(field.name === 'name') {
        isValidateField = !Boolean(isValidationNameField(field))
        errorMessage = isValidateField ? '' : isValidationNameField(field);
    } else if(field.name === 'surname') {
        isValidateField = !Boolean(isValidationNameField(field))
        errorMessage = isValidateField ? '' : isValidationNameField(field);
    } else if(field.name === 'name_company') {
        isValidateField = !Boolean(isValidationNameField(field))
        errorMessage = isValidateField ? '' : isValidationNameField(field);
    } else if(field.name === 'typeSystem') {
        isValidateField = !Boolean(isValidationField(field))
        errorMessage = isValidateField ? '' : isValidationField(field);
    } else if(field.name === 'message') {
        isValidateField = !Boolean(isValidationField(field))
        errorMessage = isValidateField ? '' : isValidationField(field);
    } else if(field.name === 'file') {
        isValidateField = !Boolean(isValidationFileField(field))
        errorMessage = isValidateField ? '' : isValidationFileField(field);
    }

    if(!isValidateField) {
        const parent = field.parentNode;

        parent.classList.add('invalid');
        parent.querySelector('.form-error').innerHTML = errorMessage;
    } else {
        const thereisClass = field.parentNode.classList.contains('invalid');

        if(thereisClass) {
            field.parentNode.classList.remove('invalid')
            field.nextSibling.innerHTML = '';
        }
    }

    return isValidateField
}

const serializeForm = (formNode) => {
    return new FormData(formNode);
}

const sendData = (url, data) => {
    return $.ajax({
        url: url,
        type: 'POST',
        data: data,
        contentType: false,
        processData: false,
        error: function (jqXHR, exception) {
            if (jqXHR.status === 404) {
                console.log(jqXHR.status);
            } else if (jqXHR.status === 0) {
                console.log(jqXHR.status);
            }
        },
    });
}

const formContactsWrap  = document.querySelector('.section-contacts');

const formCareerWrap  = document.querySelector('#careerItems');
const formCareer  = document.querySelectorAll('#form-career');

const formRequestCallWrap  = document.querySelector('#requestCall');
const formRequestCall  = document.querySelector('#form-request-call');

const checkValidityForm = (form) => {
    const fieldsForm = Array.from(form.elements);
    let isValidation = true;

    fieldsForm.forEach(field => {

        if(!checkFieldFormValidation(field)) {
            isValidation = false;
        }
    })

    return isValidation;
};

formContacts.addEventListener('submit', (event) => {
    event.preventDefault();

    const confirmation = checkValidityForm(formContacts);

    if(confirmation) {

        const dataForm = serializeForm(formContacts);

        const sentBlock = formContactsWrap.querySelector('.section-contacts__sent');
        const sentBlockTitle = formContactsWrap.querySelector('.section-contacts__sent h3');
        const sentBlockText = formContactsWrap.querySelector('.section-contacts__sent p');
        const sentBlockBtn = formContactsWrap.querySelector('.section-contacts__sent button');
        const sentBlockSvg = formContactsWrap.querySelector('.section-contacts__sent .svg');

        const fullInputs = formContacts.querySelectorAll('input');

        sentBlockBtn.addEventListener('click', () => {
            formContacts.style.display = "grid";
            sentBlock.style.display = "none";
            sentBlockSvg.style.display = "none";
        });

        // Запрос

        const urlRequest = formContacts.getAttribute('action');
        const results = sendData(urlRequest, dataForm)

        results.fail((response) => {
            fullInputs.forEach( (input) => {
                input.classList.toggle('input-autofill');
            });
            formContacts.style.display = "none";
            sentBlock.style.display = "block";
            sentBlockSvg.style.display = 'flex';
            sentBlockSvg.src = '/local/templates/main/img/icons/i-alert.svg';
            sentBlockTitle.innerHTML = "Ошибка";
            sentBlockText.innerHTML = "При отправке письма возникал ошибка. <span>Попробуйте отправить еще раз или перезвоните нам.</span>";
        })
        results.done((response) => {
            sentBlockSvg.style.display = 'flex';
            formContacts.style.display = "none";
            sentBlock.style.display = "block";
            sentBlockTitle.style.display = "block";
            sentBlockText.style.display = "block";
        })
    }

});

formCareer.forEach( (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const confirmation = checkValidityForm(form);
    
        if(confirmation) {
    
            const dataForm = serializeForm(form);

            const sentBlock = form.nextElementSibling;
            
            const sentBlockTitle = sentBlock.querySelector('h3');
            const sentBlockText = sentBlock.querySelector('p');
            const sentBlockBtn = sentBlock.querySelector('button');
            const sentBlockSvg = sentBlock.querySelector('.svg');
    
            // form.style.display = "none";
            // sentBlock.style.display = "block";
            // sentBlockSvg.style.display = "flex";
    
            sentBlockBtn.addEventListener('click', () => {
                form.style.display = "block";
                sentBlock.style.display = "none";
                sentBlockSvg.style.display = "none";
            });
    
            // Запрос
    
            const urlRequest = form.getAttribute('action');
            const results = sendData(urlRequest, dataForm)
    
            results.fail((response) => {
                form.style.display = "none";
                sentBlock.style.display = "block";
                sentBlockSvg.style.display = 'flex';
                sentBlockSvg.src = './img/icons/i-alert.svg';
                sentBlockTitle.innerHTML = "Ошибка";
                sentBlockText.innerHTML = "При отправке письма возникал ошибка. <span>Попробуйте отправить еще раз или перезвоните нам.</span>";
            })
            results.done((response) => {
                form.style.display = "none";
                sentBlockSvg.style.display = 'flex';
                sentBlock.style.display = "block";
                sentBlockTitle.style.display = "block";
                sentBlockText.style.display = "block";
            })
        }
    
    });
});

formRequestCall.addEventListener('submit', (event) => {
    event.preventDefault();

    const confirmation = checkValidityForm(formRequestCall);

    if(confirmation) {
        // console.log('отправил');

        const dataForm = serializeForm(formRequestCall);
        
        const sentBlock = formRequestCallWrap.querySelector('.content__sent');
        const sentBlockTitle = formRequestCallWrap.querySelector('.content__sent h3');
        const sentBlockText = formRequestCallWrap.querySelector('.content__sent p');
        const sentBlockBtn = formRequestCallWrap.querySelector('.content__sent button');
        const sentBlockSvg = formRequestCallWrap.querySelector('.content__sent .svg');

        // formRequestCall.style.display = "none";
        // sentBlock.style.display = "block";
        // sentBlockSvg.style.display = "flex";

        sentBlockBtn.addEventListener('click', () => {
            formRequestCall.style.display = "block";
            sentBlock.style.display = "none";
            sentBlockSvg.style.display = "none";
        });

        // Запрос
        
        const urlRequest = formRequestCall.getAttribute('action');
        const results = sendData(urlRequest, dataForm)

        results.fail((response) => {
            formRequestCall.style.display = "none";
            sentBlock.style.display = "block";
            sentBlockSvg.style.display = 'flex';
            sentBlockSvg.src = './img/icons/i-alert.svg';
            sentBlockTitle.innerHTML = "Ошибка";
            sentBlockText.innerHTML = "При отправке письма возникал ошибка. <span>Попробуйте отправить еще раз или перезвоните нам.</span>";
        })
        results.done((response) => {
            sentBlockSvg.style.display = 'flex';
            formRequestCall.style.display = "none";
            sentBlock.style.display = "block";
            sentBlockTitle.style.display = "block";
            sentBlockText.style.display = "block";
        })
    }
});

// Input File

const inputFile = document.querySelectorAll('.content__form-file input');

inputFile.forEach( (item) => {
    const inputFileWrap = item.closest('.content__form-file');
    const inputFileName = inputFileWrap.querySelector('.content__form-file--name');
    const inputFileInput = inputFileWrap.querySelector('input');


    const inputFileClose = document.createElement('span');
    inputFileClose.classList.add('content__form-file--btn');
    inputFileClose.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.29291 20.2929C1.90239 20.6834 1.90239 21.3166 2.29291 21.7071C2.68343 22.0976 3.3166 22.0976 3.70712 21.7071L12 13.4143L20.2929 21.7072C20.6834 22.0977 21.3166 22.0977 21.7071 21.7072C22.0976 21.3167 22.0976 20.6835 21.7071 20.293L13.4142 12L21.7071 3.70711C22.0976 3.31658 22.0976 2.68342 21.7071 2.29289C21.3166 1.90237 20.6834 1.90237 20.2929 2.29289L12 10.5858L3.70711 2.29297C3.31658 1.90245 2.68342 1.90245 2.29289 2.29297C1.90237 2.6835 1.90237 3.31666 2.29289 3.70719L10.5858 12L2.29291 20.2929Z"></path></svg>';
    
    item.addEventListener("change", () => {
        if (item.files[0] != undefined) {
            inputFileWrap.querySelector('label').classList.add('active');
            inputFileInput.classList.add('active');
            inputFileName.classList.add('active');
            inputFileName.innerHTML = item.files[0].name;
            inputFileName.insertAdjacentElement('afterend', inputFileClose);
        } else {
            inputFileWrap.querySelector('label').classList.remove('active');
            inputFileInput.classList.remove('active');
            inputFileInput.value = '';
            inputFileName.classList.remove('active');
            inputFileName.innerHTML = '';
            inputFileClose.remove();
        };
    });

    if (inputFileClose) {
        inputFileClose.addEventListener('click', () => {
            inputFileWrap.querySelector('label').classList.remove('active');
            inputFileInput.classList.remove('active');
            inputFileInput.value = '';
            inputFileName.classList.remove('active');
            inputFileName.innerHTML = '';
            inputFileClose.remove();
        });
    }
})

// Animations

if (window.scrollY === 0) {
    const title = document.querySelectorAll('.js-anim-title');
    const titleText = document.querySelectorAll('.js-anim-title-text');
    const titleTextUp = document.querySelectorAll('.js-anim-title-text-up');

    title.forEach(function(i) {
        i.style.backgroundColor = 'transparent';
        i.style.overflow = 'hidden';
    })
    titleText.forEach(function(e) {
        e.style.transform = 'translateY(-110%)';
    })
    titleTextUp.forEach(function(e) {
        e.style.transform = 'translateY(110%)';
    })

    let tl = new TimelineMax()
    
        .fromTo('#bg', 1, {
            opacity: 0,
        }, {
            delay: 1,
            ease: "circ.out",
            opacity: 1,
        }, '<=')

        .fromTo('header .header__top', 1.5, {
            y: -100,
            opacity: 0,
            ease: "circ.out",
        }, {
            delay: 1,
            y: 0,
            opacity: 1,
        }, '<=')
        
        .to('.js-anim-title-text-up', 1.5, {
            y: '0%',
            delay: 0,
            ease: "circ.out",
            duration: 1,
            stagger: 0.2,
        }, '<=')

        .to('.js-anim-title-text', 1.5, {
            y: '0%',
            delay: 0,
            ease: "circ.out",
            duration: 1,
        }, '<=')

        .fromTo('.js-anim-opacity', 1.5, {
            yPercent: 25,
            opacity: '0',
        }, {
            yPercent: 0,
            ease: "circ.out",
            opacity: '1',
        }, '<=')
}

if (window.scrollY != 0) {
    let tl = new TimelineMax()
    
        .fromTo('#bg', 1, {
            opacity: 0,
        }, {
            delay: 1,
            ease: "circ.out",
            opacity: 1,
        }, '<=')

        .fromTo('header .header__top', 1.5, {
            y: -100,
            opacity: 0,
            ease: "circ.out",
        }, {
            delay: 1,
            y: 0,
            opacity: 1,
        }, '<=')
        
        .to('.js-anim-title-text-up', 1.5, {
            y: '0%',
            delay: 0,
            ease: "circ.out",
            duration: 1,
            stagger: 0.2,
        }, '<=')

        .to('.js-anim-title-text', 1.5, {
            y: '0%',
            delay: 0,
            ease: "circ.out",
            duration: 1,
        }, '<=')

        .fromTo('.js-anim-opacity', 1.5, {
            yPercent: 25,
            opacity: '0',
        }, {
            yPercent: 0,
            ease: "circ.out",
            opacity: '1',
        }, '<=')
}

const tlCases = gsap.timeline();
const tlCasesB = gsap.timeline();
const tlServices = gsap.timeline();
const tlServicesB = gsap.timeline();
const tlTeam = gsap.timeline();
const tlTeamB = gsap.timeline();
const tlTeamColor = gsap.timeline();
const tlClient = gsap.timeline();
const tlClientB = gsap.timeline();
const tlPublic = gsap.timeline();
const tlPublicB = gsap.timeline();
const tlCareer = gsap.timeline();
const tlCareerB = gsap.timeline();

const animTitleFrom = {
    y: 100,
    opacity: 0,
};
const animTitleTo = {
    y: 0,
    ease: "circ.out",
    opacity: 1,
};
const animTitleBorderFrom = {
    x: '-200%',
};
const animTitleBorderTo = {
    x: 0,
    ease: "circ.out",
};

const animTitleCases = () => {
    const topSection = document.querySelector('.section-cases .section__top');
    topSection.classList.add('active');

    tlCases.fromTo('.section-cases .js-anim-opacity-bottom', 1, animTitleFrom, animTitleTo);
    tlCasesB.fromTo('.section-cases .section__top-border', 1, animTitleBorderFrom, animTitleBorderTo);

    ScrollTrigger.create({
        animation: tlCases,
        trigger: '#section-cases',
        start: 'top bottom',
        end: 'bottom 100px',
    });

    ScrollTrigger.create({
        animation: tlCasesB,
        trigger: '#section-cases',
        start: 'top bottom',
        end: 'bottom 100px',
    });
};
const animTitleServices = () => {
    const topSection = document.querySelector('.section-services .section__top');
    topSection.classList.add('active');

    tlServices.fromTo('.section-services .js-anim-opacity-bottom', animTitleFrom, animTitleTo);
    tlServicesB.fromTo('.section-services .section__top-border', 1, animTitleBorderFrom, animTitleBorderTo);

    ScrollTrigger.create({
        animation: tlServices,
        trigger: '#section-services',
        start: 'top bottom',
        end: 'bottom 100px',
    });

    ScrollTrigger.create({
        animation: tlServicesB,
        trigger: '#section-services',
        start: 'top bottom',
        end: 'bottom 100px',
    });
};
const animTitleTeam = () => {
    const topSection = document.querySelector('.section-team .section__top');
    topSection.classList.add('active');
    
    tlTeam.fromTo('.section-team .js-anim-opacity-bottom', animTitleFrom, animTitleTo);
    tlTeamB.fromTo('.section-team .section__top-border', 1, animTitleBorderFrom, animTitleBorderTo);

    ScrollTrigger.create({
        animation: tlTeam,
        trigger: '#section-team',
        start: 'top bottom',
        end: 'bottom 100px',
    });

    ScrollTrigger.create({
        animation: tlTeamB,
        trigger: '#section-team',
        start: 'top bottom',
        end: 'bottom 100px',
    });
};
const animTitleClient = () => {
    const topSection = document.querySelector('.section-client .section__top');
    topSection.classList.add('active');
    
    tlClient.fromTo('.section-client .js-anim-opacity-bottom', animTitleFrom, animTitleTo);
    tlClientB.fromTo('.section-client .section__top-border', 1, animTitleBorderFrom, animTitleBorderTo);

    ScrollTrigger.create({
        animation: tlClient,
        trigger: '#section-client',
        start: 'top bottom',
        end: 'bottom 100px',
    });

    ScrollTrigger.create({
        animation: tlClientB,
        trigger: '#section-client',
        start: 'top bottom',
        end: 'bottom 100px',
    });
};
const animTitlePublic = () => {
    const topSection = document.querySelector('.section-public .section__top');
    topSection.classList.add('active');
    
    tlPublic.fromTo('.section-public .js-anim-opacity-bottom', animTitleFrom, animTitleTo);
    tlPublicB.fromTo('.section-public .section__top-border', 1, animTitleBorderFrom, animTitleBorderTo);

    ScrollTrigger.create({
        animation: tlPublic,
        trigger: '#section-public',
        start: 'top bottom',
        end: 'bottom 100px',
    });

    ScrollTrigger.create({
        animation: tlPublicB,
        trigger: '#section-public',
        start: 'top bottom',
        end: 'bottom 100px',
    });
};
const animTitleCareer = () => {
    const topSection = document.querySelector('.section-career .section__top');
    topSection.classList.add('active');
    
    tlCareer.fromTo('.section-career .js-anim-opacity-bottom', animTitleFrom, animTitleTo);
    tlCareerB.fromTo('.section-career .section__top-border', 1, animTitleBorderFrom, animTitleBorderTo);

    ScrollTrigger.create({
        animation: tlCareer,
        trigger: '#section-career',
        start: 'top center',
        end: 'bottom 100px',
    });

    ScrollTrigger.create({
        animation: tlCareerB,
        trigger: '#section-career',
        start: 'top center',
        end: 'bottom 100px',
    });
};

const imgTeam = document.querySelector('.section-team__img');

const animImgTeam = () => {
    
    tlTeam.fromTo(imgTeam, 1, {
        opacity: 0,
        y: 150,
    }, {
        delay: .3,
        opacity: 1,
        y: 0,
    });

    ScrollTrigger.create({
        animation: tlTeam,
        trigger: imgTeam,
        start: 'top bottom',
        end: 'bottom 100px',
        toggleActions: 'play reset play reset',
    });

    tlTeamColor.to(imgTeam, 1, {
        delay: 1.3,
        filter: 'grayscale(0)',
    });
    
    ScrollTrigger.create({
        animation: tlTeamColor,
        trigger: imgTeam,
        start: 'top bottom',
        end: 'bottom 100px',
        toggleActions: 'play reset play reset',
    });
};

animImgTeam();

// var imgTeam = document.querySelector('.section-team__img');

// const imgTeamColor = () => {
//     imgTeam.classList.add('color');
// };
// const imgTeamOpacity = () => {
//     imgTeam.style.opacity = "1";
//     imgTeam.style.top = "0";
// };

// var Visible = function (target) {
//   var targetPosition = {
//       top: window.pageYOffset + target.getBoundingClientRect().top,
//       left: window.pageXOffset + target.getBoundingClientRect().left,
//       right: window.pageXOffset + target.getBoundingClientRect().right,
//       bottom: window.pageYOffset + target.getBoundingClientRect().bottom
//     },
//     windowPosition = {
//       top: window.pageYOffset,
//       left: window.pageXOffset,
//       right: window.pageXOffset + document.documentElement.clientWidth,
//       bottom: window.pageYOffset + document.documentElement.clientHeight
//     };

//   if (targetPosition.bottom > windowPosition.top &&
//     targetPosition.top < windowPosition.bottom &&
//     targetPosition.right > windowPosition.left &&
//     targetPosition.left < windowPosition.right) {

//     setTimeout(imgTeamOpacity, 500);
//     setTimeout(imgTeamColor, 3000);
//   } else {
//     console.clear();
//   };
// };

// window.addEventListener('scroll', function() {
//   Visible (imgTeam);
// });

// Visible (imgTeam);

animTitleCases();
animTitleServices();
animTitleTeam();
animTitleClient();
animTitlePublic();
animTitleCareer();

// Header anim

const casesItems = document.querySelectorAll('.section-cases__item');
const publicItems = document.querySelectorAll('.section-public__swiper .swiper-slide');

let showingArrayItems = [...casesItems, ...publicItems];

showingArrayItems.forEach( (element, index) => {
    const delay = `.${1 * index}`;

    let tl = gsap.timeline()
        .fromTo(element, {
            translateY: "10%",
            opacity: 0,
            delay,
        }, {
            translateY: "0",
            duration: 1,
            opacity: 1,
            ease: "circ.out",
            delay,
        },"+=1");
    
    ScrollTrigger.create({
        trigger: element,
        start: "top 110%",
        toggleActions: "play",
        animation: tl
    });
});

const imgPersons = document.querySelectorAll('.person img');

const showingArrayImgItems = [...imgPersons];

showingArrayImgItems.forEach( (element, index) => {
    const delay = `.${2 * index}`;

    let tl = gsap.timeline()
        .fromTo(element, {
            xPercent: -50,
            scale: 0,
            delay,
        }, {
            xPercent: 0,
            scale: 1,
            ease: "circ.out",
            delay,
        },"+=1");
    
    ScrollTrigger.create({
        trigger: element,
        start: "top 150%",
        toggleActions: "play",
        animation: tl
    });
});
