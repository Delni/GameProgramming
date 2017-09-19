// This file is the main handler of the web page. It is a utility files

Object.prototype.toggleClass = function (className) {
  if(this.hasClass(className)){
    this.removeClass(className);
  } else {
    this.addClass(className);
  }
};

//Bulma
$('.dropdown:not(.is-hoverable)').on('click', (event) => {
  let target = $(event.target).parent().parent();
  target.toggleClass("is-active");
})

$('.navbar-link').on('click', (event) => {
  let target = $(event.target).parent().parent();
  target.toggleClass("is-active");
})

$('.navbar-burger').on('click', (event) => {
  let target = $(event.target);
  target.toggleClass("is-active");
})
