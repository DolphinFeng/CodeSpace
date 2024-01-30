module.exports = (query, request) => {
  query.cookie.os = 'ios'
  query.cookie.appver = '8.20.21'
  const data = {
    userId: query.uid,
    songId: query.sid,
    adjustSongId: query.asid,
  }
  return request(
    'POST',
    `https://music.163.com/api/cloud/user/song/match`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
