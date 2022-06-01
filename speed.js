var choice_d, choice_t, d1, d2, d_type, f_d1, f_d2, f_t1, f_t2, f_v1, f_v2, t1, t2, t_type, v1, v2, v_type, x, y;
d1 = prompt("Enter d1  :");
d2 = prompt("Enter d2  :");
d_type = prompt("Enter d type (km/m)(compulsory) :");
t1 = prompt("Enter t1  :");
t2 = prompt("Enter t2  :");
t_type = prompt("Enter t type (s/hrs)(compulsory) :");
v1 = prompt("Enter v1  :");
v2 = prompt("Enter v2  :");
v_type = prompt("Enter v type (kmph/mps)(compulsory) :");

if (v_type === "kmph" && (d_type === "km" || t_type === "hrs")) {
  if (d1 === "" && d2 === "" && t1 !== "" && t2 !== "") {
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = f_t1 * f_v1;
    console.log("d1 = t1*v1 and d2 = t2*v2");
    f_d2 = f_t2 * f_v2;
    console.log("d1 :", f_d1, "km");
    console.log("d2 :", f_d2, "km");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (1000 / 3600);
  }

  if (t1 === "" && t2 === "" && d2 !== "" && d1 !== "") {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = f_d1 / f_v1;
    console.log("t1 = d1/v1 and t2 = d2/v2");
    f_t2 = f_d2 / f_v2;
    console.log("t1 is : ", f_t1, "hrs");
    console.log("t2 is : ", f_t2, "hrs");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (1000 / 3600);
  }

  if (v1 === "" && v2 === "") {
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (1000 / 3600);
  }

  if (t1 === "" && t2 === "" && d1 === "" && d2 === "") {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    choice_t = input("Is t1 = t2 [Y/N/y/n]");

    if (choice_t === "n" || choice_t === "N") {
      choice_d = input("Is d1 = d2 [Y/N/y/n]");

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

  console.log("Average speed (in km/h) is : ", x, "km/h");
  console.log("Average speed (in m/s) is : ", y, "m/s");
}

if (v_type === "mps" && d_type === "m" || v_type === "mps" && t_type === "s") {
  if (d1 === "" && d2 === "" && t1 !== "" && t2 !== "") {
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = f_t1 * f_v1;
    console.log("d1 = t1*v1 and d2 = t2*v2");
    f_d2 = f_t2 * f_v2;
    console.log("d1 :", f_d1, "m");
    console.log("d2 :", f_d2, "m");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1 === "" && t2 === "" && d2 !== "" && d1 !== "") {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = f_d1 / f_v1;
    console.log("t1 = d1/v1 and t2 = d2/v2");
    f_t2 = f_d2 / f_v2;
    console.log("t1 is : ", f_t1, "s");
    console.log("t2 is : ", f_t2, "s");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (v1 === "" && v2 === "") {
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1 === "" && t2 === "" && d1 === "" && d2 === "") {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    choice_t = input("Is t1 = t2 [Y/N/y/n]");

    if (choice_t === "n" || choice_t === "N") {
      choice_d = input("Is d1 = d2 [Y/N/y/n]");

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

  console.log("Average speed (in km/h) is : ", y, "km/h");
  console.log("Average speed (in m/s) is : ", x, "m/s");
}

if (v_type === "mps" && d_type === "km" || v_type === "mps" && t_type === "hrs") {
  if (d1 === "" && d2 === "" && t1 !== "" && t2 !== "") {
    f_t1 = Number.parseFloat(t1) * 3600;
    f_t2 = Number.parseFloat(t2) * 3600;
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = f_t1 * f_v1;
    console.log("d1 = t1*v1 and d2 = t2*v2");
    f_d2 = f_t2 * f_v2;
    console.log("d1 :", f_d1, "m");
    console.log("d2 :", f_d2, "m");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1 === "" && t2 === "" && d2 !== "" && d1 !== "") {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = Number.parseFloat(d1) * 1000;
    f_d2 = Number.parseFloat(d2) * 1000;
    f_t1 = f_d1 / f_v1;
    console.log("t1 = d1/v1 and t2 = d2/v2");
    f_t2 = f_d2 / f_v2;
    console.log("t1 is : ", f_t1, "s");
    console.log("t2 is : ", f_t2, "s");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (v1 === "" && v2 === "") {
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1 === "" && t2 === "" && d1 === "" && d2 === "") {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    choice_t = input("Is t1 = t2 [Y/N/y/n]");

    if (choice_t === "n" || choice_t === "N") {
      choice_d = input("Is d1 = d2 [Y/N/y/n]");

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

  console.log("Average speed (in km/h) is : ", y, "km/h");
  console.log("Average speed (in m/s) is : ", x, "m/s");
}

if (v_type === "kmph" && d_type === "m" || v_type === "kmph" && t_type === "s") {
  if (d1 === "" && d2 === "" && t1 !== "" && t2 !== "") {
    f_t1 = Number.parseFloat(t1) / 3600;
    f_t2 = Number.parseFloat(t2) / 3600;
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = f_t1 * f_v1;
    console.log("d1 = t1*v1 and d2 = t2*v2");
    f_d2 = f_t2 * f_v2;
    console.log("d1 :", f_d1, "km");
    console.log("d2 :", f_d2, "km");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1 === "" && t2 === "" && d2 !== "" && d1 !== "") {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    f_d1 = Number.parseFloat(d1) / 1000;
    f_d2 = Number.parseFloat(d2) / 1000;
    f_t1 = f_d1 / f_v1;
    console.log("t1 = d1/v1 and t2 = d2/v2");
    f_t2 = f_d2 / f_v2;
    console.log("t1 is : ", f_t1, "hrs");
    console.log("t2 is : ", f_t2, "hrs");
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (v1 === "" && v2 === "") {
    f_d1 = Number.parseFloat(d1);
    f_d2 = Number.parseFloat(d2);
    f_t1 = Number.parseFloat(t1);
    f_t2 = Number.parseFloat(t2);
    x = (f_d1 + f_d2) / (f_t1 + f_t2);
    y = x * (3600 / 1000);
  }

  if (t1 === "" && t2 === "" && d1 === "" && d2 === "") {
    f_v1 = Number.parseFloat(v1);
    f_v2 = Number.parseFloat(v2);
    choice_t = input("Is t1 = t2 [Y/N/y/n]");

    if (choice_t === "n" || choice_t === "N") {
      choice_d = input("Is d1 = d2 [Y/N/y/n]");

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

  console.log("Average speed (in km/h) is : ", x, "km/h");
  console.log("Average speed (in m/s) is : ", y, "m/s");
}
