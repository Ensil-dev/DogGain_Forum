export function createProfileImage(
    letter: string = 'A',
    backgroundColor: string = '#888',
): string {
    const canvas = document.createElement('canvas');
    const size = 40; // reduced size to shorten data URL
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(letter.charAt(0), size / 2, size / 2);
    // return jpeg data to keep the string short
    return canvas.toDataURL('image/jpeg', 0.7);
}
