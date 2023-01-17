import { render, screen } from '@testing-library/react';
import type from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

let container:HTMLDivElement|null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container && document.body.removeChild(container);
  container = null;
});

it('renders search page and details page',async () => {

    await act(async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App/>
            </MemoryRouter>);
    });

    var input = await screen.findByTestId("searchTermInput");
    var submit = await screen.findByTestId("submitButton");

    await act(async () => {
        type.type(input,"Girls");
        type.click(submit);
    });

    var searchResultLoadingIndicator = await screen.findByTestId("loader");
    expect(searchResultLoadingIndicator).toBeTruthy();

    await act(async () => {
        await new Promise<void>((resolve) => setTimeout(() => {
            resolve();
        },1000));
    });
    var unexpectedLoadingIndicator = await screen.queryByTestId("loader");
    expect(unexpectedLoadingIndicator).toBeFalsy();

    await act(async () => {
        var showLink = await screen.getByTitle("show_139");
        type.click(showLink);
    });

    var showDetailsLoaderIndicator = await screen.findByTestId("showLoader");
    expect(showDetailsLoaderIndicator).toBeTruthy();

    await act(async () => {
        await new Promise<void>((resolve) => setTimeout(() => {
            resolve();
        },1000));
    });
    unexpectedLoadingIndicator = await screen.queryByTestId("showLoader");
    expect(unexpectedLoadingIndicator).toBeFalsy();
});

it('renders details page by url with loading indicator ',async () => {

    act(() => {
        render(
            <MemoryRouter initialEntries={["/show/139"]}>
            <App/>
        </MemoryRouter>);
    });

    var showDetailsLoaderIndicator = await screen.findByTestId("showLoader");
    expect(showDetailsLoaderIndicator).toBeTruthy();

    await act(async () => {
        await new Promise<void>((resolve) => setTimeout(() => {
            resolve();
        },1000));
    });
    var unexpectedLoadingIndicator = await screen.queryByTestId("showLoader");
    expect(unexpectedLoadingIndicator).toBeFalsy();

});
