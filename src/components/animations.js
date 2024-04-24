import gsap from "gsap";

// ------------------hero page background animations----------------------
gsap.registerEffect({
    name: "fadeOut",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, opacity: 0.2 }, { duration: config.duration, opacity: 0.5 });
    },
    defaults: { duration: 10 }, 
    extendTimeline: true, 
});
gsap.registerEffect({
    name: "fadeIn",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, opacity: 0.5 }, { duration: config.duration, opacity: 0.2 });
    },
    // defaults: { duration: 10 }, 
    extendTimeline: true, 
});
gsap.registerEffect({
    name: "scaleOut",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, zIndex: 1 ,scale: 1, ease: "linear" }, { duration: config.duration, zIndex: 1 ,scale: 2 });
    },
    // defaults: { duration: 10 }, 
    extendTimeline: true, 
});
gsap.registerEffect({
    name: "scaleIn",
    effect: (targets, config) => {
      return gsap.fromTo(targets, { duration: config.duration, zIndex: 1 ,scale: 2, ease: "linear" }, { duration: config.duration, zIndex: 1 ,scale: 1 });
    },
    // defaults: { duration: 10 }, 
    extendTimeline: true, 
});

window.onload = function () {
    console.log("working")
    // ------------Background Objects------------------
    let t1 = gsap.timeline({repeat: 100});
    let t2 = gsap.timeline({repeat: 100});
    let t3 = gsap.timeline({repeat: 100});
    let t4 = gsap.timeline({repeat: 100});
    let t5 = gsap.timeline({repeat: 100});
    let t6 = gsap.timeline({repeat: 100});
    let t7 = gsap.timeline({repeat: 100});
    let t8 = gsap.timeline({repeat: 100});
    let t9 = gsap.timeline({repeat: 100});
    let t10 = gsap.timeline({repeat: 100});

    t1.scaleOut(".backgroundCircle.circle_1", { duration: 40 });
    t1.scaleIn(".backgroundCircle.circle_1", { duration: 40 });

    t2.scaleIn(".backgroundCircle.circle_2", { duration: 40 });
    t2.scaleOut(".backgroundCircle.circle_2", { duration: 40 });

    t3.scaleOut(".backgroundCircle.circle_3", { duration: 40 });
    t3.scaleIn(".backgroundCircle.circle_3", { duration: 40 });

    t4.scaleIn(".backgroundCircle.circle_4", { duration: 40 });
    t4.scaleOut(".backgroundCircle.circle_4", { duration: 40 });

    t5.scaleOut(".backgroundCircle.circle_5", { duration: 40 });
    t5.scaleIn(".backgroundCircle.circle_5", { duration: 40 });

    t6.scaleIn(".backgroundCircle.circle_7", { duration: 40 });
    t6.scaleOut(".backgroundCircle.circle_7", { duration: 40 });

    t7.scaleOut(".backgroundCircle.circle_8", { duration: 40 });
    t7.scaleIn(".backgroundCircle.circle_8", { duration: 40 });

    t8.scaleIn(".backgroundCircle.circle_9", { duration: 40 });
    t8.scaleOut(".backgroundCircle.circle_9", { duration: 40 });

    t9.scaleOut(".backgroundCircle.circle_10", { duration: 40 });
    t9.scaleIn(".backgroundCircle.circle_10", { duration: 40 });

    t10.scaleOut(".backgroundCircle.circle_6", { duration: 40 });
    t10.scaleIn(".backgroundCircle.circle_6", { duration: 40 });


}