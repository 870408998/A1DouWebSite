const errorTypes = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_REQUIRE:
      status = 400; //bad request
      message = "用户名或者密码不能为空";
      break;
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409; //conflict
      message = "用户名已经存在";
      break;
    case errorTypes.USER_DOES_NOT_EXISTS:
      status = 400; //参数错误
      message = "用户不存在";
      break;
    case errorTypes.PASSWORD_IS_INCORRECT:
      status = 400; //参数错误
      message = "密码错误";
      break;
    case errorTypes.UNAUTHORIZED:
      status = 401; //参数错误
      message = "无效的token";
      break;
    case errorTypes.UNPERMISSION:
      status = 401; //参数错误
      message = "您不具备操作的权限";
      break;
    default:
      status = 404;
      message = "page not found";
  }

  ctx.status = status;
  ctx.body = message;
}

module.exports = errorHandler;