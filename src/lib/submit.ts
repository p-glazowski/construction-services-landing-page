export type Inquiry = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

/**
 * Demo mode: nothing is sent anywhere. Replace the body with a request to the
 * chosen form service (e.g. Web3Forms) once the client has an account.
 */
export async function submitInquiry(data: Inquiry): Promise<void> {
  void data;
  await new Promise((resolve) => setTimeout(resolve, 700));
}
