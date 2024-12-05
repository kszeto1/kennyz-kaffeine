export async function fetchProducts() {
    const res = await fetch('http://localhost:3000/api/products', {
        cache: 'no-store',
        next: {
            revalidate: 3600,
        }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch productss');
    }
    return res.json();
}