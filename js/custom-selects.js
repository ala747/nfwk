function selectReplacement(obj) {
	obj.className += ' replaced';
	var pseudoSelect = document.createElement('button');
	pseudoSelect.className = 'pseudo-select btn btn-primary caret-right';
	var ul = document.createElement('ul');
	ul.className = 'select-replacement';
	var opts = obj.options;
	for (var i = 0; i < opts.length; i++) {
		var selectedOpt;
		if (opts[i].selected) {
			selectedOpt = i;
			break;
		} else {
			selectedOpt = 0;
		}
	}
	for (var i = 0; i < opts.length; i++) {
		var li = document.createElement('li');
		var txt = document.createTextNode(opts[i].text);
		li.appendChild(txt);
		li.selIndex = opts[i].index;
		li.selectID = obj.id;
		li.onclick = function () {
			selectMe(this);
			pseudoSelect.innerText = this.innerText;
			pseudoSelect.onclick = function () {
				li.parentNode.className += ' select-opened';
				this.onclick = function () {
					return false;
				};
			};
		}
		if (i == selectedOpt) {
			pseudoSelect.innerText = li.innerText;
			pseudoSelect.onclick = function () {
				li.parentNode.className += ' select-opened';
				this.onclick = function () {
					return false;
				};
			};
			li.className = 'selected';
			li.onclick = function () {
				selectMe(this);
				pseudoSelect.innerText = this.innerText;
				pseudoSelect.onclick = function () {
					li.parentNode.className += ' select-opened';
					this.onclick = function () {
						return false;
					};
				};
			}
		}
		if (window.attachEvent) {
			li.onmouseover = function () {
				this.className += ' hover';
			}
			li.onmouseout = function () {
				this.className = this.className.replace(new RegExp(" hover\\b"), '');
			}
		}
		ul.appendChild(li);
	}
	obj.parentNode.appendChild(pseudoSelect);
	obj.parentNode.appendChild(ul);
}

function selectMe(obj) {
	var pseudoSelect = obj.parentNode.parentNode.getElementsByTagName('button');
	var lis = obj.parentNode.getElementsByTagName('li');
	obj.parentNode.className = obj.parentNode.className.replace(new RegExp(" select-opened\\b"), '');
	for (var i = 0; i < lis.length; i++) {
		if (lis[i] != obj) {

			lis[i].className = '';
			lis[i].onclick = function () {
				selectMe(this);
				pseudoSelect[0].innerText = this.innerText;
				pseudoSelect[0].onclick = function () {
					obj.parentNode.className += ' select-opened';
					this.onclick = function () {
						return false;
					};
				};
			}
		} else {
			setVal(obj.selectID, obj.selIndex);
			obj.className = 'selected';
			obj.onclick = function () {
				selectMe(this);
				pseudoSelect[0].innerText = this.innerText;
				pseudoSelect[0].onclick = function () {
					console.log(1)
					obj.parentNode.className += ' select-opened';
					this.onclick = function () {
						return false;
					};
				};
			}
		}
	}
}

function setVal(objID, selIndex) {
	var obj = document.getElementById(objID);
	obj.selectedIndex = selIndex;
}

function setForm() {
	var s = document.getElementsByTagName('select');
	for (var i = 0; i < s.length; i++) {
		selectReplacement(s[i]);
	}
}
window.onload = function () {
	(document.all && !window.print) ? null : setForm();
}