export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`/api${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  return response.json();
}

export async function post<T>(endpoint: string, data: any): Promise<T> {
  return fetchApi(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function get<T>(endpoint: string): Promise<T> {
  return fetchApi(endpoint);
}