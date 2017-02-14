define(["../core","../data/var/dataPriv","../css/var/isHiddenWithinTree"],function(e,n,t){"use strict";function i(n){var t,i=n.ownerDocument,s=n.nodeName,r=o[s];return r?r:(t=i.body.appendChild(i.createElement(s)),r=e.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),o[s]=r,r)}function s(e,s){for(var o,r,l=[],a=0,d=e.length;a<d;a++)r=e[a],r.style&&(o=r.style.display,s?("none"===o&&(l[a]=n.get(r,"display")||null,l[a]||(r.style.display="")),""===r.style.display&&t(r)&&(l[a]=i(r))):"none"!==o&&(l[a]="none",n.set(r,"display",o)));for(a=0;a<d;a++)null!=l[a]&&(e[a].style.display=l[a]);return e}var o={};return e.fn.extend({show:function(){return s(this,!0)},hide:function(){return s(this)},toggle:function(n){return"boolean"==typeof n?n?this.show():this.hide():this.each(function(){t(this)?e(this).show():e(this).hide()})}}),s});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci9qcXVlcnkvc3JjL2Nzcy9zaG93SGlkZS5qcyJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlIiwibiIsInQiLCJpIiwib3duZXJEb2N1bWVudCIsInMiLCJub2RlTmFtZSIsInIiLCJvIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImNzcyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImwiLCJhIiwiZCIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsImdldCIsInNldCIsImZuIiwiZXh0ZW5kIiwic2hvdyIsInRoaXMiLCJoaWRlIiwidG9nZ2xlIiwiZWFjaCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVEsVUFBVSx1QkFBdUIsaUNBQWlDLFNBQVNDLEVBQUVDLEVBQUVDLEdBQUcsWUFBYSxTQUFTQyxHQUFFRixHQUFHLEdBQUlDLEdBQUVDLEVBQUVGLEVBQUVHLGNBQWNDLEVBQUVKLEVBQUVLLFNBQVNDLEVBQUVDLEVBQUVILEVBQUcsT0FBT0UsR0FBRUEsR0FBR0wsRUFBRUMsRUFBRU0sS0FBS0MsWUFBWVAsRUFBRVEsY0FBY04sSUFBSUUsRUFBRVAsRUFBRVksSUFBSVYsRUFBRSxXQUFXQSxFQUFFVyxXQUFXQyxZQUFZWixHQUFHLFNBQVNLLElBQUlBLEVBQUUsU0FBU0MsRUFBRUgsR0FBR0UsRUFBRUEsR0FBRyxRQUFTRixHQUFFTCxFQUFFSyxHQUFHLElBQUksR0FBSUcsR0FBRUQsRUFBRVEsS0FBS0MsRUFBRSxFQUFFQyxFQUFFakIsRUFBRWtCLE9BQU9GLEVBQUVDLEVBQUVELElBQUlULEVBQUVQLEVBQUVnQixHQUFHVCxFQUFFWSxRQUFRWCxFQUFFRCxFQUFFWSxNQUFNQyxRQUFRZixHQUFHLFNBQVNHLElBQUlPLEVBQUVDLEdBQUdmLEVBQUVvQixJQUFJZCxFQUFFLFlBQVksS0FBS1EsRUFBRUMsS0FBS1QsRUFBRVksTUFBTUMsUUFBUSxLQUFLLEtBQUtiLEVBQUVZLE1BQU1DLFNBQVNsQixFQUFFSyxLQUFLUSxFQUFFQyxHQUFHYixFQUFFSSxLQUFLLFNBQVNDLElBQUlPLEVBQUVDLEdBQUcsT0FBT2YsRUFBRXFCLElBQUlmLEVBQUUsVUFBVUMsSUFBSyxLQUFJUSxFQUFFLEVBQUVBLEVBQUVDLEVBQUVELElBQUksTUFBTUQsRUFBRUMsS0FBS2hCLEVBQUVnQixHQUFHRyxNQUFNQyxRQUFRTCxFQUFFQyxHQUFJLE9BQU9oQixHQUFFLEdBQUlRLEtBQUssT0FBT1IsR0FBRXVCLEdBQUdDLFFBQVFDLEtBQUssV0FBVyxNQUFPcEIsR0FBRXFCLE1BQUssSUFBS0MsS0FBSyxXQUFXLE1BQU90QixHQUFFcUIsT0FBT0UsT0FBTyxTQUFTM0IsR0FBRyxNQUFNLGlCQUFrQkEsR0FBRUEsRUFBRXlCLEtBQUtELE9BQU9DLEtBQUtDLE9BQU9ELEtBQUtHLEtBQUssV0FBVzNCLEVBQUV3QixNQUFNMUIsRUFBRTBCLE1BQU1ELE9BQU96QixFQUFFMEIsTUFBTUMsWUFBWXRCIiwiZmlsZSI6InZlbmRvci9qcXVlcnkvc3JjL2Nzcy9zaG93SGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlZmluZShbXCIuLi9jb3JlXCIsXCIuLi9kYXRhL3Zhci9kYXRhUHJpdlwiLFwiLi4vY3NzL3Zhci9pc0hpZGRlbldpdGhpblRyZWVcIl0sZnVuY3Rpb24oZSxuLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGkobil7dmFyIHQsaT1uLm93bmVyRG9jdW1lbnQscz1uLm5vZGVOYW1lLHI9b1tzXTtyZXR1cm4gcj9yOih0PWkuYm9keS5hcHBlbmRDaGlsZChpLmNyZWF0ZUVsZW1lbnQocykpLHI9ZS5jc3ModCxcImRpc3BsYXlcIiksdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLFwibm9uZVwiPT09ciYmKHI9XCJibG9ja1wiKSxvW3NdPXIscil9ZnVuY3Rpb24gcyhlLHMpe2Zvcih2YXIgbyxyLGw9W10sYT0wLGQ9ZS5sZW5ndGg7YTxkO2ErKylyPWVbYV0sci5zdHlsZSYmKG89ci5zdHlsZS5kaXNwbGF5LHM/KFwibm9uZVwiPT09byYmKGxbYV09bi5nZXQocixcImRpc3BsYXlcIil8fG51bGwsbFthXXx8KHIuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmdChyKSYmKGxbYV09aShyKSkpOlwibm9uZVwiIT09byYmKGxbYV09XCJub25lXCIsbi5zZXQocixcImRpc3BsYXlcIixvKSkpO2ZvcihhPTA7YTxkO2ErKyludWxsIT1sW2FdJiYoZVthXS5zdHlsZS5kaXNwbGF5PWxbYV0pO3JldHVybiBlfXZhciBvPXt9O3JldHVybiBlLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBzKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIHModGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihuKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIG4/bj90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXt0KHRoaXMpP2UodGhpcykuc2hvdygpOmUodGhpcykuaGlkZSgpfSl9fSksc30pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJblpsYm1SdmNpOXFjWFZsY25rdmMzSmpMMk56Y3k5emFHOTNTR2xrWlM1cWN5SmRMQ0p1WVcxbGN5STZXeUprWldacGJtVWlMQ0psSWl3aWJpSXNJblFpTENKcElpd2liM2R1WlhKRWIyTjFiV1Z1ZENJc0luTWlMQ0p1YjJSbFRtRnRaU0lzSW5JaUxDSnZJaXdpWW05a2VTSXNJbUZ3Y0dWdVpFTm9hV3hrSWl3aVkzSmxZWFJsUld4bGJXVnVkQ0lzSW1OemN5SXNJbkJoY21WdWRFNXZaR1VpTENKeVpXMXZkbVZEYUdsc1pDSXNJbXdpTENKaElpd2laQ0lzSW14bGJtZDBhQ0lzSW5OMGVXeGxJaXdpWkdsemNHeGhlU0lzSW1kbGRDSXNJbk5sZENJc0ltWnVJaXdpWlhoMFpXNWtJaXdpYzJodmR5SXNJblJvYVhNaUxDSm9hV1JsSWl3aWRHOW5aMnhsSWl3aVpXRmphQ0pkTENKdFlYQndhVzVuY3lJNklrRkJRVUZCTEZGQlFWRXNWVUZCVlN4MVFrRkJkVUlzYVVOQlFXbERMRk5CUVZORExFVkJRVVZETEVWQlFVVkRMRWRCUVVjc1dVRkJZU3hUUVVGVFF5eEhRVUZGUml4SFFVRkhMRWRCUVVsRExFZEJRVVZETEVWQlFVVkdMRVZCUVVWSExHTkJRV05ETEVWQlFVVktMRVZCUVVWTExGTkJRVk5ETEVWQlFVVkRMRVZCUVVWSUxFVkJRVWNzVDBGQlQwVXNSMEZCUlVFc1IwRkJSMHdzUlVGQlJVTXNSVUZCUlUwc1MwRkJTME1zV1VGQldWQXNSVUZCUlZFc1kwRkJZMDRzU1VGQlNVVXNSVUZCUlZBc1JVRkJSVmtzU1VGQlNWWXNSVUZCUlN4WFFVRlhRU3hGUVVGRlZ5eFhRVUZYUXl4WlFVRlpXaXhIUVVGSExGTkJRVk5MTEVsQlFVbEJMRVZCUVVVc1UwRkJVME1zUlVGQlJVZ3NSMEZCUjBVc1JVRkJSVUVzUjBGQlJ5eFJRVUZUUml4SFFVRkZUQ3hGUVVGRlN5eEhRVUZITEVsQlFVa3NSMEZCU1Vjc1IwRkJSVVFzUlVGQlJWRXNTMEZCUzBNc1JVRkJSU3hGUVVGRlF5eEZRVUZGYWtJc1JVRkJSV3RDTEU5QlFVOUdMRVZCUVVWRExFVkJRVVZFTEVsQlFVbFVMRVZCUVVWUUxFVkJRVVZuUWl4SFFVRkhWQ3hGUVVGRldTeFJRVUZSV0N4RlFVRkZSQ3hGUVVGRldTeE5RVUZOUXl4UlFVRlJaaXhIUVVGSExGTkJRVk5ITEVsQlFVbFBMRVZCUVVWRExFZEJRVWRtTEVWQlFVVnZRaXhKUVVGSlpDeEZRVUZGTEZsQlFWa3NTMEZCUzFFc1JVRkJSVU1zUzBGQlMxUXNSVUZCUlZrc1RVRkJUVU1zVVVGQlVTeExRVUZMTEV0QlFVdGlMRVZCUVVWWkxFMUJRVTFETEZOQlFWTnNRaXhGUVVGRlN5eExRVUZMVVN4RlFVRkZReXhIUVVGSFlpeEZRVUZGU1N4TFFVRkxMRk5CUVZORExFbEJRVWxQTEVWQlFVVkRMRWRCUVVjc1QwRkJUMllzUlVGQlJYRkNMRWxCUVVsbUxFVkJRVVVzVlVGQlZVTXNTVUZCU3l4TFFVRkpVU3hGUVVGRkxFVkJRVVZCTEVWQlFVVkRMRVZCUVVWRUxFbEJRVWtzVFVGQlRVUXNSVUZCUlVNc1MwRkJTMmhDTEVWQlFVVm5RaXhIUVVGSFJ5eE5RVUZOUXl4UlFVRlJUQ3hGUVVGRlF5eEhRVUZKTEU5QlFVOW9RaXhIUVVGRkxFZEJRVWxSTEV0QlFVc3NUMEZCVDFJc1IwRkJSWFZDTEVkQlFVZERMRkZCUVZGRExFdEJRVXNzVjBGQlZ5eE5RVUZQY0VJc1IwRkJSWEZDTEUxQlFVc3NTVUZCUzBNc1MwRkJTeXhYUVVGWExFMUJRVTkwUWl4SFFVRkZjVUlzVDBGQlQwVXNUMEZCVHl4VFFVRlRNMElzUjBGQlJ5eE5RVUZOTEdsQ1FVRnJRa0VzUjBGQlJVRXNSVUZCUlhsQ0xFdEJRVXRFTEU5QlFVOURMRXRCUVV0RExFOUJRVTlFTEV0QlFVdEhMRXRCUVVzc1YwRkJWek5DTEVWQlFVVjNRaXhOUVVGTk1VSXNSVUZCUlRCQ0xFMUJRVTFFTEU5QlFVOTZRaXhGUVVGRk1FSXNUVUZCVFVNc1dVRkJXWFJDSWl3aVptbHNaU0k2SW5abGJtUnZjaTlxY1hWbGNua3ZjM0pqTDJOemN5OXphRzkzU0dsa1pTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1SbFptbHVaU2hiWENJdUxpOWpiM0psWENJc1hDSXVMaTlrWVhSaEwzWmhjaTlrWVhSaFVISnBkbHdpTEZ3aUxpNHZZM056TDNaaGNpOXBjMGhwWkdSbGJsZHBkR2hwYmxSeVpXVmNJbDBzWm5WdVkzUnBiMjRvWlN4dUxIUXBlMXdpZFhObElITjBjbWxqZEZ3aU8yWjFibU4wYVc5dUlHa29iaWw3ZG1GeUlIUXNhVDF1TG05M2JtVnlSRzlqZFcxbGJuUXNjejF1TG01dlpHVk9ZVzFsTEhJOWIxdHpYVHR5WlhSMWNtNGdjajl5T2loMFBXa3VZbTlrZVM1aGNIQmxibVJEYUdsc1pDaHBMbU55WldGMFpVVnNaVzFsYm5Rb2N5a3BMSEk5WlM1amMzTW9kQ3hjSW1ScGMzQnNZWGxjSWlrc2RDNXdZWEpsYm5ST2IyUmxMbkpsYlc5MlpVTm9hV3hrS0hRcExGd2libTl1WlZ3aVBUMDljaVltS0hJOVhDSmliRzlqYTF3aUtTeHZXM05kUFhJc2NpbDlablZ1WTNScGIyNGdjeWhsTEhNcGUyWnZjaWgyWVhJZ2J5eHlMR3c5VzEwc1lUMHdMR1E5WlM1c1pXNW5kR2c3WVR4a08yRXJLeWx5UFdWYllWMHNjaTV6ZEhsc1pTWW1LRzg5Y2k1emRIbHNaUzVrYVhOd2JHRjVMSE0vS0Z3aWJtOXVaVndpUFQwOWJ5WW1LR3hiWVYwOWJpNW5aWFFvY2l4Y0ltUnBjM0JzWVhsY0lpbDhmRzUxYkd3c2JGdGhYWHg4S0hJdWMzUjViR1V1WkdsemNHeGhlVDFjSWx3aUtTa3NYQ0pjSWowOVBYSXVjM1I1YkdVdVpHbHpjR3hoZVNZbWRDaHlLU1ltS0d4YllWMDlhU2h5S1NrcE9sd2libTl1WlZ3aUlUMDlieVltS0d4YllWMDlYQ0p1YjI1bFhDSXNiaTV6WlhRb2NpeGNJbVJwYzNCc1lYbGNJaXh2S1NrcE8yWnZjaWhoUFRBN1lUeGtPMkVyS3lsdWRXeHNJVDFzVzJGZEppWW9aVnRoWFM1emRIbHNaUzVrYVhOd2JHRjVQV3hiWVYwcE8zSmxkSFZ5YmlCbGZYWmhjaUJ2UFh0OU8zSmxkSFZ5YmlCbExtWnVMbVY0ZEdWdVpDaDdjMmh2ZHpwbWRXNWpkR2x2YmlncGUzSmxkSFZ5YmlCektIUm9hWE1zSVRBcGZTeG9hV1JsT21aMWJtTjBhVzl1S0NsN2NtVjBkWEp1SUhNb2RHaHBjeWw5TEhSdloyZHNaVHBtZFc1amRHbHZiaWh1S1h0eVpYUjFjbTVjSW1KdmIyeGxZVzVjSWowOWRIbHdaVzltSUc0L2JqOTBhR2x6TG5Ob2IzY29LVHAwYUdsekxtaHBaR1VvS1RwMGFHbHpMbVZoWTJnb1puVnVZM1JwYjI0b0tYdDBLSFJvYVhNcFAyVW9kR2hwY3lrdWMyaHZkeWdwT21Vb2RHaHBjeWt1YUdsa1pTZ3BmU2w5ZlNrc2MzMHBPMXh1THk4aklITnZkWEpqWlUxaGNIQnBibWRWVWt3OVpHRjBZVHBoY0hCc2FXTmhkR2x2Ymk5cWMyOXVPMk5vWVhKelpYUTlkWFJtT0R0aVlYTmxOalFzWlhsS01scFlTbnBoVnpsMVNXcHZla3hEU25waU0xWjVXVEpXZWtscWNHSkpibHBzWW0xU2RtTnBPWEZqV0Zac1kyNXJkbU16U21wTU1rNTZZM2s1ZW1GSE9UTlRSMnhyV2xNMWNXTjVTbVJNUTBwMVdWY3hiR041U1RaWGVVcHJXbGRhY0dKdFZXbE1RMHBzU1dsM2FXSnBTWE5KYmxGcFRFTktjRWxwZDJsaU0yUjFXbGhLUldJeVRqRmlWMVoxWkVOSmMwbHVUV2xNUTBwMVlqSlNiRlJ0Um5SYVUwbHpTVzVKYVV4RFNuWkphWGRwV1cwNWEyVlRTWE5KYlVaM1kwZFdkVnBGVG05aFYzaHJTV2wzYVZrelNteFpXRkpzVWxkNGJHSlhWblZrUTBselNXMU9lbU41U1hOSmJrSm9ZMjFXZFdSRk5YWmFSMVZwVEVOS2VWcFhNWFprYlZaRVlVZHNjMXBEU1hOSmJYZHBURU5LYUVscGQybGFRMGx6U1cxNGJHSnRaREJoUTBselNXNU9NR1ZYZUd4SmFYZHBXa2RzZW1OSGVHaGxVMGx6U1cxa2JHUkRTWE5KYms1c1pFTkpjMGx0V25WSmFYZHBXbGhvTUZwWE5XdEphWGRwWXpKb2RtUjVTWE5KYmxKdllWaE5hVXhEU205aFYxSnNTV2wzYVdSSE9XNWFNbmhzU1dsM2FWcFhSbXBoUTBwa1RFTktkRmxZUW5kaFZ6VnVZM2xKTmtsclJrSlJWVVpDVEVaR1FsRldSWE5XVlVaQ1ZsTjRNVkZyUmtKa1ZVbHpZVlZPUWxGWGJFUk1SazVDVVZaT1JFeEZWa0pSVlZaRVRFVldRbEZWVmtSTVJXUkNVVlZqYzFkVlJrSlpVM2hVVVZWR1ZGRjVlRWhSVlVaR1VtbDRTRkZWUmtoTVJXUkNVVlZzUkV4RlpFSlJWVlpFVEVWV1FsRlZWa2RNUlZaQ1VWVldTRXhIVGtKUlYwNUVURVZXUWxGVlZrdE1SVlpDVVZWV1RFeEdUa0pSVms1RVRFVldRbEZWVmtSTVJWWkNVVlZXU1V4RlZrSlJWV056VkRCR1FsUXdWWE5TTUVaQ1VsVkZjMUl3UmtKU01IZHpVbFZHUWxKVlRYTlNWVVpDVWxVd2MxTXdSa0pUTUUxelYxVkdRbGRXUVhOU1ZVWkNVbFpGYzFrd1JrSlpNRFJ6VTFWR1FsTlZWWE5TVlVaQ1VsWkJjMUpWUmtKU1ZtdHpVMVZHUWxOV1dYTlNWVVpDVWxONFdGRlZSbGhSVTNoR1VWVkdSbFo1ZUZoUlZVWllVWGw0V2xGVlJscFhhWGhJVVZWR1NFeEdUa0pSVms1TVRFVnNRbEZWYkVKTVJWWkNVVlZWYzFVd1JrSlZNRTF6VWxWR1FsSlZaM05TTUVaQ1VqQlZjMUpWUmtKU1ZVVnpVakJHUWxKNWVGSlJWVVpVVW1sNFNGRlZSa1pVUTNoR1VWVkdSbE41ZUVoUlZVWklURVZzUWxGVmEzTlNNRVpDVTFWamMxSXdSa0pTVlZGelVsVkdRbEpXUlhOVE1FWkNVekJOYzFKVlJrSlNVM2hHVVZWR1JsRjVlRVpSVlVaR1lXdEpjMUpWUmtKU1YzUkRURVU1UWxGVk9VZE1SVlpDVVZWV1JFeEZWa0pSVlZaRlRFVnNRbEZWYkZWTVJWWkNVVlZXVVV4RlZrSlJWVlp1VVdsNFNGRlZSa2hXUTNoR1VWVkdSbGRUZUZKUlZVWlNWME40UmxGVlJrWlNRM2hHVVZWR1JsZFRlRTVSVlVaT1VYbDRVbEZWUmxKYWFYaElVVlZHU0V4R1RrSlJWazVJVEVWc1FsRlZiRkJNUlZaQ1VWVldSRXhGWkVKUlZXUnRURVZXUWxGVlZuWlJhWGhLVVZWR1NscERlRVpSVlVaR1RFWnNRbEZXYTNOVE1FWkNVekZGYzFKVlJrSlNWVTF6VXpCR1FsTXhVWE5TVlVaQ1VsWnJjMVJWUmtKVVZVMXpWVlZHUWxWVGVFeFJWVVpNVEVWMFFsRlZkR2xNUlZaQ1VWVldXa3hGTVVKUlZURkVURVpPUWxGV1RuTlJhWGhHVVZWR1JsTjVlRXhSVlVaTVZWTjRSbEZWUmtaUmVYaElVVlZHU0ZscGVFWlJWVVpHVTFONFRGRlZSa3hNUms1Q1VWWk9SRXhGYkVKUlZXeFFURVZXUWxGVlZrUk1SV1JDVVZWamMxUXdSa0pVTWxselVsVkdRbEpZUmtOTVJXeENVVlZzYlV4RlZrSlJWVlZ6VmxWR1FsWlZUWE5UVlVaQ1UzbDRURkZWUmtwVlUzaEdVVlZHUmt4RlZrSlJWVlpDVEVWV1FsRlZWa1JNUlZaQ1VWVldSVXhGYkVKUlZXdHpWRlZHUWxSVlVYTlNWVVpDVWxWTmMxTXdSa0pUTW1oRFRFVldRbEZWVm01UmFYaElVVlZHU0ZKNWVFNVJWVVpPVVhsNFVsRlZSbEpVUTNoR1VWVkdSbEY1ZUVoUlZVWktURVU1UWxGVk9XOVJhWGhJVVZWR1JreEZaRUpSVld4U1RFVjBRbEZWYzNOVU1FWkNWREZKYzFJd1JrSlNXRlpEVEVWa1FsRlZaRVJNUmtaQ1VWWkdSRXhGZEVKUlZYTnpWakJHUWxaNWVFNVJWVVpRWTBWSmMxSXdSa0pTV0VaRFRFVXhRbEZWYzNOVFZVWkNVekJOYzFNd1JrSlRlWGhZVVZWR1dFeEZNVUpSVlRrd1VXbDRTRkZWUmtaalZVbHpWREJHUWxRd1ZYTlVNRVpDVkhsNFZGRlZSbFJOTUVselVqQkdRbEo1ZUU1UlZVWk9URWRzUTFGVlJuSlJhMFZ6VWpCR1FsSlZSWE5TVlVaQ1VsaHNRMHhGZEVKUlZYUkZURVU1UWxGVk9VUk1SWFJDVVZWMFJFeEZPVUpSVlRsRlRFVjBRbEZWZEVoTVJYUkNVVlZ6YzFZd1JrSldlazVEVEVWV1FsRlZWak5SYVhoT1VWVkdUazFWU1hOU1ZVWkNVbFJDUTB4Rk1VSlJWVEZGVEVVNVFsRlZPVFpSYVhoR1VWVkdSazFGU1hOVVZVWkNWRlZOYzFkVlJrSlhXRkpEU1dsM2FWcHRiSE5hVTBrMlNXNWFiR0p0VW5aamFUbHhZMWhXYkdOdWEzWmpNMHBxVERKT2VtTjVPWHBoUnprelUwZHNhMXBUTlhGamVVbHpTVzVPZG1SWVNtcGFXRTVFWWpJMU1GcFhOVEJKYW5CaVNXMVNiRnB0YkhWYVUyaGlXRU5KZFV4cE9XcGlNMHBzV0VOSmMxaERTWFZNYVRscldWaFNhRXd6V21oamFUbHJXVmhTYUZWSVNuQmtiSGRwVEVaM2FVeHBOSFpaTTA1NlRETmFhR05wT1hCak1HaHdXa2RTYkdKc1pIQmtSMmh3WW14U2VWcFhWbU5KYkRCeldtNVdkVmt6VW5CaU1qUnZXbE40ZFV4SVVYQmxNWGRwWkZoT2JFbElUakJqYld4cVpFWjNhVTh5V2pGaWJVNHdZVmM1ZFVsSGEyOWlhV3czWkcxR2VVbElVWE5oVkRGMVRHMDVNMkp0Vm5sU1J6bHFaRmN4YkdKdVVYTmplakYxVEcwMWRscEhWazlaVnpGc1RFaEpPV0l4ZEhwWVZIUjVXbGhTTVdOdE5HZGphamw1VDJsb01GQlhhM1ZaYlRsclpWTTFhR05JUW14aWJWSkVZVWRzYzFwRGFIQk1iVTU1V2xkR01GcFZWbk5hVnpGc1ltNVJiMk41YTNCTVNFazVXbE0xYW1NelRXOWtRM2hqU1cxU2NHTXpRbk5aV0d4alNXbHJjMlJETlhkWldFcHNZbTVTVDJJeVVteE1ia3BzWWxjNU1scFZUbTloVjNoclMwaFJjRXhHZDJsaWJUbDFXbFozYVZCVU1EbGphVmx0UzBoSk9WaERTbWxpUnpscVlURjNhVXRUZUhaWE0wNWtVRmhKYzJOcGJEbGFibFoxV1ROU2NHSXlOR2RqZVdoc1RFaE5jR1V5V25aamFXZ3lXVmhKWjJKNWVIbE1SM2M1VnpFd2MxbFVNSGRNUjFFNVdsTTFjMXBYTlc1a1IyYzNXVlI0YTA4eVJYSkxlV3g1VUZkV1lsbFdNSE5qYVRWNlpFaHNjMXBUV1cxTFJ6ZzVZMmsxZW1SSWJITmFVelZyWVZoT2QySkhSalZNU0UwdlMwWjNhV0p0T1hWYVZuZHBVRlF3T1dKNVdXMUxSM2hpV1ZZd09XSnBOVzVhV0ZGdlkybDRZMGx0VW5Cak0wSnpXVmhzWTBscGJEaG1SelV4WWtkM2MySkdkR2hZV0hnNFMwaEpkV016VWpWaVIxVjFXa2RzZW1OSGVHaGxWREZqU1d4M2FVdFRhM05ZUTBwalNXb3dPVkJZU1hWak0xSTFZa2RWZFZwSGJIcGpSM2hvWlZOWmJXUkRhSGxMVTFsdFMwZDRZbGxXTURsaFUyaDVTMU5yY0U5c2QybGliVGwxV2xaM2FVbFVNRGxpZVZsdFMwZDRZbGxXTURsWVEwcDFZakkxYkZoRFNYTmlhVFY2V2xoUmIyTnBlR05KYlZKd1l6TkNjMWxZYkdOSmFYaDJTMU5yY0U4eVduWmphV2hvVUZSQk4xbFVlR3RQTWtWeVMzbHNkV1JYZUhOSlZERnpWekpHWkVwcFdXOWFWblJvV0ZNMWVtUkliSE5hVXpWcllWaE9kMkpIUmpWUVYzaGlXVll3Y0U4elNteGtTRlo1WW1sQ2JHWllXbWhqYVVKMlVGaDBPVTh6U214a1NGWjVZbWxDYkV4dFduVk1iVlkwWkVkV2RWcERhRGRqTW1oMlpIcHdiV1JYTldwa1IyeDJZbWxuY0dVelNteGtTRlo1WW1sQ2VrdElVbTloV0UxelNWUkJjR1pUZUc5aFYxSnNUMjFhTVdKdFRqQmhWemwxUzBOc04yTnRWakJrV0VwMVNVaE5iMlJIYUhCamVXdzVURWhTZGxveVpITmFWSEJ0WkZjMWFtUkhiSFppYVdoMVMxaDBlVnBZVWpGamJUVmpTVzFLZG1JeWVHeFpWelZqU1dvd09XUkliSGRhVnpsdFNVYzBMMkpxT1RCaFIyeDZURzVPYjJJelkyOUxWSEF3WVVkc2VreHRhSEJhUjFWdlMxUndNR0ZIYkhwTWJWWm9XVEpuYjFwdVZuVlpNMUp3WWpJMGIwdFlkREJMU0ZKdllWaE5jRkF5Vlc5a1IyaHdZM2xyZFdNeWFIWmtlV2R3VDIxVmIyUkhhSEJqZVd0MVlVZHNhMXBUWjNCbVUydzVabE5yYzJNek1IQlBNWGgxVEhrNGFrbElUblprV0VwcVdsVXhhR05JUW5CaWJXUldWV3QzT1ZwSFJqQlpWSEJvWTBoQ2MyRlhUbWhrUjJ4MlltazVjV015T1hWUE1rNXZXVmhLZWxwWVVUbGtXRkp0VDBSMGFWbFlUbXhPYWxGeldsaHNTMDFzY0ZsVGJuQm9WbnBzTVZOWGNIWmxhM2hFVTI1d2FVMHhXalZYVkVwWFpXdHNjV05IU2twaWJIQnpXVzB4VTJSdFRuQlBXRVpxVjBaYWMxa3lOWEprYlUxNlUyMXdUVTFyTlRaWk0yczFaVzFHU0U5VVRsUlNNbmh5VjJ4Tk1XTlhUalZUYlZKTlVUQndNVmRXWTNoaVIwNDFVMVJhV0dWVmNISlhiR1JoWTBkS2RGWlhiRTFSTUhCelUxZHNNMkZYU25CVFdFNUtZbXhHY0ZSRlRrdGpSV3h3WkRKc2FVMHlVakZYYkdoTFVsZEplVlJxUm1sV01Wb3hXa1ZPU21Nd2JIVlVWMnhOVVRCd01WbHFTbE5pUmxKMFVtNVNZVlV3YkhwVFZ6VktZVlY0UkZOdVdrcGhXR1J3VjFjd05XRXlWbFJUV0U1S1lsVmFNMWt3WkZka1ZuQkdWRzA1YUZZemFISlRWMnd6WVZacmVsTnRlRnBYUmtwelZXeGtOR0pIU2xoV2JsWnJVVEJzZWxOWE1VOWxiVTQxVTFoT1NtSnJTbTlaTWpGWFpGZFNSazVZV21GU01WWndWRVZPUzJWV2NGaE5XRnByWWxaYVJWbFZaSE5qTVhCRVUxaE9TbUpZWkhCVVJVNUxZVVZzY0dReWJHRlJNR3g2VTFjeE5HSkhTblJhUkVKb1VUQnNlbE5YTlU5TlIxWllaVWQ0U21GWVpIQlhhMlJ6WlcxT1NHVkhhR3hWTUd4NlUxY3hhMkpIVWtSVFdFNUtZbXMxYzFwRlRrcGpNR3gwVjI1V1NtRllaSEJYYkdodlRVWndXRTVYZEVwaFdHUndXWHBLYjJSdFVqVlRXRTVLWW14S2RsbFdhRTVoVlhoRVUyMDVhRll4U25OVFYyd3pZVmRTU0U5WE5XRk5ibWh6VTFkc00yRldjRmhTYlhCb1VUQndhMVJGVGt0a1JteFpVVzVrYUZaNlZuVlpNMnhLVG10c2NsSnJTbEpXVlZwRFZFVmFSMUZzUmxkU1dFNVhWbFZhUTFac1RqUk5Wa1p5VW10S2ExWlZiSHBaVmxaUFVXeEdXR0pGVWsxU2F6VkRWVlphVDFKRmVFWldhMHBTVmxaYVJWUkZWbGRSYkVaV1ZtdFNUVkpYVWtOVlZsWnFZekZrVmxKclNscFZNMmhWVlZaV1IxWkdSalZsUldoU1ZsVmFSMVZ0YkRSVFJrWldVbXRvVFZKWFVrTlZWbFp6VWtWNFJscEZTbEpXVmxwRlZFVldWMUZzUmxaV2EyUk5VbFphUTFWV1ZsZFRSWGhJVkd0S1VsWXdOVVZVUlZaWFVXeEdWbFpyZEUxU1ZscERWVlpXVjFSRmVFZFVhMHBTVm1zMVJWUkZWbGRSYkVaV1ZtdFNUVkpXV2tOVlZsWlhVMVY0UmxaclNsSldWMDU2VmtSQ1IxRnNVWGRXV0U1VFRVVmFRMVZzVmtaak1VbDNVbXRLVTAxSVpIcFZiRlpIVVd4S1ZsUllUbE5XVlZwRFZXeFZkMk14VFhkU2EwcFVUVVV4ZWxZeFZrZFJiR1JYVVZoT1UxWlZXa05WYkZwR1l6RnJkMUpyU2xwTlJGSjZWVEZXUjFGc1RsWldXRTVUVmxWYVExVnNXa0pqTVVwV1VtdEtVMVp0ZEhwVk1WWkhVV3hPVjFkWVRsTldWVnBEVld4T05GZEdSbFpTYkdoU1ZUTm9SMVZXVmtkU2JGbzFaVVpvVWxaVldsbFZXR3cwVjJ4R1ZsSnNjRmhoV0doSlZWWldSMU5GZUVkVWEwcFNWbXMxVFZSRlZuTlJiRVpXWWtWS1RWSldXa05WVmxaV1l6RlZkMUpyU2xaTlJURjZWV3hXUjFGc1NsWmFNMDVUVFVWYVExVnFRbFpqTVVwV1VtdEtVMVpWVm5wVmFrSkhVV3hLTldWR1NsSldWVnBWVlcxc05GTkdSbFpTYTFwVlVUTm9SMVZXVmtkU2JFNDFaVVZvVWxaVldrbFVSVlp6VVd4R1ZtRXpUbE5OUlZwRFZURldhbU14U1hkU2EwcFRWbFpHZWxWc1ZrZFJiRXBYVWxoT1ZFMUZXa05WZWtKT1l6RktWbEpyU2xOVk0yaEhWVlpXUjFKc1JqVmxSVnBTVmxWYVIxbFhkRXBqTVVwV1VtdEtVMVl6VWtSVVJWVTFVV3hHVms5VlpFMVNWbHBEVlZaV1YxSkZlRVpXYTBwU1ZsWmFSbFJGVm5OUmJFWldZa1pXVFZKV1drTlZWbFpYVlZWNFJsWnJTbEpXVmxwMVZWZHNORk5HUmxaU2EyaFhVVE5vUjFWV1ZrZFNiR1JVWlVaS1VsWlZXbE5XTUU0MFVteEdWbEpyV2xOUk0yaEhWVlpXUjFKc1pGUmxSVFZTVmxWYVQxVlliRFJWYkVaV1VteEtZV0ZZYUVsVlZsWkhVMFY0UjFSclNsSldhelZKVkVWV2MxRnNSbFppUmtKTlVsWmFRMVZXVmxkU1JYaEdXa1ZLVWxaWFVuUlVSVlpYVVd4R1ZsWnVXbEpoV0doTFZWWldSMU5zY0VSbFJWcFNWbFZhUjFSRlduTlJiRVpYWVROT1ZFMUZXa05WZWtaR1l6RktWbEpyU2xOV1ZURjZWWHBDUjFGc1RYaFZXRTVUVmxWYVExVnNXbkpqTVZKV1VtdEtWVlpWTVhwV1ZsWkhVV3hXVkdWRmVGSldWVnBOVkVWV01GRnNSbFprUjJ4TlVsWmFRMVZXVmxkWGEzaEdUVlZLVWxaVVJrVlVSVnBQVVd4R1YxUnVUbEpoV0doSFZWWldSMUpzVGpWbFJYaFNWbFZhVFZaV1RqUlNiRVpXVW10YVVtVllhRWxWVmxaSFUwWnNjR1ZGV2xKV1ZWcEhWVEZPTkZSR1JsWlNhM2hOVW1zMVExVldXazlTUlhoR1lrVktVbFpYZUZGVVJWWlhVV3hHVmxaclVrMVNWMUpEVlZaV2FtTXhVWGRTYTBwVlRXeHNlbFZzVmtkUmJFcFpVbXRPVFZKWGVFTlZWbFp6WWxWNFJsWnJTbEpXVmxaNlZteFdSMUZzV2xaVVdFNVVWbFZhUTFVemJEUlVSa1pXVW10d1ZsVXphRWRWVmxaSFVtdDRSbFpyU2xKV1ZscERWRVZXVjFGc1JsWldhMUpOVWxaYVExVldWbGRTVlhoR1lrVktVbFpYZEhwV1JsWkhVV3hTVmxWWVRsTldWVnBEVld4V1RtTXhUWGRTYTBwVVRXMW9SRlJGVmxkUmJFWldWbTAxVW1GWWFFbFZWbFpIVTBaS05XVkZOVkpXVlZwUFZWaHNORlZzUmxaU2JFcFZVVE5vUjFWV1ZrZFNiRVkxWlVWb1VsWlZXa3RVUlZVMVVXeEdWazlYT1ZKaFdHaEpWVlpXUjFKcmVFWmFSVXBTVmxkNFUxUkZWakJSYkVaV1l6Tk9WVTFGV2tOV1JFWktZekZKZDFKclNsTlhSbHBFVkVWV2ExRnNSbFphUlZKTlVtdGFRMVZXV2tkU1JYaEdaRVZLVWxaWVRucFdha0pIVVd4YU5XVkZOVkpXVlZwUldUQldTbU14U1hkU2EwcFRWMFZhUkZSRlZYaFJiRVpXWXpOT1ZGWlZXa05WZWtKT1l6Rk5kMUpyU2xSbFdHaFpWVlpXUjFkRmVFWk5WVXBTVmxScmQxVlhiRFJUUmtaV1VtdGFhbFpWYkhwV1JFSkhVV3hSZDFaWVRsVk5SVnBEVmtoc05GWkdSbFpTYkZKT1RVVnNlbFZxUWtkUmJFbzFaVVUxVWxaVldrOVVSV1J6VVRGR1ZsSnVTbEpoTUZaNlZXcENSMUZzU2xaU1dFNVRWbFZhUTFWc2FITlJNSGhHWkVWS1VsWllVa1pVUlZVMVVXeEdWazlWVWsxU1dGSkRWVlpXTUZKRmVFWlBWVXBTVmxSc1JsUkZWakJSYkVaV1pFVm9UVkpZVWtOVlZsWjZZekZaZDFKclNsZGxhelZFVkVWV1YxRnNSbFpXYWs1U1lWaG9UMVZXVmtkVWF6RldVMWhPVTFaVldrTlZiRkpEVVRCNFJrMVZTbEpXVkVaR1ZFVlZOVkZzUmxaUFZGcFNZVmhvUjFWV1ZrZFNhekZHVTFoT1ZWWlZXa05XUmxaT1l6RmtWbEpyU2xoWFJrcEVVMWRzTTJGV2NIUmlTRTVoVlRCck1sTlhOV0ZpUjBwMFZXNWFhbUZVYkhoWk1XaFhZa2RPZFdFeldtcE5NSEJ4VkVSS1QyVnRUalZQV0hCb1VucHJlbFV3WkhOaE1YQlVUbGhHYW1WVmJIcFRWelZQWkcxU1dWTnRjR0ZYUlRWRldXcEpNVTFHY0ZoT1ZFSktZVzVDYVZOWE1WTmlSbkIwWWtoV1lWVXlhR2xYUlU1S1pGVjRjRTlYY0dsTk1IQnpWMFZPU21NeGFFUlRXRlpOWVZSc2NsZFdhRk5oUlhkNlYyMW9hbUZVYkhKWFZtaFRZVVpXU1ZOdVFtdGlTR1J3VkVWYU0yRlZlSEJPU0ZwYVRUQTFObFJFVG1GaFIwNXdUMWhDYWsxSGFIZFhhMlJUWWtkS2MxcElRbXRTTW1oM1dXMTRVMlZXY0ZoV2JVNUtZa1JDZWxkdE5WZGtWbXQ2Vlc1Q2FVMXFVblpYYkU0MFpGVjRTVlZZUW14TldHUndXa1pvVDJKRmJFbFVha0pxWWxkNGNWcEZXak5oVlRoNVYycEdhV0pWTkhkWlZtTTFaRlZzU0dFeU9XbGhWM2N6V2tjeFIyVlZiRWxWV0U1b1ZrUkdNVlJITURWTk1rcDBWbTVzVTFKNmJIRmFSbU40WWtkS2RWVllUbXBsYWtZeFZFY3dNV1JzY0VoV2F6bGFWbnBHYzFSRmFFcFBWMGw0WkVod1dWWklValZYYkdoVFRWZE9kRTVIWkdwaGFtdzFWREpzYjAxR1FsaGhNMVphWWxSc2NscFdUVEZoUjA1SlVXMTRhV0pXU2tWWlZXUnpZekZ3UkdGSVFrMWlWVFUxVjJ4a1IwMUdjRlpXYms1aFZucEdjMWx0TlZKaU1rNDFZVE5DVFZORmF6VlhiRTB4WVcxTmVsUlhPV3RSTTJocVUxY3hVMk5IVFhwUmJrNWFWMGQ0YWxOWGJISmpNbEpFVGxoa1dsZEZjSE5aYlRWVFZESkplVlZ0ZUUxaWEzQnpXV3hqTlUxc2NGWlViVGxvVmpOb2NsTXdhRkpqUlhoSFpESnNhV0pVYkRGWGJGb3pZVlpDVlUxRWJHcGhWbXgwVXpCb1NrOVdhRVJUYld4cFVucHNjVmxVUmpOaFZYUlVaVWhhV0Uwd05XdFZSbWhLWXpKT2NHSkViR0ZpYkZveFYxUk9VMk5IU1hsT1IyUnFaVmRvYzFSRmFFNWpSMVY1VjI1YWFtRlhaM2xYVm1oS1dqSktOV1ZJYkUxU00yTTFWbnBGZDJNeGJGVk5TR1JOVWpGRk5WZHNUVEZqTVhCWVRsYzFhMUl5WXpOWFZsSTBZVEE0ZVZKWVNreGxWM2cxVlVaa1YxbHNiRmROU0U1cVlWUldObHBGYUhOak1YQlVWMWN4VEZKNlp6VlpNbXN4WlcxU1NXSklUbUZWZWxaeVdWWm9UMlF5U2toU2FsWk5VMFV3ZGxNd1dqTmhWMHAwVDFoV1lWWnVaSEJWUmxGM1QxZEtOVmRYTVV4U00yaHBWMVpaZDA5WFNuQk9WelZoVjBaR2Rsa3liRFJaTUd4MFZXNUNhazB3U25wWFZtaHpXVEJzY0dKRWFHMVNlbFY0V1d0a00yTXlTa2RrUjJoWlYwaG5ORk13YUVwa1YwMTZWV3BXYVZJeFZqRlhhMlJ6WlcxT1NHVkhhR3hXUkVacVUxZDRNMkZWZEZSaE0wNVpVVEJ3YWxOWGIzZFBWa0paVTFoV2FrMHhTVEZaYTJSV1pGWndTR0pJY0dwU00yaHZXbFpPV21KWFVrUmhTR3hNVlRGc2RGTXdaRFJaYkd4WFRVUnNhRlV5YURWVE1VNXlZMFU1YzJReWJHbGlWR3d4VjJ4YU0yRlZiRlZOUkd4cFpWWnNkRk13WkRSWmJHeFhUVVJzV1ZFd2NERlpha2t4WWtab1JGTllUbWxoVkZZMlYyeG9VbUl5VG5CbFIwNUtZbFpLZDFsNlRrTmpNV3haWWtkT1NtRllhREpUTVU1eVkwVTRlVmR1V21waFYyaHZWVVpTUWs0eGJGVmxSM1JRVFd0V2VWTXpiSE5rVjFKWVpVaE9TbFpFUm5wV2VrcEhXa1Z3Y0ZkWE9XRldibEp2VjBaTk1XVnRVa2xpU0U1aFZYcFdjbGxXYUU5a01rcElVbXBXVVZZemFHbFhWbGwzWTBVNGVsTnRlR3RUUmxvMVdXMXNRMkpIV2xsWGJXaHFZVlZLTWxWR2FEQlBWVGg2VTIxNGExTkdXalZaYld4RFlrVjRkRmR1VmsxaVZsa3dXa1ZrVjJSV2NFUmhSR1JxVFcxb01scEljSGRpVjFKWVRsZHdhMUl5ZURKWmJXeHVZMGRWZWxOdGVHdFRSbG8xV1cxc1EyVnJkRWxWYlRsb1YwVXhlbE5XVWtKalIxcFVaVWM1YUZZeFNuTlVNakZoVFZkS2RGUnFRbWhXZW13eFV6Qk9jMDR5VG5SV2FrSnJWMFZ3TVZOVmFFNWlNbEpJWVVoQ2FtVlhkelZVUldoVFpHeHZlVnBJVG1GV1NFSjBXa1pqTVdGdFVraGlTRnBwWVZkb01WTXhhREJsVm5CWlZXcEdhbUpVVm1wVFZ6RkxaRzFKZVdWSGVGcFdlbFpxVTFkdmQwOVhVa2xpU0dSaFZucHNkRk5WWXpCTU1rcHhUMVJDYUZJeWVEWlVSelZQWWpKSmVsa3lPVXhXU0VGM1dWVmtjMlZyZUhSaFNFSmhVakZXZGxNeFVuZE5SMFpJWWtod1RXSldXbTlYVkVwdVlqRndkVlp1VmxwTk1VcDNXV3BKTUdJd2RGbGtSRUpNVTBaS2RsbFdhRTVqUmtGNVZsYzVhMUl5YUhkWk0yeHlaRmROZVdGSVdtdGxWMlIzVkRJeFZtSXlVa2hoU0VKcVpWZDBNVmxWWkhOaE1YQlVXak5DYlZVeWR6VmFiRTV5WXpKTmVrMUlRbEJOV0dneFZFaHJOR0ZyYkVsVWJscHJWMFZ3Y1Zkc1ZYaGhSMDVKVVc1Q2FXSlhVbGRXVjNRelQxWndTRkpxUWxwV1NFSnZXVEJvUTJNeVJsaFViV2hyVWpKNE1sbHRhelZqVjAxNVQxaFdVRTFyTlhaWFZtaExaV3h3V1ZWVWJHdFhSa3AwVkRCU01HRldiRmxVYlhoUFlXeEdlbGRzYUhOVE1ERnpZMFpzVkdKdVFtOVdibkJ6VFZaT1dHTklXbXhoTTJoRlZUSTFkMkZWTUhoWGFsWllWa1Z3V0ZwWGRITmpWMDVJVTJ0d2FXSklRbnBYVnpCNFZUSlNkRlJ1UWxCWFJWcHhWakJhWVdNeGEzbE9XRXByWWxVeE5sVXlNWGRVVlRGeVRsUmFXazB5Y3pGYVZ6RkhVMFU1VlZSc1VsTk5ibWg1VmpKNFRrMVhUbGhVYWxaVVlsWktUbFZVUW5kTlZtUlhXVE5vYVZJd05ERlZNVkpoVjBkV1ZtTklTbGhpUjFKb1dUQmtTMlJHV2xoaVJURlNUVWhDTkZac1dtOVdNa3BJVkc1V2FFMXRlRTVWVkVKM1kyeGtWMkZHVG1oU2JGcEtWVEkxUTJFeVJsWmlTSEJVVm5wR2VscFhlRTlUUjBwSVpFZEdVMDFXYjNoV2JYQkxZekF4U0ZKcmFHbFRSbHBZVlRCV2QyTXhaSE5VYTNCcVRVZDRNRmRyWkRSaE1VcFhVMjVPV0dKVVJraFVWbVJMVTFaV2NsWnRhRmhTVkZWNlYxZDBhMUl3TlZaaVNFSnJUVzE0YUZacVRtOWpNV3h6Vkd0d2FrMUhlREZXVnpFMFlWWmtSbEp1UWxWU1ZUVk1XVlJLU21WV1VsaGlSVEZTVFVoQmVWZHJVa3BOVjBwSVZHNUtWbUpzY0dGVVZFWmhUVVprYzFsNlJrNVNWM2gzV2tSS2MyRlhTbFZpU0VwWVlrWlZlRmxWWkV0WFJscFlZa1V4VWsxSVFubFhWbHB2VkRKUmVWTnJhRk5oYkZwTFdWWm9hMk5HWkhKYVJtUnBWbTE0V2xadE5VOWhNVXBYVTI1a1dtVnJOVVJaZWtaelYxZEtSazVXY0ZoU1ZWcDNWa1ZXVDFNeVJsaFRXR3hXWVd4YVMxbFdhR3RqUm1SWFlVVk9hMDFZUWxsVWJHUXdWV3N4ZEdGSVpGcGhNbEpUV1ZaV05GSkdUblJqUjNCcFZteHdkbGRyVm10V01VcDBVMnRvVjJKc1NtaFdibkJXWkRGT1dHSkVUbWhXYlhRMlZrYzFkMU50UmxsYVNFSmFUVWRTU0ZwV1duZFhSVFZWVVd4V2FWWkhlSGxXTW5oUFUyMU5kMkpJVmxSaVdHaHdWbTV3Y21WV1pITldhemxwVFd0YVdWcFZaREJUYlVaWldraENXbVZyY0haYVJ6RlNaREpHU1ZGdFJsTk5WbHAzVmtWV1QxTXlTa2hUYTJoWFlteEthRlp1Y0Zaa01XdDZZa1Z3YWsxSGVERldSekExWVZVd2VWUnVRbFZTVlRWTVZGZDRjMWRIVmtWU2JVWllVbFJHZDFaRlZrOVRNazVJVTI1U1ZtSllhSE5WVkVKelpXeE9XRTFVVW1sU01IQXdWMnRTUTJGR1JYZGlTSEJVVm5wV1VGUlZaRmRYUjFaSVpVVndhRmRIVW5kV01uQkxWakF4Um1KSVFtdE5iWGh4VkZkNFdtUXhUbGhpUkU1b1ZtNUNNRlJyWkhOVVZrVjNZMGhPWVZaWGFGUlphMlJMWkVaV1dHSkZNVkpOUnprelYxWldhMk15Vm5KaVNFSnJUVzE0YjFWcVNqUmpiR1J6Vkd0d2FrMUhlREZXVnpWaFdWVXhkRlZ1Y0ZoaVJUVkxXWHBDYzJSV1VuRlJiSEJZVW10d2VsVXhaSE5OTWtaWFkwWm9VMkpZUW05VlZFSjNZVEZTUmxScmRHdFNiWGhhVlZjMWEyRkdXalpXYmxaYVRUSjRTMVJ0ZEhOamJFcHlVMnhLVjFaV2NFUldSVlpoVWpGR2MxSllaRlZYUlRWWVZteFdZVkpXVmxkVWFsSk9WbXRhZVZWdGRGTlZiRlY2WVVoa1ZsWkZTa2hWYTFwTFZrZFdSMVZzU2xkV1ZuQllWbFpvYzA1R1NuTlNiRnBUWWtWd1UxcFdhRzlTTVZaWFZtdGtWMkpGV1RGYVZWWnZWV3hhVjFacVNsWldNbmN3VmpKNFIxWnRTa1pUYXpGVFlYcFdSRlpXV21GVU1VcEdaVVZhWVZKVmNGTldibkJIVWtaV1dXSkVVbFJTYTFwWFZrWm9kMVZ0UmxsaFJXeFdWbXhhU0ZVeWVFZE9WMVpHWVVaS1YxWlVWa3RXVm1oelRrWktjMUpzV2xOaGVsWlVXVlpvYjFJeFZsZFdhMlJWVW10dk1WcFZaSGRWYkZwV1RsWndWbGRIZHpCVmJYaEhWbXhLYzJGR1VtaFhSMmhJVmxaYVYxSXhVa2RVYkZKc1VteEtVMVpzVlRGa2JGWllaRVUxYWsxVmNGZFZiWFJMVmpGYVZrMVljRlppUmxwSVZWY3hTMVpzVG5KYVJURlRWbXh3UkZaWGVGTmpNVVYzWlVWYVVGWlZjRk5XYkdoVFVsWlNSbFp0ZEZKaVJWWXpWMnRXUzFSV1NsaFZhMDVXWVd0YVRGVjZRalJTYkZweVUyeEtWMVpIZUVaV1JWWlhWakZHYzFKc1dtbFNXR2hPVld4b1UxRXhWbGRXYWtKVFVsaG9TRmxyVmt0VmJGbDNWMnhDVlZKV1dsaFZWM2hIVm0xS1IxRnJNVk5OUkZaRVZsWmFhMVl4VWxabFJWcHBVbFZ3VTFSWE1XOVNiRlpaWWtSU1UySkZXbGRWYlhoaFZqRkZlbUZGWkZaV2JGcElWbFZhYzA1WFZrWmpSa3BYVmxad1RsWnRkRTlPUmtwelVteGFVMkY2Vms1VmJURlRVVEZXYzFWc1pGSk5WVnBWV2xWV1lWVnNXbFpYYXpGWFlrVTBNRll3V2tkV2JFcHpZVVpLYkZkSGFHaFdWbHBYVWpKR1IxcEZVbXhTVjJoVFZteGFZV0ZHVWtaWGF6bFNZa1ZhV0Zrd1ZuZFVWa3BZWlVWT1ZsWkZTak5WVjNRMFVteGFjbE5zU2xkaVJsbzJWbXhTUTFJeFNuTmFSVnBWVjBVMVZGWnNWbUZSTVd4elZtdDBVMDFJYUVkWGExWkxWV3haZDFkclZsVlNWbHBZVlZkNFMxZFhUa1pVYkVwV1RUSm9TbFpXV2xkaE1WVjNaVVZrVTJFd2NGTldiWE14VlRGU1JsWnRkRkppUlZwWVZtMTBVMVJXU2xkWGEwNVdWbXh3V0ZWclZqUlNiSEJHVTJ4V2JHSkdjRVZXUlZaWFl6RkdjMVZ1U2xOWFJUVlVWRlZXWVZFeFZYaFhiSEJxVFZWc00xVnRkRXRXYXpGSldraHdWbUpHV2toVmExcHJaRVp3UmxSck1WTlhSa3BFVmxaU1ExSXhTa1psUlZwWFlUQndVMVp0ZEZkbGJGWnpWbXRrVTFKc1dubFdSbWhQVlRGYVZsZHJUbGRXUlVveVdYcEdTMVpzU25KVGJGcE9Vak5TTmxaclVrTlNNVTVIV2tWYVZsZEZOVlJXYkZaaFVURmFWMVpyTldwTlZYQlhWVzEwUzFac1dsZFNibkJXVFZaYVNGVnJaRk5qYkU1MVVteEthRmRIYUVoV1ZscFhVakZXUjJKRVZteFNWbkJUVm14V1lWWXhWblZpUkZKVVVtdGFWMVpIZUhOaFIwVjNZa2h3Vm1KR1draFZWM2hPWlZVeFZsUnJNVk5oTVhCRVZsUkdZV0l5UlhkbFJWcFhZVEJ3VTFadGVHRlViRkpHVm14a1VtSkZXbGRhUldoVFZXMUdXV0ZGT1ZaV2JGcElWa2Q0ZDFKSFZrZFRiRXBYVmxSV01sWldaRFJXYlUxNFUxaGtVMkV6YUdGV1ZFNXZWbFpXVjFaclpGcFdiSEIzV2xWV2QxVnNXbFpPVlhoWFltMTNNRlZ0ZUVkV2JFcHpVMnhLYkZkSGFFcFdWbHBYVWpGYWRGUnJXbFJYUlRWVVZteFdZVkV4V2xWVWJHUlNUVWhvUjFsclZrdFZiRnBaVldwT1ZsWXlkekJWYlhoSFZteEtjazVWTVZOaVdHaEVWbFphYTFadFRYaFVXR1JUWVRGS1RsUlZWVEZrVmxaWVlrUlNVMkpGV2xkVmJYaExWVzFXV1dGRk1WWldiRnBRV1Zaa1IyTnNUbGxVYkU1WFZsWndSRlpZY0VwbFJrVjNaVVZhVGxaVmNGTldiRkpIWTJ4U1JsZHJaRkppUlZwWVZteG9UMVpGTVVaWGEyeFdUVEozTUZaRldrZFdiRXB4VTJ4S2FFMHlValpXVjNoWFVqRkdjMVJZYkU1V1ZUVk9WV3hTUjFFeFZsZFdXR2hvVFVob1NGWkhkRXRWYkZsNlZXdFNWMVpWTkRCVmJYaEhWbXhLZFZkc1NtaE5WbG8yVmxod1ExSXhTa2hVYmtwV1lsUldVMWxXYUc5U01WWlhWbXRrVm1KRldURmFWVlp2Vld4YVZsZHNaRnBoTVZwTFdYcEdTMVpzU25KVGJXeFhWbGhDUmxaRlZsZE5Sa1p6VTFod1ZHRXdOVTVWYlhNeFVURldWMWR1WkZWU1dHaEhXV3RXUzFWck1VbFJiR3hWVWxaYVdGVlhlRWRXTVVweVZXc3hVMVl4U2tSV1ZscGhWbTFOZUZWWVpGTmhNbWh3Vld4V2QwMHhWbGhpUkZKVFlrVmFWMVZ0ZUZOaE1ERkdZa2h3VmsxV1draFZWM2hPWld4T2NsUnJNVk5XYkhCRVZsWmFWbVF5VFhoWGJGcFRZVEJ3V0ZSVmFFOWxiRlY0Vm10a1ZXSlZjRWRXUm1oUFZrVXhSbGRyVGxkU2JIQjVXWHBHUzFac1NuSlRiRnBXVFRKb1NGWldXbGRTTVU1SFVteFNiRkpXY0ZOV2JGWmhWVEZXV1dKRVVsTmlSVnBYVlcxNFMxVXhSWHBoUlhSV1ZteGFVRlpVUWpSU2F6RldVMnhLVjJWc1drVldWM1JQVGtaS2MxSnNXbE5pUlhCVFdsWm9iMVJXVmxkV2F6bGFWbXMxUlZwVlZtRlZiRnBXVjJ4a1ZtSnRkekJWTUZwSFZteEtjMU5zVGxaTk1taFFWbFphVjFJeFVuTmpSVkpzVW10d1UxWnNWbUZXTVZwMVlrUlNVMkpGV2xkVmJYaExWVzFXV1dGRmJGWldiRnA1VkZaYVIwNVhWa2RSYkVwWFZsWndVbFpVUWs5T1JrNUhVbXhzVm1FeGNGZFpWbWh2VTFaV1YxWnJaRlJpUmxwM1dsVldORlZzVlhwVmEyaFdUVzEzTUZaVldrZFhWbFp5Vkd4S1YySkhlRFpXVjNCRFVqRkdjMVZxV2xKaE1EVk9WV3hrVTFFeFZsZFdiWFJUVWxob1NGVnRkRXRWYXpGWFUyeFNWVkpXV1hkVlYzaEhWbXN4U1ZSc1pFNVNWbkJHVm10V1QwNUdVbk5TYkZwVFlrVktWRmxXYUc5VFZsWlhWbXRrVjJKR2J6RmFWVlV4Vld4YVZsZHJPVlZTVmxwNlZWZDRTMWRYUmtaVWJFcHNWMGRvVGxaV1dsZFNNVkp5WlVWa1lWSlZjRk5VVldoclpXeGFSMVpyWkZKaVJrWTBXV3BPVDFVd01VWlhhMDVYWWtad2NWbDZSbEprTVVweVYyMXNVMVpZUWtoV1JWWldUbFpHYzFKc1pGTlhSVFZYVkZWV1lWRXhXbk5XYXpWcVRWVnNNMVZ0ZEZOaFIwVjNZa2h3VjFKc1draFZWekZPWkRGT1dWUnRhRmRXV0VKRVZsWmFZVmxXUm5KbFJWcGhVbFZ3VTFSVmFFTlJNVkpHVm14a1VtSkZXbGhWYlhSelZGWktXVlZyVGxaV2JGbDNWbXhXTkZKck9WWlRiRXBYWVhwV1ZsWkZWbGROUmtaelVteGFhMUpXU2s1VmJGSnpVVEZXZFdOR1pGSk5WWEJGV2xWV05GVnNXbFpYYXpGV1RWVTBNRlpGV2tkV2JFcHlUbFV4VTJKV1NrUldWbEpIWkdzMVYxSnVRbXhTVm5CVFZteFdZVTFzVmxoalJVNVNUVWhvUjFSV1ZrdFZhekI1WVVWU1ZXSkdXa3RaZWtaTFZteEtjbE5zV2xkU2EzQkZWa1ZXVm1WR1JuTlNiRnBRVm14YVRsVnNVbk5STVZaeldrZEdhMVpyV25kYVZWWmhWV3hhVmxkc1RsVmhNVnBMV1hwR1UxWnNTbkpUYkZaT1VsUkdObFpxUmxkU01WSnpXa2hPYVUxdGVFNVZWRUozWkVac1YxcEVVbWxTVjNoNFdXcEtjMkV5U2xkWGFrWllZVEpOTVZwV1ZqTmxWMDVKWVVkMFYwMVdiekZYYkZwT1RsZFdkRlJ1VWxWWFJuQmhWRlJCTVU1c1VrVlVhemxwVFd0c05sZHJWbk5oUmxsNFUyNU9WVko2UmpOYVYzUnpZMGRSZVdKSGNFNWhiWFEwVjFSSmVGUXlTa2hVV0dSVllteHdjRmx0ZUV0ak1XeDBUbFpLYUZaVWJIcFpla3B6V1ZaSmVGZHVVbHBXYlUxNFdXdFdNRkpHUm5SVGJHeFVVbGhDY1ZkWE1UUk9SVEZIWVVWU1ZGZEdXazVaVmxKelkxWnNjVlJyZEdsU2JXaEZWVEZvVDFkV1RrWmpSM0JhWWxobk1GUlZXbTlTUms1WlZtc3hhRlpIZUhsV01WcHZWVEpHUm1RemNGaGlWMmh4V1ZaU2MyTnNaRmRoUms1b1VteGFTbFV5TlVOaE1rcEpXa2hDVlZKV2J6QmFWbHB2VTBVMVdGUnRkRk5pYlZKM1ZrVmtjazFIVW5OaE0zQlZZbTVDVGxSVVJuZGlNV3Q1WVhwV2FsSXdNVE5aVldoRFdWWkplRk51VGxwaVdHaHlXVEJrVTFOSFJrbFJiV3hwVW10dk1WWXllR3RXTVd0M1lraE9iRk5IZUZwVmJuQlhZVEZTUmxSclRtbFdNVXBaVkd4a2QyRXhTWGxsUkVwYVlsZDRkVmRxU2tkak1VcHhVbTFHV0ZKWE9IaFdSVlpQVVRKRmVHSkdiRlppVjJoWFZUQldkMlF4Y0VoaVJFNWhUV3RhV2xaSGRITmhSbGw0VTI1S1dHSkhUWGhXTUdSSFYxWldkRTlYYUZkbGJGcFhWMVJKZUZZeVNrWmlSVkpvVFcxU2MxUldhRzlPVm1SR1dYcEdXazFyTlhwYVZXaFhWMVpGZDJJemFGcGxhM0JYVjJwS1RtVnNWblZpUjJoWFRVUlNNMVl3Vms5VGF6UjRZVVZzVkdKVk5YQlphMmh2VGxaa1JsbDZSazVpUjNoYVZURmthMWxXU1hoWGJsSllWbTFvV0ZsNlNsTlNiRloxVVcxd1RrMUZjRFpXTVZwdll6RlNjMkpHYkZKV01sSlNWbFJDU2sweGNITlZha0phVFdzMWVscFZhRmRYVms1R1kwZHdXbUpVUm1oVVZtUkxaRVpTY1ZGdGFGZGxiWGQ0VlRGV2EyRXlTa2hWYTFwV1lsaG9hRmxzVmxwbFJteHlZVVpPVTFZd1dscFdSelZyWVZaSmQxZFVSbFJOUlRWRVdXdGtTMU5HV25WVmEzQlNUVzVTZFZkc1VrZE9SMVpYWVVWb1QxWXdOWEpWTUZwM1lqRnJlV0pGVGs1U2JrSlpWRlpvYTFSV1NuVmhSRlpZVWxkTmVGZFVTbE5TTWxaRlVXMUdVMlZ0ZUhoVk1WWlNaREZ2ZUdOR2FHeFNNMmh3Vmxod1YwMXNjRVZUVkVacFVqQTFlVlpYTldGWGF6QjRWMnBDV0dKSFRYaFVWVlkwVWpKV1NXSkdiRk5sYkZweFYydFdZVTVGTVVoVGJsSlFWak5TYUZac1VsZGlNV3h6V2taYVlVMVZTbFZWVnpFMFlWWkplRmRxUWxWU2VrRjRXa2Q0ZDFOR1duSlBWbkJYWld0YWVsWkZWbUZPUjFaWFlVVm9UMVl3TlhKVmJUVnVaREZrY2xwSVRteGlWVFZKV2xWa2IySkdWWGRTVkZaVVZsZFNWRmxyV25ka1JrcHhVbTFzVkZKcmNFZFhWbHB2VkRKUmVWTnJhRk5oYkZwV1ZtcENZVTB4V1hwaVJVNXJWakJzTlZaWE1UUldWMHBXVjJwQ1dHSkZOVVJYYTFVMFpVZFdTV0pHYkZObGJGcHhWMVJLTkU1SFVsZGhSV3hXWW10S2FGbFdWa2RrYkU1V1drWk9hbEl3TVRaVlZ6VlBWMnhrU0dSSE5WUk5WVFZFVkdwR2IxTldUblJVYld4cFUwZGtNMVl3Vm05Vk1sWlhZMFpzVm1GclduRlpiRkpUWW14a2NscElUbXhpVlRWSldsVmtiMkpHV2tsVmJYQmFUVzVuTUZwR1dtOVRWbFp4WWtac1ZGSllRbkZYVnpFMFRrZFdWMkZGYUU5V01EVnlWVEJhUzJNeGJITmhSVXBoVFZWS1ZWVlhNVEJoVlRGeVRWUkdXRlo2UVRGWlZFcFhWa1UxV0dGSGNGUlNWWEI2VjFjd2VGVXhTa2hTYTJocFUwVTFhRlZVU210aWJHUnlXWHBXYUdFemFEQldSelZ6V1ZaWmQxZFlaRmhpUmxwWVdYcEdkMWRGTVZobFIyeHBZa1ZhTWxVeFZtcE5WMUp6WTBWb1YyRjZiR0ZXYm5CSFl6Rk9WbFJ1U21GTlNGSldXa1ZrVDJGdFNrbGhSRVpZVWxkb1ZGbFVTa2RYVmxKMVdrZHNVMDFHYTNoVk1WWlNaREZ2ZVZKdVRsTmhhMXBvVmpCV2RrMVdVa2hOVlRsc1lsVTBNVmRxU210aE1VbDRWMnBDV2sxRk5IcFhha1p2VWtaT2RHUkhhRmhTVkZWNlYxZDBhMUl3TlZkaFJWSlVWakpTVFZacmFGTmhiR3Q1WlVSU2ExWnRhRXBWTWpGUFlWZEtTVm96WkdGU1YxSllXa1ZrVDFKRk5WbGFSbkJZVWxoQ2VsZFhNREZWTVZGNVUxaHNWbUpZYUU1WmJYUjNZekZzYzFsNlZrNWlTRUpYVmtjd05XRkdXWHBoU0VwVVRVVTFSRlJWV25kWFJURlpXa1Z3VWsxdVRYcFdNRlp2VXpGcmVWTnVUbXhUUjNoYVZXNXdWMkZzY0VaYVNFNXBWbGQ0UlZkcVNtdFpWa2w1WlVSYVdrMUhVVEJaVldSWFZrWkdWV0pHUmxkU1JVcDFWakJXVDFNeVVsaFRXR3hQVmpOb1dsVlVRbk5pYkUxNFZHdE9UMDFYYUVwVk1qRlBZVmRLU1ZvelpGaFNWMmhVV1ZSS1IxZFdVblZhUjJ4VFRVWnJlRlV4VmxKa01XOTRZVVZTVkdKWGVIQlZibkJ6WTFac1ZWSnFUbWhXVkdnMFdsVm9jMWRXU2paV2JYQmhVbGRrTkZkVVNrOWpNbFpKVm14c1ZGSnJjSGxXTW5ocldWZEdTRlZzYUd4U1JVcFVWV3BLTkU1c2EzZGFSRkpvVWpGYVYxUldaRzloYkVwMVZHMDFXbUpVUVRGWlZFWjNWbXMxV0dGSGJGZE5WbHAxVmpCYVQxRnJPVlppUldoV1ltdEtjVlJVUWt0bGJHUlhZVWhLVDAxWGFFcFZNakZQWVZkS1NXRkVWbGhTVjAxNFYxUktVMU5XVG5SbFIzUlVVbXh2TVZkWE1YTlJNa1Y1VW14c1ZXSnRVbkJWYWtKYVRWWlNObEpxVW14V2JXaEpWR3hTYzFkV1RrWmpSM0JhWWxobk1GcFdXbTlUUlRWWVRWZDBWMlZzV25oWGExWnJZekpTZEZOdVFsSmlia0p2Vlc1d2NtVnNWWGRhU0U1b1RWaENWVmRxU210WlZsbDZZVWhPV21KSFVsaGFSbVJUVTFaU1dWUnJjRlJTVkZZeVYxZHdUMkZzYjNka1JsSlNZVzFTV2xVd1ZuZGhiR3gwWlVSU1RsSXhTakJWYlRWelUyeEplRk51WkZwbGF6VkVXWHBHYzFkWFJYcFVhM0JUVFZad05sWXllR3BrTWsxNFlVVnNWR0pWTlhCWmEyaHVaREZrUm1GR1RrNWlSM2haV2xWU1IxbFdaRVpOVnpWV1VtczFSRmRYZUc5V1IxWklWRzF3YVZOSFozaFdNRlp2VlRGcmVWVnJhR2xUUmxwb1ZXcEdXazFHVGxaVldHUmhUVVJHUlZwVlpFOWhiVXBKWVVSR1dGSlhhRlJYVkVwVFUwZFdTR1ZIYkdsV01VWXpWMVpXVDFGck9WWmlSV2hYWW1zMWFGWnVjRWRqTVd4MFRsWk9iR0V6YURCYVZXUTBZVmRLV0ZWWVpGcFdWa2wzVjFSS1QyTXlWa2xXYkd4VVVsaENjVmRYTVRST1JURkdaVVJXVUZJeVVsUlZha1phWkRGa2MyRkZkR3RTTUZwWlZHeGtORk5zU2paV2JrNWhVMGQ0UkZsVVNrZFhWbEoxV2tkc1UwMUdhM2hWTVZadldWZEdTRk5yYkZkaVdHaExWV3BHZDAxc2EzbGlSVTVwVWpCd1NWWnROVk5aVmxvMlZsaGtXazB5ZUVSVVZXUkhVMFpLY1ZGcmNGTmxiRnA2VmpKNGExVnNiM2xWYTJoUVVqSlNZVlJYTVc5aU1XeDBUVmQwYVZKdGFFcFZNakZQWVZkS1NWb3paRmhpVkVFeFdsWldjMUpHYjNsYVJrSnNWbFZ3TTFkWE1IaFZNa3BJVm10U1VsWkhhRXRWYWs1dll6RnNkRTFYZEU1U01GcEdXWHBLYTJGR1dqWldia3BZWWtkb2RWa3lkREJPVmtaWlVXdHdWRk5HU25GWFZFbzBUa2RTVjJGRmJGWmlWVFZ5VldwR1lXVnNaSE5aTTJSaFRWVktWVlZYTVRSaFZrbDRWMnBDV0dKSFRYaFVWV1JPWlVkTmVWcEhhRmRsYkZwNVZqSjRiMkpzYjNoaFJsWnJVakExY1ZscmFHOU5WbVJHWVVaT1drMXNTa2xaYTJONFUyeEZlVnBITlZSV2JWSllXWHBHZDFkRk1VbFdiWEJPVFZWcmVGZFhkR3RXYkc5M1pFWlNVbUZ0VWxwVk1GWjNZV3hzZEdWRVVrNVNiV2hLVmxjeFQyRXhTWGRPVkVwYVlsUldWRmt3WkV0a1ZscDBaVVpDVGxkSFp6RldNRlpxVFZacmVWVnJaR3hTUlVwMFZtMDFiMDVXWkVaWmVrWmFUV3MxZWxwVmFGZFhWazVIVTIxd1lWSlhVbFJaTUdST1pXeEdkVlJzY0ZoU00xSjFWbFZhVDFFeVNraFRhMmhYWW14S1RsbHRjekJrTVhCWFdrUlNhVkpZYURCV1Z6VkRZV3N3ZDFOdWNGaFdiV2g1VkdwR2IxTldUblJVYld4cFUwZGtNMVl3Vm05Vk1rNUhZMGhDVWxaNmJFdFZNRlV4Wkd4c2NWUnRjR0ZOU0ZKVlZWZHdhMWRXVGtaalIzQmFZbGhuTUZwV1dtOVRSVFZZVkcxMFUySnRaRE5XTUZadlZXMVNjbVZFVmxKaVJrcHZWbTV3VjJOV1pITlVhMDVPVFZoQ1ZWVlhNSGhoVlRCM1kwaEdXR0pGTlVSVVZ6RkhWMVpTZFZGc2NHbFdNMmcyVjFaYWIxVXdOVlppUld4WFltMVNjRlJYY0ZOaWJHUlZVMnRrYkdKSGREVlZiVEV3V1ZaV05sSnVXbHBXYlZKVVdWUkdkMWRGTlVoYVIwWlhUVEpvZWxkWGVHdFdNbEpZVld0c1ZWZEZOVXRWYWtKaFRWWk9WbHBJVG10U01IQlpWbTB4TUdGR1dYZFhXR1JZWWtVMVExbHFSbk5YUlRWWVpFVndWRkpVVmpaWFYzQlBZVzFPUjJGRmJGUmlWVFZ3V1d0b2JtUXhaRVpoUms1YVRXeEtSVlF3YUdGVGJFbDNUbGhhV0dKSFVsQlpNblJ6VTBkS1NXTkZjRlJTV0VKNlYxUkdiMVl5VGtoVWJsSlhZbGhTUzFWcVNqUk5WazVXWVVaT2FVMXJXbHBXUm1ScldWZEtXR1ZFVmxwbGF6VlRWMnBLUzFORk9WbFhiWEJTVFVWc05GZFhNSGhPUjBwSVZGaHdWVll5VW5KVVYzaFhZbXhzVmxwRlpFNWlTRUpWVlZjeGIxTnNTalpXYWtwYVlsUkdXRnBGWkU5VFZsWnhWbXR3VTAxVmNETlhXSEJQVVRKTmVHSkdiR2hOYlZKeVdXeFdZV1ZzY0VkYVJscGhUVWhTU1ZadE5VTmhNVWw1WVVoT1drMXVaekJhVmxwdlUwVTFXRlJ0ZEZOaWJXUXpWakJXYjFWdFVuSmxSRlpTWW10S2NGbHNhRzlrTVd4MFRWWmFZVTFyYkRaVk1XUnJWMnhaZDJORVNtRlNiV2hUV2tWa1UxTkZPVWxWYkhCcFZteFpkMWRVU1hoV01sWjBWV3RvVUZkSGVHaFdha1pIWkRGa1JtRkZkRnBOYTNCNldsVlNRMWRXVGtkVGJYQmhVbGRTZWxsc1ZuTlNSbTk1V2tkR1UwMXVaekpYVkVKclRrZEdTRlpzVWxKV1IzaFNWbXRTUTJKc1pFWlVhM1JyVmpCc05WUnNaRFJYVmtWM1lrYzFWRTFWTlVSVWFrWnZVMVpPZEZSdGJHbFRSMlF6VmpCV2IxVXhhM2xWYTJSc1VrVktjbGxzVm1GbGJIQkhXa1prYkdKSFVURlZWelZEWVZkS1YxTnVUbUZXVlRWRVYydFdjMUpWTVVoYVIwWlRUVVpzTTFZeFdtRlJNbFpZVW14c1dGZEdXbWhVVjNoYVpERk5kMVJyVG1sU01IQkpWbTAxVTFSV1JYZFRiWEJVVm5wR1ZGa3daRTVsYkVaMVZHeHdXRkl6YUhGVk1XUnpVVzFPUm1KRmJHeFNSMmhMVlc1d1ZtVkdiSEphUkU1UFRWZG9TbFV5TVU5aFYwcEpXak5rV0ZKWGFGUlhWRXBUVWpKV1JWRnRhRmROVjNoMVZYcENUMUZ0UmtoVmJsSlRZbXMxY2xacVJtRk9iRmw2WWtWT2FsSXdjREJXVnpFMFlrWkZkMU50ZEZSV1ZUVjVWMnBLVm1WSFZrbGlSbXhUWld4YWNWZHJWbUZPUlRGSFlVVnNWbUpWTlhKVmJUVnVaREZrYzFwRVVtbFNNSEJWVkd4b2QyRXhUa2hsU0hCWVlrVXdlRmxVU2tkWFZsSjFXa2RzVTAxR2EzaFZNVlpTWkRGdmVHRkZVbFJpVlRWTFdWYzFVMkZzYTNsbFJGSnJWbTFvU2xaWE1VOWhNVXAxV2pOa1dGSlhhRlJVTVZwdlUxWk9kRlJ0YkdsVFIyUXpWakJXYjFVeGEzbFZhMnhPVmpBMWNWbHJhRzlOVm1SR1lVWk9XazFzU2toYVZWSkRZVVpaZUdKSE5WUk5SVFZFV1d0a1MxTkdXblZWYXpGcFlYcFNNMWRzV210T1IwcEdaVWhTVm1KclNuRlVWRUpMWld4a1YyRklTbUZOVlVwV1ZGVlNjMU5zU25WYVNFSllVbFUxUzFkcVFuZGpSbVJZV2tkb1dGSlVWa3RYVmxwclZUSkZlR05HYUU5V2JXaHZWakJhUzJSc2JGZFpla1pYVmpBMU1GWnRNVFJVUmtWM1UyNU9XbUV5VWxoYVJWWnpVa2RGZVZwRmVGWk5SV3Q2VmpCV2IxTXhhM2xUYms1c1VrVktXbFV3V2t0aGJIQkdWMnBTVGxJeFNqQlZiVFZQWVRGWmVGZHFXbGROTW5oRVdUQmtTMlJHVm5SbFIzaFNUVVZ3Y2xVeFZsSmtNVzk0WWpOc1YyRnJTbFJWYWtaaFpFWmtWMkZHWkdwTmJFcEhWbGMxUTJGck1IZFRibkJZVm0xb2VWbHFRbk5UUmxwMVZHMUdWMlZyU25WVmVrWlRUVVpyZVZSdVRteFRSbHBhVlRCYVMyRnNjRVpYYWxKT1VqRndXRnBWYUhOWFZrbzJWbTF3WVZKV2J6QlVWV1JoVmtaR2RHVkhiRlJTVkZaNlZURldiMDFHYTNsVWJrNXNVMFphV2xVd1drdGhiSEJHVjJwU1RsSXdXbGxXTVdSclZFWkZkMU51U2xwV2JXaFFXa1JLUzFOR1NuRldhM0JTVFVaVk1WWlZXazlSTVd0M1lraFNUMWRHY0hCWmJGcGhZV3hPV0dKRlNtcFNWM2hLV2tWa1QyRnRTa2xoUkVaWVVsZG9WRmRVU2xOU01sWkZVV3hzVkZKcmJEVldNVnByVGtVeFYyTkdiRlZpVlhCTFZXcEtORTFXWkhKYVJtUlBVbGQ0U0ZSVlpHdFZWbFYzVTIxd1ZGWjZRWGhhUnpGTFpFWmFkRlJyY0doaWJFcHhWMVJLTkU1SFVsZGhSV3hVWWxVMWNGbHJhRzVrTVdSR1lVWk9XazFzU2toYVZWSkRWRmRXVldGSE5WZFdla1pZV2tWYWQxZEZNVmhpUjBaWVVsZDRkVmRyVWt0aU1rWklWV3RTVW1Gck5XaFdWRXBUVGxaa2MxUnJUbXRpVmtvd1ZtMDFjMkV3TUhkalNHUmhVbGRTZWxwR1duWmxSMVpKWWtac1UyVnNXbkZYYTFaaFRrVXhSMkZGYkZaaVZUVnlWV3BHUzJJeGNFWmFSV1JXVmpBMU1GbHJVa3RVVjBweVRsaE9ZVkpWTlhWWGFrWjNWMGRXU0dWSGJGWk5NbEoxVmpCV1QxTXlSWGxTYkd4VlltMVNjRlZxUWxwTlZtUkdWR3R3YWsxSGVFbFdWelZEWVdzd2QxTnVjRmhXYldoNVYycENNRlpYVWtoVWJYQnBVMGRuZUZZd1ZtOVZNV3Q1Vld0a2JGSkZTblJXYlRWdlRsWmtSbGw2UmxwTmJFcElXbFZTUTJKV1duVmhSRlpZVWxkTmVGZFVTbE5UVlRGWVZHMXdhVk5IWjNoV01GWnZVekZyZVZOdVRteFNSVXBPV2xaU2IySnNXbFZUYkdST1VsZDRTbFpYTURWWlZsVjNVMjVLV2xadGFGQmFSRXBMVTBaS2NWWnJjRk5sYlhnd1ZURldiMVV5U1hoalJsSlNZbGhvY0ZWcVJtRk5SbVJ6V1hwR1RsSXdOREZWVnpWRFlWZEdWbE50T1ZSV1YyaFFXV3RhY21WVk9WbFdiVVpTVFVWd05sZFhjRXBPVjFGM1lrVnNWbUpzY0V0VmFrSmFaVlpzY1ZOdVRtaE5SM2hKVmtjMVlXRlhTbkpPU0dSWVZtMU5lRlJWVm5OVFZrNTBaVWRHYVZkSFozbFhhMUpIVGtkV1YyRkZhRTlXTURWeVZXcEdkMDFzYTNsaVJVcHBUVWQ0U1ZscmFGZFpWa2w0VjFSQ1ZGWldSak5YYWtGNFVsZE5lVnBIYUZkbGJGcDVWako0YjJKc2IzaFJhMUpTWW1zMWFGWnVjRmRrVm5CR1drYzFUMDFIZUVsWmEyaFhXVlpKZUZkVVFsUk5NbmcyVjJwQ01GWkdSbkZhUm14VVVsaENjVmRYTVRST1JURkhZVVZzVm1KclNtaFpWbFpIWkd4T1ZtRkhSbWhTTUhCS1ZtMHhOR0ZyTVZsVWJUVmFWbTFOZUZsVVJuZFhWbTk1V2tac1ZrMUZXblpXVlZwUFVUSlNXRlZzYUd4VFJUVkxWVlJLTUdKc2NGVlNhbEpzVm0xb1NWUnNaRTloTVVwMVdqTmtXRkpYYUZSWmEyUkxVMFphZFZWdFJsZGxiRll6VjFod1IyVnNiM2xTYkdoUFZqTlNhRll3Wkd0aWJHUkhWRlJHYkdKV1NrcFphMmhQV1ZaV05sWnVTbHBXYldoUVdrUktTMU5HU25GV2EzQlRVa1ZLZFZkclkzaFNNazE1Vld4b1YySnVRbGxhVmxaTFpERnNkRTFXVG1sU01WcEZWVmN4VTFWRk1WbGhSRlpZVWxkTmVGZFVTbE5TTWxaRlVXMHhWMkp0WnpGV01GWnFUVlpyZVZWcmJFNVdNRFZ4V1d0b2IwMVdaRVpoUlhSYVRXdHdlbHBWVWtOaGJVcFhWMWhrWVZKdGFFeGFSbFp6VTBaYWRWUnRSbGRsYTFwNlYxY3dNVlV5Vm5KUFNHaHNVMGQ0V2xWdWNGWk9WbVJHWVVWMFdrMXJjSHBhVldoelYxWktObFp1YUZkV2JXaFlXV3RrVDJSWFJYcFdiVVpwVmtaSmVGWXllRzlpTURGSFkwWm9UMVl6VWsxVlZFSktUVEZrUm1GRmRGcE5hM0I2V2xWU1EyRnJNWFJoUkVwaFUwaENNbGRxUm5ka1ZscDFWbXh3VGsxVmNETlhWM0JLVFVkSmQyUkdVbEpoYlZKYVZUQldkMkZzYkhSbFJGSk9VbTFvU2xaWE5YTlpWbVJIVTFob1drMXFRWGRYYWtwT1pWZEdTVmR0ZEU1U01tZ3pWakowYTFadFNYZGlSV3hXWWxSc2IxWXdWWGhsYkU1V1lVWk9iRll4U2xsV2JHUnJWRVphU1ZWdGNGcE5ibWN3V2taYWIxTldWbkZpUlRGVFltMW5NVll3Vm1wTlZtdDVWV3RvYUZORlNtaFZha1pXVFd4T1ZscEhSazVXTUhBd1ZrZHdRMkZHV2paaVJFWlVUVVUxZVZkcVNsWmxSMVpKWWtac1UyVnNXbkZYYTFaaFRrVXhTRlJ1VWxkaGEwcHlWakJXZDAxV1RsWmhSVGxwVFd0c05sZHJWbk5oUmxsNFUyNU9WRTFGTlVSVVZXUkhVMGRLU1dORmNGSk5iazE2VmpCV2IxTXhhM2xUYms1c1VrVktkRlpVVG05aGJHdDVaVVJTYTFadGFFcFdWM0JEWVZVeGRGVnVWbHBoTWxKWFZHMTBjMU5HWkhGU2JXeHBWbFJTTTFkV1dtcE9WMUpXWkVWU1VtSnVRbkpWYWtKYVpERmtjMVJyU21wU1YzaEtXa1ZrVDJGdFNrbGhSRVpZVWxkb1ZGZFVTbE5UUjBwSVRWVndVazF0VW5WWGExWnZZekpSZUdOR2FGQldla1pMVlRCVk1HUXhaRmRoUms1cFVsZDRSbFJWVW5OVlZsVjNVMjF3VkZaNlJreGFSekZLWlZkV1NHVkdjRmRsYkZweFZURmtjMUZ0VGtaaVJXeHJVakExY1ZscmFHOU5WbVJHWVVaT1drMXNTa2hhVlZKRFlXMUtWMWRZWkdGU2JXaE1Xa1pXYzFOV1VuRlJiSEJZVW10d2VsVXhWbEpPUm05NVZXdG9hRk5GU25GYVZsSlhUbXhzVmxsNlZrNU5TRkpGV1ZSS2ExVkhSbFpUV0dSYVZsZFNlbHBYZERSa1IwWkpVVzFHVTAxV1dqSlZla1pUVFVacmVWUnVUbXhUUmxwYVZUQmFTMkZzY0VaYU0yaGFUV3MxZWxwVmFGZFhWazVHWTBkd1dtSllaekJVVlZwdlUxWldkV0pIUmxoU2EydzBWMVJKZDAxR2IzbFZhMmhvVTBWS2NWcFdVbGRqTVdSWFdrVTVhVTFJVWtWVlZ6QjRZVEZhTmxadVJtRlNWMUo2V2tjeFMyTkdiM3BSYTNCVVUwWktjVmRVU2pST1IxSlhZVVZzVm1KVk5YSlZiVFZ1WkRGc1YxcEdjR0ZOU0ZKRlZWYzFRMkZyTVVoaFNHUllZVEpTVkZsclpFdGpNWEJKVVcxMFUwMXRhRE5YVnpFMFZUSldWMk5HYUZkV2VteExWVEJhUzJSc2JGZGhSVFZoVFVoU1ZWVldhRU5UYkU1SlZXMXdXazF1WnpCYVJscHZVMVpXZEZSdGRGTmliV1F6VmpCV2IxVXlUbGRXYkd4WFlsaG9jVmx0TVRCa2JFNVdZVVpPYVUxcldscFdSbVJyVkVaV05sWnFXbHBXVjAweFZGUkNNRkpIUmpaYVJteFVVbGhDY1ZkWE1UUk9SVEZIWVVWc1ZtSlZOWEpWTUZKRFlteGtjMXBFVW14aVNFSlZWVmR3YTFkV1RrWmpSM0JhWWxobk1GUlZXbTlUVmxaMFZHMTBVMkp0WkROWFZtUTBVakF4VjJOR2JGUmhiRnBOVlZSQ1NtUXhiRlphU0U1c1lUSjRSVmxVVGxkaFJrbDVaVWhLV0dKRk5YVlpNRlUwWlVkV1NXSkdiRk5sYkZweFYydFdZVTVGTVVkaFJXeFdZVzE0V2xVd1ZuZGhiR3gwWlVSU1RsSnRhRXBXVjNCelUyeEZlV042VGxoU1YyaE1WMVJLUzJNeVZrVlJiVEZYWW0xbk1WWXdWbXBOVlRsV1lrVlNhR1Z0VWxwVk1GWjNZV3hzZEdWRVVteFdiV2hKVkd4b2MxbFdaRWRUV0doYVRXcEJkMWRxU2s1bFYwWkpWMjEwVGxJeWFETldNblJyVm1zMGVHRkZiRlJpVlRWd1dXMXdRMkpzVFhoVmFrSmFUV3MxZWxwVmFGZFRiVXBGVWxSV1dWSjZVbkJYUm1kM1VGWjRkVWxzTVRsY2JpSmRmUT09XG4iXX0=
