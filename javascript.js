// Create a GSAP timeline
let t1 = gsap.timeline();

new TypeIt("#typedeffect", {
  strings: [
    `<span class="first_muted">01</span> <span class="muted"> < </span> Hi I'm <span class="typed_name">Deepak </span> <span class="first_muted">/></span>`,
    `<span class="first_muted">02</span> <span class="muted"> < </span> I'm <span class="typed_name">Full-Stack Developer </span><span class="first_muted">/></span>`,
    `<span class="first_muted">03</span> <span class="muted"> < </span> Let's work <span class="typed_name"> Together </span> <span class="first_muted">/></span>`,
  ],
  speed: 30,
  waitUntilVisible: true,
}).go();

const timeline = gsap.timeline();

timeline
  .from(".step:nth-child(2)", {
    y: "-5%",
    duration: 3,
    repeat: -1,
    ease: "ease-in",
    typeIt: new TypeIt(".deep_answer", {
      strings: [
        "I'm a full-stack developer with expertise in MERN and PHP technologies.",
      ],
      speed: 30,
      waitUntilVisible: true,
    }).go(),
  })
  .from(".step:nth-child(4)", {
    y: "-5%",
    duration: 3,
    repeat: -1,
    ease: "ease-in",
    typeIt: new TypeIt(".exp", {
      strings: [""], // Replace with actual strings
      speed: 30,
      waitUntilVisible: true,
    }).go(),
  })
  .from(".step:nth-child(6)", {
    y: "-5%",
    duration: 3,
    repeat: -1,
    ease: "ease-in",
    typeIt: new TypeIt(".exp_2", {
      strings: [""], // Replace with actual strings
      speed: 30,
      waitUntilVisible: true,
    }).go(),
  });

const first_section = document.querySelector(".first_section");
console.log(first_section);
const fa_brand = document.querySelectorAll(".fa-brands");
console.log(fa_brand);

first_section.addEventListener("mouseover", () => {
  fa_brand.forEach((item) => {
    item.style.transform = "translateY(-3%) rotate(3deg)";
  });
});

first_section.addEventListener("mouseout", () => {
  fa_brand.forEach((item) => {
    item.style.transform = "rotate(0deg)";
  });
});
