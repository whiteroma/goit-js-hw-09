!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("iU1Pc"),l=r("dbdyf");const u={input:document.querySelector("input#datetime-picker"),timerHtml:document.querySelector(".timer"),btnStart:document.querySelector("button[data-start]"),seconds:document.querySelector("span[data-seconds]"),minutes:document.querySelector("span[data-minutes]"),hours:document.querySelector("span[data-hours]"),days:document.querySelector("span[data-days]")};u.btnStart.disabled=!0;const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(e(a).Notify.failure("Please choose a date in the future"),u.btnStart.disabled=!0):u.btnStart.disabled=!1}};(0,l.default)(u.input,d);function s(e){return e.toString().padStart(2,"0")}u.btnStart.addEventListener("click",(()=>{u.timerHtml.style.color="blue",u.btnStart.disabled=!0,u.input.disabled=!0;let t=setInterval((()=>{let n=new Date(u.input.value)-new Date;if(u.btnStart.disabled&&u.input.disabled&&(u.input.style.cursor="not-allowed",u.btnStart.style.cursor="not-allowed"),n>=0){let e=function(e){const t=6e4,n=36e5,o=24*n;return{days:Math.floor(e/o),hours:Math.floor(e%o/n),minutes:Math.floor(e%o%n/t),seconds:Math.floor(e%o%n%t/1e3)}}(n);u.days.inputContent=s(e.days),u.hours.inputContent=s(e.hours),u.minutes.inputContent=s(e.minutes),u.seconds.inputContent=s(e.seconds),n<=1e4&&(u.timerHtml.style.color="tomato")}else e(a).Notify.success("Countdown finished"),u.timerHtml.style.color="black",clearInterval(t)}),1e3)}))}();
//# sourceMappingURL=02-timer.3b04bbe8.js.map
