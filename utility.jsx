export const errorMessage = (error) =>
  error?.response?.data?.message || error?.message || "Something went wrong";