import { render, waitFor } from "@testing-library/react";
import Footer from "main/components/Nav/Footer";

describe("Footer tests", () => {
    test("renders correctly ", async () => {
        const { getByText } = render(
            <Footer />
        );
        await waitFor(() => expect(getByText(/This is a sample frontend only webapp./)).toBeInTheDocument());
    });
});


