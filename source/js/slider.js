// Слайдер

var effectSlider = document.querySelector('.action-slider');
var effectSliderItemBefore = effectSlider.querySelector('.action-slider__item--before');
var effectSliderItemAfter = effectSlider.querySelector('.action-slider__item--after');
var effectSliderLabelBefore = effectSlider.querySelector('.action-slider__label--before');
var effectSliderLabelAfter = effectSlider.querySelector('.action-slider__label--after');
var effectSliderButton = effectSlider.querySelector('.action-slider__button');

effectSliderLabelBefore.addEventListener('click', function () {
	effectSliderItemAfter.classList.remove('action-slider__item--active');
	effectSliderItemBefore.classList.add('action-slider__item--active');
	effectSliderButton.classList.remove('action-slider__button--after');
	effectSliderButton.classList.add('action-slider__button--before');
})

effectSliderLabelAfter.addEventListener('click', function () {
	effectSliderItemBefore.classList.remove('action-slider__item--active');
	effectSliderItemAfter.classList.add('action-slider__item--active');
	effectSliderButton.classList.remove('action-slider__button--before');
	effectSliderButton.classList.add('action-slider__button--after');
})