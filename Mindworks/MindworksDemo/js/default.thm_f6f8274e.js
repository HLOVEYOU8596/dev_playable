
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/MainViewDevSkin.exml'] = window.MainViewDevSkin = (function (_super) {
	__extends(MainViewDevSkin, _super);
	function MainViewDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgMenu1","kImgNum1","kGrpMenu1","kGrpPeople1","kImgMenu2","kImgNum2","kGrpMenu2","kGrpPeople2","kImgBg2","kGrpFood","kGrpAction","kGrpGuide","kImgSwipe","kGrpMain"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = MainViewDevSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xd84747;
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
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kImgBg2_i(),this.kGrpFood_i(),this.kGrpAction_i(),this.kGrpGuide_i(),this.kImgSwipe_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 325;
		t.width = 310;
		t.x = 50;
		t.y = 0;
		t.elementsContent = [this.kGrpMenu1_i()];
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetY = 78;
		t.verticalCenter = 0;
		t.x = 155;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgNum1_i()];
		return t;
	};
	_proto.kImgMenu1_i = function () {
		var t = new eui.Image();
		this.kImgMenu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 78;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.kImgNum1_i = function () {
		var t = new eui.Image();
		this.kImgNum1 = t;
		t.source = "";
		t.x = 69.32;
		t.y = 86.99;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 325;
		t.width = 310;
		t.x = 360;
		t.y = 0;
		t.elementsContent = [this.kGrpMenu2_i()];
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetY = 78;
		t.verticalCenter = 0;
		t.x = 155;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgNum2_i()];
		return t;
	};
	_proto.kImgMenu2_i = function () {
		var t = new eui.Image();
		this.kImgMenu2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 78;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.kImgNum2_i = function () {
		var t = new eui.Image();
		this.kImgNum2 = t;
		t.source = "";
		t.x = 69.32;
		t.y = 86.99;
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	_proto.kGrpFood_i = function () {
		var t = new eui.Group();
		this.kGrpFood = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
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
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 175.76;
		t.anchorOffsetY = 39.39;
		t.source = "";
		t.visible = false;
		t.x = 242;
		t.y = 628.39;
		return t;
	};
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgMenu1","kImgNum1","kGrpMenu1","kGrpPeople1","kImgMenu2","kImgNum2","kGrpMenu2","kGrpPeople2","kImgBg2","kGrpFood","kGrpAction","kGrpGuide","kImgSwipe","kGrpMain"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = MainViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xd84747;
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
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kImgBg2_i(),this.kGrpFood_i(),this.kGrpAction_i(),this.kGrpGuide_i(),this.kImgSwipe_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.horizontalCenter = 0;
		t.source = "main_bg1_png";
		t.top = 0;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 325;
		t.width = 310;
		t.x = 50;
		t.y = 0;
		t.elementsContent = [this.kGrpMenu1_i()];
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetY = 78;
		t.verticalCenter = 0;
		t.x = 155;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgNum1_i()];
		return t;
	};
	_proto.kImgMenu1_i = function () {
		var t = new eui.Image();
		this.kImgMenu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 78;
		t.source = "main_menu_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.kImgNum1_i = function () {
		var t = new eui.Image();
		this.kImgNum1 = t;
		t.source = "main_x4_png";
		t.x = 69.32;
		t.y = 86.99;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 325;
		t.width = 310;
		t.x = 360;
		t.y = 0;
		t.elementsContent = [this.kGrpMenu2_i()];
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetY = 78;
		t.verticalCenter = 0;
		t.x = 155;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgNum2_i()];
		return t;
	};
	_proto.kImgMenu2_i = function () {
		var t = new eui.Image();
		this.kImgMenu2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 78;
		t.source = "main_menu_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.kImgNum2_i = function () {
		var t = new eui.Image();
		this.kImgNum2 = t;
		t.source = "main_x4_png";
		t.x = 69.32;
		t.y = 86.99;
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "main_bg2_png";
		return t;
	};
	_proto.kGrpFood_i = function () {
		var t = new eui.Group();
		this.kGrpFood = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = false;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
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
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 175.76;
		t.anchorOffsetY = 39.39;
		t.source = "main_swipe_png";
		t.visible = false;
		t.x = 242;
		t.y = 628.39;
		return t;
	};
	return MainViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PancakeSkin.exml'] = window.PancakeSkin = (function (_super) {
	__extends(PancakeSkin, _super);
	function PancakeSkin() {
		_super.call(this);
		this.skinParts = ["kImgPancake1","kImgPancake2","kImgPancake3","kImgPancake4"];
		
		this.height = 260;
		this.width = 290;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgPancake2","visible",false),
					new eui.SetProperty("kImgPancake3","visible",false),
					new eui.SetProperty("kImgPancake4","visible",false)
				])
		];
	}
	var _proto = PancakeSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgPancake1_i(),this.kImgPancake2_i(),this.kImgPancake3_i(),this.kImgPancake4_i()];
		return t;
	};
	_proto.kImgPancake1_i = function () {
		var t = new eui.Image();
		this.kImgPancake1 = t;
		t.anchorOffsetX = 115;
		t.anchorOffsetY = 103;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 171;
		return t;
	};
	_proto.kImgPancake2_i = function () {
		var t = new eui.Image();
		this.kImgPancake2 = t;
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 102;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 160.5;
		return t;
	};
	_proto.kImgPancake3_i = function () {
		var t = new eui.Image();
		this.kImgPancake3 = t;
		t.anchorOffsetX = 144;
		t.anchorOffsetY = 50;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 195;
		return t;
	};
	_proto.kImgPancake4_i = function () {
		var t = new eui.Image();
		this.kImgPancake4 = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 43;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 61.5;
		return t;
	};
	return PancakeSkin;
})(eui.Skin);