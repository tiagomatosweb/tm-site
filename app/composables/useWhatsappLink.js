export const WHATSAPP_DEFAULT_MESSAGE = 'Olá Tiago! Tenho uma dúvida sobre o curso.'

export function useWhatsappLink(text = WHATSAPP_DEFAULT_MESSAGE) {
  const { public: { whatsappPhone } } = useRuntimeConfig()
  const digits = String(whatsappPhone ?? '').replace(/\D/g, '')

  if (!digits) {
    return '#'
  }

  const url = new URL(`https://wa.me/${digits}`)

  if (text) {
    url.searchParams.set('text', text)
  }

  return url.toString()
}
