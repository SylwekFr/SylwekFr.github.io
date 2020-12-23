sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("web.app.theCuriousDude.controller.AboutMe", {
		onInit: function () {

		},
		onExpand: function (oEvt) {
			var bExpanded = oEvt.getSource().getExpanded();
			if (bExpanded) {
				var oView = this.getView();
				var aPanelIds = ["languagePanel",
					"programmingPanel",
					"frameworkPanel",
					"databasePanel",
					"engineeringPanel",
					"managementPanel",
					"businessPanel",
					"softwarePanel"
				];
				var sId = oEvt.getSource().getId().split("--").pop();
				aPanelIds.splice(aPanelIds.indexOf(sId), 1);
				aPanelIds.forEach(sPanelId => {
					if (oView.byId(sPanelId).getExpanded()){
						oView.byId(sPanelId).setExpanded(false);
					}
				});
			}
			return;
		}

	});

});