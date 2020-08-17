
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
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgOrder1","kImgOrder2","kImgRight1","kImgRight2","kGrpMenu1","kGrpPeople1","kImgbg2","kGrpBg","kGrpAction","kImgFood10","kImgFood11","kImgFood12","kImgFood13","kImgFood9","kImgFood1","kImgFood5","kImgFood6","kImgFood7","kImgFood8","kImgFood4","kImgFood3","kImgFood2","kImgError","kGrpMenu","kGrpSnow","kImgSwipe","kGrpGuide","kImgHand","kImgRect","kImgChoice1","kImgChoice2","kGrpChoice","kGrpMain"];
		
		this.height = 1280;
		this.width = 720;
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
		t.height = 1280;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.kGrpBg_i(),this.kGrpAction_i(),this.kGrpMenu_i(),this.kGrpSnow_i(),this.kImgSwipe_i(),this.kGrpGuide_i(),this.kImgHand_i(),this.kImgRect_i(),this.kGrpChoice_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kImgbg2_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 0;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.anchorOffsetY = 0;
		t.height = 291;
		t.x = 100;
		t.y = 80;
		t.elementsContent = [this.kImgPeople1_i(),this.kGrpMenu1_i()];
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 1;
		t.anchorOffsetY = 194.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 244;
		t.y = 194.36;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder1_i(),this.kImgOrder2_i(),this.kImgRight1_i(),this.kImgRight2_i()];
		return t;
	};
	_proto.kImgMenu1_i = function () {
		var t = new eui.Image();
		this.kImgMenu1 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 60;
		t.horizontalCenter = -34.5;
		t.source = "";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.anchorOffsetX = 43;
		t.anchorOffsetY = 40;
		t.horizontalCenter = 85;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgRight1_i = function () {
		var t = new eui.Image();
		this.kImgRight1 = t;
		t.horizontalCenter = -32;
		t.source = "";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgRight2_i = function () {
		var t = new eui.Image();
		this.kImgRight2 = t;
		t.horizontalCenter = 100;
		t.source = "";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgbg2_i = function () {
		var t = new eui.Image();
		this.kImgbg2 = t;
		t.bottom = 0;
		t.source = "";
		t.x = 0;
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
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgFood10_i(),this.kImgFood11_i(),this.kImgFood12_i(),this.kImgFood13_i(),this.kImgFood9_i(),this.kImgFood1_i(),this.kImgFood5_i(),this.kImgFood6_i(),this.kImgFood7_i(),this.kImgFood8_i(),this.kImgFood4_i(),this.kImgFood3_i(),this.kImgFood2_i(),this.kImgError_i()];
		return t;
	};
	_proto.kImgFood10_i = function () {
		var t = new eui.Image();
		this.kImgFood10 = t;
		t.anchorOffsetX = 51.52;
		t.anchorOffsetY = 72.73;
		t.name = "10";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 686.67;
		t.y = 577.36;
		return t;
	};
	_proto.kImgFood11_i = function () {
		var t = new eui.Image();
		this.kImgFood11 = t;
		t.anchorOffsetX = 90.91;
		t.anchorOffsetY = 90.91;
		t.name = "11";
		t.source = "";
		t.x = 451.88;
		t.y = 812.18;
		return t;
	};
	_proto.kImgFood12_i = function () {
		var t = new eui.Image();
		this.kImgFood12 = t;
		t.anchorOffsetX = 87.88;
		t.anchorOffsetY = 81.82;
		t.name = "12";
		t.source = "";
		t.x = 100.23;
		t.y = 807.12;
		return t;
	};
	_proto.kImgFood13_i = function () {
		var t = new eui.Image();
		this.kImgFood13 = t;
		t.anchorOffsetX = 96.85;
		t.anchorOffsetY = 69.58;
		t.name = "13";
		t.source = "";
		t.x = 388.64;
		t.y = 949;
		return t;
	};
	_proto.kImgFood9_i = function () {
		var t = new eui.Image();
		this.kImgFood9 = t;
		t.anchorOffsetX = 97.03;
		t.anchorOffsetY = 125.03;
		t.name = "9";
		t.source = "";
		t.x = 626.15;
		t.y = 792.44;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 111;
		t.name = "1";
		t.source = "";
		t.x = 284;
		t.y = 818;
		return t;
	};
	_proto.kImgFood5_i = function () {
		var t = new eui.Image();
		this.kImgFood5 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 109;
		t.name = "5";
		t.source = "";
		t.x = 134;
		t.y = 958;
		return t;
	};
	_proto.kImgFood6_i = function () {
		var t = new eui.Image();
		this.kImgFood6 = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 83;
		t.name = "6";
		t.source = "";
		t.x = 256;
		t.y = 1117;
		return t;
	};
	_proto.kImgFood7_i = function () {
		var t = new eui.Image();
		this.kImgFood7 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 54;
		t.name = "2";
		t.source = "";
		t.visible = false;
		t.x = 408.73;
		t.y = 391.91;
		return t;
	};
	_proto.kImgFood8_i = function () {
		var t = new eui.Image();
		this.kImgFood8 = t;
		t.anchorOffsetX = 73.75;
		t.anchorOffsetY = 75.64;
		t.name = "8";
		t.source = "";
		t.x = 92.27;
		t.y = 1114.64;
		return t;
	};
	_proto.kImgFood4_i = function () {
		var t = new eui.Image();
		this.kImgFood4 = t;
		t.anchorOffsetX = 53;
		t.anchorOffsetY = 65;
		t.name = "4";
		t.source = "";
		t.x = 443;
		t.y = 1126.94;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.anchorOffsetX = 112;
		t.anchorOffsetY = 116;
		t.name = "3";
		t.source = "";
		t.x = 618;
		t.y = 961;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.anchorOffsetX = 74.27;
		t.anchorOffsetY = 76.18;
		t.name = "2";
		t.source = "";
		t.x = 620.27;
		t.y = 1130.18;
		return t;
	};
	_proto.kImgError_i = function () {
		var t = new eui.Image();
		this.kImgError = t;
		t.anchorOffsetX = 172.73;
		t.anchorOffsetY = 172.73;
		t.source = "";
		t.visible = false;
		t.x = 336.73;
		t.y = 360.73;
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
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "";
		t.visible = false;
		t.x = 126.48;
		t.y = 175.45;
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
	_proto.kGrpChoice_i = function () {
		var t = new eui.Group();
		this.kGrpChoice = t;
		t.anchorOffsetX = 359.07;
		t.anchorOffsetY = 93.52;
		t.left = 0;
		t.right = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.kImgChoice1_i(),this.kImgChoice2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 148;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.anchorOffsetX = 86.25;
		t.anchorOffsetY = 89.64;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 86.25;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.anchorOffsetX = 95.23;
		t.anchorOffsetY = 95.48;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 528.23;
		return t;
	};
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgOrder1","kImgOrder2","kImgRight1","kImgRight2","kGrpMenu1","kGrpPeople1","kImgbg2","kGrpBg","kGrpAction","kImgFood10","kImgFood11","kImgFood12","kImgFood13","kImgFood9","kImgFood1","kImgFood5","kImgFood6","kImgFood7","kImgFood8","kImgFood4","kImgFood3","kImgFood2","kImgError","kGrpMenu","kGrpSnow","kImgSwipe","kGrpGuide","kImgHand","kImgRect","kImgChoice1","kImgChoice2","kGrpChoice","kGrpMain"];
		
		this.height = 1280;
		this.width = 720;
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
		t.height = 1280;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.kGrpBg_i(),this.kGrpAction_i(),this.kGrpMenu_i(),this.kGrpSnow_i(),this.kImgSwipe_i(),this.kGrpGuide_i(),this.kImgHand_i(),this.kImgRect_i(),this.kGrpChoice_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kImgbg2_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.horizontalCenter = 0;
		t.source = "main_bg1_png";
		t.y = 0;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.anchorOffsetY = 0;
		t.height = 291;
		t.x = 100;
		t.y = 80;
		t.elementsContent = [this.kImgPeople1_i(),this.kGrpMenu1_i()];
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 1;
		t.anchorOffsetY = 194.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 244;
		t.y = 194.36;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder1_i(),this.kImgOrder2_i(),this.kImgRight1_i(),this.kImgRight2_i()];
		return t;
	};
	_proto.kImgMenu1_i = function () {
		var t = new eui.Image();
		this.kImgMenu1 = t;
		t.source = "main_menu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 60;
		t.horizontalCenter = -34.5;
		t.source = "main_order1_png";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.anchorOffsetX = 43;
		t.anchorOffsetY = 40;
		t.horizontalCenter = 85;
		t.source = "main_order2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgRight1_i = function () {
		var t = new eui.Image();
		this.kImgRight1 = t;
		t.horizontalCenter = -32;
		t.source = "main_right_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgRight2_i = function () {
		var t = new eui.Image();
		this.kImgRight2 = t;
		t.horizontalCenter = 100;
		t.source = "main_right_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgbg2_i = function () {
		var t = new eui.Image();
		this.kImgbg2 = t;
		t.bottom = 0;
		t.source = "main_bg2_png";
		t.x = 0;
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
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgFood10_i(),this.kImgFood11_i(),this.kImgFood12_i(),this.kImgFood13_i(),this.kImgFood9_i(),this.kImgFood1_i(),this.kImgFood5_i(),this.kImgFood6_i(),this.kImgFood7_i(),this.kImgFood8_i(),this.kImgFood4_i(),this.kImgFood3_i(),this.kImgFood2_i(),this.kImgError_i()];
		return t;
	};
	_proto.kImgFood10_i = function () {
		var t = new eui.Image();
		this.kImgFood10 = t;
		t.anchorOffsetX = 51.52;
		t.anchorOffsetY = 72.73;
		t.name = "10";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_zhi_png";
		t.x = 686.67;
		t.y = 577.36;
		return t;
	};
	_proto.kImgFood11_i = function () {
		var t = new eui.Image();
		this.kImgFood11 = t;
		t.anchorOffsetX = 90.91;
		t.anchorOffsetY = 90.91;
		t.name = "11";
		t.source = "main_sanwich_png";
		t.x = 451.88;
		t.y = 812.18;
		return t;
	};
	_proto.kImgFood12_i = function () {
		var t = new eui.Image();
		this.kImgFood12 = t;
		t.anchorOffsetX = 87.88;
		t.anchorOffsetY = 81.82;
		t.name = "12";
		t.source = "main_pancake_png";
		t.x = 100.23;
		t.y = 807.12;
		return t;
	};
	_proto.kImgFood13_i = function () {
		var t = new eui.Image();
		this.kImgFood13 = t;
		t.anchorOffsetX = 96.85;
		t.anchorOffsetY = 69.58;
		t.name = "13";
		t.source = "main_fish_png";
		t.x = 388.64;
		t.y = 949;
		return t;
	};
	_proto.kImgFood9_i = function () {
		var t = new eui.Image();
		this.kImgFood9 = t;
		t.anchorOffsetX = 97.03;
		t.anchorOffsetY = 125.03;
		t.name = "9";
		t.source = "main_soup_png";
		t.x = 626.15;
		t.y = 792.44;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 111;
		t.name = "1";
		t.source = "main_ham_png";
		t.x = 284;
		t.y = 818;
		return t;
	};
	_proto.kImgFood5_i = function () {
		var t = new eui.Image();
		this.kImgFood5 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 109;
		t.name = "5";
		t.source = "main_chicken_png";
		t.x = 134;
		t.y = 958;
		return t;
	};
	_proto.kImgFood6_i = function () {
		var t = new eui.Image();
		this.kImgFood6 = t;
		t.anchorOffsetX = 65;
		t.anchorOffsetY = 83;
		t.name = "6";
		t.source = "main_coke_png";
		t.x = 256;
		t.y = 1117;
		return t;
	};
	_proto.kImgFood7_i = function () {
		var t = new eui.Image();
		this.kImgFood7 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 54;
		t.name = "2";
		t.source = "main_shu_png";
		t.visible = false;
		t.x = 408.73;
		t.y = 391.91;
		return t;
	};
	_proto.kImgFood8_i = function () {
		var t = new eui.Image();
		this.kImgFood8 = t;
		t.anchorOffsetX = 73.75;
		t.anchorOffsetY = 75.64;
		t.name = "8";
		t.source = "main_juice_png";
		t.x = 92.27;
		t.y = 1114.64;
		return t;
	};
	_proto.kImgFood4_i = function () {
		var t = new eui.Image();
		this.kImgFood4 = t;
		t.anchorOffsetX = 53;
		t.anchorOffsetY = 65;
		t.name = "4";
		t.source = "main_wine_png";
		t.x = 443;
		t.y = 1126.94;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.anchorOffsetX = 112;
		t.anchorOffsetY = 116;
		t.name = "3";
		t.source = "main_shousi_png";
		t.x = 618;
		t.y = 961;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.anchorOffsetX = 74.27;
		t.anchorOffsetY = 76.18;
		t.name = "2";
		t.source = "main_shu_png";
		t.x = 620.27;
		t.y = 1130.18;
		return t;
	};
	_proto.kImgError_i = function () {
		var t = new eui.Image();
		this.kImgError = t;
		t.anchorOffsetX = 172.73;
		t.anchorOffsetY = 172.73;
		t.source = "main_error_png";
		t.visible = false;
		t.x = 336.73;
		t.y = 360.73;
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
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "main_guide_arrow_png";
		t.visible = false;
		t.x = 126.48;
		t.y = 175.45;
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
	_proto.kGrpChoice_i = function () {
		var t = new eui.Group();
		this.kGrpChoice = t;
		t.anchorOffsetX = 359.07;
		t.anchorOffsetY = 93.52;
		t.left = 0;
		t.right = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.kImgChoice1_i(),this.kImgChoice2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 148;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.anchorOffsetX = 86.25;
		t.anchorOffsetY = 89.64;
		t.source = "main_continue_png";
		t.verticalCenter = 0;
		t.x = 86.25;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.anchorOffsetX = 95.23;
		t.anchorOffsetY = 95.48;
		t.source = "main_skip_png";
		t.verticalCenter = 0;
		t.x = 528.23;
		return t;
	};
	return MainViewSkin;
})(eui.Skin);