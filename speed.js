var choice_d, choice_t, d1, d2, d_type, f_d1, f_d2, f_t1, f_t2, f_v1, f_v2, t1, t2, t_type, v1, v2, v_type, x, y;

document.write("If no pop-ups are shown, please reload the page and stay on it. <br><br>")

d1 = window.prompt("Enter d1  :");
d2 = window.prompt("Enter d2  :");
d_type = window.prompt("Enter d type (km/m)(compulsory) :");
t1 = window.prompt("Enter t1  :");
t2 = window.prompt("Enter t2  :");
t_type = window.prompt("Enter t type (s/hrs)(compulsory) :");
v1 = window.prompt("Enter v1  :");
v2 = window.prompt("Enter v2  :");
v_type = window.prompt("Enter v type (kmph/mps)(compulsory) :");

if (v_type === "kmph" && (d_type === "km" || t_type === "hrs")) {
  if (d1.length == 0 && d2.length == 0 && t1.length != 0 && t2.length != 0) {
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = f_t1 * f_v1;
    document.write("d1 = t1*v1 and d2 = t2*v2      <br>");
    f_d2 = f_t2 * f_v2;
    document.write("d1 :", f_d1, "km      <br>");
    document.write("d2 :", f_d2, "km      <br>");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (1000 / 3600);
  }

  if (t1.length == 0 && t2.length == 0 && d2.length != 0 && d1.length != 0) {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = f_d1 / f_v1;
    document.write("t1 = d1/v1 and t2 = d2/v2      <br>");
    f_t2 = f_d2 / f_v2;
    document.write("t1 is : ", f_t1, "hrs     <br>");
    document.write("t2 is : ", f_t2, "hrs     <br>");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (1000 / 3600);
  }

  if (v1.length == 0 && v2.length == 0) {
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (1000 / 3600);
  }

  if (t1.length == 0 && t2.length == 0 && d1.length == 0 && d2.length == 0) {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    choice_t = window.prompt("Is t1 = t2 [Y/N/y/n]");

    if (choice_t === "n" || choice_t === "N") {
      choice_d = window.prompt("Is d1 = d2 [Y/N/y/n]");

      if (choice_d === "Y" || choice_d === "y") {
        x = 2 / (1 / f_v1 + 1 / f_v2);
        y = x * 1000 / 3600;
      }
    }

    if (choice_t === "Y" || choice_t === "y") {
      x = (f_v1 + f_v2) / 2;
      y = x * (1000 / 3600);
    }
  }

  document.write("Average speed (in km/h) is : ", x, "km/h      <br>");
  document.write("      Average speed (in m/s) is : ", y, "m/s      <br>");
}

