import { BASE_URL, ACCESS_TOKEN } from "@/config";
export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    const response = await fetch(`${BASE_URL}/api/user/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(requestBody),
    });
    console.log(response)
    const responseData = await response.json();
    return new Response(JSON.stringify(responseData), {
      status: 201,
      statusText: "Created",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Request failed:", request.url, "Error:", error);
    return new Response(error.message || "Internal Server Error", {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}