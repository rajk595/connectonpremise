sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("connectonpremise.connectonpremise.controller.View1", {
			onInit: function () {

            },
            
            onPress:function(){
                $.ajax({
                    url:"/sap/vui/app",
                    success:function(result){
                        sap.ui.getCore().byId("result").setText(result);
                    },
                    error:function(e)
                    {
                        sap.ui.getCore().byId("result").setText(e);
                    }
                });
            }
		});
	});
