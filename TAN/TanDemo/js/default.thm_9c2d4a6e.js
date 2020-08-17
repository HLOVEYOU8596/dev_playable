
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/MainViewDevSkin.exml'] = window.MainViewDevSkin = (function (_super) {
	__extends(MainViewDevSkin, _super);
	function MainViewDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgBuild3","kGrpRoad","kImgBuild1","kImgBuild2","kGrpMap","kImgPeople1","kImgChoiceBg1","kImgChoice1","kGrpMenu1","kImgName1","kGrpPeople1","kImgPeople2","kImgChoiceBg2","kImgChoice2","kGrpMenu2","kImgName2","kGrpPeople2","kGrpAction","kGrpGuide","kImgLeft","kImgRight","kBtnSave","kBtnContinue","kGrpEnd","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
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
		t.visible = false;
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kGrpMap_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kGrpAction_i(),this.kGrpGuide_i(),this.kImgLeft_i(),this.kImgRight_i(),this.kGrpEnd_i()];
		return t;
	};
	_proto.kGrpMap_i = function () {
		var t = new eui.Group();
		this.kGrpMap = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpRoad_i(),this.kImgBuild1_i(),this.kImgBuild2_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kGrpRoad_i = function () {
		var t = new eui.Group();
		this.kGrpRoad = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.rotation = 180;
		t.scrollEnabled = true;
		t.width = 1280;
		t.elementsContent = [this.kImgBuild3_i()];
		return t;
	};
	_proto.kImgBuild3_i = function () {
		var t = new eui.Image();
		this.kImgBuild3 = t;
		t.rotation = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 1280;
		t.y = 359;
		return t;
	};
	_proto.kImgBuild1_i = function () {
		var t = new eui.Image();
		this.kImgBuild1 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 6;
		return t;
	};
	_proto.kImgBuild2_i = function () {
		var t = new eui.Image();
		this.kImgBuild2 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 397;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.bottom = 0;
		t.height = 477;
		t.visible = false;
		t.width = 484;
		t.elementsContent = [this.kImgPeople1_i(),this.kGrpMenu1_i(),this.kImgName1_i()];
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.anchorOffsetX = 168;
		t.anchorOffsetY = 252;
		t.source = "";
		t.x = 168;
		t.y = 252;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetY = 78;
		t.verticalCenter = 58.5;
		t.x = 328;
		t.elementsContent = [this.kImgChoiceBg1_i(),this.kImgChoice1_i()];
		return t;
	};
	_proto.kImgChoiceBg1_i = function () {
		var t = new eui.Image();
		this.kImgChoiceBg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 78;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.horizontalCenter = 0;
		t.name = "0";
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgName1_i = function () {
		var t = new eui.Image();
		this.kImgName1 = t;
		t.source = "";
		t.x = 341;
		t.y = 397;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 477;
		t.visible = false;
		t.width = 512;
		t.x = 765;
		t.elementsContent = [this.kImgPeople2_i(),this.kGrpMenu2_i(),this.kImgName2_i()];
		return t;
	};
	_proto.kImgPeople2_i = function () {
		var t = new eui.Image();
		this.kImgPeople2 = t;
		t.right = 0;
		t.source = "";
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 76;
		t.name = "1";
		t.x = 152;
		t.y = 294;
		t.elementsContent = [this.kImgChoiceBg2_i(),this.kImgChoice2_i()];
		return t;
	};
	_proto.kImgChoiceBg2_i = function () {
		var t = new eui.Image();
		this.kImgChoiceBg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 78;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.horizontalCenter = 0;
		t.name = "1";
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgName2_i = function () {
		var t = new eui.Image();
		this.kImgName2 = t;
		t.source = "";
		t.x = -13;
		t.y = 390;
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
	_proto.kImgLeft_i = function () {
		var t = new eui.Image();
		this.kImgLeft = t;
		t.source = "";
		t.visible = false;
		t.x = 496;
		t.y = 372.5;
		return t;
	};
	_proto.kImgRight_i = function () {
		var t = new eui.Image();
		this.kImgRight = t;
		t.source = "";
		t.visible = false;
		t.x = 693;
		t.y = 372.5;
		return t;
	};
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.76;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1286;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.kBtnSave_i(),this.kBtnContinue_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 224;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.kBtnSave_i = function () {
		var t = new eui.Image();
		this.kBtnSave = t;
		t.anchorOffsetX = 109.09;
		t.anchorOffsetY = 39.39;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.kBtnContinue_i = function () {
		var t = new eui.Image();
		this.kBtnContinue = t;
		t.anchorOffsetX = 109.09;
		t.anchorOffsetY = 36.36;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 493;
		return t;
	};
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgBuild3","kGrpRoad","kImgBuild1","kImgBuild2","kGrpMap","kImgPeople1","kImgChoiceBg1","kImgChoice1","kGrpMenu1","kImgName1","kGrpPeople1","kImgPeople2","kImgChoiceBg2","kImgChoice2","kGrpMenu2","kImgName2","kGrpPeople2","kGrpAction","kGrpGuide","kImgLeft","kImgRight","kBtnSave","kBtnContinue","kGrpEnd","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
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
		t.visible = false;
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kGrpMap_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kGrpAction_i(),this.kGrpGuide_i(),this.kImgLeft_i(),this.kImgRight_i(),this.kGrpEnd_i()];
		return t;
	};
	_proto.kGrpMap_i = function () {
		var t = new eui.Group();
		this.kGrpMap = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpRoad_i(),this.kImgBuild1_i(),this.kImgBuild2_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_bg1_png";
		t.top = 0;
		return t;
	};
	_proto.kGrpRoad_i = function () {
		var t = new eui.Group();
		this.kGrpRoad = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.rotation = 180;
		t.scrollEnabled = true;
		t.width = 1280;
		t.elementsContent = [this.kImgBuild3_i()];
		return t;
	};
	_proto.kImgBuild3_i = function () {
		var t = new eui.Image();
		this.kImgBuild3 = t;
		t.rotation = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_build5_png";
		t.x = 1280;
		t.y = 359;
		return t;
	};
	_proto.kImgBuild1_i = function () {
		var t = new eui.Image();
		this.kImgBuild1 = t;
		t.horizontalCenter = 0;
		t.source = "main_build1_png";
		t.y = 6;
		return t;
	};
	_proto.kImgBuild2_i = function () {
		var t = new eui.Image();
		this.kImgBuild2 = t;
		t.horizontalCenter = 0;
		t.source = "main_build3_png";
		t.y = 397;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.bottom = 0;
		t.height = 477;
		t.visible = false;
		t.width = 484;
		t.elementsContent = [this.kImgPeople1_i(),this.kGrpMenu1_i(),this.kImgName1_i()];
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.anchorOffsetX = 168;
		t.anchorOffsetY = 252;
		t.source = "main_daghter_png";
		t.x = 168;
		t.y = 252;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetY = 78;
		t.verticalCenter = 58.5;
		t.x = 328;
		t.elementsContent = [this.kImgChoiceBg1_i(),this.kImgChoice1_i()];
		return t;
	};
	_proto.kImgChoiceBg1_i = function () {
		var t = new eui.Image();
		this.kImgChoiceBg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 78;
		t.horizontalCenter = 0;
		t.source = "main_check_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.horizontalCenter = 0;
		t.name = "0";
		t.source = "main_a1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgName1_i = function () {
		var t = new eui.Image();
		this.kImgName1 = t;
		t.source = "main_lux1_png";
		t.x = 341;
		t.y = 397;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 477;
		t.visible = false;
		t.width = 512;
		t.x = 765;
		t.elementsContent = [this.kImgPeople2_i(),this.kGrpMenu2_i(),this.kImgName2_i()];
		return t;
	};
	_proto.kImgPeople2_i = function () {
		var t = new eui.Image();
		this.kImgPeople2 = t;
		t.right = 0;
		t.source = "main_grampa_png";
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 76;
		t.name = "1";
		t.x = 152;
		t.y = 294;
		t.elementsContent = [this.kImgChoiceBg2_i(),this.kImgChoice2_i()];
		return t;
	};
	_proto.kImgChoiceBg2_i = function () {
		var t = new eui.Image();
		this.kImgChoiceBg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 78;
		t.horizontalCenter = 0;
		t.source = "main_check_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.horizontalCenter = 0;
		t.name = "1";
		t.source = "main_a2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgName2_i = function () {
		var t = new eui.Image();
		this.kImgName2 = t;
		t.source = "main_lux2_png";
		t.x = -13;
		t.y = 390;
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
	_proto.kImgLeft_i = function () {
		var t = new eui.Image();
		this.kImgLeft = t;
		t.source = "main_left_png";
		t.visible = false;
		t.x = 496;
		t.y = 372.5;
		return t;
	};
	_proto.kImgRight_i = function () {
		var t = new eui.Image();
		this.kImgRight = t;
		t.source = "main_right_png";
		t.visible = false;
		t.x = 693;
		t.y = 372.5;
		return t;
	};
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 119.76;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1286;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.kBtnSave_i(),this.kBtnContinue_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 224;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.kBtnSave_i = function () {
		var t = new eui.Image();
		this.kBtnSave = t;
		t.anchorOffsetX = 109.09;
		t.anchorOffsetY = 39.39;
		t.source = "main_save_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.kBtnContinue_i = function () {
		var t = new eui.Image();
		this.kBtnContinue = t;
		t.anchorOffsetX = 109.09;
		t.anchorOffsetY = 36.36;
		t.source = "main_continue_png";
		t.verticalCenter = 0;
		t.x = 493;
		return t;
	};
	return MainViewSkin;
})(eui.Skin);