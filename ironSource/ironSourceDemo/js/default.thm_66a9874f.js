
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/MainViewDevSkin.exml'] = window.MainViewDevSkin = (function (_super) {
	__extends(MainViewDevSkin, _super);
	function MainViewDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kGrpBg","kImgB1","kImgB2","kImgB3","kImgB4","kImgC2","kImgA5","kImgA1","kImgA3","kImgA4","kImgC1","kImgBuild1","kImgChoice1","kImgPeople1","kImgA2","kImgChoice2","kImgPeople2","kImgChoice3","kImgPeople3","kGrpMenu","kImgRect","kImgFilter","kGrpAction","kGrpSnow","choiceBg","kListMenu","kGrpChoice","kGrpGuide","kImgEnd1","kImgEnd2","kImgEndTips","kGrpEnd","kImgHand","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = MainViewDevSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kGrpBg_i(),this.kGrpMenu_i(),this.kImgRect_i(),this.kImgFilter_i(),this.kGrpAction_i(),this.kGrpSnow_i(),this.kGrpChoice_i(),this.kGrpGuide_i(),this.kGrpEnd_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgB1_i(),this.kImgB2_i(),this.kImgB3_i(),this.kImgB4_i(),this.kImgC2_i(),this.kImgA5_i(),this.kImgA1_i(),this.kImgA3_i(),this.kImgA4_i(),this.kImgC1_i(),this.kImgBuild1_i(),this.kImgChoice1_i(),this.kImgPeople1_i(),this.kImgA2_i(),this.kImgChoice2_i(),this.kImgPeople2_i(),this.kImgChoice3_i(),this.kImgPeople3_i()];
		return t;
	};
	_proto.kImgB1_i = function () {
		var t = new eui.Image();
		this.kImgB1 = t;
		t.anchorOffsetX = 35.64;
		t.anchorOffsetY = 0.36;
		t.name = "6";
		t.source = "";
		t.visible = false;
		t.x = 1033.06;
		t.y = 175.36;
		return t;
	};
	_proto.kImgB2_i = function () {
		var t = new eui.Image();
		this.kImgB2 = t;
		t.anchorOffsetX = 193.79;
		t.anchorOffsetY = 100.52;
		t.name = "2";
		t.source = "";
		t.visible = false;
		t.x = 800.79;
		t.y = 461.52;
		return t;
	};
	_proto.kImgB3_i = function () {
		var t = new eui.Image();
		this.kImgB3 = t;
		t.anchorOffsetX = 165.76;
		t.anchorOffsetY = 154.55;
		t.name = "8";
		t.source = "";
		t.visible = false;
		t.x = 766.76;
		t.y = 327.55;
		return t;
	};
	_proto.kImgB4_i = function () {
		var t = new eui.Image();
		this.kImgB4 = t;
		t.anchorOffsetX = 173.36;
		t.anchorOffsetY = 71.12;
		t.source = "";
		t.visible = false;
		t.x = 788.36;
		t.y = 368.12;
		return t;
	};
	_proto.kImgC2_i = function () {
		var t = new eui.Image();
		this.kImgC2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 82;
		t.name = "8";
		t.source = "";
		t.visible = false;
		t.x = 150;
		t.y = 449.44;
		return t;
	};
	_proto.kImgA5_i = function () {
		var t = new eui.Image();
		this.kImgA5 = t;
		t.anchorOffsetX = 101.21;
		t.anchorOffsetY = 153.7;
		t.name = "5";
		t.source = "";
		t.visible = false;
		t.x = 379.21;
		t.y = 522.7;
		return t;
	};
	_proto.kImgA1_i = function () {
		var t = new eui.Image();
		this.kImgA1 = t;
		t.anchorOffsetX = 160.57;
		t.anchorOffsetY = 153.05;
		t.name = "1";
		t.source = "";
		t.visible = false;
		t.x = 636.57;
		t.y = 604.09;
		return t;
	};
	_proto.kImgA3_i = function () {
		var t = new eui.Image();
		this.kImgA3 = t;
		t.anchorOffsetX = 118.03;
		t.anchorOffsetY = 123.12;
		t.name = "3";
		t.source = "";
		t.visible = false;
		t.x = 648.03;
		t.y = 508.04;
		return t;
	};
	_proto.kImgA4_i = function () {
		var t = new eui.Image();
		this.kImgA4 = t;
		t.anchorOffsetX = 132.3;
		t.anchorOffsetY = 112.61;
		t.name = "4";
		t.source = "";
		t.visible = false;
		t.x = 945.82;
		t.y = 505.61;
		return t;
	};
	_proto.kImgC1_i = function () {
		var t = new eui.Image();
		this.kImgC1 = t;
		t.anchorOffsetX = 237.36;
		t.anchorOffsetY = 720.21;
		t.name = "8";
		t.source = "";
		t.visible = false;
		t.x = 1045.36;
		t.y = 720.21;
		return t;
	};
	_proto.kImgBuild1_i = function () {
		var t = new eui.Image();
		this.kImgBuild1 = t;
		t.anchorOffsetX = 213.3;
		t.anchorOffsetY = 71.06;
		t.source = "";
		t.x = 638.5;
		t.y = 178.58;
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.anchorOffsetX = 93.94;
		t.anchorOffsetY = 72.73;
		t.source = "";
		t.tint = 0xfffff;
		t.visible = false;
		t.x = 634.94;
		t.y = 549.31;
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.anchorOffsetX = 106.06;
		t.anchorOffsetY = 80.31;
		t.source = "";
		t.visible = false;
		t.x = 635.06;
		t.y = 546.39;
		return t;
	};
	_proto.kImgA2_i = function () {
		var t = new eui.Image();
		this.kImgA2 = t;
		t.anchorOffsetX = 42.93;
		t.anchorOffsetY = 97.99;
		t.name = "2";
		t.source = "";
		t.visible = false;
		t.x = 644.43;
		t.y = 494.13;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.anchorOffsetX = 75.76;
		t.anchorOffsetY = 86.37;
		t.source = "";
		t.visible = false;
		t.x = 424.97;
		t.y = 273.45;
		return t;
	};
	_proto.kImgPeople2_i = function () {
		var t = new eui.Image();
		this.kImgPeople2 = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 83.34;
		t.source = "";
		t.visible = false;
		t.x = 423.7;
		t.y = 280.34;
		return t;
	};
	_proto.kImgChoice3_i = function () {
		var t = new eui.Image();
		this.kImgChoice3 = t;
		t.anchorOffsetX = 221.21;
		t.anchorOffsetY = 333.34;
		t.source = "";
		t.visible = false;
		t.x = 218.21;
		t.y = 392.34;
		return t;
	};
	_proto.kImgPeople3_i = function () {
		var t = new eui.Image();
		this.kImgPeople3 = t;
		t.anchorOffsetX = 231.82;
		t.anchorOffsetY = 331.82;
		t.source = "";
		t.visible = false;
		t.x = 231.82;
		t.y = 414.82;
		return t;
	};
	_proto.kImgRect_i = function () {
		var t = new eui.Rect();
		this.kImgRect = t;
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgFilter_i = function () {
		var t = new eui.Image();
		this.kImgFilter = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpSnow_i = function () {
		var t = new eui.Group();
		this.kGrpSnow = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpChoice_i = function () {
		var t = new eui.Group();
		this.kGrpChoice = t;
		t.horizontalCenter = 0;
		t.y = 575;
		t.elementsContent = [this.choiceBg_i(),this.kListMenu_i()];
		return t;
	};
	_proto.choiceBg_i = function () {
		var t = new eui.Image();
		this.choiceBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(123,36,288,59);
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kListMenu_i = function () {
		var t = new eui.DataGroup();
		this.kListMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = OrderItemRenderSkin;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.source = "";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.source = "";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.source = "";
		return t;
	};
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.anchorOffsetX = 578;
		t.anchorOffsetY = 298;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Group1_i(),this.kImgEndTips_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.verticalCenter = -55;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.kImgEnd1_i(),this.kImgEnd2_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 48;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.kImgEnd1_i = function () {
		var t = new eui.Image();
		this.kImgEnd1 = t;
		t.source = "";
		t.x = 0;
		t.y = 33;
		return t;
	};
	_proto.kImgEnd2_i = function () {
		var t = new eui.Image();
		this.kImgEnd2 = t;
		t.source = "";
		t.x = 571;
		t.y = 0;
		return t;
	};
	_proto.kImgEndTips_i = function () {
		var t = new eui.Image();
		this.kImgEndTips = t;
		t.anchorOffsetX = 287.88;
		t.anchorOffsetY = 21.21;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 486;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "";
		t.visible = false;
		t.x = 327.48;
		t.y = 291.45;
		return t;
	};
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kGrpBg","kImgB1","kImgB2","kImgB3","kImgB4","kImgC2","kImgA5","kImgA1","kImgA3","kImgA4","kImgC1","kImgBuild1","kImgChoice1","kImgPeople1","kImgA2","kImgChoice2","kImgPeople2","kImgChoice3","kImgPeople3","kGrpMenu","kImgRect","kImgFilter","kGrpAction","kGrpSnow","choiceBg","kListMenu","kGrpChoice","kGrpGuide","kImgEnd1","kImgEnd2","kImgEndTips","kGrpEnd","kImgHand","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = MainViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kGrpBg_i(),this.kGrpMenu_i(),this.kImgRect_i(),this.kImgFilter_i(),this.kGrpAction_i(),this.kGrpSnow_i(),this.kGrpChoice_i(),this.kGrpGuide_i(),this.kGrpEnd_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.horizontalCenter = 0;
		t.source = "main_bg_png";
		t.top = 0;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgB1_i(),this.kImgB2_i(),this.kImgB3_i(),this.kImgB4_i(),this.kImgC2_i(),this.kImgA5_i(),this.kImgA1_i(),this.kImgA3_i(),this.kImgA4_i(),this.kImgC1_i(),this.kImgBuild1_i(),this.kImgChoice1_i(),this.kImgPeople1_i(),this.kImgA2_i(),this.kImgChoice2_i(),this.kImgPeople2_i(),this.kImgChoice3_i(),this.kImgPeople3_i()];
		return t;
	};
	_proto.kImgB1_i = function () {
		var t = new eui.Image();
		this.kImgB1 = t;
		t.anchorOffsetX = 35.64;
		t.anchorOffsetY = 0.36;
		t.name = "6";
		t.source = "main_b1_png";
		t.visible = false;
		t.x = 1033.06;
		t.y = 175.36;
		return t;
	};
	_proto.kImgB2_i = function () {
		var t = new eui.Image();
		this.kImgB2 = t;
		t.anchorOffsetX = 193.79;
		t.anchorOffsetY = 100.52;
		t.name = "2";
		t.source = "main_b2_png";
		t.visible = false;
		t.x = 800.79;
		t.y = 461.52;
		return t;
	};
	_proto.kImgB3_i = function () {
		var t = new eui.Image();
		this.kImgB3 = t;
		t.anchorOffsetX = 165.76;
		t.anchorOffsetY = 154.55;
		t.name = "8";
		t.source = "main_b3_png";
		t.visible = false;
		t.x = 766.76;
		t.y = 327.55;
		return t;
	};
	_proto.kImgB4_i = function () {
		var t = new eui.Image();
		this.kImgB4 = t;
		t.anchorOffsetX = 173.36;
		t.anchorOffsetY = 71.12;
		t.source = "main_b4_png";
		t.visible = false;
		t.x = 788.36;
		t.y = 368.12;
		return t;
	};
	_proto.kImgC2_i = function () {
		var t = new eui.Image();
		this.kImgC2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 82;
		t.name = "8";
		t.source = "main_a6_png";
		t.visible = false;
		t.x = 150;
		t.y = 449.44;
		return t;
	};
	_proto.kImgA5_i = function () {
		var t = new eui.Image();
		this.kImgA5 = t;
		t.anchorOffsetX = 101.21;
		t.anchorOffsetY = 153.7;
		t.name = "5";
		t.source = "main_a5_png";
		t.visible = false;
		t.x = 379.21;
		t.y = 522.7;
		return t;
	};
	_proto.kImgA1_i = function () {
		var t = new eui.Image();
		this.kImgA1 = t;
		t.anchorOffsetX = 160.57;
		t.anchorOffsetY = 153.05;
		t.name = "1";
		t.source = "main_a1_png";
		t.visible = false;
		t.x = 636.57;
		t.y = 604.09;
		return t;
	};
	_proto.kImgA3_i = function () {
		var t = new eui.Image();
		this.kImgA3 = t;
		t.anchorOffsetX = 118.03;
		t.anchorOffsetY = 123.12;
		t.name = "3";
		t.source = "main_a3_png";
		t.visible = false;
		t.x = 648.03;
		t.y = 508.04;
		return t;
	};
	_proto.kImgA4_i = function () {
		var t = new eui.Image();
		this.kImgA4 = t;
		t.anchorOffsetX = 132.3;
		t.anchorOffsetY = 112.61;
		t.name = "4";
		t.source = "main_a4_png";
		t.visible = false;
		t.x = 945.82;
		t.y = 505.61;
		return t;
	};
	_proto.kImgC1_i = function () {
		var t = new eui.Image();
		this.kImgC1 = t;
		t.anchorOffsetX = 237.36;
		t.anchorOffsetY = 720.21;
		t.name = "8";
		t.source = "main_c1_png";
		t.visible = false;
		t.x = 1045.36;
		t.y = 720.21;
		return t;
	};
	_proto.kImgBuild1_i = function () {
		var t = new eui.Image();
		this.kImgBuild1 = t;
		t.anchorOffsetX = 213.3;
		t.anchorOffsetY = 71.06;
		t.source = "main_normal_png";
		t.x = 638.5;
		t.y = 178.58;
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.anchorOffsetX = 93.94;
		t.anchorOffsetY = 72.73;
		t.source = "main_choice1_png";
		t.tint = 0xfffff;
		t.visible = false;
		t.x = 634.94;
		t.y = 549.31;
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.anchorOffsetX = 106.06;
		t.anchorOffsetY = 80.31;
		t.source = "main_desk2_png";
		t.visible = false;
		t.x = 635.06;
		t.y = 546.39;
		return t;
	};
	_proto.kImgA2_i = function () {
		var t = new eui.Image();
		this.kImgA2 = t;
		t.anchorOffsetX = 42.93;
		t.anchorOffsetY = 97.99;
		t.name = "2";
		t.source = "main_a2_png";
		t.visible = false;
		t.x = 644.43;
		t.y = 494.13;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.anchorOffsetX = 75.76;
		t.anchorOffsetY = 86.37;
		t.source = "main_choice2_png";
		t.visible = false;
		t.x = 424.97;
		t.y = 273.45;
		return t;
	};
	_proto.kImgPeople2_i = function () {
		var t = new eui.Image();
		this.kImgPeople2 = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 83.34;
		t.source = "main_paino1_png";
		t.visible = false;
		t.x = 423.7;
		t.y = 280.34;
		return t;
	};
	_proto.kImgChoice3_i = function () {
		var t = new eui.Image();
		this.kImgChoice3 = t;
		t.anchorOffsetX = 221.21;
		t.anchorOffsetY = 333.34;
		t.source = "main_choice3_png";
		t.visible = false;
		t.x = 218.21;
		t.y = 392.34;
		return t;
	};
	_proto.kImgPeople3_i = function () {
		var t = new eui.Image();
		this.kImgPeople3 = t;
		t.anchorOffsetX = 231.82;
		t.anchorOffsetY = 331.82;
		t.source = "main_left3_png";
		t.visible = false;
		t.x = 231.82;
		t.y = 414.82;
		return t;
	};
	_proto.kImgRect_i = function () {
		var t = new eui.Rect();
		this.kImgRect = t;
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgFilter_i = function () {
		var t = new eui.Image();
		this.kImgFilter = t;
		t.horizontalCenter = 0;
		t.source = "main_xx_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpSnow_i = function () {
		var t = new eui.Group();
		this.kGrpSnow = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpChoice_i = function () {
		var t = new eui.Group();
		this.kGrpChoice = t;
		t.horizontalCenter = 0;
		t.y = 575;
		t.elementsContent = [this.choiceBg_i(),this.kListMenu_i()];
		return t;
	};
	_proto.choiceBg_i = function () {
		var t = new eui.Image();
		this.choiceBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(123,36,288,59);
		t.source = "main_topic_png";
		t.top = 0;
		return t;
	};
	_proto.kListMenu_i = function () {
		var t = new eui.DataGroup();
		this.kListMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = OrderItemRenderSkin;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.source = "main_ui_desk1_png";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.source = "main_ui_desk2_png";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.source = "main_ui_desk3_png";
		return t;
	};
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.anchorOffsetX = 578;
		t.anchorOffsetY = 298;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this._Group1_i(),this.kImgEndTips_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 413.64;
		t.horizontalCenter = 0;
		t.verticalCenter = -82;
		t.width = 1280;
		t.elementsContent = [this.kImgEnd1_i(),this.kImgEnd2_i()];
		return t;
	};
	_proto.kImgEnd1_i = function () {
		var t = new eui.Image();
		this.kImgEnd1 = t;
		t.anchorOffsetX = 275.76;
		t.anchorOffsetY = 215.15;
		t.source = "end1_png";
		t.x = 362.13;
		t.y = 215.15;
		return t;
	};
	_proto.kImgEnd2_i = function () {
		var t = new eui.Image();
		this.kImgEnd2 = t;
		t.anchorOffsetX = 277.27;
		t.anchorOffsetY = 209.09;
		t.source = "end2_png";
		t.x = 956.47;
		t.y = 209.09;
		return t;
	};
	_proto.kImgEndTips_i = function () {
		var t = new eui.Image();
		this.kImgEndTips = t;
		t.anchorOffsetX = 287.88;
		t.anchorOffsetY = 21.21;
		t.horizontalCenter = 0.5;
		t.source = "end_tips_png";
		t.y = 486;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "main_guide_arrow_png";
		t.visible = false;
		t.x = 327.48;
		t.y = 291.45;
		return t;
	};
	return MainViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/OrderItemRenderSkin.exml'] = window.OrderItemRenderSkin = (function (_super) {
	__extends(OrderItemRenderSkin, _super);
	function OrderItemRenderSkin() {
		_super.call(this);
		this.skinParts = ["bg","kImgContent"];
		
		this.height = 122;
		this.width = 137;
		this.elementsContent = [this.bg_i(),this.kImgContent_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.kImgContent,"name");
		eui.Binding.$bindProperties(this, ["hostComponent.data.source"],[0],this.kImgContent,"source");
	}
	var _proto = OrderItemRenderSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "data:image/png;base64,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";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.verticalCenter = 0;
		return t;
	};
	return OrderItemRenderSkin;
})(eui.Skin);