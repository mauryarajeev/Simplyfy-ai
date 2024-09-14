import { toast } from "react-toastify";

// Function to show a toast message
export const showToastMessage = (message: string, type: string) => {
    // Check the type of message to determine the toast variant
    if (type === 'error') {
        // Display an error toast
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT, // Position the toast at the top-right of the screen
        });
    } else {
        // Display a success toast (default case)
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT, // Position the toast at the top-right of the screen
        });
    }
};
