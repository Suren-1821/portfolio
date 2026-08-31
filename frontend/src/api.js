const API_BASE = import.meta.env.VITE_API_URL || "";

export async function fetchPortfolio() {
  const res = await fetch(`${API_BASE}/api/portfolio`);
  if (!res.ok) {
    throw new Error("Failed to load portfolio data");
  }
  return res.json();
}

export async function submitContact(form) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (!res.ok) {
    throw new Error("Request failed");
  }
  return res.json();
}
