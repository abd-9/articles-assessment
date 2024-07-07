import { getGeneralApiProblem } from './apiProblem';
import { AxiosError } from 'axios';

const createAxiosError = (
  code: string | undefined,
  status?: number
): AxiosError => {
  return {
    isAxiosError: true,
    config: {},
    toJSON: () => ({}),
    name: 'AxiosError',
    message: 'Error message',
    code,
    response: status ? { status } : undefined,
  } as AxiosError;
};

test('handles connection errors', () => {
  const error = createAxiosError('ECONNABORTED');
  expect(getGeneralApiProblem(error)).toEqual({
    kind: 'timeout',
    temporary: true,
  });
});

test('handles network errors', () => {
  const error = createAxiosError(undefined);
  expect(getGeneralApiProblem(error)).toEqual({
    kind: 'cannot-connect',
    temporary: true,
  });
});

test('handles timeouts', () => {
  const error = createAxiosError('ECONNABORTED');
  expect(getGeneralApiProblem(error)).toEqual({
    kind: 'timeout',
    temporary: true,
  });
});

test('handles server errors', () => {
  const error = createAxiosError(undefined, 500);
  expect(getGeneralApiProblem(error)).toEqual({
    kind: 'server',
  });
});

test('handles unauthorized errors', () => {
  const error = createAxiosError(undefined, 401);
  expect(getGeneralApiProblem(error)).toEqual({
    kind: 'unauthorized',
  });
});

test('handles forbidden errors', () => {
  const error = createAxiosError(undefined, 403);
  expect(getGeneralApiProblem(error)).toEqual({
    kind: 'forbidden',
  });
});

test('handles not-found errors', () => {
  const error = createAxiosError(undefined, 404);
  expect(getGeneralApiProblem(error)).toEqual({
    kind: 'not-found',
  });
});

test('handles other client errors', () => {
  const error = createAxiosError(undefined, 418);
  expect(getGeneralApiProblem(error)).toEqual({
    kind: 'rejected',
  });
});

test('handles cancellation errors', () => {
  const error = createAxiosError('CANCEL', 999);
  expect(getGeneralApiProblem(error)?.kind).toEqual('unknown');
});
