import slick from './libs/slick';
import jquery from 'jquery';
import $ from 'jquery';
import magnificPopup from './libs/magnific';

$('.slick_gallery').slick({
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
    const aTop = 80;
    const headerTarget = $('.header.header--position');

    if ($(this).scrollTop() >= aTop) {
      $(headerTarget).addClass('scrolled');
    } else {
      $(headerTarget).removeClass('scrolled');
    }
  });

}

$(document).ready(function() {
  if ($('.gallery-slider').length) {
    $('.gallery-slider').magnificPopup({
      delegate: 'a',
      type: 'image'
    });
  }
});


