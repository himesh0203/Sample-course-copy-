const facts = [
  "The first website went live in 1991 by Tim Berners-Lee.",
  "JavaScript was created in just 10 days in 1995.",
  "Next.js uses SSR and static generation for faster load times.",
  "JAMstack combines JavaScript, APIs, and Markup for modern performance.",
];

document.getElementById("btn").addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("fact").textContent = randomFact;
});
