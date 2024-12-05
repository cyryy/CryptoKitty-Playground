function encrypt() {
    const input = document.getElementById("input-text").value;
    const cipher = document.getElementById("cipher").value;
  
    if (!input) {
      alert("Please enter some text!");
      return;
    }
  
    let output = "";
    if (cipher === "base64") {
      output = btoa(input);
    } else if (cipher === "caesar") {
      output = caesarCipher(input, 3);
    } else if (cipher === "rot13") {
      output = rot13(input);
    }
  
    document.getElementById("output-text").value = output;
  }
  
  function decrypt() {
    const input = document.getElementById("input-text").value;
    const cipher = document.getElementById("cipher").value;
  
    if (!input) {
      alert("Please enter some text!");
      return;
    }
  
    let output = "";
    if (cipher === "base64") {
      try {
        output = atob(input);
      } catch {
        alert("Invalid Base64 string.");
        return;
      }
    } else if (cipher === "caesar") {
      output = caesarCipher(input, -3);
    } else if (cipher === "rot13") {
      output = rot13(input);
    }
  
    document.getElementById("output-text").value = output;
  }
  
  function caesarCipher(str, shift) {
    return str
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          const base = char >= "a" ? 97 : 65;
          return String.fromCharCode(((code - base + shift + 26) % 26) + base);
        }
        return char;
      })
      .join("");
  }
  
  function rot13(str) {
    return caesarCipher(str, 13);
  }
  
  function clearText() {
    document.getElementById("input-text").value = "";
    document.getElementById("output-text").value = "";
  }

function generateHearts() {
    const heartContainer = document.getElementById("falling-hearts");
  
    for (let i = 0; i < 20; i++) { 
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDelay = Math.random() * 5 + "s";
      heart.style.opacity = Math.random() * 0.8 + 0.2; 
      heart.style.width = heart.style.height = Math.random() * 8 + 8 + "px"; 
      heartContainer.appendChild(heart);
    }
  }
  
  window.onload = generateHearts;
  
  