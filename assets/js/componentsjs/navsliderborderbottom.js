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
      // Navigation Sliding Background Animation

// Navigation Sliding Background Animation
let   mainNav_3 = document.getElementById('main_nav_slider_background_2'),
      navLinks_3 = mainNav_3.querySelectorAll('.link');

      // console.log(navLinks_3)
      for( let index = 0; index < navLinks_3.length; index++ ) {
            const link3 = navLinks_3[index];
            link3.addEventListener('mouseenter', slideInToTop);
            link3.addEventListener('mouseout', slideOutToTop);
      }

      function slideInToTop() {
            var span_el = this.children[0];
            span_el.style.animation = 'slideInToTop .3s forwards';
      }      
      function slideOutToTop() {
            var span_el = this.children[0];
            span_el.style.animation = 'slideOutToTop .3s forwards';
      }
      // Navigation Sliding Background Animation 3

// Navigation Sliding Background Animation 4
let mainNav_4 = document.getElementById('main_nav_slider_background_3'),
      navLinks_4 = mainNav_4.querySelectorAll('.link');

      for (let index = 0; index < navLinks_4.length; index++) {
            const link4 = navLinks_4[index];
            link4.addEventListener('mouseenter', slideInToBottom);
            link4.addEventListener('mouseout', slideOutToBottom);
      }

      function slideInToBottom() {
            var span_el = this.children[0];
            span_el.style.animation = 'slideInToBottom .3s forwards';
      }
      function slideOutToBottom() {
            var span_el = this.children[0];
            span_el.style.animation = 'slideOutToBottom .3s forwards';
      }
      // Navigation Sliding Background Animation 4