/* modifications based on CSS properties */

function change_css_property(element, property, value, speed, transition_mode) {
  let transition = speed + "s";
  element.style.transition = transition + (transition_mode === undefined ? "" : (" " + transition_mode));
  element.style[property] = value;
  setTimeout(() => (element.style.transition = "0s"), speed * 1000);
}

/* main functions */

function update_submit_size(value, speed) {
  change_css_property(submit_container, "width", value + "px", speed);
  change_css_property(submit_container, "height", value + "px", speed);
  change_css_property(submit_container, "top", ((92 - value) / 2) +  "px", speed);
  change_css_property(submit_container, "right", ((92 - value) / 2) + "px", speed);
}

function hover_makes_submit_bigger() {
  if (text.value !== "") {
    update_submit_size(112, 0.2);
  }
}

function hover_makes_submit_smaller() {
  update_submit_size(92, 0.2);
}

function input_makes_submit_smaller() {
  if (text.value === "") {
    update_submit_size(92, 0.2);
  }
}

function handle_submit_hover() {
  submit_container.addEventListener("mouseover", hover_makes_submit_bigger);
  submit_container.addEventListener("mousemove", hover_makes_submit_bigger);
  submit_container.addEventListener("mouseout", hover_makes_submit_smaller);
  text.addEventListener("input", input_makes_submit_smaller);
}

function reset_hands() {
  for (let i = 0; timeout[i]; i++) {
    clearTimeout(timeout[i]);
  }
  timeout = [];
  hand_container.style.display = "none";
}

function shake_hands() {
  reset_hands();
  hand_container.style.display = "block";
  change_css_property(hand_container, "opacity", "1", 0.2);
  timeout.push(setTimeout(() => (change_css_property(hand_container, "transform", "rotate(-30deg)", 0.2)), 400));
  timeout.push(setTimeout(() => (change_css_property(hand_container, "transform", "rotate(30deg)", 0.2)), 700));
  timeout.push(setTimeout(() => (change_css_property(hand_container, "transform", "rotate(-30deg)", 0.2)), 1000));
  timeout.push(setTimeout(() => (change_css_property(hand_container, "transform", "rotate(30deg)", 0.2)), 1300));
  timeout.push(setTimeout(() => (change_css_property(hand_container, "transform", "rotate(-30deg)", 0.2)), 1600));
  timeout.push(setTimeout(() => (change_css_property(hand_container, "opacity", "0", 0.2)), 2000));
  timeout.push(setTimeout(() => (change_css_property(hand_container, "transform", "rotate(0deg)", 0.2)), 2200));
  timeout.push(setTimeout(() => (hand_container.style.display = "none"), 2400));
}

function get_new_input_changes() {
  change_css_property(fail_text, "opacity", 0, 0.2);
  change_css_property(fail_text, "left", "200px", 0.2);
  setTimeout(function() {
    fail_text.style.display = "none";
    fail_text.style.left = "46px";
  }, 200);
  text.style.paddingLeft = "69px";
  text.focus();
}

function get_new_input() {
  fail_text.addEventListener("click", function() {
    get_new_input_changes();
  });
  text.addEventListener("click", function() {
    get_new_input_changes();
  });
}

function display_error_message() {
  text.placeholder = "";
  fail_text.style.display = "block";
  setTimeout(function() {
    text.value = "";
    change_css_property(fail_text, "opacity", "1", 0.2);
    change_css_property(fail_text, "left", "66px", 0.2);
    get_new_input();
  }, 20);
}

function plane_flies() {
  submit.style.position = "absolute";
  change_css_property(submit, "top", "15px", 0.5);
  change_css_property(submit, "right", "15px", 0.5);
  change_css_property(submit, "width", "0%", 0.5);
  change_css_property(submit, "height", "0%", 0.5);
  change_css_property(submit, "backgroundSize", 0, 0.5);
}

function splash_moves(element, angle, x, y) {
  element.style.transform = "rotate(" + angle + "deg)";
  element.style.opacity = "1";
  setTimeout(function() {
    change_css_property(element, "top", 41 + x + "px", 0.5, "linear");
    change_css_property(element, "left", 41 + y + "px", 0.5, "linear");
    setTimeout(() => (change_css_property(element, "opacity", "0", 0.5)), 15);
  }, 15);
}

