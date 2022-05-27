$(document).ready(function(){
    $('.questions__div--mph').hide();
    $("#km").click(function(){
        $('.questions__div--mph').hide();
        $('.questions__div--kmh').show();
    });
    $("#mil").click(function(){
        $('.questions__div--kmh').hide();
        $('.questions__div--mph').show();
    });
    $("#questions").submit(function(evt){
        evt.preventDefault();
        $(".answer").empty();
        let unit = 1;
        let unit_sym = "km/h";
        let distance = 0;
        const speed = $("#speed").val();
        const houer = $("#houer").val();
        const data = new Date(houer);
        const now = new Date();
        const timeleft = (data.getTime() - now.getTime())/3600000;
        if($('#mil').is(':checked')){
            unit = 1.6;
            unit_sym = "m/h";
            distance = $("#mph").val();
        }else{
            distance = $("#kmh").val();
        };
        if(distance <= 0){
            $(".answer").append("<p>Jesteś na miejscu.</p>");
        }else{
        if(timeleft>0){
            let ans = Math.round(distance/timeleft);
            if(ans>speed){
                $(".answer").append("<p>Musisz przyspieszyć do "+ans+" "+unit_sym+".</p>");
            }else if(ans==speed){
                $(".answer").append("<p>Twoja prędkośc jest idealna.</p>");
            }else{
                $(".answer").append("<p>Możesz zwolnić do "+ans+" "+unit_sym+".</p>");
            };
        }else{
            $(".answer").append("<p>Jesteś spóźniony.</p>"); 
        };
        $(".answer p").css("padding","8px");
        $(".answer").addClass('active');
    }

    })
});//ready end