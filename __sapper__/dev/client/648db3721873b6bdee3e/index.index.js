(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/routes/index.svelte":
/*!*********************************!*\
  !*** ./src/routes/index.svelte ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* src/routes/index.svelte generated by Svelte v3.6.4 */


const file = "src/routes/index.svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = 'svelte-14u4wlq-style';
	style.textContent = "body{color:#ffffff;font-family:'Raleway', sans-serif;letter-spacing:1px;background-color:#eee;line-height:1}h1{color:#666666}h2{color:#666666;letter-spacing:2px;font-size:36px;width:100%;background-color:#ddd;padding:10px 0px 30px 10px;margin:25px 0}h3{color:#666666;font-size:25px;padding:0 0 5px 10px;margin:20px 0;letter-spacing:1.5px}p{color:#666666;font-size:16px;padding:0 5px 5px 10px;margin:10px 0}*{box-sizing:border-box}a{color:#ffffff;text-decoration:none}img.svelte-14u4wlq{display:inline-block}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuICA6Z2xvYmFsKGJvZHkpIHsgXG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiAgOmdsb2JhbChoMSkge1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICB9XG4gIDpnbG9iYWwoaDIpIHtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4IDMwcHggMTBweDtcbiAgICBtYXJnaW46IDI1cHggMDtcbiAgfVxuICA6Z2xvYmFsKGgzKSB7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDAgMCA1cHggMTBweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIH1cbiAgOmdsb2JhbChwKSB7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDAgNXB4IDVweCAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIDpnbG9iYWwoKikge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgOmdsb2JhbChhKSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG48L3N0eWxlPlxuXG5cbjxzdmVsdGU6aGVhZD5cbiAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XG4gIDx0aXRsZT5DYWxvbiBSaGl3YmVpbmEgfCBCb3V0aXF1ZSBzaG9wIGluIHRoZSBoZWFydCBvZiBDYXJkaWZmPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJpbWctcm93XCI+XG4gIDxkaXYgY2xhc3M9XCJpbWctY29sXCI+XG4gICAgPGltZyBhbHQ9XCJjb3Zlci1pbWFnZS0xXCIgIGNsYXNzPVwiY292ZXJcIiBzcmM9XCJhc3NldHMvY292ZXJfaW1hZ2VzL3BvcnRyYWl0LTEuanBnXCIgLz5cbiAgICA8aW1nIGFsdD1cImNvdmVyLWltYWdlLTJcIiAgY2xhc3M9XCJjb3ZlclwiIHNyYz1cImFzc2V0cy9jb3Zlcl9pbWFnZXMvbGFuZHNjYXBlLTEuanBnXCIgLz5cbiAgICA8aW1nIGFsdD1cImNvdmVyLWltYWdlLTNcIiAgY2xhc3M9XCJjb3ZlclwiIHNyYz1cImFzc2V0cy9jb3Zlcl9pbWFnZXMvcG9ydHJhaXQtMi5qcGdcIiAvPlxuICAgIDxpbWcgYWx0PVwiY292ZXItaW1hZ2UtNFwiICBjbGFzcz1cImNvdmVyXCIgc3JjPVwiYXNzZXRzL2NvdmVyX2ltYWdlcy9wb3J0cmFpdC01LmpwZ1wiIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaW1nLWNvbFwiPlxuICAgIDxpbWcgYWx0PVwiY292ZXItaW1hZ2UtNVwiICBjbGFzcz1cImNvdmVyXCIgc3JjPVwiYXNzZXRzL2NvdmVyX2ltYWdlcy9wb3J0cmFpdC05LmpwZ1wiIC8+XG4gICAgPGltZyBhbHQ9XCJjb3Zlci1pbWFnZS02XCIgIGNsYXNzPVwiY292ZXJcIiBzcmM9XCJhc3NldHMvY292ZXJfaW1hZ2VzL3BvcnRyYWl0LTMuanBnXCIgLz5cbiAgICA8aW1nIGFsdD1cImNvdmVyLWltYWdlLTdcIiAgY2xhc3M9XCJjb3ZlclwiIHNyYz1cImFzc2V0cy9jb3Zlcl9pbWFnZXMvc3F1YXJlLTEuanBnXCIgLz5cbiAgICA8aW1nIGFsdD1cImNvdmVyLWltYWdlLThcIiAgY2xhc3M9XCJjb3ZlclwiIHNyYz1cImFzc2V0cy9jb3Zlcl9pbWFnZXMvcG9ydHJhaXQtMTQuanBnXCIgLz4gXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaW1nLWNvbFwiPlxuICAgIDxpbWcgYWx0PVwiY292ZXItaW1hZ2UtOVwiICBjbGFzcz1cImNvdmVyXCIgc3JjPVwiYXNzZXRzL2NvdmVyX2ltYWdlcy9wb3J0cmFpdC02LmpwZ1wiIC8+XG4gICAgPGltZyBhbHQ9XCJjb3Zlci1pbWFnZS0xMFwiICBjbGFzcz1cImNvdmVyXCIgc3JjPVwiYXNzZXRzL2NvdmVyX2ltYWdlcy9wb3J0cmFpdC0xMC5qcGdcIiAvPlxuICAgIDxpbWcgYWx0PVwiY292ZXItaW1hZ2UtMTFcIiAgY2xhc3M9XCJjb3ZlclwiIHNyYz1cImFzc2V0cy9jb3Zlcl9pbWFnZXMvcG9ydHJhaXQtMTEuanBnXCIgLz5cbiAgICA8aW1nIGFsdD1cImNvdmVyLWltYWdlLTEyXCIgIGNsYXNzPVwiY292ZXJcIiBzcmM9XCJhc3NldHMvY292ZXJfaW1hZ2VzL3BvcnRyYWl0LTcuanBnXCIgLz5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpbWctY29sXCI+XG4gICAgPGltZyBhbHQ9XCJjb3Zlci1pbWFnZS0xM1wiICBjbGFzcz1cImNvdmVyXCIgc3JjPVwiYXNzZXRzL2NvdmVyX2ltYWdlcy9zcXVhcmUtMi5qcGdcIiAvPlxuICAgIDxpbWcgYWx0PVwiY292ZXItaW1hZ2UtMTRcIiAgY2xhc3M9XCJjb3ZlclwiIHNyYz1cImFzc2V0cy9jb3Zlcl9pbWFnZXMvcG9ydHJhaXQtMTMuanBnXCIgLz5cbiAgICA8aW1nIGFsdD1cImNvdmVyLWltYWdlLTE1XCIgIGNsYXNzPVwiY292ZXJcIiBzcmM9XCJhc3NldHMvY292ZXJfaW1hZ2VzL3BvcnRyYWl0LTQuanBnXCIgLz5cbiAgICA8aW1nIGFsdD1cImNvdmVyLWltYWdlLTE2XCIgIGNsYXNzPVwiY292ZXJcIiBzcmM9XCJhc3NldHMvY292ZXJfaW1hZ2VzL3BvcnRyYWl0LTguanBnXCIgLz5cbiAgPC9kaXY+XG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1UsSUFBSSxBQUFFLENBQUMsQUFDYixLQUFLLENBQUUsT0FBTyxDQUNkLFdBQVcsQ0FBRSxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQ2xDLGNBQWMsQ0FBRSxHQUFHLENBQ25CLGdCQUFnQixDQUFFLElBQUksQ0FDdEIsV0FBVyxDQUFFLENBQUMsQUFDaEIsQ0FBQyxBQUNPLEVBQUUsQUFBRSxDQUFDLEFBQ1gsS0FBSyxDQUFFLE9BQU8sQUFDaEIsQ0FBQyxBQUNPLEVBQUUsQUFBRSxDQUFDLEFBQ1gsS0FBSyxDQUFFLE9BQU8sQ0FDZCxjQUFjLENBQUUsR0FBRyxDQUNuQixTQUFTLENBQUUsSUFBSSxDQUNmLEtBQUssQ0FBRSxJQUFJLENBQ1gsZ0JBQWdCLENBQUUsSUFBSSxDQUN0QixPQUFPLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUMzQixNQUFNLENBQUUsSUFBSSxDQUFDLENBQUMsQUFDaEIsQ0FBQyxBQUNPLEVBQUUsQUFBRSxDQUFDLEFBQ1gsS0FBSyxDQUFFLE9BQU8sQ0FDZCxTQUFTLENBQUUsSUFBSSxDQUNmLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQ3JCLE1BQU0sQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUNkLGNBQWMsQ0FBRSxLQUFLLEFBQ3ZCLENBQUMsQUFDTyxDQUFDLEFBQUUsQ0FBQyxBQUNWLEtBQUssQ0FBRSxPQUFPLENBQ2QsU0FBUyxDQUFFLElBQUksQ0FDZixPQUFPLENBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUN2QixNQUFNLENBQUUsSUFBSSxDQUFDLENBQUMsQUFDaEIsQ0FBQyxBQUNPLENBQUMsQUFBRSxDQUFDLEFBQ1YsVUFBVSxDQUFFLFVBQVUsQUFDeEIsQ0FBQyxBQUNPLENBQUMsQUFBRSxDQUFDLEFBQ1YsS0FBSyxDQUFFLE9BQU8sQ0FDZCxlQUFlLENBQUUsSUFBSSxBQUN2QixDQUFDLEFBQ0QsR0FBRyxlQUFDLENBQUMsQUFDSCxPQUFPLENBQUUsWUFBWSxBQUN2QixDQUFDIn0= */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, style);
}

