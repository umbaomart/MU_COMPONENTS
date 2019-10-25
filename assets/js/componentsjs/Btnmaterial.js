// Material Buttons
let btns_material = document.querySelectorAll('.btn_m');

for (let index = 0; index < btns_material.length; index++) {
      const btn = btns_material[index];
      btn.addEventListener('mousedown', function(e) { myFuncBtn_m(e); })
}

// Functions
function myFuncBtn_m(e) {
      e.preventDefault();
      let target_el = e.target;

      let rect = target_el.getBoundingClientRect();

      let ripple_el = target_el.querySelector('.ripple');
      try {
            ripple_el.remove();
      } catch (error) {

      }

      ripple_el = document.createElement('span');
      ripple_el.classList.add('ripple');
      ripple_el.style.height = Math.max(rect.height, rect.width) + 'px';
      ripple_el.style.width = Math.max(rect.width, rect.height) + 'px';

      target_el.appendChild(ripple_el);
      var top = e.pageY - rect.top - ripple_el.offsetHeight / 2 - document.body.scrollTop;
      var left = e.pageX - rect.left - ripple_el.offsetWidth / 2 - document.body.scrollLeft;

      ripple_el.style.top = top + 'px';
      ripple_el.style.left = left + 'px';
      return false;
}