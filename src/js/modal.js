var TomloprodModal = function () {
  "use strict";

  function a(a, b, c) {
    [].forEach.call(a, function (a) {
      a.style[b] = c
    })
  }

  function b(a, b) {
    return a.classList ? a.classList.contains(b) : new RegExp("(^| )" + b + "( |$)", "gi").test(a.className)
  }

  function c(a) {
    try {
      if (a.getAttribute("data-tm-modal")) return a
    } catch (a) {
      return a
    }
    for (; !a.getAttribute("data-tm-modal");) return c(a.parentNode)
  }

  function d(a, b) {
    a.classList ? a.classList.add(b) : a.className += " " + b
  }

  function e(a, b) {
    var c = 0, d = a.length;
    for (c = 0; c < d; c += 1) if (a[c].toString() === b.toString()) return c;
    return -1
  }

  function f(a, b) {
    a.classList ? a.classList.remove(b) : "undefined" != typeof a.className && (a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " "))
  }

  function g(a, b, c) {
    a.style.left = b + "px", a.style.top = c + "px", r && console.info("TomloprodModal: Dragging. Coord X: " + b + "px | Coord Y: " + c + "px")
  }

  function h(a) {
    a = a || window.event, 27 === a.keyCode && TomloprodModal.closeModal()
  }

  function i(a) {
    if (a.target !== document.body) {
      var d = c(a.target);
      d instanceof Element && b(d, "tm-trigger") && "undefined" != typeof d && (TomloprodModal.openModal(d.getAttribute("data-tm-modal")), a.preventDefault())
    }
  }

  function j(b) {
    for (var c = null, d = 0; d < TomloprodModal.modal.attributes.length; d++) if (c = TomloprodModal.modal.attributes[d], /^data-/.test(c.nodeName)) switch (c.nodeName) {
      case"data-tm-content":
        TomloprodModal.modal.getElementsByClassName("tm-content")[0].innerHTML = c.nodeValue;
        break;
      case"data-tm-title":
        TomloprodModal.modal.getElementsByClassName("tm-title-text")[0].innerHTML = c.nodeValue;
        break;
      case"data-tm-bgcolor":
        a(TomloprodModal.modal.getElementsByClassName("tm-wrapper"), "backgroundColor", c.nodeValue);
        break;
      case"data-tm-textcolor":
        a(TomloprodModal.modal.getElementsByClassName("tm-content"), "color", c.nodeValue), a(TomloprodModal.modal.getElementsByClassName("tm-wrapper"), "color", c.nodeValue);
        break;
      case"data-tm-closetimer":
        s = setTimeout(TomloprodModal.closeModal, c.nodeValue)
    }
    if ("undefined" != typeof b) {
      var e = null;
      if ("undefined" != typeof b) for (e in b) if ("undefined" != typeof b[e]) switch (e) {
        case"title":
          TomloprodModal.modal.getElementsByClassName("tm-title-text")[0].innerHTML = b[e];
          break;
        case"borderRadius":
          a(document.getElementsByClassName("tm-wrapper"), "-webkit-border-radius", b[e]), a(document.getElementsByClassName("tm-wrapper"), "-moz-border-radius", b[e]), a(document.getElementsByClassName("tm-wrapper"), "border-radius", b[e]);
          break;
        case"content":
          TomloprodModal.modal.getElementsByClassName("tm-content")[0].innerHTML = b[e];
          break;
        case"bgColor":
          a(TomloprodModal.modal.getElementsByClassName("tm-wrapper"), "backgroundColor", b[e]);
          break;
        case"textColor":
          a(TomloprodModal.modal.getElementsByClassName("tm-content"), "color", b[e]), a(TomloprodModal.modal.getElementsByClassName("tm-wrapper"), "color", b[e]);
          break;
      }
    }
  }

  var k = null, l = !0, m = !0, n = !0, o = !1, p = {}, q = [], r = !1, s = null, t = null;
  return {
    modal: [], isOpen: !1, openModal: function (a, c) {
      document.body.classList.add('modal-active');
      TomloprodModal.isOpen ? TomloprodModal.closeModal() : (TomloprodModal.modal = document.getElementById(a), TomloprodModal.modal ? (q && d(q, "tm-effect"), j(c), m && b(TomloprodModal.modal, "tm-draggable") && (TomloprodModal.modal.setAttribute("onmousedown", "TomloprodModal.startDragging(this,event);"), TomloprodModal.modal.setAttribute("onmouseup", "TomloprodModal.stopDragging(this);")), d(TomloprodModal.modal, "tm-showModal"), k = TomloprodModal.modal.querySelector(".tm-closeButton"), k.addEventListener ? k.addEventListener("click", TomloprodModal.closeModal, !1) : k.attachEvent && k.attachEvent("onclick", TomloprodModal.closeModal), n && !o && (document.querySelector(".tm-overlay").addEventListener ? document.querySelector(".tm-overlay").addEventListener("click", TomloprodModal.closeModal, !1) : document.querySelector(".tm-overlay").attachEvent && document.querySelector(".tm-overlay").attachEvent("onclick", TomloprodModal.closeModal)), l && (document.onkeyup = h), TomloprodModal.isOpen = !0, TomloprodModal.fire("opened")) : r && console.error("TomloprodModal: Cannot find the indicated modal window."))
    }, registerHandler: function (a, b) {
      var c = !0;
      p[a] ? e(p[a], b) === -1 ? p[a].push(b) : (c = !1, console.error("TomloprodModal: The event ''" + a + "'' already contain one handler with the next function:\n\n " + b)) : p[a] = [b], r && c && console.info("TomloprodModal: There are one new handler registered to the event ''" + a + "'':\n\n " + b + ". \n\nTotal handlers of ''" + a + "'' event: " + p[a].length)
    }, removeHandler: function (a, b) {
      if (!p[a]) return !1;
      if (b = b || !1) {
        var c = e(p[a], b);
        return c > -1 && (p[a].splice(c, 1), r && console.info("TomloprodModal: The handlers with the name ''" + a + "'' have been deleted successfully. (" + b + ")"), !0)
      }
      delete p[a], r && console.info("TomloprodModal: The handler ''" + a + "'' has been deleted successfully. (" + b + ")")
    }, fire: function (a) {
      if (!p[a]) return r && console.info("TomloprodModal: There aren't any handlers registered for ''" + a + "''"), !1;
      var b;
      for (b = 0; b < p[a].length; b += 1) p[a][b].apply(window, Array.prototype.slice.call(arguments, 1))
    }, create: function (a) {
      if (null === t) {
        t = "tm-create" + Math.floor(Date.now() / 1e3);
        var b = document.createElement("DIV");
        b.id = t, b.className = "tm-modal tm-effect tm-draggable";
        var c = document.createElement("DIV");
        c.className = "tm-wrapper", b.appendChild(c);
        var d = document.createElement("DIV");
        d.className = "tm-title", c.appendChild(d);
        var e = document.createElement("SPAN");
        e.className = "tm-XButton tm-closeButton", d.appendChild(e);
        var f = document.createElement("H3");
        f.className = "tm-title-text", d.appendChild(f);
        var g = document.createElement("DIV");
        g.className = "tm-content", c.appendChild(g), document.body.insertBefore(b, document.body.firstChild)
      }
      TomloprodModal.openModal(t, a)
    }, start: function (b) {
      var c = document.createElement("DIV");
      c.className = "tm-overlay", document.body.appendChild(c);
      var e = null;
      if ("undefined" != typeof b) for (e in b) if ("undefined" != typeof b[e]) switch (e) {
        case"draggable":
          m = b[e];
          break;
        case"bgColor":
          a(document.getElementsByClassName("tm-wrapper"), "backgroundColor", b[e]);
          break;
        case"borderRadius":
          a(document.getElementsByClassName("tm-wrapper"), "-webkit-border-radius", b[e]), a(document.getElementsByClassName("tm-wrapper"), "-moz-border-radius", b[e]), a(document.getElementsByClassName("tm-wrapper"), "border-radius", b[e]);
          break;
        case"textColor":
          a(document.getElementsByClassName("tm-content"), "color", b[e]), a(document.getElementsByClassName("tm-wrapper"), "color", b[e]);
          break;
        case"closeOnOverlay":
          n = b[e];
          break;
        case"overlayColor":
          document.querySelector(".tm-overlay").style.backgroundColor = b[e];
          break;
        case"removeOverlay":
          b[e] && (o = b[e], c = document.querySelector(".tm-overlay"), c && c.parentNode.removeChild(document.querySelector(".tm-overlay")));
          break;
        case"showMessages":
          r = b[e];
          break;
        case"closeOnEsc":
          l = b[e];
          break;
        case"idMainContainer":
          q = document.getElementById(b[e]), d(q, "tm-MainContainer")
      }
      document.addEventListener ? document.addEventListener("click", i) : document.attachEvent && document.attachEvent("onclick", i)
    }, stop: function () {
      document.onclick = null;
      for (var a = document.getElementsByTagName("A"), b = 0; b < a.length; b++) {
        var c = a[b];
        c.onclick = null
      }
    }, closeModal: function (a) {
      document.body.classList.remove('modal-active');
      if ("undefined" != typeof a && a.stopPropagation(), window.clearTimeout(s), f(q, "tm-effect"), f(TomloprodModal.modal, "tm-showModal"), k.removeEventListener("click", TomloprodModal.closeModal, !1), TomloprodModal.isOpen) {
        var b = TomloprodModal.modal.querySelectorAll(".tm-emptyOnClose"), c = 0;
        for (c = 0; c < b.length; c += 1) "INPUT" === b[c].tagName ? b[c].value = "" : b[c].innerHTML = ""
      }
      TomloprodModal.modal = [], TomloprodModal.isOpen = !1, TomloprodModal.fire("closed")
    }, startDragging: function (a, b) {
      b = b || window.event, a.style.cursor = "move";
      var c = a.offsetTop, e = a.offsetLeft, f = TomloprodModal.modal.offsetWidth / 2, h = TomloprodModal.modal.offsetHeight / 2,
          i = parseInt(window.innerWidth, 10), j = parseInt(window.innerHeight, 10), k = b.clientX - e, l = b.clientY - c;
      document.onmousemove = function (b) {
        b = b || window.event;
        var c = b.clientX - k, e = b.clientY - l;
        c < f && (c = f), c + f > i && (c = i - f), e < h && (e = h), e + h > j && (e = j - h), d(document.getElementsByTagName("body")[0], "tm-avoidSelection"), d(TomloprodModal.modal, "tm-avoidSelection"), g(a, c, e)
      }
    }
  }
}();


TomloprodModal.start({
  closeOnOverlay: true,
  idMainContainer: "myMainContainer"
});
