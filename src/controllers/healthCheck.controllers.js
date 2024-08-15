import { json } from 'express';
import asyncHandler from '../utils/asyncHandler.js';
import ApiResponse from '../utils/standardizedApiResponse.js';

const healthCheck = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, 'Health Check OK', 'Health Checked Passed'));
});

export { healthCheck };
