sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createHomeTiles: function(){
			var sPath = jQuery.sap.getModulePath("web.app.theCuriousDude", "/model/homeTiles.json");
			var oModel =new JSONModel(sPath);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});