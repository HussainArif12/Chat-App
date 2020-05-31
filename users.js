let users = [];
function joinUser(socketId , userName, roomName) {
const user = {
  socketID :  socketId,
  username : userName,
  roomname : roomName
}
  users.push(user)
return user;
}

module.exports = joinUser;