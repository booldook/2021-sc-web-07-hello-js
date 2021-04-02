// ctrl + /
/* alt + shift + a */
/*
변수, 함수(제어if, switch, 반복for, while)

속성(값): attribute -> 변수(variable) 인자(parameter: param)
기능: function  -> 객체가 가지는 함수(method)

1. 사람을 속성과 기능으로 분리해 보자
가. 속성
이름, 성별, 나이, 키, 몸무게, 피부색 ...
나. 기능
먹는다, 잔다, 뛴다, 게임한다, 공부한다 ... 
*/ 

var universe = {
	ourGallaxy: {
		solarSystem: {
			sun: {

			},
			earth: {
				move() {

				},
				rotate() {

				},
				asia: {
					korea: {
						man: {
							name: '홍길동',
							age: 25,
							gender: 'M',
							sleep() {
								console.log(this.name+'은 잡니다.')
							},
							eat() {
								console.log(this.name+'은 먹습니다.')
							},
							see() {
								console.log(this.name+'은 봅니다.')
							}
						}
					}
				}
			}
		} 
	}
};

console.log(universe.ourGallaxy.solarSystem.earth.asia.korea.man.name);
universe.ourGallaxy.solarSystem.earth.asia.korea.man.sleep();

universe.ourGallaxy.solarSystem.earth.asia.korea.man.name = '홍길만';

console.log(universe.ourGallaxy.solarSystem.earth.asia.korea.man.name);
universe.ourGallaxy.solarSystem.earth.asia.korea.man.sleep();

console.log('======================= 여기 이하는 맛보기 ========================')

console.log(window);
console.log(window.clientInformation.appName);
console.log(window.document);
console.log(document.body.style);
document.body.style.backgroundColor = 'beige';
document.body.style.color = 'white';
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);

console.log('=======================')

console.log( $('body').width() );						// 마진, 보더, 패딩 미포함
console.log( $('body').innerWidth() );			// 패딩 포함
console.log( $('body').outerWidth() );			// 보더, 패딩 포함
console.log( $('body').outerWidth(true) );	// 마진포함


