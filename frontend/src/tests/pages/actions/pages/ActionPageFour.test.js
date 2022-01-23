import { render } from "@testing-library/react";
import ActionTwoPage from "main/pages/actions/ActionFour";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

describe("ActionTwoPage tests", () => {

    const queryClient = new QueryClient();
    test("renders without crashing", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <ActionTwoPage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

});


