const tl = gsap.timeline();

gsap.from("h4", {
    opacity: 0,
    duration: 1,
    delay: 2,
    ease: "power1.out"
})

tl.to(".main .image", {
    width: "100%",
    delay: 1
})

tl.from("h1 span", {
    opacity: 0,          // Pehle invisible
    y: 50,   
    delay: 1,            // Niche se upar move hoga
    duration: 1,       // Har span ke liye 0.5 seconds ka duration
    stagger: 0.3,        // Har span ke beech mein 0.3 seconds ka delay
    ease: "power2.out"   // Animation smooth hoga
  });

  const text = document.querySelector(".reveal-text");
  const splitText = text.textContent.split(" "); // Split text into individual words
  text.innerHTML = ""; // Clear original text

  splitText.forEach(word => {
    const span = document.createElement("span");
    span.textContent = word + " "; // Add space after each word
    text.appendChild(span); // Add each word wrapped in a span
  });

  tl.from(".reveal-text span", {
    opacity: 0,           // Initially invisible
    y: 20,                // Start with a smaller vertical movement
    duration: 1.5,        // Slightly longer duration for smoother reveal
    stagger: 0.1,         // Faster stagger between words for smooth flow
    ease: "power1.out",   // A more subtle easing effect
  });

  tl.from("a", {
    width: 0,
    opacity: 0,
    paddingLeft: 0,
    paddingRight: 0,
  })