// Navigation Sliding border bottom Animation
let   mainNav1 = document.getElementById('main_nav_slider_border_bottom'),
      navLinks = mainNav1.querySelectorAll('.link');

      for (let index = 0; index < navLinks.length; index++) {
            const link = navLinks[index];
            link.addEventListener('mouseenter', slideInBorder);
            link.addEventListener('mouseout', slideOutBorder);
      }

      function slideInBorder() {
            let   span_el = this.children[0];
            span_el.style.animation = 'slideInToLeft .3s forwards';
      }
      function slideOutBorder() {
            let   span_el = this.children[0];
            span_el.style.animation = 'slideOutToRight .3s forwards';
      } 
      // End Navigation Sliding border bottom Animation

// Navigation Sliding Background Animation
let   mainNav_2 = document.getElementById('main_nav_slider_background'),
      navLinks_2 = mainNav_2.querySelectorAll('.link');

      for( let index = 0; index < navLinks_2.length; index++ ) {
            const link2 = navLinks_2[index];
            link2.addEventListener('mouseenter', slideInBackgroundLeftToRight);
            link2.addEventListener('mouseout', slideOutBackgroundLeftToRight);
      }

      function slideInBackgroundLeftToRight() {
            var span_el = this.children[0];
            span_el.style.animation = 'slideInToLeft .3s forwards';
      }
      function slideOutBackgroundLeftToRight() {
            var span_el = this.children[0];
            span_el.style.animation = 'slideOutToRight .3s forwards';
      }