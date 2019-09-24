import slick from './libs/slick';
import jquery from 'jquery';
import $ from 'jquery';

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
  $(changePassContent).stop().slideToggle( "slow", function() {
    // Animation complete.
  });
});
