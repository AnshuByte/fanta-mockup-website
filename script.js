var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub:true,
    // markers:true,
}})

tl.to("#fanta",{
    top: "120%",
    left:"5%"
},'orange')
tl.to("#orange-slice",{
    top: "160%",
    left:"25%"
},'orange')
tl.to("#orange",{
    width:"12%",
    top: "170%",
    left:"80%"
},'orange')
tl.to("#leaf1",{
    width:"12%",
    top: "120%",
    left:"85%",
    // rotate:"120deg",
},'orange')
tl.to("#leaf2",{
    width:"12%",
    top: "170%",
    left:"0%",
    
},'orange')
tl.to("#leaf3",{
    width:"12%",
    top: "100%",
    left:"0%",
    rotate:"90deg",
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start: "0% 90%",
    end: " 20% 50%",
    scrub: true,
    // markers: true
}

})
tl2.to("#fanta",{
    width: "30%",
    top:"209%",
    left:"35%"
},'three')
tl2.to("#leaf1",{
    width: "13%",
    top:"270%",
    left:"0%",

},'three')
tl2.to("#leaf2",{
    width: "13%",
    top:"210%",
    left:"85%",
    rotate:"90deg"
},'three')
tl2.to("#orange-slice",{
    width: "20vw",
    top:"209%",
    left:"40%"
},'three')
