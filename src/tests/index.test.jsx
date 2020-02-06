const mockRender = jest.fn();
jest.mock("react-dom", () => ({
  render: mockRender
}));

require("../index");

describe("entry file", () => {
  it("calls ReactDOM.render", () => {
    expect(mockRender).toBeCalled();
  });
});