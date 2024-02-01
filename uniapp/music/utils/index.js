export const formateTime = (date, type) => {
	let time = new Date(date)
	let year = time.getFullYear()
	let month = time.getMonth() + 1
	let day = time.getDate()
	let c = ['摩羯','水瓶','双鱼','白羊','金牛','双子','巨蟹','狮子','处女','天秤','天蝎','射手','摩羯']
	let startMonth = month - (day - 14 < '865778999988'.charAt(month));
	let horoscope = c[startMonth]
	
	let ageLever = (year+'').slice(2, 3) + '0'
	
	return {horoscope, ageLever}
}