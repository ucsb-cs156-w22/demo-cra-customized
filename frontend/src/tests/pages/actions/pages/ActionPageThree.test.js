import { render } from "@testing-library/react";
import ActionThreePage from "main/pages/actions/ActionThree";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

describe("ActionTwoPage tests", () => {

    const queryClient = new QueryClient();
    test("renders without crashing", () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <ActionThreePage />
                </MemoryRouter>
            </QueryClientProvider>
        );
    });

});


