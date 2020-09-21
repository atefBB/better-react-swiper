import React__default, { useState, createElement } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { useSwipeable } from 'react-swipeable';
import styled, { css } from 'styled-components';

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var Arrow = function Arrow(props) {
  return React__default.createElement(
    'svg',
    Object.assign({}, props, {
      viewBox: '0 0 42 42',
    }),
    React__default.createElement('path', {
      d:
        'M36.07 20.18l-29-20A1 1 0 005.5 1v40a1 1 0 001.57.82l29-20a1 1 0 000-1.64z',
    })
  );
};

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose([
    '\n            width: 100%;\n            flex-basis: 100%;\n          ',
  ]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose([
    '\n            right: 5px;\n          ',
  ]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose([
    '\n            left: 5px;\n          ',
  ]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose([
    '\n            width: calc(100% - 80px);\n            padding: 0 40px;\n          ',
  ]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose([
    '\n  position: relative;\n\n  ',
    ' {\n    ',
    '\n  }\n\n  ',
    ' {\n    ',
    '\n  }\n\n  ',
    ' {\n    ',
    '\n  }\n\n  ',
    ' {\n    ',
    '\n  }\n',
  ]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose([
    '\n  transition: 0.3s left;\n  position: relative;\n  width: ',
    '%;\n  flex: 0 0 ',
    '%;\n  display: flex;\n',
  ]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose([
    '\n  ',
    ';\n  opacity: ',
    ';\n  right: 10px;\n',
  ]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose([
    '\n  ',
    ';\n  opacity: ',
    ';\n  left: 10px;\n\n  svg {\n    transform: scale(-1);\n  }\n',
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose([
    '\n  box-sizing: content-box;\n  cursor: pointer;\n  background: #fff;\n  border: 0;\n  color: ',
    ';\n  border-radius: 50%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 50%;\n  margin-top: -15px;\n  z-index: 1;\n  transition: 0.3s opacity;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & svg {\n    width: 13px;\n  }\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose([
    '\n  box-sizing: content-box;\n  display: flex;\n  flex-wrap: nowrap;\n  width: calc(100% - 120px);\n  margin: 0;\n  padding: 0 60px;\n  mask-image: -webkit-gradient(\n    linear,\n    left top,\n    right top,\n    color-stop(0, rgba(0, 0, 0, 0)),\n    color-stop(0.05, rgba(0, 0, 0, 1)),\n    color-stop(0.95, rgba(0, 0, 0, 1)),\n    color-stop(1, rgba(0, 0, 0, 0))\n  );\n  overflow: hidden;\n',
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var isMobile = function isMobile(media) {
  return media === 'xs' || media === 'sm';
};

var color = {
  blue: '#105783',
};
var SwiperCanvas = /*#__PURE__*/ styled.div(/*#__PURE__*/ _templateObject());
var arrowStyles = /*#__PURE__*/ css(
  /*#__PURE__*/ _templateObject2(),
  color.blue
);
var ArrowLeft = /*#__PURE__*/ styled.button(
  /*#__PURE__*/ _templateObject3(),
  arrowStyles,
  function(props) {
    return props.faded ? 0.25 : 1;
  }
);
var ArrowRight = /*#__PURE__*/ styled.button(
  /*#__PURE__*/ _templateObject4(),
  arrowStyles,
  function(props) {
    return props.faded ? 0.25 : 1;
  }
);
var Item = /*#__PURE__*/ styled.div(
  /*#__PURE__*/ _templateObject5(),
  function(props) {
    return 100 / props.itemsWide;
  },
  function(props) {
    return 100 / props.itemsWide;
  }
);
var SwiperWrapper = /*#__PURE__*/ styled.div(
  /*#__PURE__*/ _templateObject6(),
  SwiperCanvas,
  function(props) {
    return isMobile(props.media) ? css(_templateObject7()) : null;
  },
  ArrowLeft,
  function(props) {
    return isMobile(props.media) ? css(_templateObject8()) : null;
  },
  ArrowRight,
  function(props) {
    return isMobile(props.media) ? css(_templateObject9()) : null;
  },
  Item,
  function(props) {
    return isMobile(props.media) ? css(_templateObject10()) : null;
  }
);

var MEDIA_MAX_XS = 576;
var MEDIA_MAX_SM = 767;

var Swiper = function Swiper(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items,
    _ref$itemsWide = _ref.itemsWide,
    itemsWide = _ref$itemsWide === void 0 ? 3 : _ref$itemsWide,
    _ref$infinity = _ref.infinity,
    infinity = _ref$infinity === void 0 ? false : _ref$infinity,
    canvasClassName = _ref.canvasClassName,
    canvasStyle = _ref.canvasStyle,
    arrowClassName = _ref.arrowClassName,
    arrowStyle = _ref.arrowStyle,
    style = _ref.style;

  var _React$useState = useState(0),
    currentIndex = _React$useState[0],
    setCurrentIndex = _React$useState[1];

  var _React$useState2 = useState(0),
    slideOffset = _React$useState2[0],
    setSlideOffset = _React$useState2[1]; // TODO: there has to be a better way...

  var _React$useState3 = useState(null),
    lastSwipe = _React$useState3[0],
    setLastSwipe = _React$useState3[1];

  var _React$useState4 = useState(0),
    width = _React$useState4[0],
    setWidth = _React$useState4[1];

  var swipeConfig = {
    trackTouch: true,
    trackMouse: true,
  };
  var swipeHandlers = useSwipeable(
    _extends(
      {
        onSwiping: function onSwiping(eventData) {
          return _onSwiping(eventData);
        },
        onSwiped: function onSwiped() {
          setSlideOffset(0);
        },
      },
      swipeConfig
    )
  );

  var computeMedia = function computeMedia() {
    if (width <= MEDIA_MAX_XS) {
      return 'xs';
    }

    if (width <= MEDIA_MAX_SM) {
      return 'sm';
    }

    return 'md';
  };

  var computeItemWidth = function computeItemWidth() {
    return width <= MEDIA_MAX_SM ? 1 : itemsWide;
  };

  var canGoToPrevious = function canGoToPrevious() {
    return (infinity && items.length > 1) || currentIndex !== 0;
  };

  var canGoToNext = function canGoToNext() {
    var computedWide = computeItemWidth();
    return (
      (infinity && items.length > 1) ||
      currentIndex < items.length - computedWide
    );
  };

  var goToPrevious = function goToPrevious() {
    if (!canGoToPrevious()) {
      return;
    }

    var computedWide = computeItemWidth();
    var steps = currentIndex === 0 ? computedWide : 1;
    var prev = (items.length + currentIndex - steps) % items.length;
    setCurrentIndex(prev);
  };

  var goToNext = function goToNext() {
    if (!canGoToNext()) {
      return;
    }

    var computedWide = computeItemWidth();
    var steps = items.length - currentIndex > computedWide ? 1 : computedWide;
    var next = (items.length + currentIndex + steps) % items.length;
    setCurrentIndex(next);
  };

  var resetSwipe = function resetSwipe() {
    var now = new Date().getTime();
    setSlideOffset(0);
    setLastSwipe(now);
  };

  var _onSwiping = function _onSwiping(e) {
    var now = new Date().getTime();

    if (!width) {
      return;
    }

    if (lastSwipe && now - lastSwipe < 250) {
      return;
    }

    var draggedPercent = (e.deltaX * 2) / width;
    setSlideOffset(draggedPercent * 100);

    if (draggedPercent < -0.3333) {
      resetSwipe();
      goToPrevious();
      return;
    }

    if (draggedPercent > 0.3333) {
      resetSwipe();
      goToNext();
      return;
    }
  };

  var onResize = function onResize(w) {
    setWidth(w);
    resetSwipe();
  };

  var hideArrows = items.length <= itemsWide;
  return createElement(
    ReactResizeDetector,
    {
      handleWidth: true,
      onResize: onResize,
    },
    createElement(
      SwiperWrapper,
      {
        style: style,
        media: computeMedia(),
      },
      !hideArrows &&
        createElement(
          ArrowLeft,
          {
            'data-testid': 'prev',
            faded: !canGoToPrevious(),
            onClick: goToPrevious,
            className: arrowClassName,
            style: arrowStyle,
          },
          createElement(Arrow, null)
        ),
      createElement(
        SwiperCanvas,
        Object.assign({}, swipeHandlers, {
          className: canvasClassName,
          style: canvasStyle,
        }),
        items.map(function(item, i) {
          return createElement(
            Item,
            {
              key: i,
              itemsWide: computeItemWidth(),
              currentIndex: currentIndex,
              'data-testid': 'item',
              style: {
                left:
                  '-' +
                  ((currentIndex * 100) / computeItemWidth() + slideOffset) +
                  '%',
              },
            },
            item
          );
        })
      ),
      !hideArrows &&
        createElement(
          ArrowRight,
          {
            'data-testid': 'next',
            faded: !canGoToNext(),
            onClick: goToNext,
            className: arrowClassName,
            style: arrowStyle,
          },
          createElement(Arrow, null)
        )
    )
  );
};

export default Swiper;
//# sourceMappingURL=better-react-swiper.esm.js.map
