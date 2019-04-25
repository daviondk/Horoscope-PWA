var Konami = function(t) {
    var e = {
        addEvent: function(t, e, n, o) {
            t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && (t["e" + e + n] = n, t[e + n] = function() {
                t["e" + e + n](window.event, o)
            }, t.attachEvent("on" + e, t[e + n]))
        },
        removeEvent: function(t, e, n) {
            t.removeEventListener ? t.removeEventListener(e, n) : t.attachEvent && t.detachEvent(e)
        },
        input: "",
        pattern: "38384040373937396665",
        keydownHandler: function(t, n) {
            if (n && (e = n), e.input += t ? t.keyCode : event.keyCode, e.input.length > e.pattern.length && (e.input = e.input.substr(e.input.length - e.pattern.length)), e.input === e.pattern) return e.code(e._currentLink), e.input = "", t.preventDefault(), !1
        },
        load: function(t) {
            this._currentLink = t, this.addEvent(document, "keydown", this.keydownHandler, this), this.iphone.load(t)
        },
        unload: function() {
            this.removeEvent(document, "keydown", this.keydownHandler), this.iphone.unload()
        },
        code: function(t) {
            window.location = t
        },
        iphone: {
            start_x: 0,
            start_y: 0,
            stop_x: 0,
            stop_y: 0,
            tap: !1,
            capture: !1,
            orig_keys: "",
            keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
            input: [],
            code: function(t) {
                e.code(t)
            },
            touchmoveHandler: function(t) {
                if (1 === t.touches.length && !0 === e.iphone.capture) {
                    var n = t.touches[0];
                    e.iphone.stop_x = n.pageX, e.iphone.stop_y = n.pageY, e.iphone.tap = !1, e.iphone.capture = !1, e.iphone.check_direction()
                }
            },
            touchendHandler: function() {
                if (e.iphone.input.push(e.iphone.check_direction()), e.iphone.input.length > e.iphone.keys.length && e.iphone.input.shift(), e.iphone.input.length === e.iphone.keys.length) {
                    for (var t = !0, n = 0; n < e.iphone.keys.length; n++) e.iphone.input[n] !== e.iphone.keys[n] && (t = !1);
                    t && e.iphone.code(e._currentLink)
                }
            },
            touchstartHandler: function(t) {
                e.iphone.start_x = t.changedTouches[0].pageX, e.iphone.start_y = t.changedTouches[0].pageY, e.iphone.tap = !0, e.iphone.capture = !0
            },
            load: function(t) {
                this.orig_keys = this.keys, e.addEvent(document, "touchmove", this.touchmoveHandler), e.addEvent(document, "touchend", this.touchendHandler, !1), e.addEvent(document, "touchstart", this.touchstartHandler)
            },
            unload: function() {
                e.removeEvent(document, "touchmove", this.touchmoveHandler), e.removeEvent(document, "touchend", this.touchendHandler), e.removeEvent(document, "touchstart", this.touchstartHandler)
            },
            check_direction: function() {
                return x_magnitude = Math.abs(this.start_x - this.stop_x), y_magnitude = Math.abs(this.start_y - this.stop_y), x = this.start_x - this.stop_x < 0 ? "RIGHT" : "LEFT", y = this.start_y - this.stop_y < 0 ? "DOWN" : "UP", result = x_magnitude > y_magnitude ? x : y, result = !0 === this.tap ? "TAP" : result, result
            }
        }
    };
    return "string" == typeof t && e.load(t), "function" == typeof t && (e.code = t, e.load()), e
};
"undefined" != typeof module && void 0 !== module.exports ? module.exports = Konami : "function" == typeof define && define.amd ? define([], function() {
    return Konami
}) : window.Konami = Konami;