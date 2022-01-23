import { render } from "@testing-library/react";
import ActionOnePage from "main/pages/actions/ActionOne";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

describe("ActionOnePage tests", () => {

    const queryClient = new QueryClient();
    test("renders without crashing", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <ActionOnePage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

});


