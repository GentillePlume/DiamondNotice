console.log("%c🎇💎📜 DiamondNotice launched successfully", "color: white; background-color: black; padding: 10px; font-family: Montserrat");

// ##################################################
//                      ENGINE
// ##################################################

function notice(icons_path, icon) {
  var DN__overlay = document.createElement("div");
  DN__overlay.setAttribute("class", "DN__overlay");
  $("body")[0].appendChild(DN__overlay);

  var DN__notice = document.createElement("div");
  DN__notice.setAttribute("class", "DN__notice");
  DN__overlay.appendChild(DN__notice);

  var DN__notice_icon = document.createElement("div");
  DN__notice_icon.setAttribute("class", "DN__notice_icon");
  DN__notice.appendChild(DN__notice_icon);

  var DN__notice_icon_img = document.createElement("embed");
  DN__notice_icon_img.setAttribute("class", "DN__notice_icon_img");
  DN__notice_icon_img.setAttribute("src", icons_path + icon);
  DN__notice_icon.appendChild(DN__notice_icon_img);

  var DN__notice_message = document.createElement("div");
  DN__notice_message.setAttribute("class", "DN__notice_message");
  DN__notice.appendChild(DN__notice_message);

  var DN__notice_message_p = document.createElement("p");
  DN__notice_message_p.setAttribute("class", "DN__notice_message_p");
  DN__notice_message.appendChild(DN__notice_message_p);

  DN__notice_message_p.innerHTML = "Hi dude ! Just for tell you that the website is still in development !";

  var DN__notice_button = document.createElement("div");
  DN__notice_button.setAttribute("class", "DN__notice_button");
  DN__notice_button.setAttribute("onclick", "notice_off()");
  DN__notice.appendChild(DN__notice_button);

  var DN__notice_button_p = document.createElement("p");
  DN__notice_button_p.setAttribute("class", "DN__notice_button_p");
  DN__notice_button.appendChild(DN__notice_button_p);

  DN__notice_button_p.innerHTML = "J'adore le concept !";
}

function notice_off() {
  $(".DN__overlay")[0].style.display = "none";
}