const r = Number(prompt("Enter the circle radius:"));

const circle = {
  circum: (2 * 3.14159265359 * r),
  area: (3.14159265359 * (r * r))
};

console.log(`It's circumference is ${circle.circum} and it's area is ${circle.area}.`);