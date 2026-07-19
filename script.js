// ተጠቃሚው ቁልፉን ሲጫን ይህንን መልእክት አሳይ
function showMusicMessage() {
    alert("ሙዚቃ ነፍስ ነው! ጥሩ የሙዚቃ ምርጫ አላችሁ። 🎸✨");
}
// በጃቫስክሪፕት ፋይልህ መጨረሻ ላይ ይህን ጨምር
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});
// 1. የሚያስፈልጉንን የኤችቲኤምኤል ክፍሎች በ ID ማግኘት
const nameInput = document.getElementById('user-name');
const greetBtn = document.getElementById('greet-btn');
const greetingMessage = document.getElementById('greeting-message');

// 2. ቁልፉ ሲጫን የሚሰራውን ተግባር መወሰን
greetBtn.addEventListener('click', function() {
    // ከተጠቃሚው ሳጥን ውስጥ የተጻፈውን ስም ማንበብ
    const userName = nameInput.value;

    // ተጠቃሚው ስም ሳይጽፍ ዝም ብሎ ቁልፉን ከተጫነ ለማረጋገጥ
    if (userName.trim() === "") {
        greetingMessage.textContent = "እባክዎ መጀመሪያ ስምዎን ያስገቡ! ☺️";
        greetingMessage.style.color = "red"; // የስህተት መልእክቱን በቀይ ለማሳየት
    } else {
        // ስም ካለ የተለየውን ሰላምታ ማሳየት
        greetingMessage.textContent = "ሰላም " + userName + "፣ እንኳን ወደ እኔ የሙዚቃ ዓለም በሰላም መጣህ! 🎵";
        greetingMessage.style.color = "#15803d"; // የሰላምታ መልእክቱን በአረንጓዴ ለማሳየት
    }
});

// 1. የሚያስፈልጉንን ክፍሎች በ ID ማግኘት
const myTrack = document.getElementById('my-track');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const playerStatus = document.getElementById('player-status');

// 2. "አጫውት" ቁልፍ ሲጫን የሚሰራው ትዕዛዝ
playBtn.addEventListener('click', function() {
    myTrack.play(); // ሙዚቃውን ያስጀምረዋል
    playerStatus.textContent = "አሁን እየተጫወተ ነው... 🎶";
    playerStatus.style.color = "#00e676"; // ቀለሙን አረንጓዴ ያደርገዋል
});

// 3. "አቁም" ቁልፍ ሲጫን የሚሰራው ትዕዛዝ
pauseBtn.addEventListener('click', function() {
    myTrack.pause(); // ሙዚቃውን ያቆመዋል
    playerStatus.textContent = "ሙዚቃው ቆሟል ⏸️";
    playerStatus.style.color = "#aaa"; // ቀለሙን ወደ ነጫጭ ያደርገዋል
});

