export const ferNumber = "5493426396318";
export const ariNumber = "5493426398483";
export const confirmMessage = "Confirmo mi asistencia";

export function createWhatsappLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURI(message)}`;
}
