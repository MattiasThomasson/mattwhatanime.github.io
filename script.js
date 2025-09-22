
const animeList = [
  { name: "Another", cover: "https://m.media-amazon.com/images/S/pv-target-images/ad1dfd5ca4566b344fe5cfd780ad195b8471a7b6bbd648dfc20f713933b3db9e.jpg" },
  { name: "Blue Exorcist", cover: "https://m.media-amazon.com/images/M/MV5BNWE2MmQxMmEtMzZjMi00NjcyLThlMjYtMmQ4ODc5ZTQxODE3XkEyXkFqcGc@._V1_.jpg" },
  { name: "Bikini Warriors", cover: "https://m.media-amazon.com/images/M/MV5BNGU3YWM0MzEtNDJmYy00OTQzLWE4ZTQtZmNlZWE2NDEyYzRlXkEyXkFqcGc@._V1_.jpg" },
  { name: "Bleach", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bleachanime.png/250px-Bleachanime.png" },
  { name: "Charlotte", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Charlotte_key.jpg/250px-Charlotte_key.jpg" },
  { name: "Clannad", cover: "https://m.media-amazon.com/images/M/MV5BMWJiNDQzNGEtNTA3Zi00NjM2LWE2NTAtOTU0NzA4ZmJiMjhmXkEyXkFqcGc@._V1_.jpg" },
  { name: "Dandadan S2", cover: "https://i.pinimg.com/736x/ea/53/fb/ea53fb1080f8b1c1f3c7a49190ca34d1.jpg" },
  { name: "Darling in the Franxx", cover: "https://m.media-amazon.com/images/M/MV5BYWNlYzk1NGQtNTZkNi00YzJiLWJkMWUtZTYzNjI3YTc5ZDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { name: "Elfen Lied", cover: "https://m.media-amazon.com/images/S/pv-target-images/f6f1f7de36eea39f7a1757331df1b7f79f5874c11e6cca3e9aa066efdfe0aed1.jpg" },
    { name: "Gintama", cover: "https://m.media-amazon.com/images/M/MV5BNTMzNjE0N2ItNjFiYi00NmIzLTk1MzMtZWFjNThjMzI5MTJlXkEyXkFqcGc@._V1_.jpg" },
    { name: "Grand Blue", cover: "https://m.media-amazon.com/images/M/MV5BNjczYjZkYzEtOTdhMS00MDBhLWI0NGQtNmY2OWQwNTBiMjJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { name: "Hundred", cover: "https://m.media-amazon.com/images/M/MV5BZThlOTc4ZDItMDY0Yi00NDk2LTkxN2YtODdiMjFlMTljYTNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { name: "Highschool of the Dead", cover: "https://m.media-amazon.com/images/M/MV5BYjcyNTUwYmQtZjFmZC00YTZmLWJkYzEtMGU4NTlkMjVjZTA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { name: "Highschool DxD", cover: "https://m.media-amazon.com/images/M/MV5BODVhMWE1NjctYjcwMC00MzQwLWI5YzItMTcyMTNiNmE5MTFjXkEyXkFqcGc@._V1_.jpg" },
    { name: "Yuuna and the Haunted Hot Springs", cover: "https://m.media-amazon.com/images/I/81dk8i5-vML._UF894,1000_QL80_.jpg" },
  { name: "My Hero Academia: Vigilantes", cover: "https://m.media-amazon.com/images/M/MV5BOTQzMzIwOGQtMmMzYi00ZjllLWE3OTEtZjIyOGY4ZDBmNmUxXkEyXkFqcGc@._V1_.jpg" },
  { name: "Takopi's Original Sin", cover: "https://m.media-amazon.com/images/M/MV5BYmRkN2I1OGEtOWM3Yi00NjViLWJjMDktYTNmZTMxYjBiNTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { name: "86", cover: "https://m.media-amazon.com/images/M/MV5BOWNmY2IzOGItMmQyNy00ZTM0LThiNjItODM3YzdkYjRlNWU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { name: "Neon genesis evangelion", cover: "https://upload.wikimedia.org/wikipedia/en/4/4f/Characters_of_Evangelion.jpg" },
  { name: "My dress up season 2", cover: "https://m.media-amazon.com/images/M/MV5BYmJhYjgzYTQtMzMxYi00NTkyLWI2MWItNTgxNjk1NzU0YmQzXkEyXkFqcGc@._V1_.jpg" },
  { name: "shaman king", cover: "https://m.media-amazon.com/images/M/MV5BNWM5MGZmZDMtNTcxYi00Njg3LThmMTctYzMzYzdlZTM3MzdmXkEyXkFqcGc@._V1_.jpg" },  
  { name: "Bunny girl senpai", cover: "https://m.media-amazon.com/images/S/pv-target-images/7692f2667f4b9d7b37d10adf191c722aa76f3be0d68cd3789b68b5fb3ddab672._SX1080_FMjpg_.jpg" },
  { name: "Seiren", cover: "https://i.pinimg.com/originals/af/9c/32/af9c32dafe4d4bec58fc60963539cb06.jpg" },
  { name: "Rezero", cover: "https://m.media-amazon.com/images/M/MV5BOTIyNGIzY2EtYjMyZS00Y2M0LWE4MTktNmQ3Y2IwZTBhNWE2XkEyXkFqcGc@._V1_.jpg" },
  { name: "Paprika", cover: "https://m.media-amazon.com/images/M/MV5BZGJkYjkyMDUtM2U3ZC00NDM3LWI0MzItZjU5MmYwYjg2YmIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
];                



document.getElementById("pickBtn").addEventListener("click", () => {
    const randomAnime = animeList[Math.floor(Math.random() * animeList.length)];

    // Update anime name
    const animeName = document.getElementById("animeName");
    animeName.textContent = randomAnime.name;
  animeName.style.color = "#ffffffff"; // Highlight color
    // Update anime cover
    const animeCover = document.getElementById("animeCover");
    animeCover.src = randomAnime.cover;
  animeCover.style.display = "flex"; // Show the image
  
  // Fade-in effect for anime name
  animeName.style.opacity = 1; // Start from invisible
     animeName.style.position = "relative"; // Set position to relative
  animeName.style.fontSize = "50px"; // Smooth transition
});
