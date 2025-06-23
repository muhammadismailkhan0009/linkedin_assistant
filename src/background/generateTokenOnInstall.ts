export async function generateToken(secret: string, installId: string): Promise<string> {
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
        "raw",
        enc.encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );

    const signature = await crypto.subtle.sign("HMAC", key, enc.encode(installId));
    return [...new Uint8Array(signature)].map(b => b.toString(16).padStart(2, '0')).join('');
}
