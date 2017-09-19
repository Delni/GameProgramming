// Add JS functions to Bulma Framework. Try to get as close as possible to Bootstrap elements
class Bulma {
  constructor() {
    //Dropdown
    $('.dropdown:not(.is-hoverable)').on('click', (event) => {
      toggleClass("is-active", $(event.target).parent().parent());
    })

    console.log('Bulma JS is added');
  }

  toggleClass(className, obj) {
    if ($(obj).hasClass(className)) {
      $(obj).removeClass(className);
    } else {
      $(obj).addClass(className);
    }
  }
}
