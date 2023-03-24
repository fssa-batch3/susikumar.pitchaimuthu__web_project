let friendReel = [
  {
    user_name: "Susikumar",
    user_reel:
      "https://ca.slack-edge.com/T032648LE-U041S902NTF-f7590b25c46b-512",
    reel_id: 11,
    user_id: 1,
  },
  {
    user_name: "Kamalesh",
    user_reel:
      "https://ca.slack-edge.com/T032648LE-U041V4TE3L3-272932b1eed7-512",
    reel_id: 12,
    user_id: 2,
  },
  {
    user_name: "Ajmal",
    user_reel:
      "https://ca.slack-edge.com/T032648LE-U041V83A4PL-e856d93352f7-512",
    reel_id: 13,
    user_id: 3,
  },
  {
    user_name: "Vanitha",
    user_reel:
      "https://ca.slack-edge.com/T032648LE-U041S8ZAB6H-d63ac810f86c-512",
    reel_id: 14,
    user_id: 4,
  },
  {
    user_name: "Naveena",
    user_reel:
      "https://ca.slack-edge.com/T032648LE-U041V83V1C2-080174fbffce-512",
    reel_id: 15,
    user_id: 5,
  },
  {
    user_name: "Chadru",
    user_reel:
      "https://ca.slack-edge.com/T032648LE-U041V83A2BC-115443b4ac9c-512",
    reel_id: 16,
    user_id: 6,
  },
  {
    user_name: "Vignesh",
    user_reel:
      "https://ca.slack-edge.com/T032648LE-U042JUK03FS-a64259a52873-512",
    reel_id: 17,
    user_id: 7,
  },
  {
    user_name: "Ajai",
    user_reel:
      "https://ca.slack-edge.com/T032648LE-U04291URDLH-f74388fdc584-192",
    reel_id: 18,
    user_id: 8,
  },
  {
    user_name: "JayaPrakash",
    user_reel:
      "https://ca.slack-edge.com/T032648LE-U042JUKD4CQ-32cf205d0162-512",
    reel_id: 19,
    user_id: 9,
  },
];

for (let i = 0; i < friendReel.length; i++) {
  const trendingBirdDiv = document.createElement("div");
  trendingBirdDiv.setAttribute("class", "reel-member-div");

  const trendingBirdDivImage = document.createElement("img");
  trendingBirdDivImage.setAttribute("class", "reel-member-div-image");
  trendingBirdDivImage.setAttribute("src", friendReel[i]["user_reel"]);
  trendingBirdDiv.append(trendingBirdDivImage);

  document.querySelector(".reel-container").append(trendingBirdDiv);
}
