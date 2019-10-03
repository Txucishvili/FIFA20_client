import slick from './libs/slick';
import jquery from 'jquery';
import $ from 'jquery';
import magnificPopup from './libs/magnific';
import Flickity from 'flickity';

const DEVICE_WIDTH = window.innerWidth;

const modalOpenBTN = $('._modalOpen');
const modalCloseBTN = $('.modal-close');
const body = $('body');
const outerLayer = $('.outer-layer');

const doResetOnModal = (parent) => {
  if (parent.length) {
    let firstInitResetItem = $(parent).find('.resetTarget').clone();
    let firstInitResetItemParent = $(parent).find('.resetTarget').parent('.video-frame');
    firstInitResetItemParent.html(firstInitResetItem);
  }
};

$(modalOpenBTN).click((e) => {
  const target = $(e.target).parents('._modalOpen').attr('data-modal') || $(e.target).attr('data-modal');

  if (target && target.length) {
    $(outerLayer).addClass('modalOpen');
    $(body).addClass('modalOpen');
    $(target).addClass('open');
  } else {
    console.log('No Target found');
  }

});

$(modalCloseBTN).on('click', (e) => {
  const parent = $(e.target).parents('.modal-wrap');

  if (parent && parent.length) {
    $(body).removeClass('modalOpen');
    $(outerLayer).removeClass('modalOpen');
    $(parent).removeClass('open');
    doResetOnModal(parent);
  } else {
    console.log('No Target found');
  }

});

const ChangePassDroper = $('.changepass');
const changePassContent = $('.change-password-areal');

$(ChangePassDroper).click((e) => {
  console.log('hit');
  $(ChangePassDroper).toggleClass('active');
  $(changePassContent).stop().slideToggle("slow", function () {
    // Animation complete.
  });
});

const slidertoggleBTN = $('.faq-title');

$(slidertoggleBTN).click((e) => {
  const body = $(e.target).parents('.faq-item').children('.faq-body');
  const isOpen = $(e.target).parents('.faq-list').children('.faq-item.active');
  const target = $(e.target).parents('.faq-item');


  if (body.length) {
    if (isOpen.length) {
      $(isOpen).removeClass('active');
      $(isOpen).children('.faq-body').stop().slideToggle("slow", () => {
      });
    }

    $(target).addClass('active');
    $(body).stop().slideToggle("slow", () => {
    });


  }

  console.log('body target', body);
});

const infoContentToggleTarget = $('.info-content-area .head-title');

$(infoContentToggleTarget).click((e) => {
  console.log('hit');
  let target = $(e.target).parents('.head-title') || $(e).prevObject[0];

  if (!target.length) {
    target = target.prevObject;
  }

  const body = $(target).parents('.info-content-area').children('.contaner-area');

  $(target).toggleClass('active');
  $(body).stop().slideToggle("slow", () => {
  });
});

const mainNavButton = $('._openMainNav');
const mainNavTarget = $('.device-menu-layer');
const mainNavTargetLayout = $('.device-menu-layout');

$(mainNavButton).click((e) => {
  $(mainNavTarget).toggleClass('isShow');
  $(mainNavTargetLayout).toggleClass('isShow');
  $(mainNavButton).parents('.device-menu-button').toggleClass('isOpen');
  console.log('hit', $(mainNavButton).parents('.device-menu-button'));
});


if (body.length) {
  $(window).scroll(function () {
    const aTop = 30;
    const headerTarget = $('.header.header--position');

    if ($(this).scrollTop() >= aTop) {
      $(headerTarget).addClass('scrolled');
    } else {
      $(headerTarget).removeClass('scrolled');
    }
  });
}

const initSlick_sliderItem = () => {
  console.log('Slick INIT');
  $('.slick-fifa-gallery').slick({
    dots: false,
    infinite: false,
    arrows: true,
    slidesToShow: 6,
    prevArrow:"<div class='customCardArrow customCardArrow--main customCardArrow--prev'></div>",
    nextArrow:"<div class='customCardArrow  customCardArrow--main customCardArrow--next'></div>",
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },

      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};

const initFlickity_sliderItem = () => {
  console.log('flkty INIT');

  var flkty = new Flickity( '.slick-fifa-gallery', {
    groupCells: 1,
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  });

};

$(document).ready(function () {
  if ($('.slick_gallery').length) {
    $('.slick_gallery').magnificPopup({
      delegate: 'a',
      type: 'image'
    });
  }


  if ($('.slick-fifa-gallery').length) {
    console.log('hit');

    if (DEVICE_WIDTH <= 768 - 1) {
      console.log('hit');
      initFlickity_sliderItem();
    } else {
      initSlick_sliderItem();
    }

  }


});

const importScript = async () => {
  return new Promise(resolve => {
    let s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/5bb724a9b033e9743d026b20/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);

    s1.onload = (e) => {
      console.log('Script loaded');
      resolve(window.Tawk_API);
    };
  })
};

const initTawk = async () => {
  let TawkAPI;

  TawkAPI = await importScript();

  return new Promise(resolve => {
    resolve(window.Tawk_API);
  })
};

$(document).ready(async () => {
  // if (Tawk_API) {
  //   Tawk_API.onLoad = function() {
  //     Tawk_API.hideWidget();
  //   };
  // }
});

const modalChecboxSelector = $('.modal-gallery--item');

$(modalChecboxSelector).click((e) => {
  const target = $(e.target).parents('.modal-gallery--item');
  const inputTarget = $('#' + $(target).attr('data-target-input'));
  const valueData = $(target).attr('data-name');

  if ($(target).hasClass('active')) {
    $(target).removeClass('active');
    $(inputTarget).val('null');

  } else {

    if ($('.modal-gallery--item.active').length) {
      $('.modal-gallery--item.active').removeClass('active');
    }

    $(target).addClass('active');
    $(inputTarget).val(valueData);
  }


});

const initSlick_slider = (classEl) => {
  $(classEl).slick({
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          focusOnSelect: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
};

const initFlickity_slider = (classEl) => {

  var flkty = new Flickity( classEl, {
    groupCells: true,
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  });

};


const initHomeGallery_Slidr = () => {

  if ($('.slick_gallery').length) {
    if (DEVICE_WIDTH <= 768 - 1) {
      initFlickity_slider('.slick_gallery');
    } else {
      initSlick_slider('.slick_gallery');
    }

  }

};

initHomeGallery_Slidr();