function submit_splashes() {
  splash_moves(splashes[0], 0, -150, 0);
  splash_moves(splashes[1], 45, -100, 100);
  splash_moves(splashes[2], 90, 0, 150);
  splash_moves(splashes[3], 135, 100, 100);
  splash_moves(splashes[4], 180, 150, 0);
  splash_moves(splashes[5], 225, 100, -100);
  splash_moves(splashes[6], 270, 0, -150);
  splash_moves(splashes[7], 315, -100, -100);
}

function handle_valid_submit() {
  submit_container.removeEventListener("mousemove", hover_makes_submit_bigger);
  submit_container.removeEventListener("mouseover", hover_makes_submit_bigger);
  submit_container.removeEventListener("mouseout", hover_makes_submit_smaller);
  text.removeEventListener("input", input_makes_submit_smaller);
  text.placeholder = "";
  plane_flies();
  setTimeout(function() {
    update_submit_size(23, 0.15);
  }, 300);
  setTimeout(function() {
    submit_container.style.transition = "0s";
    submit_container.style.backgroundColor = "#4D4";
    setTimeout(() => (update_submit_size(92, 0.4)), 15);
  }, 400);
  setTimeout(function() {
    submit.style.opacity = 0;
    submit.style.backgroundImage = "url(img/ok.png)";
    submit.style.width = "92px";
    submit.style.height = "92px";
    submit.style.backgroundSize = "46px";
    submit.style.top = 0;
    submit.style.left = 0;
    setTimeout(() => (change_css_property(submit, "opacity", "1", 0.5)), 15);
  }, 500);
  setTimeout(function() {
    submit_splashes();
  }, 535);
  setTimeout(function() {
    change_css_property(text_container, "opacity", 0, 0.3);
  }, 600);
  setTimeout(function() {
    change_css_property(text, "width", "375px", 0.3);
    change_css_property(text, "marginLeft", "100px", 0.3);
  }, 700);
  setTimeout(function() {
    update_submit_size(3000, 0.5);

  }, 1200);
  setTimeout(function() {
    change_css_property(submit_container, "opacity", 0, 1);
  }, 1250);
  setTimeout(function() {
    document.body.innerHTML = "<p style='font-family: roboto; font-size: 30px; text-align: center; margin-top: 200px'>J'avoue j'ai la flemme de toute reset. CTRL + R?</p>";
  }, 10000);
}

function plane_disappears() {
  change_css_property(submit, "transform", "rotate(30deg)", 0.2);
  change_css_property(submit, "backgroundPosition", "70% 50%", 0.2);
  change_css_property(submit, "opacity", 0, 0.2);
}

function plane_appears() {
  submit.style.backgroundPosition = "0% 0%";
  setTimeout(function() {
    change_css_property(submit, "transform", "rotate(0deg)", 0.5);
    change_css_property(submit, "backgroundPosition", "50% 50%", 0.5);
    change_css_property(submit, "opacity", 1, 0.5);
  }, 15);
}

function handle_invalid_submit() {
  text.value = "";
  shake_hands();
  display_error_message();
  plane_disappears();
  setTimeout(() => (plane_appears()), 200);
}

function handle_submit() {
  let value = text.value;
  if (value === "a") {
    handle_valid_submit();
  } else {
    handle_invalid_submit();
  }
}

function set_stage_1() {
  state.stage = 1;
  change_css_property(submit_container, "width", "92px", 0.2);
  change_css_property(submit, "opacity", "0", 0.2);
  setTimeout(function() {
    submit.value = "";
    submit.style.backgroundImage = "url(img/send.png)";
    submit.style.backgroundPosition = "50%";
    setTimeout(() => (change_css_property(submit, "opacity", "1", 0.2)), 15);
  }, 400);
  setTimeout(() => (handle_submit_hover()), 150);
  setTimeout(() => (change_css_property(text, "opacity", "1", 0.3)), 300);
  setTimeout(() => (change_css_property(text, "paddingLeft", "46px", 0.3)), 300);
  form.addEventListener("submit", () => (handle_submit()));
}
