/**
 * Layout specific inititialisation
 */var layout={init:function(){$("body").removeClass("js_off");for(var e in this)/^init.+/.test(e)&&this[e]()},initForms:function(){typeof $.fn.selectBox=="function"&&$("#p select").selectBox();typeof $.fn.placeholder=="function"&&$("input[placeholder], textarea[placeholder]").placeholder()},initFancybox:function(){typeof $.fn.fancybox=="function"&&$(".fancybox").fancybox()}};$(document).ready(function(){layout.init()});