if (v_type === "mps" && d_type === "m" || v_type === "mps" && t_type === "s") {
  if (d1.length == 0 && d2.length == 0 && t1.length != 0 && t2.length != 0) {
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = f_t1 * f_v1;
    document.write("d1 = t1*v1 and d2 = t2*v2      <br>");
    f_d2 = f_t2 * f_v2;
    document.write("d1 :", f_d1, "m      <br>");
    document.write("d2 :", f_d2, "m      <br>");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1.length == 0 && t2.length == 0 && d2.length != 0 && d1.length != 0) {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = f_d1 / f_v1;
    document.write("t1 = d1/v1 and t2 = d2/v2      <br>");
    f_t2 = f_d2 / f_v2;
    document.write("t1 is : ", f_t1, "s      <br>");
    document.write("t2 is : ", f_t2, "s      <br>");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (v1.length == 0 && v2.length == 0) {
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1.length == 0 && t2.length == 0 && d1.length == 0 && d2.length == 0) {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    choice_t = window.prompt("Is t1 = t2 [Y/N/y/n]");

    if (choice_t === "n" || choice_t === "N") {
      choice_d = window.prompt("Is d1 = d2 [Y/N/y/n]");

      if (choice_d === "Y" || choice_d === "y") {
        x = 2 / (1 / f_v1 + 1 / f_v2);
        y = x * 3600 / 1000;
      }
    }

    if (choice_t === "Y" || choice_t === "y") {
      x = (f_v1 + f_v2) / 2;
      y = x * (3600 / 1000);
    }
  }

  document.write("Average speed (in km/h) is : ", y, "km/h      <br>");
  document.write("Average speed (in m/s) is : ", x, "m/s      <br>");
}

if (v_type === "mps" && d_type === "km" || v_type === "mps" && t_type === "hrs") {
  if (d1.length == 0 && d2.length == 0 && t1.length == 0 && t2.length == 0) {
    f_t1 = Number.parseFloat(t1) * 3600;
    f_t2 = Number.parseFloat(t2) * 3600;
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = f_t1 * f_v1;
    document.write("d1 = t1*v1 and d2 = t2*v2      <br>");
    f_d2 = f_t2 * f_v2;
    document.write("d1 :", f_d1, "m      <br>");
    document.write("d2 :", f_d2, "m      <br>");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1.length == 0 && t2.length == 0 && d2.length != 0 && d1.length != 0) {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = Number.parseFloat(d1) * 1000;
    f_d2 = Number.parseFloat(d2) * 1000;
    f_t1 = f_d1 / f_v1;
    document.write("t1 = d1/v1 and t2 = d2/v2      <br>");
    f_t2 = f_d2 / f_v2;
    document.write("t1 is : ", f_t1, "s      <br>");
    document.write("t2 is : ", f_t2, "s      <br>");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (v1.length == 0 && v2.length == 0) {
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1.length == 0 && t2.length == 0 && d1.length == 0 && d2.length == 0) {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    choice_t = window.prompt("Is t1 = t2 [Y/N/y/n]");

    if (choice_t === "n" || choice_t === "N") {
      choice_d = window.prompt("Is d1 = d2 [Y/N/y/n]");

      if (choice_d === "Y" || choice_d === "y") {
        x = 2 / (1 / f_v1 + 1 / f_v2);
        y = x * 3600 / 1000;
      }
    }

    if (choice_t === "Y" || choice_t === "y") {
      x = (f_v1 + f_v2) / 2;
      y = x * (3600 / 1000);
    }
  }

  document.write("Average speed (in km/h) is : ", y, "km/h      <br>");
  document.write("Average speed (in m/s) is : ", x, "m/s      <br>");
}

if (v_type === "kmph" && d_type === "m" || v_type === "kmph" && t_type === "s") {
  if (d1.length == 0 && d2.length == 0 && t1.length != 0 && t2.length != 0) {
    f_t1 = Number.parseFloat(t1) / 3600;
    f_t2 = Number.parseFloat(t2) / 3600;
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = f_t1 * f_v1;
    document.write("d1 = t1*v1 and d2 = t2*v2       <br>");
    f_d2 = f_t2 * f_v2;
    document.write("d1 :", f_d1, "km      <br>");
    document.write("d2 :", f_d2, "km      <br>");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1.length == 0 && t2.length == 0 && d2.length != 0 && d1.length != 0) {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = Number.parseFloat(d1) / 1000;
    f_d2 = Number.parseFloat(d2) / 1000;
    f_t1 = f_d1 / f_v1;
    document.write("t1 = d1/v1 and t2 = d2/v2      <br>");
    f_t2 = f_d2 / f_v2;
    document.write("t1 is : ", f_t1, "hrs      <br>");
    document.write("t2 is : ", f_t2, "hrs      <br>");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (v1.length == 0 && v2.length == 0) {
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1.length == 0 && t2.length == 0 && d1.length == 0 && d2.length == 0) {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    choice_t = window.prompt("Is t1 = t2 [Y/N/y/n]");

    if (choice_t === "n" || choice_t === "N") {
      choice_d = window.prompt("Is d1 = d2 [Y/N/y/n]");

      if (choice_d === "Y" || choice_d === "y") {
        x = 2 / (1 / f_v1 + 1 / f_v2);
        y = x * 1000 / 3600;
      }
    }

    if (choice_t === "Y" || choice_t === "y") {
      x = (f_v1 + f_v2) / 2;
      y = x * (1000 / 3600);
    }
  }

  document.write("Average speed (in km/h) is : ", x, "km/h <br>");
  document.write("      Average speed (in m/s) is : ", y, "m/s <br>");
}
