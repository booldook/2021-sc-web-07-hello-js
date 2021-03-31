// ctrl + /
/* alt + shift + a */
/* 
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
}

console.log(universe.ourGallaxy.solarSystem.earth.asia.korea.man.name)
universe.ourGallaxy.solarSystem.earth.asia.korea.man.sleep()

universe.ourGallaxy.solarSystem.earth.asia.korea.man.name = '홍길만'

console.log(universe.ourGallaxy.solarSystem.earth.asia.korea.man.name)
universe.ourGallaxy.solarSystem.earth.asia.korea.man.sleep()