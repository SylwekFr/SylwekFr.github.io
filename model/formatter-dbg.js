sap.ui.define([], function () {
	"use strict";
	return {
		getI18nValue: function (sKey) {
			return this.getOwnerComponent().getModel("i18n").getProperty(sKey);
		}
	};
});