

submit_container.style.width = "475px";

window.onload = function() {
  // initial changes
  change_css_property(form, "marginTop", "290px", 0.5);

  // changes based on user actions
  form.addEventListener("submit", (event) => (event.preventDefault()));
  form.addEventListener("submit", function() {
    if (state.stage === 0) {
      set_stage_1();
    }
  });
}






















// var state             = {
//   form: 0,
//   text: 0,
//   submit: 0,
// };
// var form              = document.querySelector("form");
// var fail              = document.querySelector(".fail");
// var text_container    = document.querySelector(".text_container");
// var text              = document.querySelector(".text");
// var new_placeholder   = document.querySelector(".new_placeholder");
// var submit_container  = document.querySelector(".submit_container");
// var submit            = document.querySelector(".submit");
// var submit_size       = 92;
// var mousex            = 0;
// var mousey            = 0;
//
// submit_container.style.height = "92px";
// submit.style.marginTop = "25px";
//
// function add_opacity(element, speed) {
//   var i = 0;
//   var interval = setInterval(function() {
//     element.style.opacity = 0 + speed * i;
//     i++;
//     if (speed * i > 1) {
//       clearInterval(interval);
//     }
//   });
// }
//
// function lower_opacity(element, speed) {
//   var i = 0;
//   var interval = setInterval(function() {
//     element.style.opacity = 1 - speed * i;
//     i++;
//     if (1 - speed * i < 0) {
//       clearInterval(interval);
//     }
//   });
// }
//
// function size_to_0(element, value, speed) {
//   value -= speed;
//   if (value < 0) {
//     value = 0;
//   }
//   element.style.width = value + "px";
//   element.style.height = value + "px";
//   if (value > 0) {
//     setTimeout(() => (size_to_0(element, value, speed)), 15);
//   }
// }
//
// function size_to_46(element, value, speed) {
//   console.log(value, speed);
//   value -= speed;
//   if (value < 46) {
//     value = 46;
//   }
//   element.style.width = value + "px";
//   element.style.height = value + "px";
//   if (value > 46) {
//     setTimeout(() => (size_to_46(element, value, speed)), 15);
//   }
// }
//
// function size_to_92(element, value, speed) {
//   value += speed;
//   if (value > 92) {
//     value = 92;
//   }
//   element.style.width = value + "px";
//   element.style.height = value + "px";
//   if (value < 92) {
//     setTimeout(() => (size_to_92(element, value, speed)), 15);
//   }
// }
//
// function lower_margin_top(element, start, value, speed) {
//   var new_value = start;
//   var i = 0;
//   var interval = setInterval(function() {
//     element.style.marginTop = start - value * speed * i + "px";
//     new_value = Number(element.style.marginTop.replace("px", ""));
//     i++;
//     if (start - new_value >= value) {
//       clearInterval(interval);
//     }
//   }, 15);
// }
//
// function bigger_margin_top(element, start, value, speed) {
//   var new_value = start;
//   var i = 0;
//   var interval = setInterval(function() {
//     element.style.marginTop = start + value * speed * i + "px";
//     new_value = Number(element.style.marginTop.replace("px", ""));
//     i++;
//     if (new_value - start >= value) {
//       clearInterval(interval);
//     }
//   }, 15);
// }
//
// function bigger_margin_left(element, start, value, speed) {
//   var new_value = start;
//   var i = 0;
//   var interval = setInterval(function() {
//     element.style.marginLeft = start + value * speed * i + "px";
//     new_value = Number(element.style.marginLeft.replace("px", ""));
//     i++;
//     if (new_value - start >= value) {
//       clearInterval(interval);
//     }
//   }, 15);
// }
//
// function bigger_margin_right(element, start, value, speed) {
//   console.log(start, value, speed);
//   var new_value = start;
//   var i = 0;
//   var interval = setInterval(function() {
//     element.style.marginRight = start + value * speed * i + "px";
//     new_value = Number(element.style.marginRight.replace("px", ""));
//     i++;
//     if (new_value - start >= value) {
//       clearInterval(interval);
//     }
//   }, 15);
// }
//
// function lower_margin_right(element, start, value, speed) {
//   var new_value = start;
//   var i = 0;
//   var interval = setInterval(function() {
//     element.style.marginRight = start - value * speed * i + "px";
//     new_value = Number(element.style.marginRight.replace("px", ""));
//     i++;
//     if (start - new_value >= value) {
//       clearInterval(interval);
//     }
//   }, 15);
// }
//
// function bigger_margin_top_left(element, startTop, valueTop, startLeft, valueLeft, speed) {}
//
// function submit_size_updates(value) {
//   var element = submit_container.style;
//   element.width = Number(element.width.replace("px", "")) + value + "px";
//   element.height = Number(element.height.replace("px", "")) + value + "px";
//   submit_size = Number(element.width.replace("px", ""));
//   if (value > 0) {
//     element.top = "-9.5px";
//     element.right = "-9.5px";
//   } else {
//     element.top = "0";
//     element.right = "0";
//   }
// }
//
// function plane_comes_back(i) {
//   submit.style.opacity = 0 + i * 0.05;
//   submit.style.transform = "rotate(" + (20 - i) + "deg)";
//   submit.style.marginTop = 8 + i + "px";
//   submit.style.marginRight = (20 - i) + "px";
//   i++;
//   if (i <= 20) {
//     setTimeout(() => (plane_comes_back(i)), 15);
//   }
// }
//
// function plane_fails(i) {
//   submit.style.transform = "rotate(" + i * 7.5 + "deg)";
//   submit.style.opacity = 1 - i * 0.15;
//   i++;
//   if (i < 10) {
//     setTimeout(() => (plane_fails(i)), 15);
//   } else if (i > 9) {
//     plane_comes_back(0);
//   }
// }
//
// function no_rotates_left(element, start, end, speed) {
//   var interval = setInterval(function() {
//     fail.style.transform = "rotate(" + start + "deg)";
//     start -= speed;
//     if (start <= end) {
//       clearInterval(interval);
//     }
//   }, 15);
// }
//
// function no_rotates_right(element, start, end, speed) {
//   var interval = setInterval(function() {
//     fail.style.transform = "rotate(" + start + "deg)";
//     start += speed;
//     if (start >= end) {
//       clearInterval(interval);
//     }
//   }, 15);
// }
//
// function no_animates(i) {
//   add_opacity(fail, 0.05);
//   setTimeout(() => (lower_opacity(fail, 0.05)), 1500);
//   setTimeout(() => (no_rotates_left(fail, 0, -30, 3)), 200);
//   setTimeout(() => (no_rotates_right(fail, -30, 30, 6)), 400);
//   setTimeout(() => (no_rotates_left(fail, 30, -30, 6)), 600);
//   setTimeout(() => (no_rotates_right(fail, -30, 30, 6)), 800);
//   setTimeout(() => (no_rotates_left(fail, 30, -30, 6)), 1000);
//   setTimeout(() => (fail.style.transform = "rotate(0)"), 2000);
// }
//
// function get_new_placeholder() {
//   setTimeout(function() {
//     new_placeholder.classList.add("new_new_placeholder");
//     add_opacity(new_placeholder, 0.2);
//     bigger_margin_left(new_placeholder, 30, 40, 0.2);
//     text.style.marginLeft = "25px";
//     state.text = 1;
//   }, 200);
// }
//
// function invalidation() {
//   plane_fails(0);
//   no_animates(0);
//   text.placeholder = "";
//   get_new_placeholder();
// }
//
// function green_button_appears() {
//   size_to_92(submit_container, 0, 10);
//   lower_margin_right(submit_container, 46, 46, 0.1);
//   submit_container.style.backgroundColor = "#63E784";
// }
//
// function button_becomes_green() {
//   submit_container.style.transitionDuration = "0s";
//   size_to_46(submit_container, Number(submit_container.style.width.replace("px", "")), 15);
//   bigger_margin_right(submit_container, 0, 23, 1);
//   setTimeout(green_button_appears, 100);
// }
//
// function validation() {
//   size_to_0(submit, 45, 2.5);
//   submit_container.style.margin = "auto";
//   submit_container.style.bottom = "0";
//   setTimeout(() => (button_becomes_green()), 300);
// }
//
// function check_input() {
//   if (text.value !== "a" && text.value !== "") {
//     invalidation();
//   } else if (text.value === "a"){
//     validation();
//   }
//   text.value = "";
// }
//
// function apply_state() {
//   if (state.submit === 0) {
//     state.submit = 1;
//     submit_container.style.width = "92px";
//     submit_container.src = "img/send.png";
//     submit.style.backgroundImage = "url('img/send.png')";
//     submit.style.width = "45px";
//     submit.style.height = "45px";
//     submit.value = "";
//     submit.style.opacity = "0";
//     submit.style.right = "25px";
//     submit.style.marginRight = "0";
//     setTimeout(() => (text_container.style.paddingLeft = "46px"), 250);
//     setTimeout(() => (add_opacity(text, 0.1)), 250);
//     setTimeout(() => (add_opacity(submit, 0.02)), 250);
//     submit_container.hover = false;
//     document.onmousemove = function(event) {
//       mousex = event.pageX;
//       mousey = event.pageY;
//       if (state.submit === 1 &&
//         text.value !== "" &&
//         Math.sqrt(
//           (submit_container.getBoundingClientRect().x + submit_size / 2 - mousex) *
//           (submit_container.getBoundingClientRect().x + submit_size / 2 - mousex) +
//           (submit_container.getBoundingClientRect().y + submit_size / 2 - mousey) *
//           (submit_container.getBoundingClientRect().y + submit_size / 2 - mousey)) < submit_size / 2) {
//           if (submit_container.hover === false) {
//             submit_size_updates(19);
//           }
//           submit_container.hover = true;
//         } else {
//           if (submit_container.hover === true) {
//             submit_size_updates(-19);
//           }
//           submit_container.hover = false;
//         }
//     };
//     submit_container.addEventListener("click", function() {
//       check_input();
//     });
//     submit.addEventListener("click", function() {
//       check_input();
//     });
//   }
// }
//
// new_placeholder.addEventListener("click", function() {
//   text.focus();
//   if (state.text === 1) {
//     bigger_margin_left(new_placeholder, 70, 150, 0.13);
//     lower_opacity(new_placeholder, 0.03);
//     state.text = 2;
//   }
// });
//
// submit.addEventListener("click", function(event) {
//   event.preventDefault();
// });
//
// text_container.addEventListener("click", () => (text.focus()));
//
// submit_container.addEventListener("click", apply_state);
// submit.addEventListener("click", apply_state);
//
// lower_margin_top(form, 300, 10, 0.1);
// setTimeout(function() {
//   lower_margin_top(submit, 38, 10, 0.2);
//   add_opacity(submit, 0.02);
// }, 200);
// add_opacity(form, 0.015);
// setTimeout(function() {
//   text_container.style.transitionDuration = "0.2s";
//   submit_container.style.transitionDuration = "0.2s";
// }, 15);
