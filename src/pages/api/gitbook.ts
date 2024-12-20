export async function GET() {
  const GITBOOK_API_TOKEN = "gb_api_0G1YKPqL9UaIewjU7H1O1qrp6zBbtzl0oaQLKTZm";
  const SPACE_ID = "QgphvmqtIaj3bHfpjzPs";

  try {
    const response = await fetch(
      `https://api.gitbook.com/v1/spaces/${SPACE_ID}/content`,
      {
        headers: {
          Authorization: `Bearer ${GITBOOK_API_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
