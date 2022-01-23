import { render } from "@testing-library/react";
import LinkPage from "main/pages/LinkPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

describe("LinkPage tests", () => {

    const queryClient = new QueryClient();
    test("renders without crashing", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <LinkPage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

});


