import { API_URL, BASIC_AUTH_PW, BASIC_AUTH_USER } from "@/lib/constants";

type addContactInfoProps = {
  name: string;
  email: string;
  phone: string;
  feedback?: string;
};

export const addContactInfo = async (props: addContactInfoProps) => {
  const { name, email, phone, feedback } = props;
  try {
    const token = Buffer.from(`${BASIC_AUTH_USER}:${BASIC_AUTH_PW}`).toString(
      "base64"
    );
    const response = await fetch(`${API_URL}/api/v1/contact/requestAdd`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        desc: feedback ?? "",
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) alert(error.message);
  }
};
