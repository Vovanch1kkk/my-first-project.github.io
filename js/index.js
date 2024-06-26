!function() {
	"use strict";
	var e = document.querySelector(".menu_button");
	const t = document.querySelector(".menu_overlay")
	  , s = document.querySelector(".menu_list");
	e.onclick = ()=>{
		 document.body.style.overflow = "hidden",
		 t.classList.add("active"),
		 s.style.bottom = `calc(100% - ${s.offsetHeight}px)`
	}
	,
	t.onclick = ()=>{
		 s.removeAttribute("style"),
		 t.classList.remove("active"),
		 document.body.removeAttribute("style")
	}
	;
	e = (new Date).getFullYear();
	function i(e) {
		 return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
	}
	function r(t, s) {
		 void 0 === t && (t = {}),
		 void 0 === s && (s = {}),
		 Object.keys(s).forEach(e=>{
			  void 0 === t[e] ? t[e] = s[e] : i(s[e]) && i(t[e]) && 0 < Object.keys(s[e]).length && r(t[e], s[e])
		 }
		 )
	}
	document.getElementById("current-year").append(e);
	const a = {
		 body: {},
		 addEventListener() {},
		 removeEventListener() {},
		 activeElement: {
			  blur() {},
			  nodeName: ""
		 },
		 querySelector() {
			  return null
		 },
		 querySelectorAll() {
			  return []
		 },
		 getElementById() {
			  return null
		 },
		 createEvent() {
			  return {
					initEvent() {}
			  }
		 },
		 createElement() {
			  return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute() {},
					getElementsByTagName() {
						 return []
					}
			  }
		 },
		 createElementNS() {
			  return {}
		 },
		 importNode() {
			  return null
		 },
		 location: {
			  hash: "",
			  host: "",
			  hostname: "",
			  href: "",
			  origin: "",
			  pathname: "",
			  protocol: "",
			  search: ""
		 }
	};
	function m() {
		 var e = "undefined" != typeof document ? document : {};
		 return r(e, a),
		 e
	}
	const O = {
		 document: a,
		 navigator: {
			  userAgent: ""
		 },
		 location: {
			  hash: "",
			  host: "",
			  hostname: "",
			  href: "",
			  origin: "",
			  pathname: "",
			  protocol: "",
			  search: ""
		 },
		 history: {
			  replaceState() {},
			  pushState() {},
			  go() {},
			  back() {}
		 },
		 CustomEvent: function() {
			  return this
		 },
		 addEventListener() {},
		 removeEventListener() {},
		 getComputedStyle() {
			  return {
					getPropertyValue() {
						 return ""
					}
			  }
		 },
		 Image() {},
		 Date() {},
		 screen: {},
		 setTimeout() {},
		 clearTimeout() {},
		 matchMedia() {
			  return {}
		 },
		 requestAnimationFrame(e) {
			  return "undefined" == typeof setTimeout ? (e(),
			  null) : setTimeout(e, 0)
		 },
		 cancelAnimationFrame(e) {
			  "undefined" != typeof setTimeout && clearTimeout(e)
		 }
	};
	function h() {
		 var e = "undefined" != typeof window ? window : {};
		 return r(e, O),
		 e
	}
	function u(e, t) {
		 void 0 === t && (t = 0),
		 setTimeout(e, t)
	}
	function v() {
		 return Date.now()
	}
	function z(e, t) {
		 void 0 === t && (t = "x");
		 var s = h();
		 let i, r, a;
		 e = function(e) {
			  var t = h();
			  let s;
			  return s = (s = !(s = t.getComputedStyle ? t.getComputedStyle(e, null) : s) && e.currentStyle ? e.currentStyle : s) || e.style
		 }(e);
		 return s.WebKitCSSMatrix ? (6 < (r = e.transform || e.webkitTransform).split(",").length && (r = r.split(", ").map(e=>e.replace(",", ".")).join(", ")),
		 a = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (a = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
		 i = a.toString().split(",")),
		 "x" === t && (r = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
		 (r = "y" === t ? s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5]) : r) || 0
	}
	function o(e) {
		 return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
	}
	function f(e) {
		 var t, s = Object(arguments.length <= 0 ? void 0 : e);
		 const i = ["__proto__", "constructor", "prototype"];
		 for (let e = 1; e < arguments.length; e += 1) {
			  var r = e < 0 || arguments.length <= e ? void 0 : arguments[e];
			  if (null != r && (t = r,
			  !("undefined" != typeof window && void 0 !== window.HTMLElement ? t instanceof HTMLElement : t && (1 === t.nodeType || 11 === t.nodeType)))) {
					var a = Object.keys(Object(r)).filter(e=>i.indexOf(e) < 0);
					for (let e = 0, t = a.length; e < t; e += 1) {
						 var l = a[e]
							, n = Object.getOwnPropertyDescriptor(r, l);
						 void 0 !== n && n.enumerable && (o(s[l]) && o(r[l]) ? r[l].__swiper__ ? s[l] = r[l] : f(s[l], r[l]) : o(s[l]) || !o(r[l]) || (s[l] = {},
						 r[l].__swiper__) ? s[l] = r[l] : f(s[l], r[l]))
					}
			  }
		 }
		 return s
	}
	function j(e, t, s) {
		 e.style.setProperty(t, s)
	}
	function x(e) {
		 let {swiper: s, targetPosition: i, side: r} = e;
		 const a = h()
			, l = -s.translate;
		 let n = null, o;
		 const d = s.params.speed
			, c = (s.wrapperEl.style.scrollSnapType = "none",
		 a.cancelAnimationFrame(s.cssModeFrameID),
		 i > l ? "next" : "prev")
			, p = (e,t)=>"next" === c && t <= e || "prev" === c && e <= t
			, u = ()=>{
			  o = (new Date).getTime(),
			  null === n && (n = o);
			  var e = Math.max(Math.min((o - n) / d, 1), 0)
				 , e = .5 - Math.cos(e * Math.PI) / 2;
			  let t = l + e * (i - l);
			  p(t, i) && (t = i),
			  s.wrapperEl.scrollTo({
					[r]: t
			  }),
			  p(t, i) ? (s.wrapperEl.style.overflow = "hidden",
			  s.wrapperEl.style.scrollSnapType = "",
			  setTimeout(()=>{
					s.wrapperEl.style.overflow = "",
					s.wrapperEl.scrollTo({
						 [r]: t
					})
			  }
			  ),
			  a.cancelAnimationFrame(s.cssModeFrameID)) : s.cssModeFrameID = a.requestAnimationFrame(u)
		 }
		 ;
		 u()
	}
	function q(e, t) {
		 return void 0 === t && (t = ""),
		 [...e.children].filter(e=>e.matches(t))
	}
	function A(e) {
		 try {
			  console.warn(e)
		 } catch (e) {}
	}
	function c(e, t) {
		 void 0 === t && (t = []);
		 e = document.createElement(e);
		 return e.classList.add(...Array.isArray(t) ? t : (t = void 0 === (t = t) ? "" : t).trim().split(" ").filter(e=>!!e.trim())),
		 e
	}
	function W(e, t) {
		 return h().getComputedStyle(e, null).getPropertyValue(t)
	}
	function S(e) {
		 let t = e, s;
		 if (t) {
			  for (s = 0; null !== (t = t.previousSibling); )
					1 === t.nodeType && (s += 1);
			  return s
		 }
	}
	function p(e, t) {
		 var s = [];
		 let i = e.parentElement;
		 for (; i; )
			  t && !i.matches(t) || s.push(i),
			  i = i.parentElement;
		 return s
	}
	function Y(e, t, s) {
		 var i = h();
		 return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
	}
	let l;
	function g() {
		 var e, t;
		 return l = l || (e = h(),
		 {
			  smoothScroll: (t = m()).documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
			  touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
		 })
	}
	let n;
	function G(e) {
		 return void 0 === e && (e = {}),
		 n = n || function(e) {
			  var e = (void 0 === e ? {} : e)["userAgent"]
				 , t = g()
				 , s = (a = h()).navigator.platform
				 , e = e || a.navigator.userAgent
				 , i = {
					ios: !1,
					android: !1
			  }
				 , r = a.screen.width
				 , a = a.screen.height
				 , l = e.match(/(Android);?[\s\/]+([\d.]+)?/);
			  let n = e.match(/(iPad).*OS\s([\d_]+)/);
			  var o = e.match(/(iPod)(.*OS\s([\d_]+))?/)
				 , d = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
				 , c = "Win32" === s
				 , s = "MacIntel" === s;
			  return !n && s && t.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(r + "x" + a) && (n = (n = e.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"]),
			  l && !c && (i.os = "android",
			  i.android = !0),
			  (n || d || o) && (i.os = "ios",
			  i.ios = !0),
			  i
		 }(e)
	}
	let d;
	function D() {
		 return d = d || function() {
			  const t = h();
			  let e = !1;
			  function s() {
					var e = t.navigator.userAgent.toLowerCase();
					return 0 <= e.indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
			  }
			  var i, r;
			  return s() && (i = String(t.navigator.userAgent)).includes("Version/") && ([i,r] = i.split("Version/")[1].split(" ")[0].split(".").map(e=>Number(e)),
			  e = i < 16 || 16 === i && r < 2),
			  {
					isSafari: e || s(),
					needPerspectiveFix: e,
					isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
			  }
		 }()
	}
	const w = (t,e)=>{
		 if (t && !t.destroyed && t.params) {
			  const s = e.closest(t.isElement ? "swiper-slide" : "." + t.params.slideClass);
			  if (s) {
					let e = s.querySelector("." + t.params.lazyPreloaderClass);
					!e && t.isElement && (s.shadowRoot ? e = s.shadowRoot.querySelector("." + t.params.lazyPreloaderClass) : requestAnimationFrame(()=>{
						 s.shadowRoot && (e = s.shadowRoot.querySelector("." + t.params.lazyPreloaderClass)) && e.remove()
					}
					)),
					e && e.remove()
			  }
		 }
	}
	  , b = (e,t)=>{
		 e.slides[t] && (e = e.slides[t].querySelector('[loading="lazy"]')) && e.removeAttribute("loading")
	}
	  , T = s=>{
		 if (s && !s.destroyed && s.params) {
			  var t = s.params.lazyPreloadPrevNext
				 , i = s.slides.length;
			  if (i && t && !(t < 0)) {
					t = Math.min(t, i);
					const n = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(s.params.slidesPerView);
					var r = s.activeIndex;
					if (s.params.grid && 1 < s.params.grid.rows) {
						 const o = r
							, d = [o - t];
						 d.push(...Array.from({
							  length: t
						 }).map((e,t)=>o + n + t)),
						 void s.slides.forEach((e,t)=>{
							  d.includes(e.column) && b(s, t)
						 }
						 )
					} else {
						 var a = r + n - 1;
						 if (s.params.rewind || s.params.loop)
							  for (let e = r - t; e <= a + t; e += 1) {
									var l = (e % i + i) % i;
									(l < r || a < l) && b(s, l)
							  }
						 else
							  for (let e = Math.max(r - t, 0); e <= Math.min(a + t, i - 1); e += 1)
									e !== r && (e > a || e < r) && b(s, e)
					}
			  }
		 }
	}
	;
	function y(e) {
		 var {swiper: e, runCallbacks: t, direction: s, step: i} = e
			, {activeIndex: r, previousIndex: a} = e;
		 let l = s;
		 l = l || (a < r ? "next" : r < a ? "prev" : "reset"),
		 e.emit("transition" + i),
		 t && r !== a && ("reset" === l ? e.emit("slideResetTransition" + i) : (e.emit("slideChangeTransition" + i),
		 "next" === l ? e.emit("slideNextTransition" + i) : e.emit("slidePrevTransition" + i)))
	}
	function _(i, e) {
		 return function e(t) {
			  var s;
			  return t && t !== m() && t !== h() && ((s = (t = t.assignedSlot || t).closest(i)) || t.getRootNode) ? s || e(t.getRootNode().host) : null
		 }(e = void 0 === e ? this : e)
	}
	function E(e, t, s) {
		 var i = h()
			, e = e["params"]
			, r = e.edgeSwipeDetection
			, e = e.edgeSwipeThreshold;
		 return !r || !(s <= e || s >= i.innerWidth - e) || "prevent" === r && (t.preventDefault(),
		 1)
	}
	function C() {
		 const e = this;
		 var t, s, i, r, {params: a, el: l} = e;
		 l && 0 === l.offsetWidth || (a.breakpoints && e.setBreakpoint(),
		 {allowSlideNext: l, allowSlidePrev: t, snapGrid: s} = e,
		 i = e.virtual && e.params.virtual.enabled,
		 e.allowSlideNext = !0,
		 e.allowSlidePrev = !0,
		 e.updateSize(),
		 e.updateSlides(),
		 e.updateSlidesClasses(),
		 r = i && a.loop,
		 !("auto" === a.slidesPerView || 1 < a.slidesPerView) || !e.isEnd || e.isBeginning || e.params.centeredSlides || r ? e.params.loop && !i ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
		 e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
		 e.autoplay.resizeTimeout = setTimeout(()=>{
			  e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
		 }
		 , 500)),
		 e.allowSlidePrev = t,
		 e.allowSlideNext = l,
		 e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow())
	}
	const M = (e,t)=>{
		 var s = m()
			, {params: i, el: r, wrapperEl: a, device: l} = e
			, n = !!i.nested
			, o = "on" === t ? "addEventListener" : "removeEventListener";
		 s[o]("touchstart", e.onDocumentTouchStart, {
			  passive: !1,
			  capture: n
		 }),
		 r[o]("touchstart", e.onTouchStart, {
			  passive: !1
		 }),
		 r[o]("pointerdown", e.onTouchStart, {
			  passive: !1
		 }),
		 s[o]("touchmove", e.onTouchMove, {
			  passive: !1,
			  capture: n
		 }),
		 s[o]("pointermove", e.onTouchMove, {
			  passive: !1,
			  capture: n
		 }),
		 s[o]("touchend", e.onTouchEnd, {
			  passive: !0
		 }),
		 s[o]("pointerup", e.onTouchEnd, {
			  passive: !0
		 }),
		 s[o]("pointercancel", e.onTouchEnd, {
			  passive: !0
		 }),
		 s[o]("touchcancel", e.onTouchEnd, {
			  passive: !0
		 }),
		 s[o]("pointerout", e.onTouchEnd, {
			  passive: !0
		 }),
		 s[o]("pointerleave", e.onTouchEnd, {
			  passive: !0
		 }),
		 s[o]("contextmenu", e.onTouchEnd, {
			  passive: !0
		 }),
		 (i.preventClicks || i.preventClicksPropagation) && r[o]("click", e.onClick, !0),
		 i.cssMode && a[o]("scroll", e.onScroll),
		 i.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", C, !0) : e[t]("observerUpdate", C, !0),
		 r[o]("load", e.onLoad, {
			  capture: !0
		 })
	}
	;
	const B = (e,t)=>e.grid && t.grid && 1 < t.grid.rows;
	var F = {
		 init: !0,
		 direction: "horizontal",
		 oneWayMovement: !1,
		 touchEventsTarget: "wrapper",
		 initialSlide: 0,
		 speed: 300,
		 cssMode: !1,
		 updateOnWindowResize: !0,
		 resizeObserver: !0,
		 nested: !1,
		 createElements: !1,
		 eventsPrefix: "swiper",
		 enabled: !0,
		 focusableElements: "input, select, option, textarea, button, video, label",
		 width: null,
		 height: null,
		 preventInteractionOnTransition: !1,
		 userAgent: null,
		 url: null,
		 edgeSwipeDetection: !1,
		 edgeSwipeThreshold: 20,
		 autoHeight: !1,
		 setWrapperSize: !1,
		 virtualTranslate: !1,
		 effect: "slide",
		 breakpoints: void 0,
		 breakpointsBase: "window",
		 spaceBetween: 0,
		 slidesPerView: 1,
		 slidesPerGroup: 1,
		 slidesPerGroupSkip: 0,
		 slidesPerGroupAuto: !1,
		 centeredSlides: !1,
		 centeredSlidesBounds: !1,
		 slidesOffsetBefore: 0,
		 slidesOffsetAfter: 0,
		 normalizeSlideIndex: !0,
		 centerInsufficientSlides: !1,
		 watchOverflow: !0,
		 roundLengths: !1,
		 touchRatio: 1,
		 touchAngle: 45,
		 simulateTouch: !0,
		 shortSwipes: !0,
		 longSwipes: !0,
		 longSwipesRatio: .5,
		 longSwipesMs: 300,
		 followFinger: !0,
		 allowTouchMove: !0,
		 threshold: 5,
		 touchMoveStopPropagation: !1,
		 touchStartPreventDefault: !0,
		 touchStartForcePreventDefault: !1,
		 touchReleaseOnEdges: !1,
		 uniqueNavElements: !0,
		 resistance: !0,
		 resistanceRatio: .85,
		 watchSlidesProgress: !1,
		 grabCursor: !1,
		 preventClicks: !0,
		 preventClicksPropagation: !0,
		 slideToClickedSlide: !1,
		 loop: !1,
		 loopAddBlankSlides: !0,
		 loopAdditionalSlides: 0,
		 loopPreventsSliding: !0,
		 rewind: !1,
		 allowSlidePrev: !0,
		 allowSlideNext: !0,
		 swipeHandler: null,
		 noSwiping: !0,
		 noSwipingClass: "swiper-no-swiping",
		 noSwipingSelector: null,
		 passiveListeners: !0,
		 maxBackfaceHiddenSlides: 10,
		 containerModifierClass: "swiper-",
		 slideClass: "swiper-slide",
		 slideBlankClass: "swiper-slide-blank",
		 slideActiveClass: "swiper-slide-active",
		 slideVisibleClass: "swiper-slide-visible",
		 slideFullyVisibleClass: "swiper-slide-fully-visible",
		 slideNextClass: "swiper-slide-next",
		 slidePrevClass: "swiper-slide-prev",
		 wrapperClass: "swiper-wrapper",
		 lazyPreloaderClass: "swiper-lazy-preloader",
		 lazyPreloadPrevNext: 0,
		 runCallbacksOnInit: !0,
		 _emitClasses: !1
	};
	const P = {
		 eventsEmitter: {
			  on(e, t, s) {
					const i = this;
					if (i.eventsListeners && !i.destroyed && "function" == typeof t) {
						 const r = s ? "unshift" : "push";
						 e.split(" ").forEach(e=>{
							  i.eventsListeners[e] || (i.eventsListeners[e] = []),
							  i.eventsListeners[e][r](t)
						 }
						 )
					}
					return i
			  },
			  once(i, r, e) {
					const a = this;
					return !a.eventsListeners || a.destroyed || "function" != typeof r ? a : (l.__emitterProxy = r,
					a.on(i, l, e));
					function l() {
						 a.off(i, l),
						 l.__emitterProxy && delete l.__emitterProxy;
						 for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
							  t[s] = arguments[s];
						 r.apply(a, t)
					}
			  },
			  onAny(e, t) {
					var s = this;
					return s.eventsListeners && !s.destroyed && "function" == typeof e && (t = t ? "unshift" : "push",
					s.eventsAnyListeners.indexOf(e) < 0) && s.eventsAnyListeners[t](e),
					s
			  },
			  offAny(e) {
					var t = this;
					return t.eventsListeners && !t.destroyed && t.eventsAnyListeners && 0 <= (e = t.eventsAnyListeners.indexOf(e)) && t.eventsAnyListeners.splice(e, 1),
					t
			  },
			  off(e, i) {
					const r = this;
					return r.eventsListeners && !r.destroyed && r.eventsListeners && e.split(" ").forEach(s=>{
						 void 0 === i ? r.eventsListeners[s] = [] : r.eventsListeners[s] && r.eventsListeners[s].forEach((e,t)=>{
							  (e === i || e.__emitterProxy && e.__emitterProxy === i) && r.eventsListeners[s].splice(t, 1)
						 }
						 )
					}
					),
					r
			  },
			  emit() {
					const r = this;
					if (r.eventsListeners && !r.destroyed && r.eventsListeners) {
						 let e, s, i;
						 for (var t = arguments.length, a = new Array(t), l = 0; l < t; l++)
							  a[l] = arguments[l];
						 i = "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0],
						 s = a.slice(1, a.length),
						 r) : (e = a[0].events,
						 s = a[0].data,
						 a[0].context || r),
						 s.unshift(i),
						 (Array.isArray(e) ? e : e.split(" ")).forEach(t=>{
							  r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(e=>{
									e.apply(i, [t, ...s])
							  }
							  ),
							  r.eventsListeners && r.eventsListeners[t] && r.eventsListeners[t].forEach(e=>{
									e.apply(i, s)
							  }
							  )
						 }
						 )
					}
					return r
			  }
		 },
		 update: {
			  updateSize: function() {
					var e = this;
					let t, s;
					var i = e.el;
					t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth,
					s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight,
					0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(W(i, "padding-left") || 0, 10) - parseInt(W(i, "padding-right") || 0, 10),
					s = s - parseInt(W(i, "padding-top") || 0, 10) - parseInt(W(i, "padding-bottom") || 0, 10),
					Number.isNaN(t) && (t = 0),
					Number.isNaN(s) && (s = 0),
					Object.assign(e, {
						 width: t,
						 height: s,
						 size: e.isHorizontal() ? t : s
					}))
			  },
			  updateSlides: function() {
					const i = this;
					function r(e, t) {
						 return parseFloat(e.getPropertyValue(i.getDirectionLabel(t)) || 0)
					}
					const a = i.params
					  , {wrapperEl: e, slidesEl: s, size: l, rtlTranslate: t, wrongRTL: B} = i;
					var n = i.virtual && a.virtual.enabled
					  , o = (n ? i.virtual : i).slides.length;
					const d = q(s, `.${i.params.slideClass}, swiper-slide`);
					var c = (n ? i.virtual.slides : d).length;
					let p = [];
					const u = [];
					var m = [];
					let h = a.slidesOffsetBefore
					  , v = ("function" == typeof h && (h = a.slidesOffsetBefore.call(i)),
					a.slidesOffsetAfter);
					"function" == typeof v && (v = a.slidesOffsetAfter.call(i));
					var f = i.snapGrid.length
					  , F = i.slidesGrid.length;
					let g = a.spaceBetween
					  , w = -h
					  , b = 0
					  , S = 0;
					if (void 0 !== l) {
						 "string" == typeof g && 0 <= g.indexOf("%") ? g = parseFloat(g.replace("%", "")) / 100 * l : "string" == typeof g && (g = parseFloat(g)),
						 i.virtualSize = -g,
						 d.forEach(e=>{
							  t ? e.style.marginLeft = "" : e.style.marginRight = "",
							  e.style.marginBottom = "",
							  e.style.marginTop = ""
						 }
						 ),
						 a.centeredSlides && a.cssMode && (j(e, "--swiper-centered-offset-before", ""),
						 j(e, "--swiper-centered-offset-after", ""));
						 var T = a.grid && 1 < a.grid.rows && i.grid;
						 T ? i.grid.initSlides(d) : i.grid && i.grid.unsetSlides();
						 let s;
						 var y, x, E, C, M, P, L, I, k, V = "auto" === a.slidesPerView && a.breakpoints && 0 < Object.keys(a.breakpoints).filter(e=>void 0 !== a.breakpoints[e].slidesPerView).length;
						 for (let t = 0; t < c; t += 1) {
							  s = 0;
							  let e;
							  d[t] && (e = d[t]),
							  T && i.grid.updateSlide(t, e, d),
							  d[t] && "none" === W(e, "display") || ("auto" === a.slidesPerView ? (V && (d[t].style[i.getDirectionLabel("width")] = ""),
							  I = getComputedStyle(e),
							  y = e.style.transform,
							  x = e.style.webkitTransform,
							  y && (e.style.transform = "none"),
							  x && (e.style.webkitTransform = "none"),
							  s = a.roundLengths ? i.isHorizontal() ? Y(e, "width", !0) : Y(e, "height", !0) : (E = r(I, "width"),
							  C = r(I, "padding-left"),
							  M = r(I, "padding-right"),
							  P = r(I, "margin-left"),
							  L = r(I, "margin-right"),
							  (I = I.getPropertyValue("box-sizing")) && "border-box" === I ? E + P + L : ({clientWidth: I, offsetWidth: k} = e,
							  E + C + M + P + L + (k - I))),
							  y && (e.style.transform = y),
							  x && (e.style.webkitTransform = x),
							  a.roundLengths && (s = Math.floor(s))) : (s = (l - (a.slidesPerView - 1) * g) / a.slidesPerView,
							  a.roundLengths && (s = Math.floor(s)),
							  d[t] && (d[t].style[i.getDirectionLabel("width")] = s + "px")),
							  d[t] && (d[t].swiperSlideSize = s),
							  m.push(s),
							  a.centeredSlides ? (w = w + s / 2 + b / 2 + g,
							  0 === b && 0 !== t && (w = w - l / 2 - g),
							  0 === t && (w = w - l / 2 - g),
							  Math.abs(w) < .001 && (w = 0),
							  a.roundLengths && (w = Math.floor(w)),
							  S % a.slidesPerGroup == 0 && p.push(w),
							  u.push(w)) : (a.roundLengths && (w = Math.floor(w)),
							  (S - Math.min(i.params.slidesPerGroupSkip, S)) % i.params.slidesPerGroup == 0 && p.push(w),
							  u.push(w),
							  w = w + s + g),
							  i.virtualSize += s + g,
							  b = s,
							  S += 1)
						 }
						 if (i.virtualSize = Math.max(i.virtualSize, l) + v,
						 t && B && ("slide" === a.effect || "coverflow" === a.effect) && (e.style.width = i.virtualSize + g + "px"),
						 a.setWrapperSize && (e.style[i.getDirectionLabel("width")] = i.virtualSize + g + "px"),
						 T && i.grid.updateWrapperSize(s, p),
						 !a.centeredSlides) {
							  var A = [];
							  for (let t = 0; t < p.length; t += 1) {
									let e = p[t];
									a.roundLengths && (e = Math.floor(e)),
									p[t] <= i.virtualSize - l && A.push(e)
							  }
							  p = A,
							  1 < Math.floor(i.virtualSize - l) - Math.floor(p[p.length - 1]) && p.push(i.virtualSize - l)
						 }
						 if (n && a.loop) {
							  var O = m[0] + g;
							  if (1 < a.slidesPerGroup) {
									var N = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / a.slidesPerGroup)
									  , H = O * a.slidesPerGroup;
									for (let e = 0; e < N; e += 1)
										 p.push(p[p.length - 1] + H)
							  }
							  for (let e = 0; e < i.virtual.slidesBefore + i.virtual.slidesAfter; e += 1)
									1 === a.slidesPerGroup && p.push(p[p.length - 1] + O),
									u.push(u[u.length - 1] + O),
									i.virtualSize += O
						 }
						 if (0 === p.length && (p = [0]),
						 0 !== g) {
							  const z = i.isHorizontal() && t ? "marginLeft" : i.getDirectionLabel("marginRight");
							  d.filter((e,t)=>!(a.cssMode && !a.loop) || t !== d.length - 1).forEach(e=>{
									e.style[z] = g + "px"
							  }
							  )
						 }
						 if (a.centeredSlides && a.centeredSlidesBounds) {
							  let t = 0;
							  m.forEach(e=>{
									t += e + (g || 0)
							  }
							  );
							  const G = (t -= g) - l;
							  p = p.map(e=>e <= 0 ? -h : e > G ? G + v : e)
						 }
						 if (a.centerInsufficientSlides) {
							  let t = 0;
							  if (m.forEach(e=>{
									t += e + (g || 0)
							  }
							  ),
							  (t -= g) < l) {
									const D = (l - t) / 2;
									p.forEach((e,t)=>{
										 p[t] = e - D
									}
									),
									u.forEach((e,t)=>{
										 u[t] = e + D
									}
									)
							  }
						 }
						 if (Object.assign(i, {
							  slides: d,
							  snapGrid: p,
							  slidesGrid: u,
							  slidesSizesGrid: m
						 }),
						 a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
							  j(e, "--swiper-centered-offset-before", -p[0] + "px"),
							  j(e, "--swiper-centered-offset-after", i.size / 2 - m[m.length - 1] / 2 + "px");
							  const _ = -i.snapGrid[0]
								 , R = -i.slidesGrid[0];
							  i.snapGrid = i.snapGrid.map(e=>e + _),
							  i.slidesGrid = i.slidesGrid.map(e=>e + R)
						 }
						 c !== o && i.emit("slidesLengthChange"),
						 p.length !== f && (i.params.watchOverflow && i.checkOverflow(),
						 i.emit("snapGridLengthChange")),
						 u.length !== F && i.emit("slidesGridLengthChange"),
						 a.watchSlidesProgress && i.updateSlidesOffset(),
						 n || a.cssMode || "slide" !== a.effect && "fade" !== a.effect || (o = a.containerModifierClass + "backface-hidden",
						 f = i.el.classList.contains(o),
						 c <= a.maxBackfaceHiddenSlides ? f || i.el.classList.add(o) : f && i.el.classList.remove(o))
					}
			  },
			  updateAutoHeight: function(e) {
					const t = this
					  , s = []
					  , i = t.virtual && t.params.virtual.enabled;
					let r = 0, a;
					"number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
					var l, n = e=>i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
					if ("auto" !== t.params.slidesPerView && 1 < t.params.slidesPerView)
						 if (t.params.centeredSlides)
							  (t.visibleSlides || []).forEach(e=>{
									s.push(e)
							  }
							  );
						 else
							  for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
									var o = t.activeIndex + a;
									if (o > t.slides.length && !i)
										 break;
									s.push(n(o))
							  }
					else
						 s.push(n(t.activeIndex));
					for (a = 0; a < s.length; a += 1)
						 void 0 !== s[a] && (l = s[a].offsetHeight,
						 r = l > r ? l : r);
					!r && 0 !== r || (t.wrapperEl.style.height = r + "px")
			  },
			  updateSlidesOffset: function() {
					var t = this
					  , s = t.slides
					  , i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
					for (let e = 0; e < s.length; e += 1)
						 s[e].swiperSlideOffset = (t.isHorizontal() ? s[e].offsetLeft : s[e].offsetTop) - i - t.cssOverflowAdjustment()
			  },
			  updateSlidesProgress: function(e) {
					void 0 === e && (e = this && this.translate || 0);
					var r = this;
					const a = r.params;
					var {slides: l, rtlTranslate: n, snapGrid: o} = r;
					if (0 !== l.length) {
						 void 0 === l[0].swiperSlideOffset && r.updateSlidesOffset();
						 let s = n ? e : -e
							, i = (l.forEach(e=>{
							  e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass)
						 }
						 ),
						 r.visibleSlidesIndexes = [],
						 r.visibleSlides = [],
						 a.spaceBetween);
						 "string" == typeof i && 0 <= i.indexOf("%") ? i = parseFloat(i.replace("%", "")) / 100 * r.size : "string" == typeof i && (i = parseFloat(i));
						 for (let t = 0; t < l.length; t += 1) {
							  var d = l[t];
							  let e = d.swiperSlideOffset;
							  a.cssMode && a.centeredSlides && (e -= l[0].swiperSlideOffset);
							  var c = (s + (a.centeredSlides ? r.minTranslate() : 0) - e) / (d.swiperSlideSize + i)
								 , p = (s - o[0] + (a.centeredSlides ? r.minTranslate() : 0) - e) / (d.swiperSlideSize + i)
								 , u = -(s - e)
								 , m = u + r.slidesSizesGrid[t]
								 , h = 0 <= u && u <= r.size - r.slidesSizesGrid[t];
							  (0 <= u && u < r.size - 1 || 1 < m && m <= r.size || u <= 0 && m >= r.size) && (r.visibleSlides.push(d),
							  r.visibleSlidesIndexes.push(t),
							  l[t].classList.add(a.slideVisibleClass)),
							  h && l[t].classList.add(a.slideFullyVisibleClass),
							  d.progress = n ? -c : c,
							  d.originalProgress = n ? -p : p
						 }
					}
			  },
			  updateProgress: function(e) {
					var t = this
					  , s = (void 0 === e && (s = t.rtlTranslate ? -1 : 1,
					e = t && t.translate && t.translate * s || 0),
					t.params)
					  , i = t.maxTranslate() - t.minTranslate();
					let {progress: r, isBeginning: a, isEnd: l, progressLoop: n} = t;
					var o, d, c, p = a, u = l;
					0 == i ? (r = 0,
					a = !0,
					l = !0) : (r = (e - t.minTranslate()) / i,
					i = Math.abs(e - t.minTranslate()) < 1,
					o = Math.abs(e - t.maxTranslate()) < 1,
					a = i || r <= 0,
					l = o || 1 <= r,
					i && (r = 0),
					o && (r = 1)),
					s.loop && (i = t.getSlideIndexByData(0),
					o = t.getSlideIndexByData(t.slides.length - 1),
					i = t.slidesGrid[i],
					o = t.slidesGrid[o],
					d = t.slidesGrid[t.slidesGrid.length - 1],
					c = Math.abs(e),
					1 < (n = i <= c ? (c - i) / d : (c + d - o) / d)) && --n,
					Object.assign(t, {
						 progress: r,
						 progressLoop: n,
						 isBeginning: a,
						 isEnd: l
					}),
					(s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
					a && !p && t.emit("reachBeginning toEdge"),
					l && !u && t.emit("reachEnd toEdge"),
					(p && !a || u && !l) && t.emit("fromEdge"),
					t.emit("progress", r)
			  },
			  updateSlidesClasses: function() {
					var t = this;
					const {slides: e, params: s, slidesEl: i, activeIndex: r} = t;
					var a = t.virtual && s.virtual.enabled
					  , l = t.grid && s.grid && 1 < s.grid.rows
					  , n = e=>q(i, `.${s.slideClass}${e}, swiper-slide` + e)[0];
					e.forEach(e=>{
						 e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
					}
					);
					let o, d, c;
					if (a)
						 if (s.loop) {
							  let e = r - t.virtual.slidesBefore;
							  (e = e < 0 ? t.virtual.slides.length + e : e) >= t.virtual.slides.length && (e -= t.virtual.slides.length),
							  o = n(`[data-swiper-slide-index="${e}"]`)
						 } else
							  o = n(`[data-swiper-slide-index="${r}"]`);
					else
						 l ? (o = e.filter(e=>e.column === r)[0],
						 c = e.filter(e=>e.column === r + 1)[0],
						 d = e.filter(e=>e.column === r - 1)[0]) : o = e[r];
					o && (o.classList.add(s.slideActiveClass),
					l ? (c && c.classList.add(s.slideNextClass),
					d && d.classList.add(s.slidePrevClass)) : (c = function(e, t) {
						 for (var s = []; e.nextElementSibling; ) {
							  var i = e.nextElementSibling;
							  (!t || i.matches(t)) && s.push(i),
							  e = i
						 }
						 return s
					}(o, `.${s.slideClass}, swiper-slide`)[0],
					(c = s.loop && !c ? e[0] : c) && c.classList.add(s.slideNextClass),
					d = function(e, t) {
						 for (var s = []; e.previousElementSibling; ) {
							  var i = e.previousElementSibling;
							  (!t || i.matches(t)) && s.push(i),
							  e = i
						 }
						 return s
					}(o, `.${s.slideClass}, swiper-slide`)[0],
					(d = s.loop && 0 === !d ? e[e.length - 1] : d) && d.classList.add(s.slidePrevClass))),
					t.emitSlidesClasses()
			  },
			  updateActiveIndex: function(e) {
					const s = this;
					var i = s.rtlTranslate ? s.translate : -s.translate
					  , {snapGrid: r, params: a, activeIndex: l, realIndex: n, snapIndex: o} = s;
					let d = e, c;
					if (e = e=>{
						 let t = e - s.virtual.slidesBefore;
						 return (t = t < 0 ? s.virtual.slides.length + t : t) >= s.virtual.slides.length && (t -= s.virtual.slides.length),
						 t
					}
					,
					void 0 === d && (d = function(e) {
						 var {slidesGrid: t, params: s} = e
							, i = e.rtlTranslate ? e.translate : -e.translate;
						 let r;
						 for (let e = 0; e < t.length; e += 1)
							  void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : i >= t[e] && i < t[e + 1] && (r = e + 1) : i >= t[e] && (r = e);
						 return r = s.normalizeSlideIndex && (r < 0 || void 0 === r) ? 0 : r
					}(s)),
					(c = 0 <= r.indexOf(i) ? r.indexOf(i) : (i = Math.min(a.slidesPerGroupSkip, d)) + Math.floor((d - i) / a.slidesPerGroup)) >= r.length && (c = r.length - 1),
					d !== l || s.params.loop)
						 if (d === l && s.params.loop && s.virtual && s.params.virtual.enabled)
							  s.realIndex = e(d);
						 else {
							  i = s.grid && a.grid && 1 < a.grid.rows;
							  let t;
							  if (s.virtual && a.virtual.enabled && a.loop)
									t = e(d);
							  else if (i) {
									r = s.slides.filter(e=>e.column === d)[0];
									let e = parseInt(r.getAttribute("data-swiper-slide-index"), 10);
									Number.isNaN(e) && (e = Math.max(s.slides.indexOf(r), 0)),
									t = Math.floor(e / a.grid.rows)
							  } else
									t = s.slides[d] && (e = s.slides[d].getAttribute("data-swiper-slide-index"),
									e) ? parseInt(e, 10) : d;
							  Object.assign(s, {
									previousSnapIndex: o,
									snapIndex: c,
									previousRealIndex: n,
									realIndex: t,
									previousIndex: l,
									activeIndex: d
							  }),
							  s.initialized && T(s),
							  s.emit("activeIndexChange"),
							  s.emit("snapIndexChange"),
							  (s.initialized || s.params.runCallbacksOnInit) && (n !== t && s.emit("realIndexChange"),
							  s.emit("slideChange"))
						 }
					else
						 c !== o && (s.snapIndex = c,
						 s.emit("snapIndexChange"))
			  },
			  updateClickedSlide: function(e, t) {
					var s = this;
					const i = s.params;
					let r = e.closest(`.${i.slideClass}, swiper-slide`), a = (!r && s.isElement && t && 1 < t.length && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e=>{
						 !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e)
					}
					),
					!1), l;
					if (r)
						 for (let e = 0; e < s.slides.length; e += 1)
							  if (s.slides[e] === r) {
									a = !0,
									l = e;
									break
							  }
					r && a ? (s.clickedSlide = r,
					s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = l,
					i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()) : (s.clickedSlide = void 0,
					s.clickedIndex = void 0)
			  }
		 },
		 translate: {
			  getTranslate: function(e) {
					void 0 === e && (e = this.isHorizontal() ? "x" : "y");
					var {params: t, rtlTranslate: s, translate: i, wrapperEl: r} = this;
					if (t.virtualTranslate)
						 return s ? -i : i;
					if (t.cssMode)
						 return i;
					let a = z(r, e);
					return a += this.cssOverflowAdjustment(),
					(a = s ? -a : a) || 0
			  },
			  setTranslate: function(e, t) {
					var s = this
					  , {rtlTranslate: i, params: r, wrapperEl: a, progress: l} = s;
					let n = 0
					  , o = 0;
					s.isHorizontal() ? n = i ? -e : e : o = e,
					r.roundLengths && (n = Math.floor(n),
					o = Math.floor(o)),
					s.previousTranslate = s.translate,
					s.translate = s.isHorizontal() ? n : o,
					r.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -n : -o : r.virtualTranslate || (s.isHorizontal() ? n -= s.cssOverflowAdjustment() : o -= s.cssOverflowAdjustment(),
					a.style.transform = `translate3d(${n}px, ${o}px, 0px)`);
					let d;
					i = s.maxTranslate() - s.minTranslate(),
					(d = 0 == i ? 0 : (e - s.minTranslate()) / i) !== l && s.updateProgress(e),
					s.emit("setTranslate", s.translate, t)
			  },
			  minTranslate: function() {
					return -this.snapGrid[0]
			  },
			  maxTranslate: function() {
					return -this.snapGrid[this.snapGrid.length - 1]
			  },
			  translateTo: function(e, t, s, i, r) {
					void 0 === e && (e = 0),
					void 0 === t && (t = this.params.speed),
					void 0 === s && (s = !0),
					void 0 === i && (i = !0);
					const a = this;
					var {params: l, wrapperEl: n} = a;
					if (a.animating && l.preventInteractionOnTransition)
						 return !1;
					var o = a.minTranslate()
					  , d = a.maxTranslate();
					let c;
					if (c = i && o < e ? o : i && e < d ? d : e,
					a.updateProgress(c),
					l.cssMode) {
						 o = a.isHorizontal();
						 if (0 === t)
							  n[o ? "scrollLeft" : "scrollTop"] = -c;
						 else {
							  if (!a.support.smoothScroll)
									return x({
										 swiper: a,
										 targetPosition: -c,
										 side: o ? "left" : "top"
									}),
									!0;
							  n.scrollTo({
									[o ? "left" : "top"]: -c,
									behavior: "smooth"
							  })
						 }
					} else
						 0 === t ? (a.setTransition(0),
						 a.setTranslate(c),
						 s && (a.emit("beforeTransitionStart", t, r),
						 a.emit("transitionEnd"))) : (a.setTransition(t),
						 a.setTranslate(c),
						 s && (a.emit("beforeTransitionStart", t, r),
						 a.emit("transitionStart")),
						 a.animating || (a.animating = !0,
						 a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
							  a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
							  a.onTranslateToWrapperTransitionEnd = null,
							  delete a.onTranslateToWrapperTransitionEnd,
							  s) && a.emit("transitionEnd")
						 }
						 ),
						 a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd)));
					return !0
			  }
		 },
		 transition: {
			  setTransition: function(e, t) {
					this.params.cssMode || (this.wrapperEl.style.transitionDuration = e + "ms",
					this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""),
					this.emit("setTransition", e, t)
			  },
			  transitionStart: function(e, t) {
					void 0 === e && (e = !0);
					var s = this["params"];
					s.cssMode || (s.autoHeight && this.updateAutoHeight(),
					y({
						 swiper: this,
						 runCallbacks: e,
						 direction: t,
						 step: "Start"
					}))
			  },
			  transitionEnd: function(e, t) {
					void 0 === e && (e = !0);
					var s = this["params"];
					this.animating = !1,
					s.cssMode || (this.setTransition(0),
					y({
						 swiper: this,
						 runCallbacks: e,
						 direction: t,
						 step: "End"
					}))
			  }
		 },
		 slide: {
			  slideTo: function(e, t, s, i, r) {
					void 0 === t && (t = this.params.speed),
					void 0 === s && (s = !0),
					"string" == typeof (e = void 0 === e ? 0 : e) && (e = parseInt(e, 10));
					const a = this;
					let l = e;
					l < 0 && (l = 0);
					const {params: n, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: m, enabled: h} = a;
					if (a.animating && n.preventInteractionOnTransition || !h && !i && !r)
						 return !1;
					let v = (e = Math.min(a.params.slidesPerGroupSkip, l)) + Math.floor((l - e) / a.params.slidesPerGroup);
					var f = -o[v = v >= o.length ? o.length - 1 : v];
					if (n.normalizeSlideIndex)
						 for (let e = 0; e < d.length; e += 1) {
							  var g = -Math.floor(100 * f)
								 , w = Math.floor(100 * d[e])
								 , b = Math.floor(100 * d[e + 1]);
							  void 0 !== d[e + 1] ? w <= g && g < b - (b - w) / 2 ? l = e : w <= g && g < b && (l = e + 1) : w <= g && (l = e)
						 }
					if (a.initialized && l !== p) {
						 if (!a.allowSlideNext && (u ? f > a.translate && f > a.minTranslate() : f < a.translate && f < a.minTranslate()))
							  return !1;
						 if (!a.allowSlidePrev && f > a.translate && f > a.maxTranslate() && (p || 0) !== l)
							  return !1
					}
					l !== (c || 0) && s && a.emit("beforeSlideChangeStart"),
					a.updateProgress(f);
					let S;
					if (S = l > p ? "next" : l < p ? "prev" : "reset",
					u && -f === a.translate || !u && f === a.translate)
						 return a.updateActiveIndex(l),
						 n.autoHeight && a.updateAutoHeight(),
						 a.updateSlidesClasses(),
						 "slide" !== n.effect && a.setTranslate(f),
						 "reset" !== S && (a.transitionStart(s, S),
						 a.transitionEnd(s, S)),
						 !1;
					if (n.cssMode) {
						 const T = a.isHorizontal()
							, y = u ? f : -f;
						 if (0 === t) {
							  r = a.virtual && a.params.virtual.enabled;
							  r && (a.wrapperEl.style.scrollSnapType = "none",
							  a._immediateVirtual = !0),
							  r && !a._cssModeVirtualInitialSet && 0 < a.params.initialSlide ? (a._cssModeVirtualInitialSet = !0,
							  requestAnimationFrame(()=>{
									m[T ? "scrollLeft" : "scrollTop"] = y
							  }
							  )) : m[T ? "scrollLeft" : "scrollTop"] = y,
							  r && requestAnimationFrame(()=>{
									a.wrapperEl.style.scrollSnapType = "",
									a._immediateVirtual = !1
							  }
							  )
						 } else {
							  if (!a.support.smoothScroll)
									return x({
										 swiper: a,
										 targetPosition: y,
										 side: T ? "left" : "top"
									}),
									!0;
							  m.scrollTo({
									[T ? "left" : "top"]: y,
									behavior: "smooth"
							  })
						 }
					} else
						 a.setTransition(t),
						 a.setTranslate(f),
						 a.updateActiveIndex(l),
						 a.updateSlidesClasses(),
						 a.emit("beforeTransitionStart", t, i),
						 a.transitionStart(s, S),
						 0 === t ? a.transitionEnd(s, S) : a.animating || (a.animating = !0,
						 a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
							  a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
							  a.onSlideToWrapperTransitionEnd = null,
							  delete a.onSlideToWrapperTransitionEnd,
							  a.transitionEnd(s, S))
						 }
						 ),
						 a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd));
					return !0
			  },
			  slideToLoop: function(i, e, t, s) {
					void 0 === e && (e = this.params.speed),
					void 0 === t && (t = !0),
					"string" == typeof (i = void 0 === i ? 0 : i) && (i = parseInt(i, 10));
					const r = this;
					var a = r.grid && r.params.grid && 1 < r.params.grid.rows;
					let l = i;
					if (r.params.loop)
						 if (r.virtual && r.params.virtual.enabled)
							  l += r.virtual.slidesBefore;
						 else {
							  let e;
							  if (a) {
									const o = l * r.params.grid.rows;
									e = r.slides.filter(e=>+e.getAttribute("data-swiper-slide-index") == o)[0].column
							  } else
									e = r.getSlideIndexByData(l);
							  var i = a ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length
								 , n = r.params["centeredSlides"];
							  let t = r.params.slidesPerView
								 , s = ("auto" === t ? t = r.slidesPerViewDynamic() : (t = Math.ceil(parseFloat(r.params.slidesPerView, 10)),
							  n && t % 2 == 0 && (t += 1)),
							  i - e < t);
							  if ((s = n ? s || e < Math.ceil(t / 2) : s) && (n = n ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev",
							  r.loopFix({
									direction: n,
									slideTo: !0,
									activeSlideIndex: "next" == n ? e + 1 : e - i + 1,
									slideRealIndex: "next" == n ? r.realIndex : void 0
							  })),
							  a) {
									const d = l * r.params.grid.rows;
									l = r.slides.filter(e=>+e.getAttribute("data-swiper-slide-index") == d)[0].column
							  } else
									l = r.getSlideIndexByData(l)
						 }
					return requestAnimationFrame(()=>{
						 r.slideTo(l, e, t, s)
					}
					),
					r
			  },
			  slideNext: function(e, t, s) {
					void 0 === e && (e = this.params.speed),
					void 0 === t && (t = !0);
					const i = this;
					var {enabled: r, params: a, animating: l} = i;
					if (!r)
						 return i;
					let n = a.slidesPerGroup;
					"auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (n = Math.max(i.slidesPerViewDynamic("current", !0), 1));
					const o = i.activeIndex < a.slidesPerGroupSkip ? 1 : n;
					if (r = i.virtual && a.virtual.enabled,
					a.loop) {
						 if (l && !r && a.loopPreventsSliding)
							  return !1;
						 if (i.loopFix({
							  direction: "next"
						 }),
						 i._clientLeft = i.wrapperEl.clientLeft,
						 i.activeIndex === i.slides.length - 1 && a.cssMode)
							  return requestAnimationFrame(()=>{
									i.slideTo(i.activeIndex + o, e, t, s)
							  }
							  ),
							  !0
					}
					return a.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s)
			  },
			  slidePrev: function(e, t, s) {
					void 0 === e && (e = this.params.speed),
					void 0 === t && (t = !0);
					const i = this;
					var {params: r, snapGrid: a, slidesGrid: l, rtlTranslate: n, enabled: o, animating: d} = i;
					if (!o)
						 return i;
					if (o = i.virtual && r.virtual.enabled,
					r.loop) {
						 if (d && !o && r.loopPreventsSliding)
							  return !1;
						 i.loopFix({
							  direction: "prev"
						 }),
						 i._clientLeft = i.wrapperEl.clientLeft
					}
					function c(e) {
						 return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
					}
					const p = c(n ? i.translate : -i.translate);
					d = a.map(e=>c(e));
					let u = a[d.indexOf(p) - 1];
					if (void 0 === u && r.cssMode) {
						 let s;
						 a.forEach((e,t)=>{
							  p >= e && (s = t)
						 }
						 ),
						 void 0 !== s && (u = a[0 < s ? s - 1 : s])
					}
					let m = 0;
					return void 0 !== u && ((m = l.indexOf(u)) < 0 && (m = i.activeIndex - 1),
					"auto" === r.slidesPerView) && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1,
					m = Math.max(m, 0)),
					r.rewind && i.isBeginning ? (o = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1,
					i.slideTo(o, e, t, s)) : r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame(()=>{
						 i.slideTo(m, e, t, s)
					}
					),
					!0) : i.slideTo(m, e, t, s)
			  },
			  slideReset: function(e, t, s) {
					return void 0 === e && (e = this.params.speed),
					this.slideTo(this.activeIndex, e, t = void 0 === t ? !0 : t, s)
			  },
			  slideToClosest: function(e, t, s, i) {
					void 0 === e && (e = this.params.speed),
					void 0 === t && (t = !0),
					void 0 === i && (i = .5);
					var r = this;
					let a = r.activeIndex;
					var l, n = (n = Math.min(r.params.slidesPerGroupSkip, a)) + Math.floor((a - n) / r.params.slidesPerGroup), o = r.rtlTranslate ? r.translate : -r.translate;
					return o >= r.snapGrid[n] ? (l = r.snapGrid[n],
					(r.snapGrid[n + 1] - l) * i < o - l && (a += r.params.slidesPerGroup)) : o - (l = r.snapGrid[n - 1]) <= (r.snapGrid[n] - l) * i && (a -= r.params.slidesPerGroup),
					a = Math.max(a, 0),
					a = Math.min(a, r.slidesGrid.length - 1),
					r.slideTo(a, e, t, s)
			  },
			  slideToClickedSlide: function() {
					const e = this;
					var t, {params: s, slidesEl: i} = e, r = "auto" === s.slidesPerView ? e.slidesPerViewDynamic() : s.slidesPerView;
					let a = e.clickedIndex;
					var l = e.isElement ? "swiper-slide" : "." + s.slideClass;
					s.loop ? e.animating || (t = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
					s.centeredSlides ? a < e.loopedSlides - r / 2 || a > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(),
					a = e.getSlideIndex(q(i, l + `[data-swiper-slide-index="${t}"]`)[0]),
					u(()=>{
						 e.slideTo(a)
					}
					)) : e.slideTo(a) : a > e.slides.length - r ? (e.loopFix(),
					a = e.getSlideIndex(q(i, l + `[data-swiper-slide-index="${t}"]`)[0]),
					u(()=>{
						 e.slideTo(a)
					}
					)) : e.slideTo(a)) : e.slideTo(a)
			  }
		 },
		 loop: {
			  loopCreate: function(e) {
					const i = this
					  , {params: r, slidesEl: t} = i;
					var s, a, l, n, o;
					!r.loop || i.virtual && i.params.virtual.enabled || (s = ()=>{
						 q(t, `.${r.slideClass}, swiper-slide`).forEach((e,t)=>{
							  e.setAttribute("data-swiper-slide-index", t)
						 }
						 )
					}
					,
					n = i.grid && r.grid && 1 < r.grid.rows,
					a = r.slidesPerGroup * (n ? r.grid.rows : 1),
					l = i.slides.length % a != 0,
					n = n && i.slides.length % r.grid.rows != 0,
					o = t=>{
						 for (let e = 0; e < t; e += 1) {
							  var s = i.isElement ? c("swiper-slide", [r.slideBlankClass]) : c("div", [r.slideClass, r.slideBlankClass]);
							  i.slidesEl.append(s)
						 }
					}
					,
					l ? r.loopAddBlankSlides ? (o(a - i.slides.length % a),
					i.recalcSlides(),
					i.updateSlides()) : A("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : n && (r.loopAddBlankSlides ? (o(r.grid.rows - i.slides.length % r.grid.rows),
					i.recalcSlides(),
					i.updateSlides()) : A("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")),
					s(),
					i.loopFix({
						 slideRealIndex: e,
						 direction: r.centeredSlides ? void 0 : "next"
					}))
			  },
			  loopFix: function(a) {
					let {slideRealIndex: l, slideTo: n=!0, direction: o, setTranslate: d, activeSlideIndex: c, byController: p, byMousewheel: u} = void 0 === a ? {} : a;
					const m = this;
					if (m.params.loop) {
						 m.emit("beforeLoopFix");
						 const {slides: x, allowSlidePrev: E, allowSlideNext: C, slidesEl: M, params: P} = m;
						 a = P["centeredSlides"];
						 if (m.allowSlidePrev = !0,
						 m.allowSlideNext = !0,
						 m.virtual && P.virtual.enabled)
							  n && (P.centeredSlides || 0 !== m.snapIndex ? P.centeredSlides && m.snapIndex < P.slidesPerView ? m.slideTo(m.virtual.slides.length + m.snapIndex, 0, !1, !0) : m.snapIndex === m.snapGrid.length - 1 && m.slideTo(m.virtual.slidesBefore, 0, !1, !0) : m.slideTo(m.virtual.slides.length, 0, !1, !0)),
							  m.allowSlidePrev = E,
							  m.allowSlideNext = C;
						 else {
							  let e = P.slidesPerView;
							  "auto" === e ? e = m.slidesPerViewDynamic() : (e = Math.ceil(parseFloat(P.slidesPerView, 10)),
							  a && e % 2 == 0 && (e += 1));
							  var h = P.slidesPerGroupAuto ? e : P.slidesPerGroup;
							  let t = h;
							  t % h != 0 && (t += h - t % h),
							  t += P.loopAdditionalSlides,
							  m.loopedSlides = t;
							  var v = m.grid && P.grid && 1 < P.grid.rows
								 , f = (x.length < e + t ? A("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : v && "row" === P.grid.fill && A("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"),
							  []);
							  const L = [];
							  let s = m.activeIndex;
							  void 0 === c ? c = m.getSlideIndex(x.filter(e=>e.classList.contains(P.slideActiveClass))[0]) : s = c;
							  var g = "next" === o || !o
								 , w = "prev" === o || !o;
							  let i = 0
								 , r = 0;
							  var b = v ? Math.ceil(x.length / P.grid.rows) : x.length
								 , S = (v ? x[c].column : c) + (a && void 0 === d ? -e / 2 + .5 : 0);
							  if (S < t) {
									i = Math.max(t - S, h);
									for (let e = 0; e < t - S; e += 1) {
										 var T = e - Math.floor(e / b) * b;
										 if (v) {
											  var y = b - T - 1;
											  for (let e = x.length - 1; 0 <= e; --e)
													x[e].column === y && f.push(e)
										 } else
											  f.push(b - T - 1)
									}
							  } else if (S + e > b - t) {
									r = Math.max(S - (b - 2 * t), h);
									for (let e = 0; e < r; e += 1) {
										 const I = e - Math.floor(e / b) * b;
										 v ? x.forEach((e,t)=>{
											  e.column === I && L.push(t)
										 }
										 ) : L.push(I)
									}
							  }
							  if (m.__preventObserver__ = !0,
							  requestAnimationFrame(()=>{
									m.__preventObserver__ = !1
							  }
							  ),
							  w && f.forEach(e=>{
									x[e].swiperLoopMoveDOM = !0,
									M.prepend(x[e]),
									x[e].swiperLoopMoveDOM = !1
							  }
							  ),
							  g && L.forEach(e=>{
									x[e].swiperLoopMoveDOM = !0,
									M.append(x[e]),
									x[e].swiperLoopMoveDOM = !1
							  }
							  ),
							  m.recalcSlides(),
							  "auto" === P.slidesPerView ? m.updateSlides() : v && (0 < f.length && w || 0 < L.length && g) && m.slides.forEach((e,t)=>{
									m.grid.updateSlide(t, e, m.slides)
							  }
							  ),
							  P.watchSlidesProgress && m.updateSlidesOffset(),
							  n && (0 < f.length && w ? void 0 === l ? (a = m.slidesGrid[s],
							  h = m.slidesGrid[s + i] - a,
							  u ? m.setTranslate(m.translate - h) : (m.slideTo(s + i, 0, !1, !0),
							  d && (m.touchEventsData.startTranslate = m.touchEventsData.startTranslate - h,
							  m.touchEventsData.currentTranslate = m.touchEventsData.currentTranslate - h))) : d && (w = v ? f.length / P.grid.rows : f.length,
							  m.slideTo(m.activeIndex + w, 0, !1, !0),
							  m.touchEventsData.currentTranslate = m.translate) : 0 < L.length && g && (void 0 === l ? (a = m.slidesGrid[s],
							  h = m.slidesGrid[s - r] - a,
							  u ? m.setTranslate(m.translate - h) : (m.slideTo(s - r, 0, !1, !0),
							  d && (m.touchEventsData.startTranslate = m.touchEventsData.startTranslate - h,
							  m.touchEventsData.currentTranslate = m.touchEventsData.currentTranslate - h))) : (w = v ? L.length / P.grid.rows : L.length,
							  m.slideTo(m.activeIndex - w, 0, !1, !0)))),
							  m.allowSlidePrev = E,
							  m.allowSlideNext = C,
							  m.controller && m.controller.control && !p) {
									const k = {
										 slideRealIndex: l,
										 direction: o,
										 setTranslate: d,
										 activeSlideIndex: c,
										 byController: !0
									};
									Array.isArray(m.controller.control) ? m.controller.control.forEach(e=>{
										 !e.destroyed && e.params.loop && e.loopFix({
											  ...k,
											  slideTo: e.params.slidesPerView === P.slidesPerView && n
										 })
									}
									) : m.controller.control instanceof m.constructor && m.controller.control.params.loop && m.controller.control.loopFix({
										 ...k,
										 slideTo: m.controller.control.params.slidesPerView === P.slidesPerView && n
									})
							  }
						 }
						 m.emit("loopFix")
					}
			  },
			  loopDestroy: function() {
					var e = this;
					const {params: t, slidesEl: s} = e;
					if (!(!t.loop || e.virtual && e.params.virtual.enabled)) {
						 e.recalcSlides();
						 const i = [];
						 e.slides.forEach(e=>{
							  var t = void 0 === e.swiperSlideIndex ? +e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
							  i[t] = e
						 }
						 ),
						 e.slides.forEach(e=>{
							  e.removeAttribute("data-swiper-slide-index")
						 }
						 ),
						 i.forEach(e=>{
							  s.append(e)
						 }
						 ),
						 e.recalcSlides(),
						 e.slideTo(e.realIndex, 0)
					}
			  }
		 },
		 grabCursor: {
			  setGrabCursor: function(e) {
					const t = this;
					var s;
					!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode || (s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl,
					t.isElement && (t.__preventObserver__ = !0),
					s.style.cursor = "move",
					s.style.cursor = e ? "grabbing" : "grab",
					t.isElement && requestAnimationFrame(()=>{
						 t.__preventObserver__ = !1
					}
					))
			  },
			  unsetGrabCursor: function() {
					const e = this;
					e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
					e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
					e.isElement && requestAnimationFrame(()=>{
						 e.__preventObserver__ = !1
					}
					))
			  }
		 },
		 events: {
			  attachEvents: function() {
					var e = this
					  , t = e["params"];
					e.onTouchStart = function(s) {
						 var i = this
							, r = m();
						 let a = s;
						 if (a.originalEvent && (a = a.originalEvent),
						 s = i.touchEventsData,
						 "pointerdown" === a.type) {
							  if (null !== s.pointerId && s.pointerId !== a.pointerId)
									return;
							  s.pointerId = a.pointerId
						 } else
							  "touchstart" === a.type && 1 === a.targetTouches.length && (s.touchId = a.targetTouches[0].identifier);
						 if ("touchstart" === a.type)
							  E(i, a, a.targetTouches[0].pageX);
						 else {
							  var {params: l, touches: n, enabled: o} = i;
							  if (o && (l.simulateTouch || "mouse" !== a.pointerType) && (!i.animating || !l.preventInteractionOnTransition)) {
									!i.animating && l.cssMode && l.loop && i.loopFix();
									let t = a.target;
									if (("wrapper" !== l.touchEventsTarget || i.wrapperEl.contains(t)) && !("which"in a && 3 === a.which || "button"in a && 0 < a.button || s.isTouched && s.isMoved)) {
										 var o = !!l.noSwipingClass && "" !== l.noSwipingClass
											, d = a.composedPath ? a.composedPath() : a.path
											, o = (o && a.target && a.target.shadowRoot && d && (t = d[0]),
										 l.noSwipingSelector || "." + l.noSwipingClass)
											, d = !(!a.target || !a.target.shadowRoot);
										 if (l.noSwiping && (d ? _(o, t) : t.closest(o)))
											  i.allowClick = !0;
										 else if (!l.swipeHandler || t.closest(l.swipeHandler)) {
											  n.currentX = a.pageX,
											  n.currentY = a.pageY;
											  d = n.currentX,
											  o = n.currentY;
											  if (E(i, a, d)) {
													Object.assign(s, {
														 isTouched: !0,
														 isMoved: !1,
														 allowTouchCallbacks: !0,
														 isScrolling: void 0,
														 startMoving: void 0
													}),
													n.startX = d,
													n.startY = o,
													s.touchStartTime = v(),
													i.allowClick = !0,
													i.updateSize(),
													i.swipeDirection = void 0,
													0 < l.threshold && (s.allowThresholdMove = !1);
													let e = !0;
													t.matches(s.focusableElements) && (e = !1,
													"SELECT" === t.nodeName) && (s.isTouched = !1),
													r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== t && r.activeElement.blur();
													d = e && i.allowTouchMove && l.touchStartPreventDefault;
													!l.touchStartForcePreventDefault && !d || t.isContentEditable || a.preventDefault(),
													l.freeMode && l.freeMode.enabled && i.freeMode && i.animating && !l.cssMode && i.freeMode.onTouchStart(),
													i.emit("touchStart", a)
											  }
										 }
									}
							  }
						 }
					}
					.bind(e),
					e.onTouchMove = function(t) {
						 var r = m()
							, a = this;
						 const l = a.touchEventsData;
						 var {params: n, touches: o, rtlTranslate: d, enabled: c} = a;
						 if (c && (n.simulateTouch || "mouse" !== t.pointerType)) {
							  let i = t;
							  if ("pointermove" === (i = i.originalEvent ? i.originalEvent : i).type) {
									if (null !== l.touchId)
										 return;
									if (i.pointerId !== l.pointerId)
										 return
							  }
							  let e;
							  if ("touchmove" === i.type) {
									if (!(e = [...i.changedTouches].filter(e=>e.identifier === l.touchId)[0]) || e.identifier !== l.touchId)
										 return
							  } else
									e = i;
							  if (l.isTouched) {
									c = e.pageX,
									t = e.pageY;
									if (i.preventedByNestedSwiper)
										 o.startX = c,
										 o.startY = t;
									else if (a.allowTouchMove) {
										 if (n.touchReleaseOnEdges && !n.loop)
											  if (a.isVertical()) {
													if (t < o.startY && a.translate <= a.maxTranslate() || t > o.startY && a.translate >= a.minTranslate())
														 return l.isTouched = !1,
														 void (l.isMoved = !1)
											  } else if (c < o.startX && a.translate <= a.maxTranslate() || c > o.startX && a.translate >= a.minTranslate())
													return;
										 if (r.activeElement && i.target === r.activeElement && i.target.matches(l.focusableElements))
											  l.isMoved = !0,
											  a.allowClick = !1;
										 else {
											  l.allowTouchCallbacks && a.emit("touchMove", i),
											  o.previousX = o.currentX,
											  o.previousY = o.currentY,
											  o.currentX = c,
											  o.currentY = t;
											  var r = o.currentX - o.startX
												 , p = o.currentY - o.startY;
											  if (!(a.params.threshold && Math.sqrt(r ** 2 + p ** 2) < a.params.threshold))
													if (void 0 === l.isScrolling && (a.isHorizontal() && o.currentY === o.startY || a.isVertical() && o.currentX === o.startX ? l.isScrolling = !1 : 25 <= r * r + p * p && (u = 180 * Math.atan2(Math.abs(p), Math.abs(r)) / Math.PI,
													l.isScrolling = a.isHorizontal() ? u > n.touchAngle : 90 - u > n.touchAngle)),
													l.isScrolling && a.emit("touchMoveOpposite", i),
													void 0 !== l.startMoving || o.currentX === o.startX && o.currentY === o.startY || (l.startMoving = !0),
													l.isScrolling)
														 l.isTouched = !1;
													else if (l.startMoving) {
														 a.allowClick = !1,
														 !n.cssMode && i.cancelable && i.preventDefault(),
														 n.touchMoveStopPropagation && !n.nested && i.stopPropagation();
														 let s = a.isHorizontal() ? r : p
															, e = a.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
														 n.oneWayMovement && (s = Math.abs(s) * (d ? 1 : -1),
														 e = Math.abs(e) * (d ? 1 : -1)),
														 o.diff = s,
														 s *= n.touchRatio,
														 d && (s = -s,
														 e = -e);
														 var u = a.touchesDirection
															, r = (a.swipeDirection = 0 < s ? "prev" : "next",
														 a.touchesDirection = 0 < e ? "prev" : "next",
														 a.params.loop && !n.cssMode)
															, p = "next" === a.touchesDirection && a.allowSlideNext || "prev" === a.touchesDirection && a.allowSlidePrev;
														 if (l.isMoved || (r && p && a.loopFix({
															  direction: a.swipeDirection
														 }),
														 l.startTranslate = a.getTranslate(),
														 a.setTransition(0),
														 a.animating && (d = new window.CustomEvent("transitionend",{
															  bubbles: !0,
															  cancelable: !0
														 }),
														 a.wrapperEl.dispatchEvent(d)),
														 l.allowMomentumBounce = !1,
														 !n.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0),
														 a.emit("sliderFirstMove", i)),
														 (new Date).getTime(),
														 l.isMoved && l.allowThresholdMove && u !== a.touchesDirection && r && p && 1 <= Math.abs(s))
															  Object.assign(o, {
																	startX: c,
																	startY: t,
																	currentX: c,
																	currentY: t,
																	startTranslate: l.currentTranslate
															  }),
															  l.loopSwapReset = !0,
															  l.startTranslate = l.currentTranslate;
														 else {
															  a.emit("sliderMove", i),
															  l.isMoved = !0,
															  l.currentTranslate = s + l.startTranslate;
															  let e = !0
																 , t = n.resistanceRatio;
															  if (n.touchReleaseOnEdges && (t = 0),
															  0 < s ? (r && p && l.allowThresholdMove && l.currentTranslate > (n.centeredSlides ? a.minTranslate() - a.slidesSizesGrid[a.activeIndex + 1] : a.minTranslate()) && a.loopFix({
																	direction: "prev",
																	setTranslate: !0,
																	activeSlideIndex: 0
															  }),
															  l.currentTranslate > a.minTranslate() && (e = !1,
															  n.resistance) && (l.currentTranslate = a.minTranslate() - 1 + (-a.minTranslate() + l.startTranslate + s) ** t)) : s < 0 && (r && p && l.allowThresholdMove && l.currentTranslate < (n.centeredSlides ? a.maxTranslate() + a.slidesSizesGrid[a.slidesSizesGrid.length - 1] : a.maxTranslate()) && a.loopFix({
																	direction: "next",
																	setTranslate: !0,
																	activeSlideIndex: a.slides.length - ("auto" === n.slidesPerView ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
															  }),
															  l.currentTranslate < a.maxTranslate()) && (e = !1,
															  n.resistance) && (l.currentTranslate = a.maxTranslate() + 1 - (a.maxTranslate() - l.startTranslate - s) ** t),
															  e && (i.preventedByNestedSwiper = !0),
															  !a.allowSlideNext && "next" === a.swipeDirection && l.currentTranslate < l.startTranslate && (l.currentTranslate = l.startTranslate),
															  !a.allowSlidePrev && "prev" === a.swipeDirection && l.currentTranslate > l.startTranslate && (l.currentTranslate = l.startTranslate),
															  a.allowSlidePrev || a.allowSlideNext || (l.currentTranslate = l.startTranslate),
															  0 < n.threshold) {
																	if (!(Math.abs(s) > n.threshold || l.allowThresholdMove))
																		 return void (l.currentTranslate = l.startTranslate);
																	if (!l.allowThresholdMove)
																		 return l.allowThresholdMove = !0,
																		 o.startX = o.currentX,
																		 o.startY = o.currentY,
																		 l.currentTranslate = l.startTranslate,
																		 void (o.diff = a.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
															  }
															  n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && a.freeMode || n.watchSlidesProgress) && (a.updateActiveIndex(),
															  a.updateSlidesClasses()),
															  n.freeMode && n.freeMode.enabled && a.freeMode && a.freeMode.onTouchMove(),
															  a.updateProgress(l.currentTranslate),
															  a.setTranslate(l.currentTranslate))
														 }
													}
										 }
									} else
										 i.target.matches(l.focusableElements) || (a.allowClick = !1),
										 l.isTouched && (Object.assign(o, {
											  startX: c,
											  startY: t,
											  currentX: c,
											  currentY: t
										 }),
										 l.touchStartTime = v())
							  } else
									l.startMoving && l.isScrolling && a.emit("touchMoveOpposite", i)
						 }
					}
					.bind(e),
					e.onTouchEnd = function(e) {
						 const a = this
							, t = a.touchEventsData;
						 let l = e, s;
						 if ("touchend" === (l = l.originalEvent ? l.originalEvent : l).type || "touchcancel" === l.type) {
							  if (!(s = [...l.changedTouches].filter(e=>e.identifier === t.touchId)[0]) || s.identifier !== t.touchId)
									return
						 } else {
							  if (null !== t.touchId)
									return;
							  if (l.pointerId !== t.pointerId)
									return;
							  s = l
						 }
						 if (!["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(l.type) || ["pointercancel", "contextmenu"].includes(l.type) && (a.browser.isSafari || a.browser.isWebView)) {
							  t.pointerId = null,
							  t.touchId = null;
							  var {params: n, touches: e, rtlTranslate: i, slidesGrid: o, enabled: r} = a;
							  if (r && (n.simulateTouch || "mouse" !== l.pointerType))
									if (t.allowTouchCallbacks && a.emit("touchEnd", l),
									t.allowTouchCallbacks = !1,
									t.isTouched) {
										 n.grabCursor && t.isMoved && t.isTouched && (!0 === a.allowSlideNext || !0 === a.allowSlidePrev) && a.setGrabCursor(!1);
										 var r = v()
											, d = r - t.touchStartTime;
										 if (a.allowClick && (c = l.path || l.composedPath && l.composedPath(),
										 a.updateClickedSlide(c && c[0] || l.target, c),
										 a.emit("tap click", l),
										 d < 300) && r - t.lastClickTime < 300 && a.emit("doubleTap doubleClick", l),
										 t.lastClickTime = v(),
										 u(()=>{
											  a.destroyed || (a.allowClick = !0)
										 }
										 ),
										 t.isTouched && t.isMoved && a.swipeDirection && (0 !== e.diff || t.loopSwapReset) && (t.currentTranslate !== t.startTranslate || t.loopSwapReset)) {
											  t.isTouched = !1,
											  t.isMoved = !1,
											  t.startMoving = !1;
											  let r;
											  if (r = n.followFinger ? i ? a.translate : -a.translate : -t.currentTranslate,
											  !n.cssMode)
													if (n.freeMode && n.freeMode.enabled)
														 a.freeMode.onTouchEnd({
															  currentPos: r
														 });
													else {
														 let t = 0
															, s = a.slidesSizesGrid[0];
														 for (let e = 0; e < o.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
															  const p = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
															  void 0 !== o[e + p] ? r >= o[e] && r < o[e + p] && (t = e,
															  s = o[e + p] - o[e]) : r >= o[e] && (t = e,
															  s = o[o.length - 1] - o[o.length - 2])
														 }
														 let e = null
															, i = null;
														 n.rewind && (a.isBeginning ? i = n.virtual && n.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1 : a.isEnd && (e = 0));
														 var c = (r - o[t]) / s;
														 const p = t < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
														 d > n.longSwipesMs ? n.longSwipes ? ("next" === a.swipeDirection && (c >= n.longSwipesRatio ? a.slideTo(n.rewind && a.isEnd ? e : t + p) : a.slideTo(t)),
														 "prev" === a.swipeDirection && (c > 1 - n.longSwipesRatio ? a.slideTo(t + p) : null !== i && c < 0 && Math.abs(c) > n.longSwipesRatio ? a.slideTo(i) : a.slideTo(t))) : a.slideTo(a.activeIndex) : n.shortSwipes ? a.navigation && (l.target === a.navigation.nextEl || l.target === a.navigation.prevEl) ? l.target === a.navigation.nextEl ? a.slideTo(t + p) : a.slideTo(t) : ("next" === a.swipeDirection && a.slideTo(null !== e ? e : t + p),
														 "prev" === a.swipeDirection && a.slideTo(null !== i ? i : t)) : a.slideTo(a.activeIndex)
													}
										 } else
											  t.isTouched = !1,
											  t.isMoved = !1,
											  t.startMoving = !1
									} else
										 t.isMoved && n.grabCursor && a.setGrabCursor(!1),
										 t.isMoved = !1,
										 t.startMoving = !1
						 }
					}
					.bind(e),
					e.onDocumentTouchStart = function() {
						 this.documentTouchHandlerProceeded || (this.documentTouchHandlerProceeded = !0,
						 this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
					}
					.bind(e),
					t.cssMode && (e.onScroll = function() {
						 var t = this
							, {wrapperEl: s, rtlTranslate: i, enabled: r} = t;
						 if (r) {
							  t.previousTranslate = t.translate,
							  t.isHorizontal() ? t.translate = -s.scrollLeft : t.translate = -s.scrollTop,
							  0 === t.translate && (t.translate = 0),
							  t.updateActiveIndex(),
							  t.updateSlidesClasses();
							  let e;
							  r = t.maxTranslate() - t.minTranslate();
							  (e = 0 == r ? 0 : (t.translate - t.minTranslate()) / r) !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
							  t.emit("setTranslate", t.translate, !1)
						 }
					}
					.bind(e)),
					e.onClick = function(e) {
						 var t = this;
						 t.enabled && !t.allowClick && (t.params.preventClicks && e.preventDefault(),
						 t.params.preventClicksPropagation) && t.animating && (e.stopPropagation(),
						 e.stopImmediatePropagation())
					}
					.bind(e),
					e.onLoad = function(e) {
						 var t = this;
						 w(t, e.target),
						 t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
					}
					.bind(e),
					M(e, "on")
			  },
			  detachEvents: function() {
					M(this, "off")
			  }
		 },
		 breakpoints: {
			  setBreakpoint: function() {
					const i = this
					  , {realIndex: e, initialized: t, params: r, el: s} = i;
					if ((l = r.breakpoints) && 0 !== Object.keys(l).length) {
						 var a = i.getBreakpoint(l, i.params.breakpointsBase, i.el);
						 if (a && i.currentBreakpoint !== a) {
							  const p = (a in l ? l[a] : void 0) || i.originalParams;
							  var l = B(i, r)
								 , n = B(i, p)
								 , o = r.enabled
								 , l = (l && !n ? (s.classList.remove(r.containerModifierClass + "grid", r.containerModifierClass + "grid-column"),
							  i.emitContainerClasses()) : !l && n && (s.classList.add(r.containerModifierClass + "grid"),
							  (p.grid.fill && "column" === p.grid.fill || !p.grid.fill && "column" === r.grid.fill) && s.classList.add(r.containerModifierClass + "grid-column"),
							  i.emitContainerClasses()),
							  ["navigation", "pagination", "scrollbar"].forEach(e=>{
									var t, s;
									void 0 !== p[e] && (t = r[e] && r[e].enabled,
									s = p[e] && p[e].enabled,
									t && !s && i[e].disable(),
									!t) && s && i[e].enable()
							  }
							  ),
							  p.direction && p.direction !== r.direction)
								 , n = r.loop && (p.slidesPerView !== r.slidesPerView || l)
								 , d = r.loop
								 , l = (l && t && i.changeDirection(),
							  f(i.params, p),
							  i.params.enabled)
								 , c = i.params.loop;
							  Object.assign(i, {
									allowTouchMove: i.params.allowTouchMove,
									allowSlideNext: i.params.allowSlideNext,
									allowSlidePrev: i.params.allowSlidePrev
							  }),
							  o && !l ? i.disable() : !o && l && i.enable(),
							  i.currentBreakpoint = a,
							  i.emit("_beforeBreakpoint", p),
							  t && (n ? (i.loopDestroy(),
							  i.loopCreate(e),
							  i.updateSlides()) : !d && c ? (i.loopCreate(e),
							  i.updateSlides()) : d && !c && i.loopDestroy()),
							  i.emit("breakpoint", p)
						 }
					}
			  },
			  getBreakpoint: function(e, s, i) {
					if (void 0 === s && (s = "window"),
					e && ("container" !== s || i)) {
						 let t = !1;
						 var r = h();
						 const o = "window" === s ? r.innerHeight : i.clientHeight;
						 var a = Object.keys(e).map(e=>{
							  var t;
							  return "string" == typeof e && 0 === e.indexOf("@") ? (t = parseFloat(e.substr(1)),
							  {
									value: o * t,
									point: e
							  }) : {
									value: e,
									point: e
							  }
						 }
						 );
						 a.sort((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
						 for (let e = 0; e < a.length; e += 1) {
							  var {point: l, value: n} = a[e];
							  "window" === s ? r.matchMedia(`(min-width: ${n}px)`).matches && (t = l) : n <= i.clientWidth && (t = l)
						 }
						 return t || "max"
					}
			  }
		 },
		 checkOverflow: {
			  checkOverflow: function() {
					var e, t = this, {isLocked: s, params: i} = t, r = i["slidesOffsetBefore"];
					r ? (e = t.slides.length - 1,
					e = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * r,
					t.isLocked = t.size > e) : t.isLocked = 1 === t.snapGrid.length,
					!0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked),
					!0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
					s && s !== t.isLocked && (t.isEnd = !1),
					s !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
			  }
		 },
		 classes: {
			  addClasses: function() {
					var {classNames: e, params: t, rtl: s, el: i, device: r} = this
					  , s = function(e, s) {
						 const i = [];
						 return e.forEach(t=>{
							  "object" == typeof t ? Object.keys(t).forEach(e=>{
									t[e] && i.push(s + e)
							  }
							  ) : "string" == typeof t && i.push(s + t)
						 }
						 ),
						 i
					}(["initialized", t.direction, {
						 "free-mode": this.params.freeMode && t.freeMode.enabled
					}, {
						 autoheight: t.autoHeight
					}, {
						 rtl: s
					}, {
						 grid: t.grid && 1 < t.grid.rows
					}, {
						 "grid-column": t.grid && 1 < t.grid.rows && "column" === t.grid.fill
					}, {
						 android: r.android
					}, {
						 ios: r.ios
					}, {
						 "css-mode": t.cssMode
					}, {
						 centered: t.cssMode && t.centeredSlides
					}, {
						 "watch-progress": t.watchSlidesProgress
					}], t.containerModifierClass);
					e.push(...s),
					i.classList.add(...e),
					this.emitContainerClasses()
			  },
			  removeClasses: function() {
					var {el: e, classNames: t} = this;
					e.classList.remove(...t),
					this.emitContainerClasses()
			  }
		 }
	}
	  , L = {};
	class I {
		 constructor() {
			  let e, t;
			  for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
					i[r] = arguments[r];
			  1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e,t] = i,
			  t = f({}, t = t || {}),
			  e && !t.el && (t.el = e);
			  var a = m();
			  if (t.el && "string" == typeof t.el && 1 < a.querySelectorAll(t.el).length) {
					const o = [];
					return a.querySelectorAll(t.el).forEach(e=>{
						 e = f({}, t, {
							  el: e
						 });
						 o.push(new I(e))
					}
					),
					o
			  }
			  const l = this
				 , n = (l.__swiper__ = !0,
			  l.support = g(),
			  l.device = G({
					userAgent: t.userAgent
			  }),
			  l.browser = D(),
			  l.eventsListeners = {},
			  l.eventsAnyListeners = [],
			  l.modules = [...l.__modules__],
			  t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules),
			  {});
			  l.modules.forEach(e=>{
					var i, r;
					e({
						 params: t,
						 swiper: l,
						 extendParams: (i = t,
						 r = n,
						 function(e) {
							  void 0 === e && (e = {});
							  var t = Object.keys(e)[0]
								 , s = e[t];
							  "object" == typeof s && null !== s && (!0 === i[t] && (i[t] = {
									enabled: !0
							  }),
							  "navigation" === t && i[t] && i[t].enabled && !i[t].prevEl && !i[t].nextEl && (i[t].auto = !0),
							  0 <= ["pagination", "scrollbar"].indexOf(t) && i[t] && i[t].enabled && !i[t].el && (i[t].auto = !0),
							  t in i && "enabled"in s) && ("object" != typeof i[t] || "enabled"in i[t] || (i[t].enabled = !0),
							  i[t] || (i[t] = {
									enabled: !1
							  })),
							  f(r, e)
						 }
						 ),
						 on: l.on.bind(l),
						 once: l.once.bind(l),
						 off: l.off.bind(l),
						 emit: l.emit.bind(l)
					})
			  }
			  );
			  a = f({}, F, n);
			  return l.params = f({}, a, L, t),
			  l.originalParams = f({}, l.params),
			  l.passedParams = f({}, t),
			  l.params && l.params.on && Object.keys(l.params.on).forEach(e=>{
					l.on(e, l.params.on[e])
			  }
			  ),
			  l.params && l.params.onAny && l.onAny(l.params.onAny),
			  Object.assign(l, {
					enabled: l.params.enabled,
					el: e,
					classNames: [],
					slides: [],
					slidesGrid: [],
					snapGrid: [],
					slidesSizesGrid: [],
					isHorizontal() {
						 return "horizontal" === l.params.direction
					},
					isVertical() {
						 return "vertical" === l.params.direction
					},
					activeIndex: 0,
					realIndex: 0,
					isBeginning: !0,
					isEnd: !1,
					translate: 0,
					previousTranslate: 0,
					progress: 0,
					velocity: 0,
					animating: !1,
					cssOverflowAdjustment() {
						 return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
					},
					allowSlideNext: l.params.allowSlideNext,
					allowSlidePrev: l.params.allowSlidePrev,
					touchEventsData: {
						 isTouched: void 0,
						 isMoved: void 0,
						 allowTouchCallbacks: void 0,
						 touchStartTime: void 0,
						 isScrolling: void 0,
						 currentTranslate: void 0,
						 startTranslate: void 0,
						 allowThresholdMove: void 0,
						 focusableElements: l.params.focusableElements,
						 lastClickTime: 0,
						 clickTimeout: void 0,
						 velocities: [],
						 allowMomentumBounce: void 0,
						 startMoving: void 0,
						 pointerId: null,
						 touchId: null
					},
					allowClick: !0,
					allowTouchMove: l.params.allowTouchMove,
					touches: {
						 startX: 0,
						 startY: 0,
						 currentX: 0,
						 currentY: 0,
						 diff: 0
					},
					imagesToLoad: [],
					imagesLoaded: 0
			  }),
			  l.emit("_swiper"),
			  l.params.init && l.init(),
			  l
		 }
		 getDirectionLabel(e) {
			  return this.isHorizontal() ? e : {
					width: "height",
					"margin-top": "margin-left",
					"margin-bottom ": "margin-right",
					"margin-left": "margin-top",
					"margin-right": "margin-bottom",
					"padding-left": "padding-top",
					"padding-right": "padding-bottom",
					marginRight: "marginBottom"
			  }[e]
		 }
		 getSlideIndex(e) {
			  var {slidesEl: t, params: s} = this
				 , t = S(q(t, `.${s.slideClass}, swiper-slide`)[0]);
			  return S(e) - t
		 }
		 getSlideIndexByData(t) {
			  return this.getSlideIndex(this.slides.filter(e=>+e.getAttribute("data-swiper-slide-index") === t)[0])
		 }
		 recalcSlides() {
			  var {slidesEl: e, params: t} = this;
			  this.slides = q(e, `.${t.slideClass}, swiper-slide`)
		 }
		 enable() {
			  var e = this;
			  e.enabled || (e.enabled = !0,
			  e.params.grabCursor && e.setGrabCursor(),
			  e.emit("enable"))
		 }
		 disable() {
			  var e = this;
			  e.enabled && (e.enabled = !1,
			  e.params.grabCursor && e.unsetGrabCursor(),
			  e.emit("disable"))
		 }
		 setProgress(e, t) {
			  var s = this
				 , i = (e = Math.min(Math.max(e, 0), 1),
			  s.minTranslate())
				 , r = s.maxTranslate();
			  s.translateTo((r - i) * e + i, void 0 === t ? 0 : t),
			  s.updateActiveIndex(),
			  s.updateSlidesClasses()
		 }
		 emitContainerClasses() {
			  const t = this;
			  var e;
			  t.params._emitClasses && t.el && (e = t.el.className.split(" ").filter(e=>0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass)),
			  t.emit("_containerClasses", e.join(" ")))
		 }
		 getSlideClasses(e) {
			  const t = this;
			  return t.destroyed ? "" : e.className.split(" ").filter(e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
		 }
		 emitSlidesClasses() {
			  const s = this;
			  if (s.params._emitClasses && s.el) {
					const i = [];
					s.slides.forEach(e=>{
						 var t = s.getSlideClasses(e);
						 i.push({
							  slideEl: e,
							  classNames: t
						 }),
						 s.emit("_slideClass", e, t)
					}
					),
					s.emit("_slideClasses", i)
			  }
		 }
		 slidesPerViewDynamic(e, t) {
			  void 0 === e && (e = "current"),
			  void 0 === t && (t = !1);
			  var {params: s, slides: i, slidesGrid: r, slidesSizesGrid: a, size: l, activeIndex: n} = this;
			  let o = 1;
			  if ("number" == typeof s.slidesPerView)
					return s.slidesPerView;
			  if (s.centeredSlides) {
					let t = i[n] ? i[n].swiperSlideSize : 0, s;
					for (let e = n + 1; e < i.length; e += 1)
						 i[e] && !s && (t += i[e].swiperSlideSize,
						 o += 1,
						 t > l) && (s = !0);
					for (let e = n - 1; 0 <= e; --e)
						 i[e] && !s && (t += i[e].swiperSlideSize,
						 o += 1,
						 t > l) && (s = !0)
			  } else if ("current" === e)
					for (let e = n + 1; e < i.length; e += 1)
						 (t ? r[e] + a[e] - r[n] < l : r[e] - r[n] < l) && (o += 1);
			  else
					for (let e = n - 1; 0 <= e; --e)
						 r[n] - r[e] < l && (o += 1);
			  return o
		 }
		 update() {
			  const t = this;
			  if (t && !t.destroyed) {
					var s, {snapGrid: i, params: r} = t;
					r.breakpoints && t.setBreakpoint(),
					[...t.el.querySelectorAll('[loading="lazy"]')].forEach(e=>{
						 e.complete && w(t, e)
					}
					),
					t.updateSize(),
					t.updateSlides(),
					t.updateProgress(),
					t.updateSlidesClasses();
					let e;
					function a() {
						 var e = t.rtlTranslate ? -1 * t.translate : t.translate
							, e = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
						 t.setTranslate(e),
						 t.updateActiveIndex(),
						 t.updateSlidesClasses()
					}
					r.freeMode && r.freeMode.enabled && !r.cssMode ? (a(),
					r.autoHeight && t.updateAutoHeight()) : (e = ("auto" === r.slidesPerView || 1 < r.slidesPerView) && t.isEnd && !r.centeredSlides ? (s = (t.virtual && r.virtual.enabled ? t.virtual : t).slides,
					t.slideTo(s.length - 1, 0, !1, !0)) : t.slideTo(t.activeIndex, 0, !1, !0)) || a(),
					r.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
					t.emit("update")
			  }
		 }
		 changeDirection(t, e) {
			  void 0 === e && (e = !0);
			  var s = this
				 , i = s.params.direction;
			  return (t = t || ("horizontal" === i ? "vertical" : "horizontal")) === i || "horizontal" !== t && "vertical" !== t || (s.el.classList.remove("" + s.params.containerModifierClass + i),
			  s.el.classList.add("" + s.params.containerModifierClass + t),
			  s.emitContainerClasses(),
			  s.params.direction = t,
			  s.slides.forEach(e=>{
					"vertical" === t ? e.style.width = "" : e.style.height = ""
			  }
			  ),
			  s.emit("changeDirection"),
			  e && s.update()),
			  s
		 }
		 changeLanguageDirection(e) {
			  var t = this;
			  t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
			  t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
			  t.rtl ? (t.el.classList.add(t.params.containerModifierClass + "rtl"),
			  t.el.dir = "rtl") : (t.el.classList.remove(t.params.containerModifierClass + "rtl"),
			  t.el.dir = "ltr"),
			  t.update())
		 }
		 mount(s) {
			  const i = this;
			  if (!i.mounted) {
					let e = s || i.params.el;
					if (!(e = "string" == typeof e ? document.querySelector(e) : e))
						 return !1;
					e.swiper = i,
					e.parentNode && e.parentNode.host && "SWIPER-CONTAINER" === e.parentNode.host.nodeName && (i.isElement = !0);
					const r = ()=>"." + (i.params.wrapperClass || "").trim().split(" ").join(".");
					let t = e && e.shadowRoot && e.shadowRoot.querySelector ? e.shadowRoot.querySelector(r()) : q(e, r())[0];
					!t && i.params.createElements && (t = c("div", i.params.wrapperClass),
					e.append(t),
					q(e, "." + i.params.slideClass).forEach(e=>{
						 t.append(e)
					}
					)),
					Object.assign(i, {
						 el: e,
						 wrapperEl: t,
						 slidesEl: i.isElement && !e.parentNode.host.slideSlots ? e.parentNode.host : t,
						 hostEl: i.isElement ? e.parentNode.host : e,
						 mounted: !0,
						 rtl: "rtl" === e.dir.toLowerCase() || "rtl" === W(e, "direction"),
						 rtlTranslate: "horizontal" === i.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === W(e, "direction")),
						 wrongRTL: "-webkit-box" === W(t, "display")
					})
			  }
			  return !0
		 }
		 init(e) {
			  const t = this;
			  return t.initialized || !1 !== t.mount(e) && (t.emit("beforeInit"),
			  t.params.breakpoints && t.setBreakpoint(),
			  t.addClasses(),
			  t.updateSize(),
			  t.updateSlides(),
			  t.params.watchOverflow && t.checkOverflow(),
			  t.params.grabCursor && t.enabled && t.setGrabCursor(),
			  t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
			  t.params.loop && t.loopCreate(),
			  t.attachEvents(),
			  e = [...t.el.querySelectorAll('[loading="lazy"]')],
			  t.isElement && e.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
			  e.forEach(e=>{
					e.complete ? w(t, e) : e.addEventListener("load", e=>{
						 w(t, e.target)
					}
					)
			  }
			  ),
			  T(t),
			  t.initialized = !0,
			  T(t),
			  t.emit("init"),
			  t.emit("afterInit")),
			  t
		 }
		 destroy(e, t) {
			  void 0 === e && (e = !0),
			  void 0 === t && (t = !0);
			  const s = this
				 , {params: i, el: r, wrapperEl: a, slides: l} = s;
			  if (void 0 !== s.params && !s.destroyed) {
					if (s.emit("beforeDestroy"),
					s.initialized = !1,
					s.detachEvents(),
					i.loop && s.loopDestroy(),
					t && (s.removeClasses(),
					r.removeAttribute("style"),
					a.removeAttribute("style"),
					l) && l.length && l.forEach(e=>{
						 e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass),
						 e.removeAttribute("style"),
						 e.removeAttribute("data-swiper-slide-index")
					}
					),
					s.emit("destroy"),
					Object.keys(s.eventsListeners).forEach(e=>{
						 s.off(e)
					}
					),
					!1 !== e) {
						 s.el.swiper = null;
						 {
							  t = s;
							  const n = t;
							  Object.keys(n).forEach(e=>{
									try {
										 n[e] = null
									} catch (e) {}
									try {
										 delete n[e]
									} catch (e) {}
							  }
							  )
						 }
					}
					s.destroyed = !0
			  }
			  return null
		 }
		 static extendDefaults(e) {
			  f(L, e)
		 }
		 static get extendedDefaults() {
			  return L
		 }
		 static get defaults() {
			  return F
		 }
		 static installModule(e) {
			  I.prototype.__modules__ || (I.prototype.__modules__ = []);
			  var t = I.prototype.__modules__;
			  "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
		 }
		 static use(e) {
			  return Array.isArray(e) ? e.forEach(e=>I.installModule(e)) : I.installModule(e),
			  I
		 }
	}
	function k(e) {
		 return "." + (e = void 0 === e ? "" : e).trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")
	}
	function V(e) {
		 let {swiper: h, extendParams: t, on: s, emit: v} = e;
		 e = "swiper-pagination";
		 t({
			  pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: e=>e,
					formatFractionTotal: e=>e,
					bulletClass: e + "-bullet",
					bulletActiveClass: e + "-bullet-active",
					modifierClass: e + "-",
					currentClass: e + "-current",
					totalClass: e + "-total",
					hiddenClass: e + "-hidden",
					progressbarFillClass: e + "-progressbar-fill",
					progressbarOppositeClass: e + "-progressbar-opposite",
					clickableClass: e + "-clickable",
					lockClass: e + "-lock",
					horizontalClass: e + "-horizontal",
					verticalClass: e + "-vertical",
					paginationDisabledClass: e + "-disabled"
			  }
		 }),
		 h.pagination = {
			  el: null,
			  bullets: []
		 };
		 let f, g = 0;
		 const w = e=>(Array.isArray(e) ? e : [e]).filter(e=>!!e);
		 function a() {
			  return !h.params.pagination.el || !h.pagination.el || Array.isArray(h.pagination.el) && 0 === h.pagination.el.length
		 }
		 function b(e, t) {
			  var s = h.params.pagination["bulletActiveClass"];
			  (e = e && e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) && (e.classList.add(s + "-" + t),
			  e = e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) && e.classList.add(s + `-${t}-` + t)
		 }
		 function l(e) {
			  var t = e.target.closest(k(h.params.pagination.bulletClass));
			  t && (e.preventDefault(),
			  e = S(t) * h.params.slidesPerGroup,
			  h.params.loop ? h.realIndex !== e && h.slideToLoop(e) : h.slideTo(e))
		 }
		 function i() {
			  var r = h.rtl;
			  const l = h.params.pagination;
			  if (!a()) {
					var n = h.pagination.el
					  , n = w(n);
					let a, t;
					var o = (h.virtual && h.params.virtual.enabled ? h.virtual : h).slides.length;
					const p = h.params.loop ? Math.ceil(o / h.params.slidesPerGroup) : h.snapGrid.length;
					if (h.params.loop ? (t = h.previousRealIndex || 0,
					a = 1 < h.params.slidesPerGroup ? Math.floor(h.realIndex / h.params.slidesPerGroup) : h.realIndex) : void 0 !== h.snapIndex ? (a = h.snapIndex,
					t = h.previousSnapIndex) : (t = h.previousIndex || 0,
					a = h.activeIndex || 0),
					"bullets" === l.type && h.pagination.bullets && 0 < h.pagination.bullets.length) {
						 var d = h.pagination.bullets;
						 let s, i, e;
						 if (l.dynamicBullets && (f = Y(d[0], h.isHorizontal() ? "width" : "height", !0),
						 n.forEach(e=>{
							  e.style[h.isHorizontal() ? "width" : "height"] = f * (l.dynamicMainBullets + 4) + "px"
						 }
						 ),
						 1 < l.dynamicMainBullets && void 0 !== t && ((g += a - (t || 0)) > l.dynamicMainBullets - 1 ? g = l.dynamicMainBullets - 1 : g < 0 && (g = 0)),
						 s = Math.max(a - g, 0),
						 i = s + (Math.min(d.length, l.dynamicMainBullets) - 1),
						 e = (i + s) / 2),
						 d.forEach(e=>{
							  var t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e=>"" + l.bulletActiveClass + e)].map(e=>"string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
							  e.classList.remove(...t)
						 }
						 ),
						 1 < n.length)
							  d.forEach(e=>{
									var t = S(e);
									t === a ? e.classList.add(...l.bulletActiveClass.split(" ")) : h.isElement && e.setAttribute("part", "bullet"),
									l.dynamicBullets && (t >= s && t <= i && e.classList.add(...(l.bulletActiveClass + "-main").split(" ")),
									t === s && b(e, "prev"),
									t === i) && b(e, "next")
							  }
							  );
						 else {
							  o = d[a];
							  if (o && o.classList.add(...l.bulletActiveClass.split(" ")),
							  h.isElement && d.forEach((e,t)=>{
									e.setAttribute("part", t === a ? "bullet-active" : "bullet")
							  }
							  ),
							  l.dynamicBullets) {
									var o = d[s]
									  , c = d[i];
									for (let e = s; e <= i; e += 1)
										 d[e] && d[e].classList.add(...(l.bulletActiveClass + "-main").split(" "));
									b(o, "prev"),
									b(c, "next")
							  }
						 }
						 if (l.dynamicBullets) {
							  o = Math.min(d.length, l.dynamicMainBullets + 4);
							  const u = (f * o - f) / 2 - e * f
								 , m = r ? "right" : "left";
							  d.forEach(e=>{
									e.style[h.isHorizontal() ? m : "top"] = u + "px"
							  }
							  )
						 }
					}
					n.forEach((i,e)=>{
						 if ("fraction" === l.type && (i.querySelectorAll(k(l.currentClass)).forEach(e=>{
							  e.textContent = l.formatFractionCurrent(a + 1)
						 }
						 ),
						 i.querySelectorAll(k(l.totalClass)).forEach(e=>{
							  e.textContent = l.formatFractionTotal(p)
						 }
						 )),
						 "progressbar" === l.type) {
							  let e;
							  e = l.progressbarOpposite ? h.isHorizontal() ? "vertical" : "horizontal" : h.isHorizontal() ? "horizontal" : "vertical";
							  var r = (a + 1) / p;
							  let t = 1
								 , s = 1;
							  "horizontal" === e ? t = r : s = r,
							  i.querySelectorAll(k(l.progressbarFillClass)).forEach(e=>{
									e.style.transform = `translate3d(0,0,0) scaleX(${t}) scaleY(${s})`,
									e.style.transitionDuration = h.params.speed + "ms"
							  }
							  )
						 }
						 "custom" === l.type && l.renderCustom ? (i.innerHTML = l.renderCustom(h, a + 1, p),
						 0 === e && v("paginationRender", i)) : (0 === e && v("paginationRender", i),
						 v("paginationUpdate", i)),
						 h.params.watchOverflow && h.enabled && i.classList[h.isLocked ? "add" : "remove"](l.lockClass)
					}
					)
			  }
		 }
		 function r() {
			  const i = h.params.pagination;
			  if (!a()) {
					var e = h.virtual && h.params.virtual.enabled ? h.virtual.slides.length : h.grid && 1 < h.params.grid.rows ? h.slides.length / Math.ceil(h.params.grid.rows) : h.slides.length
					  , t = h.pagination.el
					  , t = w(t);
					let s = "";
					if ("bullets" === i.type) {
						 let t = h.params.loop ? Math.ceil(e / h.params.slidesPerGroup) : h.snapGrid.length;
						 h.params.freeMode && h.params.freeMode.enabled && t > e && (t = e);
						 for (let e = 0; e < t; e += 1)
							  i.renderBullet ? s += i.renderBullet.call(h, e, i.bulletClass) : s += `<${i.bulletElement} ${h.isElement ? 'part="bullet"' : ""} class="${i.bulletClass}"></${i.bulletElement}>`
					}
					"fraction" === i.type && (s = i.renderFraction ? i.renderFraction.call(h, i.currentClass, i.totalClass) : `<span class="${i.currentClass}"></span>` + " / " + `<span class="${i.totalClass}"></span>`),
					"progressbar" === i.type && (s = i.renderProgressbar ? i.renderProgressbar.call(h, i.progressbarFillClass) : `<span class="${i.progressbarFillClass}"></span>`),
					h.pagination.bullets = [],
					t.forEach(e=>{
						 "custom" !== i.type && (e.innerHTML = s || ""),
						 "bullets" === i.type && h.pagination.bullets.push(...e.querySelectorAll(k(i.bulletClass)))
					}
					),
					"custom" !== i.type && v("paginationRender", t[0])
			  }
		 }
		 function n() {
			  var s, i, r, a;
			  h.params.pagination = (s = h,
			  i = h.originalParams.pagination,
			  r = h.params.pagination,
			  a = {
					el: "swiper-pagination"
			  },
			  s.params.createElements && Object.keys(a).forEach(t=>{
					if (!r[t] && !0 === r.auto) {
						 let e = q(s.el, "." + a[t])[0];
						 e || ((e = c("div", a[t])).className = a[t],
						 s.el.append(e)),
						 r[t] = e,
						 i[t] = e
					}
			  }
			  ),
			  r);
			  const t = h.params.pagination;
			  if (t.el) {
					let e;
					(e = (e = (e = "string" == typeof t.el && h.isElement ? h.el.querySelector(t.el) : e) || "string" != typeof t.el ? e : [...document.querySelectorAll(t.el)]) || t.el) && 0 !== e.length && (h.params.uniqueNavElements && "string" == typeof t.el && Array.isArray(e) && 1 < e.length && 1 < (e = [...h.el.querySelectorAll(t.el)]).length && (e = e.filter(e=>p(e, ".swiper")[0] === h.el)[0]),
					Array.isArray(e) && 1 === e.length && (e = e[0]),
					Object.assign(h.pagination, {
						 el: e
					}),
					(e = w(e)).forEach(e=>{
						 "bullets" === t.type && t.clickable && e.classList.add(...(t.clickableClass || "").split(" ")),
						 e.classList.add(t.modifierClass + t.type),
						 e.classList.add(h.isHorizontal() ? t.horizontalClass : t.verticalClass),
						 "bullets" === t.type && t.dynamicBullets && (e.classList.add("" + t.modifierClass + t.type + "-dynamic"),
						 g = 0,
						 t.dynamicMainBullets < 1) && (t.dynamicMainBullets = 1),
						 "progressbar" === t.type && t.progressbarOpposite && e.classList.add(t.progressbarOppositeClass),
						 t.clickable && e.addEventListener("click", l),
						 h.enabled || e.classList.add(t.lockClass)
					}
					))
			  }
		 }
		 function o() {
			  const t = h.params.pagination;
			  var e;
			  a() || ((e = h.pagination.el) && (e = w(e)).forEach(e=>{
					e.classList.remove(t.hiddenClass),
					e.classList.remove(t.modifierClass + t.type),
					e.classList.remove(h.isHorizontal() ? t.horizontalClass : t.verticalClass),
					t.clickable && (e.classList.remove(...(t.clickableClass || "").split(" ")),
					e.removeEventListener("click", l))
			  }
			  ),
			  h.pagination.bullets && h.pagination.bullets.forEach(e=>e.classList.remove(...t.bulletActiveClass.split(" "))))
		 }
		 s("changeDirection", ()=>{
			  if (h.pagination && h.pagination.el) {
					const t = h.params.pagination;
					var e = h.pagination["el"];
					(e = w(e)).forEach(e=>{
						 e.classList.remove(t.horizontalClass, t.verticalClass),
						 e.classList.add(h.isHorizontal() ? t.horizontalClass : t.verticalClass)
					}
					)
			  }
		 }
		 ),
		 s("init", ()=>{
			  (!1 === h.params.pagination.enabled ? d : (n(),
			  r(),
			  i))()
		 }
		 ),
		 s("activeIndexChange", ()=>{
			  void 0 === h.snapIndex && i()
		 }
		 ),
		 s("snapIndexChange", ()=>{
			  i()
		 }
		 ),
		 s("snapGridLengthChange", ()=>{
			  r(),
			  i()
		 }
		 ),
		 s("destroy", ()=>{
			  o()
		 }
		 ),
		 s("enable disable", ()=>{
			  var e = h.pagination["el"];
			  e && (e = w(e)).forEach(e=>e.classList[h.enabled ? "remove" : "add"](h.params.pagination.lockClass))
		 }
		 ),
		 s("lock unlock", ()=>{
			  i()
		 }
		 ),
		 s("click", (e,t)=>{
			  var t = t.target
				 , s = w(h.pagination.el);
			  h.params.pagination.el && h.params.pagination.hideOnClick && s && 0 < s.length && !t.classList.contains(h.params.pagination.bulletClass) && (h.navigation && (h.navigation.nextEl && t === h.navigation.nextEl || h.navigation.prevEl && t === h.navigation.prevEl) || (!0 === s[0].classList.contains(h.params.pagination.hiddenClass) ? v("paginationShow") : v("paginationHide"),
			  s.forEach(e=>e.classList.toggle(h.params.pagination.hiddenClass))))
		 }
		 );
		 const d = ()=>{
			  h.el.classList.add(h.params.pagination.paginationDisabledClass);
			  var e = h.pagination["el"];
			  e && (e = w(e)).forEach(e=>e.classList.add(h.params.pagination.paginationDisabledClass)),
			  o()
		 }
		 ;
		 Object.assign(h.pagination, {
			  enable: ()=>{
					h.el.classList.remove(h.params.pagination.paginationDisabledClass);
					var e = h.pagination["el"];
					e && (e = w(e)).forEach(e=>e.classList.remove(h.params.pagination.paginationDisabledClass)),
					n(),
					r(),
					i()
			  }
			  ,
			  disable: d,
			  render: r,
			  update: i,
			  init: n,
			  destroy: o
		 })
	}
	Object.keys(P).forEach(t=>{
		 Object.keys(P[t]).forEach(e=>{
			  I.prototype[e] = P[t][e]
		 }
		 )
	}
	),
	I.use([function(e) {
		 let {swiper: a, on: t, emit: s} = e;
		 const i = h();
		 let r = null
			, l = null;
		 const n = ()=>{
			  a && !a.destroyed && a.initialized && (s("beforeResize"),
			  s("resize"))
		 }
			, o = ()=>{
			  a && !a.destroyed && a.initialized && s("orientationchange")
		 }
		 ;
		 t("init", ()=>{
			  a.params.resizeObserver && void 0 !== i.ResizeObserver ? a && !a.destroyed && a.initialized && (r = new ResizeObserver(s=>{
					l = i.requestAnimationFrame(()=>{
						 var {width: e, height: t} = a;
						 let i = e
							, r = t;
						 s.forEach(e=>{
							  var {contentBoxSize: e, contentRect: t, target: s} = e;
							  s && s !== a.el || (i = t ? t.width : (e[0] || e).inlineSize,
							  r = t ? t.height : (e[0] || e).blockSize)
						 }
						 ),
						 i === e && r === t || n()
					}
					)
			  }
			  )).observe(a.el) : (i.addEventListener("resize", n),
			  i.addEventListener("orientationchange", o))
		 }
		 ),
		 t("destroy", ()=>{
			  l && i.cancelAnimationFrame(l),
			  r && r.unobserve && a.el && (r.unobserve(a.el),
			  r = null),
			  i.removeEventListener("resize", n),
			  i.removeEventListener("orientationchange", o)
		 }
		 )
	}
	, function(e) {
		 let {swiper: i, extendParams: t, on: s, emit: r} = e;
		 function a(e, t) {
			  void 0 === t && (t = {});
			  var s = new (n.MutationObserver || n.WebkitMutationObserver)(e=>{
					var t;
					i.__preventObserver__ || (1 === e.length ? r("observerUpdate", e[0]) : (t = function() {
						 r("observerUpdate", e[0])
					}
					,
					n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)))
			  }
			  );
			  s.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
			  }),
			  l.push(s)
		 }
		 const l = []
			, n = h();
		 t({
			  observer: !1,
			  observeParents: !1,
			  observeSlideChildren: !1
		 }),
		 s("init", ()=>{
			  if (i.params.observer) {
					if (i.params.observeParents) {
						 var t = p(i.hostEl);
						 for (let e = 0; e < t.length; e += 1)
							  a(t[e])
					}
					a(i.hostEl, {
						 childList: i.params.observeSlideChildren
					}),
					a(i.wrapperEl, {
						 attributes: !1
					})
			  }
		 }
		 ),
		 s("destroy", ()=>{
			  l.forEach(e=>{
					e.disconnect()
			  }
			  ),
			  l.splice(0, l.length)
		 }
		 )
	}
	]),
	new I("#neurographics-slider",{
		 modules: [V],
		 spaceBetween: 8,
		 centeredSlides: !0,
		 pagination: {
			  el: ".neurographics-pagination",
			  dynamicBullets: !0,
			  clickable: !0
		 }
	}),
	new I("#reviews-slider",{
		 modules: [V],
		 spaceBetween: 8,
		 centeredSlides: !0,
		 autoHeight: !0,
		 pagination: {
			  el: ".reviews-pagination",
			  dynamicBullets: !0,
			  clickable: !0
		 }
	})
}();
