function getAllTwemojiUrls() {
  const emojiRanges = [
    [0x1f601, 0x1f64f], // Emoticons
    [0x1f300, 0x1f5ff], // Miscellaneous Symbols and Pictographs
    [0x1f680, 0x1f6ff], // Transport and Map Symbols
    // Add more ranges as needed
  ];

  const emojiUrls = [];

  emojiRanges.forEach(([start, end]) => {
    for (let unicode = start; unicode <= end; unicode++) {
      const emojiChar = String.fromCodePoint(unicode);
      const emojiUrl = twemoji.parse(emojiChar);
      emojiUrls.push(emojiUrl);
    }
  });

  return emojiUrls;
}

const twemojiUrls = getAllTwemojiUrls();
console.log(twemojiUrls); // Array of Twemoji URLs for all emojis

// Setting the emoji to the emoji file

console.log(twemojiUrls.length);

const emojiContainer = document.querySelector(".emoji-div-container");
for (let i = 0; i < twemojiUrls.length; i++) {
  twemojiUrls.forEach((url) => {
    const img = document.createElement("img");
    img.setAttribute("src", url);
    img.setAttribute("alt", "Emoticon");

    emojiContainer.appendChild(img);
  });
}
