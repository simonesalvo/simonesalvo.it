
var showAbout = function(){
			$("#menuDiv").fadeOut();
			$("#menuAbout").fadeIn();

};

var hideAbout = function(){
			$("#menuDiv").fadeIn();
			$("#menuAbout").fadeOut();
};

var hideMenu = function(){
$("menuDiv").slideUp();
$("maps").fadeOut();	
};


var sendMail = function(){
    var mailFromName = $("#mailFromName").val();
    var mailFrom = $("#mailFrom").val();
    var mailBody = $("#mailBody").val();
    var mailSubject = "Idea from SimoneSalvo.it"

    var request = $.ajax({
                         url:"http://simonesalvoservices.appspot.com/SendMail",
                         method: "POST",
                         data: {    'mailBody' : mailBody,
                                    'mailFrom' : mailFrom,
                                    'mailSubject' : mailSubject,
                                    'mailFromName' : mailFromName
                         },
                         dataType: "html"
                         });
};


$(document).ready(function(e) {
var nProject =8;
var descrInit = (Math.floor((Math.random()*10))%nProject);
var lan = "en";


$("#aboutDiv").hide();
$(".pDiv").hide();
$("#nextB").hide();

$(".btn").mouseover(
function()
{
	$(this).attr("src","mainbtn/"+$(this).attr("id").toString()+"2"+lan+".png");
	$(this).css('cursor','pointer');
});

$(".btn").mouseleave(
function()
{
	$(this).attr("src","mainbtn/"+$(this).attr("id").toString()+"1"+lan+".png");
	$(this).css('cursor','pointer');
});

$("#cv").click(function(e)
	{
		window.open("cv/cvSimoneSalvo.pdf","","fullscreen=1");
		e.stopPropagation();
	});

$("#pp").click(function(e)
	{
		$("#projDescrI").attr("src","descr/"+descrInit+lan+".png");
		$(".menu").hide();
		$("#projectDiv").fadeIn("slow");
		$("#nextB").fadeIn("slow");	
		e.stopPropagation();
	});
		
$(".pDiv").on({
	"mouseover":function(e){
		$("#projectTransp").show();
		$(".pDiv").css('cursor', 'pointer');
		e.stopPropagation();
},
		"mouseleave":function(e){
		$("#projectTransp").hide();
				e.stopPropagation();
},
"click":
function(e)
{
	switch (descrInit)
	{
		case 0:window.open("https://github.com/simonesalvo/carSharing/archive/master.zip");break;
		case 1:window.open("https://github.com/simonesalvo/eye-selector/archive/master.zip");break;
		case 2:window.open("https://github.com/simonesalvo/sim-chess/archive/master.zip");break;
		case 3:window.open("https://github.com/simonesalvo/space-impact/archive/master.zip");break;
		case 4:window.open("https://github.com/simonesalvo/apriori/archive/master.zip");break;	
		case 5:window.open("https://github.com/simonesalvo/haptic-hand-shake/archive/master.zip");break;	
		case 6:window.open("https://github.com/simonesalvo/meana1.0/archive/master.zip");break;	
		case 7:window.open("https://github.com/simonesalvo/bsa-project/archive/master.zip");break;		
	}
	e.stopPropagation();
}
});

			
$("#btnControl").on({
	"mouseover":function() 
	{
		$("#btnControl").attr("src","ctrlbtn/next.png");
		$("#btnControl").css('cursor', 'pointer');
		},
		"click":function(e) 
	{ 
		descrInit= (descrInit+1)%nProject; 

		$("#projDescrI").attr("src","descr/"+descrInit+lan+".png");
		e.stopPropagation();
	},
	"mouseleave":function() 
	{
		$("#btnControl").attr("src","ctrlbtn/next2.png");
	}
});

$(".flag").mouseover(function(){$(this).attr("src","flag/"+$(this).attr("id").toString()+"2"+".png")});
$(".flag").mouseleave(function(){$(this).attr("src","flag/"+$(this).attr("id").toString()+".png")});
$(".flag").mouseover(function(){$(this).css('cursor', 'pointer');})
$(".flag").click(function(e)
{
	lan=""+$(this).attr("id").toString();

	$("#pp").attr("src","mainbtn/pp1"+lan+".png");
	$("#about").attr("src","descr/qq"+lan+".png");
	$("#projDescrI").attr("src","descr/"+descrInit+lan+".png");

	e.stopPropagation();
	// <!--$("#linguaAttualeP").text($(this).attr("id").toString().toUpperCase());-->
});


$(".socialB").mouseover(function(){$(this).attr("src","ico/"+$(this).attr("id").toString()+"2"+".png")});
$(".socialB").mouseleave(function(){$(this).attr("src","ico/"+$(this).attr("id").toString()+".png")});
$(".socialB").mouseover(function(){$(this).css('cursor', 'pointer');})	
			
	
$(document.body).click(function(e){
if ($("#aboutDiv").is(":visible"))
	{
		$("#aboutDiv").fadeOut();
		$(".menu").fadeIn();
		$("#aboutDiv").hide();
	}
	else if ($("#projectDiv").is(":visible"))
	{	
		$(".pDiv").fadeOut();
		$(".menu").fadeIn();
		$(".pDiv").hide();
		$("#nextB").hide();
	}
	});

});