function create_fragment(ctx) {
	var meta, t0, div4, div0, img0, t1, img1, t2, img2, t3, img3, t4, div1, img4, t5, img5, t6, img6, t7, img7, t8, div2, img8, t9, img9, t10, img10, t11, img11, t12, div3, img12, t13, img13, t14, img14, t15, img15;

	return {
		c: function create() {
			meta = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("meta");
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			img12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			img15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("img");
			this.h()
		},

		l: function claim(nodes) {
			meta = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "META", { name: true, content: true }, false);
			var meta_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(meta);

			meta_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(nodes, "\n\n");

			div4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true }, false);
			var div4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div4);

			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true }, false);
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);

			img0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img0);

			img0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n    ");

			img1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img1);

			img1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n    ");

			img2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img2);

			img2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div0_nodes, "\n    ");

			img3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img3);

			img3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div4_nodes, "\n  ");

			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true }, false);
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);

			img4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img4_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img4);

			img4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, "\n    ");

			img5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img5_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img5);

			img5_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, "\n    ");

			img6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img6_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img6);

			img6_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div1_nodes, "\n    ");

			img7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img7_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img7);

			img7_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div4_nodes, "\n  ");

			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true }, false);
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);

			img8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img8_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img8);

			img8_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div2_nodes, "\n    ");

			img9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img9_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img9);

			img9_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div2_nodes, "\n    ");

			img10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img10_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img10);

			img10_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div2_nodes, "\n    ");

			img11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img11_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img11);

			img11_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div4_nodes, "\n  ");

			div3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div3);

			img12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img12_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img12);

			img12_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div3_nodes, "\n    ");

			img13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img13_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img13);

			img13_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div3_nodes, "\n    ");

			img14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img14_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img14);

			img14_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(div3_nodes, "\n    ");

			img15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div3_nodes, "IMG", { alt: true, class: true, src: true }, false);
			var img15_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(img15);

			img15_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			div4_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"]);
			this.h();
		},

		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(meta, "name", "viewport");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(meta, "content", "width=device-width, initial-scale=1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(meta, file, 47, 2, 811);
			document.title = "Calon Rhiwbeina | Boutique shop in the heart of Cardiff";
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img0, "alt", "cover-image-1");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img0, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img0, "src", "assets/cover_images/portrait-1.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img0, file, 53, 4, 1019);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img1, "alt", "cover-image-2");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img1, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img1, "src", "assets/cover_images/landscape-1.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img1, file, 54, 4, 1107);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img2, "alt", "cover-image-3");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img2, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img2, "src", "assets/cover_images/portrait-2.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img2, file, 55, 4, 1196);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img3, "alt", "cover-image-4");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img3, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img3, "src", "assets/cover_images/portrait-5.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img3, file, 56, 4, 1284);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div0, "class", "img-col");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 52, 2, 993);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img4, "alt", "cover-image-5");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img4, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img4, "src", "assets/cover_images/portrait-9.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img4, file, 59, 4, 1405);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img5, "alt", "cover-image-6");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img5, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img5, "src", "assets/cover_images/portrait-3.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img5, file, 60, 4, 1493);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img6, "alt", "cover-image-7");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img6, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img6, "src", "assets/cover_images/square-1.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img6, file, 61, 4, 1581);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img7, "alt", "cover-image-8");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img7, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img7, "src", "assets/cover_images/portrait-14.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img7, file, 62, 4, 1667);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div1, "class", "img-col");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 58, 2, 1379);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img8, "alt", "cover-image-9");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img8, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img8, "src", "assets/cover_images/portrait-6.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img8, file, 65, 4, 1790);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img9, "alt", "cover-image-10");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img9, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img9, "src", "assets/cover_images/portrait-10.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img9, file, 66, 4, 1878);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img10, "alt", "cover-image-11");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img10, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img10, "src", "assets/cover_images/portrait-11.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img10, file, 67, 4, 1968);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img11, "alt", "cover-image-12");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img11, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img11, "src", "assets/cover_images/portrait-7.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img11, file, 68, 4, 2058);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div2, "class", "img-col");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 64, 2, 1764);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img12, "alt", "cover-image-13");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img12, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img12, "src", "assets/cover_images/square-2.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img12, file, 71, 4, 2180);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img13, "alt", "cover-image-14");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img13, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img13, "src", "assets/cover_images/portrait-13.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img13, file, 72, 4, 2267);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img14, "alt", "cover-image-15");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img14, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img14, "src", "assets/cover_images/portrait-4.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img14, file, 73, 4, 2357);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img15, "alt", "cover-image-16");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img15, "class", "cover svelte-14u4wlq");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(img15, "src", "assets/cover_images/portrait-8.jpg");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(img15, file, 74, 4, 2446);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div3, "class", "img-col");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div3, file, 70, 2, 2154);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr"])(div4, "class", "img-row");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div4, file, 51, 0, 969);
		},

		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(document.head, meta);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, div4, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, img0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, img1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, img2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div0, img3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, img4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, img5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, img6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div1, img7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, img8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, img9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, img10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div2, img11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, t12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div4, div3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, img12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, img13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t14);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, img14);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, t15);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append"])(div3, img15);
		},

		p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detaching) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(meta);

			if (detaching) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(t0);
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach"])(div4);
			}
		}
	};
}

class Routes extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-14u4wlq-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], []);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI2NDhkYjM3MjE4NzNiNmJkZWUzZS9pbmRleC5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9