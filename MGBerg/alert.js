function getTextWidth(text, font){
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}

fetch('https://raw.githubusercontent.com/5he1n/Alerts/master/MGBerg/'+curTheme+'.json')
    .then(res => res.json())
    .then((animationData) => {
        var txtWidth, txtFont, curMonth;

        animationData.layers[1].t.d.k[0].s.t = '{name}';
          
        curMonth = '{amount}';
        $("#effects").prop('muted', true);
      
        var anim = bodymovin.loadAnimation({
            container: document.getElementById('lottie'),
            renderer: 'html',
            loop: false,
            autoplay: false,
            animationData: animationData,
            rendererSettings: {
                className: "main"
            }
        });
        
        anim.addEventListener('DOMLoaded', function() { 
            anim.play(); 
            $("#effects")[0].play();
        });
    });