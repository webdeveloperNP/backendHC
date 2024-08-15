class ApiResponse {
  constructor(statusCode, data, message = 'Success message') {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400; //Type: boolean
  }
}

export default ApiResponse;
