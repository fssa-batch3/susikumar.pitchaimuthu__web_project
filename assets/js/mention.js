let n = 10;

for (let i = 0; i <= n; i++) {
  let whole_div = document.createElement("div");
  whole_div.setAttribute("class", "mention-box-div");

  let mention_box_insie = document.createElement("div");
  mention_box_insie.setAttribute("class", "mention-box-inside-div");
  whole_div.append(mention_box_insie);

  let image_name_div = document.createElement("div");
  image_name_div.setAttribute("class", "image-and-name-div");
  mention_box_insie.append(image_name_div);

  let pro_image_div = document.createElement("div");
  pro_image_div.setAttribute("class", "pro-image-div");
  image_name_div.append(pro_image_div);

  let pro_image = document.createElement("img");
  pro_image.setAttribute("class", "mention-profile-image");
  pro_image_div.append(pro_image);

  let name_content_div = document.createElement("div");
  name_content_div.setAttribute("class", "name-content-div");
  image_name_div.append(name_content_div);

  let h3 = document.createElement("h3");
  name_content_div.append(h3);

  let p = document.createElement("p");
  name_content_div.append(p);

  let user_mention_media_div = document.createElement("div");
  user_mention_media_div.setAttribute("class", "user-mention-media-div");
  mention_box_insie.append(user_mention_media_div);

  let image = document.createElement("img");
  image.setAttribute("class", "user-mention-media");
  user_mention_media_div.append(image);

  document.querySelector(".mention-box-inside-container").append(whole_div);
}
