import { ApiResponse } from '../../../types/api-response';
import { Invite } from '../redux/types';

export function fetchAllInvites(): ApiResponse<Invite[]> {
  return new Promise((resolve) => {
    const payload = [
      {
        text: 'hi honey',
        id: 1,
      },
      {
        text: 'oh honey',
        id: 2,
      },
      {
        text: 'I am in your town',
        id: 3,
      },
    ];
    setTimeout(() => {
      resolve({
        payload,
        success: true,
        error: null,
      });
    }, 550);
  });
}

export function fetchAddInvite(): ApiResponse<Invite[]> {
  return new Promise((resolve) => {
    const payload = [
      {
        text: 'hi honey',
        id: 1,
      },
      {
        text: 'oh honey',
        id: 2,
      },
      {
        text: 'I am in your town',
        id: 3,
      },
      {
        text: 'aaa',
        id: 4,
      },
    ];
    setTimeout(() => {
      resolve({
        payload,
        success: true,
        error: null,
      });
    }, 550);
  });
}
