/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sumMajorCredits: () => (/* binding */ sumMajorCredits),
/* harmony export */   sumMinorCredits: () => (/* binding */ sumMinorCredits)
/* harmony export */ });
// 2️⃣ Functions to sum credits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'major'
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'minor'
    };
}
// 3️⃣ Example usage
var math = { credits: 3, __brand: 'major' };
var physics = { credits: 4, __brand: 'major' };
var biology = { credits: 2, __brand: 'minor' };
var chemistry = { credits: 1, __brand: 'minor' };
var totalMajor = sumMajorCredits(math, physics);
var totalMinor = sumMinorCredits(biology, chemistry);
console.log('Total Major Credits:', totalMajor.credits); // 7
console.log('Total Minor Credits:', totalMinor.credits); // 3

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNLQSwrQkFBK0I7QUFFeEIsU0FBUyxlQUFlLENBQzdCLFFBQXNCLEVBQ3RCLFFBQXNCO0lBRXRCLE9BQU87UUFDTCxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTztRQUM1QyxPQUFPLEVBQUUsT0FBTztLQUNqQixDQUFDO0FBQ0osQ0FBQztBQUVNLFNBQVMsZUFBZSxDQUM3QixRQUFzQixFQUN0QixRQUFzQjtJQUV0QixPQUFPO1FBQ0wsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU87UUFDNUMsT0FBTyxFQUFFLE9BQU87S0FDakIsQ0FBQztBQUNKLENBQUM7QUFFRCxvQkFBb0I7QUFDcEIsSUFBTSxJQUFJLEdBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDNUQsSUFBTSxPQUFPLEdBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDL0QsSUFBTSxPQUFPLEdBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDL0QsSUFBTSxTQUFTLEdBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFFakUsSUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNsRCxJQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRXZELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUUsSUFBSTtBQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFFLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIDHvuI/ig6MgRGVmaW5lIGludGVyZmFjZXMgd2l0aCBicmFuZGluZyBmb3Igbm9taW5hbCB0eXBpbmdcbmV4cG9ydCBpbnRlcmZhY2UgTWFqb3JDcmVkaXRzIHtcbiAgY3JlZGl0czogbnVtYmVyO1xuICBfX2JyYW5kOiAnbWFqb3InOyAgLy8gdW5pcXVlIGlkZW50aWZpZXIgZm9yIE1ham9yQ3JlZGl0c1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1pbm9yQ3JlZGl0cyB7XG4gIGNyZWRpdHM6IG51bWJlcjtcbiAgX19icmFuZDogJ21pbm9yJzsgIC8vIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBNaW5vckNyZWRpdHNcbn1cblxuLy8gMu+4j+KDoyBGdW5jdGlvbnMgdG8gc3VtIGNyZWRpdHNcblxuZXhwb3J0IGZ1bmN0aW9uIHN1bU1ham9yQ3JlZGl0cyhcbiAgc3ViamVjdDE6IE1ham9yQ3JlZGl0cyxcbiAgc3ViamVjdDI6IE1ham9yQ3JlZGl0c1xuKTogTWFqb3JDcmVkaXRzIHtcbiAgcmV0dXJuIHtcbiAgICBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcbiAgICBfX2JyYW5kOiAnbWFqb3InXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1NaW5vckNyZWRpdHMoXG4gIHN1YmplY3QxOiBNaW5vckNyZWRpdHMsXG4gIHN1YmplY3QyOiBNaW5vckNyZWRpdHNcbik6IE1pbm9yQ3JlZGl0cyB7XG4gIHJldHVybiB7XG4gICAgY3JlZGl0czogc3ViamVjdDEuY3JlZGl0cyArIHN1YmplY3QyLmNyZWRpdHMsXG4gICAgX19icmFuZDogJ21pbm9yJ1xuICB9O1xufVxuXG4vLyAz77iP4oOjIEV4YW1wbGUgdXNhZ2VcbmNvbnN0IG1hdGg6IE1ham9yQ3JlZGl0cyA9IHsgY3JlZGl0czogMywgX19icmFuZDogJ21ham9yJyB9O1xuY29uc3QgcGh5c2ljczogTWFqb3JDcmVkaXRzID0geyBjcmVkaXRzOiA0LCBfX2JyYW5kOiAnbWFqb3InIH07XG5jb25zdCBiaW9sb2d5OiBNaW5vckNyZWRpdHMgPSB7IGNyZWRpdHM6IDIsIF9fYnJhbmQ6ICdtaW5vcicgfTtcbmNvbnN0IGNoZW1pc3RyeTogTWlub3JDcmVkaXRzID0geyBjcmVkaXRzOiAxLCBfX2JyYW5kOiAnbWlub3InIH07XG5cbmNvbnN0IHRvdGFsTWFqb3IgPSBzdW1NYWpvckNyZWRpdHMobWF0aCwgcGh5c2ljcyk7XG5jb25zdCB0b3RhbE1pbm9yID0gc3VtTWlub3JDcmVkaXRzKGJpb2xvZ3ksIGNoZW1pc3RyeSk7XG5cbmNvbnNvbGUubG9nKCdUb3RhbCBNYWpvciBDcmVkaXRzOicsIHRvdGFsTWFqb3IuY3JlZGl0cyk7ICAvLyA3XG5jb25zb2xlLmxvZygnVG90YWwgTWlub3IgQ3JlZGl0czonLCB0b3RhbE1pbm9yLmNyZWRpdHMpOyAgLy8gM1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==