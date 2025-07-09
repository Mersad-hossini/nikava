const BASE_URL = process.env.API_BASE_URL

export async function serverFetcher<T>(path: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
        next: { revalidate: 60 },
        ...options,
    });

    if (!res.ok) {
        throw new Error(`Fetch error: ${res.status}`);
    }

    return res.json();
}