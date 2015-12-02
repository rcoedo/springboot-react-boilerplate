// action types
export const MOCK_ACTION = "MOCK_ACTION";

// action creators
export function mockAction(text) {
  return { type: MOCK_ACTION, text };
}
