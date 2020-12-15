sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"web/app/theCuriousDude/model/models",
	"web/app/theCuriousDude/model/formatter"
], function (Controller, models, formatter) {
	"use strict";

	return Controller.extend("web.app.theCuriousDude.controller.HomePage", {
		formatter: formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf web.app.theCuriousDude.view.HomePage
		 */
		onInit: function () {
			this.getView().setModel(models.createHomeTiles(), "homeTiles");
		},

		
		navToNext: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var sLabel = oEvent.getSource().getAriaLabel();
			switch(sLabel){
				case "envrionment":
					oRouter.navTo("environementLaunch");
					break;
				case "tech":
					oRouter.navTo("techLaunch");
					break;
				case "transhumanism":
					oRouter.navTo("transhumanismLaunch");
					break;
				case "travel":
					oRouter.navTo("travelLaunch");
					break;
				case "sport":
					oRouter.navTo("sportLaunch");
					break;
				case "videoGame":
					oRouter.navTo("videoGameLaunch");
					break;
				case "boardGame":
					oRouter.navTo("boardGameLaunch");
					break;
				case "personalDevelopment":
					oRouter.navTo("personalDevelopmentLaunch");
					break;
				case "aboutMe":
					oRouter.navTo("aboutMe");
					break;
			}
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf web.app.theCuriousDude.view.HomePage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf web.app.theCuriousDude.view.HomePage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf web.app.theCuriousDude.view.HomePage
		 */
		//	onExit: function() {
		//
		//	}

	});

});