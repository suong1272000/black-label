const street = document.querySelector(".street-culture")
const travel = document.querySelector(".travel")
const fineart = document.querySelector(".fine-art")
const luxury = document.querySelector(".luxury")


let streetAnimation = gsap.timeline();
    streetAnimation.to(".street", {
        x: -100, duration: 0.3,
    },"someLabel");
    streetAnimation.to(".culture", {
        x: 100, duration: 0.3,
    },"someLabel");
    streetAnimation.to(".streetculture-img", {
        duration: 1,
        height: "120px",
    },"someLabel");

let travelAnimation = gsap.timeline();
    travelAnimation.to(".tra", {
        x: -100, duration: 0.3,
    },"someLabel");
    travelAnimation.to(".vel", {
        x: 100, duration: 0.3,
    },"someLabel");
    travelAnimation.to(".travel-img", {
        duration: 0.3,
        height: "120px",
    },"someLabel");

let fineartAnimation = gsap.timeline();
    fineartAnimation.to(".fine", {
        x: -100, duration: 0.3,
    },"someLabel");
    fineartAnimation.to(".art", {
        x: 100, duration: 0.3,
    },"someLabel");
    fineartAnimation.to(".fineart-img", {
        duration: 0.3,
        height: "120px",
    },"someLabel");

let luxuryAnimation = gsap.timeline();
    luxuryAnimation.to(".lux", {
        x: -100, duration: 0.3,
    },"someLabel");
    luxuryAnimation.to(".ury", {
        x: 100, duration: 0.3,
    },"someLabel");
    luxuryAnimation.to(".luxury-img", {
        duration: 0.3,
        height: "120px",
    },"someLabel");

street.addEventListener("mouseenter", () => streetAnimation.play());
street.addEventListener("mouseleave", () => streetAnimation.reverse());

travel.addEventListener("mouseenter", () => travelAnimation.play());
travel.addEventListener("mouseleave", () => travelAnimation.reverse());

fineart.addEventListener("mouseenter", () => fineartAnimation.play());
fineart.addEventListener("mouseleave", () => fineartAnimation.reverse());

luxury.addEventListener("mouseenter", () => luxuryAnimation.play());
luxury.addEventListener("mouseleave", () => luxuryAnimation.reverse());