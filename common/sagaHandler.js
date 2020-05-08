import React, { useCallback, useState } from 'react';
import { SUCCESS } from './constants';

export const sagaHandler = (success, failuer, response) => {
  if (response.data.result === SUCCESS) {
    return { type: success, data: response.data.data };
  } else {
    return { type: failuer, data: response.data.message };
  }
};
