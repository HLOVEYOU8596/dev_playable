
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
		this.skinParts = ["kImgBg2","kImgTips2","kImgTree1","kImgTree3","kImgBg1","kImgGrass","kImgPool2","kImgPool1","kImgUmbllear1","kImgCirle1","kImgChair1","kImgSetting2","kImgSetting1","kImgSetting4","kImgSetting3","kImgOld1","kImgOld2","kImgOld3","kImgOld4","kImgOld8","kImgOld5","kImgOld5_","kImgOld6","kImgOld7","kImgOld3_","kGrpOld","kImgSetting5","kGrpBg","kImgPeople","kImgTips","kGrpPeople","kGrpSnow","kGrpAction","kImgSwipe","kImgMenu","kImgLine1","kImgChoice1","kGrpChoice1","kImgLine2","kImgChoice2","kGrpChoice2","kImgLine3","kImgChoice3","kGrpChoice3","kImgLine4","kImgChoice4","kGrpChoice4","kGrpMenu","kGrpContent","kImgHand","kGrpGuide","kImgEnd","kBtnContinue","kImgGuide","kGrpEnd","kGrpMain"];
		
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
		t.anchorOffsetX = 1006.06;
		t.anchorOffsetY = 481.82;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kGrpBg_i(),this.kGrpPeople_i(),this.kGrpSnow_i(),this.kGrpAction_i(),this.kImgSwipe_i(),this.kGrpContent_i(),this.kImgHand_i(),this.kGrpGuide_i(),this.kGrpEnd_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.height = 720;
		t.width = 1280;
		t.elementsContent = [this.kImgBg2_i(),this.kImgTips2_i(),this.kImgTree1_i(),this.kImgTree3_i(),this.kImgBg1_i(),this.kImgGrass_i(),this.kImgPool2_i(),this.kImgPool1_i(),this.kImgUmbllear1_i(),this.kImgCirle1_i(),this.kImgChair1_i(),this.kImgSetting2_i(),this.kImgSetting1_i(),this.kImgSetting4_i(),this.kImgSetting3_i(),this.kGrpOld_i(),this.kImgSetting5_i()];
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgTips2_i = function () {
		var t = new eui.Image();
		this.kImgTips2 = t;
		t.anchorOffsetX = 380;
		t.anchorOffsetY = 48;
		t.source = "";
		t.visible = false;
		t.x = 641;
		t.y = 48;
		return t;
	};
	_proto.kImgTree1_i = function () {
		var t = new eui.Image();
		this.kImgTree1 = t;
		t.anchorOffsetX = 294;
		t.anchorOffsetY = 226;
		t.source = "";
		t.visible = false;
		t.x = 990;
		t.y = 230;
		return t;
	};
	_proto.kImgTree3_i = function () {
		var t = new eui.Image();
		this.kImgTree3 = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 189.39;
		t.source = "";
		t.top = 34;
		t.visible = false;
		t.x = 152;
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.bottom = 0;
		t.source = "";
		t.x = 0;
		return t;
	};
	_proto.kImgGrass_i = function () {
		var t = new eui.Image();
		this.kImgGrass = t;
		t.anchorOffsetX = 644;
		t.anchorOffsetY = 192;
		t.source = "";
		t.visible = false;
		t.x = 644;
		t.y = 541;
		return t;
	};
	_proto.kImgPool2_i = function () {
		var t = new eui.Image();
		this.kImgPool2 = t;
		t.anchorOffsetX = 642;
		t.anchorOffsetY = 164;
		t.source = "";
		t.visible = false;
		t.x = 642;
		t.y = 559;
		return t;
	};
	_proto.kImgPool1_i = function () {
		var t = new eui.Image();
		this.kImgPool1 = t;
		t.anchorOffsetX = 583;
		t.anchorOffsetY = 125;
		t.source = "";
		t.visible = false;
		t.x = 697.36;
		t.y = 594.24;
		return t;
	};
	_proto.kImgUmbllear1_i = function () {
		var t = new eui.Image();
		this.kImgUmbllear1 = t;
		t.anchorOffsetX = 126;
		t.anchorOffsetY = 126;
		t.source = "";
		t.visible = false;
		t.x = 131;
		t.y = 419;
		return t;
	};
	_proto.kImgCirle1_i = function () {
		var t = new eui.Image();
		this.kImgCirle1 = t;
		t.anchorOffsetX = 84;
		t.anchorOffsetY = 80;
		t.source = "";
		t.visible = false;
		t.x = 1034;
		t.y = 536;
		return t;
	};
	_proto.kImgChair1_i = function () {
		var t = new eui.Image();
		this.kImgChair1 = t;
		t.anchorOffsetX = 224.24;
		t.anchorOffsetY = 51.52;
		t.source = "";
		t.visible = false;
		t.x = 690.24;
		t.y = 411.52;
		return t;
	};
	_proto.kImgSetting2_i = function () {
		var t = new eui.Image();
		this.kImgSetting2 = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 78;
		t.source = "";
		t.visible = false;
		t.x = 96;
		t.y = 349;
		return t;
	};
	_proto.kImgSetting1_i = function () {
		var t = new eui.Image();
		this.kImgSetting1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 78;
		t.source = "";
		t.visible = false;
		t.x = 1111;
		t.y = 198;
		return t;
	};
	_proto.kImgSetting4_i = function () {
		var t = new eui.Image();
		this.kImgSetting4 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 76;
		t.source = "";
		t.visible = false;
		t.x = 1052;
		t.y = 457;
		return t;
	};
	_proto.kImgSetting3_i = function () {
		var t = new eui.Image();
		this.kImgSetting3 = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 80;
		t.source = "";
		t.visible = false;
		t.x = 681;
		t.y = 406;
		return t;
	};
	_proto.kGrpOld_i = function () {
		var t = new eui.Group();
		this.kGrpOld = t;
		t.height = 720;
		t.touchThrough = true;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.kImgOld1_i(),this.kImgOld2_i(),this.kImgOld3_i(),this.kImgOld4_i(),this.kImgOld8_i(),this.kImgOld5_i(),this.kImgOld5__i(),this.kImgOld6_i(),this.kImgOld7_i(),this.kImgOld3__i()];
		return t;
	};
	_proto.kImgOld1_i = function () {
		var t = new eui.Image();
		this.kImgOld1 = t;
		t.source = "";
		t.x = 165;
		t.y = 551;
		return t;
	};
	_proto.kImgOld2_i = function () {
		var t = new eui.Image();
		this.kImgOld2 = t;
		t.source = "";
		t.x = 380;
		t.y = 605;
		return t;
	};
	_proto.kImgOld3_i = function () {
		var t = new eui.Image();
		this.kImgOld3 = t;
		t.source = "";
		t.x = 539;
		t.y = 595;
		return t;
	};
	_proto.kImgOld4_i = function () {
		var t = new eui.Image();
		this.kImgOld4 = t;
		t.source = "";
		t.x = 701;
		t.y = 613;
		return t;
	};
	_proto.kImgOld8_i = function () {
		var t = new eui.Image();
		this.kImgOld8 = t;
		t.source = "";
		t.x = 577;
		t.y = 651;
		return t;
	};
	_proto.kImgOld5_i = function () {
		var t = new eui.Image();
		this.kImgOld5 = t;
		t.source = "";
		t.x = 627;
		t.y = 469;
		return t;
	};
	_proto.kImgOld5__i = function () {
		var t = new eui.Image();
		this.kImgOld5_ = t;
		t.source = "";
		t.x = 372;
		t.y = 509;
		return t;
	};
	_proto.kImgOld6_i = function () {
		var t = new eui.Image();
		this.kImgOld6 = t;
		t.source = "";
		t.x = 874;
		t.y = 504;
		return t;
	};
	_proto.kImgOld7_i = function () {
		var t = new eui.Image();
		this.kImgOld7 = t;
		t.source = "";
		t.x = 1007;
		t.y = 578;
		return t;
	};
	_proto.kImgOld3__i = function () {
		var t = new eui.Image();
		this.kImgOld3_ = t;
		t.source = "";
		t.x = 275;
		t.y = 642;
		return t;
	};
	_proto.kImgSetting5_i = function () {
		var t = new eui.Image();
		this.kImgSetting5 = t;
		t.source = "";
		t.x = 973;
		t.y = 451;
		return t;
	};
	_proto.kGrpPeople_i = function () {
		var t = new eui.Group();
		this.kGrpPeople = t;
		t.x = -500;
		t.y = 70;
		t.elementsContent = [this.kImgPeople_i(),this.kImgTips_i()];
		return t;
	};
	_proto.kImgPeople_i = function () {
		var t = new eui.Image();
		this.kImgPeople = t;
		t.source = "";
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.anchorOffsetY = 168;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "";
		t.x = 353;
		t.y = 294;
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
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 242;
		t.anchorOffsetY = 54;
		t.horizontalCenter = 0;
		t.source = "";
		t.visible = false;
		t.y = 486;
		return t;
	};
	_proto.kGrpContent_i = function () {
		var t = new eui.Group();
		this.kGrpContent = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.y = 560.94;
		t.elementsContent = [this.kImgMenu_i(),this.kGrpMenu_i()];
		return t;
	};
	_proto.kImgMenu_i = function () {
		var t = new eui.Image();
		this.kImgMenu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(50,45,109,86);
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.left = 20;
		t.right = 20;
		t.top = 20;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.kGrpChoice1_i(),this.kGrpChoice2_i(),this.kGrpChoice3_i(),this.kGrpChoice4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 14;
		t.paddingBottom = 0;
		t.paddingLeft = 0;
		t.paddingRight = 0;
		t.paddingTop = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.kGrpChoice1_i = function () {
		var t = new eui.Group();
		this.kGrpChoice1 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 78;
		t.height = 156;
		t.width = 183;
		t.x = 92;
		t.y = 82;
		t.elementsContent = [this.kImgLine1_i(),this.kImgChoice1_i()];
		return t;
	};
	_proto.kImgLine1_i = function () {
		var t = new eui.Image();
		this.kImgLine1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpChoice2_i = function () {
		var t = new eui.Group();
		this.kGrpChoice2 = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 84;
		t.height = 156;
		t.width = 183;
		t.x = 291;
		t.y = 84;
		t.elementsContent = [this.kImgLine2_i(),this.kImgChoice2_i()];
		return t;
	};
	_proto.kImgLine2_i = function () {
		var t = new eui.Image();
		this.kImgLine2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpChoice3_i = function () {
		var t = new eui.Group();
		this.kGrpChoice3 = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 80;
		t.height = 156;
		t.verticalCenter = 0.5;
		t.width = 183;
		t.x = 500;
		t.elementsContent = [this.kImgLine3_i(),this.kImgChoice3_i()];
		return t;
	};
	_proto.kImgLine3_i = function () {
		var t = new eui.Image();
		this.kImgLine3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgChoice3_i = function () {
		var t = new eui.Image();
		this.kImgChoice3 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpChoice4_i = function () {
		var t = new eui.Group();
		this.kGrpChoice4 = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 78;
		t.height = 156;
		t.verticalCenter = 0.5;
		t.width = 183;
		t.x = 697;
		t.elementsContent = [this.kImgLine4_i(),this.kImgChoice4_i()];
		return t;
	};
	_proto.kImgLine4_i = function () {
		var t = new eui.Image();
		this.kImgLine4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgChoice4_i = function () {
		var t = new eui.Image();
		this.kImgChoice4 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "";
		t.visible = false;
		t.x = 688;
		t.y = 360;
		return t;
	};
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.visible = false;
		t.elementsContent = [this._Rect2_i(),this.kImgEnd_i(),this.kBtnContinue_i(),this.kImgGuide_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgEnd_i = function () {
		var t = new eui.Image();
		this.kImgEnd = t;
		t.source = "";
		t.x = 161;
		t.y = 70;
		return t;
	};
	_proto.kBtnContinue_i = function () {
		var t = new eui.Image();
		this.kBtnContinue = t;
		t.anchorOffsetX = 130.3;
		t.anchorOffsetY = 42.42;
		t.source = "";
		t.x = 929.45;
		t.y = 545.39;
		return t;
	};
	_proto.kImgGuide_i = function () {
		var t = new eui.Image();
		this.kImgGuide = t;
		t.source = "";
		t.x = -366;
		t.y = 98;
		return t;
	};
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg2","kImgTips2","kImgTree1","kImgTree3","kImgBg1","kImgGrass","kImgPool2","kImgPool1","kImgUmbllear1","kImgCirle1","kImgChair1","kImgSetting2","kImgSetting1","kImgSetting4","kImgSetting3","kImgOld1","kImgOld2","kImgOld3","kImgOld4","kImgOld8","kImgOld5","kImgOld5_","kImgOld6","kImgOld7","kImgOld3_","kGrpOld","kImgSetting5","kGrpBg","kImgPeople","kImgTips","kGrpPeople","kGrpSnow","kGrpAction","kImgSwipe","kImgLine1","kImgChoice1","kGrpChoice1","kImgLine2","kImgChoice2","kGrpChoice2","kImgLine3","kImgChoice3","kGrpChoice3","kImgLine4","kImgChoice4","kGrpChoice4","kGrpMenu","kGrpContent","kImgHand","kGrpGuide","kImgEnd","kBtnContinue","kImgGuide","kGrpEnd","kGrpMain"];
		
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
		t.anchorOffsetX = 1006.06;
		t.anchorOffsetY = 481.82;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kGrpBg_i(),this.kGrpPeople_i(),this.kGrpSnow_i(),this.kGrpAction_i(),this.kImgSwipe_i(),this.kGrpContent_i(),this.kImgHand_i(),this.kGrpGuide_i(),this.kGrpEnd_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.height = 720;
		t.width = 1280;
		t.elementsContent = [this.kImgBg2_i(),this.kImgTips2_i(),this.kImgTree1_i(),this.kImgTree3_i(),this.kImgBg1_i(),this.kImgGrass_i(),this.kImgPool2_i(),this.kImgPool1_i(),this.kImgUmbllear1_i(),this.kImgCirle1_i(),this.kImgChair1_i(),this.kImgSetting2_i(),this.kImgSetting1_i(),this.kImgSetting4_i(),this.kImgSetting3_i(),this.kGrpOld_i(),this.kImgSetting5_i()];
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.source = "main_bg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgTips2_i = function () {
		var t = new eui.Image();
		this.kImgTips2 = t;
		t.anchorOffsetX = 380;
		t.anchorOffsetY = 48;
		t.source = "main_tips1_png";
		t.visible = false;
		t.x = 641;
		t.y = 48;
		return t;
	};
	_proto.kImgTree1_i = function () {
		var t = new eui.Image();
		this.kImgTree1 = t;
		t.anchorOffsetX = 294;
		t.anchorOffsetY = 226;
		t.source = "main_tree3_png";
		t.visible = false;
		t.x = 990;
		t.y = 230;
		return t;
	};
	_proto.kImgTree3_i = function () {
		var t = new eui.Image();
		this.kImgTree3 = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 189.39;
		t.source = "main_tree5_png";
		t.top = 34;
		t.visible = false;
		t.x = 152;
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.bottom = 0;
		t.source = "main_bg1_png";
		t.x = 0;
		return t;
	};
	_proto.kImgGrass_i = function () {
		var t = new eui.Image();
		this.kImgGrass = t;
		t.anchorOffsetX = 644;
		t.anchorOffsetY = 192;
		t.source = "main_new2_png";
		t.visible = false;
		t.x = 644;
		t.y = 541;
		return t;
	};
	_proto.kImgPool2_i = function () {
		var t = new eui.Image();
		this.kImgPool2 = t;
		t.anchorOffsetX = 642;
		t.anchorOffsetY = 164;
		t.source = "main_new1_png";
		t.visible = false;
		t.x = 642;
		t.y = 559;
		return t;
	};
	_proto.kImgPool1_i = function () {
		var t = new eui.Image();
		this.kImgPool1 = t;
		t.anchorOffsetX = 583;
		t.anchorOffsetY = 125;
		t.source = "main_pool1_png";
		t.visible = false;
		t.x = 697.36;
		t.y = 594.24;
		return t;
	};
	_proto.kImgUmbllear1_i = function () {
		var t = new eui.Image();
		this.kImgUmbllear1 = t;
		t.anchorOffsetX = 126;
		t.anchorOffsetY = 126;
		t.source = "main_umbllera3_png";
		t.visible = false;
		t.x = 131;
		t.y = 419;
		return t;
	};
	_proto.kImgCirle1_i = function () {
		var t = new eui.Image();
		this.kImgCirle1 = t;
		t.anchorOffsetX = 84;
		t.anchorOffsetY = 80;
		t.source = "main_cirle3_png";
		t.visible = false;
		t.x = 1034;
		t.y = 536;
		return t;
	};
	_proto.kImgChair1_i = function () {
		var t = new eui.Image();
		this.kImgChair1 = t;
		t.anchorOffsetX = 224.24;
		t.anchorOffsetY = 51.52;
		t.source = "main_chair3_png";
		t.visible = false;
		t.x = 690.24;
		t.y = 411.52;
		return t;
	};
	_proto.kImgSetting2_i = function () {
		var t = new eui.Image();
		this.kImgSetting2 = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 78;
		t.source = "mnain_setting_png";
		t.visible = false;
		t.x = 96;
		t.y = 349;
		return t;
	};
	_proto.kImgSetting1_i = function () {
		var t = new eui.Image();
		this.kImgSetting1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 78;
		t.source = "mnain_setting_png";
		t.visible = false;
		t.x = 1111;
		t.y = 198;
		return t;
	};
	_proto.kImgSetting4_i = function () {
		var t = new eui.Image();
		this.kImgSetting4 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 76;
		t.source = "mnain_setting_png";
		t.visible = false;
		t.x = 1052;
		t.y = 457;
		return t;
	};
	_proto.kImgSetting3_i = function () {
		var t = new eui.Image();
		this.kImgSetting3 = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 80;
		t.source = "mnain_setting_png";
		t.visible = false;
		t.x = 681;
		t.y = 406;
		return t;
	};
	_proto.kGrpOld_i = function () {
		var t = new eui.Group();
		this.kGrpOld = t;
		t.height = 720;
		t.touchThrough = true;
		t.width = 1280;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.kImgOld1_i(),this.kImgOld2_i(),this.kImgOld3_i(),this.kImgOld4_i(),this.kImgOld8_i(),this.kImgOld5_i(),this.kImgOld5__i(),this.kImgOld6_i(),this.kImgOld7_i(),this.kImgOld3__i()];
		return t;
	};
	_proto.kImgOld1_i = function () {
		var t = new eui.Image();
		this.kImgOld1 = t;
		t.source = "main_old1_png";
		t.x = 165;
		t.y = 551;
		return t;
	};
	_proto.kImgOld2_i = function () {
		var t = new eui.Image();
		this.kImgOld2 = t;
		t.source = "main_old2_png";
		t.x = 380;
		t.y = 605;
		return t;
	};
	_proto.kImgOld3_i = function () {
		var t = new eui.Image();
		this.kImgOld3 = t;
		t.source = "main_old3_png";
		t.x = 539;
		t.y = 595;
		return t;
	};
	_proto.kImgOld4_i = function () {
		var t = new eui.Image();
		this.kImgOld4 = t;
		t.source = "main_old4_png";
		t.x = 701;
		t.y = 613;
		return t;
	};
	_proto.kImgOld8_i = function () {
		var t = new eui.Image();
		this.kImgOld8 = t;
		t.source = "main_old8_png";
		t.x = 577;
		t.y = 651;
		return t;
	};
	_proto.kImgOld5_i = function () {
		var t = new eui.Image();
		this.kImgOld5 = t;
		t.source = "main_old5_png";
		t.x = 627;
		t.y = 469;
		return t;
	};
	_proto.kImgOld5__i = function () {
		var t = new eui.Image();
		this.kImgOld5_ = t;
		t.source = "main_old5_png";
		t.x = 372;
		t.y = 509;
		return t;
	};
	_proto.kImgOld6_i = function () {
		var t = new eui.Image();
		this.kImgOld6 = t;
		t.source = "main_old6_png";
		t.x = 874;
		t.y = 504;
		return t;
	};
	_proto.kImgOld7_i = function () {
		var t = new eui.Image();
		this.kImgOld7 = t;
		t.source = "main_old7_png";
		t.x = 1007;
		t.y = 578;
		return t;
	};
	_proto.kImgOld3__i = function () {
		var t = new eui.Image();
		this.kImgOld3_ = t;
		t.source = "main_old3_png";
		t.x = 275;
		t.y = 642;
		return t;
	};
	_proto.kImgSetting5_i = function () {
		var t = new eui.Image();
		this.kImgSetting5 = t;
		t.source = "main_clean_png";
		t.x = 973;
		t.y = 451;
		return t;
	};
	_proto.kGrpPeople_i = function () {
		var t = new eui.Group();
		this.kGrpPeople = t;
		t.x = -500;
		t.y = 70;
		t.elementsContent = [this.kImgPeople_i(),this.kImgTips_i()];
		return t;
	};
	_proto.kImgPeople_i = function () {
		var t = new eui.Image();
		this.kImgPeople = t;
		t.source = "main_people_png";
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.anchorOffsetY = 168;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "main_tips_png";
		t.x = 353;
		t.y = 294;
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
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 242;
		t.anchorOffsetY = 54;
		t.horizontalCenter = 0;
		t.source = "main_swipe_png";
		t.visible = false;
		t.y = 486;
		return t;
	};
	_proto.kGrpContent_i = function () {
		var t = new eui.Group();
		this.kGrpContent = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.y = 560.94;
		t.elementsContent = [this._Image1_i(),this.kGrpMenu_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(50,45,109,86);
		t.source = "main_check_png";
		t.top = 0;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.left = 20;
		t.right = 20;
		t.top = 20;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.kGrpChoice1_i(),this.kGrpChoice2_i(),this.kGrpChoice3_i(),this.kGrpChoice4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 14;
		t.paddingBottom = 0;
		t.paddingLeft = 0;
		t.paddingRight = 0;
		t.paddingTop = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.kGrpChoice1_i = function () {
		var t = new eui.Group();
		this.kGrpChoice1 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 78;
		t.height = 156;
		t.width = 183;
		t.x = 92;
		t.y = 82;
		t.elementsContent = [this.kImgLine1_i(),this.kImgChoice1_i()];
		return t;
	};
	_proto.kImgLine1_i = function () {
		var t = new eui.Image();
		this.kImgLine1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_checked_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.horizontalCenter = 0;
		t.source = "main_tree1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpChoice2_i = function () {
		var t = new eui.Group();
		this.kGrpChoice2 = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 84;
		t.height = 156;
		t.width = 183;
		t.x = 291;
		t.y = 84;
		t.elementsContent = [this.kImgLine2_i(),this.kImgChoice2_i()];
		return t;
	};
	_proto.kImgLine2_i = function () {
		var t = new eui.Image();
		this.kImgLine2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_check_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.horizontalCenter = 0;
		t.source = "main_tree1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpChoice3_i = function () {
		var t = new eui.Group();
		this.kGrpChoice3 = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 80;
		t.height = 156;
		t.verticalCenter = 0.5;
		t.width = 183;
		t.x = 500;
		t.elementsContent = [this.kImgLine3_i(),this.kImgChoice3_i()];
		return t;
	};
	_proto.kImgLine3_i = function () {
		var t = new eui.Image();
		this.kImgLine3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_check_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgChoice3_i = function () {
		var t = new eui.Image();
		this.kImgChoice3 = t;
		t.horizontalCenter = 0;
		t.source = "main_tree1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpChoice4_i = function () {
		var t = new eui.Group();
		this.kGrpChoice4 = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 78;
		t.height = 156;
		t.verticalCenter = 0.5;
		t.width = 183;
		t.x = 697;
		t.elementsContent = [this.kImgLine4_i(),this.kImgChoice4_i()];
		return t;
	};
	_proto.kImgLine4_i = function () {
		var t = new eui.Image();
		this.kImgLine4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_check_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgChoice4_i = function () {
		var t = new eui.Image();
		this.kImgChoice4 = t;
		t.horizontalCenter = 0;
		t.source = "main_tree1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "main_guide_arrow_png";
		t.visible = false;
		t.x = 688;
		t.y = 360;
		return t;
	};
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.visible = false;
		t.elementsContent = [this._Rect2_i(),this.kImgEnd_i(),this.kBtnContinue_i(),this.kImgGuide_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgEnd_i = function () {
		var t = new eui.Image();
		this.kImgEnd = t;
		t.source = "main_end_png";
		t.x = 161;
		t.y = 70;
		return t;
	};
	_proto.kBtnContinue_i = function () {
		var t = new eui.Image();
		this.kBtnContinue = t;
		t.anchorOffsetX = 130.3;
		t.anchorOffsetY = 42.42;
		t.source = "main_continue_png";
		t.x = 929.45;
		t.y = 545.39;
		return t;
	};
	_proto.kImgGuide_i = function () {
		var t = new eui.Image();
		this.kImgGuide = t;
		t.source = "main_people_png";
		t.x = -366;
		t.y = 98;
		return t;
	};
	return MainViewSkin;
})(eui.Skin);