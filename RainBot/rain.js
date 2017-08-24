var Discord = require('discord.io');
const serverName = 'FluxBot Support'
var roleName = 'RainFlux'
var bot = new Discord.Client({
    token: "MzM3MTExNTQ3Njg1ODk2MTk0.DGtsJA.WpukcDYlgGBWM3MxoJJc878Tnqs",
    autorun: true
});
function getServerId(){
	for(var i in bot.servers){
		if(bot.servers[i].name == serverName){
			return bot.servers[i].id;
		}
	}
	return -1;
}
function getRoleId(){
	var serverId = getServerId();
	for(var i in bot.servers[serverId].roles){
		if(bot.servers[serverId].roles[i].name == roleName){
			return bot.servers[serverId].roles[i].id;
		}
	}
	return -1;
}
function changeColor(hex){
		var newColor = hex
		bot.editRole({
			serverID: getServerId(),
			roleID: getRoleId(),
			color: newColor
		});
}
bot.on('ready', function(){
	var ms = 700 ;
	var color1 = ['#050505','#3c87c9','#f30202','#FFF700','#FF00EB','#0900FF','#0900FF'];
	var i = -1;
	var j = 0;	
	setInterval(function (){
		if( i == -1 ){
			j = 1;
		}
		if( i == (color1.length)-1 ){
			j = -1;		
		}
		i = i+j;
		changeColor(color1[i]);
	}, ms);
		
});