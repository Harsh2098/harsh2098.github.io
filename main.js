$(document).ready(function () {
    const progressBars = document.getElementsByClassName("progress-bar");
    setInterval(() => {
        console.log(progressBars.size)
        for(var i=0 ; i<progressBars.length ; ++i) {
            const computedStyle = getComputedStyle(progressBars[i]);
            const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
            progressBars[i].style.setProperty("--width", width + 0.2);
        }
    }, 5);

    AOS.init({
        easing: "ease",
        duration: 1800,
        once: true,
    });
});
