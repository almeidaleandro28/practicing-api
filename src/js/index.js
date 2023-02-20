const $user = document.querySelector('[data-form="name"]');
const $btnSearch = document.querySelector('[data-form="bt"]');




$btnSearch.addEventListener("click", ( event ) => {
  event.preventDefault();

  console.log( $user.value )
});

