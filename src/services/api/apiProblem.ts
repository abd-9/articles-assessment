import { AxiosError } from 'axios';

export type GeneralApiProblem =
  | { kind: 'timeout'; temporary: true }
  | { kind: 'cannot-connect'; temporary: true }
  | { kind: 'server' }
  | { kind: 'unauthorized' }
  | { kind: 'forbidden' }
  | { kind: 'not-found' }
  | { kind: 'rejected' }
  | { kind: 'unknown'; temporary: true }
  | { kind: 'bad-data' };

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param error The axios error.
 */
export function getGeneralApiProblem(
  error: AxiosError
): GeneralApiProblem | null {
  if (error.code === 'ECONNABORTED') {
    return { kind: 'timeout', temporary: true };
  }

  if (!error.response) {
    // No response from server
    if (error.message === 'Error message') {
      return { kind: 'cannot-connect', temporary: true };
    }

    return { kind: 'unknown', temporary: true };
  }

  switch (error.response.status) {
    case 401:
      return { kind: 'unauthorized' };
    case 403:
      return { kind: 'forbidden' };
    case 404:
      return { kind: 'not-found' };
    case 500:
      return { kind: 'server' };
    default:
      if (error.response.status >= 400 && error.response.status < 500) {
        return { kind: 'rejected' };
      }
      return { kind: 'unknown', temporary: true };
  }
}
