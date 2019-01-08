(function (C) {
    jQuery.extend({
        ht_getcookie: function (W) {
            var k = document.cookie.indexOf(W);
            var i = document.cookie.indexOf(";", k);
            return k == -1 ? "" : unescape(document.cookie.substring(k + W.length + 1, (i > k ? i : document.cookie.length)))
        }, ht_setcookie: function (aa, Z, Y, X, k, W) {
            var i = new Date();
            i.setTime(i.getTime() + Y * 1000);
            document.cookie = escape(aa) + "=" + escape(Z) + (i ? "; expires=" + i.toGMTString() : "") + (X ? "; path=" + X : "; path=/") + (k ? "; domain=" + k : "") + (W ? "; secure" : "")
        }, textFocus: function (W) {
            var k, i, W = W === undefined ? 0 : parseInt(W);
            this.each(function () {
                if (!this.setSelectionRange) {
                    k = this.createTextRange();
                    W === 0 ? k.collapse(false) : k.move("character", W);
                    k.select()
                } else {
                    i = this.value.length;
                    W === 0 ? this.setSelectionRange(i, i) : this.setSelectionRange(W, W)
                }
                this.focus()
            });
            return this
        }
    });
    var w = [];
    var D = [];
    var E = [];
    var G = [];
    var v = 0;
    var y = 0;
    var A = 0;
    var S = 0;
    var U = false;
    var g = false;
    var H = false;
    var z = 0;
    var I = null;
    var m = -1;
    var N = {};
    var f = [];
    var e = [];
    var d = [];
    var b = [];
    var V = [];
    var F = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    var j = [];
    var x = false;
    var c = [];
    for (var R = 0; R < 26; R++) {
        c[R] = []
    }
    var P = [];
    for (var T = 0; T < 5; T++) {
        P[T] = []
    }
    var t = [];
    var s = [];
    var q = [];
    var p = [];
    var o = [];
    var K = [];
    var a = false;
    var L = true;
    var u = 12;
    var h = "简码/汉字";
    var n = "简码/汉字";
    var r = "inp-txt_select";
    var l = "inp-txt";
    var B = false;
    var J = null;
    var Q = null;
    var M = false;
    var O = C.ht_getcookie("hj_favcity");
    C.stationFor12306 = {
        bindInputs: [], get_initInputValue: function () {
            return h
        }, get_initTopInputValue: function () {
            return n
        }, city_Bind: function (k) {
            if (k.length == 0) {
                return
            }
            var i = "";
            C.each(k, function (W) {
                if (O == k[W][2]) {
                    i += "<div class='cityline' id='citem_" + W + "' cturn='" + k[W][6] + "'><span class='ralign'><b>" + k[W][1] + "</b></span></div>\n"
                } else {
                    i += "<div class='cityline' id='citem_" + W + "' cturn='" + k[W][6] + "'><span class='ralign'>" + k[W][1] + "</span><span style='float:right;' class='ralign'>" + k[W][3] + "</span></div>\n"
                }
            });
            C("#panel_cities").html(i);
            C(".cityline").mouseover(function () {
                C.stationFor12306.city_shiftSelect(this)
            }).click(function () {
                C.stationFor12306.city_confirmSelect();
                E = C.stationFor12306.filterCity("");
                C.stationFor12306.city_showlist(0)
            });
            C.stationFor12306.city_shiftSelect(C("#citem_0"))
        }, city_changeSelectIndex: function (i) {
            var k = A + i;
            if (k == -1) {
                C.stationFor12306.city_showlist(z - 1);
                C.stationFor12306.city_shiftSelect(C("#citem_" + (G.length - 1)))
            } else {
                if (k == G.length) {
                    C.stationFor12306.city_showlist(z + 1);
                    C.stationFor12306.city_shiftSelect(C("#citem_0"))
                } else {
                    C.stationFor12306.city_shiftSelect(C("#citem_" + k))
                }
            }
        }, city_confirmSelect: function () {
            I.val(S[1]);
            curObjCode.val(S[2]);
            if (B) {
                C.stationFor12306.setStationInCookies(S[1], S[2])
            }
            C("#form_cities").css("display", "none");
            C("#form_cities2").css("display", "none");
            C("#form_cities3").css("display", "none");
            m = -1;
            y = 0;
            C.stationFor12306.setStationStyle();
            if (L) {
                C.stationFor12306.LoadJS(S[2])
            }
            if (J) {
                J(I, curObjCode)
            }
        }, city_shiftSelect: function (k) {
            if (v != k) {
                if (v != 0) {
                    C(v).removeClass("citylineover").addClass("cityline").css("backgroundColor", "white")
                }
                if (k != 0) {
                    try {
                        v = k;
                        var i = C(v).removeClass("cityline").addClass("citylineover").css("backgroundColor", "#c8e3fc");
                        A = Number(i.attr("id").split("_")[1]);
                        S = w[Number(i.attr("cturn"))];
                        C("#cityid").val(S[2])
                    } catch (W) {
                    }
                }
            }
        }, city_shiftSelectInLi: function (i) {
            if (y != i) {
                if (y != 0) {
                    C(y).removeClass("ac_over").addClass("ac_odd")
                }
                if (i != 0) {
                    try {
                        y = i;
                        C(y).removeClass("ac_odd").addClass("ac_over")
                    } catch (k) {
                    }
                }
            }
        }, js: function (W) {
            var k;
            for (k = 1; k <= 7; k++) {
                if (C("#nav_list" + k).attr("class")) {
                    C("#ul_list" + k).css("display", "none");
                    C("#nav_list" + k).removeClass("action")
                }
            }
            for (k = 1; k <= 7; k++) {
                if (k == W) {
                    C("#ul_list" + k).css("display", "block");
                    C("#nav_list" + k).addClass("action");
                    if (k == 1 || k == 7) {
                        C("#flip_cities2").css("display", "none")
                    }
                    if (k > 1 && k < 7) {
                        var Y = C.stationFor12306.tHtmlGetCityName(W - 1, -1, 0);
                        if (Y > u) {
                            var X = Math.ceil(Y / u);
                            if (X > 1) {
                                C.stationFor12306.pageDesigh(X, 0, k)
                            }
                            C("#flip_cities2").css("display", "block")
                        } else {
                            C("#flip_cities2").css("display", "none")
                        }
                    } else {
                        I.focus()
                    }
                } else {
                    C("#ul_list" + k).css("display", "none");
                    C("#nav_list" + k).removeClass("action")
                }
            }
            if (1 != W) {
                C(".ac_even").on("mouseover", function () {
                    C.stationFor12306.city_shiftSelectInLi(this)
                }).on("click", function () {
                    I.val(C(this).text());
                    curObjCode.val(C(this).attr("data"));
                    if (B) {
                        C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
                    }
                    C("#form_cities2").css("display", "none");
                    m = -1;
                    y = 0;
                    C.stationFor12306.setStationStyle();
                    if (L) {
                        C.stationFor12306.LoadJS(C(this).attr("data"))
                    }
                    if (J) {
                        J(I, curObjCode)
                    }
                })
            }
        }, tHtmlGetCityName: function (k, i, X) {
            switch (k) {
                case 0:
                    if (i == -1) {
                        return D.length
                    }
                    if (i == -2) {
                        return D
                    }
                    return D[i];
                    break;
                case 1:
                    if (i == -1) {
                        return c[3].length
                    }
                    if (i == -2) {
                        return f
                    }
                    if (f.length > u) {
                        var W = Math.ceil((f.length) / u);
                        if (W > 1) {
                            t = f.slice(u * (X), Math.min(u * (X + 1), f.length));
                            return t[i]
                        }
                    }
                    return f[i];
                    break;
                case 2:
                    if (i == -1) {
                        return c[7].length
                    }
                    if (i == -2) {
                        return e
                    }
                    if (e.length > u) {
                        var W = Math.ceil((e.length) / u);
                        if (W > 1) {
                            s = e.slice(u * (X), Math.min(u * (X + 1), e.length));
                            return s[i]
                        }
                    }
                    return e[i];
                    break;
                case 3:
                    if (i == -1) {
                        return c[11].length
                    }
                    if (i == -2) {
                        return d
                    }
                    if (d.length > u) {
                        var W = Math.ceil((d.length) / u);
                        if (W > 1) {
                            q = d.slice(u * (X), Math.min(u * (X + 1), d.length));
                            return q[i]
                        }
                    }
                    return d[i];
                    break;
                case 4:
                    if (i == -1) {
                        return c[18].length
                    }
                    if (i == -2) {
                        return b
                    }
                    if (b.length > u) {
                        var W = Math.ceil((b.length) / u);
                        if (W > 1) {
                            p = b.slice(u * (X), Math.min(u * (X + 1), b.length));
                            return p[i]
                        }
                    }
                    return b[i];
                    break;
                case 5:
                    if (i == -1) {
                        return c[24].length
                    }
                    if (i == -2) {
                        return V
                    }
                    if (V.length > u) {
                        var W = Math.ceil((V.length) / u);
                        if (W > 1) {
                            o = V.slice(u * (X), Math.min(u * (X + 1), V.length));
                            return o[i]
                        }
                    }
                    return V[i];
                    break;
                default:
                    return "error";
                    break
            }
        }, closeShowCity: function () {
            C("#form_cities2").css("display", "none");
            m = -1;
            y = 0;
            C.each(C.stationFor12306.bindInputs, function (Y, X) {
                var W = "#" + X;
                var k = "#" + X + "Text";
                var i = C(k).val();
                if ("" == i) {
                    C(k).val(h);
                    C.stationFor12306.from_to_station_class_gray(C(k));
                    C(W).val("")
                }
            })
        }, showAllCity: function () {
            var ab = "";
            var k = "440px";
            if (B) {
                k = "400px"
            }
            ab = '<div class="com_hotresults" id="thetable" style="width:' + k + '"><div style="width:100%;"><div class="ac_title"><span>拼音支持首字母输入</span><a class="ac_close" style="cursor:pointer" title="关闭" onclick="$.stationFor12306.closeShowCity()"></a></div><ul class="AbcSearch clx" id="abc">';
            if (B) {
                ab = ab + '<li class="action" index="7" method="liHotTab"  onclick="$.stationFor12306.js(7)" id="nav_list7">常用</li>'
            }
            ab = ab + '<li index="1" method="liHotTab"  onclick="$.stationFor12306.js(1)" id="nav_list1">热门</li><li index="2" method="liHotTab"  onclick="$.stationFor12306.js(2)" id="nav_list2">ABCDE</li><li index="3" method="liHotTab"  onclick="$.stationFor12306.js(3)" id="nav_list3">FGHIJ</li><li index="4" method="liHotTab"  onclick="$.stationFor12306.js(4)" id="nav_list4">KLMNO</li><li index="5" method="liHotTab"  onclick="$.stationFor12306.js(5)" id="nav_list5">PQRST</li><li index="6" method="liHotTab"  onclick="$.stationFor12306.js(6)" id="nav_list6">UVWXYZ</li></ul>';
            if (B) {
                ab += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;" method="hotData" id="ul_list7">';
                var ac = C.stationFor12306.getStationInCookies();
                var Y = ac.length;
                if (Y > 2) {
                    M = true;
                    for (var ad = 0; ad < Y; ad++) {
                        ab += '<li class="ac_even"   title="' + ac[ad][0] + '" data="' + ac[ad][1] + '">' + ac[ad][0] + "</li>"
                    }
                }
                ab += "</ul>"
            }
            ab += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;display:none;" method="hotData" id="ul_list1">';
            var X = C.stationFor12306.tHtmlGetCityName(0, -1, 0);
            var aa = "";
            if (!B) {
                aa = " openLi"
            }
            for (var ad = 0; ad < X; ad++) {
                ab += '<li class="ac_even' + aa + '"   title="' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[1] + '" data="' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[2] + '">' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[1] + "</li>"
            }
            ab += "</ul>";
            for (var ae = 2; ae <= 6; ae++) {
                var Z = ae - 1;
                var i = C.stationFor12306.tHtmlGetCityName(Z, -1, 0);
                if (i > u) {
                    var W = Math.ceil((i) / u);
                    if (W > 1) {
                        ab += '<div id="ul_list' + ae + '">';
                        C.stationFor12306.pageDesigh(W, 0, ae)
                    }
                    C("#flip_cities2").css("display", "block")
                } else {
                    ab += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; height: 191px;display:none;" id="ul_list' + ae + '">';
                    C("#flip_cities2").css("display", "none");
                    var aa = "";
                    if (!B) {
                        aa = " openLi"
                    }
                    for (var ad = 0; ad < C.stationFor12306.tHtmlGetCityName(Z, -1, 0); ad++) {
                        ab += '<li class="ac_even' + aa + '"   title="' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[1] + '" data="' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[2] + '">' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[1] + "</li>"
                    }
                }
                ab += "</div>"
            }
            ab += '<div id="flip_cities2"> 翻页控制区</div>';
            ab += "</div>";
            C("#panel_cities2").html(ab);
            C("#thetable").on("click", function () {
                if (C("#form_cities2").css("display") == "block") {
                    if (m == 1 | m == 0) {
                        m == -1
                    }
                    I.select()
                }
            });
            C("#form_cities").on("click", function () {
                if (C("#form_cities").css("display") == "block") {
                    if (m == 1 | m == 0) {
                        m == -1
                    }
                    I.select()
                }
            });
            C(".ac_even").on("mouseover", function () {
                C.stationFor12306.city_shiftSelectInLi(this)
            }).on("click", function () {
                I.val(C(this).text());
                curObjCode.val(C(this).attr("data"));
                if (B) {
                    C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
                }
                C("#form_cities2").css("display", "none");
                m = -1;
                y = 0;
                C.stationFor12306.setStationStyle();
                if (L) {
                    C.stationFor12306.LoadJS(C(this).attr("data"))
                }
                if (J) {
                    J(I, curObjCode)
                }
            });
            C("#flip_cities2").css("display", "none");
            return w
        }, LoadJS: function (W) {
            if (((typeof(mm_addjs) != "undefined")) && ("" != mm_addjs) && (mm_addjs == 1)) {
                var k = document.getElementsByTagName("HEAD").item(0);
                var i = document.createElement("SCRIPT");
                i.src = mm_srcjs + W + ".js";
                i.type = "text/javascript";
                k.appendChild(i)
            }
        }, addZMHtml: function (X, Y) {
            var W = "";
            if (X && X.length > 0) {
                var Z = X[0][0].charAt(0);
                W += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; " >';
                W += '<li class="ac_letter">' + Z.toUpperCase() + "</li>";
                for (var i = 0; i < 12; i++) {
                    var k = X[i];
                    if (k) {
                        W += '<li class="ac_even' + Y + '"   title="' + k[1] + '" data="' + k[2] + '">' + k[1] + "</li>"
                    } else {
                        W += '<li class="ac_even' + Y + '" </li>'
                    }
                }
                W += "</ul>"
            }
            return W
        }, pageDesigh: function (Z, ac, ad) {
            var W = "";
            if (Z > 1) {
                if (ac == -1) {
                    ac = (Z - 1)
                } else {
                    if (ac == Z) {
                        ac = 0
                    }
                }
                var ab = "";
                if (!B) {
                    ab = " openLi"
                }
                for (var X = 2; X <= 6; X++) {
                    if (X == ad) {
                        var aa = P[X - 2];
                        for (var i = 0; i < aa.length; i++) {
                            K = aa[i].slice(ac * u, (ac + 1) * u);
                            W += C.stationFor12306.addZMHtml(K, ab)
                        }
                    }
                }
                C("#ul_list" + ad).html(W);
                C("#ul_list" + ad).css("height", 270);
                if (W) {
                    var Y = (ac == 0) ? "&laquo;&nbsp;上一页" : "<a style='cursor:pointer'    class='cityflip' onclick='$.stationFor12306.pageDesigh(" + Z + "," + (ac - 1) + "," + ad + ");return false;'>&laquo;&nbsp;上一页</a>";
                    Y += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;";
                    Y += (ac == Z - 1) ? "下一页&nbsp;&raquo;" : "<a style='cursor:pointer' class='cityflip'  onclick='$.stationFor12306.pageDesigh(" + Z + "," + (ac + 1) + "," + ad + ")'>下一页&nbsp;&raquo;</a>";
                    C("#flip_cities2").html(Y)
                } else {
                    C("#flip_cities2").html("")
                }
                if (m == 1 | m == 0 | m == 2) {
                    m == -1
                }
                if (I) {
                    I.select()
                }
            } else {
            }
            C(".ac_even").on("mouseover", function () {
                C.stationFor12306.city_shiftSelectInLi(this)
            }).on("click", function () {
                I.val(C(this).text());
                curObjCode.val(C(this).attr("data"));
                if (B) {
                    C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
                }
                C("#form_cities2").css("display", "none");
                m = -1;
                y = 0;
                C.stationFor12306.setStationStyle();
                if (L) {
                    C.stationFor12306.LoadJS(C(this).attr("data"))
                }
                if (J) {
                    J(I, curObjCode)
                }
            })
        }, filterCity: function (Z) {
            if (Z.length == 0) {
                C("#top_cities").html(n);
                return w
            }
            var Y = /<\/?[^>]*>/g;
            Z = Z.replace(Y, "");
            var W = [];
            var k = /[^A-z]/.test(Z);
            for (var X = 0; X < w.length; X++) {
                if (C.stationFor12306.isMatchCity(w[X], Z, k)) {
                    W.push(w[X])
                }
            }
            if (W.length > 0) {
                C("#top_cities").html('按"<font color=red>' + Z + '</font>"检索：');
                return W
            } else {
                C("#top_cities").html("无法匹配:<font color=red>" + Z + "</font>");
                return []
            }
        }, replaceChar: function (i, W, k) {
            return i.substr(0, W) + k + i.substr(W + 1, i.length - 1)
        }, isMatchCity: function (Z, ac, W) {
            var ac = ac.toLowerCase();
            var k = [Z[4].toLowerCase(), Z[1], Z[3].toLowerCase()];
            var ab = -1;
            var Y = -1;
            if (W) {
                ac = ac.split("");
                for (var X = 0; X < ac.length; X++) {
                    var ae = k[1].indexOf(ac[X]);
                    if (ae > ab && ae <= X) {
                        k[1] = C.stationFor12306.replaceChar(k[1], ae, "-");
                        ab = ae
                    } else {
                        return false
                    }
                }
            } else {
                ac = ac.split("");
                var i = true;
                var aa = true;
                for (var X = 0; X < ac.length; X++) {
                    var ae = k[0].indexOf(ac[X]);
                    if (ae > ab && ae <= X) {
                        k[0] = C.stationFor12306.replaceChar(k[0], ae, "-");
                        ab = ae
                    } else {
                        i = false;
                        break
                    }
                }
                for (var X = 0; X < ac.length; X++) {
                    var ad = k[2].indexOf(ac[X]);
                    if (ad > Y && ad <= X) {
                        k[2] = C.stationFor12306.replaceChar(k[2], ad, "-");
                        Y = ad
                    } else {
                        aa = false;
                        break
                    }
                }
                if ((i == false) && (aa == false)) {
                    return false
                }
            }
            return true
        }, city_showlist_page: function (ad, Y) {
            var Z = "";
            Z += '<div class="citypage">';
            Z += (ad == 0) ? "" : '<a href="#" class="pagetxt" onclick="$.stationFor12306.city_showlist(' + (ad - 1) + ');return false;"><<</a>';
            var ae = ad + 1;
            var aa = Y;
            var ab = 2;
            var ac = 5;
            var k = (ae - ab) > 0 ? (ae + ab > aa ? aa - ac + 1 : ae - ab) : 1;
            var W = k + ac > aa ? aa + 1 : k + ac;
            if (aa < ac) {
                for (var X = 1; X < aa + 1; X++) {
                    if (ae == X) {
                        Z += "<a href='' class='cur' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    } else {
                        Z += "<a href='' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    }
                }
            } else {
                for (var X = k; X < W; X++) {
                    if (ae == X) {
                        Z += "<a href='' class='cur' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    } else {
                        Z += "<a href='' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    }
                }
            }
            Z += (ad == Y - 1) ? "" : '<a href="" class="pagetxt" onclick="$.stationFor12306.city_showlist(' + (ad + 1) + ');return false;">>></a>';
            Z += "</div>";
            return Z
        }, city_showlist: function (W) {
            if (E.length > 6) {
                var k = Math.ceil((E.length) / 6);
                if (W == -1) {
                    W = (k - 1)
                } else {
                    if (W == k) {
                        W = 0
                    }
                }
                G = E.slice(6 * (W), Math.min(6 * (W + 1), E.length));
                C.stationFor12306.city_Bind(G);
                var i = "";
                i += C.stationFor12306.city_showlist_page(W, k);
                C("#flip_cities").html(i);
                C("#flip_cities").css("display", "block")
            } else {
                W = 0;
                G = E;
                C.stationFor12306.city_Bind(G);
                C("#flip_cities").css("display", "none")
            }
            z = W;
            if (C("#form_cities").css("display") == "block") {
                a = true;
                I.focus()
            }
        }, fixDivBugInIE6: function (i) {
            try {
                i.bgiframe();
                if (i.width() > C("> ul", i).width()) {
                    i.css("overflow", "hidden")
                } else {
                    C("> iframe.bgiframe", i).width(C("> ul", i).width());
                    i.css("overflow", "scroll")
                }
                if (i.height() > C("> ul", i).height()) {
                    i.css("overflow", "hidden")
                } else {
                    C("> iframe.bgiframe", i).height(C("> ul", i).height());
                    i.css("overflow", "scroll")
                }
            } catch (k) {
            }
        }, clearStation: function (i) {
            m = -1;
            var W = I.val();
            var X = curObjCode.val();
            if (W == "" || X == "") {
                I.val("");
                curObjCode.val("")
            } else {
                var k = W + "|" + X;
                if (typeof(station_names) != "undefined") {
                    if (station_names.indexOf(k) == -1) {
                        I.val("");
                        curObjCode.val("")
                    } else {
                        if ("click" == i) {
                            I.select();
                            if (C("#form_cities").is(":hidden")) {
                                C("#form_cities2").css("display", "block")
                            }
                        }
                    }
                } else {
                    I.val("");
                    curObjCode.val("")
                }
            }
        }, MapCityID: function (W) {
            for (var k = 0; k < w.length; k++) {
                if (w[k][1] == W) {
                    return w[k][2]
                }
            }
            return 0
        }, MapCityName: function (k) {
            for (var W = 0; W < w.length; W++) {
                if (w[W][2] == k) {
                    return w[W][1]
                }
            }
            return ""
        }, SetISPos: function (Y) {
            if (Q) {
                Q(C("#form_cities"), C("#form_cities2"))
            } else {
                C("#form_cities").css("left", Y.position().left);
                C("#form_cities").css("top", Y.position().top + Y.height() + 12);
                C("#form_cities2").css("left", Y.position().left);
                C("#form_cities2").css("top", Y.position().top + Y.height() + 12)
            }
            var X = Y.offset().top;
            var i = C("#search_div");
            var k = C("#choice_div");
            i.css("top", X);
            k.css("top", X);
            var W = Y.offset().left;
            i.css("left", W);
            k.css("left", W)
        }, myHandlerFg: function (i) {
            if (i == null) {
                i.keyCode = 9
            } else {
                if (!i.which && i.which == 13) {
                    i.preventDefault()
                } else {
                    if (i.which && i.keyCode == 13) {
                        i.which = 9
                    }
                }
            }
        }, myHandler2: function (i) {
            if (i == null) {
                i = window.event;
                i.returnValue = false
            } else {
                if (i.which && i.which == 13) {
                    var W = document.getElementById("Upload_Data3");
                    if (document.createEvent) {
                        var k = document.createEvent("MouseEvents");
                        k.initEvent("click", true, false);
                        W.dispatchEvent(k)
                    } else {
                        if (document.createEventObject) {
                            W.fireEvent("onclick")
                        }
                    }
                } else {
                    if (!i.which && i.which == 13) {
                        i.preventDefault()
                    }
                }
            }
        }, from_to_station_class_plain: function (i) {
            if (l && l != "") {
                i.removeClass(l)
            }
            if (r && r != "") {
                i.addClass(r)
            }
        }, from_to_station_class_gray: function (i) {
            if (r && r != "") {
                i.removeClass(r)
            }
            if (l && l != "") {
                i.addClass(l)
            }
        }, setStationStyle: function () {
            var i = I.val();
            if (i == "") {
                I.val(h);
                C.stationFor12306.from_to_station_class_gray(I);
                curObjCode.val("")
            } else {
                C.stationFor12306.from_to_station_class_plain(I)
            }
        }, setCurValue: function () {
            I.val(S[1]);
            curObjCode.val(S[2])
        }, bindEvent: function (i) {
            var W = "#" + i;
            var k = "#" + i + "Text";
            C(k).keydown(function (Y) {
                I = C(k);
                curObjCode = C(W);
                m = 0;
                a = true;
                L = true;
                C("#form_cities2").css("display", "none");
                y = 0;
                var X = C(k).width();
                if (-[1,]) {
                    X = X - 4
                }
                X = X < 220 ? 220 : X;
                C("#form_cities").css("width", X);
                C("#form_cities").css("display", "block");
                C(".AbcSearch li").removeClass("action");
                C(".popcitylist").css("display", "none");
                if (M && B) {
                    C("#ul_list7").css("display", "block");
                    C("#nav_list7").addClass("action")
                } else {
                    C("#nav_list1").addClass("action");
                    C("#ul_list1").css("display", "block")
                }
                C("#flip_cities2").css("display", "none");
                C(".ac_even").removeClass("ac_over").addClass("ac_odd");
                Y = Y || window.event;
                if (Y.keyCode == 40) {
                    C.stationFor12306.city_changeSelectIndex(1);
                    C("#form_cities").css("display", "block");
                    C.stationFor12306.SetISPos(I);
                    C.stationFor12306.setCurValue()
                } else {
                    if (Y.keyCode == 38) {
                        C.stationFor12306.city_changeSelectIndex(-1);
                        C.stationFor12306.setCurValue();
                        C("#form_cities").css("display", "block");
                        C.stationFor12306.SetISPos(I)
                    } else {
                        if (Y.keyCode == 13) {
                            C.stationFor12306.city_confirmSelect();
                            if (document.addEventListener) {
                                document.addEventListener("keypress", C.stationFor12306.myHandlerFg, true)
                            } else {
                                evt = window.event;
                                evt.keyCode = 9
                            }
                        }
                    }
                }
            }).focus(function () {
                L = true;
                if (a) {
                    C("#form_cities2").css("display", "none");
                    y = 0;
                    a = false;
                    m = -1
                } else {
                    if (m == -1) {
                        C(".AbcSearch li").removeClass("action");
                        C(".popcitylist").css("display", "none");
                        C("#flip_cities2").css("display", "none");
                        if (M && B) {
                            C("#ul_list7").css("display", "block");
                            C("#nav_list7").addClass("action")
                        } else {
                            C("#nav_list1").addClass("action");
                            C("#ul_list1").css("display", "block")
                        }
                        C(".ac_even").removeClass("ac_over").addClass("ac_odd");
                        C("#form_cities2").css("display", "block");
                        for (var X = 2; X <= 6; X++) {
                            C("#ul_list" + X).css("height", 0)
                        }
                    }
                }
                I = C(k);
                curObjCode = C(W);
                m = 0;
                U = true;
                C.stationFor12306.SetISPos(I)
            }).blur(function () {
                I = C(k);
                curObjCode = C(W);
                m = 0;
                a = false;
                L = true;
                if (!g && !H) {
                    C.stationFor12306.clearStation("blur");
                    U = false;
                    C("#form_cities").css("display", "none");
                    C("#form_cities2").css("display", "none");
                    m = -1;
                    y = 0;
                    E = C.stationFor12306.filterCity("");
                    C.stationFor12306.city_showlist(0);
                    C.stationFor12306.setStationStyle()
                }
            }).keyup(function (X) {
                I = C(k);
                curObjCode = C(W);
                m = 0;
                a = true;
                X = X || window.event;
                if (X.keyCode != 40 && X.keyCode != 38 && X.keyCode != 37 && X.keyCode != 39 && X.keyCode != 13 && X.keyCode != 9) {
                    E = C.stationFor12306.filterCity(I.val());
                    C.stationFor12306.city_showlist(0)
                }
            }).click(function () {
                C.stationFor12306.clearStation("click")
            });
            C.stationFor12306.bindInputs.push(i)
        }, getStationInCookies: function () {
            var W = [];
            var k = C.ht_getcookie("_city_name_save_station");
            if (k) {
                var i = k.split(",");
                if (i && i.length > 0) {
                    C.each(i, function (aa, Z) {
                        var X = Z.split("#");
                        var Y = [];
                        Y[0] = X[0];
                        Y[1] = X[1];
                        W[aa] = Y
                    })
                }
            }
            return W
        }, setStationInCookies: function (af, W) {
            var ac = C.stationFor12306.getStationInCookies();
            var Z = [];
            var ag = ac.length;
            var Y = true;
            var ah = 10;
            for (var aa = 0; aa < ag; aa++) {
                if (ac[aa][0] == af && ac[aa][1] == W) {
                    Y = false
                }
                Z.push(ac[aa])
            }
            if (Y) {
                Z.push([af, W])
            }
            var ab = Z;
            var X = "";
            var ad = ab.length;
            var aa = 0;
            if (ad > ah) {
                aa = 1
            }
            var i = aa;
            if (ad > 1) {
                C("#ul_list7").html("");
                M = true
            }
            var ae = "";
            for (; aa < ad; aa++) {
                if (aa > i) {
                    X += ","
                }
                X += ab[aa][0] + "#" + ab[aa][1];
                if (M && B) {
                    ae += '<li class="ac_even" onmouseover="$.stationFor12306.city_shiftSelectInLi(this);" onclick="$.stationFor12306.li_click(this);"   title="' + ab[aa][0] + '" data="' + ab[aa][1] + '">' + ab[aa][0] + "</li>"
                }
            }
            if (M && B) {
                C("#ul_list7").html(ae)
            }
            C.ht_setcookie("_city_name_save_station", X, 365 * 24 * 60 * 60)
        }, li_click: function (i) {
            I.val(C(i).text());
            curObjCode.val(C(i).attr("data"));
            if (B) {
                C.stationFor12306.setStationInCookies(C(i).text(), C(i).attr("data"))
            }
            C("#form_cities2").css("display", "none");
            m = -1;
            y = 0;
            C.stationFor12306.setStationStyle();
            if (L) {
                C.stationFor12306.LoadJS(C(i).attr("data"))
            }
            if (J) {
                J(I, curObjCode)
            }
        }, init: function (ac, ad) {
            if (typeof(ad) != "undefined") {
                if (typeof(ad._init_input) != "undefined") {
                    h = ad._init_input
                }
                if (typeof(ad._top_4_initInput) != "undefined") {
                    n = ad._top_4_initInput
                }
                if (typeof(ad.confirmCallBack) != "undefined") {
                    J = ad.confirmCallBack
                }
                if (typeof(ad._selected_class) != "undefined") {
                    r = ad._selected_class
                }
                if (typeof(ad._unselected_class) != "undefined") {
                    l = ad._unselected_class
                }
                if (typeof(ad._12306_openFavorite) != "undefined") {
                    B = ad._12306_openFavorite
                }
                if (typeof(ad.position) != "undefined") {
                    Q = ad.position
                }
            }
            if (typeof(station_names) != "undefined") {
                var Z = station_names.split("@");
                for (var Y = 0; Y < Z.length; Y++) {
                    var ab = Z[Y];
                    var aa = ab.toString().charAt(0);
                    for (var X in F) {
                        if (aa == F[X]) {
                            c[X].push(ab.split("|"))
                        }
                    }
                    if (ab.length > 0) {
                        ab = ab.split("|");
                        if (O != "" && ab[2] == O) {
                            favcity = ab;
                            w.unshift(ab);
                            if (Y > 6) {
                                w.push(ab)
                            }
                        } else {
                            w.push(ab)
                        }
                    }
                }
                f = c[0].concat(c[1]).concat(c[2]).concat(c[3]).concat(c[4]);
                e = c[5].concat(c[6]).concat(c[7]).concat(c[8]).concat(c[9]);
                d = c[10].concat(c[11]).concat(c[12]).concat(c[13]).concat(c[14]);
                b = c[15].concat(c[16]).concat(c[17]).concat(c[18]).concat(c[19]);
                V = c[20].concat(c[21]).concat(c[22]).concat(c[23]).concat(c[24]).concat(c[25]);
                P[0] = [c[0], c[1], c[2], c[3], c[4]];
                P[1] = [c[5], c[6], c[7], c[8], c[9]];
                P[2] = [c[10], c[11], c[12], c[13], c[14]];
                P[3] = [c[15], c[16], c[17], c[18], c[19]];
                P[4] = [c[20], c[22], c[23], c[24], c[25]];
                for (var Y = 0; Y < w.length; Y++) {
                    w[Y].push(Y)
                }
            }
            if (typeof(favorite_names) != "undefined") {
                var W = favorite_names.split("@");
                for (var Y = 0; Y < W.length; Y++) {
                    var ab = W[Y];
                    if (ab.length > 0) {
                        ab = ab.split("|");
                        D.push(ab)
                    }
                }
                for (var Y = 0; Y < D.length; Y++) {
                    D[Y].push(Y)
                }
            }
            E = C.stationFor12306.filterCity("");
            C.stationFor12306.city_showlist(0);
            C.stationFor12306.showAllCity();
            a = false;
            C.stationFor12306.fixDivBugInIE6(C("#form_cities"));
            C.stationFor12306.fixDivBugInIE6(C("#form_cities2"));
            if (ac && ac.length > 0) {
                C.each(ac, function (k, i) {
                    C.stationFor12306.bindEvent(i)
                })
            }
            C("#form_cities").mousedown(function () {
                g = true
            }).mouseup(function () {
                g = false
            });
            C("#form_cities2").mousedown(function () {
                H = true
            }).mouseup(function () {
                H = false
            })
        }
    }
})(jQuery);
(function () {
    $.stopStation = function (a) {
        var b = this;
        b.init = function () {
            b.options = $.extend({}, $.stopStation.defaultOptions, a);
            if (null == b.options.url || null == b.options.getSearchDate) {
                throw"error options,url can not be null"
            }
            b.options.mouseOnPanel = 0;
            if (!$("#" + b.options.showDivId)[0]) {
                var d = [];
                var c = -1;
                d[++c] = '<div class="station" style="display:none;" id="' + b.options.showDivId + '"><b></b>';
                d[++c] = '<div class="station-info" id="' + b.options.showTitleId + '"></div>';
                d[++c] = '<div class="station-hd"><span class="zx">站序</span><span class="zm">站名</span><span class="dzsj">到站时间</span>';
                d[++c] = '<span class="cfsj">出发时间</span><span class="tlsj">停留时间</span>';
                d[++c] = '<a id="_stopStation_close_id" class="close" title="关闭" href="javascript:" </a></div>';
                d[++c] = '<div class="station-bd"><table><tbody id="' + b.options.showTableId + '"></tbody></table></div></div>';
                $(d.join("")).appendTo($("body:eq(0)"));
                $("#_stopStation_close_id").on("click", b.close)
            }
            $("#" + b.options.showDivId).css("z-index", "20001");
            if (b.options.mouseOutClose) {
                $("#" + b.options.showDivId).on("mouseenter", function (e) {
                    b.options.mouseOnPanel = 1
                }).on("mouseleave", function () {
                    b.options.mouseOnPanel = 0;
                    $("#" + b.options.showDivId).hide().appendTo($("body:eq(0)"));
                    $("#" + b.options.showTableId).html("")
                })
            }
        };
        b.close = function () {
            $("#" + $.stopStation.defaultOptions.showDivId).closest("tr").removeAttr("style");
            $("#" + $.stopStation.defaultOptions.showDivId).removeAttr("style");
            b.options.mouseOnPanel = 0;
            $("#" + $.stopStation.defaultOptions.showDivId).hide().appendTo($("body:eq(0)"));
            $("#" + $.stopStation.defaultOptions.showTableId).html("")
        };
        b.open = function (f, j, h, e, i, c) {
            $("#" + $.stopStation.defaultOptions.showDivId).attr("style", "z-index:20001");
            if (a.timer) {
                clearTimeout(a.timer)
            }
            var g = a.getSearchDate();
            if (i && "" != i && null != i) {
                var d = formatDate(i);
                if ("-" != d) {
                    g = formatDate(i)
                } else {
                    g = a.getSearchDate()
                }
            } else {
                g = a.getSearchDate()
            }
            $.ajax({
                url: a.url,
                type: "get",
                isTakeParam: false,
                beforeSend: function (k) {
                    k.setRequestHeader("If-Modified-Since", "0");
                    k.setRequestHeader("Cache-Control", "no-cache")
                },
                data: {train_no: j, from_station_telecode: h, to_station_telecode: e, depart_date: g},
                success: function (p) {
                    var t = p.data.data;
                    if (t && t.length > 0) {
                        var r = [];
                        var u = -1;
                        for (var q = 0; q < t.length; q++) {
                            var l = t[q];
                            if (q == 0) {
                                var n = null;
                                n = l.train_class_name;
                                var s = l.service_type;
                                if ("0" == s) {
                                    c = "无空调"
                                } else {
                                    c = "有空调"
                                }
                                if (!n) {
                                    n = "&nbsp;&nbsp;"
                                }
                                $("#" + $.stopStation.defaultOptions.showTitleId).html('<span class="item1">' + l.station_train_code + '次      </span><span class="item2">' + l.start_station_name + "<em>--></em>" + l.end_station_name + '</span><span class="item3">' + n + '</span><span class="item4">' + c + "</span>").find("span").css("color", "#333")
                            }
                            var m = "";
                            if (!l.isEnabled) {
                                m = " style='color: #999;' "
                            }
                            r[++u] = '<tr><td width="50" class="tc" ' + m + ">" + l.station_no + "</td>";
                            r[++u] = '<td width="75" ' + m + ">" + l.station_name + "</td>";
                            r[++u] = '<td width="75" ' + m + ">" + l.arrive_time + "</td>";
                            r[++u] = '<td width="75" ' + m + ">" + l.start_time + "</td>";
                            r[++u] = "<td " + m + ">" + l.stopover_time + "</td></tr>"
                        }
                        $("#" + $.stopStation.defaultOptions.showTableId).html(r.join(""));
                        var o = $("#" + $.stopStation.defaultOptions.appendTo + f);
                        $("#" + $.stopStation.defaultOptions.showDivId).appendTo(o).show();
                        $(".ticket-info").filter("div").attr("style", "");
                        o[0].style["z-index"] = 19999;
                        if (!(navigator.appVersion.indexOf("MSIE 6") > -1)) {
                        } else {
                        }
                    }
                }
            })
        };
        b.init();
        myStopStation = b;
        return b
    };
    $.fn.stopStation = function () {
        return (new $.stopStation(Array.prototype.slice.call(arguments)[0]))
    };
    $.stopStation.defaultOptions = {
        url: null,
        mouseOutClose: false,
        showDivId: "train_div_",
        showTableId: "train_table_",
        showTitleId: "train_span_",
        appendTo: "train_num_",
        getSearchDate: null
    }
})();
var myStopStation = function () {
};
var formatDate = function (b) {
    if (b && (b.length == 8)) {
        var c = b.substring(0, 4);
        var d = b.substring(4, 6);
        var a = b.substring(6, 8);
        return c + "-" + d + "-" + a
    } else {
        return "-"
    }
};
var checkusermdId;
var showTrainStop;
var hideTrainStop;
var showTicketPrice;
var isInitQueryInput = false;
var isInitStationDiv = false;
var isInitJsrenderTemplate = false;
var isInitDateRange = false;
var tickets_info;
var location_code;
var md5Str;
var leftTicketStr;
var isAsync;
var box;
var countDown = null;
var ischeckAutoSubmitCode = true;
var hainan_tip;
var firstShow = 1;
var endShow = 20;
var dataNumber = 0;
var change_dates_arr = [];
var isOther = true;
var dwTranTimeStr;
var ydTranTimeStr;
var uninputmsg = "用户名／邮箱／手机号码";
var adtimeout = 5000;
var iframeUrl = "https://ad.12306.cn/res/0004.html";
var frameComplete = false;
var iframeOnload = function () {
    frameComplete = true
};
var yxTrainPageSize = 15;
var passengerPageSize = 20;
var timer_time = 3;
var yxTrainChange = "";
var trainListForIE = [];
var queryLeftTicket_times = 0;
var queryLeftTicket_count = 10;
var ifAlertCode = false;
var intervalTime;
var isInitLoad = true;
(function () {
    var a;
    var a3 = null;
    var bE;
    var br;
    var N;
    var af;
    var cc;
    var bU;
    var p = false;
    var b2 = 0;
    var ay;
    var be;
    var x;
    var ac;
    var cj;
    var bb = new Array();
    var bR = new Array();
    var b1 = new Array();
    var W = new Array();
    var bM = new Array();
    var K;
    var aD = new Array();
    tickets_info = new Array();
    var a4 = true, b4 = true, aZ = true, az = "starttime";
    var aC = true;
    var bz = [];
    var bh = [];
    var bT = [];
    var aP;
    var H = [];
    var bS = "";
    var ca = "";
    var a9 = "";
    var g = "";
    var D = "";
    $(document).ready(function () {
        $.init_ul4li();
        f();
        Y();
        y();
        ab();
        F();
        aA();
        a6();
        bx();
        clickCheckBoxName();
        bC();
        bW();
        aq();
        ag();
        b6();
        A();
        aY();
        bI();
        $("#float").headerFloat();
        $(window).scroll(function () {
            if (a3 != null && (!a3.isHidden())) {
                $("#floatTable").hide();
                $(window).scrollTop(a)
            }
        });
        $.stopStation({
            url: ctx + "czxx/queryByTrainNo", getSearchDate: function () {
                return train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
            }
        });
        bd();
        co();
        b7();
        o();
        R();
        ad();
        bS = $("#fromStationText").val();
        ca = $("#toStationText").val();
        $("#showOnlyTicA").bind("click", function () {
            $("#filterTic").attr("checked", "checked");
            bi();
            $jpopup.startOrHiden()
        });
        aP = $.autoSubmit();
        var ct = $("#train_date").val();
        var cr = $("#back_train_date").val();
        if (cr == "") {
            $("#back_train_date").val(ct)
        } else {
            $("#back_train_date").val(cr)
        }
        t();
        aW();
        var cs = new bq("right");
        cs.init();
        U();
        if (page_show_flag == "preStep") {
            $("#query_ticket").click()
        }
    });
    var bq = function (cy) {
        var cz, cv = {}, cA, cw = this, cu = false, cs, cx, ct = {x: 10, y: 66}, cr = {x: 5, y: 1};
        this.move = function () {
            cs = cs + cr.x;
            cx = cx + cr.y;
            if (cs < ct.x) {
                cs = ct.x;
                cr.x = -cr.x
            } else {
                if (cs > cv.dx) {
                    cs = cv.dx;
                    cr.x = -cr.x
                }
            }
            if (cx < ct.y) {
                cx = ct.y;
                cr.y = -cr.y
            } else {
                if (cx > cv.dy) {
                    cx = cv.dy;
                    cr.y = -cr.y
                }
            }
            cA.css(cy, cs + "px").css("top", cx + "px")
        };
        this.init = function () {
            if (cu) {
                return
            }
            cu = true;
            cA = $(bq.htmlTemplate);
            $(window).on("resize", cw.resize);
            cA.css(cy, ct.x + "px").css({top: ct.y + "px"}).on("mouseenter", cw.stop).on("mouseleave", cw.resize).children("a.close").on("click", cw.hidden);
            $("body").append(cA);
            cs = ct.x;
            cx = ct.y;
            cw.resize()
        };
        this.destory = function () {
            cA.remove()
        };
        this.resize = function () {
            cv.dx = ($(window).width() - $(".content").width()) / 2 - cA.width();
            cv.dy = ($(window).height()) - cA.height();
            if (cv.dx <= (ct.x + Math.abs(cr.x)) || cv.dy <= (ct.y + Math.abs(cr.y))) {
                cw.stop()
            } else {
                cw.alive()
            }
        };
        this.show = function () {
            cA.show();
            cw.alive()
        };
        this.hidden = function () {
            cw.stop();
            cA.hide()
        };
        this.stop = function () {
            clearInterval(cz)
        };
        this.alive = function () {
            cw.stop();
            cz = setInterval(cw.move, 200)
        }
    };

    function G() {
        setTimeout(function () {
            if (!frameComplete) {
                var cs = $("#ad_frame_query");
                var cr = cs.get(0);
                var ct = ctx + "resources/images/bg11.png";
                cs.remove();
                $("#myfix_yh").css("background", "url(" + ct + ") no-repeat");
                $("#myfix_yh").html('<a href="javascript:void(0);" class="close" title="关闭">关闭</a>');
                $("#myfix_yh").children("a.close").on("click", function () {
                    $(this).parent().hide()
                })
            }
        }, adtimeout)
    }

    function bJ(cs) {
        if (cs) {
            $(".yzm").show();
            $("#orange_msg").hide();
            $("#randCodeForm_id").find("a").css("margin-top", "30px");
            var cr = $("#qr_submit1");
            cr.unbind("click").bind("click", h);
            cr.removeClass("btn92").addClass("btn92s").show();
            ifAlertCode = true
        } else {
            $(".yzm").hide();
            $("#orange_msg").show();
            $("#qr_submit1").hide();
            ifAlertCode = false
        }
    }

    function ad() {
        if (rqChecked.length == 0) {
            if (train_tour_flag == "fc") {
                rqChecked.push($("#back_train_date").val())
            } else {
                rqChecked.push($("#train_date").val())
            }
        }
    }

    function b7() {
        if (ClickWho == "0X00") {
            $("#sf1").attr("disabled", "true");
            $("#sf1_label").addClass("color999");
            $("#sf2").attr("checked", "true");
            $("#query_ticket").removeClass().addClass("btn92s")
        } else {
            if (ClickWho == "00" || ClickWho == "ADULT") {
                $("#sf2").attr("disabled", "true");
                $("#sf2_label").addClass("color999");
                $("#query_ticket").removeClass().addClass("btn92s")
            } else {
                $("#query_ticket").removeClass().addClass("btn92s")
            }
        }
        if (isstudentDate) {
            $("#sf2").attr("disabled", "true");
            $("#sf2_label").addClass("color999");
            $("#query_ticket").removeClass().addClass("btn92s")
        }
    }

    function ah() {
        if (!isInitStationDiv) {
            d();
            isInitStationDiv = true
        }
        if (!isInitJsrenderTemplate) {
            at();
            isInitJsrenderTemplate = true
        }
    }

    function bd() {
        $("#fromStationText").mouseover(ah);
        $("#toStationText").mouseover(ah);
        $("#dc").mouseover(ah);
        $("#wf").mouseover(ah);
        $("#dc_label").mouseover(ah);
        $("#wf_label").mouseover(ah);
        $("#train_date").mouseover(ah);
        $("#back_train_date").mouseover(ah);
        $("#date_range").mouseover(ah)
    }

    function aB(cr) {
        aM();
        var cy = bM.length;
        if ($("#query_ticket").html() == "停止查询") {
            if (cy > 0 && aQ) {
                $("#auto_query").removeAttr("disabled");
                if ($("#dc").is(":checked") && train_tour_flag != "gc") {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#query_ticket").html("查询");
                $("#query_ticket").unbind("click");
                bN();
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("<strong><label for='filterTic' style='cursor: pointer;'>仅显示选定车次</label></strong>");
                if (!$("#autoSubmit").is(":checked")) {
                    clearInterval(a1);
                    if (ccSelected.length > 0 || rqChecked.length > 0 || xbChecked.length > 0) {
                        myJpopup.startOrHiden();
                        if (train_tour_flag == "fc") {
                            var cz = "成功查到" + $("#back_train_date").val() + "的" + bM[0]["queryLeftNewDTO"]["station_train_code"] + "次"
                        } else {
                            var cz = "成功查到" + $("#train_date").val() + "的" + bM[0]["queryLeftNewDTO"]["station_train_code"] + "次"
                        }
                        if (cy == 1) {
                            cz = cz + "车。"
                        } else {
                            cz = cz + "等" + cy + "趟车。"
                        }
                        $("#filterRes").html(cz)
                    }
                }
                jPlayer("play")
            } else {
                if (countDown) {
                    clearInterval(countDown)
                }
                var cx = autoSearchTime / 1000;
                $("#filterTicDiv").html("<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cx + "</font>秒<strong>");
                countDown = window.setInterval(function () {
                    var cA = "<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>";
                    if (cx == 0) {
                        cx = autoSearchTime / 1000
                    }
                    cx = cx - 1;
                    if (cx == 4) {
                        cA = cA + "&nbsp;&nbsp;&nbsp;&nbsp;"
                    }
                    if (cx == 3) {
                        cA = cA + "&nbsp;&nbsp;&nbsp;"
                    }
                    if (cx == 2) {
                        cA = cA + "&nbsp;&nbsp;"
                    }
                    if (cx == 1) {
                        cA = cA + "&nbsp;"
                    }
                    cA = cA + cx;
                    cA += "</font>秒<strong>";
                    $("#filterTicDiv").html(cA)
                }, 1000);
                $("#filterTic").hide()
            }
        }
        var cw = new Array();
        cw.push('<tbody id="queryLeftTable">');
        cr = aS(cr);
        var ct = bY(cr);
        if (ct) {
            cr = cf(cr)
        }
        if ($("#avail_jf")[0].checked) {
            cr = aI(cr)
        }
        for (var cs = 0; cs < cr.length; cs++) {
            cw.push('<tr id="ticket_');
            cw.push(cr[cs].queryLeftNewDTO.train_no);
            cw.push('" class="');
            cw.push(cs % 2 ? '">' : 'bgc">');
            cw.push('<td colspan="4" width="370">');
            cw.push('<div class="ticket-info clearfix" id="train_num_');
            cw.push(cs);
            cw.push('">');
            cw.push('<div class="train" id="ticket_');
            cw.push(cr[cs].queryLeftNewDTO.train_no);
            cw.push('_train">');
            var cv = "";
            if (c(cr[cs].queryLeftNewDTO.station_train_code)) {
                cv = ' style="color:red;" '
            }
            cw.push("<div><a  " + cv + ' title="点击查看停靠站信息" href="javascript:" id="');
            cw.push(cr[cs].queryLeftNewDTO.train_no);
            cw.push("_");
            cw.push(cr[cs].queryLeftNewDTO.from_station_telecode);
            cw.push("_");
            cw.push(cr[cs].queryLeftNewDTO.to_station_telecode);
            if ("1" == cr[cs].queryLeftNewDTO.controlled_train_flag || "2" == cr[cs].queryLeftNewDTO.controlled_train_flag) {
                cw.push('" class="number"');
                cw.push(">")
            } else {
                cw.push('" class="number"  onclick="myStopStation.open(\'');
                cw.push(cs);
                cw.push("','");
                cw.push(cr[cs].queryLeftNewDTO.train_no);
                cw.push("','");
                cw.push(cr[cs].queryLeftNewDTO.from_station_telecode);
                cw.push("','");
                cw.push(cr[cs].queryLeftNewDTO.to_station_telecode);
                cw.push("','");
                cw.push(cr[cs].queryLeftNewDTO.start_train_date);
                cw.push("','");
                cw.push(cr[cs].queryLeftNewDTO.train_seat_feature);
                cw.push("');\">")
            }
            cw.push(cr[cs].queryLeftNewDTO.station_train_code);
            cw.push("</a>");
            if (cr[cs].queryLeftNewDTO.is_support_card != 0) {
                cw.push(' <span class="i-card" title="可凭二代身份证直接进出站"></span>')
            }
            cw.push("</div>");
            cw.push('<span id="');
            cw.push(cr[cs].queryLeftNewDTO.train_no);
            cw.push("_");
            cw.push(cr[cs].queryLeftNewDTO.from_station_no);
            cw.push("_");
            cw.push(cr[cs].queryLeftNewDTO.to_station_no);
            cw.push("_");
            cw.push(cr[cs].queryLeftNewDTO.yp_info);
            cw.push("_");
            cw.push(cr[cs].queryLeftNewDTO.seat_types);
            if ("1" == cr[cs].queryLeftNewDTO.controlled_train_flag || "2" == cr[cs].queryLeftNewDTO.controlled_train_flag) {
                cw.push('" class="lookup"><span style="display:none;">查看票价</span><b style="display:none;" title="查看票价"></b></span>')
            } else {
                cw.push('" class="lookup" onclick="showTicketPrice(this)"><span style="display:none;">查看票价</span><b title="查看票价"></b></span>')
            }
            cw.push("</div>");
            cw.push('<div class="cdz">');
            if (cr[cs].queryLeftNewDTO.from_station_telecode != null && cr[cs].queryLeftNewDTO.from_station_telecode == cr[cs].queryLeftNewDTO.start_station_telecode) {
                cw.push('<strong class="start-s">');
                cw.push(cr[cs].queryLeftNewDTO.from_station_name);
                cw.push("</strong>")
            } else {
                cw.push("<strong>");
                cw.push(cr[cs].queryLeftNewDTO.from_station_name);
                cw.push("</strong>")
            }
            if (cr[cs].queryLeftNewDTO.to_station_telecode != null && cr[cs].queryLeftNewDTO.to_station_telecode == cr[cs].queryLeftNewDTO.end_station_telecode) {
                cw.push('<strong class="end-s">');
                cw.push(cr[cs].queryLeftNewDTO.to_station_name);
                cw.push("</strong>")
            } else {
                cw.push("<strong>");
                cw.push(cr[cs].queryLeftNewDTO.to_station_name);
                cw.push("</strong>")
            }
            cw.push("</div>");
            cw.push('<div class="cds">');
            if ("1" == cr[cs].queryLeftNewDTO.controlled_train_flag || "2" == cr[cs].queryLeftNewDTO.controlled_train_flag) {
                cw.push('<strong class="start-t" style="color:#999;">');
                cw.push("-----");
                cw.push("</strong>");
                cw.push('<strong class="color999">');
                cw.push("-----");
                cw.push("</strong>")
            } else {
                cw.push('<strong class="start-t">');
                cw.push(cr[cs].queryLeftNewDTO.start_time);
                cw.push("</strong>");
                cw.push('<strong class="color999">');
                cw.push(cr[cs].queryLeftNewDTO.arrive_time);
                cw.push("</strong>")
            }
            cw.push("</div>");
            cw.push('<div  class="ls" ');
            cw.push('id="');
            cw.push(cr[cs].queryLeftNewDTO.train_no);
            cw.push('_ls">');
            if ("1" == cr[cs].queryLeftNewDTO.controlled_train_flag || "2" == cr[cs].queryLeftNewDTO.controlled_train_flag) {
                cw.push('<strong class="color999">');
                cw.push("------");
                cw.push("</strong>");
                cw.push('<strong class="color999">');
                cw.push("------");
                cw.push("</strong>")
            } else {
                cw.push("<strong>");
                cw.push(cr[cs].queryLeftNewDTO.lishi);
                cw.push("</strong>");
                cw.push("<span>");
                cw.push(changeArriveDate(cr[cs].queryLeftNewDTO.start_time, cr[cs].queryLeftNewDTO.lishi));
                cw.push("到达</span>")
            }
            cw.push("</div>");
            cw.push("</div>");
            cw.push("</td>");
            if (cr[cs].queryLeftNewDTO.swz_num && cr[cs].queryLeftNewDTO.swz_num != "--" && cr[cs].queryLeftNewDTO.swz_num != 0 && cr[cs].queryLeftNewDTO.swz_num != "无") {
                b8(cw, cr[cs].queryLeftNewDTO.swz_num, "SWZ_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "91", cr[cs].queryLeftNewDTO.controlled_train_flag)
            } else {
                if (cr[cs].queryLeftNewDTO.tz_num && cr[cs].queryLeftNewDTO.tz_num != "--" && cr[cs].queryLeftNewDTO.tz_num != 0 && cr[cs].queryLeftNewDTO.tz_num != "无") {
                    b8(cw, cr[cs].queryLeftNewDTO.tz_num, "TZ_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "P1", cr[cs].queryLeftNewDTO.controlled_train_flag)
                } else {
                    if (cr[cs].queryLeftNewDTO.swz_num && cr[cs].queryLeftNewDTO.swz_num == "无") {
                        b8(cw, cr[cs].queryLeftNewDTO.swz_num, "SWZ_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "91", cr[cs].queryLeftNewDTO.controlled_train_flag)
                    } else {
                        b8(cw, cr[cs].queryLeftNewDTO.tz_num, "TZ_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "P1", cr[cs].queryLeftNewDTO.controlled_train_flag)
                    }
                }
            }
            b8(cw, cr[cs].queryLeftNewDTO.zy_num, "ZY_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "M1", cr[cs].queryLeftNewDTO.controlled_train_flag);
            b8(cw, cr[cs].queryLeftNewDTO.ze_num, "ZE_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "O1", cr[cs].queryLeftNewDTO.controlled_train_flag);
            b8(cw, cr[cs].queryLeftNewDTO.gr_num, "GR_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "61", cr[cs].queryLeftNewDTO.controlled_train_flag);
            b8(cw, cr[cs].queryLeftNewDTO.rw_num, "RW_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "41", cr[cs].queryLeftNewDTO.controlled_train_flag);
            b8(cw, cr[cs].queryLeftNewDTO.srrb_num, "SRRB_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "F1", cr[cs].queryLeftNewDTO.controlled_train_flag);
            b8(cw, cr[cs].queryLeftNewDTO.yw_num, "YW_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "31", cr[cs].queryLeftNewDTO.controlled_train_flag);
            b8(cw, cr[cs].queryLeftNewDTO.rz_num, "RZ_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "21", cr[cs].queryLeftNewDTO.controlled_train_flag);
            b8(cw, cr[cs].queryLeftNewDTO.yz_num, "YZ_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "11", cr[cs].queryLeftNewDTO.controlled_train_flag);
            b8(cw, cr[cs].queryLeftNewDTO.wz_num, "WZ_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "W1", cr[cs].queryLeftNewDTO.controlled_train_flag);
            b8(cw, cr[cs].queryLeftNewDTO.qt_num, "QT_", cr[cs].queryLeftNewDTO.train_no, cr[cs].queryLeftNewDTO.yp_ex, "", cr[cs].queryLeftNewDTO.controlled_train_flag);
            if ("Y" == cr[cs].queryLeftNewDTO.canWebBuy) {
                cw.push(' <td align="center" width="80" class="no-br"><a href="javascript:" class="btn72" onclick="checkG1234(\'');
                cw.push(cr[cs].secretStr);
                cw.push("','");
                cw.push(cr[cs].queryLeftNewDTO.start_time);
                cw.push("','");
                cw.push(cr[cs].queryLeftNewDTO.train_no);
                cw.push("','");
                cw.push(cr[cs].queryLeftNewDTO.from_station_telecode);
                cw.push("','");
                cw.push(cr[cs].queryLeftNewDTO.to_station_telecode);
                cw.push("')\">");
                cw.push(buttonText());
                if (cr[cs].queryLeftNewDTO.exchange_train_flag == 1) {
                    cw.push("<i class='ico-dh'></i>")
                }
                cw.push("</a>");
                cw.push("</td>")
            } else {
                cw.push('<td align="center" width="80" class="no-br">');
                cw.push(cr[cs].buttonTextInfo);
                cw.push("</td>")
            }
            cw.push("</tr>");
            cw.push('<tr datatran="' + cr[cs].queryLeftNewDTO.station_train_code + '" id="price_');
            cw.push(cr[cs].queryLeftNewDTO.train_no);
            cw.push('" style="display:none;"></tr>')
        }
        cw.push("</tbody>");
        $("#queryLeftTable").replaceWith(cw.join(""));
        if (ct) {
            for (var cs = 0; cs < cr.length; cs++) {
                var cu = cr[cs];
                if (c(cu.queryLeftNewDTO.station_train_code)) {
                }
            }
        }
    }

    function cf(cs) {
        if (cs && cs.length > 0) {
            var cw = [];
            var cr = [];
            for (var ct = 0, cu = cs.length; ct < cu; ct++) {
                var cv = cs[ct];
                if (c(cv.queryLeftNewDTO.station_train_code)) {
                    cw.push(cv)
                } else {
                    cr.push(cv)
                }
            }
            cs = cw.concat(cr)
        }
        return cs
    }

    function aI(cr) {
        if (cr && cr.length > 0) {
            for (var cs = cr.length - 1; cs >= 0; cs--) {
                if (cr[cs].queryLeftNewDTO.exchange_train_flag == 0 || cr[cs].queryLeftNewDTO.canWebBuy != "Y") {
                    cr.splice(cs, 1)
                }
            }
        }
        return cr
    }

    function aS(cr) {
        if (cr && cr.length > 0) {
            var cx = [];
            var cs = [];
            for (var ct = 0, cz = cr.length; ct < cz; ct++) {
                var cv = cr[ct];
                var cw = cv.queryLeftNewDTO.yp_ex.split("");
                var cy = false;
                for (var cu = 0; cu < cw.length; cu++) {
                    if (cu % 2 == 1 && cw[cu] == 1) {
                        cy = true;
                        break
                    }
                }
                if (cy) {
                    cx.push(cv)
                } else {
                    cs.push(cv)
                }
            }
            cr = cx.concat(cs)
        }
        return cr
    }

    function c(ct) {
        if (DW_TRAINS && DW_TRAINS.length) {
            for (var cr = 0, cs = DW_TRAINS.length; cr < cs; cr++) {
                if (ct == DW_TRAINS[cr]) {
                    return true
                }
            }
        } else {
            return false
        }
        return false
    }

    function bY(cr) {
        if (cr && cr.length > 0) {
            if (DW_TRAINS && DW_TRAINS.length) {
                for (var cu = 0, cw = cr.length; cu < cw; cu++) {
                    var cv = cr[cu].queryLeftNewDTO.station_train_code;
                    for (var cs = 0, ct = DW_TRAINS.length; cs < ct; cs++) {
                        if (cv == DW_TRAINS[cs]) {
                            return true
                        }
                    }
                }
            }
        }
        return false
    }

    function ae(cx, cr) {
        var cy, cv, cu;
        var ct;
        cu = cx["leftTicketDTO.train_date"];
        if (hainan_limit_start_traindate && C(cu) >= C(hainan_limit_start_traindate)) {
            if (hainan_limit_from_telcode && hainan_limit_to_telcode) {
                for (var cs = 0, cw = cr.length; cs < cw; cs++) {
                    cy = cr[cs].queryLeftNewDTO.from_station_telecode;
                    cv = cr[cs].queryLeftNewDTO.to_station_telecode;
                    ct = cr[cs].buttonTextInfo;
                    if (hainan_limit_from_telcode.indexOf(cy) > -1 && hainan_limit_to_telcode.indexOf(cv) > -1 && ct.indexOf("起售") > -1) {
                        return true
                    }
                }
            }
        }
        return false
    }

    function b8(cx, cs, cC, cy, cu, cB, cv) {
        cu = cu.replace("A", "6");
        var cA = cu ? cu.indexOf(cB) : -1;
        var cz = false;
        if (cA > -1 && (cA % 2) == 0) {
            cz = true
        }
        if (cB == "") {
            cz = false;
            var cw = cu.split("");
            for (var ct = 0; ct < cw.length; ct++) {
                if (ct % 2 == 0 && cw[ct] != "9" && cw[ct] != "P" && cw[ct] != "M" && cw[ct] != "O" && cw[ct] != "6" && cw[ct] != "4" && cw[ct] != "F" && cw[ct] != "3" && cw[ct] != "2" && cw[ct] != "1" && cw[ct] != "W") {
                    if (cw[ct + 1] == "1") {
                        cz = true;
                        break
                    }
                }
            }
        }
        if ("1" == cv || "2" == cv) {
            cx.push(' <td width="46" align="center" style="cursor: pointer;"  id="');
            cx.push(cC);
            cx.push(cy);
            cx.push('">');
            cx.push(cs);
            cx.push("</td>")
        } else {
            if ("有" == cs) {
                if (cC == "SWZ_" || cC == "TZ_") {
                    cx.push('<td width="46" align="center" class="yes" onclick="showTicketPrice(this)"　style="cursor: pointer;" id="');
                    cx.push(cC);
                    cx.push(cy);
                    cx.push('">');
                    if (cz) {
                        cx.push('<div class="sale" title="本席别票价打折">' + cs + '<span class="i-mark">折</span></div>')
                    } else {
                        cx.push(cs)
                    }
                    cx.push("</td>")
                } else {
                    if (cC == "ZY_" || cC == "ZE_") {
                        cx.push('<td width="46" align="center" class="yes" style="cursor: pointer;" onclick="showTicketPrice(this)" id="');
                        cx.push(cC);
                        cx.push(cy);
                        cx.push('">');
                        if (cz) {
                            cx.push('<div class="sale" title="本席别票价打折">' + cs + '<span class="i-mark">折</span></div>')
                        } else {
                            cx.push(cs)
                        }
                        cx.push("</td>")
                    } else {
                        cx.push('<td width="46" align="center" style="cursor: pointer;" class="yes" onclick="showTicketPrice(this)" id="');
                        cx.push(cC);
                        cx.push(cy);
                        cx.push('">');
                        if (cz) {
                            cx.push('<div class="sale" title="本席别票价打折">' + cs + '<span class="i-mark">折</span></div>')
                        } else {
                            cx.push(cs)
                        }
                        cx.push("</td>")
                    }
                }
            } else {
                if (cs == "无" || isNum(cs) >= 0) {
                    var cr = ' class="t-num" ';
                    if (cs == "无" || isNum(cs) == 0) {
                        cr = ""
                    }
                    if (cC == "SWZ_" || cC == "TZ_" || cC == "ZY_" || cC == "ZE_") {
                        cx.push('<td width="46" align="center" style="cursor: pointer;" ' + cr + ' onclick="showTicketPrice(this)" id="');
                        cx.push(cC);
                        cx.push(cy);
                        cx.push('">');
                        cx.push("<div>");
                        if (cz) {
                            cx.push('<div class="sale" title="本席别票价打折">' + cs + '<span class="i-mark">折</span></div>')
                        } else {
                            cx.push(cs)
                        }
                        cx.push("</td>")
                    } else {
                        cx.push('<td width="46" align="center" style="cursor: pointer;" ' + cr + ' onclick="showTicketPrice(this)" id="');
                        cx.push(cC);
                        cx.push(cy);
                        cx.push('">');
                        if (cz) {
                            cx.push('<div class="sale" title="本席别票价打折">' + cs + '<span class="i-mark">折</span></div>')
                        } else {
                            cx.push(cs)
                        }
                        cx.push("</td>")
                    }
                } else {
                    cx.push(' <td width="46" align="center" style="cursor: pointer;" onclick="showTicketPrice(this)"  id="');
                    cx.push(cC);
                    cx.push(cy);
                    cx.push('">');
                    cx.push(cs);
                    cx.push("</td>")
                }
            }
        }
    }

    function k(cs, cr) {
        ishaveCheckId = false;
        for (i = 0; i < cs.length; i++) {
            if (cs[i][0] == cr) {
                cs[i][1] = $("#".concat($("#".concat(cr)).attr("for"))).is(":checked");
                ishaveCheckId = true
            }
        }
        if (!ishaveCheckId) {
            cs[cs.length] = [cr, true]
        }
    }

    function bP() {
        e(bE);
        e(br);
        e(N)
    }

    function e(cr) {
        for (i = 0; i < cr.length; i++) {
            if (cr[i][1]) {
                $("#".concat(cr[i][0]).concat("_check")).attr("checked", true)
            }
        }
    }

    function C(cs) {
        var cr = new Date();
        var ct = cs.split("-");
        cr.setFullYear(parseInt(ct[0]), parseInt(ct[1] - 1, 10), parseInt(ct[2], 10));
        if (ct.length >= 6) {
            cr.setHours(ct[3], ct[4], ct[5])
        }
        return cr
    }

    Date.prototype.format = function (cs) {
        var ct = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        if (/(y+)/.test(cs)) {
            cs = cs.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
        }
        for (var cr in ct) {
            if (new RegExp("(" + cr + ")").test(cs)) {
                cs = cs.replace(RegExp.$1, RegExp.$1.length == 1 ? ct[cr] : ("00" + ct[cr]).substr(("" + ct[cr]).length))
            }
        }
        return cs
    };

    function aL(ct, cs) {
        var cr = new Date(Date.parse(ct.replace(/-/g, "/")));
        cr.setDate(cr.getDate() + cs);
        return P(cr)
    }

    function P(cs) {
        var ct = cs.getFullYear();
        var cv = cs.getMonth() + 1;
        var cu = cs.getDate();
        var cr = ct + "-" + cv + "-" + cu;
        return cr
    }

    function bF() {
        var ct = $("#train_date").val();
        var cs = $("#back_train_date").val();
        var cr = false;
        if ($("#wf").is(":checked")) {
            if (C(ct) <= C(cs)) {
                cr = true
            }
        } else {
            return true
        }
        return cr
    }

    function ch() {
        var cu = $.jc_getFromStation();
        if (cu) {
            var ct = cu.split(",");
            if (ct && ct.length == 2) {
                $("#fromStationText").val(ct[0]);
                $("#fromStation").val(ct[1])
            }
        }
        var cs = $.jc_getToStation();
        if (cs) {
            var ct = cs.split(",");
            if (ct && ct.length == 2) {
                $("#toStationText").val(ct[0]);
                $("#toStation").val(ct[1])
            }
        }
        var cv = [];
        cv = stu_buy_date.split("&");
        var cr = $.jc_getFromDate();
        if (cr) {
            if (cr >= cv[0] && cr <= cv[1]) {
                $("#train_date").val(cr)
            }
        }
        var cw = $.jc_getWfOrDc();
        if (cw && "wf" == cw) {
            $("#wf").click();
            var cx = $.jc_getToDate();
            if (cx) {
                if (cx >= cv[0] && cx <= cv[1]) {
                    $("#back_train_date").val(cx)
                }
            }
        } else {
            $("#dc").click()
        }
    }

    function a2() {
        $("#train_stop").on("mouseover", function (cr) {
            if (checkHover(cr, this)) {
                b2 = 1
            }
        }).on("mouseleave", function () {
            b2 = 0;
            $("#train_stop").hide();
            $("#train_table_").html("")
        })
    }

    function f() {
        fromStation = from_station;
        fromStationName = from_station_name;
        toStation = to_station;
        toStationName = to_station_name;
        trainDate = trainDate;
        backTrainDate = backTrainDate;
        bE = new Array();
        br = new Array();
        N = new Array()
    }

    function t() {
        if ($("#sf1").is(":checked")) {
            isOther = true;
            if (other_control < dataNumber) {
                for (var cr = other_control + 1; cr <= dataNumber; cr++) {
                    $("#date-list>li:nth-child(" + cr + ")").hide()
                }
            } else {
                for (var cr = 1; cr <= dataNumber; cr++) {
                    $("#date-list>li:nth-child(" + cr + ")").show()
                }
            }
        } else {
            isOther = false;
            if (stu_control < dataNumber) {
                for (var cr = stu_control + 1; cr <= dataNumber; cr++) {
                    $("#date-list>li:nth-child(" + cr + ")").hide()
                }
            } else {
                for (var cr = 1; cr <= dataNumber; cr++) {
                    $("#date-list>li:nth-child(" + cr + ")").show()
                }
            }
        }
    }

    function o() {
        $("#fromStation").val(fromStation);
        $("#fromStationText").val(fromStationName);
        $("#toStation").val(toStation);
        $("#toStationText").val(toStationName);
        $("#train_date").val(trainDate);
        if (isInMaintenanceHours) {
            if (!isSuperLogin) {
                $("#autoSubmit").prop("checked", false);
                $("#autoSubmit").attr("disabled", true);
                $("#autoSubmit").siblings("label").css("color", "#999");
                $("#autoSubmitTxt").attr("title", "系统维护时间下不允许自动提交");
                $("#partSubmit").prop("checked", false);
                $("#partSubmit").attr("disabled", true);
                $("#partSubmit").siblings("label").css("color", "#999");
                $("#partSubmitTxt").attr("title", "系统维护时间下不允许自动提交");
                $("#auto_query").prop("checked", false);
                $("#auto_query").attr("disabled", true);
                $("#auto_query").siblings("label").css("color", "#999");
                $("#autoQueryTxt").attr("title", "系统维护时间下不允许自动查询")
            }
        }
        if (backTrainDate != null && backTrainDate != "") {
            $("#back_train_date").val(backTrainDate)
        }
        if ($("#fromStationText").val() == "") {
            $("#fromStationText").val("简拼/全拼/汉字")
        }
        if ($("#toStationText").val() == "") {
            $("#toStationText").val("简拼/全拼/汉字")
        }
        if (page_show_flag == null) {
            ch();
            ax()
        } else {
            if (page_show_flag == "index") {
                bp()
            } else {
                if (page_show_flag == "preStep") {
                    cb()
                } else {
                    if (page_show_flag == "fcInit") {
                        v();
                        $("#autoSubmit").attr("disabled", true);
                        $("#autoSubmit").siblings("label").css("color", "#999");
                        $("#partSubmit").attr("disabled", true);
                        $("#partSubmit").siblings("label").css("color", "#999")
                    } else {
                        if (page_show_flag == "gcInit") {
                            bs();
                            $("#autoSubmit").attr("disabled", true);
                            $("#autoSubmit").siblings("label").css("color", "#999");
                            $("#partSubmit").attr("disabled", true);
                            $("#partSubmit").siblings("label").css("color", "#999")
                        }
                    }
                }
            }
        }
    }

    function bp() {
        if (tour_flag == "wf") {
            $("#wf").click()
        } else {
            if (tour_flag == "dc") {
                $("#dc").click()
            }
        }
        if (purposeCodeFromIndex == "0X00") {
            $("#sf2").click()
        } else {
            if (purposeCodeFromIndex == "ADULT") {
                $("#sf1").click()
            }
        }
        var cr = [];
        $("#date_range>ul>li").each(function () {
            var cs = $(this).children("span:first-child").html();
            cr.push(cs)
        });
        $("#query_ticket").click()
    }

    function ax() {
        var cu = decodeURI(window.location.href);
        value = cu.split("?")[1];
        if (value != "" && value != undefined && value != "undefined") {
            var cv = initParams(value);
            if (cv.linktypeid) {
                if ("dc" == cv.linktypeid) {
                    $("#dc").click()
                } else {
                    $("#wf").click();
                    var cs = $("#train_date").val();
                    var ct = $("#back_train_date").val();
                    if (!ct | C(cs) > C(ct)) {
                        $("#back_train_date").val(cs)
                    }
                }
            }
            if (cv.fromStationText) {
                $("#fromStationText").val(cv.fromStationText)
            }
            if (cv.fromStation) {
                $("#fromStation").val(cv.fromStation)
            }
            if (cv.toStationText) {
                $("#toStationText").val(cv.toStationText)
            }
            if (cv.toStation) {
                $("#toStation").val(cv.toStation)
            }
            if (cv.train_date) {
                $("#train_date").val(cv.train_date)
            }
            if (cv.back_train_date) {
                $("#back_train_date").val(cv.back_train_date)
            }
            if (cv.is_student && "Y" == cv.is_student) {
                $("#sf2").click()
            } else {
                $("#sf1").click()
            }
            if (cv.is_GDC && "Y" == cv.is_GDC) {
                $("#sear-sel-bd input[name='cc_type']")[0].click();
                $("#sear-sel-bd input[name='cc_type']")[1].click()
            }
            if (cv.auto_query && "Y" == cv.auto_query) {
                var cr = [];
                $("#date_range>ul>li").each(function () {
                    var cw = $(this).children("span:first-child").html();
                    cr.push(cw)
                });
                $("#query_ticket").click()
            }
        }
    }

    function cb() {
        $("#fromStationText").removeClass().addClass("inp_selected");
        $("#toStationText").removeClass().addClass("inp_selected");
        if (train_tour_flag == "dc") {
            ar(trainDate);
            $("#dc").click()
        }
        if (train_tour_flag == "wc") {
            ar(trainDate);
            $("#wf").click()
        }
        if (train_tour_flag == "fc") {
            ar(backTrainDate);
            $("#wf").click();
            $("#wf").attr("disabled", "true");
            $("#dc").attr("disabled", "true");
            $("#change_station").removeClass().addClass("i-change i-change2");
            $("#change_station").attr("style", "");
            $("#fromStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
            $("#toStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
            $("#toStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#fromStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
            $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
            $("#place_area>ul>li:nth-child(1)").addClass("no-change");
            $("#place_area>ul>li:nth-child(3)").addClass("no-change");
            $("#place_area>ul>li:nth-child(4)").addClass("no-change");
            $("#fromStationText").removeClass().addClass("inp-txt");
            $("#toStationText").removeClass().addClass("inp-txt");
            $("#change_station").unbind();
            $("#train_date").val(trainDate);
            $("#train_date").attr("readonly", "true");
            $("#train_date").removeClass().addClass("inp-txt");
            $("#train_date").unbind("click");
            $("#date_icon_1").unbind("click");
            $("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
            $("#back_train_date").val(backTrainDate);
            $("#back_train_date").removeAttr("disabled");
            $("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
            $("#back_train_date").removeClass().addClass("inp_selected");
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999")
        }
        if (train_tour_flag == "gc") {
            ar(trainDate);
            bs();
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999")
        }
    }

    function ar(ct) {
        for (var cr = 1; cr <= 20; cr++) {
            var cs = $("#date_range>ul>li:nth-child(" + cr + ")").children("span:first-child").text();
            cs = "2013-" + cs;
            if (ct == cs) {
                $("#date_range>ul>li").removeClass("sel");
                $("#date_range>ul>li").removeAttr("alt");
                $("#date_range>ul>li:nth-child(" + cr + ")").addClass("sel");
                $("#date_range>ul>li:nth-child(" + cr + ")").attr("alt", "show");
                $("#date_range>ul>li:nth-child(20)").addClass("end");
                $("#date_range>ul>li:nth-child(" + cr + ")").children("span:first-child").removeClass();
                $("#date_range>ul>li:nth-child(" + cr + ")").children("span:last-child").removeClass();
                $("#date_range>ul>li:nth-child(" + cr + ")").children("span:first-child").addClass("hide");
                $("#date_range>ul>li:nth-child(1)").children().addClass("first");
                bU = $("#date_range>ul>li:nth-child(" + cr + ")").children("span:first-child").text();
                break
            }
        }
    }

    function bs() {
        $("#fromStationText").attr("title", "改签时不得变更出发地或不能变更到达地");
        $("#dc").click();
        $("#wf").attr("disabled", "true");
        $("#dc").attr("disabled", "true");
        $("#place_area>ul>li:nth-child(1)").addClass("no-change");
        $("#place_area>ul>li:nth-child(3)").addClass("no-change");
        $("#place_area>ul>li:nth-child(5)").addClass("no-change");
        $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
        $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
        $("#fromStationText").unbind("focus").unbind("click").attr("readonly", "true");
        if ("Y" != canChangeToStation) {
            $("#toStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#toStationText").removeClass().addClass("inp-txt");
            $("#toStationText_label").addClass("color999")
        }
        $("#fromStationText").removeClass().addClass("inp-txt");
        $("#fromStationText_label").addClass("color999");
        $("#change_station").unbind();
        $("#change_station").removeClass().addClass("i-change i-change2");
        $("#change_station").attr("style", "")
    }

    function v() {
        $("#fromStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
        $("#toStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
        ar(backTrainDate);
        $("#wf").click();
        $("#dc").attr("disabled", "true");
        $("#wf").attr("disabled", "true");
        $("#place_area>ul>li:nth-child(1)").addClass("no-change");
        $("#place_area>ul>li:nth-child(3)").addClass("no-change");
        $("#place_area>ul>li:nth-child(4)").addClass("no-change");
        $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
        $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
        $("#train_date").attr("readonly", "true");
        $("#train_date").addClass("color999");
        $("#train_date").attr("disabled", true);
        $("#train_date").unbind("click");
        $("#date_icon_1").unbind("click");
        $("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
        $("#back_train_date").removeAttr("disabled");
        $("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
        $("#train_date").removeClass().addClass("inp-txt");
        $("#back_train_date").removeClass().addClass("inp_selected");
        $("#fromStationText").unbind("focus").unbind("unfocus").unbind("click").attr("readonly", "true");
        $("#toStationText").unbind("focus").unbind("unfocus").unbind("click").attr("readonly", "true");
        $("#fromStationText").removeClass().addClass("inp-txt");
        $("#toStationText").removeClass().addClass("inp-txt");
        $("#change_station").unbind();
        $("#change_station").removeClass().addClass("i-change i-change2");
        $("#change_station").attr("style", "")
    }

    function Y() {
        initPageTitle(1);
        $("#train_type_btn_all").css("cursor", "pointer");
        $("#start_time_btn_all").css("cursor", "pointer");
        $("#arrive_time_btn_all").css("cursor", "pointer");
        $("#seat_type_btn_all").css("cursor", "pointer");
        $("#from_station_name_all").css("cursor", "pointer");
        $("#to_station_name_all").css("cursor", "pointer");
        $("#change_station").css("cursor", "pointer");
        $("#show_more").css("cursor", "pointer");
        $("#date_normal").css("cursor", "pointer");
        $("#lookup").css("cursor", "pointer");
        $("#s_time").css("cursor", "pointer");
        $("#r_time").css("cursor", "pointer");
        $("#l_s").css("cursor", "pointer");
        $("#other_span_starttime").css("cursor", "pointer");
        $("#other_span_endtime").css("cursor", "pointer");
        $("#other_span_lishi").css("cursor", "pointer");
        $("#date_range>ul>li").children("span:nth-child(1)").css("cursor", "pointer");
        $("#cc_seat_type_btn_all>ul>li").hide();
        $("#train_date").removeClass().addClass("inp_selected");
        if ($("#fromStationText").val() != "" && $("#fromStationText").val() != "简拼/全拼/汉字" || $("#toStationText").val() != "" && $("#toStationText").val() != "简拼/全拼/汉字") {
            $("#fromStationText").removeClass().addClass("inp_selected");
            $("#toStationText").removeClass().addClass("inp_selected")
        }
        var cr = stu_start_train_date.split("&");
        var cs = stu_end_tain_date.split("&")
    }

    function ce(cs) {
        var cr = ("00" + (cs.getMonth() + 1)).slice(-2) + "-";
        cr += ("00" + cs.getDate()).slice(-2) + " 00:00:00";
        return cr
    }

    function y() {
        $("#dc").click(function () {
            $("#wf").attr("checked", false);
            $("#dc").attr("checked", "true");
            $("#place_area>ul>li:nth-child(5)").addClass("no-change");
            $("#back_train_date").removeClass().addClass("inp-txt");
            $("#back_train_date").attr("disabled", true)
        });
        $("#wf").click(function () {
            $("#dc").attr("checked", false);
            $("#wf").attr("checked", true);
            $("#back_train_date").removeAttr("disabled");
            $("#place_area>ul>li:nth-child(5)").removeClass();
            $("#train_date").removeClass().addClass("inp_selected");
            $("#back_train_date").removeClass().addClass("inp_selected");
            isbigdate = bF();
            if (!isbigdate) {
                train = $("#train_date").val();
                $("#back_train_date").val(train)
            }
            var cr = $("#train_date").val()
        })
    }

    function a6() {
        $("#avail_ticket").click(function () {
            $("#filterTic").attr("checked", false);
            aJ()
        });
        $("#avail_jf").click(function () {
            aJ()
        });
        $("#train_type_btn_all").click(function () {
            var cr = true;
            $("#sear-sel-bd input[name='cc_type']").each(function () {
                if (!this.checked) {
                    cr = false
                }
            });
            if (cr) {
                $("#sear-sel-bd input[name='cc_type']").each(function () {
                    this.checked = false
                });
                $("#train_type_btn_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_type']").each(function () {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $("#train_type_btn_all").removeClass().addClass("btn-all")
            }
            aJ()
        });
        $("#start_time_btn_all").click(function () {
            var cr = true;
            $("#sear-sel-bd input[name='cc_start_time']").each(function () {
                if (!this.checked) {
                    cr = false
                }
            });
            if (cr) {
                $("#sear-sel-bd input[name='cc_start_time']").each(function () {
                    this.checked = false
                });
                $("#start_time_btn_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_start_time']").each(function () {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $("#start_time_btn_all").removeClass().addClass("btn-all")
            }
            aJ()
        });
        $("#from_station_name_all").click(function () {
            var cr = true;
            $("#sear-sel-bd input[name='cc_from_station']").each(function () {
                if (!this.checked) {
                    cr = false
                }
            });
            if (cr) {
                $("#sear-sel-bd input[name='cc_from_station']").each(function () {
                    this.checked = false;
                    k(bE, "cc_from_station_" + $(this).val())
                });
                $("#from_station_name_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_from_station']").each(function () {
                    if (!this.checked) {
                        this.checked = true;
                        k(bE, "cc_from_station_" + $(this).val())
                    }
                });
                $("#from_station_name_all").removeClass().addClass("btn-all")
            }
            aJ()
        });
        $("#to_station_name_all").click(function () {
            var cr = true;
            $("#sear-sel-bd input[name='cc_to_station']").each(function () {
                if (!this.checked) {
                    cr = false
                }
            });
            if (cr) {
                $("#sear-sel-bd input[name='cc_to_station']").each(function () {
                    this.checked = false;
                    k(br, "cc_to_station_" + $(this).val())
                });
                $("#to_station_name_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_to_station']").each(function () {
                    if (!this.checked) {
                        this.checked = true;
                        k(br, "cc_to_station_" + $(this).val())
                    }
                });
                $("#to_station_name_all").removeClass().addClass("btn-all")
            }
            aJ()
        })
    }

    function bW() {
        $("#change_station").bind("click", function () {
            var cv = $("#fromStationText").val();
            var cx = $("#fromStation").val();
            var cw = $("#toStationText").val();
            var cr = $("#toStation").val();
            if ((cv != "" && cv != "简拼/全拼/汉字") && (cw != "" && cw != "简拼/全拼/汉字")) {
                $("#fromStationText").val(cw);
                $("#toStationText").val(cv);
                $("#fromStation").val(cr);
                $("#toStation").val(cx);
                $("#fromStationText").removeClass().addClass("inp_selected");
                $("#toStationText").removeClass().addClass("inp_selected")
            } else {
                be.checkForm();
                be.hideErrors();
                var cu = be.errorList;
                for (var ct = 0; ct < cu.length; ct++) {
                    var cs = cu[ct];
                    $(cs.element).next().addClass("error")
                }
                be.checkForm()
            }
            bO()
        })
    }

    function bO() {
        if ($("#fromStationText").val() == "简拼/全拼/汉字") {
            $.stationFor12306.from_to_station_class_gray($("#fromStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#fromStationText"))
        }
        if ($("#toStationText").val() == "简拼/全拼/汉字") {
            $.stationFor12306.from_to_station_class_gray($("#toStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#toStationText"))
        }
    }

    function bC() {
        $("#show_more").click(function () {
            var cr = $(this);
            if (cr.hasClass("down")) {
                au();
                cr.attr("class", "up")
            } else {
                document.getElementById("sear-sel-bd").style.height = "17px";
                cr.attr("class", "down");
                cr.parent().css("top", "58px")
            }
        })
    }

    function n() {
        if ($("#show_more").hasClass("up")) {
            au()
        }
    }

    function au() {
        var ct = "17px";
        var cv = 179;
        var cu = 28;
        var cr = $("#sear-sel-bd input[name='cc_from_station']").length;
        var cw = $("#sear-sel-bd input[name='cc_to_station']").length;
        var cs = $("#sear-sel-bd input[name='cc_seat_type']").length;
        if (cr > 7 && cr <= 14) {
            ct = (cv + cu) + "px"
        } else {
            if (cw > 7 && cr <= 14) {
                ct = (cv + cu * 2) + "px"
            } else {
                if (cs > 7) {
                    ct = (cv + cu) + "px"
                } else {
                    ct = cv + "px"
                }
            }
        }
        document.getElementById("sear-sel-bd").style.height = ct;
        $("#show_more").parent().css("top", "220px")
    }

    function d() {
        if (train_tour_flag == "fc" || (train_tour_flag == "gc" && canChangeToStation != "Y")) {
            return
        }
        var cr = ["fromStation", "toStation"];
        if (canChangeToStation == "Y") {
            cr = ["toStation"]
        }
        $.stationFor12306.init(cr, {
            _init_input: "简拼/全拼/汉字",
            _top_4_initInput: "简拼/全拼/汉字或↑↓",
            _unselected_class: "inpt_unselected",
            _selected_class: "inp_selected",
            confirmCallBack: function (cs, ct) {
                $("#yxtrain_close").click();
                cs.removeClass("error");
                if (cs.attr("id") == "fromStationText") {
                    if (ccSelected.length > 0) {
                        if (cs.val() != bS) {
                            $("#prior_train span:gt(1)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  请输入");
                            ccSelected = [];
                            $("#prior_seat span:gt(0)").remove();
                            $("#seat-list input").prop("checked", false);
                            xbChecked = []
                        }
                    }
                    bS = cs.val()
                }
                if (cs.attr("id") == "toStationText") {
                    if (ccSelected.length > 0) {
                        if (cs.val() != ca) {
                            $("#prior_train span:gt(1)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  请输入");
                            ccSelected = [];
                            $("#prior_seat span:gt(0)").remove();
                            $("#seat-list input").prop("checked", false);
                            xbChecked = []
                        }
                    }
                    ca = cs.val()
                }
            }
        });
        $("#fromStation_icon_image").css("cursor", "pointer");
        $("#fromStationText_label").click(function () {
            $("#fromStationText").focus()
        });
        $("#fromStation_icon_image").click(function () {
            $("#fromStationText").focus()
        });
        $("#toStation_icon_image").css("cursor", "pointer");
        $("#toStationText_label").click(function () {
            $("#toStationText").focus()
        });
        $("#toStation_icon_image").click(function () {
            $("#toStationText").focus()
        })
    }

    function co() {
        be = $("#queryLeftForm").validate({
            rules: {
                "leftTicketDTO.from_station": {required: true},
                "leftTicketDTO.to_station": {required: true},
                "leftTicketDTO.train_date": {required: true},
                back_train_date: {required: true}
            }, ignore: "", onsubmit: false, onfocusout: function () {
            }, onkeyup: function () {
            }, onclick: function () {
            }, highlight: function () {
            }, unhighlight: function () {
            }
        });
        bN()
    }

    function b(cr) {
        dhtmlx.alert({
            title: "提示", ok: messages["button.ok"], text: cr, type: "alert-error", callback: function () {
            }
        })
    }

    function bL(cs, cy) {
        var cr = be.checkForm();
        be.hideErrors();
        if (cr) {
            var cx = "";
            if (!bF()) {
                cx = "返回日期不得早于出发日期";
                b(cx);
                return false
            }
            var cv = [];
            if (cy) {
                cv = stu_buy_date.split("&")
            } else {
                cv = other_buy_date.split("&")
            }
            if (cv.length > 0) {
                if (cs < cv[0] || cs > cv[1]) {
                    cx = "您选择的日期不在预售期范围内！";
                    b(cx);
                    return false
                }
            }
        } else {
            var cw = be.errorList;
            for (var cu = 0; cu < cw.length; cu++) {
                var ct = cw[cu];
                $(ct.element).next().addClass("error")
            }
            return false
        }
        cg();
        return true
    }

    function cg() {
        $.jc_setFromStation($("#fromStationText").val(), $("#fromStation").val());
        $.jc_setToStation($("#toStationText").val(), $("#toStation").val());
        $.jc_setFromDate($("#train_date").val());
        $.jc_setToDate($("#back_train_date").val());
        $.jc_setWfOrDc($("#wf").is(":checked") ? "wf" : "dc")
    }

    function bN() {
        $("#query_ticket").unbind("click").click(function (cv) {
            $("#sel-buyer").hide();
            $("#sel-seat").hide();
            $("#sel-date").hide();
            if ($("#yxtrain_loading").is(":hidden")) {
                $("#yxtraindiv").hide()
            }
            if ($jpopup.isShow()) {
                $jpopup.quickHide()
            }
            if (myStopStation) {
                myStopStation.close()
            }
            if ($("#auto_query").is(":checked")) {
                var cu = $.trim($("#inp-train").val()).toUpperCase();
                if (cu.length != 0 && cu != "请输入") {
                    dhtmlx.alert({
                        title: "输入车次",
                        ok: "确定",
                        text: "您输入的优先车次未添加，请点击车次输入框后的添加按钮，或者取消车次输入框中的内容！",
                        type: "alert-error",
                        callback: function () {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }
                    });
                    return
                }
            }
            ah();
            if (document.getElementById("autoSubmit").checked) {
                if (passengerChecked.length == 0) {
                    dhtmlx.alert({
                        title: "选择乘车人", ok: "确定", text: "请选择乘车人", type: "alert-error", callback: function () {
                            return
                        }
                    });
                    return
                }
            }
            x = cl();
            var cw = x == "0X00" ? true : false;
            var cs = train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val());
            var cr = bL(cs, cw);
            if (!cr) {
                return
            }
            var ct = {
                "leftTicketDTO.train_date": cs,
                "leftTicketDTO.from_station": $("#fromStation").val(),
                "leftTicketDTO.to_station": $("#toStation").val(),
                purpose_codes: x
            };
            aW();
            aj(ct)
        })
    }

    var bi = function () {
        if ($("#filterTic").is(":checked")) {
            $("#avail_ticket").attr("checked", false);
            aM();
            if (bM.length != 0 && bM.length < bb.length) {
                $("#trainum").html(bM.length);
                aB(bM)
            }
        } else {
            bR = bf();
            if (bM.length != 0 && bM.length < bR.length) {
                $("#trainum").html(bR.length);
                aB(bR)
            }
        }
    };

    function b5(cu, cw) {
        var ct = [];
        for (var cs = 0; cs < cu.length; cs++) {
            var cx = [];
            var cr = cu[cs].split("|");
            cx.secretStr = cr[0];
            cx.buttonTextInfo = cr[1];
            var cv = [];
            cv.train_no = cr[2];
            cv.station_train_code = cr[3];
            cv.start_station_telecode = cr[4];
            cv.end_station_telecode = cr[5];
            cv.from_station_telecode = cr[6];
            cv.to_station_telecode = cr[7];
            cv.start_time = cr[8];
            cv.arrive_time = cr[9];
            cv.lishi = cr[10];
            cv.canWebBuy = cr[11];
            cv.yp_info = cr[12];
            cv.start_train_date = cr[13];
            cv.train_seat_feature = cr[14];
            cv.location_code = cr[15];
            cv.from_station_no = cr[16];
            cv.to_station_no = cr[17];
            cv.is_support_card = cr[18];
            cv.controlled_train_flag = cr[19];
            cv.gg_num = cr[20] ? cr[20] : "--";
            cv.gr_num = cr[21] ? cr[21] : "--";
            cv.qt_num = cr[22] ? cr[22] : "--";
            cv.rw_num = cr[23] ? cr[23] : "--";
            cv.rz_num = cr[24] ? cr[24] : "--";
            cv.tz_num = cr[25] ? cr[25] : "--";
            cv.wz_num = cr[26] ? cr[26] : "--";
            cv.yb_num = cr[27] ? cr[27] : "--";
            cv.yw_num = cr[28] ? cr[28] : "--";
            cv.yz_num = cr[29] ? cr[29] : "--";
            cv.ze_num = cr[30] ? cr[30] : "--";
            cv.zy_num = cr[31] ? cr[31] : "--";
            cv.swz_num = cr[32] ? cr[32] : "--";
            cv.srrb_num = cr[33] ? cr[33] : "--";
            cv.yp_ex = cr[34];
            cv.seat_types = cr[35];
            cv.exchange_train_flag = cr[36];
            cv.from_station_name = cw[cr[6]];
            cv.to_station_name = cw[cr[7]];
            cx.queryLeftNewDTO = cv;
            ct.push(cx)
        }
        return ct
    }

    function aj(cr) {
        $("#cc_seat_type_btn_all>ul>li").css("display", "none");
        if ($("#auto_query").is(":checked")) {
            $("#query_ticket").html("停止查询");
            $("#auto_query").attr("disabled", "true");
            $("#autoSubmit").attr("disabled", "true");
            $("#partSubmit").attr("disabled", "true");
            $("#query_ticket").unbind("click");
            $("#query_ticket").bind("click", function () {
                $("#filterTic").hide();
                clearInterval(a1);
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("");
                $("#query_ticket").unbind("click");
                $("#query_ticket").html("查询");
                if ($("#dc").is(":checked") && train_tour_flag != "gc") {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#auto_query").removeAttr("disabled");
                bN()
            })
        } else {
            if (countDown) {
                clearInterval(countDown)
            }
            $("#filterTicDiv").html("");
            bQ()
        }
        if ($("#yxtrain_loading").is(":hidden")) {
            var cs = dhtmlx.modalbox({
                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                callback: function () {
                }
            })
        }
        if ($jpopup.isShow()) {
            $jpopup.quickHide()
        }
        $("#queryLeftTable").html("");
        $("#sear-result").hide();
        if (a1) {
            clearInterval(a1)
        }
        b0(cr);
        $.ajax({
            type: "get", isTakeParam: false, beforeSend: function (ct) {
                ct.setRequestHeader("If-Modified-Since", "0");
                ct.setRequestHeader("Cache-Control", "no-cache")
            }, url: ctx + CLeftTicketUrl, data: cr, timeout: 10000, error: function (ct, cv, cu) {
                dhtmlx.modalbox.hide(cs);
                if ("timeout" == cv || "No Transport" == cv || "abort" == cv) {
                    if ($("#auto_query").is(":checked")) {
                        aj(cr)
                    }
                }
            }, success: function (cv) {
                dhtmlx.modalbox.hide(cs);
                if (cv.status) {
                    if (cv.data == null || cv.data.length == 0 || (cv.data.result && cv.data.result.length == 0)) {
                        $("#sear-sel").hide();
                        $("#sear-result").hide();
                        $("#t-list").hide();
                        $("#_lc_link_foot").hide();
                        $("#no_filter_ticket_fromstation").html($("#fromStationText").val());
                        $("#no_filter_ticket_tostation").html($("#toStationText").val());
                        $("#no_filter_ticket_6").hide();
                        $("#no_filter_ticket_2").show();
                        $(".content").css("min-height", "344px");
                        $("#yxtraindiv").hide();
                        trainListForIE = [];
                        return
                    }
                    if (cv.data.flag == 1) {
                        cv.data = b5(cv.data.result, cv.data.map)
                    }
                    trainListForIE = [];
                    for (var cw = 0; cw < cv.data.length; cw++) {
                        trainListForIE.push(cv.data[cw].queryLeftNewDTO.station_train_code + "(" + cv.data[cw].queryLeftNewDTO.start_time + "--" + cv.data[cw].queryLeftNewDTO.arrive_time + ")")
                    }
                    if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
                        var cD = [];
                        for (var cw = 0, cE = cv.data.length; cw < cE; cw++) {
                            var cu = cv.data[cw].queryLeftNewDTO;
                            var cz = cu.station_train_code;
                            cz = cz.substring(0, 1);
                            if ("G" == cz || "D" == cz) {
                                cD.push(cv.data[cw])
                            }
                        }
                        cv.data = cD
                    }
                    if ($("#DW_SHOW_STR")[0]) {
                        $("#DW_SHOW_STR").remove()
                    }
                    if ($("#hainan_limit_msg")[0]) {
                        $("#hainan_limit_msg").remove()
                    }
                    $("#sear-result>p").eq(1).remove();
                    $("#sear-sel").show();
                    $("#sear-result").show();
                    $("#t-list").show();
                    $("#no_filter_ticket_2").hide();
                    $("#no_filter_ticket_6").hide();
                    $("#no_filter_ticket").hide();
                    var ct = "";
                    var cy = "";
                    if (train_tour_flag != null && train_tour_flag == "fc") {
                        var cC = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aE($("#back_train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cv.data.length).concat("</strong>个车次");
                        if (bY(cv.data)) {
                            ct = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
                        } else {
                            if (hainan_limit_msg && ae(cr, cv.data)) {
                                cy = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                            }
                        }
                        if ($("#auto_query").is(":checked")) {
                            var cA = "";
                            for (var cx = 0; cx < 25; cx++) {
                                cA = cA + "&nbsp;"
                            }
                            cC = cC.concat(cA + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                        }
                        $("#sear-result>p").html(cC);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", bi)
                        }
                    } else {
                        var cC = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aE($("#train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cv.data.length).concat("</strong>个车次");
                        if (bY(cv.data)) {
                            ct = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
                        } else {
                            if (hainan_limit_msg && ae(cr, cv.data)) {
                                cy = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                            }
                        }
                        if ($("#auto_query").is(":checked")) {
                            var cA = "";
                            for (var cx = 0; cx < 25; cx++) {
                                cA = cA + "&nbsp;"
                            }
                            cC = cC.concat(cA + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                        }
                        $("#sear-result>p").html(cC);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", bi)
                        }
                    }
                    if (!$("#DW_SHOW_STR")[0]) {
                        $("#sear-result>p").after(ct)
                    }
                    if (cy) {
                        $("#sear-result>p").after(cy)
                    }
                    if (!$("#lc_msg")[0] && cy == "" && ct == "" && $("#fromStationText").attr("readonly") != "readonly" && !$("#autoSubmit").is(":checked")) {
                        var cB = '<p id="lc_msg">您可使用<a style="color:#07f" href="' + ctx + 'lcQuery/init">接续换乘</a>功能，查询途中换乘一次的部分列车余票情况。</p>';
                        $("#sear-result>p").after(cB)
                    }
                    if (dwTranTimeStr) {
                        clearInterval(dwTranTimeStr)
                    }
                    if ($("#DW_SHOW_STR")[0]) {
                        dwTranTimeStr = window.setInterval(function () {
                            if ($("#DW_SHOW_STR").attr("data") == "1") {
                                $("#DW_SHOW_STR").attr("data", "2").html("夜行两千公里 最低不足千元")
                            } else {
                                $("#DW_SHOW_STR").attr("data", "1").html("高铁动卧 夕发朝至 风雨无阻 省时省钱")
                            }
                        }, 1300)
                    }
                    if ($("#hainan_limit_msg")[0]) {
                        hainan_tip = null;
                        hainan_tip = new Marquee({
                            ID: "hainan_limit_msg",
                            Direction: "left",
                            Step: 1,
                            Width: 0,
                            Height: 0,
                            Timer: 30,
                            DelayTime: 0,
                            WaitTime: 0,
                            ScrollStep: 0
                        })
                    }
                    bb = cv.data;
                    bo(bb);
                    n();
                    bH(bb);
                    bP();
                    L();
                    if (!$("#yxtrain_loading").is(":hidden")) {
                        $.showYxTrainData()
                    }
                    yxTrainChange = $("#fromStationText").val() + "#" + $("#toStationText").val() + "#" + $("#train_date").val();
                    $("#_lc_link_foot").show()
                } else {
                    if (cv && cv.c_url) {
                        CLeftTicketUrl = cv.c_url;
                        aj(cr)
                    }
                }
            }, error: function (ct, cv, cu) {
                dhtmlx.modalbox.hide(cs);
                if (ct.status == 403) {
                    if ($("#query_ticket").html() == "停止查询") {
                        if (queryLeftTicket_times <= queryLeftTicket_count) {
                            $("#query_ticket").trigger("click").trigger("click");
                            queryLeftTicket_times++
                        } else {
                            queryLeftTicket_times = 0
                        }
                        return
                    }
                    if (ct.responseText == "0" || ct.responseText == "1" || ct.responseText == "2" || ct.responseText == "3" || ct.responseText == "4") {
                        cn("查询失败！（" + ct.responseText + "）");
                        return
                    } else {
                        cn("查询失败，请稍后再试！");
                        return
                    }
                } else {
                    if (cv = "timeout") {
                        cn("查询超时，请稍后再试！");
                        return
                    }
                }
            }
        });
        a0()
    }

    function cn(cr) {
        $("#sear-sel").hide();
        $("#sear-result").hide();
        $("#t-list").hide();
        $("#_lc_link_foot").hide();
        $("#no_filter_ticket_2").hide();
        $("#no_filter_ticket_6").find("p").html(cr);
        $("#no_filter_ticket_6").show();
        $(".content").css("min-height", "344px");
        $("#yxtraindiv").hide();
        trainListForIE = []
    }

    function ab() {
        dataNumber = other_control > stu_control ? other_control : stu_control;
        for (var cr = endShow + 1; cr <= dataNumber; cr++) {
            $("#date_range>ul>li:nth-child(" + cr + ")").hide()
        }
        var cs;
        $("#date_range>ul>li").each(function (cw) {
            var cu = fullDateArr[cw];
            var ct = new Date(Date.parse(cu.replace(/-/g, "/")));
            var cv = $("#date_range>ul>li:nth-child(" + (cw + 1) + ")>span[class=hide]").text().substring(0, 5) + bl(ct);
            $("#date_range>ul>li:nth-child(" + (cw + 1) + ")>span[class=hide]").text(cv);
            cs = $(this).children("span:first-child").html();
            change_dates_arr.push(cs)
        });
        if (index_train_date == null) {
            $("#date_range>ul>li:nth-child(1)").addClass("sel");
            $("#date_range>ul>li:nth-child(1)").attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $("#date_range>ul>li:nth-child(1)").children("span:first-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $("#date_range>ul>li:nth-child(1)").children("span:first-child").addClass("hide");
            bU = $("#date_range>ul>li:nth-child(1)").children("span:first-child").text()
        }
        bj()
    }

    function bl(cs) {
        var cv = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        var cu = 0;
        for (var ct = 0; ct < cv.length; ct++) {
            if (cs.toString().indexOf(cv[ct]) > -1) {
                cu = ct + 1;
                break
            }
        }
        var cr = "";
        switch (cu) {
            case 1:
                cr = " 周一";
                break;
            case 2:
                cr = " 周二";
                break;
            case 3:
                cr = " 周三";
                break;
            case 4:
                cr = " 周四";
                break;
            case 5:
                cr = " 周五";
                break;
            case 6:
                cr = " 周六";
                break;
            case 7:
                cr = " 周日";
                break
        }
        return cr
    }

    function bm() {
        $("#date_range>ul>li").unbind("mouseover");
        $("#date_range>ul>li").unbind("mouseout");
        $("#date_range").unbind("mouseleave");
        $("#date_range>ul>li").unbind("click")
    }

    function bj() {
        $("#date_range>ul>li").bind("mouseover", function () {
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li").removeAttr("alt");
            $(this).addClass("sel");
            $(this).attr("alt", "show");
            $("#date_range>ul>li:nth-child(" + endShow + ")").addClass("end");
            $(this).children("span:first-child").removeClass();
            $(this).children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
            $(this).children("span:first-child").addClass("hide")
        });
        $("#date_range>ul>li").bind("mouseout", function () {
            $("#date_range>ul>li").each(function (cr) {
                $(this).children("span:first").removeClass();
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
                $(this).children("span:last").addClass("hide")
            })
        });
        $("#date_range").bind("mouseleave", function () {
            for (var cr = firstShow; cr <= endShow; cr++) {
                var cs = $("#date_range>ul>li:nth-child(" + cr + ")").children("span:first-child").text();
                if (bU == cs) {
                    $("#date_range>ul>li").removeClass("sel");
                    $("#date_range>ul>li").removeAttr("alt");
                    $("#date_range>ul>li:nth-child(" + cr + ")").addClass("sel");
                    $("#date_range>ul>li:nth-child(" + cr + ")").attr("alt", "show");
                    $("#date_range>ul>li:nth-child(" + endShow + ")").addClass("end");
                    $("#date_range>ul>li:nth-child(" + cr + ")").children("span:first-child").removeClass();
                    $("#date_range>ul>li:nth-child(" + cr + ")").children("span:last-child").removeClass();
                    $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
                    $("#date_range>ul>li:nth-child(" + cr + ")").children("span:first-child").addClass("hide");
                    break
                }
            }
        });
        $("#date_range>ul>li").bind("click", function () {
            var cs = new Date();
            var cv = "";
            if (train_tour_flag != null && train_tour_flag == "fc") {
                nowDate = $("#back_train_date").val();
                var cx = $(this).children("span:first-child").text();
                var cr = Number(cx.substring(0, 2));
                var cz = new Date().getMonth();
                var cu = cs.getFullYear();
                if (cz > cr) {
                    cu = cu + 1
                }
                $("#back_train_date").val(cu + "-" + cx);
                backTrainDate = cu + "-" + cx;
                cv = backTrainDate;
                if (!bF()) {
                    $("#back_train_date").val(nowDate);
                    b("返程日期不得小于出发日期.");
                    return
                }
                z("back_train_date")
            } else {
                nowDate = $("#train_date").val();
                var cx = $(this).children("span:first-child").text();
                var cr = Number(cx.substring(0, 2));
                var cz = new Date().getMonth();
                var cu = cs.getFullYear();
                if (cz > cr) {
                    cu = cu + 1
                }
                $("#train_date").val(cu + "-" + cx);
                trainDate = cu + "-" + cx;
                cv = trainDate;
                if (!bF()) {
                    $("#back_train_date").val($("#train_date").val())
                }
                z("train_date")
            }
            x = cl();
            var cw = x == "0X00" ? true : false;
            var cy = bL(cv, cw);
            if (!cy) {
                return
            }
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li").removeAttr("alt");
            $(this).addClass("sel");
            $(this).attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $(this).children("span:first-child").removeClass();
            $(this).children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $(this).children("span:first-child").addClass("hide");
            bU = $(this).children("span:first-child").text();
            var ct = {
                "leftTicketDTO.train_date": cv,
                "leftTicketDTO.from_station": $("#fromStation").val(),
                "leftTicketDTO.to_station": $("#toStation").val(),
                purpose_codes: cl()
            };
            aj(ct)
        });
        $("#sf1").click(function () {
            isOther = true;
            aW();
            if (other_control < dataNumber) {
                for (var cr = other_control + 1; cr <= dataNumber; cr++) {
                    $("#date-list>li:nth-child(" + cr + ")").hide()
                }
            } else {
                for (var cr = 1; cr <= dataNumber; cr++) {
                    $("#date-list>li:nth-child(" + cr + ")").show()
                }
            }
        });
        $("#sf2").click(function () {
            isOther = false;
            aW();
            if (stu_control < dataNumber) {
                for (var cr = stu_control; cr <= dataNumber; cr++) {
                    $("#date-list>li:nth-child(" + cr + ")").hide()
                }
            } else {
                for (var cr = 1; cr <= dataNumber; cr++) {
                    $("#date-list>li:nth-child(" + cr + ")").show()
                }
            }
        })
    }

    function bx() {
        $("#sear-sel-bd input[name='cc_type']").click(function () {
            var cr = $("input[name='cc_type']");
            var cs = $("input[name='cc_type']:checked");
            if ($(this).is(":checked")) {
                if (cr && cs && cs.length == cr.length) {
                    $("#train_type_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#train_type_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cr && cs && cs.length == 0) {
                    $("#train_type_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#train_type_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aJ()
        });
        $("#sear-sel-bd input[name='cc_start_time']").click(function () {
            var cr = $("input[name='cc_start_time']");
            var cs = $("input[name='cc_start_time']:checked");
            if ($(this).is(":checked")) {
                if (cr && cs && cs.length == cr.length) {
                    $("#start_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#start_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cr && cs && cs.length == 0) {
                    $("#start_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#start_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aJ()
        });
        $("#sear-sel-bd input[name='cc_arrive_time']").click(function () {
            var cr = $("input[name='cc_arrive_time']");
            var cs = $("input[name='cc_arrive_time']:checked");
            if ($(this).is(":checked")) {
                if (cr && cs && cs.length == cr.length) {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cr && cs && cs.length == 0) {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aJ()
        });
        $("#cc_start_time").change(function () {
            aJ()
        })
    }

    function Q(ct, cs) {
        if (cs.length == 0) {
            return true
        }
        for (var cr = 0; cr < cs.length; cr++) {
            if (ct.queryLeftNewDTO.station_train_code.substring(0, 1) == cs[cr]) {
                return true
            }
            if (cs[cr] == "QT") {
                if (ct.queryLeftNewDTO.station_train_code.substring(0, 1) != "G" && ct.queryLeftNewDTO.station_train_code.substring(0, 1) != "D" && ct.queryLeftNewDTO.station_train_code.substring(0, 1) != "C" && ct.queryLeftNewDTO.station_train_code.substring(0, 1) != "T" && ct.queryLeftNewDTO.station_train_code.substring(0, 1) != "K" && ct.queryLeftNewDTO.station_train_code.substring(0, 1) != "Z") {
                    return true
                }
            }
            if (cs[cr] == "G") {
                if (ct.queryLeftNewDTO.station_train_code.substring(0, 1) == "C" || ct.queryLeftNewDTO.station_train_code.substring(0, 1) == "G") {
                    return true
                }
            }
        }
        return false
    }

    function aK(cu, cw) {
        if (cw.length == 0) {
            return true
        }
        for (var cr = 0; cr < cw.length; cr++) {
            var cv = (cu.queryLeftNewDTO.start_time.replace(":", ""));
            var cs = Number(cw[cr].substring(0, 4));
            var ct = Number(cw[cr].substring(4, 8));
            if (cv >= cs && cv <= ct) {
                return true
            }
        }
        return false
    }

    function aT(ct, cr) {
        if (cr.length == 0) {
            return true
        }
        for (var cs = 0; cs < cr.length; cs++) {
            if (cr[cs] == "SWZ") {
                if (ct.queryLeftNewDTO.swz_num != "--" && ct.queryLeftNewDTO.swz_num != "无") {
                    aD.push("SWZ");
                    return true
                }
            }
            if (cr[cs] == "TZ") {
                if (ct.queryLeftNewDTO.tz_num != "--" && ct.queryLeftNewDTO.tz_num != "无") {
                    aD.push("TZ");
                    return true
                }
            }
            if (cr[cs] == "ZY") {
                if (ct.queryLeftNewDTO.zy_num != "--" && ct.queryLeftNewDTO.zy_num != "无") {
                    aD.push("ZY");
                    return true
                }
            }
            if (cr[cs] == "ZE") {
                if (ct.queryLeftNewDTO.ze_num != "--" && ct.queryLeftNewDTO.ze_num != "无") {
                    aD.push("ZE");
                    return true
                }
            }
            if (cr[cs] == "GR") {
                if (ct.queryLeftNewDTO.gr_num != "--" && ct.queryLeftNewDTO.gr_num != "无") {
                    aD.push("GR");
                    return true
                }
            }
            if (cr[cs] == "RW") {
                if (ct.queryLeftNewDTO.rw_num != "--" && ct.queryLeftNewDTO.rw_num != "无") {
                    aD.push("RW");
                    return true
                }
            }
            if (cr[cs] == "YW") {
                if (ct.queryLeftNewDTO.yw_num != "--" && ct.queryLeftNewDTO.yw_num != "无") {
                    aD.push("YW");
                    return true
                }
            }
            if (cr[cs] == "RZ") {
                if (ct.queryLeftNewDTO.rz_num != "--" && ct.queryLeftNewDTO.rz_num != "无") {
                    aD.push("RZ");
                    return true
                }
            }
            if (cr[cs] == "YZ") {
                if (ct.queryLeftNewDTO.yz_num != "--" && ct.queryLeftNewDTO.yz_num != "无") {
                    aD.push("YZ");
                    return true
                }
            }
            if (cr[cs] == "SRRB") {
                if (ct.queryLeftNewDTO.srrb_num != "--" && ct.queryLeftNewDTO.srrb_num != "无") {
                    aD.push("SRRB");
                    return true
                }
            }
            if (cr[cs] == "YYRW") {
                if (ct.queryLeftNewDTO.yyrw_num != "--" && ct.queryLeftNewDTO.yyrw_num != "无") {
                    aD.push("YYRW");
                    return true
                }
            }
            if (cr[cs] == "WZ") {
                if (ct.queryLeftNewDTO.wz_num != "--" && ct.queryLeftNewDTO.wz_num != "无") {
                    aD.push("WZ");
                    return true
                }
            }
        }
        return false
    }

    function ba(cs, cr) {
        if (cr.length == 0) {
            return true
        }
        for (var ct = 0; ct < cr.length; ct++) {
            if (cr[ct] == cs.queryLeftNewDTO.from_station_name) {
                return true
            }
        }
        return false
    }

    function V(cr, cs) {
        if (cs.length == 0) {
            return true
        }
        for (var ct = 0; ct < cs.length; ct++) {
            if (cs[ct] == cr.queryLeftNewDTO.to_station_name) {
                return true
            }
        }
        return false
    }

    function w(cs, cr) {
        if (cr.length == 0) {
            return true
        }
        for (var ct = 0; ct < cr.length; ct++) {
            if (cr[ct].toLowerCase() == cs.queryLeftNewDTO.station_train_code.toLowerCase()) {
                return true
            }
        }
        return false
    }

    window._tpp_ = "abcdefghIjkLm nopqrstuvwxiyz";

    function bf() {
        var cs = [];
        var cy = [];
        var cu = [];
        var cw = [];
        $("#sear-sel-bd input[name='cc_type']").each(function () {
            if (this.checked == true) {
                cs.push($(this).val())
            }
        });
        cy.push($("#cc_start_time option:selected").val());
        $("#sear-sel-bd input[name='cc_from_station']").each(function () {
            if (this.checked == true) {
                cu.push($(this).val())
            }
        });
        $("#sear-sel-bd input[name='cc_to_station']").each(function () {
            if (this.checked == true) {
                cw.push($(this).val())
            }
        });
        var ct = bb;
        var cx = [];
        if (cs.length > 0 || cy.length > 0 || filteredTrainArriveTime.length > 0 || bT.length > 0 || cu.length > 0 || cw.length > 0 || ay.getComboText() != "" || $("#avail_ticket")[0].checked) {
            for (var cr = 0; cr < ct.length; cr++) {
                var cv = ct[cr];
                if (!Q(cv, cs)) {
                    continue
                }
                if (!aK(cv, cy)) {
                    continue
                }
                if (!ba(cv, cu)) {
                    continue
                }
                if (!V(cv, cw)) {
                    continue
                }
                if ($("#avail_ticket")[0].checked) {
                    if (cv.queryLeftNewDTO.canWebBuy == "Y") {
                        cx.push(cv)
                    }
                } else {
                    cx.push(cv)
                }
            }
            ct = cx
        }
        return ct
    }

    (function (cr) {
        cr._Z_ = cr._Z_ || {};
        cr._Z_["YLW"] = function () {
            var cs = "";
            pp = [25, 21, 7, 6, 14, 25, 9, 13, 4, 22, 15, 11, 13, 8];
            while (pp[0]) {
                cs += cr._tpp_.charAt(pp.pop())
            }
            return cs
        }
    })(window);

    function I(cr, cs) {
        if (cs == null || cs == "" || cr.length == 0 || cs.length > cr.length) {
            return false
        }
        if (cr.substr(0, cs.length) == cs) {
            return true
        } else {
            return false
        }
        return true
    }

    function a7(cr) {
        bh = ccSelected;
        bT = xbChecked;
        if (w(cr, bh) && aT(cr, bT)) {
            return true
        } else {
            return false
        }
    }

    function aM() {
        bM = [];
        bR = bf();
        b1 = bV(bR);
        for (var cr = 0; cr < b1.length; cr++) {
            var cs = b1[cr];
            if (!a7(cs)) {
                continue
            }
            if (cs.queryLeftNewDTO.canWebBuy == "Y") {
                bM.push(cs)
            }
        }
    }

    var bB;

    function bI() {
        if (ischeckAutoSubmitCode) {
            $("#randCode2").on("keyup", function (cr) {
                if ($("#randCode2").val().length == 4 && bB != $("#randCode2").val()) {
                    $.ajax({
                        url: ctx + "passcodeNew/checkRandCodeAnsyn",
                        type: "post",
                        data: {randCode: $("#randCode2").val(), rand: "sjrand"},
                        async: false,
                        success: function (ct) {
                            if (ct.data == "N") {
                                $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                                $("#c_error2").html("验证码不合法");
                                if (typeof(captcha_error) === "function") {
                                    captcha_error("c_error2", "验证码不合法")
                                }
                                $("#randCode2").val("");
                                $("#c_error2").addClass("error");
                                $("#i-ok2").css("display", "none");
                                $("#c_error2").css("margin-left", "15px")
                            } else {
                                bB = $("#randCode2").val();
                                $("#back_edit").trigger("click");
                                var cs = "99999GGGGG";
                                var cv = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
                                var cu = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
                                if (isAsync == ticket_submit_order.request_flag.isAsync) {
                                    if (K.queryLeftNewDTO.train_no.indexOf(cs) > -1 && cv.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1 && cu.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
                                        dhtmlx.createWin({
                                            winId: "confirmG1234",
                                            closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                                            okId: "goto_integration_G1234",
                                            okCallBack: function () {
                                                q()
                                            },
                                            callback: function () {
                                                return
                                            }
                                        })
                                    } else {
                                        q()
                                    }
                                } else {
                                    if (K.queryLeftNewDTO.train_no.indexOf(cs) > -1 && cv.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1 && cu.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
                                        dhtmlx.createWin({
                                            winId: "confirmG1234",
                                            closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                                            okId: "goto_integration_G1234",
                                            okCallBack: function () {
                                                cp()
                                            },
                                            callback: function () {
                                                return
                                            }
                                        })
                                    } else {
                                        cp()
                                    }
                                }
                                $("#randCode2").removeClass("inptxt w100 error").addClass("inptxt w100");
                                $("#i-ok2").css("display", "block");
                                $("#c_error2").html("");
                                $("#c_error2").removeClass("error");
                                return
                            }
                        }
                    })
                } else {
                    if ($("#randCode2").val().length != 4) {
                        $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                        $("#c_error2").html("请输入四位长度验证码");
                        $("#c_error2").addClass("error");
                        $("#i-ok2").css("display", "none");
                        $("#c_error2").css("margin-left", "15px")
                    }
                }
                bB = $("#randCode2").val()
            })
        }
    }

    function al(cr) {
        return aP.autoSubmit(bM, passengerChecked, xbChecked, ccSelected)
    }

    var aQ = false;

    function L() {
        $("#queryLeftTable").html("");
        $("#trainum").html("");
        aM();
        if ($("#auto_query").is(":checked")) {
            if (b1.length < 0) {
                $("#no_filter_ticket").show();
                $("#trainum").html("0");
                aQ = true
            } else {
                if (bM.length > 0) {
                    $("#no_filter_ticket").hide();
                    if (document.getElementById("autoSubmit").checked) {
                        var cv = [];
                        for (var cB = 0; cB < passengerChecked.length; cB++) {
                            var cu = false;
                            var cy = passengerChecked[cB];
                            for (var cC = 0; cC < cv.length; cC++) {
                                var cs = cv[cC];
                                if (cy.passenger_type != 2) {
                                    if (cy.passenger_name == cs.passenger_name && cy.passenger_id_type_code == cs.passenger_id_type_code && cy.passenger_id_no == cs.passenger_id_no) {
                                        if (cs.passenger_type != 2) {
                                            cu = true;
                                            break
                                        }
                                    }
                                }
                            }
                            if (!cu) {
                                cv.push(cy)
                            }
                        }
                        passengerChecked = cv;
                        var cH = al(true);
                        if (cH[0] == 1 || cH[0] == 2) {
                            aQ = true;
                            K = cH[1];
                            var cA = cl();
                            var cE = K.secretStr;
                            m(cH);
                            var cD = checkusermdId != undefined ? "&_json_att=" + encodeURIComponent(checkusermdId) : "";
                            var cr = "";
                            if ($("#dc").is(":checked")) {
                                cr = "dc"
                            } else {
                                cr = "wc"
                            }
                            if ("undefined" == typeof(submitForm)) {
                                var cI = "secretStr=" + cE + "&train_date=" + $("#train_date").val() + "&tour_flag=" + cr + "&purpose_codes=" + cA + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + cD + "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=" + getpassengerTicketsForAutoSubmit() + "&oldPassengerStr=" + getOldPassengersForAutoSubmit()
                            } else {
                                var ct = submitForm();
                                var cz = ct.split(":::");
                                var cG = cz[0].split(",-,")[0];
                                var cx = cz[0].split(",-,")[1];
                                var cF = cz[1].split(",-,")[0];
                                var cw = cz[1].split(",-,")[1];
                                var cI = escape(cG) + "=" + escape(cx) + "&" + cF + "=" + cw + "&secretStr=" + cE + "&train_date=" + $("#train_date").val() + "&tour_flag=" + cr + "&purpose_codes=" + cA + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + cD + "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=" + getpassengerTicketsForAutoSubmit() + "&oldPassengerStr=" + getOldPassengersForAutoSubmit()
                            }
                            $.ajax({
                                type: "post",
                                url: ctx + "confirmPassenger/autoSubmitOrderRequest",
                                async: false,
                                data: cI,
                                success: function (cJ) {
                                    if (cJ.status) {
                                        if (!cJ.data.submitStatus) {
                                            if (cJ.data.isRelogin) {
                                                window.location.href = ctx + "view/index.html?random=" + new Date().getTime()
                                            } else {
                                                if (cJ.data.isNoActive) {
                                                    ac(cJ.data.errMsg, true, "", true, "warn")
                                                } else {
                                                    if (cJ.data.checkSeatNum) {
                                                        ac("很抱歉，无法提交您的订单!", true, "原因： " + cJ.data.errMsg, true, "warn")
                                                    } else {
                                                        ac("车票信息不合法!", true, "原因： " + cJ.data.errMsg, true, "warn")
                                                    }
                                                }
                                            }
                                            return
                                        }
                                        intervalTime = cJ.data.ifShowPassCodeTime;
                                        if (cJ.data.ifShowPassCode == "Y") {
                                            bJ(true)
                                        } else {
                                            bJ(false)
                                        }
                                        canChooseSeats = cJ.data.canChooseSeats;
                                        choose_Seats = cJ.data.choose_Seats;
                                        canChooseBeds = cJ.data.canChooseBeds;
                                        isCanChooseMid = cJ.data.isCanChooseMid;
                                        if (cJ.data.smokeStr != "" && cJ.data.smokeStr.length > 0) {
                                            $("#dialog_smoker_msg").html(cJ.data.smokeStr);
                                            dhtmlx.createWin({
                                                winId: "dialog_smoker",
                                                closeWinId: ["dialog_smoker_close", "dialog_smoker_cancel"],
                                                okId: "dialog_smoker_ok",
                                                okCallBack: function () {
                                                    l(cJ, cA)
                                                },
                                                checkConfirm: function () {
                                                    return true
                                                },
                                                callback: function () {
                                                }
                                            })
                                        } else {
                                            l(cJ, cA)
                                        }
                                    }
                                }
                            })
                        } else {
                            aQ = false;
                            M()
                        }
                    } else {
                        aQ = true
                    }
                } else {
                    aQ = false;
                    M()
                }
                $("#trainum").html(b1.length);
                aB(b1)
            }
        } else {
            if (b1.length < 0) {
                aQ = true;
                $("#no_filter_ticket").show();
                $("#no_filter_ticket_msg_1").show();
                $("#no_filter_ticket_msg_2").hide();
                $("#trainum").html("0");
                return
            } else {
                aQ = true;
                $("#trainum").html(b1.length);
                aB(b1)
            }
        }
    }

    function l(cs, ct) {
        if (cs.data.isNeedPassCode == "N") {
            $("#leftTicketOrderNote").hide();
            $("#qr_submit").nextAll("a").eq(0).hide();
            ischeckAutoSubmitCode = false
        } else {
            $("#leftTicketOrderNote").show();
            $("#qr_submit").nextAll("a").eq(0).show();
            ischeckAutoSubmitCode = true
        }
        if (cs.data && undefined != cs.data.result && typeof(cs.data.result) != "undefined") {
            var cu = cs.data.get608Msg;
            if (undefined != cu && typeof(cu) != "undefined" && "" != cu) {
                if (cs.data.name && cs.data.card && cs.data.tel) {
                    $("#608_check_msg").html(cu);
                    dhtmlx.createWin({
                        winId: "608_check",
                        closeWinId: ["608_check_close", "608_check_cancel"],
                        okId: "608_check_ok",
                        okCallBack: function () {
                            $("#608_name").html(cs.data.name);
                            $("#608_card").html(cs.data.card);
                            $("#608_tel").html(cs.data.tel);
                            $("#ticketInfo").html(cs.data.ticketInfo);
                            dhtmlx.createWin({
                                winId: "608_complain",
                                closeWinId: ["608_complain_close", "608_complain_cancel"],
                                okId: "608_complain_ok",
                                okCallBack: function () {
                                    var cv = dhtmlx.modalbox({
                                        targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                                        callback: function () {
                                        }
                                    });
                                    $.ajax({
                                        url: ctx + "confirmPassenger/report",
                                        type: "post",
                                        async: false,
                                        success: function (cw) {
                                            dhtmlx.modalbox.hide(cv);
                                            dhtmlx.alert({
                                                title: "提示",
                                                ok: messages["button.ok"],
                                                text: cw.data == "Y" ? "举报成功" : "举报失败",
                                                type: "alert-info"
                                            })
                                        },
                                        error: function (cw, cy, cx) {
                                            dhtmlx.modalbox.hide(cv)
                                        }
                                    })
                                },
                                checkConfirm: function () {
                                    return true
                                }
                            });
                            $("#608_complain").css("top", "200px")
                        },
                        checkConfirm: function () {
                            return true
                        }
                    });
                    $("#608_check").css("top", "200px")
                } else {
                    dhtmlx.alert({
                        title: "警告", ok: "确定", text: cu, type: "alert-error", callback: function () {
                            var cv = cs.data.result;
                            location_code = cv.split("#")[0];
                            md5Str = cv.split("#")[1];
                            leftTicketStr = cv.split("#")[2];
                            isAsync = cv.split("#")[3];
                            bt(ct, cs.data.isCheckOrderInfo, cs.data.doneHMD)
                        }
                    })
                }
            } else {
                var cr = cs.data.result;
                location_code = cr.split("#")[0];
                md5Str = cr.split("#")[1];
                leftTicketStr = cr.split("#")[2];
                isAsync = cr.split("#")[3];
                bt(ct, cs.data.isCheckOrderInfo, cs.data.doneHMD)
            }
        }
    }

    var O = 0;
    var a1;

    function M() {
        var cr;
        if (rqChecked.length > 1) {
            if (O >= rqChecked.length) {
                O = 0
            }
            cr = rqChecked[O++]
        } else {
            if (train_tour_flag == "fc") {
                cr = $.trim($("#back_train_date").val())
            } else {
                cr = $.trim($("#train_date").val())
            }
        }
        clearInterval(a1);
        a1 = window.setInterval(function () {
            if (train_tour_flag == "fc") {
                $("#back_train_date").val(cr)
            } else {
                $("#train_date").val(cr)
            }
            var cs = {
                "leftTicketDTO.train_date": cr,
                "leftTicketDTO.from_station": $("#fromStation").val(),
                "leftTicketDTO.to_station": $("#toStation").val(),
                purpose_codes: cl()
            };
            aW();
            aj(cs)
        }, autoSearchTime)
    }

    function h() {
        if (ifAlertCode && !verifyRandCode($("#randCode_other")[0], true)) {
            return
        }
        var cr = bG();
        if (cr.length == 0 || tickets_info.length == cr.length / 2) {
            $("#content_autosubmitcheckticketinfo").hide();
            loadGrayBackground();
            if (isAsync == ticket_submit_order.request_flag.isAsync) {
                q()
            } else {
                cp()
            }
        } else {
            dhtmlx.alert({
                title: "警告",
                ok: "确定",
                text: "您还有未选座的乘客，请选座完成后再提交订单！",
                type: "alert-error",
                callback: function () {
                }
            })
        }
    }

    function bX() {
        aw();
        ck(tickets_info);
        T();
        b9();
        $("#i-ok2").hide();
        if (ifAlertCode) {
            refreshImg("passenger", "randp", "other")
        }
        $("#error_msgmypasscode2").hide();
        $("#content_autosubmitcheckticketinfo").show();
        box = dhtmlx.createWin({
            winId: "autosubmitcheckticketinfo", closeWinId: ["back_edit"], callback: function () {
                clearTimeout(aH);
                jPlayer("stop")
            }, okId: "qr_submit", okCallBack: function () {
                jPlayer("stop");
                if (isAsync == ticket_submit_order.request_flag.isAsync) {
                    q()
                } else {
                    cp()
                }
            }, checkConfirm: function () {
                if (!bn()) {
                    return false
                }
                if (!ischeckAutoSubmitCode) {
                    return true
                }
                if (ifAlertCode) {
                    return verifyRandCode($("#randCode_other")[0], true)
                } else {
                    if (isAsync == ticket_submit_order.request_flag.isAsync) {
                        q()
                    } else {
                        cp()
                    }
                }
            }
        });
        var cs = parseInt(intervalTime / timer_time);
        if (!ifAlertCode) {
            ai(timer_time, cs)
        } else {
            var cr = $("#qr_submit1");
            cr.unbind("click");
            cr.removeClass("btn92s").addClass("btn92");
            aG(timer_time, cs)
        }
        if (tickets_info.length > 3 && canChooseSeats && "Y" == canChooseSeats) {
            $("#autosubmitcheckticketinfo").css("top", "70px")
        } else {
            $("#autosubmitcheckticketinfo").css("top", "100px")
        }
        $("#autosubmitcheckticketinfo").css("position", "absolute");
        $(".dhx_modal_cover").css("background-color", "#EEEEEE");
        $("#randCode_other").focus()
    }

    var aH;

    function ai(cs, cr) {
        if (cs == 0) {
            clearTimeout(aH);
            h();
            return
        } else {
            cs--
        }
        aH = setTimeout(function () {
            ai(cs, cr)
        }, cr)
    }

    var bu;

    function aG(ct, cs) {
        if (ct == 0) {
            clearTimeout(bu);
            var cr = $("#qr_submit1");
            cr.unbind("click").bind("click", h);
            cr.removeClass("btn92").addClass("btn92s");
            return
        } else {
            ct--
        }
        bu = setTimeout(function () {
            aG(ct, cs)
        }, cs)
    }

    function aJ() {
        if (bb.length == 0) {
            return
        }
        var cr = bf();
        var cs = bV(cr);
        $("#train_stop").appendTo($("body")).hide();
        $("#queryLeftTable").html("");
        $("#trainum").html("");
        if (cs.length > 0) {
            $("#no_filter_ticket").hide();
            $("#trainum").html(cs.length)
        } else {
            $("#no_filter_ticket").show();
            $("#no_filter_ticket_msg_1").show();
            $("#no_filter_ticket_msg_2").hide();
            $("#trainum").html("0");
            return
        }
        aB(cs)
    }

    function by(cs) {
        var cr = cc.createWindow(cs + "_", 0, 0, 660, 100);
        cr.attachObject(cs);
        cr.clearIcon();
        cr.denyResize();
        cr.setModal(true);
        cr.center();
        cr.button("park").hide();
        cr.button("minmax1").hide();
        cr.hideHeader();
        return cr
    }

    function aw() {
        var cw = new Array();
        $("#autosubmit_check_ticket_tit").html("");
        var cu = $("#train_date").val();
        var cr = bl(new Date(Date.parse(cu.replace(/-/g, "/"))));
        var cs = K.queryLeftNewDTO.station_train_code;
        var cB = null;
        var cC = K.queryLeftNewDTO.from_station_name;
        var cv = K.queryLeftNewDTO.to_station_name;
        var cx = K.queryLeftNewDTO.start_time;
        var cA = K.queryLeftNewDTO.arrive_time;
        var cz = function (cE, cG, cD, cI, cF, cH, cK, cJ) {
            this.date = cE;
            this.week = cG;
            this.station_train_code = cD;
            this.train_headers = cI;
            this.from_station = cF;
            this.start_time = cH;
            this.to_station = cK;
            this.arrive_time = cJ
        };
        var ct = new cz(cu, cr, cs, cB, cC, cx, cv, cA);
        cw.push(ct);
        var cy = $("#autoSubTicketTitTemplate").html();
        $.templates({leftTableTemplate: cy});
        $("#autosubmit_check_ticket_tit").html($.render.leftTableTemplate(cw))
    }

    function m(cD) {
        if (a1) {
            clearInterval(a1)
        }
        var cs = "";
        var ct = "";
        var cy = "";
        var cu = "";
        if ($("#sf2").is(":checked")) {
            cy = "3";
            cu = "学生票"
        }
        tickets_info = new Array();
        var cE = cD[1];
        var cx = cD[2];
        var cw = 0;
        var cv = passengerChecked.length;
        for (var cz = 0; cz < cx.length; cz++) {
            var cB = 0;
            if (cx[cz].toLowerCase() == "yyrw") {
                var cr = cE.queryLeftNewDTO["seat_types"];
                if (cx[cz].toLowerCase() == "yyrw" && cr.indexOf("A") > -1) {
                    cB = cE.queryLeftNewDTO["gr_num"]
                }
            } else {
                cB = cE.queryLeftNewDTO[cx[cz].toLowerCase() + "_num"]
            }
            if (cB == "--" || cB == "无") {
                cB = 0
            } else {
                if (cB == "有") {
                    cB = 20
                } else {
                    cB = Number(cB)
                }
            }
            if (cw >= cv) {
                break
            }
            var cC = cx[cz];
            cs = av(cC);
            ct = J(cC);
            for (var cA = 0; cA < cB; cA++) {
                if (cw >= cv) {
                    break
                }
                cy = passengerChecked[cA].passenger_type;
                if (!cy || "" == cy) {
                    cy = "1"
                }
                if (cy == "1") {
                    cu = "成人票"
                } else {
                    if (cy == "2") {
                        cu = "儿童票"
                    } else {
                        if (cy == "3") {
                            cu = "学生票"
                        } else {
                            if (cy == "4") {
                                cu = "残军票"
                            }
                        }
                    }
                }
                tickets_info.push(new bc("sdAdd_" + am(), cs, ct, cy, cu, passengerChecked[cw].passenger_name, passengerChecked[cw].passenger_id_type_code, passengerChecked[cw].passenger_id_type_name, passengerChecked[cw].passenger_id_no, passengerChecked[cw].mobile_no));
                cw++
            }
        }
    }

    function ck(cs) {
        var cr;
        if ("X" == canChooseBeds) {
            $("#bed_show").html("<span style='background:url(../resources/images/icon_new.png) right center no-repeat; padding-right:30px; cursor: pointer;' title='欢迎使用12306选铺功能'>铺别</span>");
            cr = $("#autoSubCheckTicketInfoTemplate_chooseBeds").html().replace("<!--", "").replace("-->", "");
            $("#bed_show").show()
        } else {
            $("#bed_show").hide();
            cr = $("#autoSubCheckTicketInfoTemplate").html()
        }
        $.templates({leftTableTemplate: cr});
        $("#autosubmit_check_ticketInfo").html($.render.leftTableTemplate(cs))
    }

    function j() {
        var cu = K.queryLeftNewDTO.yz_num;
        var cr = K.queryLeftNewDTO.rz_num;
        var cy = K.queryLeftNewDTO.yw_num;
        var cw = K.queryLeftNewDTO.rw_num;
        var cx = K.queryLeftNewDTO.gr_num;
        var cv = K.queryLeftNewDTO.ze_num;
        var cA = K.queryLeftNewDTO.zy_num;
        var cB = K.queryLeftNewDTO.tz_num;
        var cs = K.queryLeftNewDTO.swz_num;
        var cz = K.queryLeftNewDTO.wz_num;
        var ct = "";
        if (cu != "--") {
            ct = "YZ";
            return ct
        }
        if (cv != "--") {
            ct = "ZE";
            return ct
        }
        if (cy != "--") {
            ct = "YW";
            return ct
        }
        if (cA != "--") {
            ct = "ZY";
            return ct
        }
        if (cr != "--") {
            ct = "RZ";
            return ct
        }
        if (cw != "--") {
            ct = "RW";
            return ct
        }
        if (cB != "--") {
            ct = "TZ";
            return ct
        }
        if (cx != "--") {
            ct = "GR";
            return ct
        }
        if (cs != "--") {
            ct = "SWZ";
            return ct
        }
        if (cz != "--") {
            ct = "WZ";
            return ct
        }
    }

    function J(cs) {
        var cr = "";
        if (cs == "ZY") {
            cr = "一等座"
        }
        if (cs == "ZE") {
            cr = "二等座"
        }
        if (cs == "SWZ") {
            cr = "商务座"
        }
        if (cs == "TZ") {
            cr = "特等座"
        }
        if (cs == "YZ") {
            cr = "硬座"
        }
        if (cs == "RZ") {
            cr = "软座"
        }
        if (cs == "YW") {
            cr = "硬卧"
        }
        if (cs == "RW") {
            cr = "软卧"
        }
        if (cs == "GR") {
            cr = "高级软卧"
        }
        if (cs == "SRRB") {
            cr = "动卧"
        }
        if (cs == "YYRW") {
            cr = "高级动卧"
        }
        if (cs == "WZ") {
            cr = "无座"
        }
        return cr
    }

    function av(cs) {
        var cr = "";
        if (cs == "ZY") {
            cr = "M"
        }
        if (cs == "ZE") {
            cr = "O"
        }
        if (cs == "SWZ") {
            cr = "9"
        }
        if (cs == "TZ") {
            cr = "P"
        }
        if (cs == "YZ") {
            cr = "1"
        }
        if (cs == "RZ") {
            cr = "2"
        }
        if (cs == "YW") {
            cr = "3"
        }
        if (cs == "RW") {
            cr = "4"
        }
        if (cs == "GR") {
            cr = "6"
        }
        if (cs == "WZ") {
            cr = "WZ"
        }
        if (cs == "SRRB") {
            cr = "F"
        }
        if (cs == "YYRW") {
            cr = "A"
        }
        return cr
    }

    function bc(cy, ct, cu, cw, cv, cs, cA, cz, cx, cr) {
        this.only_id = cy, this.seat_type = ct;
        this.seat_type_name = cu;
        this.ticket_type = cw, this.ticket_type_name = cv;
        this.name = cs;
        this.id_type = cA;
        this.id_type_name = cz;
        this.id_no = cx;
        this.phone_no = cr;
        this.toString = function () {
            return this.name + "_" + this.id_type + "_" + this.id_no + "_" + this.phone_no
        }
    }

    function am() {
        if (tickets_info.length < 1) {
            return tickets_info.length
        } else {
            var ct = 0;
            for (var cs = 0; cs < tickets_info.length; cs++) {
                var cr = Number(tickets_info[cs].only_id.split("_")[1]);
                if (cr > ct) {
                    ct = cr
                }
            }
            return ct + 1
        }
    }

    function a0() {
        bM = [];
        W = [];
        aD = [];
        tickets_info = [];
        bR = [];
        b1 = [];
        K = "";
        isAsync = "";
        location_code = "";
        md5Str = "";
        leftTicketStr = ""
    }

    getpassengerTicketsForAutoSubmit = function () {
        var cs = "";
        for (var cx = 0; cx < tickets_info.length; cx++) {
            var cy = "";
            if ("WZ" == tickets_info[cx].seat_type) {
                cy = av(j())
            } else {
                cy = tickets_info[cx].seat_type
            }
            var cv = $("#autosubmit_check_ticketInfo").find("select[id^=ticketype_]");
            var cz = "0";
            if (cv && cv.length > 0) {
                var cr = tickets_info[cx].seat_type + "#" + tickets_info[cx].ticket_type + "#" + tickets_info[cx].name + "#" + tickets_info[cx].id_no;
                for (var cw = 0, cC = cv.length; cw < cC; cw++) {
                    var cA = cv.eq(cw);
                    var ct = cA.val().split("_")[0];
                    var cu = cA.val().split("_")[1];
                    if (cr == ct) {
                        cz = cu
                    }
                }
            }
            var cB = cy + "," + cz + "," + tickets_info[cx].ticket_type + "," + tickets_info[cx].name + "," + tickets_info[cx].id_type + "," + tickets_info[cx].id_no + "," + (tickets_info[cx].phone_no == null ? "" : tickets_info[cx].phone_no) + ",N";
            cs += cB + "_"
        }
        return cs.substring(0, cs.length - 1)
    };
    getOldPassengersForAutoSubmit = function () {
        var ct = "";
        for (var cs = 0; cs < passengerChecked.length; cs++) {
            var cr = passengerChecked[cs].passenger_name + "," + passengerChecked[cs].passenger_id_type_code + "," + passengerChecked[cs].passenger_id_no + "," + passengerChecked[cs].passenger_type;
            ct += cr + "_"
        }
        return ct
    };
    var aO = false;

    function bt(cr, cs) {
        var cw = "";
        var ct = $("#train_date").val().split("-");
        var cu = new Date();
        cu.setFullYear(ct[0], ct[1] - 1, ct[2]);
        if (isAsync == ticket_submit_order.request_flag.isAsync && leftTicketStr != "") {
            var cv = null;
            if (tickets_info[0].seat_type == "WZ") {
                if (K.queryLeftNewDTO.yz_num != "--") {
                    tickets_info[0].seat_type = "1";
                    aO = true;
                    tickets_info[0].seat_type_name = "硬座"
                } else {
                    if (K.queryLeftNewDTO.ze_num != "--") {
                        tickets_info[0].seat_type = "O";
                        aO = true;
                        tickets_info[0].seat_type_name = "二等座"
                    }
                }
            }
            $.ajax({
                url: ctx + "confirmPassenger/getQueueCountAsync",
                type: "post",
                async: false,
                data: {
                    train_date: cu.toString(),
                    train_no: K.queryLeftNewDTO.train_no,
                    stationTrainCode: K.queryLeftNewDTO.station_train_code,
                    seatType: tickets_info[0].seat_type,
                    fromStationTelecode: K.queryLeftNewDTO.from_station_telecode,
                    toStationTelecode: K.queryLeftNewDTO.to_station_telecode,
                    leftTicket: leftTicketStr,
                    purpose_codes: cr,
                    isCheckOrderInfo: cs
                },
                dataType: "json",
                success: function (cz) {
                    if (cz.status) {
                        if (cz.data.isRelogin == "Y") {
                            window.location.href = ctx + "view/index.html?random=" + new Date().getTime()
                        }
                        var cA = null;
                        var cy = tickets_info[0].seat_type;
                        cA = cz.data.ticket.split(",");
                        cw = "本次列车，" + (tickets_info[0].seat_type_name).split("（")[0] + "余票";
                        if (parseInt(cA[0]) >= 0) {
                            cw += "<strong>" + cA[0] + "</strong>张"
                        } else {
                            cw += cA[0]
                        }
                        var cx = false;
                        if (cA.length > 1) {
                            cw += ",无座余票";
                            if (parseInt(cA[1]) >= 0) {
                                cw += "<strong>" + cA[1] + "</strong>张"
                            } else {
                                cw += cA[1]
                            }
                            cx = true
                        }
                        cw += "。";
                        if (cz.data.op_2 == "true") {
                            if ((aO && !cx) || !aO) {
                                aQ = false;
                                M();
                                return
                            }
                            cw += '<font color="red">目前排队人数已经超过余票张数，请您选择其他席别或车次。</font>'
                        } else {
                            if (cz.data.countT > 0) {
                                cw += '目前排队人数<font color="red">' + cz.data.countT + "</font>人，";
                                if (if_show_pass_code_login == "Y") {
                                    cw += "<br/>请确认以上信息是否正确，点击“确认”后，系统将为您分配席位。"
                                }
                            }
                        }
                        var cB = $("#sy_ticket_num_id");
                        if (cB != null) {
                            cB.html(cw)
                        }
                        bX()
                    }
                },
                error: function (cx, cz, cy) {
                    return
                }
            })
        } else {
            bX()
        }
    }

    function bv(cs, cr) {
        rt = "";
        seat_1 = -1;
        seat_2 = -1;
        i = 0;
        while (i < cs.length) {
            s = cs.substr(i, 10);
            c_seat = s.substr(0, 1);
            if (c_seat == cr) {
                count = s.substr(6, 4);
                while (count.length > 1 && count.substr(0, 1) == "0") {
                    count = count.substr(1, count.length)
                }
                count = parseInt(count);
                if (count < 3000) {
                    seat_1 = count
                } else {
                    seat_2 = (count - 3000)
                }
            }
            i = i + 10
        }
        if (seat_1 > -1) {
            rt += seat_1
        }
        if (seat_2 > -1) {
            rt += "," + seat_2
        }
        return rt
    }

    function cp() {
        $.ajax({
            url: ctx + "confirmPassenger/confirmSingle",
            type: "post",
            data: {
                passengerTicketStr: getpassengerTicketsForAutoSubmit(),
                oldPassengerStr: getOldPassengersForAutoSubmit(),
                tour_flag: "dc",
                randCode: $("#randCode_other").val(),
                purpose_codes: cl(),
                key_check_isChange: md5Str,
                train_location: location_code,
                choose_seats: bG(),
                seatDetailType: aN()
            },
            dataType: "json",
            async: true,
            success: function (cr) {
                if (cr.status) {
                    if (cr.data.submitStatus) {
                        otsRedirect("post", ctx + "payOrder/init?random=" + new Date().getTime(), {})
                    } else {
                        ac("出票失败!", false, "原因： " + cr.data.errMsg + '<a  id="xg_close_win_id">点击修改</a>', true, "lose");
                        $("#xg_close_win_id").click(function () {
                            af("transforNotice_id", true);
                            $("#i-ok").css("display", "none")
                        })
                    }
                } else {
                    ac("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
                }
            },
            error: function (cr, ct, cs) {
                ac("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
                return
            }
        })
    }

    function q() {
        $.ajax({
            url: ctx + "confirmPassenger/confirmSingleForQueueAsys",
            type: "post",
            data: {
                passengerTicketStr: getpassengerTicketsForAutoSubmit(),
                oldPassengerStr: getOldPassengersForAutoSubmit(),
                randCode: $("#randCode_other").val(),
                purpose_codes: cl(),
                key_check_isChange: md5Str,
                leftTicketStr: leftTicketStr,
                train_location: location_code,
                choose_seats: bG(),
                seatDetailType: aN()
            },
            dataType: "json",
            async: true,
            success: function (cr) {
                $("#i-ok").css("display", "none");
                $("#i-ok2").css("display", "none");
                $("#c_error2").html("");
                $("#c_error2").removeClass("error");
                $("#randCode2").val("");
                if (cr.status) {
                    if (!cr.data.submitStatus) {
                        ac("出票失败!", false, "原因： " + cr.data.errMsg + '<a id="xg_close_win_id" >点击修改</a>', true, "lose");
                        $("#xg_close_win_id").click(function () {
                            af("transforNotice_id", true)
                        });
                        if (cr.data.errMsg.indexOf("余票不足") >= 0) {
                            jPlayer("stop");
                            $("#qr_closeTranforDialog_id").click();
                            $("#query_ticket").click()
                        }
                    } else {
                        var cs = new OrderQueueWaitTime("dc", an, r);
                        cs.start(queryOrderWaitTimeInterval)
                    }
                } else {
                    ac("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
                }
            },
            error: function (cr, ct, cs) {
                ac("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
                return
            }
        })
    }

    function an(cr, ct, cs) {
        if (ct <= 5) {
            ac("订单已经提交，系统正在处理中，请稍等。", false, "", false, "work")
        } else {
            if (ct > 30 * 60) {
                ac("订单已经提交，预计等待时间超过30分钟，请耐心等待。", false, "", false, "queue")
            } else {
                ac("订单已经提交，最新预估等待时间" + cs + "，请耐心等待。", false, "", false, "queue")
            }
        }
    }

    function r(cr, ct, cs) {
        if (ct == -1 || ct == -100) {
            $.ajax({
                url: ctx + "confirmPassenger/resultOrderForDcQueue",
                data: {orderSequence_no: cs.orderId},
                type: "POST",
                dataType: "json",
                success: function (cu) {
                    if (cu.status) {
                        if (cu.data.submitStatus) {
                            otsRedirect("post", ctx + "/payOrder/init?random=" + new Date().getTime(), {})
                        } else {
                            ac("下单成功", false, "", false, "win")
                        }
                    } else {
                        ac("下单成功。", false, "", false, "win")
                    }
                },
                error: function (cu, cw, cv) {
                    ac("下单成功。", false, "", false, "win")
                }
            })
        } else {
            bK(ct, cs)
        }
    }

    function bK(cr, cs) {
        if (cs.name && cs.card && cs.tel) {
            af("transforNotice_id", true);
            $("#608_check_msg").html(cs.msg);
            dhtmlx.createWin({
                winId: "608_check",
                closeWinId: ["608_check_close", "608_check_cancel"],
                okId: "608_check_ok",
                okCallBack: function () {
                    $("#608_name").html(cs.name);
                    $("#608_card").html(cs.card);
                    $("#608_tel").html(cs.tel);
                    $("#ticketInfo").html(cs.ticketInfo);
                    dhtmlx.createWin({
                        winId: "608_complain",
                        closeWinId: ["608_complain_close", "608_complain_cancel"],
                        okId: "608_complain_ok",
                        okCallBack: function () {
                            var ct = dhtmlx.modalbox({
                                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                                callback: function () {
                                }
                            });
                            $.ajax({
                                url: ctx + "confirmPassenger/report",
                                type: "post",
                                async: false,
                                success: function (cu) {
                                    dhtmlx.modalbox.hide(ct);
                                    if (cu.data == "Y") {
                                        dhtmlx.alert({
                                            title: "提示",
                                            ok: messages["button.ok"],
                                            text: "举报成功",
                                            type: "alert-info"
                                        })
                                    } else {
                                        dhtmlx.alert({
                                            title: "提示",
                                            ok: messages["button.ok"],
                                            text: "举报失败",
                                            type: "alert-error"
                                        })
                                    }
                                    $("#i-okmypasscode1").hide();
                                    if (ifAlertCode) {
                                        refreshImg("passenger", "randp", "other")
                                    }
                                },
                                error: function (cu, cw, cv) {
                                    dhtmlx.modalbox.hide(ct)
                                }
                            })
                        },
                        checkConfirm: function () {
                            return true
                        }
                    });
                    $("#608_complain").css("top", "200px")
                },
                checkConfirm: function () {
                    return true
                },
                callback: function () {
                    $("#i-okmypasscode1").hide();
                    if (ifAlertCode) {
                        refreshImg("passenger", "randp", "other")
                    }
                }
            });
            $("#608_check").css("top", "200px");
            return
        }
        if (cr == -1) {
            return
        } else {
            if (cr == -2) {
                if (cs.errorcode == 0) {
                    ac("订票失败!", true, "原因： " + cs.msg, true, "lose")
                } else {
                    ac("订票失败!", true, "原因： " + cs.msg, true, "lose")
                }
                if (cs.msg.indexOf("没有足够的票") > -1) {
                    jPlayer("stop");
                    $("#qr_closeTranforDialog_id").click();
                    $("#query_ticket").click()
                }
            } else {
                if (cr == -3) {
                    ac("哎呀,订票失败!", true, "订单已撤销", true, "lose")
                } else {
                    window.location.href = ctx + "view/train_order.html?type=1&random=" + new Date().getTime()
                }
            }
        }
    }

    function R() {
        cj = new dhtmlXWindows();
        cj.enableAutoViewport(true);
        cj.setSkin("dhx_terrace");
        cj.setImagePath(ctx + "resources/js/rich/windows/imgs/");
        af = function (cv, cu) {
            unLoadGrayBackground();
            if (cj.isWindow(cv + "_")) {
                cj.window(cv + "_").setModal(false);
                cj.window(cv + "_").hide()
            }
        };
        ac = function (cB, cy, cv, cu, cx) {
            var cA = '<div class="tit">' + (cy ? '<span class="colorC">' + cB + "</span>" : cB) + "</div>";
            var cw = "<P>" + cv + "</p>";
            var cz = cy ? '<p>请点击[<a href="' + ctx + 'view/train_order.html?type=2"><strong>我的12306</strong></a>]办理其他业务。您也可以点击[<a href="' + ctx + 'leftTicket/init"><strong>预订车票</strong></a>]，重新规划您的旅程。</p>' : '<P>查看订单处理情况，请点击“<a href="' + ctx + 'view/train_order.html?type=1">未完成订单</a>”</P>';
            $("#iamge_status_id").removeClass().addClass("icon i-" + cx);
            if (cu) {
                $("#up-box-hd_id").html("提示<a id='closeTranforDialog_id' href='#nogo'>关闭</a>");
                cz = "";
                $("#lay-btn_id").html("<a href='#nogo' id='qr_closeTranforDialog_id'  class='btn92s'>确认</a>")
            } else {
                $("#up-box-hd_id").html("提示");
                $("#lay-btn_id").html("")
            }
            $("#orderResultInfo_id").html(cA + (cv == "" || cv == null || cv == "undefined" || cv == undefined ? "" : cw) + cz);
            cr("transforNotice_id");
            if (cu) {
                $("#closeTranforDialog_id").click(function () {
                    af("transforNotice_id", true)
                });
                $("#qr_closeTranforDialog_id").click(function () {
                    af("transforNotice_id", true);
                    $("#i-ok").css("display", "none")
                })
            }
        };

        function cr(cy) {
            af(cy, false);
            if ("checkticketinfo_id" == cy) {
                var cw = ticketInfoForPassengerForm.queryLeftNewDetailDTO;
                if (cw.to_station_telecode == ticket_submit_order.special_areas.lso || cw.to_station_telecode == ticket_submit_order.special_areas.dao || cw.to_station_telecode == ticket_submit_order.special_areas.ado || cw.to_station_telecode == ticket_submit_order.special_areas.nqo || cw.to_station_telecode == ticket_submit_order.special_areas.tho) {
                    if (cs()) {
                        $("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
                        $("#notice_2_id").html("2.根据现行规定，外国人在购买进西藏火车票时，须出示西藏自治区外事办公室或旅游局、商务厅的批准函（电），或者出示中国内地司局级接待单位出具的、已征得自治区上述部门同意的证明信函。台湾同胞赴藏从事旅游、商务活动，须事先向西藏自治区旅游局或商务厅提出申请，购买进藏火车票时须出示有关批准函。");
                        if (ct()) {
                            $("#notice_3_id").html("3.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
                        } else {
                            $("#notice_3_id").html("")
                        }
                    }
                } else {
                    $("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
                    if (ct()) {
                        $("#notice_3_id").html("2.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
                    } else {
                        $("#notice_3_id").html("")
                    }
                }
            }
            var cv = a5(cy);
            var cu = $(window).width() / 2 - 300;
            var cx = ci() + ($(window).height() / 2 - 200);
            cv.setDimension($("#content_" + cy).width(), $("#content_" + cy).height() + 10);
            $(".dhtmlx_window_active").height($("#content_" + cy).height());
            $(".dhtmlx_window_active").css({left: cu + "px", top: cx + "px"})
        }

        function ct() {
            for (var cv = 0; cv < limit_tickets.length; cv++) {
                var cu = limit_tickets[cv];
                if (cu.ticket_type == ticket_submit_order.ticket_type.student) {
                    return true
                }
            }
            return false
        }

        function cs() {
            for (var cv = 0; cv < limit_tickets.length; cv++) {
                var cu = limit_tickets[cv];
                if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.fc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.gc) && cu.save_status != "" && (cu.id_type == ticket_submit_order.passenger_card_type.passport || cu.id_type == ticket_submit_order.passenger_card_type.work || cu.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
                    return true
                } else {
                    if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.wc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.dc) && (cu.id_type == ticket_submit_order.passenger_card_type.passport || cu.id_type == ticket_submit_order.passenger_card_type.work || cu.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
                        return true
                    }
                }
            }
            return false
        }
    }

    function a5(cs) {
        var cr = cj.createWindow(cs + "_", 0, 0, 660, 100);
        cr.attachObject(cs);
        cr.clearIcon();
        cr.denyResize();
        cr.setModal(true);
        cr.center();
        cr.button("park").hide();
        cr.button("minmax1").hide();
        cr.hideHeader();
        return cr
    }

    function C(cs) {
        var cr = new Date();
        var ct = cs.split("-");
        cr.setFullYear(parseInt(ct[0]), parseInt(ct[1] - 1, 10), parseInt(ct[2], 10));
        if (ct.length >= 6) {
            cr.setHours(ct[3], ct[4], ct[5])
        }
        return cr
    }

    function aE(cr) {
        var cu = "", ct = "";
        var cw = cr.replace(/-/g, "");
        if (cw.substring(4, 5) == "0") {
            cu = cw.substring(5, 6) + "月"
        } else {
            cu = cw.substring(4, 6) + "月"
        }
        if (cw.substring(6, 7) == "0") {
            ct = cw.substring(7, 8) + "日"
        } else {
            ct = cw.substring(6, 8) + "日"
        }
        var cs = new Date(Date.parse(cr.replace(/-/g, "/")));
        var cv = "日一二三四五六";
        return cu.concat(ct).concat("&nbsp;&nbsp;").concat("周").concat(cv.charAt(cs.getDay()))
    }

    showTicketPrice = function (cv) {
        var cz = $(cv).parent("tr").children("td").children("div").children("div").children("span").attr("id");
        if (undefined == cz || cz == null || "undefined" == typeof(cz)) {
            cz = $(cv).attr("id")
        }
        $("#price_" + cw).hide();
        $("#tp-list-price").hide();
        $("#sleeper-price>span").css("cursor", "pointer");
        var cw = cz.split("_")[0];
        var cx = $("#price_" + cw).attr("datatran");
        var cy = cz.split("_")[1];
        var cu = cz.split("_")[2];
        var cA = cz.split("_")[3];
        var ct = cz.split("_")[4];
        var cr = $("#WZ_" + cw).html();
        var cs = $("#QT_" + cw).html();
        if (ct && ($("#ticket_" + cw + "_train>span>span").text() == "查看票价")) {
            if ($("#ticket_" + cw).attr("class") == "bgc") {
                $("#price_" + cw).addClass("bgc")
            }
            $.ajax({
                type: "get",
                isTakeParam: false,
                beforeSend: function (cB) {
                    cB.setRequestHeader("If-Modified-Since", "0");
                    cB.setRequestHeader("Cache-Control", "no-cache")
                },
                url: ctx + "leftTicket/queryTicketPriceFL",
                data: {
                    train_no: cw,
                    from_station_no: cy,
                    to_station_no: cu,
                    seat_types: ct,
                    train_date: train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
                },
                timeout: 1000,
                error: function (cB, cD, cC) {
                },
                success: function (cB) {
                }
            });
            $.ajax({
                type: "get",
                isTakeParam: false,
                beforeSend: function (cB) {
                    cB.setRequestHeader("If-Modified-Since", "0");
                    cB.setRequestHeader("Cache-Control", "no-cache")
                },
                url: ctx + "leftTicket/queryTicketPrice",
                data: {
                    train_no: cw,
                    from_station_no: cy,
                    to_station_no: cu,
                    seat_types: ct,
                    train_date: train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
                },
                success: function (cB) {
                    if (cB.status) {
                        $("#ticket_" + cw + "_train>span>span").html("收起票价");
                        $("#ticket_" + cw + "_train>span>b").addClass("open");
                        $("#ticket_" + cw + "_train>span>b").attr("title", "收起票价");
                        if (cs == "--") {
                            cB.data.MIN = ""
                        }
                        if (cr == "--") {
                            cB.data.WZ = ""
                        }
                        $("#price_" + cw).html($.render.priceTableTemplate(cB.data));
                        $("#price_" + cw).show();
                        if (cx && c(cx)) {
                            $("#price_" + cw).find("td").eq(0).html('<a class="ad-tlist-hot" href="javascript:void(0);">移动宾馆 免费晚餐 快捷舒适 准时正点</a>')
                        } else {
                            $("#price_" + cw).find("td").eq(0).html("")
                        }
                        if (cB.data.PM != "--") {
                            $("#sleeper-price_" + cw).mouseover(function () {
                                $("#tp-list-price_" + cw).show()
                            });
                            $("#sleeper-price_" + cw).mouseout(function () {
                                $("#tp-list-price_" + cw).hide()
                            })
                        }
                    }
                }
            })
        } else {
            $("#ticket_" + cw + "_train>span>span").html("查看票价");
            $("#ticket_" + cw + "_train>span>b").attr("title", "查看票价");
            $("#ticket_" + cw + "_train>span>b").removeClass();
            $("#price_" + cw).html("");
            $("#price_" + cw).hide()
        }
    };

    function bV(cr) {
        if (az == "starttime") {
            return cr.sort(function (ct, cs) {
                var cv = Number(ct.queryLeftNewDTO.start_time.replace(":", ""));
                var cu = Number(cs.queryLeftNewDTO.start_time.replace(":", ""));
                if (cv > cu) {
                    return a4 ? 1 : -1
                } else {
                    return a4 ? -1 : 1
                }
            })
        } else {
            if (az == "arrivedtime") {
                return cr.sort(function (ct, cs) {
                    var cv = Number(ct.queryLeftNewDTO.arrive_time.replace(":", ""));
                    var cu = Number(cs.queryLeftNewDTO.arrive_time.replace(":", ""));
                    if (cv > cu) {
                        return b4 ? 1 : -1
                    } else {
                        return b4 ? -1 : 1
                    }
                })
            } else {
                if (az == "lishi") {
                    return cr.sort(function (ct, cs) {
                        var cv = Number(ct.queryLeftNewDTO.lishi.replace(":", ""));
                        var cu = Number(cs.queryLeftNewDTO.lishi.replace(":", ""));
                        if (cv > cu) {
                            return aZ ? 1 : -1
                        } else {
                            return aZ ? -1 : 1
                        }
                    })
                }
            }
        }
        return cr
    }

    function aA() {
        $("#s_time").click(function () {
            if (a4) {
                $("#s_time").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                a4 = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#s_time").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                a4 = true;
                $("#other_span_starttime").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            az = "starttime";
            aJ()
        });
        $("#other_span_starttime").click(function () {
            if (a4) {
                $("#s_time").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                a4 = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#s_time").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                a4 = true;
                $("#other_span_starttime").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            az = "starttime";
            aJ()
        });
        $("#r_time").click(function () {
            if (b4) {
                $("#r_time").removeClass().addClass("b4");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                b4 = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                $("#other_span_endtime").removeClass().addClass("b2");
                $("#other_span_lishi").removeClass().addClass("b2")
            } else {
                $("#r_time").removeClass().addClass("b3");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                b4 = true;
                $("#other_span_endtime").removeClass().addClass("b2");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            az = "arrivedtime";
            aJ()
        });
        $("#other_span_endtime").click(function () {
            if (b4) {
                $("#r_time").removeClass().addClass("b4");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                b4 = false;
                $("#other_span_endtime").removeClass().addClass("b4");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#r_time").removeClass().addClass("b3");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                b4 = true;
                $("#other_span_endtime").removeClass().addClass("b3");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            az = "arrivedtime";
            aJ()
        });
        $("#l_s").click(function () {
            if (aZ) {
                $("#l_s").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aZ = false;
                $("#other_span_lishi").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#l_s").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aZ = true;
                $("#other_span_lishi").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            }
            az = "lishi";
            aJ()
        });
        $("#other_span_lishi").click(function () {
            if (aZ) {
                $("#l_s").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aZ = false;
                $("#other_span_lishi").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#l_s").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aZ = true;
                $("#other_span_lishi").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            }
            az = "lishi";
            aJ()
        })
    }

    closeTrainStop = function () {
        over_flag = false;
        b2 = 0;
        $("#train_stop").hide();
        $("#train_table").html("")
    };
    hideTrainStop = function (cr) {
        over_flag = false;
        if (p) {
            clearTimeout(p)
        }
        p = window.setTimeout(function () {
            if (b2 != 1) {
                b2 = 0;
                $("#train_stop").hide();
                $("#train_table").html("")
            }
        }, 130)
    };
    checkHover = function (cs, cr) {
        if (getEvent(cs).type == "mouseover") {
            return !$.contains(cr, getEvent(cs).relatedTarget || getEvent(cs).fromElement) && !((getEvent(cs).relatedTarget || getEvent(cs).fromElement) === cr)
        } else {
            return !$.contains(cr, getEvent(cs).relatedTarget || getEvent(cs).toElement) && !((getEvent(cs).relatedTarget || getEvent(cs).toElement) === cr)
        }
    };
    getEvent = function (cr) {
        return cr || window.event
    };
    checkHover = function (cs, cr) {
        if (getEvent(cs).type == "mouseover") {
            return !$.contains(cr, getEvent(cs).relatedTarget || getEvent(cs).fromElement) && !((getEvent(cs).relatedTarget || getEvent(cs).fromElement) === cr)
        } else {
            return !$.contains(cr, getEvent(cs).relatedTarget || getEvent(cs).toElement) && !((getEvent(cs).relatedTarget || getEvent(cs).toElement) === cr)
        }
    };
    getEvent = function (cr) {
        return cr || window.event
    };

    function bD(ct, cr) {
        for (var cs = 0; cs < cr.length; cs++) {
            if (cr[cs].key == ct) {
                return true
            }
        }
        return false
    }

    function bo(cv) {
        var cA = function (cB) {
            this.value = cB
        };
        var cw = new Array();
        var cs = new Array();
        var cu = {};
        var cr = {};
        $("#cc_from_station_name_all>ul").html("");
        $("#cc_to_station_name_all>ul").html("");
        var ct;
        var cz;
        var cy;
        for (var cx = 0; cx < cv.length; cx++) {
            ct = cv[cx].queryLeftNewDTO.from_station_name;
            cz = cv[cx].queryLeftNewDTO.to_station_name;
            cy = cv[cx];
            if (!cu[ct]) {
                cw.push(new cA(ct));
                cu[ct] = true
            }
            if (!cr[cz]) {
                cs.push(new cA(cz));
                cr[cz] = true
            }
        }
        $("#to_station_ul").html($.render.toStationNameTableTemplate(cs));
        $("#from_station_ul").html($.render.stationNameTableTemplate(cw));
        $("#sear-sel-bd input[name='cc_from_station']").click(function () {
            k(bE, "cc_from_station_" + $(this).val());
            var cB = $("input[name='cc_from_station']");
            var cC = $("input[name='cc_from_station']:checked");
            if ($(this).is(":checked")) {
                if (cB && cC && cC.length == cB.length) {
                    $("#from_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#from_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cB && cC && cC.length == 0) {
                    $("#from_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#from_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aJ()
        });
        $("#sear-sel-bd input[name='cc_to_station']").click(function () {
            k(br, "cc_to_station_" + $(this).val());
            var cB = $("input[name='cc_to_station']");
            var cC = $("input[name='cc_to_station']:checked");
            if ($(this).is(":checked")) {
                if (cB && cC && cC.length == cB.length) {
                    $("#to_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#to_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cB && cC && cC.length == 0) {
                    $("#to_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#to_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aJ()
        })
    }

    submitOrderRequest = function (cs, cr) {
        $.ajax({
            type: "post", url: ctx + "login/checkUser", data: {}, beforeSend: function (ct) {
                ct.setRequestHeader("If-Modified-Since", "0");
                ct.setRequestHeader("Cache-Control", "no-cache")
            }, success: function (ct) {
                var cw;
                checkusermdId = ct.attributes;
                if (ct.data.flag) {
                    if (train_tour_flag == "fc") {
                        cw = $("#back_train_date").val()
                    } else {
                        cw = $("#train_date").val()
                    }
                    if (x == "0X00") {
                        var cv = false;
                        for (i = (studentComPerArr.length - 1); i >= 0; i = i - 2) {
                            if (C(studentComPerArr[i - 1]) <= C(cw) && C(studentComPerArr[i]) >= C(cw)) {
                                cv = true;
                                break
                            }
                        }
                        if (!cv) {
                            b("学生票的乘车时间为每年的暑假6月1日至9月30日、寒假12月1日至3月31日，目前不办理学生票业务。");
                            return
                        }
                    }
                    var cu = $("#fromStation").val();
                    if (cu && cu == "XJA") {
                        dhtmlx.alert({
                            title: "温馨提示",
                            ok: "确定",
                            text: "香港西九龙站乘车前需办理换取纸质车票、实名制验证、安全检查和出入境手续，请您预留足够时间，合理规划行程。",
                            type: "alert-warn",
                            callback: function () {
                                S(cs, cr)
                            }
                        })
                    } else {
                        S(cs, cr)
                    }
                } else {
                    $(".mask").fadeIn();
                    $(".login-box .login-hd-code").addClass("active").siblings().removeClass("active");
                    $(".login-box .login-code").show().siblings().hide();
                    $(".login-box").slide({
                        titCell: ".login-hd li",
                        mainCell: ".login-bd",
                        titOnClassName: "active",
                        trigger: "click",
                    });
                    $(".modal-login").css("top", ($(window).height() - $(".modal-login").height()) / 2 + $(window).scrollTop() + "px").css("left", ($(window).width() - $(".modal-login").width()) / 2 + $(window).scrollLeft() + "px").show();
                    $.popup_initLogin(true);
                    $(".modal-login").fadeIn();
                    $.pop_secretStr = cs;
                    $.pop_start_time = cr
                }
            }
        })
    };

    function S(cE, cx) {
        var cr = "";
        if ($("#dc").is(":checked")) {
            cr = "dc"
        } else {
            cr = "wc"
        }
        if (train_tour_flag == "fc") {
            cr = "fc";
            var cu = cx.split(":");
            var ct = $("#back_train_date").val() + "-" + cu[0] + "-" + cu[1] + "-00";
            try {
                if (roundReferTime) {
                    if (C(roundReferTime) >= C(ct)) {
                        b("您预订的往程车票到站时间为" + C(roundReferTime).format("yyyy年MM月dd日 hh时mm分") + "，返回日期不能早于此时间");
                        return
                    }
                }
            } catch (cz) {
            }
        }
        if (train_tour_flag == "gc") {
            cr = "gc"
        }
        if ("undefined" == typeof(submitForm)) {
            var cv = "secretStr=" + cE + "&train_date=" + $("#train_date").val() + "&back_train_date=" + $("#back_train_date").val() + "&tour_flag=" + cr + "&purpose_codes=" + cl() + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + cC
        } else {
            var cs = submitForm();
            var cD = cs.split(":::");
            var cy = cD[0].split(",-,")[0];
            var cB = cD[0].split(",-,")[1];
            var cw = cD[1].split(",-,")[0];
            var cA = cD[1].split(",-,")[1];
            var cv = escape(cy) + "=" + escape(cB) + "&" + cw + "=" + cA + "&secretStr=" + cE + "&train_date=" + $("#train_date").val() + "&back_train_date=" + $("#back_train_date").val() + "&tour_flag=" + cr + "&purpose_codes=" + cl() + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + cC
        }
        var cC = checkusermdId != undefined ? "&_json_att=" + encodeURIComponent(checkusermdId) : "";
        $.ajax({
            type: "post",
            url: ctx + "leftTicket/submitOrderRequest",
            data: cv,
            async: false,
            success: function (cF) {
                if (cF.status) {
                    if (cF.data == "Y") {
                        dhtmlx.alert({
                            title: "温馨提示",
                            ok: "确定",
                            text: "您选择的列车距开车时间很近了，请确保有足够的时间抵达车站，并办理换取纸质车票、安全检查、实名制验证及检票等手续，以免耽误您的旅行。",
                            type: "alert-warn",
                            callback: function () {
                                aX(cr, train_tour_flag)
                            }
                        })
                    } else {
                        aX(cr, train_tour_flag)
                    }
                }
            }
        })
    }

    function aX(cs, cr) {
        if (cr != null) {
            if (cr == "fc") {
                otsRedirect("post", ctx + "confirmPassenger/initFc", {});
                return
            }
            if (cr == "gc") {
                otsRedirect("post", ctx + "confirmPassenger/initGc", {});
                return
            }
        }
        if (cs == "dc") {
            otsRedirect("post", ctx + "confirmPassenger/initDc", {});
            return
        } else {
            otsRedirect("post", ctx + "confirmPassenger/initWc", {})
        }
    }

    var cm = $("#fromStation").val();
    var bg = $("#toStation").val();
    var bZ = $.trim($("#train_date").val());
    a9 = cm + bg + bZ;
    $("#add-train").click(function () {
        if ($("#fromStationText").val() == "简拼/全拼/汉字") {
            dhtmlx.alert({title: "输入车次", ok: "确定", text: "请填写出发地！", type: "alert-error"});
            return
        }
        if ($("#toStationText").val() == "简拼/全拼/汉字") {
            dhtmlx.alert({title: "输入车次", ok: "确定", text: "请填写目的地！", type: "alert-error"});
            return
        }
        var cu = $('#prior_train span[name="prior_train-span"]').length;
        var cv = $.trim($("#inp-train").val()).toUpperCase();
        if (cv.length == 0 || cv == "请输入") {
            dhtmlx.alert({
                title: "输入车次", ok: "确定", text: "请输入车次", type: "alert-error", callback: function () {
                    $("#inp-train").val("");
                    $("#inp-train").focus()
                }
            })
        } else {
            if (cu < 6) {
                var cs = /^[a-zA-Z0-9]+$/;
                var ct = /^[0-9]+$/;
                if (!cs.test(cv)) {
                    dhtmlx.alert({
                        title: "输入车次",
                        ok: "确定",
                        text: "车次格式输入错误！",
                        type: "alert-error",
                        callback: function () {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }
                    })
                } else {
                    if (ct.test(cv) && cv.length > 4) {
                        dhtmlx.alert({
                            title: "输入车次",
                            ok: "确定",
                            text: "车次格式输入错误！",
                            type: "alert-error",
                            callback: function () {
                                ccInputSelected = true;
                                $("#inp-train").select()
                            }
                        })
                    } else {
                        if (cv.length < 2) {
                            dhtmlx.alert({
                                title: "输入车次",
                                ok: "确定",
                                text: "车次格式输入错误！",
                                type: "alert-error",
                                callback: function () {
                                    ccInputSelected = true;
                                    $("#inp-train").select()
                                }
                            })
                        } else {
                            if ($.inArray(cv, ccSelected) < 0) {
                                var cr = "<span name='prior_train-span' class='sel-box w80'>" + cv + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cv + "\",4)'></a></span>";
                                $("#prior_train").append(cr);
                                ccSelected.push(cv);
                                $("#inp-train").val("")
                            } else {
                                dhtmlx.alert({
                                    title: "输入车次",
                                    ok: "确定",
                                    text: "此车次已经添加过！",
                                    type: "alert-error",
                                    callback: function () {
                                        ccInputSelected = true;
                                        $("#inp-train").select()
                                    }
                                })
                            }
                        }
                    }
                }
            } else {
                dhtmlx.alert({title: "输入车次", ok: "确定", text: "最多添加5个优先车次", type: "alert-error"});
                $("#inp-train").val("")
            }
        }
    });

    function cl() {
        if ($("#sf2").is(":checked")) {
            return "0X00"
        } else {
            return "ADULT"
        }
    }

    $("#yxtrain_close").click(function (cr) {
        $("#yxtraindiv").hide()
    });
    $("#yxtrain_a_close").click(function (cr) {
        $("#yxtraininput").val("");
        $("#yxtraininput").trigger("keyup")
    });
    $("#passenger_a_close").click(function (cr) {
        $("#searchPassenger").val("");
        $("#searchPassenger").trigger("keyup")
    });
    $("#yxtraininput").bind("keyup", function () {
        var cs = $(this).val().toUpperCase();
        var cr = $("#yxtrain_code").height();
        if (u(cs, 0)) {
            cq(1)
        } else {
            cq(3)
        }
        $("#yxtrain_code").css("height", cr)
    });

    function cq(cr) {
        $("#yxtrain_loading").hide();
        $("#yxtrain_code").hide();
        $("#yxTrain_page").hide();
        $("#yxtrain_empty").hide();
        if (1 == cr) {
            $("#yxtrain_code").show();
            $("#yxTrain_page").show()
        } else {
            if (2 == cr) {
                $("#yxtrain_loading").show()
            } else {
                if (3 == cr) {
                    $("#yxtrain_empty").show()
                }
            }
        }
    }

    function u(cF, cr) {
        cF = cF.toUpperCase();
        var cB = [];
        var cG = $("#prior_train span:gt(1)");
        if (cG && cG.length > 0) {
            for (var cu = 0; cu < cG.length; cu++) {
                cB.push(cG[cu].innerText)
            }
        }
        var cE = [];
        var cA = [];
        if (trainListForIE && trainListForIE.length > 0) {
            for (var cs = 0; cs < trainListForIE.length; cs++) {
                cE.push(trainListForIE[cs]);
                cA.push(trainListForIE[cs])
            }
        }
        if (cF) {
            for (var cu = 0; cu < cA.length; cu++) {
                var cz = cA[cu].substring(0, cA[cu].indexOf("("));
                if (cz.indexOf(cF) <= -1) {
                    cE.splice($.inArray(cA[cu], cE), 1)
                }
            }
        }
        if (cE && cE.length > 0) {
            var cw = "";
            for (var cu = 0; cu < cE.length; cu++) {
                var cz = cE[cu];
                var cv = cz.indexOf("(") > -1 ? cz.substring(0, cz.indexOf("(")) : cz;
                var cC = cu >= yxTrainPageSize * (cr) && cu < yxTrainPageSize * (cr + 1);
                if (cC) {
                    if (cv.indexOf(cF) > -1) {
                        var cy = cz.indexOf(cF);
                        var cx = cz.substring(0, cy);
                        var cD = cz.substring(cy + cF.length, cz.indexOf("("));
                        var ct = cz.substring(cz.indexOf("("));
                        if (cB && cB.length > 0 && $.inArray(cv, cB) > -1) {
                            cw += '<li style="width: 140px;" traincode=' + cv + ' name="yxtrainli" class="cur"><span style="font-size:15px;">' + cx + '<span style="color:red;">' + cF + "</span>" + cD + "</span>" + ct + "</li>"
                        } else {
                            cw += '<li style="width: 140px;" traincode=' + cv + ' name="yxtrainli"><span style="font-size:15px;">' + cx + '<span style="color:red;">' + cF + "</span>" + cD + "</span>" + ct + "</li>"
                        }
                    }
                }
            }
            $("#yxtrain_code").html(cw)
        } else {
            return false
        }
        if (cE.length > 0) {
            E(cr, cE.length)
        }
        $('li[name="yxtrainli"]').click(function () {
            if ($(this).attr("class") == "cur") {
                var cJ = $('span[name="prior_train-span"]');
                for (var cH = 0; cH < cJ.length; cH++) {
                    var cI = $(cJ[cH]).html();
                    if (cI.indexOf($(this).attr("traincode")) > -1) {
                        $(cJ[cH]).children().click()
                    }
                }
                $(this).removeClass()
            } else {
                $("#inp-train").val($(this).attr("traincode"));
                var cK = $('#prior_train span[name="prior_train-span"]').length;
                $("#add-train").click();
                if (cK < 6) {
                    $(this).attr("class", "cur");
                    $.chooseAutoSubmit()
                }
            }
        });
        return true
    }

    function E(cr, cs) {
        var ct = Math.ceil(cs / yxTrainPageSize);
        $("#yxTrain_page").html(aF(cr, ct)).show()
    }

    function aF(cz, cu) {
        var cv = "";
        cv += (cz == 0) ? "" : '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (cz - 1) + ')" class="prev">上一页</a>';
        var cA = cz + 1;
        var cw = cu;
        var cx = 2;
        var cy = 5;
        var cr = (cA - cx) > 0 ? (cA + cx > cw ? cw - cy + 1 : cA - cx) : 1;
        var cs = cr + cy > cw ? cw + 1 : cr + cy;
        if (cw < cy) {
            for (var ct = 1; ct < cw + 1; ct++) {
                if (cA == ct) {
                    cv += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (ct - 1) + ')" class="on">' + (ct) + "</a>"
                } else {
                    cv += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (ct - 1) + ')">' + (ct) + "</a>"
                }
            }
        } else {
            for (var ct = cr; ct < cs; ct++) {
                if (cA == ct) {
                    cv += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (ct - 1) + ')" class="on">' + (ct) + "</a>"
                } else {
                    cv += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (ct - 1) + ')">' + (ct) + "</a>"
                }
            }
        }
        cv += (cz == cu - 1) ? "" : '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (cz + 1) + ')" class="next">下一页</a>';
        return cv
    }

    function a8(cz, cu) {
        if (cu == 0) {
            return ""
        }
        var cv = "";
        cv += (cz == 0) ? "" : '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (cz - 1) + ')" class="prev">上一页</a>';
        var cA = cz + 1;
        var cw = cu;
        var cx = 2;
        var cy = 5;
        var cr = (cA - cx) > 0 ? (cA + cx > cw ? cw - cy + 1 : cA - cx) : 1;
        var cs = cr + cy > cw ? cw + 1 : cr + cy;
        if (cw < cy) {
            for (var ct = 1; ct < cw + 1; ct++) {
                if (cA == ct) {
                    cv += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (ct - 1) + ')" class="on">' + (ct) + "</a>"
                } else {
                    cv += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (ct - 1) + ')">' + (ct) + "</a>"
                }
            }
        } else {
            for (var ct = cr; ct < cs; ct++) {
                if (cA == ct) {
                    cv += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (ct - 1) + ')" class="on">' + (ct) + "</a>"
                } else {
                    cv += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (ct - 1) + ')">' + (ct) + "</a>"
                }
            }
        }
        cv += (cz == cu - 1) ? "" : '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (cz + 1) + ')" class="next">下一页</a>';
        return cv
    }

    function cl() {
        if ($("#sf2").is(":checked")) {
            return "0X00"
        } else {
            return "ADULT"
        }
    }

    jQuery.extend({
        todo_submitOrderRe: function (cs, cr) {
            S(cs, cr)
        }, chooseAutoSubmit: function () {
            if (!$("#autoSubmit").is(":disabled")) {
                if (!$("#autoSubmit").is(":checked")) {
                    $("#autoSubmit").click()
                }
            }
        }, init_ul4li: function () {
            var cr = [];
            var ct = 0;
            cr[ct++] = '<li><input name="cc_type" value="G" type="checkbox" class="check" /><label for="">GC-高铁/城际</label></li>';
            cr[ct++] = '<li><input name="cc_type" value="D" type="checkbox" class="check" /><label for="">D-动车</label></li>';
            cr[ct++] = '<li><input name="cc_type" value="Z" type="checkbox" class="check" /><label for="">Z-直达</label></li>';
            cr[ct++] = '<li><input name="cc_type" value="T" type="checkbox" class="check" /><label for="">T-特快</label></li>';
            cr[ct++] = '<li><input name="cc_type" value="K" type="checkbox" class="check" /><label for="">K-快速</label></li>';
            cr[ct++] = '<li><input name="cc_type" value="QT" type="checkbox" class="check" /><label for="">其他</label></li>';
            $("#_ul_station_train_code").html(cr.join(""));
            if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
                var cv = $("#_ul_station_train_code li");
                for (var cs = 2, cu = cv.length; cs < cu; cs++) {
                    cv.eq(cs).find("input").attr("disabled", "disabled");
                    cv.eq(cs).find("label").attr("for", "").attr("style", "color: rgb(153, 153, 153)")
                }
            }
            $("#startendtime").html('<span class="b1" id="s_time">出发时间</span><br /><span class="b2" id="r_time">到达时间</span>');
            $("#floatstartendtime").html('<span class="b1" id="other_span_starttime">出发时间</span><br /><span class="b2" id="other_span_endtime">到达时间</span>')
        }, parseDateFormat: function (cv) {
            var cr = "";
            var cs = cv.getFullYear();
            var cu = cv.getMonth() + 1;
            var ct = cv.getDate();
            if (cu < 10) {
                cu = "0" + cu
            }
            if (ct < 10) {
                ct = "0" + ct
            }
            cr = cs + "-" + cu + "-" + ct;
            return cr
        }, renderPassenger: function (cJ) {
            if (!cJ) {
                cJ = 0
            }
            if (passengerAll) {
                var cv = $("#searchPassenger").val();
                var cr = [];
                if (cv != "" && cv != "输入乘客姓名") {
                    var cH = passengerAll.length;
                    for (var cE = 0; cE < cH; cE++) {
                        var cD = passengerAll[cE];
                        if (cD.passenger_name.indexOf(cv) > -1 || (cD.first_letter && cD.first_letter.toUpperCase().indexOf(cv.toUpperCase()) > -1)) {
                            cr.push(cD)
                        }
                    }
                } else {
                    cr = passengerAll.slice(passengerPageSize * (cJ), Math.min(passengerPageSize * (cJ + 1), passengerAll.length))
                }
                var cC = cr.length;
                var cA = [];
                var cw = 0;
                for (var cE = 0; cE < cC; cE++) {
                    var cD = cr[cE];
                    var cI = cD.passenger_type_name;
                    if (!cI) {
                        cI = ""
                    }
                    var cu = "";
                    var cs = "";
                    if ($("#sf2").is(":checked")) {
                        if (cD.passenger_type != "3") {
                            cu = " disabled='true' ";
                            cs = " class='color999' "
                        }
                    }
                    var cz = cD.total_times;
                    if (cD.passenger_id_type_code == "2") {
                        cu = " disabled='true' ";
                        cs = " class='color999' title='请修改身份信息' "
                    } else {
                        if (cD.passenger_id_type_code == "1") {
                            if (!isCanGP("1", cz)) {
                                cu = " disabled='true' ";
                                cs = " class='color999' title='请修改身份信息' "
                            }
                        } else {
                            if (!isCanGP("B", cz)) {
                                cu = " disabled='true' ";
                                cs = " class='color999' title='请修改身份信息' "
                            }
                            if (!isCanGP("H", cz)) {
                                cu = " disabled='true' ";
                                cs = " class='color999' title='请修改身份信息' "
                            }
                        }
                    }
                    var cB = cI == "成人" ? cD.passenger_name : cD.passenger_name + "(" + cI + ")";
                    cB = cB.substring(0, 9);
                    if (cv != "" && cv != "输入乘客姓名") {
                        if (cD.passenger_name.indexOf(cv) > -1 || (cD.first_letter && cD.first_letter.toUpperCase().indexOf(cv.toUpperCase()) > -1)) {
                            cw++;
                            if ($.pHasInSelected(cD)) {
                                if (cs) {
                                    var cy = cs.indexOf("'");
                                    cs = cs.substring(0, cy + 1) + "cur " + cs.substring(cy + 1)
                                } else {
                                    cs = "class='cur'"
                                }
                            }
                            cA[cE] = "<li style='width:110px' " + cs + " p_value='" + cD.passenger_name + "(" + cI + ")(" + cD.passenger_id_no + ")' name='" + cD.passenger_type + "' codeType='" + cD.passenger_id_type_code + "' flag='" + cD.total_times + "'>" + cB + "</li>"
                        }
                    } else {
                        cw++;
                        if ($.pHasInSelected(cD)) {
                            if (cs) {
                                var cy = cs.indexOf("'");
                                cs = cs.substring(0, cy) + "cur " + cs.substring(cy)
                            } else {
                                cs = "class='cur'"
                            }
                        }
                        cA[cE] = "<li style='width:110px' " + cs + " p_value='" + cD.passenger_name + "(" + cI + ")(" + cD.passenger_id_no + ")'  name='" + cD.passenger_type + "' codeType='" + cD.passenger_id_type_code + "' flag='" + cD.total_times + "'>" + cB + "</li>"
                    }
                }
                var cF = 100;
                var cG = 0;
                if (cw / 3 > 11) {
                    cF = 310;
                    cG = 258
                } else {
                    cF = 100 + parseInt((cw / 3) * 25);
                    cG = cF - 48
                }
                $("#sel-buyer").css("height", cF);
                $("#pContent").css("height", cG);
                $("#buyer-list").html(cA.join(""));
                var ct = 0;
                if (cv != "" && cv != "输入乘客姓名") {
                    ct = cr.length
                } else {
                    ct = passengerAll.length
                }
                var cx = Math.ceil(ct / passengerPageSize);
                $("#passenger_page").html(a8(cJ, cx)).show()
            }
            $("#buyer-list li").click(function () {
                if ($(this).hasClass("color999")) {
                    return
                }
                var cM = $("#setion_postion span").length;
                var cO = $(this).attr("p_value");
                if (!$(this).hasClass("cur")) {
                    if (cM < 6) {
                        var cK = "";
                        var cL = true;
                        if (cO.indexOf("成人") > -1 || cO.indexOf("残疾军人、伤残人民警察") > -1) {
                            cK = "<span name='" + cO + "' class='sel-box w80'><a href='javascript:' onclick='$.addChildPassenger(\"" + cO + "\");' style='position:static;background:none;width:auto;' title='您可点击此乘车人添加儿童票。'>" + cO + "</a><a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cO + "\",1)'></a></span>";
                            $("#setion_postion").append(cK);
                            $.checkedPasseanger(cO)
                        } else {
                            if (cO.indexOf("学生") > -1) {
                                var cN = $(this);
                                if ($.checkSeatTypes()) {
                                    cK = "<span name='" + cO + "' class='sel-box w80'>" + cO + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cO + "\",1)'></a></span>";
                                    $("#setion_postion").append(cK);
                                    $.checkedPasseanger(cO)
                                } else {
                                    $("#conifrmdialog_student_to_adult_context").html("当前选择的优先席别有不支持学生票的，是否选择购买成人票？");
                                    dhtmlx.createWin({
                                        winId: "confirmChangeStudentToAdult",
                                        closeWinId: ["close_conifrmdialog_student_to_adult", "cancel_dialog_student_to_adult"],
                                        callback: function () {
                                            $(cN).prop("checked", false)
                                        },
                                        okId: "goto_student_to_adult",
                                        okCallBack: function () {
                                            var cP = cO.replace(/学生/, "成人");
                                            cK = "<span name='" + cO + "' class='sel-box w80'>" + cP + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cO + "\",1)'></a></span>";
                                            $("#setion_postion").append(cK);
                                            $.checkedPasseanger(cP)
                                        }
                                    })
                                }
                            } else {
                                if (cO.indexOf("儿童") > -1) {
                                    cK = "<span name='" + cO + "' class='sel-box w80' title='如需修改旅客类型，请修改相应常用联系人信息。'>" + cO + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cO + "\",1)'></a></span>";
                                    $("#setion_postion").append(cK);
                                    $.checkedPasseanger(cO)
                                } else {
                                    cK = "<span name='" + cO + "' class='sel-box w80'>" + cO + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cO + "\",1)'></a></span>";
                                    $("#setion_postion").append(cK);
                                    $.checkedPasseanger(cO)
                                }
                            }
                        }
                        $(this).addClass("cur");
                        $.chooseAutoSubmit()
                    } else {
                        dhtmlx.alert({title: "添加常用联系人", ok: "确定", text: "最多添加5位联系人", type: "alert-error"});
                        $(this).removeClass("cur")
                    }
                } else {
                    $.each($("#setion_postion span"), function (cP, cQ) {
                        if (cO == $(cQ).attr("name")) {
                            $(cQ).remove();
                            $.removePasseanger(cO);
                            return
                        }
                    });
                    $(this).removeClass("cur")
                }
            })
        }, reloadPassenger: function () {
            var cr = dhtmlx.modalbox({
                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                callback: function () {
                }
            });
            $.ajax({
                type: "post",
                isTakeParam: false,
                cache: false,
                async: false,
                url: ctx + "confirmPassenger/getPassengerDTOs",
                timeout: 10000,
                error: function (cs, cu, ct) {
                    dhtmlx.modalbox.hide(cr)
                },
                success: function (cs) {
                    dhtmlx.modalbox.hide(cr);
                    if (cs.status) {
                        if (cs.data.noLogin == "true") {
                            $(".mask").fadeIn();
                            $(".login-box .login-hd-code").addClass("active").siblings().removeClass("active");
                            $(".login-box .login-code").show().siblings().hide();
                            $(".login-box").slide({
                                titCell: ".login-hd li",
                                mainCell: ".login-bd",
                                titOnClassName: "active",
                                trigger: "click",
                            });
                            $(".modal-login").css("top", ($(window).height() - $(".modal-login").height()) / 2 + $(window).scrollTop() + "px").css("left", ($(window).width() - $(".modal-login").width()) / 2 + $(window).scrollLeft() + "px").show();
                            $.popup_initLogin(true);
                            $(".modal-login").fadeIn()
                        } else {
                            if (cs.data.exMsg != "" && cs.data.exMsg != null && cs.data.exMsg != "null") {
                                b(cs.data.exMsg);
                                return
                            }
                            $("#sel-buyer").show();
                            $("#sel-seat").hide();
                            $("#sel-date").hide();
                            $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                            $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                            $("#sel-buyer").css("top", $("#sear-sel").position().top + 4 * 28 + 16);
                            passengerAll = cs.data.normal_passengers;
                            if (!(passengerAll && passengerAll.length > 0)) {
                                passengerAll = []
                            }
                            var cv = cs.data.dj_passengers;
                            if (cv && cv.length > 0) {
                                var cu = cv.length;
                                for (var ct = 0; ct < cu; ct++) {
                                    if (!$.checkIsHas(passengerAll, cv[ct])) {
                                        passengerAll.push(cv[ct])
                                    }
                                }
                            }
                            two_isOpenClick = cs.data.two_isOpenClick;
                            other_isOpenClick = cs.data.other_isOpenClick;
                            $.renderPassenger()
                        }
                    }
                }
            })
        }, checkIsHas: function (ct, cu) {
            var cs = ct.length;
            for (var cr = 0; cr < cs; cr++) {
                if (ct[cr].passenger_name == cu.passenger_name && ct[cr].passenger_id_type_code == cu.passenger_id_type_code && cu.passenger_id_no == ct[cr].passenger_id_no) {
                    return true
                }
            }
            return false
        }, pHasInSelected: function (cu) {
            var cs = passengerChecked.length;
            if (cs > 0) {
                for (var cr = 0; cr < cs; cr++) {
                    var ct = passengerChecked[cr];
                    if (ct.passenger_name == cu.passenger_name && ct.passenger_id_type_code == cu.passenger_id_type_code && ct.passenger_id_no == cu.passenger_id_no) {
                        return true
                    }
                }
            }
            return false
        }, showSelectBuyer: function () {
            $("#sel-seat").hide();
            $("#yxtraindiv").hide();
            $("#sel-date").hide();
            if (!passengerAll) {
                $.reloadPassenger()
            } else {
                var cr = $("#buyer-list li");
                for (var cs = 0; cs < cr.length; cs++) {
                    var cu = $(cr[cs]).attr("name");
                    var ct = $(cr[cs]).attr("codeType");
                    var cv = $(cr[cs]).attr("flag");
                    if ($("#sf2").is(":checked")) {
                        if (cu != "3") {
                            $(cr[cs]).addClass("color999")
                        } else {
                            $(cr[cs]).removeClass("color999")
                        }
                    } else {
                        $(cr[cs]).removeClass("color999")
                    }
                    if (ct == "2") {
                        $(cr[cs]).addClass("color999")
                    } else {
                        if (ct == "1") {
                            if (!isCanGP("1", cv)) {
                                $(cr[cs]).addClass("color999")
                            }
                        } else {
                            if (!isCanGP("B", cv)) {
                                $(cr[cs]).addClass("color999")
                            }
                            if (!isCanGP("H", cv)) {
                                $(cr[cs]).addClass("color999")
                            }
                        }
                    }
                }
                $("#sel-buyer").show();
                $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                $("#sel-buyer").css("top", $("#sear-sel").position().top + 4 * 28 + 16)
            }
        }, click_YX_page: function (cs) {
            var ct = $("#yxtraininput").val().toUpperCase();
            var cr = $("#yxtrain_code").height();
            if (u(ct, cs)) {
                cq(1)
            } else {
                cq(3)
            }
            $("#yxtrain_code").css("height", cr)
        }, click_passenger_page: function (cr) {
            $.renderPassenger(cr)
        }, showYxTrain: function () {
            $("#yxtrain_code").css("height", "auto");
            $("#yxtrain_code li").removeClass();
            $("#yxtraininput").val("");
            $("#yxtraindiv").css("top", $("#showYxTrainSpan").offset().top + $("#showYxTrainSpan").outerHeight()).css("left", $("#showYxTrainSpan").offset().left).show();
            cq(2);
            var ct = $("#fromStationText").val() + "#" + $("#toStationText").val() + "#" + $("#train_date").val();
            if (trainListForIE.length == 0 || yxTrainChange != ct) {
                x = cl();
                var cv = x == "0X00" ? true : false;
                var cs = train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val());
                var cr = bL(cs, cv);
                if (!cr) {
                    $("#yxtraindiv").hide();
                    return
                }
                var cu = {
                    "leftTicketDTO.train_date": cs,
                    "leftTicketDTO.from_station": $("#fromStation").val(),
                    "leftTicketDTO.to_station": $("#toStation").val(),
                    purpose_codes: x
                };
                aW();
                $.ajax({
                    type: "get", isTakeParam: false, beforeSend: function (cw) {
                        cw.setRequestHeader("If-Modified-Since", "0");
                        cw.setRequestHeader("Cache-Control", "no-cache")
                    }, url: ctx + CLeftTicketUrl, data: cu, timeout: 10000, success: function (cy) {
                        if (cy.status) {
                            if (cy.data == null || cy.data.length == 0) {
                                cq(3);
                                trainListForIE = [];
                                return
                            }
                            if (cy.data.flag == 1) {
                                cy.data = b5(cy.data.result, cy.data.map)
                            }
                            trainListForIE = [];
                            for (var cz = 0; cz < cy.data.length; cz++) {
                                trainListForIE.push(cy.data[cz].queryLeftNewDTO.station_train_code + "(" + cy.data[cz].queryLeftNewDTO.start_time + "--" + cy.data[cz].queryLeftNewDTO.arrive_time + ")")
                            }
                            if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
                                var cF = [];
                                for (var cz = 0, cG = cy.data.length; cz < cG; cz++) {
                                    var cx = cy.data[cz].queryLeftNewDTO;
                                    var cC = cx.station_train_code;
                                    cC = cC.substring(0, 1);
                                    if ("G" == cC || "D" == cC) {
                                        cF.push(cy.data[cz])
                                    }
                                }
                                cy.data = cF
                            }
                            if ($("#DW_SHOW_STR")[0]) {
                                $("#DW_SHOW_STR").remove()
                            }
                            if ($("#hainan_limit_msg")[0]) {
                                $("#hainan_limit_msg").remove()
                            }
                            $("#sear-sel").show();
                            $("#sear-result").show();
                            $("#t-list").show();
                            $("#no_filter_ticket_2").hide();
                            $("#no_filter_ticket_6").hide();
                            $("#no_filter_ticket").hide();
                            var cw = "";
                            var cB = "";
                            if (train_tour_flag != null && train_tour_flag == "fc") {
                                var cE = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aE($("#back_train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cy.data.length).concat("</strong>个车次");
                                if (bY(cy.data)) {
                                    cw = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
                                } else {
                                    if (hainan_limit_msg && ae(cu, cy.data)) {
                                        cB = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                                    }
                                }
                                if ($("#auto_query").is(":checked")) {
                                    var cD = "";
                                    for (var cA = 0; cA < 25; cA++) {
                                        cD = cD + "&nbsp;"
                                    }
                                    cE = cE.concat(cD + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                                }
                                $("#sear-result>p").html(cE);
                                if ($("#auto_query").is(":checked")) {
                                    $("#filterTic").bind("click", bi)
                                }
                            } else {
                                var cE = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aE($("#train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cy.data.length).concat("</strong>个车次");
                                if (bY(cy.data)) {
                                    cw = "<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>"
                                } else {
                                    if (hainan_limit_msg && ae(cu, cy.data)) {
                                        cB = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                                    }
                                }
                                if ($("#auto_query").is(":checked")) {
                                    var cD = "";
                                    for (var cA = 0; cA < 25; cA++) {
                                        cD = cD + "&nbsp;"
                                    }
                                    cE = cE.concat(cD + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                                }
                                $("#sear-result>p").html(cE);
                                if ($("#auto_query").is(":checked")) {
                                    $("#filterTic").bind("click", bi)
                                }
                            }
                            if (!$("#DW_SHOW_STR")[0]) {
                                $("#sear-result>p").after(cw)
                            }
                            if (cB) {
                                $("#sear-result>p").after(cB)
                            }
                            if (dwTranTimeStr) {
                                clearInterval(dwTranTimeStr)
                            }
                            if ($("#DW_SHOW_STR")[0]) {
                                dwTranTimeStr = window.setInterval(function () {
                                    if ($("#DW_SHOW_STR").attr("data") == "1") {
                                        $("#DW_SHOW_STR").attr("data", "2").html("夜行两千公里 最低不足千元")
                                    } else {
                                        $("#DW_SHOW_STR").attr("data", "1").html("高铁动卧 夕发朝至 风雨无阻 省时省钱")
                                    }
                                }, 1300)
                            }
                            if ($("#hainan_limit_msg")[0]) {
                                hainan_tip = null;
                                hainan_tip = new Marquee({
                                    ID: "hainan_limit_msg",
                                    Direction: "left",
                                    Step: 1,
                                    Width: 0,
                                    Height: 0,
                                    Timer: 30,
                                    DelayTime: 0,
                                    WaitTime: 0,
                                    ScrollStep: 0
                                })
                            }
                            bb = cy.data;
                            ah();
                            bo(bb);
                            n();
                            bH(bb);
                            bP();
                            $("#queryLeftTable").html("");
                            $("#trainum").html("");
                            aM();
                            if (b1.length < 0) {
                                aQ = true;
                                $("#no_filter_ticket").show();
                                $("#no_filter_ticket_msg_1").show();
                                $("#no_filter_ticket_msg_2").hide();
                                $("#trainum").html("0");
                                return
                            } else {
                                aQ = true;
                                $("#trainum").html(b1.length);
                                aB(b1);
                                $.showYxTrainData()
                            }
                            yxTrainChange = $("#fromStationText").val() + "#" + $("#toStationText").val() + "#" + $("#train_date").val()
                        } else {
                            if (cy && cy.c_url) {
                                CLeftTicketUrl = cy.c_url;
                                aj(cu)
                            }
                        }
                    }
                });
                yxTrainChange = ct
            } else {
                $.showYxTrainData()
            }
            $("#sel-buyer").hide();
            $("#sel-seat").hide();
            $("#sel-date").hide()
        }, showYxTrainData: function () {
            if (u($("#yxtraininput").val(), 0)) {
                $("#yxtraindiv").css("top", $("#showYxTrainSpan").offset().top + $("#showYxTrainSpan").outerHeight()).css("left", $("#showYxTrainSpan").offset().left).show();
                cq(1);
                $("#yxtraininput").focus()
            } else {
                cq(3)
            }
        }, getMindateForCal: function () {
            if ($("#sf2").is(":checked")) {
                g = studentMindate
            } else {
                g = otherMindate
            }
            return g
        }, getMaxdateForCal: function () {
            if ($("#sf2").is(":checked")) {
                D = studentMaxdate
            } else {
                D = otherMaxdate
            }
            return D
        }
    });

    function F() {
        $("#show_all_query_result").click(function () {
            bE = new Array();
            br = new Array();
            N = new Array();
            $("#train_type_btn_all").removeClass().addClass("btn-all");
            $("#start_time_btn_all").removeClass().addClass("btn-all");
            $("#arrive_time_btn_all").removeClass().addClass("btn-all");
            $("#seat_type_btn_all").removeClass().addClass("btn-all");
            $("#from_station_name_all").removeClass().addClass("btn-all");
            $("#to_station_name_all").removeClass().addClass("btn-all");
            $("#sear-sel-bd input").each(function () {
                if (this.checked) {
                    this.checked = false
                }
            });
            if (ay) {
                ay.setComboText("")
            }
            $("#avail_ticket").attr("checked", false);
            aJ()
        })
    }

    function at() {
        var cr = $("#queryPriceTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({priceTableTemplate: cr});
        var cr = $("#fromStationNameTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({stationNameTableTemplate: cr});
        var cr = $("#toStationNameTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({toStationNameTableTemplate: cr});
        var cr = $("#seatTypeTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({seatTypeTemplate: cr});
        var cr = $("#stationinfoTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({stationinfoTemplate: cr})
    }

    function bH(cs) {
        dhtmlXCombo_defaultOption.prototype._DrawHeaderButton = function () {
        };
        $("#train_combo_box").hide();
        var cr = [];
        if (!ay) {
            ay = new dhtmlXCombo("train_combo_box_div", "cc", 90)
        } else {
            ay.setComboText("")
        }
        ay.clearAll();
        $(cs).each(function () {
            cr.push([this.queryLeftNewDTO.station_train_code, this.queryLeftNewDTO.station_train_code])
        });
        ay.addOption(cr);
        ay.enableFilteringMode(true);
        ay.attachEvent("onChange", function () {
            if (ay.getComboText() != "") {
                if ($("#iLcear").is(":hidden")) {
                    $("#iLcear").show()
                }
            }
            aJ()
        });
        if (!$("#iLcear")[0]) {
            $(".dhx_combo_box ").append($('<span style="display: none;" class="i-clear dhx_combo_img_iClear" id="iLcear"></span>'));
            $("#iLcear").on("click", function () {
                if (ay) {
                    ay.setComboText("");
                    $(this).hide()
                }
            })
        }
        $(".dhx_combo_input").on("keyup", function () {
            if ($(this).val() == "") {
                $("#iLcear").hide()
            } else {
                if ($("#iLcear").is(":hidden")) {
                    $("#iLcear").show()
                }
            }
        })
    }

    function aq() {
        if (!cc) {
            cc = new dhtmlXWindows();
            cc.enableAutoViewport(true);
            cc.setSkin("dhx_terrace");
            cc.attachViewportTo("winVP");
            cc.setImagePath(ctx + "resources/js/rich/windows/imgs/")
        }
        $("#username").keydown(function () {
            login_errorMsg_hide()
        });
        $("#password").keydown(function () {
            login_errorMsg_hide()
        })
    }

    function bw() {
        cc.window("login").hide();
        cc.window("login").setModal(false)
    }

    function by() {
        if (cc.window("login")) {
            cc.window("login").setModal(false);
            cc.window("login").hide()
        }
        a3 = cc.createWindow("login", 0, 0, 400, 350);
        var cr, cs;
        if (typeof(TouLocal) != "undefined" && TouLocal.checkZByTargeElement("")) {
            cr = $(window).width() / 2 - 208;
            cs = ci() + ($(window).height() / 2 - 232)
        } else {
            cr = $(window).width() / 2 - 200;
            cs = ci() + ($(window).height() / 2 - 205)
        }
        a3.attachObject("relogin");
        if (if_show_pass_code_login == "Y") {
            a3.setDimension($("#content").width(), $("#content").height() + 10)
        } else {
            a3.setDimension(530, 343);
            cr = $(window).width() / 2 - 250
        }
        $(".dhtmlx_window_active").height($("#content").height());
        $(".dhtmlx_window_active").css({left: cr, top: cs});
        a3.bringToTop();
        cc.window("login").clearIcon();
        cc.window("login").denyResize();
        a3.button("park").hide();
        a3.button("minmax1").hide();
        a3.hideHeader();
        if (if_show_pass_code_login == "Y") {
            if (is_uam_login == "Y") {
                refreshImgUAM("login", "sjrand")
            } else {
                refreshImg("login", "sjrand")
            }
        }
        a3.setModal(true);
        $("#relogin_close").click(function () {
            bk();
            var ct = $(window).scrollTop();
            var cu = $("#float").position().top;
            if (ct > cu + 30) {
                $("#floatTable").show()
            }
            bw()
        });
        if (typeof(touclickHook_leftTicketLogin) === "function") {
            touclickHook_leftTicketLogin()
        }
    }

    function bk() {
        aR();
        $("#username").val("");
        $("#password").val("");
        $("#randCode").val("");
        b6()
    }

    function ci() {
        if ("pageYOffset" in window) {
            return window.pageYOffset
        } else {
            if (document.compatMode == "BackCompat") {
                return document.body.scrollTop
            } else {
                return document.documentElement.scrollTop
            }
        }
    }

    function aR() {
        $("#username").add($("#password")).add($("#randCode")).add($("#randCode2")).removeClass("error")
    }

    function B(cv) {
        var cs = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])|(19[0-9])|(16[0-9])\d{8}$/;
        var cr = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
        var cu = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        var ct = true;
        aR();
        if ("" == cv || cv == null || cv == uninputmsg || cv == "admin") {
            $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
            ct = login_messages.userNameEmpty
        } else {
            if (!cr.test(cv) && !cu.test(cv) && !cs.test(cv)) {
                $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                ct = login_messages.userNameFormat
            }
        }
        return ct
    }

    function bA(cr) {
        var cs = true;
        aR();
        if ("" == cr || cr == null) {
            $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
            cs = login_messages.passwordEmpty
        } else {
            if (cr.length < 6) {
                $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                cs = login_messages.passwordLength
            }
        }
        return cs
    }

    function aV() {
        var ct = $.trim($("#username").val());
        var cr = $.trim($("#password").val());
        var cs = B(ct);
        return typeof(cs) === "boolean" ? bA(cr) : cs
    }

    function A() {
        var cs = false;
        var cr = false;
        $("#username").on("keyup", function () {
            aC = true
        }).blur(function () {
            if (aC) {
                var ct = $.trim($("#username").val());
                cs = B(ct);
                if (if_show_pass_code_login == "Y") {
                    if (typeof(cs) !== "boolean") {
                        showError($("#randCode")[0], cs)
                    } else {
                        if (cs === true) {
                            showError($("#randCode")[0]).hide()
                        }
                    }
                } else {
                    if (typeof(cs) !== "boolean") {
                        login_errorMsg(cs)
                    } else {
                        if (cs === true) {
                            login_errorMsg_hide()
                        }
                    }
                }
            }
        });
        $("#password").blur(function () {
            if (aC) {
                var ct = $.trim($("#password").val());
                if (if_show_pass_code_login == "Y") {
                    if (cs === true && typeof(cr = bA(ct)) !== "boolean") {
                        showError($("#randCode")[0], cr)
                    } else {
                        if (cs === true && cr === true) {
                            showError($("#randCode")[0]).hide()
                        }
                    }
                } else {
                    if (cs === true && typeof(cr = bA(ct)) !== "boolean") {
                        login_errorMsg(cr)
                    } else {
                        if (cs === true && cr === true) {
                            login_errorMsg_hide()
                        }
                    }
                }
            }
        })
    }

    function cd(cr) {
        $("#password").val("");
        $("#randCode").val("");
        if (cr != null) {
            if (cr == "登录名不存在。") {
                aC = false;
                $("#username").add($("#password")).add($("#randCode")).add($("#randCode2")).removeClass("error");
                $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                $("#username").focus()
            } else {
                if (cr.indexOf("密码输入错误。") != -1) {
                    $("#username").add($("#password")).add($("#randCode")).add($("#randCode2")).removeClass("error");
                    $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                    $("#password").focus()
                }
            }
            if (if_show_pass_code_login == "Y") {
                showError($("#randCode")[0], cr)
            } else {
                login_errorMsg(cr)
            }
        }
    }

    function aa(cs, cr) {
        $("#loginSubAsyn").unbind("click");
        $("#loginSubAsyn").click(function () {
            var ct = aV();
            if (is_uam_login == "Y") {
                if (if_show_pass_code_login == "Y" && !verifyRandCodeUAM($("#randCode")[0], ct)) {
                    return
                }
                if (if_show_pass_code_login == "N" && typeof(ct) !== "boolean") {
                    login_errorMsg(ct);
                    return
                }
                $.ajax({
                    url: passport_login,
                    data: {username: $("#username").val(), password: $("#password").val(), appid: passport_appId},
                    dataType: "json",
                    type: "POST",
                    xhrFields: {withCredentials: true},
                    success: function (cu) {
                        if (cu.result_code == 0) {
                            $.ajax({
                                type: "POST",
                                url: passport_authuam,
                                async: false,
                                data: {appid: passport_appId},
                                dataType: "jsonp",
                                jsonp: "callback",
                                success: function (cv) {
                                    if (cv.result_code == 0) {
                                        var cw = cv.newapptk || cv.apptk;
                                        $.ajax({
                                            type: "POST",
                                            async: false,
                                            url: ctx + passport_authclient,
                                            data: {tk: cw},
                                            datatype: "json",
                                            success: function (cx) {
                                                if (cx.result_code == 0) {
                                                    bw();
                                                    loginAsyn(cx.username);
                                                    S(cs, cr)
                                                }
                                            },
                                            error: function () {
                                            }
                                        })
                                    }
                                },
                                error: function () {
                                }
                            })
                        } else {
                            if (if_show_pass_code_login == "Y") {
                                showSuc($("#randCode")[0]).hide()
                            } else {
                                login_errorMsg_hide()
                            }
                            if (if_show_pass_code_login == "Y") {
                                refreshImgUAM("login", "sjrand")
                            }
                            cd(cu.result_message)
                        }
                    }
                })
            } else {
                if (if_show_pass_code_login == "Y" && !verifyRandCode($("#randCode")[0], ct)) {
                    return
                }
                if (if_show_pass_code_login == "N" && typeof(ct) !== "boolean") {
                    login_errorMsg(ct);
                    return
                }
                $("#loginForm").ajaxSubmit({
                    url: ctx + "login/loginUserAsyn?random=" + new Date().getTime(),
                    type: "post",
                    dataType: "json",
                    async: false,
                    success: function (cu) {
                        if (cu.data.status) {
                            if (cu.data.username != null) {
                                bw();
                                loginAsyn(cu.data.username);
                                if (cu.data.otherMsg != "") {
                                    dhtmlx.alert({
                                        title: messages["message.error"],
                                        ok: messages["button.ok"],
                                        text: cu.data.otherMsg,
                                        type: "alert-error",
                                        callback: function () {
                                            if ("Y" == cu.data.notifysession) {
                                                dhtmlx.createWin({
                                                    winId: "notifysession",
                                                    closeWinId: ["close_notifysession"],
                                                    okId: "goto_notifysession",
                                                    okCallBack: function () {
                                                        S(cs, cr)
                                                    }
                                                })
                                            } else {
                                                S(cs, cr)
                                            }
                                        }
                                    })
                                } else {
                                    if ("Y" == cu.data.notifysession) {
                                        dhtmlx.createWin({
                                            winId: "notifysession",
                                            closeWinId: ["close_notifysession"],
                                            okId: "goto_notifysession",
                                            okCallBack: function () {
                                                S(cs, cr)
                                            }
                                        })
                                    } else {
                                        S(cs, cr)
                                    }
                                }
                            }
                        } else {
                            if (cu.data.uamflag == "1") {
                                location.reload(true)
                            }
                            if (if_show_pass_code_login == "Y") {
                                showSuc($("#randCode")[0]).hide()
                            } else {
                                login_errorMsg_hide()
                            }
                            if (if_show_pass_code_login == "Y") {
                                refreshImg("login", "sjrand")
                            }
                            cd(cu.data.loginFail)
                        }
                    }
                })
            }
        })
    }

    function Z() {
        var cr = false;
        $("#loginSubAsyn").unbind("click");
        $("#loginSubAsyn").click(function () {
            if (!cr) {
                var cs = aV();
                if (is_uam_login == "Y") {
                    if (if_show_pass_code_login == "Y" && !verifyRandCodeUAM($("#randCode")[0], cs)) {
                        cr = false;
                        return
                    }
                    cr = true;
                    $("#loginForm").ajaxSubmit({
                        url: passport_login,
                        data: {username: $("#username").val(), password: $("#password").val(), appid: passport_appId},
                        dataType: "json",
                        type: "POST",
                        xhrFields: {withCredentials: true},
                        success: function (ct) {
                            if (ct.result_code == 0) {
                                $.ajax({
                                    type: "POST",
                                    url: passport_authuam,
                                    async: false,
                                    data: {appid: passport_appId},
                                    dataType: "jsonp",
                                    jsonp: "callback",
                                    success: function (cu) {
                                        if (cu.result_code == 0) {
                                            var cv = cu.newapptk || cu.apptk;
                                            $.ajax({
                                                type: "POST",
                                                async: false,
                                                url: ctx + passport_authclient,
                                                data: {tk: cv},
                                                datatype: "json",
                                                success: function (cw) {
                                                    if (cw.result_code == 0) {
                                                        bw();
                                                        loginAsyn(cw.username)
                                                    }
                                                },
                                                error: function () {
                                                }
                                            })
                                        }
                                    },
                                    error: function () {
                                    }
                                })
                            } else {
                                $("#i-ok").hide();
                                if (if_show_pass_code_login == "Y") {
                                    refreshImgUAM("login", "sjrand")
                                }
                                cd(ct.result_message)
                            }
                        },
                        complete: function () {
                            cr = false
                        }
                    })
                } else {
                    if (if_show_pass_code_login == "Y" && !verifyRandCode($("#randCode")[0], cs)) {
                        cr = false;
                        return
                    }
                    cr = true;
                    $("#loginForm").ajaxSubmit({
                        url: ctx + "login/loginUserAsyn?random=" + new Date().getTime(),
                        type: "post",
                        dataType: "json",
                        async: false,
                        success: function (ct) {
                            if (ct.data.status) {
                                if (ct.data.otherMsg != "") {
                                    dhtmlx.alert({
                                        title: messages["message.error"],
                                        ok: messages["button.ok"],
                                        text: ct.data.otherMsg,
                                        type: "alert-error",
                                        callback: function () {
                                            if (ct.data.username != null) {
                                                bw();
                                                loginAsyn(ct.data.username)
                                            }
                                        }
                                    })
                                } else {
                                    if (ct.data.username != null) {
                                        bw();
                                        loginAsyn(ct.data.username)
                                    }
                                }
                            } else {
                                if (ct.data.uamflag == "1") {
                                    location.reload(true)
                                }
                                $("#i-ok").hide();
                                if (if_show_pass_code_login == "Y") {
                                    refreshImg("login", "sjrand")
                                }
                                cd(ct.data.loginFail)
                            }
                        },
                        complete: function () {
                            cr = false
                        }
                    })
                }
            }
        })
    }

    function aY() {
        window.sucessCallback = function () {
            bB = $("#randCode2").val();
            $("#back_edit").trigger("click");
            var cr = "99999GGGGG";
            var ct = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
            var cs = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
            if (isAsync == ticket_submit_order.request_flag.isAsync) {
                if (K.queryLeftNewDTO.train_no.indexOf(cr) > -1 && ct.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1 && cs.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
                    dhtmlx.createWin({
                        winId: "confirmG1234",
                        closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                        okId: "goto_integration_G1234",
                        okCallBack: function () {
                            q()
                        },
                        callback: function () {
                            return
                        }
                    })
                } else {
                    q()
                }
            } else {
                if (K.queryLeftNewDTO.train_no.indexOf(cr) > -1 && ct.indexOf(K.queryLeftNewDTO.from_station_telecode) > -1 && cs.indexOf(K.queryLeftNewDTO.to_station_telecode) > -1) {
                    dhtmlx.createWin({
                        winId: "confirmG1234",
                        closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                        okId: "goto_integration_G1234",
                        okCallBack: function () {
                            cp()
                        },
                        callback: function () {
                            return
                        }
                    })
                } else {
                    cp()
                }
            }
            return
        }
    }

    function b6() {
        $("#username").css("color", "#333");
        $("#password").css("color", "#333");
        $("#randCode").css("color", "#333");
        if ($("#username").val() == "" || $("#username").val() == uninputmsg || $("#username").val() == null || $("#username").val() == "admin") {
            $("#username").css("color", "#999");
            $("#username").val(uninputmsg);
            $("#password").val("")
        }
        $("#username").focus(function () {
            var cr = $("#username").val();
            if (cr == uninputmsg) {
                $("#username").css("color", "#333");
                $("#username").val("");
                $("#password").val("")
            }
        }).blur(function () {
            var cr = $("#username").val();
            if (cr == "") {
                $("#username").css("color", "#999");
                $("#username").val(uninputmsg)
            }
        })
    }

    function ag() {
        $("#forget_my_password_id").on("click", function (cr) {
            otsRedirect("post", ctx + "forgetPassword/initforgetMyPassword")
        })
    }

    function aW() {
        var cr = 1;
        var cx;
        var cC;
        var ct;
        var cw = true;
        var cv = true;
        var cA = true;
        var cE;
        var cs;
        var cB = false;
        var cy = false;
        var cD = false;
        ct = dataNumber;
        var cz;
        if (train_tour_flag != null && train_tour_flag != "" && train_tour_flag == "fc") {
            cz = jQuery.inArray($("#back_train_date").val().substring(5, 10), change_dates_arr)
        } else {
            cz = jQuery.inArray($("#train_date").val().substring(5, 10), change_dates_arr)
        }
        if (cz != "-1") {
            cz = cz + 1;
            cE = firstShow;
            cs = endShow;
            if (parseInt(cz) >= parseInt(firstShow) && parseInt(cz) <= parseInt(endShow)) {
                if (isOther) {
                    if (parseInt(endShow) > parseInt(other_control)) {
                        endShow = other_control;
                        cy = true;
                        cB = true
                    }
                } else {
                    if (parseInt(endShow) > parseInt(stu_control)) {
                        endShow = stu_control
                    }
                }
                if (!cy) {
                    cw = false;
                    cv = false;
                    cA = false;
                    cC = endShow + 1
                }
            } else {
                cB = true;
                firstShow = cz;
                endShow = firstShow + 19;
                if (isOther) {
                    if (parseInt(endShow) > parseInt(other_control)) {
                        endShow = other_control;
                        cy = true
                    }
                } else {
                    if (parseInt(endShow) > parseInt(stu_control)) {
                        endShow = stu_control;
                        cy = true
                    }
                }
                if (!cy) {
                    cx = firstShow - 1;
                    cC = endShow + 1;
                    if (cx < cr) {
                        cw = false
                    }
                }
            }
            if (isOther) {
                if (other_control < dataNumber) {
                    cD = true
                }
            } else {
                if (stu_control < dataNumber) {
                    cD = true
                }
            }
            if (cy) {
                cB = true;
                firstShow = endShow - 19;
                cx = firstShow - 1;
                if (cD) {
                    cv = true;
                    cC = endShow + 1;
                    ct = dataNumber
                } else {
                    cv = false
                }
                if (train_tour_flag != null && train_tour_flag != "" && train_tour_flag == "fc") {
                    $("#back_train_date").val(fullDateArr[cz - 1])
                } else {
                    $("#train_date").val(fullDateArr[cz - 1])
                }
            }
            if (parseInt(firstShow) < 1) {
                firstShow = 1
            }
            if (cw) {
                for (var cu = cr; cu <= cx; cu++) {
                    $("#date_range>ul>li:nth-child(" + cu + ")").hide()
                }
            }
            if (cv) {
                for (var cu = cC; cu <= ct; cu++) {
                    $("#date_range>ul>li:nth-child(" + cu + ")").hide()
                }
            }
            if (cA) {
                for (var cu = firstShow; cu <= endShow; cu++) {
                    $("#date_range>ul>li:nth-child(" + cu + ")").show()
                }
            }
            $("#date_range>ul>li").removeClass("sel");
            if (cB) {
                $("#date_range>ul>li:nth-child(" + cE + ")").children("span:first").removeClass();
                $("#date_range>ul>li:nth-child(" + cE + ")").children("span:last").removeClass();
                $("#date_range>ul>li:nth-child(" + cs + ")").removeClass();
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children("span:first").addClass("first");
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children("span:last").addClass("first");
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
                $("#date_range>ul>li:nth-child(" + endShow + ")").addClass("end")
            }
            $("#date_range>ul>li:nth-child(" + cz + ")").addClass("sel");
            $("#date_range>ul>li:nth-child(" + cz + ")").children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(" + cz + ")").children("span:first-child").addClass("hide");
            bU = $("#date_range>ul>li:nth-child(" + cz + ")").children("span:first-child").text()
        }
    }

    function bQ() {
        $("#query_ticket").unbind("click");
        $("#query_ticket_stu").unbind("click");
        $("#query_ticket").removeClass().addClass("btn92s btn-disabled");
        $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
        bm();
        setTimeout(function () {
            co();
            bj();
            $("#query_ticket").removeClass().addClass("btn92s");
            $("#query_ticket_stu").removeClass().addClass("btn92s");
            if (train_tour_flag != "gc" && train_tour_flag != "fc") {
                if (ClickWho == "0X00") {
                    $("#query_ticket").unbind();
                    $("#query_ticket").removeClass().addClass("btn92s btn-disabled");
                    $("#query_ticket_stu").removeClass().addClass("btn92s")
                }
                if (ClickWho == "00") {
                    $("#query_ticket_stu").unbind();
                    $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
                    $("#query_ticket").removeClass().addClass("btn92s")
                }
            }
            if (isstudentDate) {
                $("#query_ticket_stu").unbind();
                $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
                $("#query_ticket").removeClass().addClass("btn92s")
            }
        }, 1000)
    }

    changeArriveDate = function (cs, cr) {
        cs = cs.replace(":", "");
        cr = cr.replace(":", "");
        hour_value = Number(cs.substring(0, 2)) + Number(cr.substring(0, 2));
        min_value = Number(cs.substring(2, 4)) + Number(cr.substring(2, 4));
        if (min_value >= 60) {
            hour_value = hour_value + 1
        }
        if (hour_value >= 24 && hour_value < 48) {
            return "次日"
        } else {
            if (hour_value >= 48 && hour_value < 72) {
                return "两日"
            } else {
                if (hour_value >= 72) {
                    return "三日"
                } else {
                    return "当日"
                }
            }
        }
    };
    changeLiShi = function (cr) {
        if (cr.substring(0, 1) == "0") {
            if (cr.substring(1, 2) == "0") {
                if (cr.substring(3, 4) == "0") {
                    cr = cr.substring(4, 5) + "分"
                } else {
                    cr = cr.substring(3, 5) + "分"
                }
            } else {
                cr = cr.substring(1, 2) + "小时" + cr.substring(3, 5) + "分"
            }
        } else {
            if (cr.substring(3, 5) == "00") {
                cr = cr.substring(0, 2) + "小时"
            } else {
                cr = cr.substring(0, 2) + "小时" + cr.substring(3, 5) + "分"
            }
        }
        return cr
    };
    isNum = function (cr) {
        return parseInt(cr)
    };
    buttonText = function () {
        return "预订"
    };

    function ao() {
        if ($("#sf2").is(":checked")) {
            if (C($("#train_date").val()) > C(init_maxPeriod) - 24 * 60 * 60 * 1000) {
                bm()
            } else {
                bj()
            }
        }
    }

    function ap() {
        if (train_tour_flag == "fc") {
            var cr = $("#back_train_date").val();
            z("back_train_date")
        } else {
            var cr = $("#train_date").val();
            z("train_date")
        }
        if (rqChecked.length == 0) {
            rqChecked.push(cr)
        }
        var cs = false;
        if (cr != rqChecked[0]) {
            for (var ct = 0; ct < rqChecked.length; ct++) {
                if (cr == rqChecked[ct]) {
                    cs = true;
                    rqChecked.splice(ct, 1);
                    $("#date-list input[scode=" + rqChecked[0] + "]").prop("checked", false);
                    rqChecked.splice(0, 1, cr);
                    $("#prior_date span[name=" + cr + "]").remove();
                    break
                }
            }
            if (!cs) {
                $("#date-list input[scode=" + rqChecked[0] + "]").prop("checked", false);
                rqChecked.splice(0, 1, cr);
                $("#date-list input[scode=" + rqChecked[0] + "]").prop("checked", true)
            }
        }
    }

    $("#train_date").focus(function () {
        $("#train_date").jcalendar({
            isSingle: false,
            startDate: $.getMindateForCal(),
            endDate: $.getMaxdateForCal(),
            onpicked: function () {
                ap();
                $("#train_date").blur();
                var cr = $("#train_date").val();
                var cs = $("#back_train_date").val();
                if ($("#wf").is(":checked")) {
                    if (!cs | C(cr) > C(cs)) {
                        $("#back_train_date").val(cr)
                    }
                }
                aW()
            }
        })
    });
    $("#date_icon_1").click(function () {
        $("#train_date").focus()
    });
    $("#back_train_date").focus(function () {
        $("#back_train_date").jcalendar({
            isSingle: false,
            startDate: $("#train_date").val(),
            endDate: $.getMaxdateForCal(),
            onpicked: function () {
                ap();
                $("#back_train_date").blur();
                aW()
            }
        })
    });
    $("#date_icon_2").click(function () {
        $("#back_train_date").focus()
    });
    String.prototype.toDate = function () {
        style = "yyyy-MM-dd hh:mm";
        var cu = {"y+": "y", "M+": "M", "d+": "d", "h+": "h", "m+": "m"};
        var cr = {y: "", M: "", d: "", h: "00", m: "00"};
        var ct = style;
        for (var cs in cu) {
            if (new RegExp("(" + cs + ")").test(style)) {
                cr[cu[cs]] = this.substring(ct.indexOf(RegExp.$1), ct.indexOf(RegExp.$1) + RegExp.$1.length)
            }
        }
        return new Date(cr.y, cr.M - 1, cr.d, cr.h, cr.m)
    };

    function z(cv) {
        if (cv == "back_train_date" && ClickWho != "0X00") {
            return
        }
        var cr = ($("#" + cv).val().split(" ")[0] + " 00:00:00").toDate().getTime();
        var cx = stu_start_train_date.split("&");
        var ct = stu_end_tain_date.split("&");
        var cs = false;
        for (var cu = 0, cw = cx.length; cu < cw; cu++) {
            if (cr >= cx[cu].toDate().getTime() && cr <= ct[cu].toDate().getTime()) {
                cs = true;
                break
            }
        }
        if (cs) {
            $("#sf2").attr("disabled", false);
            $("#sf2_label").removeClass("color999")
        } else {
            $("#sf2").attr("checked", false);
            $("#sf1")[0]["checked"] = "checked";
            $("#sf2").attr("disabled", true);
            $("#sf2_label").addClass("color999")
        }
    }

    function b0(cr) {
        if (isSaveQueryLog == "Y") {
            $.ajax({
                type: "get", isTakeParam: false, beforeSend: function (cs) {
                    cs.setRequestHeader("If-Modified-Since", "0");
                    cs.setRequestHeader("Cache-Control", "no-cache")
                }, url: ctx + "leftTicket/log", data: cr, timeout: 15000, error: function (cs, cu, ct) {
                }, success: function (cs) {
                }
            })
        }
    }

    var aU = 0;
    var X = new Array();

    function U() {
        $("div#id-seat-sel div.sel-item a").on("click", function () {
            if ($(this).attr("class") == "cur") {
                $(this).removeClass("cur");
                aU--;
                var cs = $(this).attr("id");
                $.each(X, function (ct, cv) {
                    var cu = $(cv).attr("id");
                    if (cs == cu) {
                        X.splice(ct, 1)
                    }
                });
                $("#selectNo").html(aU + "/" + tickets_info.length)
            } else {
                X.push($(this));
                $(this).addClass("cur");
                if (aU == tickets_info.length) {
                    var cr = X[aU - 1];
                    $(cr).removeClass("cur");
                    X.splice(aU - 1, 1);
                    return
                }
                aU++;
                $("#selectNo").html(aU + "/" + tickets_info.length)
            }
        })
    }

    function T() {
        ak();
        if (tickets_info && tickets_info.length > 0) {
            var cv = "Y";
            var cr = tickets_info[0].seat_type;
            for (var cu = 0; cu < tickets_info.length; cu++) {
                var ct = tickets_info[cu];
                if (ct.seat_type != cr) {
                    cv = "N";
                    break
                }
            }
            if (canChooseSeats && "Y" == canChooseSeats && "Y" == cv) {
                if (choose_Seats) {
                    var cs = "*如果本次列车剩余席位无法满足您的选座需求，系统将自动为您分配席位。";
                    if ("M" == cr && choose_Seats.indexOf("M") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#yideng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#yideng2").css("display", "block")
                        }
                        $("#notice_1_id").html(cs)
                    }
                    if ("O" == cr && choose_Seats.indexOf("O") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#erdeng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#erdeng2").css("display", "block")
                        }
                        $("#notice_1_id").html(cs)
                    }
                    if ("P" == cr && choose_Seats.indexOf("P") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#tedeng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#tedeng2").css("display", "block")
                        }
                        $("#notice_1_id").html(cs)
                    }
                    if ("9" == cr && choose_Seats.indexOf("9") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#tedeng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#tedeng2").css("display", "block")
                        }
                        $("#notice_1_id").html(cs)
                    }
                }
            }
        }
    }

    function ak() {
        $("div#id-seat-sel div.sel-item a").removeClass("cur");
        aU = 0;
        X = new Array();
        $("#selectNo").html(aU + "/" + tickets_info.length);
        $("#id-seat-sel.sel-item").css("display", "none");
        $("#id-seat-sel").css("display", "none");
        $("#notice_1_id").html("");
        $("#yideng1").css("display", "none");
        $("#yideng2").css("display", "none");
        $("#erdeng1").css("display", "none");
        $("#erdeng2").css("display", "none");
        $("#tedeng1").css("display", "none");
        $("#tedeng2").css("display", "none")
    }

    function bG() {
        var cr = "";
        $.each($("div#id-seat-sel div.seat-sel-bd a"), function () {
            if ($(this).attr("class") == "cur") {
                var cs = $(this).attr("id");
                cr += cs
            }
        });
        return cr
    }

    function bn() {
        if (aU != 0 && aU != tickets_info.length) {
            $("#sy_ticket_num_id").html("<span style='color:red;'>请按照乘车人个数选座对应的席位。</span>");
            return false
        } else {
            return true
        }
    }

    function b9() {
        b3();
        if (tickets_info && tickets_info.length > 0) {
            if (canChooseBeds && "Y" == canChooseBeds) {
                $("#id-bed-sel").css("display", "block");
                $("#notice_1_id").html("*选铺后如果系统票额不足，系统将随机为您申请铺位。");
                if (isCanChooseMid && "Y" == isCanChooseMid) {
                    $("#mid_bed").css("display", "block")
                } else {
                    $("#mid_bed").css("display", "none")
                }
            } else {
                $("#id-bed-sel").css("display", "none")
            }
        }
    }

    numSet = function (cu, cr) {
        var cz = parseInt($("#x_no").text());
        var cv = parseInt($("#z_no").text());
        var ct = parseInt($("#s_no").text());
        var cx = tickets_info.length;
        var cs = cz + cv + ct;
        if ("add" == cu) {
            if (cs < cx) {
                var cy = document.getElementById(cr).innerText;
                var cw = parseInt(cy) + 1;
                document.getElementById(cr).innerText = cw;
                $("#selectBedNo").html(cs + 1 + "/" + cx)
            }
        } else {
            var cy = document.getElementById(cr).innerText;
            if (cs > 0 && parseInt(cy) > 0) {
                var cw = parseInt(cy) - 1;
                document.getElementById(cr).innerText = cw;
                $("#selectBedNo").html(cs - 1 + "/" + cx)
            }
        }
    };

    function b3() {
        $("#x_no").html("0");
        $("#z_no").html("0");
        $("#s_no").html("0");
        $("#selectBedNo").html(0 + "/" + tickets_info.length);
        $("#confirmDiv").css("padding", "20px 0");
        $("#checktrain").css("display", "none")
    }

    function aN() {
        var cr = $("#x_no").text();
        var cs = $("#z_no").text();
        var ct = $("#s_no").text();
        return cr + cs + ct
    }
})();

function checkG1234(g, f, c, h, b) {
    var a = "99999GGGGG";
    var e = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
    var d = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
    if (c.indexOf(a) > -1 && e.indexOf(h) > -1 && d.indexOf(b) > -1) {
        dhtmlx.createWin({
            winId: "confirmG1234",
            closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
            okId: "goto_integration_G1234",
            okCallBack: function () {
                submitOrderRequest(g, f)
            },
            callback: function () {
                return
            }
        })
    } else {
        submitOrderRequest(g, f)
    }
}

function checkRandCodeUAM(e) {
    var b = false, a = e.value, c = "sjrand", d = TouClick.get("touclick-" + e.id);
    $.ajax({
        url: passport_captcha_check,
        type: "post",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: {answer: a, login_site: "E", rand: c},
        async: false,
        success: function (f) {
            if (f.result_code == "4") {
                b = true;
                d.success();
                setTimeout(function () {
                    if (d.getState() === "success") {
                        d.reload()
                    }
                }, 3000)
            } else {
                b = false;
                var g = f.result_message;
                d.fail()
            }
        }
    });
    return b
}

function refreshImgUAM(c, e, d) {
    if ($(".login .touclick-image").attr("src").indexOf(passport_captcha) != -1) {
        TouClick.get("touclick-" + TouLocal.getRandCodeName(d)).reload();
        return
    }
    var h = "randCode";
    if (targetelement[0] !== "") {
        h += "_" + targetelement[0]
    }
    var b = $("#" + targetdiv[0]), g = b.data("code_type");
    var j = "sjrand";
    var f = "E";
    var a = passport_captcha + "?login_site=" + f + "&module=" + g + "&rand=" + j;
    TouClick.ready(function () {
        var k = TouClick.get("touclick-" + h).start({
            gp_url: a, onClick: function (m) {
                var o = $("#" + h);
                o.val(m);
                var n = $("#error_msg" + targetdiv[0]);
                var l = o[0];
                if (n.data("tag") === 1) {
                    n.hide()
                }
            }, onReload: function () {
                $("#" + h).val("");
                $("#error_msg").css("display", "none");
                var l = $.jc_getcookie("current_captcha_type")
            }, onReloading: function () {
                return true
            }
        })
    });
    TouClick.get("touclick-" + TouLocal.getRandCodeName(d)).reload();
    $(".login .touclick-image").attr("src", a)
}

function verifyRandCodeUAM(d, b) {
    if (typeof(b) !== "boolean") {
        showError(d, b);
        return false
    }
    var a = d.value;
    var c = typeof(TouLocal.getErrorMessage) === "function" ? TouLocal.getErrorMessage(d) : login_messages.pleaseClickCaptcha;
    if ("" == a || null == a) {
        showError(d, c, 1);
        return false
    }
    if (!checkRandCodeUAM(d)) {
        c = typeof(TouLocal.getErrorMessage) === "function" ? TouLocal.getErrorMessage(d, false) : login_messages.pleaseClickCaptcha;
        showError(d, c, 1);
        return false
    }
    showError(d).hide();
    return true
};
var left_ticket_messages = {
    "leftTicketDTO.from_station": "出发站",
    "leftTicketDTO.to_station": "目的站",
    "leftTicketDTO.train_no": "车次",
    "leftTicketDTO.train_date": "出发日",
    back_train_date: "返程日"
};
jQuery.validator.addMethod("checkLoginUserName", function (f, d) {
    var a = false;
    var c = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])|(19[0-9])|(16[0-9])\d{8}$/;
    var b = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
    var e = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    if (b.test(f) || e.test(f) || c.test(f)) {
        a = true
    }
    return this.optional(d) || a
}, "wrong username.");
jQuery.validator.addMethod("requiredUserName", function (b, a) {
    if ("用户名／邮箱／手机号" == b) {
        return false
    }
    if (b == null || "" == b) {
        return false
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("requiredSchoolName", function (b, a) {
    if ("简码／汉字" == b) {
        return false
    }
    if (b == null || "" == b) {
        return false
    }
    return true
}, "wrong schoolname.");
jQuery.validator.addMethod("randCodeRequired", function (b, a) {
    $("#i-ok").css("display", "none");
    return b.length > 0
}, "验证码错误!");
jQuery.validator.addMethod("randCodeFormat", function (c, b) {
    $("#i-ok").css("display", "none");
    var a = /^[a-zA-Z0-9]+$/;
    return this.optional(b) || a.test(c)
}, "验证码错误!");
jQuery.validator.addMethod("randCodeLength", function (b, a) {
    $("#i-ok").css("display", "none");
    return b.length == 4
}, "验证码错误!.");
jQuery.validator.addMethod("integrationCheck", function (b, a) {
    var c = /^\d{6}$/;
    return this.optional(a) || c.test(b)
}, "wrong integrationpassword");
jQuery.validator.addMethod("integrationPwdCheck", function (b, a, c) {
    if ($("#" + c[0]).val() == $("#" + c[1]).val()) {
        return true
    }
    return false
}, "两次输入密码不一致!.");
jQuery.validator.addMethod("checkRandCode", function (c, b, d) {
    var a = true;
    if (c && c.length == 4) {
        $.ajax({
            url: ctx + "passcodeNew/checkRandCodeAnsyn",
            type: "post",
            data: {randCode: c, rand: d},
            async: false,
            success: function (e) {
                if (e.data == "N") {
                    a = false;
                    $("#i-ok").css("display", "none")
                } else {
                    a = true;
                    $("#i-ok").css("display", "block")
                }
            }
        })
    } else {
        a = false;
        $("#i-ok").css("display", "none")
    }
    return a
}, "验证码错误!.");
jQuery.validator.addMethod("validateUsersName", function (b, a) {
    return this.optional(a) || /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/.test(b)
}, "用户名只能由字母、数字或_组成");
jQuery.validator.addMethod("checkWriteSpace", function (c, b) {
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 32) {
            return false
        }
    }
    return true
}, "contain writespace");
jQuery.validator.addMethod("validateRandCode", function (b, a) {
    return this.optional(a) || /^[a-zA-Z0-9]+$/.test(b)
}, "验证码错误!.");
jQuery.validator.addMethod("checkPassward", function (c, b, e) {
    var d = true;
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 39 || c.charCodeAt(a) == 60 || c.charCodeAt(a) == 62) {
            d = false
        }
        if (!d) {
            break
        }
    }
    return this.optional(b) || d
}, "Passward wrong");

function validateSecIdCard(g) {
    var f = 0;
    var a = g;
    var e = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙",
        21: "辽宁",
        22: "吉林",
        23: "黑龙",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        83: "台湾",
        91: "国外"
    };
    if (!/^\d{17}(\d|x)$/i.test(a)) {
        return false
    }
    a = a.replace(/x$/i, "a");
    if (e[parseInt(a.substr(0, 2))] == null) {
        return false
    }
    var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-" + Number(a.substr(12, 2));
    var h = new Date(c.replace(/-/g, "/"));
    if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
        return false
    }
    for (var b = 17; b >= 0; b--) {
        f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
    }
    if (f % 11 != 1) {
        return false
    }
    return true
}

function validateFirIdCard(g) {
    var f = 0;
    var a;
    var e = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙",
        21: "辽宁",
        22: "吉林",
        23: "黑龙",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        83: "台湾",
        91: "国外"
    };
    if (g.length == 15) {
        a = idCardUpdate(g)
    } else {
        a = g
    }
    if (!/^\d{17}(\d|x)$/i.test(a)) {
        return false
    }
    a = a.replace(/x$/i, "a");
    if (e[parseInt(a.substr(0, 2))] == null) {
        return false
    }
    var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-" + Number(a.substr(12, 2));
    var h = new Date(c.replace(/-/g, "/"));
    if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
        return false
    }
    for (var b = 17; b >= 0; b--) {
        f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
    }
    if (f % 11 != 1) {
        return false
    }
    return true
}

function idCardUpdate(g) {
    var b;
    var f = /^(\d){15}$/;
    if (f.test(g)) {
        var e = 0;
        var a = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        var d = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
        g = g.substr(0, 6) + "19" + g.substr(6, g.length - 6);
        for (var c = 0; c < g.length; c++) {
            e += parseInt(g.substr(c, 1)) * a[c]
        }
        g += d[e % 11];
        b = g
    } else {
        b = "#"
    }
    return b
}

jQuery.validator.addMethod("checkBorth", function (e, c) {
    var b = e;
    if (b == "") {
        return true
    } else {
        var a = b.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (a == null) {
            return false
        }
        var f = new Date(a[1], a[3] - 1, a[4]);
        return (f.getFullYear() == a[1] && (f.getMonth() + 1) == a[3] && f.getDate() == a[4])
    }
}, "日期格式不合法");
jQuery.validator.addMethod("byteRangeLength", function (d, b, e) {
    var c = d.length;
    for (var a = 0; a < d.length; a++) {
        if (d.charCodeAt(a) > 127) {
            c++
        }
    }
    return this.optional(b) || (c >= e[0] && c <= e[1])
}, "length wrong");
jQuery.validator.addMethod("checkNameCharBlank", function (c, b, d) {
    var a = d.split("@");
    if ($("#" + a[1]).val() == "") {
        return true
    } else {
        if ($("#" + a[0]).val() == "1" || $("#" + a[0]).val() == "2") {
            return this.optional(b) || /^[a-zA-Z·.．\u3400-\u9FFF]+$/.test(c)
        } else {
            if ($("#" + a[0]).val() == "B") {
                if (/^[-]+$/.test(c)) {
                    return false
                }
                return this.optional(b) || /^[a-z A-Z·.．\u3400-\u9FFF\-]+$/.test(c)
            } else {
                if ($("#" + a[0]).val() == "H") {
                    return true
                } else {
                    return this.optional(b) || /^[a-z A-Z·.．\u3400-\u9FFF]+$/.test(c)
                }
            }
        }
    }
}, "wrong name.");
jQuery.validator.addMethod("checkNameCharBlankForWork", function (c, b, d) {
    var a = d.split("@");
    if ($("#" + a[0]).val() == "H") {
        return this.optional(b) || /^[a-zA-Z ]+$/.test(c)
    } else {
        return true
    }
}, "wrong name.");
jQuery.validator.addMethod("checkIdValidStr", function (c, b) {
    var a = /^[a-zA-Z0-9\_\-\(\)]+$/;
    return this.optional(b) || (a.test(c))
}, "wrong id");
jQuery.validator.addMethod("isSecIDCard", function (b, a, c) {
    if (!checkIfSecIdCard($(c).val())) {
        return true
    }
    return validateSecIdCard(b)
}, "wrong");

function checkIfSecIdCard(a) {
    if (a == "1") {
        return true
    }
    return false
}

function checkIfFirIdCard(a) {
    if (a == "2") {
        return true
    }
    return false
}

function checkCardForHKorTW(a) {
    if (a == "C" || a == "G") {
        return true
    }
    return false
}

jQuery.validator.addMethod("isFirIDCard", function (b, a, c) {
    if (!checkIfFirIdCard($(c).val())) {
        return true
    }
    return validateFirIdCard(b)
}, "wrong");
jQuery.validator.addMethod("checkHkongMacao", function (c, b, d) {
    if ($(d).val() == "C") {
        var a = /^[HMhm]{1}([0-9]{8})$/;
        return this.optional(b) || (a.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkTaiw", function (b, a, d) {
    if ($(d).val() == "G") {
        var c = /^[0-9]{8}$/;
        return this.optional(a) || (c.test(b))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkPassport", function (d, b, e) {
    if ($(e).val() == "B") {
        var c = /^[a-zA-Z]{5,17}$/;
        var a = /^[a-zA-Z0-9]{5,17}$/;
        return this.optional(b) || (a.test(d)) || c.test(d)
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkWork", function (c, b, d) {
    if ($(d).val() == "H") {
        var a = /^[a-zA-Z]{3}[0-9]{12}$/;
        return this.optional(b) || (a.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkGATJmjzz", function (d, b, e) {
    var a = e.split("@");
    if ($("#" + a[0]).val() == "1") {
        var c = d.substring(0, 2);
        if ($("#" + a[1]).is(":checked")) {
            if (c != "81" && c != "82" && c != "83") {
                return false
            }
        } else {
            if (c == "81" || c == "82" || c == "83") {
                return false
            }
        }
    }
    return true
}, "wrong format.");
jQuery.validator.addMethod("isMobile", function (d, b) {
    var c = d.length;
    var a = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])|(19[0-9])|(16[0-9])\d{8}$/;
    return this.optional(b) || (c == 11 && a.test(d))
}, "wrong mobile phone ");
jQuery.validator.addMethod("isTelePhone", function (b, a) {
    var c = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^[0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}#)/;
    return this.optional(a) || (c.test(b))
}, "wrong telePhone ");
jQuery.validator.addMethod("illegalChar", function (c, b, e) {
    var d = true;
    if (c.indexOf("$") >= 0) {
        return false
    }
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 39 || c.charCodeAt(a) == 60 || c.charCodeAt(a) == 62 || c.charCodeAt(a) == 34 || c.charCodeAt(a) == 63) {
            d = false
        }
        if (!d) {
            break
        }
    }
    return this.optional(b) || d
}, "Illegal char wrong");
jQuery.validator.addMethod("isZipCode", function (c, b) {
    var a = /^[0-9]{6}$/;
    return this.optional(b) || (a.test(c))
}, "wrong zipcode");
jQuery.validator.addMethod("isEmail", function (c, a) {
    var b = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return this.optional(a) || (b.test(trim(c)))
}, "wrong email");

function replaceChar(b) {
    var a = b.value.replace(/['"<> ?]/g, "");
    b.value = a
}

function checkNameChar1(a) {
    return /^[a-zA-Z0-9\u3400-\u9FFF]+$/.test(a)
}

function trim(a) {
    return a.replace(/(^\s*)|(\s*$)/g, "")
}

function ltrim(a) {
    return a.replace(/(^\s*)/g, "")
}

function rtrim(a) {
    return a.replace(/(\s*$)/g, "")
}

jQuery.validator.addMethod("validateName", function (b, a) {
    return this.optional(a) || /^[a-zA-Z\u3400-\u9FFF0-9\_]+$/.test(b)
}, "wrong username.");
jQuery.validator.addMethod("studentRequired", function (b, a, c) {
    if ($(c).val() == "3") {
        return b && trim(b) != ""
    }
    return true
}, "wrong studentRequired.");
jQuery.validator.addMethod("studentStationRequired", function (b, a, c) {
    if ($(c).val() == "3") {
        return b && trim(b) != "简拼/全拼/汉字" && trim(b) != ""
    }
    return true
}, "wrong studentStationRequired.");
jQuery.validator.addMethod("studentValidateName", function (b, a, c) {
    if ($(c).val() == "3") {
        return this.optional(a) || /^[a-zA-Z\u3400-\u9FFF0-9\_]+$/.test(b)
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("checkStudentName", function (b, a, c) {
    if ($(c).val() == "3") {
        if ((!b || trim(b) == "" || trim(b) == "简码/汉字")) {
            return false
        }
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("isQuestionNull", function (b, a, c) {
    if (jQuery.trim(b) != "") {
        if (jQuery.trim($(c[0]).val()) == "customQuestion" && jQuery.trim($(c[1]).val()) == "" || jQuery.trim($(c[0]).val()) == "") {
            return false
        }
    }
    return true
}, "you should input the question");
jQuery.validator.addMethod("isAnswerNull", function (b, a, c) {
    if ((jQuery.trim($(c[0]).val()) == "customQuestion" && jQuery.trim($(c[1]).val()) != "") || (jQuery.trim($(c[0]).val()) != "")) {
        if (jQuery.trim(b) == "") {
            return false
        }
    }
    return true
}, "you should input the answer");

function checkSex(c, b, a) {
    if (!checkSexByCardId(c, b, a)) {
        if (!confirm("性别与身份证中的性别不符，是否继续?")) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}

function checkSexByCardId(c, e, a) {
    function b(h, i) {
        var g = null;
        if (i.length == 15) {
            g = i.substring(14, 15)
        } else {
            if (i.length == 18) {
                g = i.substring(16, 17)
            } else {
                return true
            }
        }
        if (g == "x" || g == "X") {
            g = "10"
        }
        var f = parseInt(g);
        var j = f % 2;
        if (j === 0 && h === "F") {
            return true
        } else {
            if (j === 1 && h === "M") {
                return true
            } else {
                return false
            }
        }
    }

    var d = $(a).val();
    if (checkIfSecIdCard($(e).val()) && validateSecIdCard(d)) {
        if (d !== "") {
            return b(c, d)
        } else {
            return true
        }
    } else {
        if (checkIfFirIdCard($(e).val()) && validateFirIdCard(d)) {
            if (d !== "") {
                return b(c, d)
            } else {
                return true
            }
        } else {
            return true
        }
    }
}

function checkBirdDateByCardId(c, e, b) {
    var a = null;
    var d = $(b).val();
    if (checkIfSecIdCard($(e).val()) && d !== "" && validateSecIdCard(d)) {
        a = d.substring(6, 14)
    } else {
        if (checkIfFirIdCard($(e).val()) && d !== "" && validateFirIdCard(d)) {
            if (d.length == 15) {
                a = "19" + d.substring(6, 12)
            } else {
                if (d.length == 18) {
                    a = d.substring(6, 14)
                }
            }
        } else {
            return true
        }
    }
    if (c !== "") {
        c = c.replace(/-/g, "");
        if (c != a) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}

function checkBirdate(c, b, a) {
    if (!checkBirdDateByCardId(c, b, a)) {
        if (!confirm("出生日期与身份证中的出生日期不符，是否继续?")) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}

jQuery.validator.addMethod("checkPwdValidate", function (b, a) {
    return this.optional(a) || /(?![a-z]+$|[0-9]+$|_+$)^[a-zA-Z0-9_]{6,}$/.test(b)
}, "contain writespace");
jQuery.validator.addMethod("checkConfirmPassWard", function (b, a, c) {
    if ($(c).val() != null) {
        return $(c).val() == b
    }
    return true
}, "contain writespace");
jQuery.validator.addMethod("IVR_passwd_format", function (b, a) {
    var c = /^[0-9]{6}$/;
    return this.optional(a) || c.test(b)
}, "验证码错误!.");
jQuery.validator.addMethod("checkStation", function (b, a) {
    if ((!b || trim(b) == "" || trim(b) == "简拼/全拼/汉字" || trim(b) == "简拼/全拼/汉字或↑↓")) {
        return false
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("checkAnsyUserName", function (e, c, f) {
    var b = f[0];
    var d = $("#" + f[1]).val();
    var a = true;
    $.ajax({
        url: b + "?user_name=" + e, type: "get", async: false, success: function (g, h) {
            if (g.data == true) {
                a = false
            } else {
                a = true
            }
        }, error: function (g, i, h) {
            a = false
        }
    });
    return a
}, "wrong cardNo");

function checkPwdRank(e, a, d) {
    var b = $(e);
    var c = b.val();
    if (c.length <= 6 || new RegExp("^[a-zA-Z]{6,}$").test(c) || new RegExp("^[0-9]{6,}$").test(c) || new RegExp("^[_]{6,}$").test(c)) {
        $("#" + a).attr("title", "危险");
        $("#" + d).html("危险");
        $("#" + a).removeClass("rank-a");
        $("#" + a).removeClass("rank-b");
        $("#" + a).removeClass("rank-c");
        $("#" + a).addClass("rank-a")
    } else {
        if (c.length > 6 && new RegExp("[a-zA-Z]").test(c) && new RegExp("[0-9]").test(c) && new RegExp("[_]").test(c)) {
            $("#" + a).attr("title", "安全");
            $("#" + d).html("安全");
            $("#" + a).removeClass("rank-a");
            $("#" + a).removeClass("rank-b");
            $("#" + a).removeClass("rank-c");
            $("#" + a).addClass("rank-c")
        } else {
            $("#" + a).attr("title", "一般");
            $("#" + d).html("一般");
            $("#" + a).removeClass("rank-a");
            $("#" + a).removeClass("rank-b");
            $("#" + a).removeClass("rank-c");
            $("#" + a).addClass("rank-b")
        }
    }
}

Array.prototype.unique = function () {
    var b = {}, a = this.length;
    for (var c = 0; c < a; c++) {
        if (typeof b[this[c]] == "undefined") {
            b[this[c]] = 1
        }
    }
    this.length = 0;
    a = 0;
    for (var c in b) {
        this[a++] = c
    }
    return this
};

function checkSearchPwdRank(h, c, g) {
    var e = $(h);
    var f = e.val();
    if (f.length < 6) {
        $("#" + c).attr("title", "危险");
        $("#" + g).html("危险");
        $("#" + c).removeClass("rank-a");
        $("#" + c).removeClass("rank-b");
        $("#" + c).removeClass("rank-c");
        $("#" + c).addClass("rank-a")
    } else {
        var a = [];
        for (var b = 0; b < 6; b++) {
            a.push(f.charAt(b))
        }
        a = a.unique();
        var d = a.length;
        if (d == 1) {
            $("#" + c).attr("title", "危险");
            $("#" + g).html("危险");
            $("#" + c).removeClass("rank-a");
            $("#" + c).removeClass("rank-b");
            $("#" + c).removeClass("rank-c");
            $("#" + c).addClass("rank-a")
        } else {
            if (d > 1 && d < 5) {
                $("#" + c).attr("title", "一般");
                $("#" + g).html("一般");
                $("#" + c).removeClass("rank-a");
                $("#" + c).removeClass("rank-b");
                $("#" + c).removeClass("rank-c");
                $("#" + c).addClass("rank-b")
            } else {
                $("#" + c).attr("title", "安全");
                $("#" + g).html("安全");
                $("#" + c).removeClass("rank-a");
                $("#" + c).removeClass("rank-b");
                $("#" + c).removeClass("rank-c");
                $("#" + c).addClass("rank-c")
            }
        }
    }
}

jQuery.validator.addMethod("checkDetailAddress", function (b, a) {
    return this.optional(a) || /^[0-9a-zA-Z\u3400-\u9FFF\#]+$/.test(b)
}, "wrong name.");
jQuery.validator.addMethod("checkAddressName", function (b, a) {
    if (/^[-]+$/.test(b)) {
        return false
    }
    return this.optional(a) || /^[a-z A-Z·.．\u3400-\u9FFF\-]+$/.test(b) || /^[a-zA-Z·.．\u3400-\u9FFF]+$/.test(b)
}, "wrong name.");
jQuery.validator.addMethod("checkAddressSelect", function (b, a) {
    if ("" == b) {
        return false
    }
    if (b) {
        return true
    }
    return this.optional(a)
}, "wrong name.");
var login_messages = {
    randCodeError: "验证码错误!",
    randCodeExpired: "验证码失效",
    randCodeLentgh: "验证码长度为4位!",
    randCodeFormat: "验证码只能由数字或字母组成!",
    randCodeEmpty: "验证码不能为空!",
    userNameEmpty: "登录名必须填写!",
    userNameFormat: "登录名格式不正确，请重新输入!",
    passwordEmpty: "密码必须填写,且不少于6位!",
    passwordLength: "密码长度不能少于6位!",
    pleaseClickCaptcha: "请点击验证码",
    pleaseClickLeftCaptcha: "请点击左侧验证码",
    pleaseClickCaptchaRight: "请点击正确的验证码",
    pleaseClickBottomCaptcha: "请点击下方验证码",
    loginError: "当前访问用户过多,请稍候重试!",
    submitAfterVerify: "提交",
    pleaseClickSubmitButtonAfterClick: "pleaseClickSubmitButtonAfterClick",
    leftTicketOrderNoteMessage: '点击"提交"按钮获取验证码',
    leftTicketOrderClickCallbackNoteMessage: '完成选择后，继续点击下方橙色"提交"按钮提交订单',
    leftTicketOrderShowCallbackNoteMessage: "按照提示点击选择所有的图片",
    leftTicketOrderHiddenCallbackNoteMessage: '点击"提交"按钮获取验证码',
    getCaptchaByClick: "点击获取验证码"
};

function Marquee(a) {
    if (a == null || a == "") {
        return
    }
    this.ID = document.getElementById(a.ID);
    if (!this.ID) {
        this.id = -1;
        return
    }
    this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
    this.Step = 1;
    this.Timer = 30;
    this.DirectionArray = {top: 0, up: 0, bottom: 1, down: 1, left: 2, right: 3};
    if (typeof a.Direction == "number" && a.Direction) {
        this.Direction = a.Direction
    }
    if (typeof a.Direction == "string" && a.Direction) {
        this.Direction = this.DirectionArray[a.Direction.toString().toLowerCase()]
    }
    if (typeof a.Step == "number" && a.Step) {
        this.Step = a.Step
    }
    if (typeof a.Width == "number" && a.Width) {
        this.Width = a.Width
    }
    if (typeof a.Height == "number" && a.Height) {
        this.Height = a.Height
    }
    if (typeof a.Timer == "number" && a.Timer) {
        this.Timer = a.Timer
    }
    if (typeof a.DelayTime == "number" && a.DelayTime) {
        this.DelayTime = a.DelayTime
    }
    if (typeof a.WaitTime == "number" && a.WaitTime) {
        this.WaitTime = a.WaitTime
    }
    if (typeof a.ScrollStep == "number" && a.ScrollStep) {
        this.ScrollStep = a.ScrollStep
    }
    this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
    this.ID.noWrap = true;
    this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
    this.Start()
}

Marquee.prototype.Start = function () {
    if (this.ID == -1) {
        return
    }
    if (this.Width == 0) {
        this.Width = parseInt(this.ID.style.width)
    }
    if (this.Height == 0) {
        this.Height = parseInt(this.ID.style.height)
    }
    if (this.Timer < 20) {
        this.Timer = 20
    }
    if (this.WaitTime < 800) {
        this.WaitTime = 800
    }
    this.HalfWidth = Math.round(this.Width / 2);
    this.HalfHeight = Math.round(this.Height / 2);
    this.BakStep = this.Step;
    this.ID.style.width = this.Width + "px";
    this.ID.style.height = this.Height + "px";
    if (typeof this.ScrollStep != "number") {
        this.ScrollStep = this.Direction > 1 ? this.Width : this.Height
    }
    var d = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:inline;'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;padding-right:100px;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>";
    var b = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;'><tr><td>MSCLASS_TEMP_HTML</td></tr><tr><td>MSCLASS_TEMP_HTML</td></tr></table>";
    var e = this;
    e.tempHTML = e.ID.innerHTML;
    if (e.Direction <= 1) {
        e.ID.innerHTML = b.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
    } else {
        if (e.ScrollStep == 0 && e.DelayTime == 0) {
            e.ID.innerHTML += e.ID.innerHTML
        } else {
            e.ID.innerHTML = d.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
        }
    }
    var f = this.Timer;
    var a = this.DelayTime;
    var c = this.WaitTime;
    e.StartID = function () {
        e.Scroll()
    };
    e.Continue = function () {
        if (e.MouseOver == 1) {
            setTimeout(e.Continue, a)
        } else {
            clearInterval(e.TimerID);
            e.CTL = e.Stop = 0;
            e.TimerID = setInterval(e.StartID, f)
        }
    };
    e.Pause = function () {
        e.Stop = 1;
        clearInterval(e.TimerID);
        setTimeout(e.Continue, a)
    };
    e.Begin = function () {
        e.ClientScroll = e.Direction > 1 ? e.ID.scrollWidth / 2 : e.ID.scrollHeight / 2;
        if ((e.Direction <= 1 && e.ClientScroll <= e.Height + e.Step) || (e.Direction > 1 && e.ClientScroll <= e.Width + e.Step)) {
            e.ID.innerHTML = e.tempHTML;
            delete (e.tempHTML);
            return
        }
        delete (e.tempHTML);
        e.TimerID = setInterval(e.StartID, f);
        if (e.ScrollStep < 0) {
            return
        }
        e.ID.onmousemove = function (g) {
            if (e.ScrollStep == 0 && e.Direction > 1) {
                var g = g || window.event;
                if (window.event) {
                    if (e.IsNotOpera) {
                        e.EventLeft = g.srcElement.id == e.ID.id ? g.offsetX - e.ID.scrollLeft : g.srcElement.offsetLeft - e.ID.scrollLeft + g.offsetX
                    } else {
                        e.ScrollStep = null;
                        return
                    }
                } else {
                    e.EventLeft = g.layerX - e.ID.scrollLeft
                }
                e.Direction = e.EventLeft > e.HalfWidth ? 3 : 2;
                e.AbsCenter = Math.abs(e.HalfWidth - e.EventLeft);
                e.Step = Math.round(e.AbsCenter * (e.BakStep * 2) / e.HalfWidth)
            }
        };
        e.ID.onmouseover = function () {
            if (e.ScrollStep == 0) {
                return
            }
            e.MouseOver = 1;
            clearInterval(e.TimerID)
        };
        e.ID.onmouseout = function () {
            if (e.ScrollStep == 0) {
                if (e.Step == 0) {
                    e.Step = 1
                }
                return
            }
            e.MouseOver = 0;
            if (e.Stop == 0) {
                clearInterval(e.TimerID);
                e.TimerID = setInterval(e.StartID, f)
            }
        }
    };
    setTimeout(e.Begin, c)
};
Marquee.prototype.Scroll = function () {
    switch (this.Direction) {
        case 0:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return
            } else {
                if (this.ID.scrollTop >= this.ClientScroll) {
                    this.ID.scrollTop -= this.ClientScroll
                }
                this.ID.scrollTop += this.Step
            }
            break;
        case 1:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return
            } else {
                if (this.ID.scrollTop <= 0) {
                    this.ID.scrollTop += this.ClientScroll
                }
                this.ID.scrollTop -= this.Step
            }
            break;
        case 2:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return
            } else {
                if (this.ID.scrollLeft >= this.ClientScroll) {
                    this.ID.scrollLeft -= this.ClientScroll
                }
                this.ID.scrollLeft += this.Step
            }
            break;
        case 3:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return
            } else {
                if (this.ID.scrollLeft <= 0) {
                    this.ID.scrollLeft += this.ClientScroll
                }
                this.ID.scrollLeft -= this.Step
            }
            break
    }
};
var popup_browser = navigator.appName;
var popup_b_version = navigator.appVersion;
var popup_version = popup_b_version.split(";");
var popup_trin_version_flag = popup_version && popup_version.length > 1;
var popup_trim_Version = popup_trin_version_flag ? popup_version[1].replace(/[ ]/g, "") : "";
var popup_uam_dataType = "json";
var popup_uam_type = "POST";
if (popup_browser == "Microsoft Internet Explorer" && popup_trim_Version == "MSIE7.0") {
    popup_uam_dataType = "jsonp";
    popup_uam_type = "GET"
} else {
    if (popup_browser == "Microsoft Internet Explorer" && popup_trim_Version == "MSIE8.0") {
        popup_uam_dataType = "jsonp";
        popup_uam_type = "GET"
    } else {
        if (popup_browser == "Microsoft Internet Explorer" && popup_trim_Version == "MSIE9.0") {
            popup_uam_dataType = "jsonp";
            popup_uam_type = "GET"
        }
    }
}
var popup_passport_appId = "otn";
var popup_passport_baseUrl = "https://kyfw.12306.cn/passport/";
var popup_passport_apptk_static = popup_passport_baseUrl + "web/auth/uamtk-static";
var popup_passport_login = popup_passport_baseUrl + "web/login";
var popup_passport_captcha = popup_passport_baseUrl + "captcha/captcha-image64?login_site=E&module=login&rand=sjrand&";
var popup_passport_captcha_check = popup_passport_baseUrl + "captcha/captcha-check";
var popup_passport_uamtk = popup_passport_baseUrl + "web/auth/uamtk";
var popup_is_uam_login = "Y";
var popup_is_login_passCode = "Y";
var popup_is_sweep_login = "Y";
var popup_is_login = "N";
var popup_baseUrl = "https://kyfw.12306.cn";
var popup_publicName = "/otn";
var base_uamauthclient_url = popup_baseUrl + popup_publicName + "/uamauthclient";
var popup_loginCallBack = function () {
    if (!$.popup_isPop) {
        window.location.href = popup_baseUrl + popup_publicName + "/login/userLogin"
    } else {
        if ("Y" == popup_is_uam_login) {
            $.ajax({
                type: "POST",
                url: popup_passport_uamtk,
                async: false,
                data: {appid: popup_passport_appId},
                dataType: "jsonp",
                jsonp: "callback",
                success: function (a) {
                    if (a.result_code == 0) {
                        var b = a.newapptk || a.apptk;
                        $.ajax({
                            type: "POST",
                            async: false,
                            url: base_uamauthclient_url,
                            data: {tk: b},
                            datatype: "json",
                            success: function (c) {
                                if (c.result_code == 0) {
                                    $(".mask").fadeOut();
                                    $(".modal-login").hide();
                                    if ($.pop_secretStr && $.pop_start_time) {
                                        $.todo_submitOrderRe($.pop_secretStr, $.pop_start_time)
                                    }
                                }
                            },
                            error: function () {
                            }
                        })
                    }
                },
                error: function () {
                }
            })
        } else {
            $(".mask").fadeOut();
            $(".modal-login").hide();
            if ($.pop_secretStr && $.pop_start_time) {
                $.todo_submitOrderRe($.pop_secretStr, $.pop_start_time)
            }
        }
    }
};
var popup_loginedCallBack = function () {
    if (!$.popup_isPop) {
        window.location.href = popup_baseUrl + popup_publicName + "/view/index.html"
    }
};
var popup_qr_appId = "otn";
var popup_url = {
    loginConf: popup_baseUrl + popup_publicName + "/login/conf",
    getPassCodeNew: popup_baseUrl + popup_publicName + "/passcodeNew/getPassCodeNew?module=login&rand=sjrand&",
    checkRandCodeAnsyn: popup_baseUrl + popup_publicName + "/passcodeNew/checkRandCodeAnsyn",
    login: popup_baseUrl + popup_publicName + "/login/loginAysnSuggest",
    getBanners: popup_baseUrl + popup_publicName + "/index12306/getLoginBanner",
    qr: popup_baseUrl + "/passport/web/create-qr",
    qr64: popup_baseUrl + "/passport/web/create-qr64",
    checkqr: popup_baseUrl + "/passport/web/checkqr"
};
var popup_defaultPasscodeHeight = 30;
var popup_ifSuccessCode = false;
var popup_passCodeImg = $("#J-loginImg");
var popup_ispopup_CreateQr = false;
var popup_t = null, popup_s = "-1";
var popup_isPopupLogin = true;
var forie = "forie.html";
jQuery.extend({
    pop_secretStr: "", pop_start_time: "", popup_isPop: true, popup_show_login_error: function (a) {
        if ("验证码错误！" != a && "请选择验证码！" != a) {
            $("#J-password").val("")
        }
        $("#J-login-error").show().find("span").html(a)
    }, popup_hide_login_error: function () {
        $("#J-login-error").hide().find("span").html("")
    }, popup_loginForUam: function () {
        var a = "";
        var c = $("#J-passCodeCoin div");
        for (var b = 0; b < c.length; b++) {
            a += $(c[b]).attr("randcode") + ","
        }
        a = a.substring(0, a.length - 1);
        $.ajax({
            crossDomain: true,
            url: popup_passport_login,
            data: {
                username: $("#J-userName").val(),
                password: $("#J-password").val(),
                appid: popup_passport_appId,
                answer: a
            },
            dataType: popup_uam_dataType,
            type: popup_uam_type,
            timeout: 10000,
            xhrFields: {withCredentials: true},
            success: function (d) {
                if (d.result_code == 0) {
                    $.popup_hideCommonLogin();
                    popup_loginCallBack()
                } else {
                    $.popup_show_login_error(d.result_message);
                    $.popup_createPassCode();
                    $("#J-passCodeCoin").html("")
                }
            },
            error: function () {
                $.popup_hideCommonLogin()
            }
        })
    }, popup_loginForLocation_passcode: function () {
        var a = "";
        var c = $("#J-passCodeCoin div");
        for (var b = 0; b < c.length; b++) {
            a += $(c[b]).attr("randcode") + ","
        }
        a = a.substring(0, a.length - 1);
        $("#J-passCodeCoin").html("");
        $.ajax({
            url: popup_url.login,
            data: {
                "loginUserDTO.user_name": $("#J-userName").val(),
                "userDTO.password": $("#J-password").val(),
                randCode: a
            },
            type: "POST",
            timeout: 10000,
            success: function (d) {
                var e = d.data;
                if (e && e.loginCheck == "Y") {
                    $.popup_hideCommonLogin();
                    popup_loginCallBack()
                } else {
                    if (e && e.message) {
                        $.popup_show_login_error(e.message);
                        $.popup_createPassCode_location();
                        $("#J-passCodeCoin").html("")
                    } else {
                        if (d.messages) {
                            $.popup_show_login_error(d.messages);
                            $.popup_createPassCode_location();
                            $("#J-passCodeCoin").html("")
                        } else {
                            $.popup_hideCommonLogin()
                        }
                    }
                }
            },
            error: function (d) {
                $.popup_hideCommonLogin()
            }
        })
    }, popup_loginForLocation: function () {
        $.ajax({
            url: popup_url.login,
            data: {"loginUserDTO.user_name": $("#J-userName").val(), "userDTO.password": $("#J-password").val()},
            type: "POST",
            timeout: 10000,
            success: function (a) {
                var b = a.data;
                if (b && b.loginCheck == "Y") {
                    $.popup_hideCommonLogin();
                    popup_loginCallBack()
                } else {
                    if (b && b.message) {
                        $.popup_show_login_error(b.message)
                    } else {
                        if (a.messages) {
                            $.popup_show_login_error(a.messages)
                        } else {
                            $.popup_hideCommonLogin()
                        }
                    }
                }
            },
            error: function (a) {
                $.popup_hideCommonLogin()
            }
        })
    }, popup_hideCommonLogin: function () {
        $("#J-userName").val("");
        $("#J-password").val("");
        $("#J-passCodeCoin").html("");
        $("#J-login-error").hide()
    }, popup_showLoginType: function (a) {
        $("#J-loginImg").hide();
        $(".lgcode-error").hide();
        $(".lgcode-loading").hide();
        $(".lgcode-loading img").hide();
        $(".lgcode-success").hide();
        if (0 == a) {
            $("#J-loginImg").show()
        } else {
            if (1 == a) {
                $(".lgcode-error").show()
            } else {
                if (2 == a) {
                    $(".lgcode-success").show()
                } else {
                    if (3 == a) {
                        $(".lgcode-loading").show();
                        $(".lgcode-loading img").show()
                    }
                }
            }
        }
    }, popup_getClickPos: function (d) {
        var g = (navigator.appName == "Netscape") ? d.pageX : d.clientX + (document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft);
        var b = (navigator.appName == "Netscape") ? d.pageY : d.clientY + (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
        identifyImage = document.getElementById("J-loginImg");
        img_x = $.popup_locationLeft(identifyImage);
        img_y = $.popup_locationTop(identifyImage);
        var f = g - img_x;
        var c = b - img_y - popup_defaultPasscodeHeight;
        if (f > 0 && c > 0) {
            var a = '<div randCode="' + f + "," + c + '" class="lgcode-active" style="top: ' + (c + 16) + "px; left: " + (f - 13) + 'px;"></div>';
            $("#J-passCodeCoin").append(a)
        }
        $(".lgcode-active").click(function (h) {
            $(this).remove();
            h.stopPropagation()
        })
    }, popup_locationLeft: function (a) {
        offsetTotal = a.offsetLeft;
        scrollTotal = 0;
        if (a.tagName != "BODY") {
            if (a.offsetParent != null) {
                return offsetTotal + scrollTotal + $.popup_locationLeft(a.offsetParent)
            }
        }
        return offsetTotal + scrollTotal
    }, popup_locationTop: function (a) {
        offsetTotal = a.offsetTop;
        scrollTotal = 0;
        if (a.tagName != "BODY") {
            if (a.offsetParent != null) {
                return offsetTotal + scrollTotal + $.popup_locationTop(a.offsetParent)
            }
        }
        return offsetTotal + scrollTotal
    }, popup_initLogin: function (b) {
        var a = false;
        if (popup_browser == "Microsoft Internet Explorer" && popup_trim_Version == "MSIE7.0") {
            a = true
        } else {
            if (popup_browser == "Microsoft Internet Explorer" && popup_trim_Version == "MSIE6.0") {
                a = true
            }
        }
        if (a) {
            location.href = forie;
            return
        }
        $.popup_isPop = b;
        popup_isPopupLogin = b;
        $.popup_hideCommonLogin();
        $.popup_showLoginType(3);
        $.popup_getConf();
        $("#J-userName").focus(function () {
            $.popup_hide_login_error()
        });
        $("#J-password").focus(function () {
            $.popup_hide_login_error()
        });
        $.popup_switchLoginWay();
        $.popup_refreshQrCode();
        $(".lgcode-refresh").unbind("click").click(function () {
            $(".lgcode-refresh").addClass("lgcode-refresh-click");
            if (popup_is_uam_login == "Y") {
                $.popup_refreshPassCode(false)
            } else {
                $.popup_refreshPassCode_location(false)
            }
            setTimeout(function () {
                $(".lgcode-refresh").removeClass("lgcode-refresh-click")
            }, 100)
        });
        $("#J-loginImgArea").unbind("click").click(function (c) {
            $.popup_getClickPos(c)
        })
    }, popup_getConf: function () {
        $.ajax({
            url: popup_url.loginConf, type: "POST", timeout: 10000, success: function (a) {
                var b = a.data;
                if (b) {
                    popup_is_uam_login = b.is_uam_login;
                    popup_is_login_passCode = b.is_login_passCode;
                    popup_is_sweep_login = b.is_sweep_login;
                    popup_is_login = b.is_login;
                    $.popup_isLogin()
                }
            }, error: function (a) {
            }
        })
    }, popup_isLogin: function () {
        if (popup_is_uam_login == "Y") {
            if (popup_isPopupLogin) {
                $.popup_uamIsShowQr()
            } else {
                $.popup_uamIsLogin()
            }
        } else {
            if (popup_is_login == "Y") {
                popup_loginedCallBack()
            } else {
                $.popup_hideQrCode();
                $(".login-account").show();
                if (popup_is_login_passCode == "Y") {
                    $.popup_showPasscode();
                    $.popup_createPassCode_location()
                } else {
                    $.popup_hidePasscode();
                    $.popup_resetLoginBox()
                }
                $.popup_validate()
            }
        }
    }, popup_resetLoginBox: function () {
        var a = $(".login-panel .login-box");
        a.css("margin-top", -a.outerHeight() / 2)
    }, popup_uamIsLogin: function () {
        $.ajax({
            url: popup_passport_apptk_static,
            data: {appid: popup_passport_appId},
            type: "POST",
            xhrFields: {withCredentials: true},
            timeout: 10000,
            success: function (a) {
                if (a.result_code == "0") {
                    popup_loginedCallBack()
                } else {
                    $.popup_uamIsShowQr()
                }
            },
            error: function (a) {
            }
        })
    }, popup_uamIsShowQr: function () {
        if (popup_is_sweep_login == "Y") {
            $.popup_showQrCode();
            $("#J-login-code-loading").show();
            $("#J-login-code-con").hide();
            $.popup_hideQrError();
            $.popup_createQr()
        } else {
            $.popup_hideQrCode();
            $(".login-account").show();
            $.popup_createPassCode()
        }
        $.popup_validate()
    }, popup_createQr: function () {
        $.ajax({
            url: popup_url.qr64, data: {appid: popup_qr_appId}, type: "POST", timeout: 10000, success: function (a) {
                if (a && a.result_code === "0" && a.image) {
                    $("#J-qrImg").attr("src", "data:image/jpg;base64," + a.image);
                    $("#J-login-code-loading").hide();
                    $("#J-login-code-con").show();
                    $("#J-code-error-mask").hide();
                    $("#J-code-error").hide();
                    popup_t = null;
                    popup_s = -1;
                    popup_t = setInterval(function () {
                        if (popup_s == "2" || popup_s == "3") {
                            clearInterval(popup_t)
                        } else {
                            $.popup_checkQr(a.uuid)
                        }
                    }, 1000)
                } else {
                }
            }, error: function (a) {
            }
        })
    }, popup_checkQr: function (a) {
        $.ajax({
            url: popup_url.checkqr,
            data: {uuid: a, appid: popup_qr_appId},
            type: "POST",
            timeout: 10000,
            success: function (b) {
                if (b) {
                    popup_s = b.result_code;
                    $.popup_tipsQrInfo(parseInt(b.result_code))
                }
            },
            error: function (b) {
            }
        })
    }, popup_showQrError: function (a) {
        $("#J-code-error-mask").show();
        $("#J-code-error").show();
        $("#J-code-error").find("p").html(a)
    }, popup_hideQrError: function () {
        $("#J-code-error-mask").hide();
        $("#J-code-error").hide()
    }, popup_showQrLoading: function () {
        $(".login-code-loading").show();
        $(".login-code-con").hide()
    }, popup_hideQrLoading: function () {
        $(".login-code-loading").hide();
        $(".login-code-con").show()
    }, popup_tipsQrInfo: function (c) {
        var b = $("#J-code-error-mask"), d = $("#J-code-error"), a = $("#J-login-code-con"),
            e = $("#J-login-code-success");
        if (c == 0) {
            b.hide();
            d.hide()
        } else {
            b.show();
            d.show();
            switch (c) {
                case 1:
                    a.hide();
                    e.removeClass("hide");
                    break;
                case 2:
                    a.hide();
                    e.removeClass("hide");
                    popup_loginCallBack();
                    break;
                case 3:
                    a.show();
                    d.find("p").html("二维码已失效");
                    d.find("a").show();
                    e.addClass("hide");
                    break;
                case 5:
                    a.show();
                    d.find("p").html("系统异常");
                    d.find("a").show();
                    e.addClass("hide");
                    break;
                default:
                    d.find("p").html("二维码已失效");
                    d.find("a").show();
                    e.addClass("hide")
            }
        }
    }, popup_validate: function () {
        $("#J-login").click(function () {
            var e = $("#J-userName").val();
            var c = $("#J-password").val();
            var b = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])\d{8}$/;
            var a = /^[A-Za-z]{1}([A-Za-z0-9]|[_]) {0,29}$/;
            var d = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
            if (!e) {
                $.popup_show_login_error("请输入用户名！");
                return false
            }
            if (!c) {
                $.popup_show_login_error("请输入密码！");
                return false
            }
            if (c && c.length < 6) {
                $.popup_show_login_error("密码长度不能少于6位！");
                return false
            }
            if (popup_is_login_passCode == "Y") {
                if ($("#J-passCodeCoin div").length == 0) {
                    $.popup_show_login_error("请选择验证码！");
                    return false
                }
            } else {
                popup_ifSuccessCode = true
            }
            $.popup_login()
        })
    }, popup_login: function () {
        if (!popup_ifSuccessCode) {
            if (popup_is_uam_login == "Y") {
                $.popup_checkPassCode()
            } else {
                $.popup_checkPassCode_location()
            }
        } else {
            if (popup_is_uam_login == "Y") {
                $.popup_loginForUam()
            } else {
                if (popup_is_login_passCode == "Y") {
                    $.popup_checkPassCode_location()
                } else {
                    $.popup_loginForLocation()
                }
            }
        }
    }, popup_showQrCode: function () {
        $(".login-box").removeClass("login-box-account");
        $(".login-code").show()
    }, popup_hideQrCode: function () {
        $(".login-box").addClass("login-box-account");
        $(".login-code").hide()
    }, popup_refreshQrCode: function () {
        $(".code-error .btn").unbind("click").click(function () {
            $("#J-login-code-loading").show();
            $("#J-login-code-con").hide();
            $.popup_hideQrError();
            $.popup_createQr()
        })
    }, popup_switchLoginWay: function () {
        $(".login-hd-code a").unbind("click").click(function () {
            $("#J-login-code-loading").show();
            $("#J-login-code-con").hide();
            $.popup_hideQrError();
            $("#J-login-code-success").addClass("hide");
            $.popup_hideCommonLogin();
            if (popup_t) {
                clearInterval(popup_t);
                popup_t = null;
                popup_s = -1
            }
            $.popup_createQr()
        });
        $(".login-hd-account a").unbind("click").click(function () {
            $("#J-passCodeCoin").html("");
            if (popup_t) {
                clearInterval(popup_t);
                popup_t = null;
                popup_s = -1
            }
            $.popup_createPassCode()
        })
    }, popup_createPassCode: function () {
        var a = new Date().getTime();
        $.ajax({
            url: popup_passport_captcha + a,
            xhrFields: {withCredentials: true},
            type: "GET",
            timeout: 10000,
            dataType: "jsonp",
            success: function (b) {
                if (b.image) {
                    popup_ifSuccessCode = false;
                    popup_passCodeImg.attr("src", "data:image/jpg;base64," + b.image);
                    $.popup_showLoginType(0)
                }
            },
            error: function (b) {
            }
        })
    }, popup_createPassCode_location: function () {
        popup_ifSuccessCode = false;
        var a = new Date().getTime();
        popup_passCodeImg.attr("src", popup_url.getPassCodeNew + a);
        $.popup_showLoginType(0)
    }, popup_checkPassCode: function () {
        var a = false;
        var b = "";
        var d = $("#J-passCodeCoin div");
        for (var c = 0; c < d.length; c++) {
            b += $(d[c]).attr("randcode") + ","
        }
        b = b.substring(0, b.length - 1);
        $.ajax({
            url: popup_passport_captcha_check,
            xhrFields: {withCredentials: true},
            crossDomain: true,
            data: {answer: b, rand: "sjrand", login_site: "E"},
            dataType: "jsonp",
            type: "GET",
            timeout: 10000,
            success: function (e) {
                if (e.result_code == 4) {
                    popup_ifSuccessCode = true;
                    $.popup_showLoginType(2);
                    $.popup_loginForUam()
                } else {
                    $.popup_passCodeError()
                }
            },
            error: function (e) {
            }
        })
    }, popup_checkPassCode_location: function () {
        var a = false;
        var b = "";
        var d = $("#J-passCodeCoin div");
        for (var c = 0; c < d.length; c++) {
            b += $(d[c]).attr("randcode") + ","
        }
        b = b.substring(0, b.length - 1);
        $.ajax({
            url: popup_url.checkRandCodeAnsyn,
            xhrFields: {withCredentials: true},
            data: {randCode: b, rand: "sjrand", login_site: "E"},
            type: "POST",
            timeout: 10000,
            success: function (e) {
                var f = e.data;
                if (f && f.result == 1) {
                    popup_ifSuccessCode = true;
                    $.popup_showLoginType(2);
                    $.popup_loginForLocation_passcode()
                } else {
                    $.popup_passCodeError_location()
                }
            },
            error: function (e) {
            }
        })
    }, popup_passCodeError: function () {
        $.popup_show_login_error("验证码错误！");
        $.popup_refreshPassCode(true)
    }, popup_passCodeError_location: function () {
        $.popup_show_login_error("验证码错误！");
        $.popup_refreshPassCode_location(true)
    }, popup_refreshPassCode: function (a) {
        $.popup_hide_login_error();
        $("#J-passCodeCoin").html("");
        if (a) {
            $.popup_showLoginType(1);
            setTimeout("$.popup_createPassCode()", 1000)
        } else {
            $.popup_createPassCode()
        }
    }, popup_refreshPassCode_location: function (a) {
        $.popup_hide_login_error();
        $("#J-passCodeCoin").html("");
        if (a) {
            $.popup_showLoginType(1);
            setTimeout("$.popup_createPassCode_location()", 1000)
        } else {
            $.popup_createPassCode_location()
        }
    }, popup_showPasscode: function () {
        $(".login-box").removeClass("login-box-account-nocode")
    }, popup_hidePasscode: function () {
        $(".login-box").addClass("login-box-account-nocode")
    }, popup_clearInterval: function () {
        if (popup_t) {
            clearInterval(popup_t);
            popup_t = null;
            popup_s = -1
        }
    }, getBanners: function () {
        $.ajax({
            url: popup_url.getBanners, type: "GET", timeout: 10000, dataType: "text", success: function (a) {
                if (a) {
                    var b = JSON.parse(a);
                    $.each(b.data.index_banner_url, function (c, e) {
                        var d = e.src ? '<a href="' + e.src + '"></a>' : "<a style='cursor:auto;' href='javascript:void(0)'></a>";
                        $(".loginSlide .bd ul").append('<li style="background: url(' + e.url + ') center center no-repeat;">' + d + "</li>")
                    });
                    $(".loginSlide").slide({
                        titCell: ".hd ul",
                        mainCell: ".bd ul",
                        effect: "leftLoop",
                        vis: "auto",
                        autoPlay: true,
                        autoPage: true,
                        trigger: "click",
                        interTime: "6000"
                    })
                }
            }, error: function (a) {
            }
        })
    }
});
