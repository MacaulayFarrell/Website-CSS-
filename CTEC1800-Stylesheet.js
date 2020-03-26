

		function setActiveStyle (styletitle) {
			var stylelist = document.getElementsByTagName("link");
			for (i = 0; i < stylelist.length; i++) {
				if (isOptionalStylesheet(stylelist[i])) {
					activateWhenMatching(stylelist[i], styletitle);
				}
			}
		}

		function isOptionalStylesheet(thislink) {
			return (thislink.getAttribute("rel").indexOf("style") != -1) && thislink.getAttribute("title")
			}

		function activateWhenMatching(thislink, styletitle) {
			if (thislink.getAttribute("title") == styletitle) {
				thislink.disabled = false;
			}
			else {
				thislink.disabled = true;
			}
		}