/*
모든 style
alignContent: ""
alignItems: ""
alignSelf: ""
alignmentBaseline: ""
all: ""
animation: ""
animationDelay: ""
animationDirection: ""
animationDuration: ""
animationFillMode: ""
animationIterationCount: ""
animationName: ""
animationPlayState: ""
animationTimingFunction: ""
appearance: ""
ascentOverride: ""
aspectRatio: ""
backdropFilter: ""
backfaceVisibility: ""
background: ""
backgroundAttachment: ""
backgroundBlendMode: ""
backgroundClip: ""
backgroundColor: ""
backgroundImage: ""
backgroundOrigin: ""
backgroundPosition: ""
backgroundPositionX: ""
backgroundPositionY: ""
backgroundRepeat: ""
backgroundRepeatX: ""
backgroundRepeatY: ""
backgroundSize: ""
baselineShift: ""
blockSize: ""
border: ""
borderBlock: ""
borderBlockColor: ""
borderBlockEnd: ""
borderBlockEndColor: ""
borderBlockEndStyle: ""
borderBlockEndWidth: ""
borderBlockStart: ""
borderBlockStartColor: ""
borderBlockStartStyle: ""
borderBlockStartWidth: ""
borderBlockStyle: ""
borderBlockWidth: ""
borderBottom: ""
borderBottomColor: ""
borderBottomLeftRadius: ""
borderBottomRightRadius: ""
borderBottomStyle: ""
borderBottomWidth: ""
borderCollapse: ""
borderColor: ""
borderEndEndRadius: ""
borderEndStartRadius: ""
borderImage: ""
borderImageOutset: ""
borderImageRepeat: ""
borderImageSlice: ""
borderImageSource: ""
borderImageWidth: ""
borderInline: ""
borderInlineColor: ""
borderInlineEnd: ""
borderInlineEndColor: ""
borderInlineEndStyle: ""
borderInlineEndWidth: ""
borderInlineStart: ""
borderInlineStartColor: ""
borderInlineStartStyle: ""
borderInlineStartWidth: ""
borderInlineStyle: ""
borderInlineWidth: ""
borderLeft: ""
borderLeftColor: ""
borderLeftStyle: ""
borderLeftWidth: ""
borderRadius: ""
borderRight: ""
borderRightColor: ""
borderRightStyle: ""
borderRightWidth: ""
borderSpacing: ""
borderStartEndRadius: ""
borderStartStartRadius: ""
borderStyle: ""
borderTop: ""
borderTopColor: ""
borderTopLeftRadius: ""
borderTopRightRadius: ""
borderTopStyle: ""
borderTopWidth: ""
borderWidth: ""
bottom: ""
boxShadow: ""
boxSizing: ""
breakAfter: ""
breakBefore: ""
breakInside: ""
bufferedRendering: ""
captionSide: ""
caretColor: ""
clear: ""
clip: ""
clipPath: ""
clipRule: ""
color: ""
colorInterpolation: ""
colorInterpolationFilters: ""
colorRendering: ""
colorScheme: ""
columnCount: ""
columnFill: ""
columnGap: ""
columnRule: ""
columnRuleColor: ""
columnRuleStyle: ""
columnRuleWidth: ""
columnSpan: ""
columnWidth: ""
columns: ""
contain: ""
containIntrinsicSize: ""
content: ""
contentVisibility: ""
counterIncrement: ""
counterReset: ""
counterSet: ""
cssFloat: ""
cssText: ""
cursor: ""
cx: ""
cy: ""
d: ""
descentOverride: ""
direction: ""
display: ""
dominantBaseline: ""
emptyCells: ""
fill: ""
fillOpacity: ""
fillRule: ""
filter: ""
flex: ""
flexBasis: ""
flexDirection: ""
flexFlow: ""
flexGrow: ""
flexShrink: ""
flexWrap: ""
float: ""
floodColor: ""
floodOpacity: ""
font: ""
fontDisplay: ""
fontFamily: ""
fontFeatureSettings: ""
fontKerning: ""
fontOpticalSizing: ""
fontSize: ""
fontStretch: ""
fontStyle: ""
fontVariant: ""
fontVariantCaps: ""
fontVariantEastAsian: ""
fontVariantLigatures: ""
fontVariantNumeric: ""
fontVariationSettings: ""
fontWeight: ""
forcedColorAdjust: ""
gap: ""
grid: ""
gridArea: ""
gridAutoColumns: ""
gridAutoFlow: ""
gridAutoRows: ""
gridColumn: ""
gridColumnEnd: ""
gridColumnGap: ""
gridColumnStart: ""
gridGap: ""
gridRow: ""
gridRowEnd: ""
gridRowGap: ""
gridRowStart: ""
gridTemplate: ""
gridTemplateAreas: ""
gridTemplateColumns: ""
gridTemplateRows: ""
height: ""
hyphens: ""
imageOrientation: ""
imageRendering: ""
inherits: ""
initialValue: ""
inlineSize: ""
inset: ""
insetBlock: ""
insetBlockEnd: ""
insetBlockStart: ""
insetInline: ""
insetInlineEnd: ""
insetInlineStart: ""
isolation: ""
justifyContent: ""
justifyItems: ""
justifySelf: ""
left: ""
length: 0
letterSpacing: ""
lightingColor: ""
lineBreak: ""
lineGapOverride: ""
lineHeight: ""
listStyle: ""
listStyleImage: ""
listStylePosition: ""
listStyleType: ""
margin: ""
marginBlock: ""
marginBlockEnd: ""
marginBlockStart: ""
marginBottom: ""
marginInline: ""
marginInlineEnd: ""
marginInlineStart: ""
marginLeft: ""
marginRight: ""
marginTop: ""
marker: ""
markerEnd: ""
markerMid: ""
markerStart: ""
mask: ""
maskType: ""
maxBlockSize: ""
maxHeight: ""
maxInlineSize: ""
maxWidth: ""
maxZoom: ""
minBlockSize: ""
minHeight: ""
minInlineSize: ""
minWidth: ""
minZoom: ""
mixBlendMode: ""
objectFit: ""
objectPosition: ""
offset: ""
offsetDistance: ""
offsetPath: ""
offsetRotate: ""
opacity: ""
order: ""
orientation: ""
orphans: ""
outline: ""
outlineColor: ""
outlineOffset: ""
outlineStyle: ""
outlineWidth: ""
overflow: ""
overflowAnchor: ""
overflowWrap: ""
overflowX: ""
overflowY: ""
overscrollBehavior: ""
overscrollBehaviorBlock: ""
overscrollBehaviorInline: ""
overscrollBehaviorX: ""
overscrollBehaviorY: ""
padding: ""
paddingBlock: ""
paddingBlockEnd: ""
paddingBlockStart: ""
paddingBottom: ""
paddingInline: ""
paddingInlineEnd: ""
paddingInlineStart: ""
paddingLeft: ""
paddingRight: ""
paddingTop: ""
page: ""
pageBreakAfter: ""
pageBreakBefore: ""
pageBreakInside: ""
pageOrientation: ""
paintOrder: ""
parentRule: null
perspective: ""
perspectiveOrigin: ""
placeContent: ""
placeItems: ""
placeSelf: ""
pointerEvents: ""
position: ""
quotes: ""
r: ""
resize: ""
right: ""
rowGap: ""
rubyPosition: ""
rx: ""
ry: ""
scrollBehavior: ""
scrollMargin: ""
scrollMarginBlock: ""
scrollMarginBlockEnd: ""
scrollMarginBlockStart: ""
scrollMarginBottom: ""
scrollMarginInline: ""
scrollMarginInlineEnd: ""
scrollMarginInlineStart: ""
scrollMarginLeft: ""
scrollMarginRight: ""
scrollMarginTop: ""
scrollPadding: ""
scrollPaddingBlock: ""
scrollPaddingBlockEnd: ""
scrollPaddingBlockStart: ""
scrollPaddingBottom: ""
scrollPaddingInline: ""
scrollPaddingInlineEnd: ""
scrollPaddingInlineStart: ""
scrollPaddingLeft: ""
scrollPaddingRight: ""
scrollPaddingTop: ""
scrollSnapAlign: ""
scrollSnapStop: ""
scrollSnapType: ""
shapeImageThreshold: ""
shapeMargin: ""
shapeOutside: ""
shapeRendering: ""
size: ""
speak: ""
src: ""
stopColor: ""
stopOpacity: ""
stroke: ""
strokeDasharray: ""
strokeDashoffset: ""
strokeLinecap: ""
strokeLinejoin: ""
strokeMiterlimit: ""
strokeOpacity: ""
strokeWidth: ""
syntax: ""
tabSize: ""
tableLayout: ""
textAlign: ""
textAlignLast: ""
textAnchor: ""
textCombineUpright: ""
textDecoration: ""
textDecorationColor: ""
textDecorationLine: ""
textDecorationSkipInk: ""
textDecorationStyle: ""
textDecorationThickness: ""
textIndent: ""
textOrientation: ""
textOverflow: ""
textRendering: ""
textShadow: ""
textSizeAdjust: ""
textTransform: ""
textUnderlineOffset: ""
textUnderlinePosition: ""
top: ""
touchAction: ""
transform: ""
transformBox: ""
transformOrigin: ""
transformStyle: ""
transition: ""
transitionDelay: ""
transitionDuration: ""
transitionProperty: ""
transitionTimingFunction: ""
unicodeBidi: ""
unicodeRange: ""
userSelect: ""
userZoom: ""
vectorEffect: ""
verticalAlign: ""
visibility: ""
*/